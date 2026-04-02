"use client";

import { useState, useEffect, useRef } from "react";

const allEvents = {
  2025: [
    { name: "ROSReboot",                club: "Team Phoenix",              dates: "14th June – 14th July" },
    { name: "NSOC",                      club: "NJACK",                     dates: "14th June – 20th July" },
    { name: "Logic Forge",               club: "Sparkonics",                dates: "15th June – 15th July" },
    { name: "Inside the Blackbox",       club: "RnA",                       dates: "21st June – 24th June" },
    { name: "Mind over Math",            club: "OptiMatX",                  dates: "22nd June – 5th July"  },
    { name: "Quant Quest",               club: "TIC",                       dates: "25th June – 1st July"  },
    { name: "Code Fin",                  club: "Finance Club",              dates: "25th June – 8th July"  },
    { name: "Wonda Vision",              club: "Tinkerer's Lab",            dates: "25th June – 10th July" },
    { name: "Cosmic Loom",               club: "AP Club",                   dates: "30th June – 14th July" },
    { name: "Cringe Quench",             club: "MatES",                     dates: "1st July – 7th July"   },
    { name: "Design Hub",                club: "SCME",                      dates: "1st July – 7th July"   },
    { name: "Quant Circuit Challenge",   club: "QTC",                       dates: "1st July – 21st July"  },
    { name: "Avogadro's Playground",     club: "ChESSx",                    dates: "2nd July – 4th July"   },
    { name: "Cross & Beyond",            club: "ACE",                       dates: "6th July – 9th July"   },
    { name: "Brandstorm",                club: "E-Cell & MoodBoard",        dates: "1st July – 8th July"   },
  ],
  2026: [],
};

const years = [2025, 2026];

const DropdownArrow = () => (
  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.38804 -9.34601e-05L13.6147 -9.34601e-05C14.0579 -0.000735283 14.4923 0.124154 14.8674 0.360118C15.2426 0.596083 15.5433 0.933474 15.7347 1.33324C15.9587 1.80756 16.045 2.33528 15.9837 2.85626C15.9225 3.37724 15.716 3.87053 15.388 4.27991L9.77471 11.0799C9.55442 11.3341 9.28206 11.5379 8.9761 11.6776C8.67014 11.8173 8.33772 11.8896 8.00137 11.8896C7.66502 11.8896 7.3326 11.8173 7.02664 11.6776C6.72068 11.5379 6.44833 11.3341 6.22804 11.0799L0.614705 4.27991C0.286697 3.87053 0.080286 3.37724 0.0189943 2.85626C-0.0422974 2.33528 0.0439968 1.80756 0.268041 1.33324C0.45943 0.933474 0.760118 0.596083 1.1353 0.360118C1.51049 0.124154 1.94482 -0.000735283 2.38804 -9.34601e-05Z" fill="#F6F6F6"/>
  </svg>
);

function useScrollReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

