export interface STCEvent {
  id: number;
  name: string;
  club: string;
  dates: string;
  image: string;
}

export const eventsByYear: Record<string, STCEvent[]> = {
  "2025": [
    { id: 1,  name: "ROSReboot",                  club: "Team Phoenix",       dates: "14th June – 14th July",  image: "/events/event1.jpg" },
    { id: 2,  name: "NSOC",                        club: "NJACK",              dates: "14th June – 20th July",  image: "/events/event2.jpg" },
    { id: 3,  name: "Logic Forge",                 club: "Sparkonics",         dates: "15th June – 15th July",  image: "/events/event3.jpg" },
    { id: 4,  name: "Inside the Blackbox",         club: "RnA",                dates: "21st June – 24th June",  image: "/events/event1.jpg" },
    { id: 5,  name: "Mind over Math",              club: "OptiMatX",           dates: "22nd June – 5th July",   image: "/events/event2.jpg" },
    { id: 6,  name: "Quant Quest",                 club: "TIC",                dates: "25th June – 1st July",   image: "/events/event3.jpg" },
    { id: 7,  name: "Code Fin",                    club: "Finance Club",       dates: "25th June – 8th July",   image: "/events/event1.jpg" },
    { id: 8,  name: "Wonda Vision",                club: "Tinkerer's Lab",     dates: "25th June – 10th July",  image: "/events/event2.jpg" },
    { id: 9,  name: "Cosmic Loom",                 club: "AP Club",            dates: "30th June – 14th July",  image: "/events/event3.jpg" },
    { id: 10, name: "Cringe Quench",               club: "MatES",              dates: "1st July – 7th July",    image: "/events/event1.jpg" },
    { id: 11, name: "Design Hub",                  club: "SCME",               dates: "1st July – 7th July",    image: "/events/event2.jpg" },
    { id: 12, name: "Quant Circuit Challenge",     club: "QTC",                dates: "1st July – 21st July",   image: "/events/event3.jpg" },
    { id: 13, name: "Avogadro's Playground",       club: "ChESSx",             dates: "2nd July – 4th July",    image: "/events/event1.jpg" },
    { id: 14, name: "Cross & Beyond",              club: "ACE",                dates: "6th July – 9th July",    image: "/events/event2.jpg" },
    { id: 15, name: "Brandstorm",                  club: "E-Cell & MoodBoard", dates: "1st July – 8th July",    image: "/events/event3.jpg" },
  ],
  "2026": [],
};
