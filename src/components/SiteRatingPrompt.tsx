import { useEffect, useRef, useState } from 'react';
import { Check, ChevronLeft, MessageSquare, Star, X } from 'lucide-react';
import {
  hasRatingPromptSessionSeen,
  incrementRatingPromptPageViews,
  markRatingPromptSessionSeen,
  setRatingPromptState,
  shouldSuppressRatingPrompt,
} from '../lib/rating-prompt-storage';

const MIN_ENGAGEMENT_DELAY_MS = 8000;
const PAGE_VIEWS_TRIGGER = 2;
const SCROLL_TRIGGER_RATIO = 0.45;
const TIME_TRIGGER_MS = 45000;
const HIDE_ANIMATION_MS = 260;
const THANK_YOU_AUTO_CLOSE_MS = 2400;

const STAR_LABELS = ['محتاج تحسين', 'مقبول', 'جيد', 'ممتاز', 'تجربة رائعة'];

function getScrollRatio() {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  if (total <= 0) {
    return 0;
  }

  return window.scrollY / total;
}

export default function SiteRatingPrompt() {
  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isEligible, setIsEligible] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const minDelayTimerRef = useRef<number | null>(null);
  const engagementTimerRef = useRef<number | null>(null);
  const revealTimerRef = useRef<number | null>(null);
  const hideTimerRef = useRef<number | null>(null);
  const closeTimerRef = useRef<number | null>(null);

  const activeLabel =
    STAR_LABELS[Math.max(hoverRating, selectedRating) - 1] ?? 'اختار تقييمك';

  const clearTimer = (ref: { current: number | null }) => {
    if (ref.current !== null) {
      window.clearTimeout(ref.current);
      ref.current = null;
    }
  };

  const clearFrame = (ref: { current: number | null }) => {
    if (ref.current !== null) {
      window.cancelAnimationFrame(ref.current);
      ref.current = null;
    }
  };

  const hidePrompt = () => {
    setIsVisible(false);
    clearTimer(hideTimerRef);
    hideTimerRef.current = window.setTimeout(() => {
      setIsRendered(false);
      setIsSubmitted(false);
      clearTimer(hideTimerRef);
    }, HIDE_ANIMATION_MS);
  };

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    if (hasRatingPromptSessionSeen() || shouldSuppressRatingPrompt()) {
      return;
    }

    const views = incrementRatingPromptPageViews();
    if (views >= PAGE_VIEWS_TRIGGER) {
      window.setTimeout(() => {
        setIsEligible(true);
      }, 0);
    }

    const onScroll = () => {
      if (getScrollRatio() >= SCROLL_TRIGGER_RATIO) {
        setIsEligible(true);
      }
    };

    onScroll();

    minDelayTimerRef.current = window.setTimeout(() => {
      setIsReady(true);
      minDelayTimerRef.current = null;
    }, MIN_ENGAGEMENT_DELAY_MS);

    engagementTimerRef.current = window.setTimeout(() => {
      setIsEligible(true);
      engagementTimerRef.current = null;
    }, TIME_TRIGGER_MS);

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimer(minDelayTimerRef);
      clearTimer(engagementTimerRef);
      clearFrame(revealTimerRef);
      clearTimer(hideTimerRef);
      clearTimer(closeTimerRef);
    };
  }, []);

  useEffect(() => {
    if (!isReady || !isEligible || isRendered || hasRatingPromptSessionSeen() || shouldSuppressRatingPrompt()) {
      return;
    }

    revealTimerRef.current = window.requestAnimationFrame(() => {
      markRatingPromptSessionSeen();
      setIsRendered(true);
      setIsVisible(true);
      revealTimerRef.current = null;
    });

    return () => {
      if (revealTimerRef.current !== null) {
        clearFrame(revealTimerRef);
      }
    };
  }, [isEligible, isReady, isRendered]);

  const suppressAndHide = (action: 'later' | 'dismissed') => {
    setRatingPromptState({
      action,
      timestamp: Date.now(),
    });
    clearTimer(closeTimerRef);
    hidePrompt();
  };

  const handleSubmit = () => {
    if (selectedRating < 1) {
      return;
    }

    setRatingPromptState({
      action: 'rated',
      timestamp: Date.now(),
      rating: selectedRating,
    });
    setIsSubmitted(true);

    clearTimer(closeTimerRef);
    closeTimerRef.current = window.setTimeout(() => {
      hidePrompt();
      closeTimerRef.current = null;
    }, THANK_YOU_AUTO_CLOSE_MS);
  };

  useEffect(() => {
    return () => {
      clearTimer(minDelayTimerRef);
      clearTimer(engagementTimerRef);
      clearFrame(revealTimerRef);
      clearTimer(hideTimerRef);
      clearTimer(closeTimerRef);
    };
  }, []);

  if (!isRendered) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center p-3 sm:inset-auto sm:bottom-6 sm:left-6 sm:justify-start sm:p-0">
      <div
        className={[
          'relative w-full max-w-[calc(100vw-1.5rem)] overflow-hidden border border-[#d6b25e]/30 bg-[linear-gradient(180deg,rgba(255,250,239,0.98),rgba(250,243,225,0.96))] text-[#261b11] shadow-[0_28px_90px_rgba(7,22,20,0.28)] backdrop-blur-xl transition-all duration-300 ease-out motion-reduce:transition-none sm:w-[390px] sm:max-w-none sm:rounded-[28px]',
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0 sm:translate-y-4',
          'rounded-t-[28px] sm:rounded-[28px]',
        ].join(' ')}
        role="dialog"
        aria-modal="false"
        aria-labelledby="site-rating-title"
        aria-describedby="site-rating-description"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,178,94,0.16),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(15,163,127,0.08),transparent_34%)]" />

        <div className="relative">
          <div className="flex items-start justify-between gap-3 px-4 pb-2 pt-4 sm:px-5 sm:pt-5">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#d6b25e]/25 bg-white/80 text-[#0fa37f] shadow-[0_10px_22px_rgba(95,78,28,0.08)]">
                <MessageSquare className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7f6c48]">تجربة الموقع</p>
                <h2 id="site-rating-title" className="text-lg font-black leading-7 text-[#20160d]">
                  إيه رأيك في تجربتك مع دليل السبحي؟
                </h2>
              </div>
            </div>

            <button
              type="button"
              onClick={() => suppressAndHide('dismissed')}
              className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d6b25e]/20 bg-white/90 text-[#6e5c3a] transition hover:border-[#d6b25e]/40 hover:text-[#20160d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d6b25e]"
              aria-label="إغلاق"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="px-4 pb-4 sm:px-5 sm:pb-5">
            {isSubmitted ? (
              <div className="rounded-[24px] border border-[#c8dcbc] bg-[#f5fbf6] p-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#0fa37f]/10 text-[#0c8a6b]">
                  <Check className="h-6 w-6" />
                </div>
                <p className="text-lg font-black text-[#0e2f24]">شكرًا لتقييمك ❤️</p>
                <p className="mt-2 text-sm leading-6 text-[#54715d]">
                  رأيك هيساعدنا نطوّر التجربة.
                </p>
              </div>
            ) : (
              <>
                <p id="site-rating-description" className="text-sm leading-6 text-[#5e513d]">
                  تقييمك بيساعدنا نحسّن تجربة الخدمات والعقارات والإيجارات للزوار.
                </p>

                <div className="mt-4 rounded-[24px] border border-white/60 bg-white/70 p-4 shadow-[0_12px_26px_rgba(95,78,28,0.06)]">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-[#4a3a25]">{activeLabel}</p>
                    <span className="text-xs text-[#8a795f]">{selectedRating ? `${selectedRating}/5` : '0/5'}</span>
                  </div>

                  <div className="mt-3 flex items-center justify-between gap-1 sm:gap-2">
                    {Array.from({ length: 5 }, (_, index) => {
                      const value = index + 1;
                      const isActive = value <= (hoverRating || selectedRating);
                      return (
                        <button
                          key={value}
                          type="button"
                          className="group flex min-w-0 flex-1 flex-col items-center gap-1 rounded-2xl px-1 py-2 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d6b25e]"
                          onClick={() => setSelectedRating(value)}
                          onMouseEnter={() => setHoverRating(value)}
                          onMouseLeave={() => setHoverRating(0)}
                          aria-label={`${value} نجوم`}
                        >
                          <Star
                            className={[
                              'h-7 w-7 transition duration-200',
                              isActive ? 'fill-[#d6b25e] text-[#d6b25e]' : 'text-[#d2c6b0]',
                            ].join(' ')}
                          />
                          <span className="text-[11px] font-medium leading-4 text-[#75644a]">{value}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {STAR_LABELS.map((label, index) => (
                      <span
                        key={label}
                        className={[
                          'inline-flex rounded-full px-3 py-1 text-[11px] font-medium transition',
                          (hoverRating || selectedRating) === index + 1
                            ? 'bg-[#0fa37f]/12 text-[#0c8a6b]'
                            : 'bg-[#f4efe1] text-[#8c7955]',
                        ].join(' ')}
                      >
                        {label}
                      </span>
                    ))}
                  </div>

                  <label className="mt-4 block">
                    <span className="mb-2 block text-sm font-semibold text-[#4a3a25]">ملاحظة إضافية</span>
                    <textarea
                      value={feedback}
                      onChange={(event) => setFeedback(event.target.value)}
                      placeholder="اكتب ملاحظتك باختصار... اختياري"
                      rows={3}
                      maxLength={500}
                      className="w-full resize-none rounded-[18px] border border-[#e5d7b8] bg-white/90 px-4 py-3 text-sm leading-6 text-[#24170d] outline-none transition placeholder:text-[#9d8d74] focus:border-[#d6b25e] focus:ring-2 focus:ring-[#d6b25e]/25"
                    />
                  </label>
                </div>

                <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={selectedRating < 1}
                    className="inline-flex h-12 flex-1 items-center justify-center rounded-2xl bg-[#0b1a17] px-4 text-sm font-bold text-white shadow-[0_14px_30px_rgba(7,22,20,0.24)] transition hover:-translate-y-0.5 hover:bg-[#06110f] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                  >
                    إرسال التقييم
                  </button>
                  <button
                    type="button"
                    onClick={() => suppressAndHide('later')}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-[#d6b25e]/25 bg-white/80 px-4 text-sm font-bold text-[#5d4d31] transition hover:border-[#d6b25e]/40 hover:bg-white"
                  >
                    لاحقًا
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
