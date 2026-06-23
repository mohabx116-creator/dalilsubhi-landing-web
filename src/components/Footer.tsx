import { Link } from 'react-router-dom';
import dalilSubhiLogo from '../assets/dalil-subhi-logo.jpg';
import { FACEBOOK_GROUP_URL, MAIN_URL, OWNERS_URL, RENTALS_URL, SERVICES_URL, WHATSAPP_GROUP_URL } from '../lib/config/links';

export default function Footer() {
  return (
    <footer className="border-t border-[#0fa37f]/10 bg-white/55 pt-14 pb-8 backdrop-blur-[4px] sm:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="mb-5 flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0fa37f]"
            >
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-gray-100 shadow-sm">
                <img src={dalilSubhiLogo} alt="Ø¯Ù„ÙŠÙ„ Ø§Ù„Ø³Ø¨Ø­ÙŠ" className="h-full w-full object-contain" />
              </div>
              <span className="text-2xl font-black text-[#071614]">Ø¯Ù„ÙŠÙ„ Ø§Ù„Ø³Ø¨Ø­ÙŠ</span>
            </Link>
            <p className="max-w-md text-base leading-8 text-gray-600">
              Ù…Ù†ØµØ© Ø¢Ù…Ù†Ø© Ù„Ø¬Ù…ÙŠØ¹ Ø¹Ù‚Ø§Ø±Ø§Øª ÙˆØ®Ø¯Ù…Ø§Øª Ø§Ù„Ù…Ù†Ø·Ù‚Ø©.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-bold text-[#071614]">Ø±ÙˆØ§Ø¨Ø· Ø³Ø±ÙŠØ¹Ø©</h3>
            <ul className="space-y-3 text-sm font-medium leading-7 text-gray-600">
              <li>
                <a href={MAIN_URL} className="transition hover:text-[#0fa37f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0fa37f]">
                  Ø§Ù„ØµÙØ­Ø© Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©
                </a>
              </li>
              <li>
                <a href={SERVICES_URL} className="transition hover:text-[#0fa37f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0fa37f]">
                  Ø®Ø¯Ù…Ø§Øª Ø§Ù„Ù…Ù†Ø·Ù‚Ø©
                </a>
              </li>
              <li>
                <a href={RENTALS_URL} className="transition hover:text-[#0fa37f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0fa37f]">
                  Ø§Ù„Ø¥ÙŠØ¬Ø§Ø±Ø§Øª
                </a>
              </li>
              <li>
                <a href={OWNERS_URL} className="transition hover:text-[#0fa37f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0fa37f]">
                  Ø£Ø¹Ù„Ù† Ø¹Ù† ÙˆØ­Ø¯ØªÙƒ
                </a>
              </li>
              <li>
                <Link to="/publishing-policy" className="transition hover:text-[#0fa37f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0fa37f]">
                  Ø³ÙŠØ§Ø³Ø© Ø§Ù„Ù†Ø´Ø± ÙˆØ§Ù„Ø¥Ø¹Ù„Ø§Ù†
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-bold text-[#071614]">ØªÙˆØ§ØµÙ„ Ù…Ø¹Ù†Ø§</h3>
            <ul className="space-y-3 text-sm font-medium leading-7 text-gray-600">
              <li>
                <a
                  href={WHATSAPP_GROUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#25D366] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]"
                >
                  Ø®Ø¯Ù…Ø© Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡
                </a>
              </li>
              <li>
                <a
                  href={FACEBOOK_GROUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#1877F2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1877F2]"
                >
                  Ø¬Ø±ÙˆØ¨ Ø§Ù„ÙÙŠØ³ Ø¨ÙˆÙƒ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6 text-center text-sm text-gray-500 sm:mt-16 sm:pt-8">
          <p>&copy; {new Date().getFullYear()} Ø¯Ù„ÙŠÙ„ Ø§Ù„Ø³Ø¨Ø­ÙŠ. Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø­Ù‚ÙˆÙ‚ Ù…Ø­ÙÙˆØ¸Ø©.</p>
        </div>
      </div>
    </footer>
  );
}
