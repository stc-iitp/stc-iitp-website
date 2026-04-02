"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0F172A] border-t border-gray-800 text-[#94A3B8] pt-12 lg:pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 flex items-center">
            <Link href="/" className="flex items-center gap-6 w-fit">
              <div className="h-24 w-24 rounded-xl bg-[#1A2238] flex items-center justify-center shrink-0">
                <span className="text-[#6BFB9A] font-bold text-2xl">STC</span>
              </div>
              <span className="text-[4rem] font-bold tracking-tight text-white uppercase translate-y-1">STC</span>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 lg:col-span-2 lg:pl-8">
            <h3 className="text-[#86D898] font-bold uppercase tracking-wider mb-6 text-sm">QUICK LINKS</h3>
            <ul className="grid grid-cols-2 grid-rows-4 grid-flow-col gap-y-3 gap-x-12 w-fit text-sm">
              {[
                { label: "Home",          href: "/" },
                { label: "Summer Sprint", href: "/summer-sprint" },
                { label: "Hello World",   href: "/hello-world" },
                { label: "ICTC",          href: "/ictc" },
                { label: "Inter IIT",     href: "/inter-iit" },
                { label: "Clubs",         href: "/clubs" },
                { label: "Team",          href: "/team" },
                { label: "Developers",    href: "/developers" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className={`inline-block transition-colors duration-300 ${pathname === href ? "text-[#6BFB9A]" : "hover:text-[#6BFB9A]"}`}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location + Socials */}
          <div className="col-span-1">
            <div className="flex items-start gap-4 mb-10">
              <svg width={24} height={24} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="shrink-0 text-[#6BFB9A]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span className="text-sm leading-relaxed">STC Office, Admin Building,<br /><span className="whitespace-nowrap">IIT Patna</span></span>
            </div>

            <h3 className="text-[#86D898] font-bold uppercase tracking-wider mb-6 text-sm">SOCIALS</h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/stc.iitp" className="w-10 h-10 shrink-0 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#6BFB9A] hover:text-[#0F172A] transition-all duration-300">
                <svg width={20} height={20} fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
              <a href="https://www.facebook.com/stc.iitp" className="w-10 h-10 shrink-0 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#6BFB9A] hover:text-[#0F172A] transition-all duration-300">
                <svg width={20} height={20} fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="https://x.com/stc_iitp" className="w-10 h-10 shrink-0 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#6BFB9A] hover:text-[#0F172A] transition-all duration-300">
                <svg width={20} height={20} fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="mailto:stc@iitp.ac.in" className="w-10 h-10 shrink-0 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#6BFB9A] hover:text-[#0F172A] transition-all duration-300">
                <svg width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
              </a>
            </div>
          </div>

        </div>

        <div className="mt-8 pt-4 border-t border-gray-800 flex justify-center items-center text-xs w-full">
          <p className="text-center">© {currentYear} Student Technical Council, IIT Patna. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
