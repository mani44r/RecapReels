import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#030303] text-neutral-400 border-t border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Recap<span className="bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent">Reels</span>
              </h3>
            </Link>
            <p className="text-sm sm:text-base leading-relaxed text-neutral-500 max-w-md font-light">
              Elevating brands through cinematic, high-converting short-form video. The premier choice for startups and agencies serious about growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide text-sm uppercase text-neutral-300">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/services" className="hover:text-violet-400 transition-colors duration-300 font-light text-sm">
                  Capabilities & Services
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-violet-400 transition-colors duration-300 font-light text-sm">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-violet-400 transition-colors duration-300 font-light text-sm">
                  The Agency
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-violet-400 transition-colors duration-300 font-light text-sm">
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide text-sm uppercase text-neutral-300">Direct Inquiries</h4>
            <ul className="space-y-4 font-light text-sm">
              <li>
                <a href="mailto:recapreelsbusiness@gmail.com" className="hover:text-violet-400 transition-colors duration-300 block break-all">
                  recapreelsbusiness@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+916304583037" className="hover:text-violet-400 transition-colors duration-300">
                  +91 630-458-3037
                </a>
              </li>
              <li className="pt-4">
                <p className="text-neutral-600 text-xs">Based globally, delivering everywhere.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 sm:mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-light text-neutral-600 text-center sm:text-left">
          <p>&copy; {new Date().getFullYear()} RecapReels Studio. All rights reserved.</p>
          <div className="flex gap-4">
             <Link href="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</Link>
             <Link href="#" className="hover:text-neutral-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
