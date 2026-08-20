"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import {
  m,
  LazyMotion,
  domAnimation,
} from "framer-motion";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

const minasans = localFont({
  src: "../../public/fonts/Minasans.ttf",
  variable: "--font-minasans",
  display: "swap",
});

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  objectFit?: "cover" | "contain";
  objectPosition?: string;
}

const ALL_TEAM_DATA: Record<string, { faculty: TeamMember[]; students: TeamMember[] }> = {
  "2021-22": {
    faculty: [
      {
        name: "Dr. Sujoy Kumar Samanta",
        role: "PIC Technical Affairs",
        image: "/team/2021-22/Dr._Sujoy_Kumar_Samanta_-_PIC_Technical_Affairs.jpg",
        objectPosition: "top",
      },
    ],
    students: [
      {
        name: "Satyam Shukla",
        role: "General Secretary, Technical Affairs",
        image: "/team/2021-22/Satyam_Shukla_-_General_Secretary_Technical_Affairs.jpg",
      },
      {
        name: "Anuj Kumar Yadav",
        role: "Technical Secretary, Senior Year",
        image: "/team/2021-22/Anuj_Kumar_Yadav_-_Technical_Secretary_Senior_Year.jpg",
      },
      {
        name: "Shubham Kumar",
        role: "Technical Secretary, Junior Year",
        image: "/team/2021-22/Shubham_Kumar_-_Technical_Secretary_Junior_Year.jpg",
      },
      {
        name: "Rishikesh Devanathan",
        role: "Technical Secretary, Sophomore Year",
        image: "/team/2021-22/Rishikesh_Devanathan_-_Technical_Secretary_Sophomore_Year.jpg",
      },
      {
        name: "Kalpana Bishnoi",
        role: "Technical Secretary, UG Girls",
        image: "/team/2021-22/Kalpana_Bishnoi_-_Technical_Secretary_UG_Girls.jpg",
      },
    ],
  },
  "2022-23": {
    faculty: [
      {
        name: "Dr. Anoop Kumar Gupta",
        role: "PIC Technical Affairs",
        image: "/team/2022-23/Dr._Anoop_Kumar_Gupta_-_PIC_Technical_Affairs.jpg",
        objectPosition: "top",
      },
    ],
    students: [
      {
        name: "Shivam Sahu",
        role: "General Secretary, Technical Affairs",
        image: "/team/2022-23/Shivam_Sahu_-_General_Secretary_Technical_Affairs.jpg",
      },
      {
        name: "Omkar Deshpande",
        role: "Technical Secretary, Senior Year",
        image: "/team/2022-23/Omkar_Deshpande_-_Technical_Secretary_Senior_Year.jpg",
      },
      {
        name: "Rishikesh Devanathan",
        role: "Technical Secretary, Junior Year",
        image: "/team/2022-23/Rishikesh_Devanathan_-_Technical_Secretary_Junior_Year.jpg",
      },
      {
        name: "Harsh Singh",
        role: "Technical Secretary, Sophomore Year",
        image: "/team/2022-23/Harsh_Singh_-_Technical_Secretary_Sophomore_Year.png",
      },
      {
        name: "Anushka Pandey",
        role: "Technical Secretary, UG Girls",
        image: "/team/2022-23/Anushka_Pandey_-_Technical_Secretary_UG_Girls.jpg",
      },
    ],
  },
  "2023-24": {
    faculty: [
      {
        name: "Dr. Bachu Anilkumar",
        role: "PIC Technical Affairs",
        image: "/team/2023-24/Dr._Bachu_Anilkumar_-_PIC_Technical_Affairs.jpg",
        objectPosition: "top",
      },
    ],
    students: [
      {
        name: "Rishikesh Devanathan",
        role: "General Secretary, Technical Affairs",
        image: "/team/2023-24/Rishikesh_Devanathan_-_General_Secretary_Technical_Affairs.jpg",
      },
      {
        name: "Aryan Sahoo",
        role: "Technical Secretary, Junior Year",
        image: "/team/2023-24/Aryan_Sahoo_-_Technical_Secretary_Junior_Year.png",
      },
      {
        name: "Akhand Singh",
        role: "Technical Secretary, Sophomore Year",
        image: "/team/2023-24/Akhand_Singh_-_Technical_Secretary_Sophomore_Year.png",
      },
      {
        name: "Pragya Harsh",
        role: "Technical Secretary, UG Girls",
        image: "/team/2023-24/Pragya_Harsh_-_Technical_Secretary_UG_Girls.jpeg",
      },
    ],
  },
  "2024-25": {
    faculty: [
      {
        name: "Dr. Somanath Pradhan",
        role: "PIC Technical Affairs",
        image: "/team/2024-25/Dr._Somanath_Pradhan_-_PIC_Technical_Affairs.png",
        objectPosition: "top",
      },
    ],
    students: [
      {
        name: "Kirtan Jain",
        role: "General Secretary, Technical Affairs",
        image: "/team/2024-25/Kirtan_Jain_-_General_Secretary_Technical_Affairs.png",
      },
      {
        name: "Harshit Dhankhar",
        role: "Technical Secretary, Senior Year",
        image: "/team/2024-25/Harshit_Dhankhar_-_Technical_Secretary_Senior_Year.png",
      },
      {
        name: "Hemant Chaurasia",
        role: "Technical Secretary, Junior Year",
        image: "/team/2024-25/Hemant_Chaurasia_-_Technical_Secretary_Junior_Year.png",
      },
      {
        name: "Rishu Kumar Singh",
        role: "Technical Secretary, Sophomore Year",
        image: "/team/2024-25/Rishu_Kumar_Singh_-_Technical_Secretary_Sophomore_Year.png",
      },
      {
        name: "Pranjal Chamaria",
        role: "Technical Secretary, UG Girls",
        image: "/team/2024-25/Pranjal_Chamaria_-_Technical_Secretary_UG_Girls.png",
      },
    ],
  },
  "2025-26": {
    faculty: [
      {
        name: "Dr. Arpit Jain",
        role: "PIC Technical Affairs",
        image: "/team/2025-26/Dr._Arpit_Jain_-_PIC_Technical_Affairs.jpeg",
        objectPosition: "top",
      },
    ],
    students: [
      {
        name: "Akhand Singh",
        role: "General Secretary, Technical Affairs",
        image: "/team/2025-26/Akhand_Pratap_Narayan_Singh_-_General_Secretary_Technical_Affairs.jpeg",
      },
      {
        name: "Shivank Goyal",
        role: "Technical Secretary, Junior Year",
        image: "/team/2025-26/Shivank_Goyal_-_Technical_Secretary_Junior_Year.jpeg",
      },
      {
        name: "Manish Kumar",
        role: "Technical Secretary, Sophomore Year",
        image: "/team/2025-26/Manish_Kumar_-_Technical_Secretary_Sophomore_Year.jpeg",
      },
      {
        name: "Disha Vishnu Mulchandani",
        role: "Technical Secretary, UG Girls",
        image: "/team/2025-26/Disha_Vishnu_Mulchandani_-_Technical_Secretary_UG_Girls.jpeg",
      },
    ],
  },
  "2026-27": {
    faculty: [
      {
        name: "Dr. Arpit Jain",
        role: "PIC Technical Affairs",
        image: "/team/2026-27/Dr._Arpit_Jain_-_PIC_Technical_Affairs.jpeg",
        objectPosition: "top",
      },
    ],
    students: [
      {
        name: "Abhitesh Shukla",
        role: "General Secretary, Technical Affairs",
        image: "/team/2026-27/Abhitesh_Shukla_-_General_Secretary_Technical_Affairs.webp",
        linkedin: "https://www.linkedin.com/in/abhitesh-shukla-bb8053294/",
      },
      {
        name: "Shaswat Suman",
        role: "Technical Secretary, Senior Year",
        image: "/team/2026-27/Shaswat_Suman_-_Technical_Secretary_Senior_Year.webp",
        linkedin: "https://www.linkedin.com/in/shaswat-suman-7041a82a0/",
      },
      {
        name: "Ashutosh Kumar",
        role: "Technical Secretary, Sophomore Year",
        image: "/team/2026-27/Ashutosh_Kumar_-_Technical_Secretary_Sophomore_Year.webp",
        linkedin: "https://www.linkedin.com/in/ashutosh-kumar1010/",
      },
    ],
  },
};