export default function EventTable() {
  const [selectedYear, setSelectedYear] = useState(2025);
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const [titleRef, titleVisible] = useScrollReveal(0.1);
  const [headerRef, headerVisible] = useScrollReveal(0.1);
  const events = allEvents[selectedYear] || [];

  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (wrapperRef.current && !wrapperRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <>
      <style>{`
        @keyframes dropFade {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>

        {/* TITLE + DROPDOWN */}
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
          <h2
            ref={titleRef}
            style={{
              fontFamily: "'Roboto', sans-serif", fontWeight: 800, fontSize: "36px",
              lineHeight: "100%", textTransform: "capitalize", color: "#FFFFFF", margin: 0,
              opacity: titleVisible ? 1 : 0,
              transform: titleVisible ? "translateX(0px)" : "translateX(80px)",
              transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            Event Time Line
          </h2>

          <div ref={wrapperRef} style={{ position: "relative", zIndex: 1000 }}>
            <button
              onClick={() => setOpen((o) => !o)}
              style={{
                width: "161px", height: "44px",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                paddingLeft: "21px", paddingRight: "21px",
                borderRadius: "12px", border: "1px solid #FFFFFF",
                background: open ? "rgba(255,255,255,0.08)" : "transparent",
                cursor: "pointer", boxSizing: "border-box", transition: "background 0.2s",
              }}
            >
              <span style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 600, fontSize: "16px", color: "#F6F6F6" }}>{selectedYear}</span>
              <div style={{ width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center", transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s ease" }}>
                <DropdownArrow />
              </div>
            </button>

            {open && (
              <div style={{ position: "absolute", top: "calc(100% + 6px)", right: 0, width: "161px", background: "#0a1628", border: "1px solid rgba(255,255,255,0.4)", borderRadius: "12px", overflow: "hidden", zIndex: 9999, boxShadow: "0 12px 40px rgba(0,0,0,0.8)", animation: "dropFade 0.2s ease forwards" }}>
                {years.map((yr, i) => (
                  <div
                    key={yr}
                    onClick={() => { setSelectedYear(yr); setOpen(false); }}
                    style={{
                      padding: "12px 21px",
                      fontFamily: "'Roboto', sans-serif", fontWeight: 600, fontSize: "16px",
                      color: yr === selectedYear ? "#FFFFFF" : "rgba(255,255,255,0.55)",
                      cursor: "pointer",
                      background: yr === selectedYear ? "rgba(255,255,255,0.1)" : "transparent",
                      borderBottom: i < years.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                      transition: "background 0.15s, color 0.15s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = yr === selectedYear ? "rgba(255,255,255,0.1)" : "transparent"; e.currentTarget.style.color = yr === selectedYear ? "#FFFFFF" : "rgba(255,255,255,0.55)"; }}
                  >
                    {yr}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* HEADER ROW */}
        <div
          ref={headerRef}
          style={{
            width: "100%", height: "53px",
            display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
            alignItems: "center",
            backgroundColor: "#E8EAF6",
            borderTopLeftRadius: "20px", borderTopRightRadius: "20px",
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateX(0px)" : "translateX(80px)",
            transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
          }}
        >
          {["EVENT", "CLUB", "DATES"].map((h) => (
            <div key={h} style={{ height: "53px", padding: "16.5px 16px", display: "flex", alignItems: "center", justifyContent: "center", boxSizing: "border-box" }}>
              <span style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 800, fontSize: "15px", letterSpacing: "0.05em", textTransform: "uppercase", color: "#000000", textAlign: "center" }}>{h}</span>
            </div>
          ))}
        </div>

        {/* DATA ROWS */}
        {events.length > 0 ? (
          events.map((ev, i) => <AnimatedRow key={ev.name} ev={ev} index={i} />)
        ) : (
          <div style={{ width: "100%", padding: "60px 0", display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.3)", fontFamily: "'Roboto', sans-serif", fontSize: "16px" }}>
            No events announced for {selectedYear} yet
          </div>
        )}
      </div>
    </>
  );
}

function AnimatedRow({ ev, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const delay = `${Math.min(index * 0.045, 0.4)}s`;

  return (
    <div
      ref={ref}
      style={{
        width: "100%", height: "53px",
        display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
        alignItems: "center",
        borderBottom: "1px solid #FFFFFF",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0px)" : "translateX(70px)",
        transition: `background 0.15s, opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}`,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.04)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
    >
      <div style={{ padding: "16.5px 16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontSize: "16px", color: "#FFFFFF", textAlign: "center" }}>{ev.name}</span>
      </div>
      <div style={{ padding: "16.5px 16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400, fontSize: "16px", color: "rgba(255,255,255,0.75)", textAlign: "center" }}>{ev.club}</span>
      </div>
      <div style={{ padding: "16.5px 16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 600, fontSize: "16px", color: "rgba(255,255,255,0.9)", textAlign: "center" }}>{ev.dates}</span>
      </div>
    </div>
  );
}
