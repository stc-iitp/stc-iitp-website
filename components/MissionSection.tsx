const MissionSection = () => {
  return (
    <section className="py-12 md:py-16 max-w-5xl mx-auto px-4 md:px-8">
      <p className="font-[family-name:var(--font-space-mono)] font-normal text-[10px] tracking-[5px] text-white uppercase text-center mb-8">
        MISSION // 01
      </p>
      <h2 className="text-white text-center font-light text-3xl md:text-5xl leading-tight md:leading-[48px] mb-8 md:mb-12 tracking-[0px] font-[family-name:var(--font-inter)]">
        We engineer the frameworks that empower the next generation of digital architects to build resilient systems.
      </h2>
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-8">

        <div>
          <p className="font-[family-name:var(--font-space-mono)] font-bold text-[10px] tracking-[1px] text-[#A1A1AA] uppercase mb-4">
            STRATEGY
          </p>
          <p className="font-[family-name:var(--font-inter)] font-normal text-[14px] leading-[22.75px] text-[#A1A1AA]">
            Prioritizing modularity and efficiency in every layer of our educational stack.
          </p>
        </div>

        <div>
          <p className="font-[family-name:var(--font-space-mono)] font-bold text-[10px] tracking-[1px] text-[#A1A1AA] uppercase mb-4">
            VISION
          </p>
          <p className="font-[family-name:var(--font-inter)] font-normal text-[14px] leading-[22.75px] text-[#A1A1AA]">
            Envisioning a future where technology is both seamless and structurally sound.
          </p>
        </div>

      </div>
    </section>
  );
};

export default MissionSection;