export default function TeamPage() {
  const [selectedYear, setSelectedYear] = useState("2026-27");
  const [isOpen, setIsOpen] = useState(false);
  const years = Object.keys(ALL_TEAM_DATA).sort().reverse();
  const currentTeam = ALL_TEAM_DATA[selectedYear];
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <div
        className={`min-h-screen text-white pb-12 ${spaceGrotesk.className} ${minasans.variable}`}
        style={{ background: 'linear-gradient(48.65deg, #00072D 8.63%, #353131 103.98%)' }}
      >
        {/* Hero Section */}
        <section className="relative py-12 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#6BFB9A] opacity-5 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500 opacity-5 blur-[120px] rounded-full"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center min-h-[30vh]">
            <m.h1
              initial={{ opacity: 0, scale: 0.9, filter: "blur(15px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className={`uppercase ${minasans.className}`}
              style={{
                fontWeight: 500,
                fontSize: 'min(333px, 20vw)',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center'
              }}
            >
              TEAM
            </m.h1>
          </div>
        </section>

        {/* Modern Year Dropdown */}
        <div className="container mx-auto px-4 flex justify-end items-center mt-1 mb-6 relative z-40">
          <div className="flex items-center gap-4">
            <span className="text-white/40 uppercase tracking-[0.2em] text-xs font-bold hidden sm:block">Select Year:</span>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-3 px-6 py-3.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl min-w-[180px] justify-between group transition-all duration-300 hover:border-[#6BFB9A]/40 hover:bg-white/10 cursor-pointer"
              >
                <span className="text-sm font-bold uppercase tracking-widest text-[#6BFB9A]">{selectedYear}</span>
                <m.svg animate={{ rotate: isOpen ? 180 : 0 }} className={`w-4 h-4 text-white/40 transition-transform duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </m.svg>
              </button>

              {isOpen && (
                <m.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute right-0 mt-3 w-full bg-[#0F172A]/95 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                >
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => { setSelectedYear(year); setIsOpen(false); }}
                      className={`w-full px-6 py-4 text-left text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 border-b border-white/5 last:border-0 cursor-pointer ${selectedYear === year ? "bg-[#6BFB9A] text-[#00072D]" : "text-white/60 hover:text-[#6BFB9A] hover:bg-white/5"}`}
                    >
                      {year}
                    </button>
                  ))}
                </m.div>
              )}
            </div>
          </div>
        </div>

        {/* Team Sections */}
        <div className="flex flex-col gap-8 relative z-10 px-4">
          <TeamSection title="Professor in Charge" members={currentTeam.faculty} center />
          <TeamSection title="Student Team" members={currentTeam.students} />
        </div>

      </div>
    </LazyMotion>
  );
}

function TeamSection({ title, members, center }: { title: string; members: TeamMember[]; center?: boolean }) {
  return (
    <section className="container mx-auto px-4 py-6">
      <m.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">{title}</h2>
        <div className="h-px flex-grow bg-gradient-to-r from-[#6BFB9A] to-transparent opacity-30"></div>
      </m.div>

      <div className={center ? "flex justify-center" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 sm:gap-8"}>
        {members.map((member, index) => (
          <m.div 
            key={`${member.name}-${index}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.05 }}
            className="w-full flex justify-center"
          >
            <TeamCard member={member} />
          </m.div>
        ))}
      </div>
    </section>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <m.div 
      whileHover={{ y: -10 }}
      className="group relative w-full max-w-[320px] bg-[#1E293B]/50 backdrop-blur-sm border border-white/5 rounded-2xl p-4 transition-all duration-500 hover:border-[#6BFB9A]/30 hover:shadow-[0_0_30px_rgba(107,251,154,0.1)]"
    >
      <div className="relative aspect-square overflow-hidden rounded-xl mb-6 bg-[#0F172A]">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className={`transition-transform duration-700 group-hover:scale-110 ${member.objectFit === "contain" ? "object-contain" : "object-cover"}`}
          style={{ objectPosition: member.objectPosition || "center" }}
          sizes="320px"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2238] via-transparent to-transparent opacity-60"></div>
      </div>

      <div className="text-center relative z-10">
        <h3 className="text-xl font-bold mb-1 group-hover:text-[#6BFB9A] transition-colors duration-300">{member.name}</h3>
        <div className="text-xs sm:text-sm text-gray-400 mb-4 font-medium uppercase tracking-widest leading-tight">
          {member.role.split(',').map((part, i) => (
            <span key={i} className="block">{part.trim()}</span>
          ))}
        </div>

        {/* Social Link Row - MOBILE ACCESSIBILITY FIX */}
        <div className="flex justify-center gap-4 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
          {member.linkedin && (
            <Link href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-[#6BFB9A] hover:text-[#1A2238] transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </Link>
          )}
          {member.github && (
            <Link href={member.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-[#6BFB9A] hover:text-[#1A2238] transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </Link>
          )}
        </div>
      </div>
    </m.div>
  );
}
