import svgPaths from "./svg-dz9fmltvm5";
import imgCarasoul from "./8a807b5e371d15d2479561018912511f7fc17fdb.png";
import imgHeroSection from "./5e2e9bb69a2352fdbca70be9b1afa76667c654be.png";
import imgHeroSection1 from "./a83d52addb39cfd957a69a3cbbd65888a47e5f82.png";
import imgHeroSection2 from "./3fbbadffdb59ad2cf7c3ff262f90ef8500776879.png";
import imgHeroSection3 from "./b3ee254810031e9b3c043e5cbae2fec0848b43ea.png";
import imgSectionAboutUs from "./1d812b9d2e653fa8ca6bdc8eae2ac8d70ed16132.png";
import imgElegantEventSetup from "./c50cfccb20b89733ab415c7a8e7ed264f217647b.png";
import imgSectionOurService from "./f0db36ed224616df70f424fe8f26ac1ad4ac826b.png";
import imgCards from "./839aa8e7a83b9048f683ff1e239efe86dd0a0504.png";
import imgCards1 from "./7e42983a210483274aeeaa66aa11d1af4ce96c75.png";
import imgCards2 from "./fc217c221e771b9769b028a1653cd59a883ad2bb.png";
import imgCards3 from "./e31c109163ea3aea16ce888ce1b3e5169267c16e.png";
import imgLogoMarkSmall from "./c4451b3f63ecff4a3efbc8b47afad2d9e3866ef9.png";
import imgImageHappyMomentsLogo from "./f5827fc53beb6a882da4c0b971bc828d60f71ba0.png";
import imgHomeHero1 from "../../assets/Home-hero/Hero 1.png";
import imgHomeHero2 from "../../assets/Home-hero/Hero 2.jpg";
import imgHomeHero3 from "../../assets/Home-hero/Hero 3.png";
import imgHomeHero4 from "../../assets/Home-hero/Hero 4.png";
import { useEffect, useRef, useState } from "react";
type LinkProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

function Link({ className, property1 = "Default" }: LinkProps) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || `relative rounded-[30px] ${isVariant2 ? "" : "bg-gradient-to-r from-[#f97316] to-[#f95316]"}`}>
      <div aria-hidden className="absolute border border-[#f97316] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="content-stretch flex items-start px-[30px] py-[10px] relative size-full">
        <p className={`[word-break:break-word] font-["Inter:Semi_Bold",sans-serif] font-semibold leading-[20.15px] not-italic relative shrink-0 text-[13px] whitespace-nowrap ${isVariant2 ? "text-black" : "text-[#fffdf9]"}`}>Call Us →</p>
      </div>
    </div>
  );
}
type Frame17Props = {
  className?: string;
  property1?: "Default" | "Variant2";
};

function Frame17({ className, property1 = "Default" }: Frame17Props) {
  return (
    <button
      type="button"
      aria-label="View our services"
      onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" })}
      className={`${className || "relative w-[65.335px]"} cursor-pointer border-0 bg-transparent p-0 text-left`}
    >
      <div className="content-stretch flex flex-col items-start relative size-full">
        <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Link">
          <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black tracking-[1.4px] whitespace-nowrap">
            <p className="leading-[20px]">Services</p>
          </div>
        </div>
        <div className={`bg-gradient-to-r from-[#f97316] h-[2px] relative shrink-0 to-[#f95316] ${property1 === "Variant2" ? "w-full" : "w-0"}`} />
      </div>
    </button>
  );
}
type FaqProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

function Faq({ className, property1 = "Default" }: FaqProps) {
  const isVariant2 = property1 === "Variant2";
  return (
    <button className={className || `relative ${isVariant2 ? "w-[780px]" : "bg-[#565656] rounded-[20px]"}`}>
      <div className={`size-full ${isVariant2 ? "content-stretch flex flex-col gap-[14px] items-start relative" : "overflow-clip rounded-[inherit]"}`}>
        {property1 === "Default" && (
          <div className="content-stretch flex flex-col gap-[14px] items-start px-[20px] py-[30px] relative size-full">
            <div className="content-stretch flex flex-col h-[49px] items-start pb-[16px] relative shrink-0 w-full" data-name="FAQ Item 1 (Active)">
              <div className="relative shrink-0 w-full" data-name="Button">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-left whitespace-nowrap">
                      <p className="leading-[28px]">Do you provide complete event management services?</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0">
                    <div className="flex-none rotate-180">
                      <div className="content-stretch flex items-center justify-center relative rounded-[9999px] size-[32px]" data-name="Background">
                        <div className="relative shrink-0 size-[16px]" data-name="SVG">
                          <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
                            <g id="SVG">
                              <path d={svgPaths.p194bd00} id="Vector" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-left w-[728px]">
                <p className="leading-[28px]">Yes. We handle everything from event planning and venue setup to decoration, catering, entertainment, and on-site coordination.</p>
              </div>
              <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
                <div className="relative shrink-0 size-[16px]" data-name="SVG">
                  <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
                    <g id="SVG">
                      <path d={svgPaths.p194bd00} id="Vector" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}
        {isVariant2 && (
          <>
            <div className="content-stretch flex flex-col h-[49px] items-start pb-[16px] relative shrink-0 w-full" data-name="FAQ Item 1 (Active)">
              <div className="relative shrink-0 w-full" data-name="Button">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-left whitespace-nowrap">
                      <p className="leading-[28px]">Do you provide complete event management services?</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0">
                    <div className="flex-none rotate-180">
                      <div className="content-stretch flex items-center justify-center relative rounded-[9999px] size-[32px]" data-name="Background">
                        <div className="relative shrink-0 size-[16px]" data-name="SVG">
                          <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
                            <g id="SVG">
                              <path d={svgPaths.p194bd00} id="Vector" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-start relative shrink-0">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] max-w-[566px] not-italic relative shrink-0 text-[#565656] text-[18px] text-left w-[566px]">
                <p className="leading-[28px]">Yes. We handle everything from event planning and venue setup to decoration, catering, entertainment, and on-site coordination.</p>
              </div>
            </div>
          </>
        )}
      </div>
    </button>
  );
}
type Card12CaterersProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

function Card12Caterers({ className, property1 = "Default" }: Card12CaterersProps) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || `relative rounded-[12px] w-[286px] ${isVariant2 ? "bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]" : "bg-gradient-to-r from-[rgba(255,223,26,0.06)] to-[rgba(255,166,0,0.06)]"}`}>
      <div aria-hidden className={`absolute border border-[#ffdf1a] border-solid inset-0 pointer-events-none rounded-[12px] ${isVariant2 ? "" : "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"}`} />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[33px] relative size-full">
          <div className="relative shrink-0" data-name="Margin">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
              <div className="h-[40.018px] relative shrink-0 w-[31.5px]" data-name="Container">
                <svg className="absolute block inset-0 size-full" fill="none" height="40.0176" preserveAspectRatio="none" viewBox="0 0 31.5 40.0176" width="31.5">
                  <g id="Container">
                    <path d={svgPaths.p334ec4c0} fill="url(#paint0_linear_0_622)" id="Symbol" />
                  </g>
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_622" x1="0" x2="31.5" y1="18.5088" y2="18.5088">
                      <stop stopColor="#F97316" />
                      <stop offset="1" stopColor="#F95316" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="relative shrink-0" data-name="Heading 3:margin">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative size-full">
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
                <div className="[word-break:break-word] flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[20px] text-center whitespace-nowrap">
                  <p className="leading-[28px]">Caterers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-[7.14px] relative size-full">
              <div className="[word-break:break-word] flex flex-col font-['Sora:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] text-center whitespace-nowrap">
                <p className="leading-[22.75px] mb-0">We offer a wide range of catering</p>
                <p className="leading-[22.75px] mb-0">options, ensuring your guests</p>
                <p className="leading-[22.75px] mb-0">enjoy exquisite and delicious</p>
                <p className="leading-[22.75px]">meals.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type Card11VideographyProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

function Card11Videography({ className, property1 = "Default" }: Card11VideographyProps) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || `h-[253px] relative rounded-[12px] w-[286px] ${isVariant2 ? "bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]" : "bg-gradient-to-r from-[rgba(255,223,26,0.06)] to-[rgba(255,166,0,0.06)]"}`}>
      <div aria-hidden className={`absolute border border-[#ffdf1a] border-solid inset-0 pointer-events-none rounded-[12px] ${isVariant2 ? "" : "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"}`} />
      <div className="absolute content-stretch flex flex-col items-start left-[122.75px] pb-[16px] top-[33px]" data-name="Margin">
        <div className="h-[31px] relative shrink-0 w-[40.5px]" data-name="Container">
          <svg className="absolute block inset-0 size-full" fill="none" height="31" preserveAspectRatio="none" viewBox="0 0 40.5 31" width="40.5">
            <g id="Container">
              <path d={svgPaths.p19316480} fill="url(#paint0_linear_0_597)" id="Symbol" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_597" x1="0" x2="40.5" y1="14" y2="14">
                <stop stopColor="#F97316" />
                <stop offset="1" stopColor="#F95316" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[82.61px] pb-[12px] top-[89px]" data-name="Heading 3:margin">
        <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
          <div className="[word-break:break-word] flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[20px] text-center whitespace-nowrap">
            <p className="leading-[28px]">Videography</p>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center left-1/2 pl-[6.11px] pr-[6.12px] top-[128.25px]" data-name="Container">
        <div className="[word-break:break-word] flex flex-col font-['Sora:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[22.75px] mb-0">Our videographers expertly</p>
          <p className="leading-[22.75px] mb-0">document every moment, crafting</p>
          <p className="leading-[22.75px]">cinematic videos of your event.</p>
        </div>
      </div>
    </div>
  );
}
type Card10PhotographyProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

function Card10Photography({ className, property1 = "Default" }: Card10PhotographyProps) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || `relative rounded-[12px] w-[286px] ${isVariant2 ? "bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]" : "bg-gradient-to-r from-[rgba(255,223,26,0.06)] to-[rgba(255,166,0,0.06)]"}`}>
      <div aria-hidden className={`absolute border border-[#ffdf1a] border-solid inset-0 pointer-events-none rounded-[12px] ${isVariant2 ? "" : "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"}`} />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[33px] relative size-full">
          <div className="relative shrink-0" data-name="Margin">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
              <div className="h-[35.5px] relative shrink-0 w-[36px]" data-name="Container">
                <svg className="absolute block inset-0 size-full" fill="none" height="35.5" preserveAspectRatio="none" viewBox="0 0 36 35.5" width="36">
                  <g id="Container">
                    <path d={svgPaths.p4e2100} fill="url(#paint0_linear_0_603)" id="Symbol" />
                  </g>
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_603" x1="0" x2="36" y1="16.25" y2="16.25">
                      <stop stopColor="#F97316" />
                      <stop offset="1" stopColor="#F95316" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="relative shrink-0" data-name="Heading 3:margin">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative size-full">
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
                <div className="[word-break:break-word] flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[20px] text-center whitespace-nowrap">
                  <p className="leading-[28px]">Photography</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pl-[24.39px] pr-[24.41px] relative size-full">
              <div className="[word-break:break-word] flex flex-col font-['Sora:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] text-center whitespace-nowrap">
                <p className="leading-[22.75px] mb-0">Our photographers capture</p>
                <p className="leading-[22.75px] mb-0">timeless moments, creating</p>
                <p className="leading-[22.75px] mb-0">beautiful memories that last</p>
                <p className="leading-[22.75px]">forever.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type Card9MakeupArtistProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

function Card9MakeupArtist({ className, property1 = "Default" }: Card9MakeupArtistProps) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || `relative rounded-[12px] w-[286px] ${isVariant2 ? "bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]" : "bg-gradient-to-r from-[rgba(255,223,26,0.06)] to-[rgba(255,166,0,0.06)]"}`}>
      <div aria-hidden className={`absolute border border-[#ffdf1a] border-solid inset-0 pointer-events-none rounded-[12px] ${isVariant2 ? "" : "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"}`} />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[33px] relative size-full">
          <div className="relative shrink-0" data-name="Margin">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
              <div className="h-[40px] relative shrink-0 w-[38.25px]" data-name="Container">
                <svg className="absolute block inset-0 size-full" fill="none" height="40" preserveAspectRatio="none" viewBox="0 0 38.25 40" width="38.25">
                  <g id="Container">
                    <path d={svgPaths.p495dc00} fill="url(#paint0_linear_0_626)" id="Symbol" />
                  </g>
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_626" x1="0" x2="38.25" y1="18.5" y2="18.5">
                      <stop stopColor="#F97316" />
                      <stop offset="1" stopColor="#F95316" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="relative shrink-0" data-name="Heading 3:margin">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative size-full">
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
                <div className="[word-break:break-word] flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[20px] text-center whitespace-nowrap">
                  <p className="leading-[28px]">Makeup Artist</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pl-[11.17px] pr-[11.19px] relative size-full">
              <div className="[word-break:break-word] flex flex-col font-['Sora:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] text-center whitespace-nowrap">
                <p className="leading-[22.75px] mb-0">Our professional makeup artists</p>
                <p className="leading-[22.75px] mb-0">highlight your natural beauty,</p>
                <p className="leading-[22.75px] mb-0">leaving you glowing for any</p>
                <p className="leading-[22.75px]">occasion.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type Card8HairStylistProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

function Card8HairStylist({ className, property1 = "Default" }: Card8HairStylistProps) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || `h-[275.75px] relative rounded-[12px] w-[286px] ${isVariant2 ? "bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]" : "bg-gradient-to-r from-[rgba(255,223,26,0.06)] to-[rgba(255,166,0,0.06)]"}`}>
      <div aria-hidden className={`absolute border border-[#ffdf1a] border-solid inset-0 pointer-events-none rounded-[12px] ${isVariant2 ? "" : "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"}`} />
      <div className="absolute content-stretch flex flex-col items-start left-[125px] pb-[16px] top-[33px]" data-name="Margin">
        <div className="h-[40px] relative shrink-0 w-[35.473px]" data-name="Container">
          <svg className="absolute block inset-0 size-full" fill="none" height="40" preserveAspectRatio="none" viewBox="0 0 35.4727 40" width="35.4727">
            <g id="Container">
              <path d={svgPaths.p1d285c00} fill="url(#paint0_linear_0_606)" id="Symbol" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_606" x1="0" x2="35.4727" y1="18.5" y2="18.5">
                <stop stopColor="#F97316" />
                <stop offset="1" stopColor="#F95316" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[90.75px] pb-[12px] top-[89px]" data-name="Heading 3:margin">
        <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
          <div className="[word-break:break-word] flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[20px] text-center whitespace-nowrap">
            <p className="leading-[28px]">Hair Stylist</p>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center left-1/2 pl-[3.78px] pr-[3.8px] top-[128.25px]" data-name="Container">
        <div className="[word-break:break-word] flex flex-col font-['Sora:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[22.75px] mb-0">Our skilled hair stylists ensure you</p>
          <p className="leading-[22.75px] mb-0">look stunning with the perfect</p>
          <p className="leading-[22.75px]">hairstyle for your event.</p>
        </div>
      </div>
    </div>
  );
}
type Card7BridalMehndiProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

function Card7BridalMehndi({ className, property1 = "Default" }: Card7BridalMehndiProps) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || `h-[275.75px] relative rounded-[12px] w-[286px] ${isVariant2 ? "bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]" : "bg-gradient-to-r from-[rgba(255,223,26,0.06)] to-[rgba(255,166,0,0.06)]"}`}>
      <div aria-hidden className={`absolute border border-[#ffdf1a] border-solid inset-0 pointer-events-none rounded-[12px] ${isVariant2 ? "" : "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"}`} />
      <div className="absolute content-stretch flex flex-col items-start left-[120.5px] pb-[16px] top-[33px]" data-name="Margin">
        <div className="h-[40px] relative shrink-0 w-[44.93px]" data-name="Container">
          <svg className="absolute block inset-0 size-full" fill="none" height="40" preserveAspectRatio="none" viewBox="0 0 44.9297 40" width="44.9297">
            <g id="Container">
              <path d={svgPaths.p3f3c800} fill="url(#paint0_linear_0_609)" id="Symbol" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_609" x1="0" x2="44.9297" y1="18.5" y2="18.5">
                <stop stopColor="#F97316" />
                <stop offset="1" stopColor="#F95316" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[76.88px] pb-[12px] top-[89px]" data-name="Heading 3:margin">
        <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
          <div className="[word-break:break-word] flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[20px] text-center whitespace-nowrap">
            <p className="leading-[28px]">Bridal Mehndi</p>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center left-1/2 pl-[0.27px] pr-[0.28px] top-[128.25px]" data-name="Container">
        <div className="[word-break:break-word] flex flex-col font-['Sora:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[22.75px] mb-0">Our talented mehndi artists in Delhi</p>
          <p className="leading-[22.75px] mb-0">craft intricate, personalized designs</p>
          <p className="leading-[22.75px]">for brides on their special day.</p>
        </div>
      </div>
    </div>
  );
}
type Card6AnchorsProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

function Card6Anchors({ className, property1 = "Default" }: Card6AnchorsProps) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || `relative rounded-[12px] w-[286px] ${isVariant2 ? "bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]" : "bg-gradient-to-r from-[rgba(255,223,26,0.06)] to-[rgba(255,166,0,0.06)]"}`}>
      <div aria-hidden className={`absolute border border-[#ffdf1a] border-solid inset-0 pointer-events-none rounded-[12px] ${isVariant2 ? "" : "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"}`} />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[33px] relative size-full">
          <div className="relative shrink-0" data-name="Margin">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
              <div className="h-[40px] relative shrink-0 w-[24.75px]" data-name="Container">
                <svg className="absolute block inset-0 size-full" fill="none" height="40" preserveAspectRatio="none" viewBox="0 0 24.75 40" width="24.75">
                  <g id="Container">
                    <path d={svgPaths.p80ab000} fill="url(#paint0_linear_0_600)" id="Symbol" />
                  </g>
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_600" x1="0" x2="24.75" y1="18.5" y2="18.5">
                      <stop stopColor="#F97316" />
                      <stop offset="1" stopColor="#F95316" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="relative shrink-0" data-name="Heading 3:margin">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative size-full">
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
                <div className="[word-break:break-word] flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[20px] text-center whitespace-nowrap">
                  <p className="leading-[28px]">Anchors</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-[6.5px] relative size-full">
              <div className="[word-break:break-word] flex flex-col font-['Sora:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] text-center whitespace-nowrap">
                <p className="leading-[22.75px] mb-0">Our experienced anchors, game</p>
                <p className="leading-[22.75px] mb-0">hosts, party organizers keep your</p>
                <p className="leading-[22.75px] mb-0">event lively, engaging, and</p>
                <p className="leading-[22.75px] mb-0">seamlessly hosted from start to</p>
                <p className="leading-[22.75px]">finish.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type Card5FloristDecoratorsProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

function Card5FloristDecorators({ className, property1 = "Default" }: Card5FloristDecoratorsProps) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || `relative rounded-[12px] w-[286px] ${isVariant2 ? "bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]" : "bg-gradient-to-r from-[rgba(255,223,26,0.06)] to-[rgba(255,166,0,0.06)]"}`}>
      <div aria-hidden className={`absolute border border-[#ffdf1a] border-solid inset-0 pointer-events-none rounded-[12px] ${isVariant2 ? "" : "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"}`} />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pb-[55.75px] pt-[33px] px-[33px] relative size-full">
          <div className="relative shrink-0" data-name="Margin">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
              <div className="h-[35.469px] relative shrink-0 w-[40.52px]" data-name="Container">
                <svg className="absolute block inset-0 size-full" fill="none" height="35.4692" preserveAspectRatio="none" viewBox="0 0 40.5201 35.4692" width="40.5201">
                  <g id="Container">
                    <path d={svgPaths.p112a35c0} fill="url(#paint0_linear_0_615)" id="Symbol" />
                  </g>
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_615" x1="8.90594e-10" x2="40.5201" y1="16.2346" y2="16.2346">
                      <stop stopColor="#F97316" />
                      <stop offset="1" stopColor="#F95316" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="relative shrink-0" data-name="Heading 3:margin">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative size-full">
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
                <div className="[word-break:break-word] flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[20px] text-center whitespace-nowrap">
                  <p className="leading-[28px]">{`Florist & Decorators`}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-[8.44px] relative size-full">
              <div className="[word-break:break-word] flex flex-col font-['Sora:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] text-center whitespace-nowrap">
                <p className="leading-[22.75px] mb-0">We create breathtaking floral</p>
                <p className="leading-[22.75px] mb-0">arrangements and decor in Delhi</p>
                <p className="leading-[22.75px] mb-0">that transform any space into a</p>
                <p className="leading-[22.75px]">dream setting.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type Card4ChoreographersProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

function Card4Choreographers({ className, property1 = "Default" }: Card4ChoreographersProps) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || `h-[253px] relative rounded-[12px] w-[286px] ${isVariant2 ? "bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]" : "bg-gradient-to-r from-[rgba(255,223,26,0.06)] to-[rgba(255,166,0,0.06)]"}`}>
      <div aria-hidden className={`absolute border border-[#ffdf1a] border-solid inset-0 pointer-events-none rounded-[12px] ${isVariant2 ? "" : "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"}`} />
      <div className="absolute content-stretch flex flex-col items-start left-[131.75px] pb-[16px] top-[33px]" data-name="Margin">
        <div className="h-[40px] relative shrink-0 w-[22.5px]" data-name="Container">
          <svg className="absolute block inset-0 size-full" fill="none" height="40" preserveAspectRatio="none" viewBox="0 0 22.5 40" width="22.5">
            <g id="Container">
              <path d={svgPaths.p199f6f00} fill="url(#paint0_linear_0_628)" id="Symbol" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_628" x1="0" x2="22.5" y1="18.5" y2="18.5">
                <stop stopColor="#F97316" />
                <stop offset="1" stopColor="#F95316" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[65.2px] pb-[12px] top-[89px]" data-name="Heading 3:margin">
        <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
          <div className="[word-break:break-word] flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[20px] text-center whitespace-nowrap">
            <p className="leading-[28px]">Choreographers</p>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center left-1/2 pl-[3.38px] pr-[3.39px] top-[128.25px]" data-name="Container">
        <div className="[word-break:break-word] flex flex-col font-['Sora:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[22.75px] mb-0">Our expert choreographers design</p>
          <p className="leading-[22.75px] mb-0">memorable dance routines that</p>
          <p className="leading-[22.75px]">add sparkle to your celebrations.</p>
        </div>
      </div>
    </div>
  );
}
type Card3WeddingVenuesProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

function Card3WeddingVenues({ className, property1 = "Default" }: Card3WeddingVenuesProps) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || `h-[253px] relative rounded-[12px] w-[286px] ${isVariant2 ? "bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]" : "bg-gradient-to-r from-[rgba(255,223,26,0.06)] to-[rgba(255,166,0,0.06)]"}`}>
      <div aria-hidden className={`absolute border border-[#ffdf1a] border-solid inset-0 pointer-events-none rounded-[12px] ${isVariant2 ? "" : "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"}`} />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[33px] relative size-full">
          <div className="mb-[-0.75px] relative shrink-0" data-name="Margin">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
              <div className="content-stretch flex flex-col items-center pb-[3.5px] pt-[0.5px] relative shrink-0" data-name="Container">
                <div className="relative shrink-0 size-[36px]" data-name="Symbol">
                  <svg className="absolute block inset-0 size-full" fill="none" height="36" preserveAspectRatio="none" viewBox="0 0 36 36" width="36">
                    <g id="Symbol">
                      <path d={svgPaths.p28b36500} id="Vector" stroke="url(#paint0_linear_0_617)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" />
                      <path d={svgPaths.p1e4a0d00} id="Vector_2" stroke="url(#paint1_linear_0_617)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" />
                      <path d={svgPaths.p18e21a00} id="Vector_3" stroke="url(#paint2_linear_0_617)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" />
                      <path d={svgPaths.p56cf3a0} id="Vector_4" stroke="url(#paint3_linear_0_617)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" />
                    </g>
                    <defs>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_617" x1="5.25" x2="21.75" y1="19.5" y2="19.5">
                        <stop stopColor="#F97316" />
                        <stop offset="1" stopColor="#F95316" />
                      </linearGradient>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_617" x1="14.25" x2="30.75" y1="19.5" y2="19.5">
                        <stop stopColor="#F97316" />
                        <stop offset="1" stopColor="#F95316" />
                      </linearGradient>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_617" x1="10.5" x2="16.5" y1="8.625" y2="8.625">
                        <stop stopColor="#F97316" />
                        <stop offset="1" stopColor="#F95316" />
                      </linearGradient>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_0_617" x1="19.5" x2="25.5" y1="8.625" y2="8.625">
                        <stop stopColor="#F97316" />
                        <stop offset="1" stopColor="#F95316" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-[-0.75px] relative shrink-0" data-name="Heading 3:margin">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative size-full">
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
                <div className="[word-break:break-word] flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[20px] text-center whitespace-nowrap">
                  <p className="leading-[28px]">Wedding Venues</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pl-[1.95px] pr-[1.97px] relative size-full">
              <div className="[word-break:break-word] flex flex-col font-['Sora:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] text-center whitespace-nowrap">
                <p className="leading-[22.75px] mb-0">We provide stunning wedding</p>
                <p className="leading-[22.75px] mb-0">venues in Delhi that offer the</p>
                <p className="leading-[22.75px]">perfect setting for your special day.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type Card2DjEntertainmentProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

function Card2DjEntertainment({ className, property1 = "Default" }: Card2DjEntertainmentProps) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || `relative rounded-[12px] w-[286px] ${isVariant2 ? "bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]" : "bg-gradient-to-r from-[rgba(255,223,26,0.06)] to-[rgba(255,166,0,0.06)]"}`}>
      <div aria-hidden className={`absolute border border-[#ffdf1a] border-solid inset-0 pointer-events-none rounded-[12px] ${isVariant2 ? "" : "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"}`} />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[33px] relative size-full">
          <div className="relative shrink-0" data-name="Margin">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
              <div className="h-[40px] relative shrink-0 w-[36px]" data-name="Container">
                <svg className="absolute block inset-0 size-full" fill="none" height="40" preserveAspectRatio="none" viewBox="0 0 36 40" width="36">
                  <g id="Container">
                    <path d={svgPaths.p372c1f80} fill="url(#paint0_linear_0_624)" id="Symbol" />
                  </g>
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_624" x1="0" x2="36" y1="18.5" y2="18.5">
                      <stop stopColor="#F97316" />
                      <stop offset="1" stopColor="#F95316" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="relative shrink-0" data-name="Heading 3:margin">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative size-full">
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
                <div className="[word-break:break-word] flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[20px] text-center whitespace-nowrap">
                  <p className="leading-[28px]">{`DJ & Entertainment`}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-[1.05px] relative size-full">
              <div className="[word-break:break-word] flex flex-col font-['Sora:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] text-center whitespace-nowrap">
                <p className="leading-[22.75px] mb-0">Our professional DJs and</p>
                <p className="leading-[22.75px] mb-0">entertainers create an</p>
                <p className="leading-[22.75px] mb-0">unforgettable atmosphere for every</p>
                <p className="leading-[22.75px]">event.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type Card1EventsProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

function Card1Events({ className, property1 = "Default" }: Card1EventsProps) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || `h-[253px] relative rounded-[12px] w-[286px] ${isVariant2 ? "bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]" : "bg-gradient-to-r from-[rgba(255,223,26,0.06)] to-[rgba(255,166,0,0.06)]"}`}>
      <div aria-hidden className={`absolute border border-[#ffdf1a] border-solid inset-0 pointer-events-none rounded-[12px] ${isVariant2 ? "" : "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"}`} />
      <div className="absolute content-stretch flex flex-col items-start left-[120.5px] pb-[16px] top-[33px]" data-name="Margin">
        <div className="h-[40.002px] relative shrink-0 w-[44.958px]" data-name="Container">
          <svg className="absolute block inset-0 size-full" fill="none" height="40.0023" preserveAspectRatio="none" viewBox="0 0 44.9578 40.0023" width="44.9578">
            <g id="Container">
              <path d={svgPaths.p1156ed56} fill="url(#paint0_linear_0_634)" id="Symbol" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_634" x1="2.38419e-10" x2="44.9578" y1="18.5012" y2="18.5012">
                <stop stopColor="#F97316" />
                <stop offset="1" stopColor="#F95316" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[110.2px] pb-[12px] top-[89px]" data-name="Heading 3:margin">
        <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
          <div className="[word-break:break-word] flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[20px] text-center whitespace-nowrap">
            <p className="leading-[28px]">Events</p>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center left-1/2 pl-[1.42px] pr-[1.44px] top-[128.25px]" data-name="Container">
        <div className="[word-break:break-word] flex flex-col font-['Sora:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[22.75px] mb-0">We know how important any event</p>
          <p className="leading-[22.75px] mb-0">that you do is to you whether in the</p>
          <p className="leading-[22.75px]">corporate field or personally.</p>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="h-[min(800px,62.5vw)] min-h-[420px] relative shrink-0 w-full" data-name="Hero Section">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHeroSection} />
        <div className="absolute bg-[rgba(0,0,0,0.5)] inset-0" />
      </div>
    </div>
  );
}

function HeroSection1() {
  return (
    <div className="h-[800px] relative shrink-0 w-[1280px]" data-name="Hero Section">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHeroSection1} />
        <div className="absolute bg-[rgba(0,0,0,0.5)] inset-0" />
      </div>
    </div>
  );
}

function HeroSection2() {
  return (
    <div className="h-[800px] relative shrink-0 w-[1280px]" data-name="Hero Section">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[100.08%] left-0 max-w-none top-[-0.04%] w-full" src={imgHeroSection2} />
        </div>
        <div className="absolute bg-[rgba(0,0,0,0.5)] inset-0" />
      </div>
    </div>
  );
}

function HeroSection3() {
  return (
    <div className="h-[800px] relative shrink-0 w-[1280px]" data-name="Hero Section">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHeroSection3} />
        <div className="absolute bg-[rgba(0,0,0,0.5)] inset-0" />
      </div>
    </div>
  );
}

function HeroCarousel() {
  const heroSlides = [imgHomeHero1, imgHomeHero2, imgHomeHero3, imgHomeHero4];
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const sliderTimer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(sliderTimer);
  }, [heroSlides.length]);

  return (
    <section
      className="h-[min(800px,62.5vw)] min-h-[420px] relative shrink-0 w-full"
      data-name="Carasoul"
      aria-label="Happy Moments featured events"
    >
      {heroSlides.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`Happy Moments event showcase ${index + 1}`}
          className={`absolute inset-0 h-full object-cover transition-opacity duration-1000 w-full ${index === activeSlide ? "opacity-100" : "opacity-0"}`}
          aria-hidden={index !== activeSlide}
        />
      ))}
      <div className="absolute bg-[rgba(0,0,0,0.35)] inset-0 pointer-events-none" />
      <div className="absolute bottom-[clamp(20px,3vw,38px)] flex gap-[10px] justify-center left-0 right-0 z-[1]">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            aria-current={index === activeSlide}
            className={`border border-white cursor-pointer h-[10px] p-0 rounded-full transition-all w-[10px] ${index === activeSlide ? "bg-white scale-125" : "bg-white/50"}`}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Libre_Caslon_Text:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[clamp(32px,5vw,64px)] text-white tracking-[-1.28px] w-full">
        <p className="leading-[1.12] mb-0 whitespace-nowrap">Every Occasion Deserves</p>
        <p className="whitespace-nowrap">
          <span className="leading-[1.12]">{`Its `}</span>
          <span className="bg-clip-text bg-gradient-to-r from-[#f97316] leading-[1.12] text-[transparent] to-[#f95316]">Happy Moment</span>
        </p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[650px] pb-[16px] relative shrink-0 w-[min(650px,84vw)]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fbe3dd] text-[clamp(13px,1.56vw,20px)]">
        <p className="leading-[1.6] mb-0">10+ years of creating unforgettable moments,</p>
        <p className="leading-[1.6] mb-0">from luxury weddings and corporate events to</p>
        <p className="leading-[1.6] mb-0">exhibitions, concerts, and celebrations across</p>
        <p className="leading-[1.6]">India.</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <div className="bg-gradient-to-r from-[#f97316] relative rounded-[30px] shrink-0 to-[#f95316]" data-name="P-BUTTION">
        <div aria-hidden className="absolute border border-[#f97316] border-solid inset-0 pointer-events-none rounded-[30px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[clamp(16px,2.03vw,26px)] py-[clamp(9px,1.17vw,15px)] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.55] not-italic relative shrink-0 text-[#fffdf9] text-[clamp(9px,1.1vw,14px)] whitespace-nowrap">PLAN YOUR EVENT</p>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[30px] shrink-0" data-name="S-BUTTON">
        <div aria-hidden className="absolute border border-[#f2650f] border-solid inset-0 pointer-events-none rounded-[30px]" />
        <div className="content-stretch flex flex-col items-start px-[clamp(16px,2.03vw,26px)] py-[clamp(9px,1.17vw,15px)] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.55] not-italic relative shrink-0 text-[#fffdf9] text-[clamp(9px,1.1vw,14px)] whitespace-nowrap">SEE WHAT WE DO</p>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[clamp(32px,5.15vw,66px)] top-[clamp(96px,12.8vw,164px)] w-[min(714px,84vw)]" data-name="Container">
      <Heading />
      <Container1 />
      <Frame25 />
    </div>
  );
}

function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = counterRef.current;
    if (!element) return;

    let animationFrame = 0;
    const startCounter = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setCount(target);
        return;
      }

      const startTime = performance.now();
      const duration = 1600;
      const animate = (time: number) => {
        const progress = Math.min((time - startTime) / duration, 1);
        // Smooth ease-out keeps the final value easy to read.
        setCount(Math.round(target * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) animationFrame = requestAnimationFrame(animate);
      };
      animationFrame = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        startCounter();
        observer.disconnect();
      }
    }, { threshold: 0.35 });

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [target]);

  return <span ref={counterRef}>{count.toLocaleString("en-IN")}+</span>;
}

function Frame20() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-bold gap-[10px] items-center leading-[0] relative shrink-0 text-white w-[136px]">
      <div className="flex flex-col font-['Libre_Caslon_Text:Bold',sans-serif] justify-center relative shrink-0 text-[clamp(28px,3.75vw,48px)] text-center w-full">
        <p className="leading-[1.15]"><AnimatedCounter target={100} /></p>
      </div>
      <div className="flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] justify-center relative shrink-0 text-[clamp(9px,1.25vw,16px)] w-full">
        <p className="leading-[1.5]">EVENT DELIVERED</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-bold gap-[10px] items-center leading-[0] relative shrink-0 text-white whitespace-nowrap">
      <div className="flex flex-col font-['Libre_Caslon_Text:Bold',sans-serif] justify-center relative shrink-0 text-[clamp(28px,3.75vw,48px)] text-center">
        <p className="leading-[1.15]"><AnimatedCounter target={10000} /></p>
      </div>
      <div className="flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] justify-center relative shrink-0 text-[clamp(9px,1.25vw,16px)]">
        <p className="leading-[1.5]">GUESTS HOSTED</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-bold gap-[10px] items-center leading-[0] relative shrink-0 text-white w-[136px]">
      <div className="flex flex-col font-['Libre_Caslon_Text:Bold',sans-serif] justify-center min-w-full relative shrink-0 text-[clamp(28px,3.75vw,48px)] text-center w-[min-content]">
        <p className="leading-[1.15]"><AnimatedCounter target={50} /></p>
      </div>
      <div className="flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] justify-center relative shrink-0 text-[clamp(9px,1.25vw,16px)] whitespace-nowrap">
        <p className="leading-[1.5]">VENDER PARTNERS</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Libre_Caslon_Text:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[clamp(18px,2.2vw,28px)] text-center text-white whitespace-nowrap">
        <p className="leading-[1.55] mb-0 whitespace-pre">{`PAN `}</p>
        <p className="leading-[1.55] whitespace-pre">INDIA</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[rgba(217,78,31,0.81)] gap-[clamp(38px,10.94vw,140px)] items-center justify-center py-[clamp(7px,0.78vw,10px)] relative shrink-0 to-[#d94e1f] w-full">
      <Frame20 />
      <Frame21 />
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function WhoWeAreSection() {
  const highlights = [
    ["10+ Years of Experience", "Creating and delivering premium events across India."],
    ["100% Tailored Experiences", "No templates. Every event is uniquely designed around your vision and story."],
    ["Pan-India Presence", "A dedicated team across cities, with trusted partners across India."],
    ["100+ Happy Clients", "5-Star Rated Event Experiences Across India"],
  ];

  return (
    <section className="bg-white px-[clamp(24px,5vw,80px)] py-[clamp(64px,8vw,112px)] relative shrink-0 w-full" aria-labelledby="who-we-are-title">
      <div className="max-w-[1180px] mx-auto">
        <div className="flex flex-col items-center text-center">
          <span className="bg-[#e7e7e7] rounded-full px-[16px] py-[6px] text-[10px] tracking-[1px] text-black">WHO WE ARE</span>
          <h2 id="who-we-are-title" className="font-['Libre_Caslon_Text:Bold',serif] font-bold mt-[18px] text-[clamp(28px,3.4vw,46px)] text-[#24211f] leading-[1.1]">
            India&apos;s Most Trusted Name In <span className="text-[#f65a1e]">Event Industry</span>
          </h2>
        </div>
        <div className="grid gap-[clamp(36px,6vw,80px)] grid-cols-1 items-center lg:grid-cols-[minmax(360px,1fr)_minmax(440px,1.05fr)] mt-[clamp(40px,5vw,68px)]">
          <div className="aspect-square grid grid-cols-2 grid-rows-2 max-w-[520px] mx-auto relative w-full">
            <img className="border-[3px] border-white cursor-pointer h-full object-cover transition-transform duration-500 ease-out hover:scale-[1.06] w-full" src={imgHeroSection3} alt="Corporate event setup" />
            <img className="border-[3px] border-white cursor-pointer h-full object-cover transition-transform duration-500 ease-out hover:scale-[1.06] w-full" src={imgHeroSection} alt="Wedding decor by Happy Moments" />
            <img className="border-[3px] border-white cursor-pointer h-full object-cover transition-transform duration-500 ease-out hover:scale-[1.06] w-full" src={imgHeroSection2} alt="Exhibition experience" />
            <img className="border-[3px] border-white cursor-pointer h-full object-cover transition-transform duration-500 ease-out hover:scale-[1.06] w-full" src={imgHeroSection1} alt="Live event production" />
            <div className="absolute bg-[#f97316] flex items-center justify-center left-1/2 p-[8px] rounded-full shadow-lg top-1/2 -translate-x-1/2 -translate-y-1/2 size-[clamp(90px,11vw,136px)]">
              <img className="object-contain size-full" src={imgImageHappyMomentsLogo} alt="Happy Moments" />
            </div>
          </div>
          <div className="font-['Hanken_Grotesk:Regular',sans-serif] text-[#4d5866] text-[clamp(13px,1.25vw,16px)] leading-[1.6]">
            <p className="mb-[16px]"><strong>Happy Moments</strong> is a full-service <strong>event management company</strong> based in Delhi-NCR, with over a decade of experience in delivering exceptional events across India. We specialize in <strong>corporate events, luxury weddings, exhibitions, brand experiences, concerts,</strong> and <strong>private celebrations.</strong></p>
            <p className="mb-[16px]">From corporate conferences and product launches to elegant weddings, exhibitions, and private celebrations, we deliver thoughtfully planned events that combine creativity, precision, and flawless execution.</p>
            <p className="mb-[16px]">Whether it is an intimate celebration or a large-scale corporate event, Happy Moments creates personalized experiences that reflect our clients&apos; vision and leave a lasting impression.</p>
            <p>The result is unforgettable experiences, lasting relationships, and moments that are cherished for years.</p>
            <div className="grid gap-x-[32px] gap-y-[16px] grid-cols-1 sm:grid-cols-2 mt-[26px]">
              {highlights.map(([title, description]) => <div key={title}><h3 className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold text-[#202632] text-[14px] leading-[1.3]">{title}</h3><p className="leading-[1.4] mt-[3px] text-[12px]">{description}</p></div>)}
            </div>
            <a href="tel:+919717928676" className="bg-gradient-to-r from-[#f97316] inline-flex mt-[30px] no-underline px-[25px] py-[14px] rounded-full text-[#fffdf9] text-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold to-[#f95316]">Looking For Event Planner</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatWeDoSection() {
  const services = [
    ["Corporate Events", imgHeroSection3, ["Conferences & Summits", "Annual Meetings", "Award Ceremonies", "Product Launches", "Dealer Meets", "Corporate Celebrations"]],
    ["Wedding & Social", imgHeroSection, ["Luxury Weddings", "Destination Weddings", "Engagement Ceremonies", "Anniversary Celebrations", "Private Parties"]],
    ["Exhibitions", imgHeroSection2, ["Exhibition Management", "Stall Design & Execution", "Brand Activations", "Promotional Events"]],
    ["Live Events", imgHeroSection1, ["Concerts", "Stage Shows", "Artist Management", "Entertainment Events"]],
    ["Complete Event", imgCarasoul, ["Event Concept & Planning", "Venue Management", "Décor & Production", "Vendor Coordination", "Logistics Management", "On-site Event Execution"]],
  ];

  return (
    <section id="services" className="bg-white px-[clamp(24px,5vw,80px)] pb-[clamp(72px,9vw,120px)] pt-[clamp(10px,2vw,28px)] relative shrink-0 w-full" aria-labelledby="what-we-do-title">
      <div className="max-w-[1180px] mx-auto">
        <div className="flex flex-col items-center text-center">
          <span className="bg-[#e7e7e7] rounded-full px-[16px] py-[6px] text-[10px] tracking-[1px] text-black">WHAT WE DO</span>
          <h2 id="what-we-do-title" className="font-['Libre_Caslon_Text:Bold',serif] font-bold mt-[18px] text-[clamp(28px,3.4vw,46px)] text-[#24211f] leading-[1.1]">End-To-End Event <span className="text-[#f65a1e]">Expertise</span></h2>
          <p className="font-['Hanken_Grotesk:Regular',sans-serif] leading-[1.5] max-w-[560px] mt-[14px] text-[#625a55] text-[14px]">From concept to celebration, every detail is thoughtfully planned, beautifully designed, and flawlessly delivered.</p>
        </div>
        <div className="gap-[18px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[42px]">
          {services.map(([title, image, items]) => (
            <article className="bg-[#fff9ef] border border-transparent group min-h-[385px] overflow-hidden rounded-[8px] transition-all duration-300 ease-out hover:-translate-y-[7px] hover:border-[#f97316] hover:shadow-[0_14px_30px_rgba(54,39,24,0.18)]" key={title as string}>
              <div className="h-[185px] relative">
                <img className="absolute h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08] w-full" src={image as string} alt={title as string} />
                <span className="absolute bg-[rgba(37,37,37,0.78)] bottom-[0] font-['Hanken_Grotesk:Regular',sans-serif] left-1/2 px-[16px] py-[7px] text-[12px] text-white -translate-x-1/2 whitespace-nowrap">{title as string}</span>
              </div>
              <ul className="font-['Hanken_Grotesk:Regular',sans-serif] list-none m-0 p-[22px] text-[#4d4b48] text-[13px]">
                {(items as string[]).map(item => <li className="flex gap-[10px] items-center mb-[13px]" key={item}><span className="bg-[#555] flex h-[12px] items-center justify-center rounded-full text-[8px] text-white w-[12px]">✓</span>{item}</li>)}
              </ul>
            </article>
          ))}
          <article className="bg-[#fff9ef] flex flex-col items-center justify-center min-h-[385px] px-[42px] rounded-[8px] text-center">
            <div className="font-serif font-bold leading-none text-[#aaa5a0] text-[50px]">”</div>
            <p className="font-['Hanken_Grotesk:Regular',sans-serif] leading-[1.5] mt-[10px] text-[#625a55] text-[14px]">Every event is unique, and so is our approach. We create experiences that leave lasting memories.</p>
            <div className="flex gap-[8px] items-center mt-[28px]"><img className="h-[34px] object-contain w-[34px]" src={imgImageHappyMomentsLogo} alt="" /><span className="font-['Sora:Bold',sans-serif] font-bold leading-[1.05] text-[#3b302a] text-[13px] text-left">Happy<br />Moments</span></div>
            <span className="font-['Hanken_Grotesk:Regular',sans-serif] mt-[12px] text-[#625a55] text-[9px] tracking-[1px]">EVENTS THAT INSPIRE</span>
          </article>
        </div>
      </div>
    </section>
  );
}

function ExceptionalServicesSection() {
  // Keep every existing service image in the carousel. The active image is shown
  // wide and the remaining images stay visible as the narrow preview cards.
  const serviceImages = [imgCarasoul, imgHeroSection, imgHeroSection1, imgHeroSection2, imgHeroSection3, imgCarasoul];
  const [activeServiceImage, setActiveServiceImage] = useState(0);
  const steps = [
    ["01", "Consultation", "Discuss the vision, budget, key preferences, and priorities to create a clear foundation for bringing the event to life.", "from-[#d73a28] to-[#bc2e28]"],
    ["02", "Design", "Develop the mood board, theme, and key visuals, supported by a clear, fully itemized quotation for complete cost transparency.", "from-[#245b6c] to-[#4b889b]"],
    ["03", "Management", "Coordinate vendors, timelines, and every execution detail to ensure a seamless and well-managed event.", "from-[#f56d14] to-[#fc8c1c]"],
    ["04", "Celebrate", "Seamlessly manage the event day from setup to guest departure, followed by a final debrief and feedback review.", "from-[#817f10] to-[#c5c32e]"],
  ];

  useEffect(() => {
    const carouselTimer = window.setInterval(() => {
      setActiveServiceImage((current) => (current + 1) % serviceImages.length);
    }, 1000);

    return () => window.clearInterval(carouselTimer);
  }, [serviceImages.length]);

  const visibleServiceImages = Array.from({ length: serviceImages.length - 1 }, (_, offset) => {
    const index = (activeServiceImage + offset + 1) % serviceImages.length;
    return { image: serviceImages[index], index };
  });

  return (
    <section className="bg-white px-[clamp(24px,5vw,80px)] pb-[clamp(78px,10vw,140px)] pt-[clamp(12px,3vw,40px)] relative shrink-0 w-full">
      <div className="max-w-[1180px] mx-auto">
        <div className="flex flex-col items-center text-center">
          <span className="bg-[#e7e7e7] rounded-full px-[16px] py-[6px] text-[10px] tracking-[1px] text-black">EXCEPTIONAL SERVICES</span>
          <p className="font-['Hanken_Grotesk:Regular',sans-serif] leading-[1.45] max-w-[650px] mt-[15px] text-[#312b27] text-[14px]">As the Best Event Management Company in Delhi-NCR we provide exceptional services that your event needs.</p>
        </div>
        <div className="flex gap-[12px] h-[clamp(150px,18vw,245px)] items-center justify-center mt-[35px] overflow-hidden">
          <div className="h-full max-w-[480px] overflow-hidden relative rounded-[24px] w-[40%]">
            <img className="h-full object-cover w-full" src={serviceImages[activeServiceImage]} alt="Event photography" />
            <span className="absolute bg-[rgba(33,33,33,.75)] font-['Hanken_Grotesk:Regular',sans-serif] left-[10px] px-[9px] py-[4px] rounded-full text-[9px] text-white top-[10px]">Photography</span>
          </div>
          {visibleServiceImages.map(({ image, index }) => (
            <button
              type="button"
              aria-label={`Show service image ${index + 1}`}
              className="border-0 bg-transparent cursor-pointer h-[88%] overflow-hidden p-0 rounded-[22px] shrink-0 w-[10%]"
              key={index}
              onClick={() => setActiveServiceImage(index)}
            >
              <img className="h-full object-cover w-full" src={image} alt="Happy Moments service" />
            </button>
          ))}
        </div>
        <div className="flex flex-col items-center mt-[clamp(76px,11vw,150px)] text-center">
          <span className="bg-[#e7e7e7] rounded-full px-[16px] py-[6px] text-[10px] tracking-[1px] text-black">HOW WE WORK</span>
          <h2 className="font-['Libre_Caslon_Text:Bold',serif] font-bold mt-[18px] text-[clamp(28px,3.4vw,46px)] text-[#24211f] leading-[1.1]">From Vision To Unforgettable <span className="text-[#f65a1e]">Happy Moments</span></h2>
          <p className="font-['Hanken_Grotesk:Regular',sans-serif] leading-[1.5] max-w-[620px] mt-[14px] text-[#625a55] text-[14px]">Four seamless steps, thoughtfully managed from the first conversation to the final farewell.</p>
        </div>
        <div className="flex flex-col gap-[12px] max-w-[960px] mx-auto mt-[40px]">
          {steps.map(([number, title, text, color], index) => <div className={`flex gap-[12px] items-stretch ${index % 2 ? "flex-row-reverse" : ""}`} key={number}>
            <div className={`bg-gradient-to-br flex font-['Libre_Caslon_Text:Bold',serif] font-bold items-center justify-center min-h-[112px] rounded-[8px] shrink-0 text-[clamp(26px,3vw,42px)] text-white w-[clamp(86px,13vw,150px)] ${color}`}><span>{number}</span></div>
            <div className="bg-[#f8f8f8] border border-[#e5e5e5] flex flex-col justify-center min-h-[112px] px-[clamp(18px,3vw,36px)] rounded-[8px] shadow-[2px_3px_3px_rgba(0,0,0,.25)] w-full"><h3 className="font-['Libre_Caslon_Text:Bold',serif] font-bold text-[#2b2928] text-[clamp(19px,2.1vw,27px)]">{title}</h3><p className="font-['Hanken_Grotesk:Regular',sans-serif] leading-[1.45] mt-[7px] text-[#625a55] text-[13px]">{text}</p></div>
          </div>)}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  const reasons = [
    ["PAN-INDIA PRESENCE", "Trusted teams in Delhi-NCR, Mumbai, Bengaluru, and Hyderabad, supported by reliable partners nationwide.", imgHeroSection3],
    ["ONE DEDICATED PLANNER", "A single point of contact for clear communication and seamless coordination from start to finish.", imgHeroSection1],
    ["TRANSPARENT PRICING", "Clear, itemized quotations with no hidden charges or unexpected costs. What you see is exactly what you pay.", imgHeroSection],
    ["IN-HOUSE DESIGN STUDIO", "In-house décor, fabrication, and floral design for better quality, competitive pricing, and faster execution without relying heavily on third-party agencies.", imgHeroSection2],
    ["EVENT-DAY SUPPORT 24/7", "A dedicated on-ground team and support staff ensure your event runs smoothly from setup to guest departure.", imgCarasoul],
    ["YOU'RE IN GOOD HANDS", "Every event is smooth, thoughtfully designed around the tone, style, preferences, and budget, with dedicated support throughout the process.", imgImageHappyMomentsLogo],
  ];
  const faqs = [
    ["Do you provide complete event management services?", "Yes. We handle everything from concept planning and vendor coordination to on-site execution, venue management, and wrap-up coordination."],
    ["Do you provide corporate event management services?", "Yes. We plan and manage conferences, launches, award ceremonies, dealer meets, and other corporate experiences."],
    ["Do you provide wedding event management services?", "Yes. Our team plans intimate and large-scale wedding celebrations, including décor, hospitality, entertainment, and logistics."],
    ["Do you provide exhibition management services?", "Yes. We manage exhibition stalls, brand activations, fabrication, staffing, and on-ground coordination."],
  ];

  return (
    <section className="bg-white px-[clamp(24px,5vw,80px)] pb-[clamp(78px,10vw,140px)] pt-[clamp(8px,2vw,28px)] relative shrink-0 w-full">
      <div className="max-w-[980px] mx-auto">
        <div className="flex flex-col items-center text-center">
          <span className="bg-[#e7e7e7] rounded-full px-[16px] py-[6px] text-[10px] tracking-[1px] text-black">WHY CHOOSE US</span>
          <h2 className="font-['Libre_Caslon_Text:Bold',serif] font-bold mt-[18px] text-[clamp(27px,3.3vw,44px)] text-[#24211f] leading-[1.1]">The Happy Moments <span className="text-[#f65a1e]">Difference</span></h2>
          <p className="font-['Hanken_Grotesk:Regular',sans-serif] max-w-[620px] mt-[14px] text-[#625a55] text-[14px]">Discover what truly sets us apart from every other event company you&apos;ll consider.</p>
        </div>
        <div className="max-w-[680px] mx-auto mt-[45px] relative md:h-[545px]">
          <div className="absolute aspect-square hidden md:-left-[28px] rounded-full shadow-[0_7px_14px_rgba(0,0,0,.32)] top-[174px] w-[190px] md:block">
            <img className="absolute inset-0 object-cover rounded-full size-full" src={imgCarasoul} alt="Happy Moments event experience" />
            <span className="absolute bg-black font-['Libre_Caslon_Text:Bold',serif] font-bold left-1/2 px-[15px] py-[8px] rounded-full text-[12px] text-white top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">WHY CHOOSE US</span>
          </div>
          {reasons.map(([title, description, image], index) => {
            const positions = ["md:left-[55px] md:top-0", "md:left-[125px] md:top-[84px]", "md:left-[197px] md:top-[171px]", "md:left-[197px] md:top-[259px]", "md:left-[125px] md:top-[347px]", "md:left-[55px] md:top-[435px]"];
            const borders = ["border-[#23a79c]", "border-[#e44b7f]", "border-[#b9c521]", "border-[#bcc527]", "border-[#77a6a0]", "border-[#9632a4]"];
            return <article className={`flex gap-[14px] items-center mb-[22px] md:absolute md:mb-0 ${positions[index]}`} key={title}>
              <img className={`border-[3px] h-[58px] object-cover rounded-full shrink-0 w-[58px] ${borders[index]}`} src={image} alt="" />
              <div><h3 className="font-['Libre_Caslon_Text:Bold',serif] font-bold text-[#282421] text-[17px] leading-[1.1] whitespace-nowrap">{title}</h3><p className="font-['Hanken_Grotesk:Regular',sans-serif] leading-[1.42] mt-[5px] text-[#79716d] text-[12px] max-w-[440px]">{description}</p></div>
            </article>;
          })}
          <div className="aspect-square mx-auto relative rounded-full shadow-[0_7px_14px_rgba(0,0,0,.32)] w-[170px] md:hidden">
            <img className="absolute inset-0 object-cover rounded-full size-full" src={imgCarasoul} alt="Happy Moments event experience" />
            <span className="absolute bg-black font-['Libre_Caslon_Text:Bold',serif] font-bold left-1/2 px-[15px] py-[8px] rounded-full text-[12px] text-white top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">WHY CHOOSE US</span>
          </div>
        </div>
        <div className="gap-[12px] grid grid-cols-1 lg:grid-cols-[1fr_.97fr] max-w-[1240px] mx-auto mt-[clamp(58px,8vw,100px)]">
          <div className="bg-gradient-to-br flex flex-col from-[#ff9f12] items-center justify-center min-h-[486px] px-[clamp(28px,5vw,54px)] rounded-[20px] text-center to-[#ffd983]">
            <span className="font-['Hanken_Grotesk:Regular',sans-serif] text-[#633a27] text-[13px]">Corporate. &nbsp; Wedding. &nbsp; Exhibitions. &nbsp; Special Occasions</span>
            <h3 className="font-['Libre_Caslon_Text:Bold',serif] font-bold leading-[1.16] mt-[28px] text-[#090604] text-[clamp(30px,3.05vw,40px)]">Let&apos;s Create Your Next<br />Unforgettable Happy Moments</h3>
            <p className="font-['Hanken_Grotesk:Regular',sans-serif] leading-[1.52] max-w-[520px] mt-[25px] text-[#633a27] text-[16px]">Whether it&apos;s a corporate milestone, a dream wedding, or a grand celebration, Happy Moments brings your vision to life with creativity and perfection.</p>
            <a className="bg-[#fb591b] font-['Inter:Semi_Bold',sans-serif] mt-[24px] no-underline px-[27px] py-[17px] rounded-full text-[13px] text-white transition-transform hover:scale-[1.03]" href="tel:+919717928676">LOOKING FOR EVENT PLANNER</a>
          </div>
          <div className="faq-reference-panel flex flex-col">
            <span className="bg-[#e7e7e7] mb-[32px] mx-auto px-[20px] py-[7px] rounded-full text-[12px] tracking-[.35px]">FREQUENTLY ASKED QUESTIONS</span>
            <div className="space-y-[10px]">{faqs.map(([question, answer]) => <details className="bg-[#fffaf0] group rounded-[8px]" key={question}><summary className="cursor-pointer flex font-['Hanken_Grotesk:Bold',sans-serif] font-bold items-center justify-between list-none px-[17px] py-[15px] text-[#36302b] text-[12px]">{question}<span className="font-normal group-open:rotate-180 text-[16px] transition-transform">⌄</span></summary><p className="font-['Hanken_Grotesk:Regular',sans-serif] leading-[1.45] px-[17px] pb-[15px] text-[#625a55] text-[12px]">{answer}</p></details>)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#565656] text-[16px] w-full">
        <p className="leading-[24px] mb-0">Happy Moment is a premier event planning and styling firm dedicated to</p>
        <p className="leading-[24px] mb-0">creating bespoke, unforgettable experiences. We specialize in curating</p>
        <p className="leading-[24px] mb-0">{`life's most significant milestones with an unmatched level of detail and`}</p>
        <p className="leading-[24px]">sophistication.</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#565656] text-[16px] w-full">
        <p className="leading-[24px] mb-0">Our team of seasoned professionals approaches each project with a blend</p>
        <p className="leading-[24px] mb-0">of creativity, strategic planning, and meticulous execution. From intimate</p>
        <p className="leading-[24px] mb-0">gatherings to grand celebrations, we ensure every aspect reflects your</p>
        <p className="leading-[24px]">unique vision and style.</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#565656] text-[16px] w-full">
        <p className="leading-[24px] mb-0">With a commitment to excellence and a passion for celebration, we</p>
        <p className="leading-[24px] mb-0">transform ordinary spaces into extraordinary environments that inspire</p>
        <p className="leading-[24px]">and delight.</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-none flex-col gap-[24px] items-start relative w-[484px] max-w-full" data-name="Container">
      <Container4 />
      <div className="bg-gradient-to-r from-[#f97316] relative rounded-[30px] shrink-0 to-[#f95316]" data-name="P-BUTTION">
        <div aria-hidden className="absolute border border-[#f97316] border-solid inset-0 pointer-events-none rounded-[30px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[26px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21.7px] not-italic relative shrink-0 text-[#fffdf9] text-[14px] whitespace-nowrap">Book Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ElegantEventSetup() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Elegant Event Setup">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgElegantEventSetup} />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[66px] items-center justify-center relative shrink-0 w-full max-[700px]:flex-col max-[700px]:gap-[36px]" data-name="Container">
      <Container3 />
      <div className="h-[565px] relative rounded-[4px] shrink-0 w-[505px] max-w-full max-[700px]:h-[auto] max-[700px]:aspect-[505/565]" data-name="Overlay+Shadow">
        <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative size-full">
            <ElegantEventSetup />
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#f97316] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_10px_30px_0px_rgba(43,27,23,0.08)]" />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-1/2 top-[18px] w-[min(1060px,calc(100%-48px))] -translate-x-1/2 max-[700px]:top-[16px]" data-name="Heading 2">
      <div className="[word-break:break-word] bg-clip-text bg-gradient-to-r flex flex-col font-['Libre_Caslon_Text:Bold',sans-serif] font-bold from-[#f97316] justify-center leading-[0] relative shrink-0 text-[20px] text-[transparent] to-[#f95316] w-full">
        <p className="leading-[56px]">About Us</p>
      </div>
    </div>
  );
}

function SectionAboutUs() {
  return (
    <div className="content-stretch flex flex-col items-center px-[24px] py-[74px] relative shrink-0 w-full max-[700px]:py-[90px_56px]" data-name="Section - About Us">
      <img alt="" className="absolute inset-0 max-w-none object-cover opacity-4 pointer-events-none size-full" src={imgSectionAboutUs} />
      <div className="relative w-full max-w-[1060px]">
        <Container2 />
      </div>
      <Heading1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] bg-clip-text bg-gradient-to-r flex flex-col font-['Libre_Caslon_Text:Bold',sans-serif] font-bold from-[#f97316] justify-center leading-[0] relative shrink-0 text-[48px] text-[transparent] text-center to-[#f95316] whitespace-nowrap">
        <p className="leading-[56px]">Our Service</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[28px]">Corporate</p>
      </div>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[10px] relative shrink-0" data-name="Heading 3:margin">
      <Heading3 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-center pl-[3.38px] pr-[3.39px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Sora:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[7px] text-center text-white w-[249px]">
        <p className="leading-[12.8px] mb-0">Conferences, brand</p>
        <p className="leading-[12.8px] mb-0">activations, team building,</p>
        <p className="leading-[12.8px]">and galas.</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Heading3Margin />
      <Container9 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[28px]">Weddings</p>
      </div>
    </div>
  );
}

function Heading3Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[10px] relative shrink-0" data-name="Heading 3:margin">
      <Heading4 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-center pl-[3.38px] pr-[3.39px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Sora:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[7px] text-center text-white w-[249px]">
        <p className="leading-[12.8px] mb-0">Bespoke ceremonies, full-</p>
        <p className="leading-[12.8px]">service planning, and styling.</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Heading3Margin1 />
      <Container10 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[28px]">Exhibitions</p>
      </div>
    </div>
  );
}

function Heading3Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[10px] relative shrink-0" data-name="Heading 3:margin">
      <Heading5 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-center pl-[3.38px] pr-[3.39px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Sora:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[7px] text-center text-white w-[249px]">
        <p className="leading-[12.8px] mb-0">Trade shows, art displays,</p>
        <p className="leading-[12.8px]">and immersive installations.</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Heading3Margin2 />
      <Container11 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Sora:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[28px]">Special Occasions</p>
      </div>
    </div>
  );
}

function Heading3Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[10px] relative shrink-0" data-name="Heading 3:margin">
      <Heading6 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-center pl-[3.38px] pr-[3.39px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Sora:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[7px] text-center text-white w-[249px]">
        <p className="leading-[12.8px] mb-0">Milestone birthdays,</p>
        <p className="leading-[12.8px] mb-0">anniversaries, and private</p>
        <p className="leading-[12.8px]">dinners.</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Heading3Margin3 />
      <Container12 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[19px] items-center justify-center relative shrink-0 w-full">
      <div className="relative rounded-[20px] shrink-0 w-[141px]" data-name="Cards">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[20px]">
          <div className="absolute inset-0 overflow-hidden rounded-[20px]">
            <img alt="" className="absolute h-full left-[-46.76%] max-w-none top-0 w-[178.84%]" src={imgCards} />
          </div>
          <div className="absolute bg-gradient-to-b from-[rgba(102,102,102,0)] inset-0 rounded-[20px] to-[83.792%] to-[rgba(0,0,0,0.5)]" />
        </div>
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center pb-[20px] pt-[240px] px-[10px] relative size-full">
            <Frame3 />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <div className="h-full relative rounded-[20px] shrink-0 w-[141px]" data-name="Cards">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[20px]">
            <img alt="" className="absolute max-w-none object-cover rounded-[20px] size-full" src={imgCards1} />
            <div className="absolute bg-gradient-to-b from-[rgba(102,102,102,0)] inset-0 rounded-[20px] to-[83.792%] to-[rgba(0,0,0,0.5)]" />
          </div>
          <div className="flex flex-col items-center justify-center size-full">
            <div className="content-stretch flex flex-col items-center justify-center pb-[20px] pt-[240px] px-[10px] relative size-full">
              <Frame5 />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <div className="h-full relative rounded-[20px] shrink-0 w-[141px]" data-name="Cards">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[20px]">
            <img alt="" className="absolute max-w-none object-cover rounded-[20px] size-full" src={imgCards2} />
            <div className="absolute bg-gradient-to-b from-[rgba(102,102,102,0)] inset-0 rounded-[20px] to-[83.792%] to-[rgba(0,0,0,0.5)]" />
          </div>
          <div className="flex flex-col items-center justify-center size-full">
            <div className="content-stretch flex flex-col items-center justify-center pb-[20px] pt-[240px] px-[10px] relative size-full">
              <Frame6 />
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[20px] shrink-0 w-[141px]" data-name="Cards">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[20px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[20px] size-full" src={imgCards3} />
          <div className="absolute bg-gradient-to-b from-[rgba(102,102,102,0)] inset-0 rounded-[20px] to-[83.792%] to-[rgba(0,0,0,0.5)]" />
        </div>
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center pb-[20px] pt-[240px] px-[10px] relative size-full">
            <Frame7 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center justify-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Frame4 />
    </div>
  );
}

function SectionOurService() {
  return (
    <div id="services" className="content-stretch flex flex-col items-start p-[80px] relative shrink-0 w-full scroll-mt-[72px]" data-name="Section - Our Service">
      <div className="absolute inset-0 opacity-6 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[212.98%] left-[-1.02%] max-w-none top-[-6.41%] w-full" src={imgSectionOurService} />
      </div>
      <Container8 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] bg-clip-text bg-gradient-to-r flex flex-col font-['Libre_Caslon_Text:Bold',sans-serif] font-bold from-[#f97316] justify-center leading-[0] relative shrink-0 text-[48px] text-[transparent] text-center to-[#f95316] whitespace-nowrap">
        <p className="leading-[56px]">Exceptional Services</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[768px] relative shrink-0 w-[768px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#565656] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px] mb-0">As the Best Event Management Company in Hyderabad, we provide exceptional services that your</p>
        <p className="leading-[24px]">event needs.</p>
      </div>
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Header Section">
      <Heading7 />
      <Container13 />
    </div>
  );
}

function GridLayoutForServiceCards() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[___253px_275.75px_253px] relative shrink-0 w-full" data-name="Grid Layout for Service Cards">
      <Card1Events className="bg-gradient-to-r col-1 from-[rgba(255,223,26,0.06)] justify-self-stretch relative rounded-[12px] row-1 self-stretch shrink-0 to-[rgba(255,166,0,0.06)]" />
      <Card2DjEntertainment className="bg-gradient-to-r col-2 from-[rgba(255,223,26,0.06)] justify-self-stretch relative rounded-[12px] row-1 self-stretch shrink-0 to-[rgba(255,166,0,0.06)]" />
      <Card3WeddingVenues className="bg-gradient-to-r col-3 from-[rgba(255,223,26,0.06)] justify-self-stretch relative rounded-[12px] row-1 self-stretch shrink-0 to-[rgba(255,166,0,0.06)]" />
      <Card4Choreographers className="bg-gradient-to-r col-4 from-[rgba(255,223,26,0.06)] justify-self-stretch relative rounded-[12px] row-1 self-stretch shrink-0 to-[rgba(255,166,0,0.06)]" />
      <Card5FloristDecorators className="bg-gradient-to-r col-1 from-[rgba(255,223,26,0.06)] justify-self-stretch relative rounded-[12px] row-2 self-stretch shrink-0 to-[rgba(255,166,0,0.06)]" />
      <Card6Anchors className="bg-gradient-to-r col-2 from-[rgba(255,223,26,0.06)] justify-self-stretch relative rounded-[12px] row-2 self-stretch shrink-0 to-[rgba(255,166,0,0.06)]" />
      <Card7BridalMehndi className="bg-gradient-to-r col-3 from-[rgba(255,223,26,0.06)] justify-self-stretch relative rounded-[12px] row-2 self-stretch shrink-0 to-[rgba(255,166,0,0.06)]" />
      <Card8HairStylist className="bg-gradient-to-r col-4 from-[rgba(255,223,26,0.06)] justify-self-stretch relative rounded-[12px] row-2 self-stretch shrink-0 to-[rgba(255,166,0,0.06)]" />
      <Card9MakeupArtist className="bg-gradient-to-r col-1 from-[rgba(255,223,26,0.06)] justify-self-stretch relative rounded-[12px] row-3 self-stretch shrink-0 to-[rgba(255,166,0,0.06)]" />
      <Card10Photography className="bg-gradient-to-r col-2 from-[rgba(255,223,26,0.06)] justify-self-stretch relative rounded-[12px] row-3 self-stretch shrink-0 to-[rgba(255,166,0,0.06)]" />
      <Card11Videography className="bg-gradient-to-r col-3 from-[rgba(255,223,26,0.06)] justify-self-stretch relative rounded-[12px] row-3 self-stretch shrink-0 to-[rgba(255,166,0,0.06)]" />
      <Card12Caterers className="bg-gradient-to-r col-4 from-[rgba(255,223,26,0.06)] justify-self-stretch relative rounded-[12px] row-3 self-stretch shrink-0 to-[rgba(255,166,0,0.06)]" />
    </div>
  );
}

function ServicesSection() {
  return (
    <div className="max-w-[1280px] mx-auto relative shrink-0 w-full" data-name="Services Section">
      <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[inherit] px-[32px] py-[64px] relative size-full">
        <HeaderSection />
        <GridLayoutForServiceCards />
      </div>
    </div>
  );
}

function HtmlBody() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-col from-white items-center relative shrink-0 to-white w-full" data-name="Html → Body">
      <ServicesSection />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Libre_Caslon_Text:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[48px] text-black w-full">
        <p className="leading-[56px]">Where we produce events</p>
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#565656] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Ahmedabad</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#565656] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Headquarters - Gujarat</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading9 />
        <Container16 />
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p3577ba00} id="Vector" stroke="#565656" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function LinkLocationCards() {
  return (
    <div className="bg-gradient-to-r col-1 from-[rgba(255,223,26,0.06)] h-[70px] justify-self-stretch relative rounded-[4px] row-1 shrink-0 to-[rgba(255,166,0,0.06)]" data-name="Link - Location Cards">
      <div aria-hidden className="absolute border border-[#f97316] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[17px] relative size-full">
          <Container15 />
          <Svg />
        </div>
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#565656] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Mumbai</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#565656] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Maharashtra</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading10 />
        <Container18 />
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p3577ba00} id="Vector" stroke="#565656" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-gradient-to-r col-2 from-[rgba(255,223,26,0.06)] h-[70px] justify-self-stretch relative rounded-[4px] row-1 shrink-0 to-[rgba(255,166,0,0.06)]" data-name="Link">
      <div aria-hidden className="absolute border border-[#f97316] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[17px] relative size-full">
          <Container17 />
          <Svg1 />
        </div>
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#565656] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Delhi NCR</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#565656] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Capital region</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading11 />
        <Container20 />
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p3577ba00} id="Vector" stroke="#565656" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-gradient-to-r col-1 from-[rgba(255,223,26,0.06)] h-[70px] justify-self-stretch relative rounded-[4px] row-2 shrink-0 to-[rgba(255,166,0,0.06)]" data-name="Link">
      <div aria-hidden className="absolute border border-[#f97316] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[17px] relative size-full">
          <Container19 />
          <Svg2 />
        </div>
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#565656] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Bengaluru</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#565656] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Karnataka</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading12 />
        <Container22 />
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p3577ba00} id="Vector" stroke="#565656" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="bg-gradient-to-r col-2 from-[rgba(255,223,26,0.06)] h-[70px] justify-self-stretch relative rounded-[4px] row-2 shrink-0 to-[rgba(255,166,0,0.06)]" data-name="Link">
      <div aria-hidden className="absolute border border-[#f97316] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[17px] relative size-full">
          <Container21 />
          <Svg3 />
        </div>
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#565656] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Jaipur</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#565656] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Rajasthan</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading13 />
        <Container24 />
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p3577ba00} id="Vector" stroke="#565656" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link4() {
  return (
    <div className="bg-gradient-to-r col-1 from-[rgba(255,223,26,0.06)] h-[70px] justify-self-stretch relative rounded-[4px] row-3 shrink-0 to-[rgba(255,166,0,0.06)]" data-name="Link">
      <div aria-hidden className="absolute border border-[#f97316] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[17px] relative size-full">
          <Container23 />
          <Svg4 />
        </div>
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#565656] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Surat</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#565656] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Gujarat</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading14 />
        <Container26 />
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p3577ba00} id="Vector" stroke="#565656" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link5() {
  return (
    <div className="bg-gradient-to-r col-2 from-[rgba(255,223,26,0.06)] h-[70px] justify-self-stretch relative rounded-[4px] row-3 shrink-0 to-[rgba(255,166,0,0.06)]" data-name="Link">
      <div aria-hidden className="absolute border border-[#f97316] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[17px] relative size-full">
          <Container25 />
          <Svg5 />
        </div>
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#565656] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Hyderabad</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#565656] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Telangana</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading15 />
        <Container28 />
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p3577ba00} id="Vector" stroke="#565656" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link6() {
  return (
    <div className="bg-gradient-to-r col-1 from-[rgba(255,223,26,0.06)] h-[70px] justify-self-stretch relative rounded-[4px] row-4 shrink-0 to-[rgba(255,166,0,0.06)]" data-name="Link">
      <div aria-hidden className="absolute border border-[#f97316] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[17px] relative size-full">
          <Container27 />
          <Svg6 />
        </div>
      </div>
    </div>
  );
}

function Heading16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#565656] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Chennai</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#565656] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Tamil Nadu</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading16 />
        <Container30 />
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p3577ba00} id="Vector" stroke="#565656" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link7() {
  return (
    <div className="bg-gradient-to-r col-2 from-[rgba(255,223,26,0.06)] h-[70px] justify-self-stretch relative rounded-[4px] row-4 shrink-0 to-[rgba(255,166,0,0.06)]" data-name="Link">
      <div aria-hidden className="absolute border border-[#f97316] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[17px] relative size-full">
          <Container29 />
          <Svg7 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[____70px_70px_70px_70px] pt-[24px] relative shrink-0 w-full" data-name="Container">
      <LinkLocationCards />
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
      <Link5 />
      <Link6 />
      <Link7 />
    </div>
  );
}

function LeftColumnLocations() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[472px]" data-name="Left Column: Locations">
      <Heading8 />
      <Container14 />
    </div>
  );
}

function Heading17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Libre_Caslon_Text:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[36px] text-black w-full">
        <p className="leading-[56px]">Who we work with</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#565656] relative rounded-[9999px] shrink-0 size-[4px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#565656] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">{`Corporate & Fortune-500`}</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#565656] relative rounded-[9999px] shrink-0 size-[4px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#565656] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Weddings (Mangal Phera)</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#565656] relative rounded-[9999px] shrink-0 size-[4px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#565656] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">{`Government & Public Sector`}</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#565656] relative rounded-[9999px] shrink-0 size-[4px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#565656] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">{`Tourism & Hospitality`}</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#565656] relative rounded-[9999px] shrink-0 size-[4px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#565656] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">{`Media & Broadcast`}</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#565656] relative rounded-[9999px] shrink-0 size-[4px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#565656] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">{`BFSI & Insurance`}</p>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#565656] relative rounded-[9999px] shrink-0 size-[4px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#565656] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">{`Pharma & Healthcare`}</p>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#565656] relative rounded-[9999px] shrink-0 size-[4px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#565656] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Consumer Brands</p>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#565656] relative rounded-[9999px] shrink-0 size-[4px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#565656] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">{`Real Estate & Infrastructure`}</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[11.5px] items-start pt-[16px] relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
      <Item5 />
      <Item6 />
      <Item7 />
      <Item8 />
    </div>
  );
}

function RightColumnIndustries() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[60px] relative shrink-0 w-[472px]" data-name="Right Column: Industries">
      <Heading17 />
      <List />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-start justify-between max-w-[1280px] mx-auto px-[120px] py-[60px] relative shrink-0 w-full max-[700px]:flex-col max-[700px]:gap-[40px] max-[700px]:px-[24px] max-[700px]:py-[48px]">
      <LeftColumnLocations />
      <RightColumnIndustries />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-left whitespace-nowrap">
        <p className="leading-[28px]">What types of events do you organize?</p>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p194bd00} id="Vector" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="flex-none rotate-180">
        <div className="content-stretch flex items-center justify-center relative rounded-[9999px] size-[32px]" data-name="Background">
          <Svg8 />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container31 />
        <Background />
      </div>
    </div>
  );
}

function FaqItem1Active() {
  return (
    <div className="content-stretch flex flex-col h-[49px] items-start pb-[16px] relative shrink-0 w-full" data-name="FAQ Item 1 (Active)">
      <Button />
    </div>
  );
}

function Svg9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p194bd00} id="Vector" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <Svg9 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-left w-[728px]">
        <p className="leading-[28px]">We organize corporate events, weddings, exhibitions, conferences, product launches, private celebrations, and other special occasions.</p>
      </div>
      <Background1 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-left whitespace-nowrap">
        <p className="leading-[28px]">How early should I book an event?</p>
      </div>
    </div>
  );
}

function Svg10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p194bd00} id="Vector" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="flex-none rotate-180">
        <div className="content-stretch flex items-center justify-center relative rounded-[9999px] size-[32px]" data-name="Background">
          <Svg10 />
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container32 />
        <Background2 />
      </div>
    </div>
  );
}

function FaqItem1Active1() {
  return (
    <div className="content-stretch flex flex-col h-[49px] items-start pb-[16px] relative shrink-0 w-full" data-name="FAQ Item 1 (Active)">
      <Button1 />
    </div>
  );
}

function Svg11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p194bd00} id="Vector" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <Svg11 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-left w-[728px]">
        <p className="leading-[28px]">We recommend booking 2–3 months in advance. For large weddings, corporate events, or exhibitions, earlier booking is better.</p>
      </div>
      <Background3 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-left whitespace-nowrap">
        <p className="leading-[28px]">Can you customize an event according to our requirements?</p>
      </div>
    </div>
  );
}

function Svg12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p194bd00} id="Vector" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Background4() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="flex-none rotate-180">
        <div className="content-stretch flex items-center justify-center relative rounded-[9999px] size-[32px]" data-name="Background">
          <Svg12 />
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container33 />
        <Background4 />
      </div>
    </div>
  );
}

function FaqItem1Active2() {
  return (
    <div className="content-stretch flex flex-col h-[49px] items-start pb-[16px] relative shrink-0 w-full" data-name="FAQ Item 1 (Active)">
      <Button2 />
    </div>
  );
}

function Svg13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p194bd00} id="Vector" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Background5() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <Svg13 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-left w-[728px]">
        <p className="leading-[28px]">Absolutely. We create customized event experiences based on your theme, budget, venue, guest count, and specific requirements.</p>
      </div>
      <Background5 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-left whitespace-nowrap">
        <p className="leading-[28px]">How can I get a quote for my event?</p>
      </div>
    </div>
  );
}

function Svg14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p194bd00} id="Vector" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Background6() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="flex-none rotate-180">
        <div className="content-stretch flex items-center justify-center relative rounded-[9999px] size-[32px]" data-name="Background">
          <Svg14 />
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container34 />
        <Background6 />
      </div>
    </div>
  );
}

function FaqItem1Active3() {
  return (
    <div className="content-stretch flex flex-col h-[49px] items-start pb-[16px] relative shrink-0 w-full" data-name="FAQ Item 1 (Active)">
      <Button3 />
    </div>
  );
}

function Svg15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p194bd00} id="Vector" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Background7() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <Svg15 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-left w-[728px]">
        <p className="leading-[28px]">Simply contact us with your event details, including the event type, date, venue, and expected guest count. Our team will discuss your requirements and provide a suitable quotation.</p>
      </div>
      <Background7 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Libre_Caslon_Text:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[48px] text-black text-center w-full">
        <p className="leading-[56px]">Frequently Asked Questions</p>
      </div>
      <Faq className="bg-[#565656] cursor-pointer relative rounded-[20px] shrink-0 w-full" />
      <button className="bg-[#565656] cursor-pointer relative rounded-[20px] shrink-0 w-full">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[14px] items-start px-[20px] py-[30px] relative size-full">
            <FaqItem1Active />
            <Frame9 />
          </div>
        </div>
      </button>
      <button className="bg-[#565656] cursor-pointer relative rounded-[20px] shrink-0 w-full">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[14px] items-start px-[20px] py-[30px] relative size-full">
            <FaqItem1Active1 />
            <Frame10 />
          </div>
        </div>
      </button>
      <button className="bg-[#565656] cursor-pointer relative rounded-[20px] shrink-0 w-full">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[14px] items-start px-[20px] py-[30px] relative size-full">
            <FaqItem1Active2 />
            <Frame11 />
          </div>
        </div>
      </button>
      <button className="bg-[#565656] cursor-pointer relative rounded-[20px] shrink-0 w-full">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[14px] items-start px-[20px] py-[30px] relative size-full">
            <FaqItem1Active3 />
            <Frame12 />
          </div>
        </div>
      </button>
    </div>
  );
}

function FeaturedSection() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[180px] py-[120px] relative shrink-0 w-full" data-name="Featured Section">
      <Frame13 />
    </div>
  );
}

function Heading18() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center relative shrink-0" data-name="Heading 2">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Libre_Caslon_Text:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[48px] text-black text-center whitespace-nowrap">
        <p className="leading-[56px]">producing event for</p>
      </div>
    </div>
  );
}

function RestreamFormat() {
  return (
    <div className="-translate-y-1/2 absolute aspect-[171.88873291015625/28.20049476623535] left-[7.03%] overflow-clip right-[7.03%] top-1/2" data-name="Restream/Format-139">
      <div className="absolute inset-[0_86.66%_5.14%_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="30.8986" preserveAspectRatio="none" viewBox="0 0 26.4906 30.8986" width="26.4906">
          <path d={svgPaths.p1d3f900} fill="black" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[23.62%_74.38%_3.55%_13.67%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="23.7249" preserveAspectRatio="none" viewBox="0 0 23.7248 23.7249" width="23.7248">
          <path d={svgPaths.p3709f2c0} fill="black" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[23.62%_62.99%_3.55%_26.63%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="23.7249" preserveAspectRatio="none" viewBox="0 0 20.6135 23.7249" width="20.6135">
          <path d={svgPaths.p3859f3f0} fill="black" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[11.01%_54.72%_3.55%_37.74%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="27.8302" preserveAspectRatio="none" viewBox="0 0 14.9522 27.8302" width="14.9522">
          <path d={svgPaths.p255f8500} fill="black" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[24.54%_45.37%_5.14%_47.05%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="22.9048" preserveAspectRatio="none" viewBox="0 0 15.0387 22.9048" width="15.0387">
          <path d={svgPaths.p202f4d00} fill="black" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[23.62%_32.4%_3.55%_55.65%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="23.7249" preserveAspectRatio="none" viewBox="0 0 23.725 23.7249" width="23.725">
          <path d={svgPaths.p3c06e9f0} fill="black" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[23.62%_20.27%_3.55%_68.72%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="23.7249" preserveAspectRatio="none" viewBox="0 0 21.8663 23.7249" width="21.8663">
          <path d={svgPaths.p24bc9f0} fill="black" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[23.61%_0_5.14%_81.95%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="23.2062" preserveAspectRatio="none" viewBox="0 0 35.8255 23.2062" width="35.8255">
          <path d={svgPaths.p1b120480} fill="black" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function RemoteFormat() {
  return (
    <div className="-translate-y-1/2 absolute aspect-[156.1682891845703/35.10759735107422] left-[10.96%] overflow-clip right-[10.96%] top-1/2" data-name="Remote/Format-143">
      <div className="absolute inset-[0_0.77%_2.76%_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="39.4334" preserveAspectRatio="none" viewBox="0 0 178.988 39.4334" width="178.988">
          <path d={svgPaths.p19b3300} fill="#4F0AF5" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function ExpediaFormat() {
  return (
    <div className="-translate-y-1/2 absolute aspect-[150.55191040039062/33.45598220825195] left-[12.36%] overflow-clip right-[12.36%] top-1/2" data-name="Expedia/Format-371">
      <div className="absolute inset-[0_78.18%_1.95%_0.03%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="37.8892" preserveAspectRatio="none" viewBox="0 0 37.8891 37.8892" width="37.8891">
          <path d={svgPaths.p298c8200} fill="black" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[18.45%_79.4%_18.27%_1.29%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="24.4531" preserveAspectRatio="none" viewBox="0 0 33.5749 24.4531" width="33.5749">
          <path d={svgPaths.p2b74b770} fill="#FFC94C" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[31.63%_0.13%_17.09%_89.18%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="19.8186" preserveAspectRatio="none" viewBox="0 0 18.585 19.8186" width="18.585">
          <path d={svgPaths.p2403f780} fill="black" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[13.31%_12.14%_72.99%_84.82%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="5.29577" preserveAspectRatio="none" viewBox="0 0 5.29652 5.29577" width="5.29652">
          <path d={svgPaths.p1f0b140} fill="black" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[32.74%_12.54%_18.25%_85.21%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="18.941" preserveAspectRatio="none" viewBox="0 0 3.91745 18.941" width="3.91745">
          <path d={svgPaths.p7ba2880} fill="black" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[14.56%_16.99%_17.09%_72.33%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="26.4133" preserveAspectRatio="none" viewBox="0 0 18.585 26.4133" width="18.585">
          <path d={svgPaths.peaed080} fill="black" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[31.47%_28.83%_17%_60.4%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="19.9128" preserveAspectRatio="none" viewBox="0 0 18.7371 19.9128" width="18.7371">
          <path clipRule="evenodd" d={svgPaths.p298b3b80} fill="black" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[31.58%_40.68%_0.07%_48.63%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="26.4133" preserveAspectRatio="none" viewBox="0 0 18.5859 26.4133" width="18.5859">
          <path d={svgPaths.p22545b00} fill="black" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[32.74%_52.32%_18.25%_36.76%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="18.9394" preserveAspectRatio="none" viewBox="0 0 18.9873 18.9394" width="18.9873">
          <path d={svgPaths.p1420ea00} fill="black" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[16.29%_64.09%_18.25%_27.25%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="25.2956" preserveAspectRatio="none" viewBox="0 0 15.0486 25.2956" width="15.0486">
          <path d={svgPaths.p299b96b0} fill="black" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function ReplitFormat() {
  return (
    <div className="-translate-y-1/2 absolute aspect-[132.9868927001953/39.01275634765625] left-[16.75%] overflow-clip right-[16.75%] top-1/2" data-name="Replit/Format-141">
      <div className="absolute inset-[40.26%_75.51%_55.92%_24.44%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="1.72424" preserveAspectRatio="none" viewBox="0 0 0.0870032 1.72424" width="0.0870032">
          <path d={svgPaths.p21d77340} fill="black" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[40.04%_75.51%_16.9%_5.92%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="19.4068" preserveAspectRatio="none" viewBox="0 0 28.5219 19.4068" width="28.5219">
          <path d={svgPaths.p31885900} fill="black" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[22.8%_86.54%_14.11%_0.85%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="28.4297" preserveAspectRatio="none" viewBox="0 0 19.3685 28.4297" width="19.3685">
          <path d={svgPaths.p3120b600} fill="black" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[5.28%_81.42%_50.25%_0.05%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="20.0361" preserveAspectRatio="none" viewBox="0 0 28.4634 20.0361" width="28.4634">
          <path d={svgPaths.p8070f80} fill="black" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[2.41%_76.25%_34.63%_10.05%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="28.3724" preserveAspectRatio="none" viewBox="0 0 21.045 28.3724" width="21.045">
          <path d={svgPaths.p286bc100} fill="black" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0.48%_0.02%_0.09%_8.95%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="44.805" preserveAspectRatio="none" viewBox="0 0 139.823 44.805" width="139.823">
          <path d={svgPaths.p5cdaa00} fill="black" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function EbayFormat() {
  return (
    <div className="-translate-y-1/2 absolute aspect-[122.7585220336914/49.23603820800781] left-[19.31%] overflow-clip right-[19.31%] top-1/2" data-name="Ebay/Format-373">
      <div className="absolute inset-[21.86%_74.85%_19.14%_0.03%]" data-name="e">
        <svg className="absolute block inset-0 size-full" fill="none" height="33.5483" preserveAspectRatio="none" viewBox="0 0 35.6128 33.5483" width="35.6128">
          <path d={svgPaths.p33d4d800} fill="#E53238" id="e" />
        </svg>
      </div>
      <div className="absolute inset-[0.08%_48.83%_18.97%_25.03%]" data-name="b">
        <svg className="absolute block inset-0 size-full" fill="none" height="46.0322" preserveAspectRatio="none" viewBox="0 0 37.0632 46.0322" width="37.0632">
          <path d={svgPaths.p17ce5e00} fill="#0064D2" id="b" />
        </svg>
      </div>
      <div className="absolute inset-[21.86%_25.35%_18.82%_50.63%]" data-name="a">
        <svg className="absolute block inset-0 size-full" fill="none" height="33.7338" preserveAspectRatio="none" viewBox="0 0 34.0644 33.7338" width="34.0644">
          <path d={svgPaths.p1e901a00} fill="#F5AF02" id="a" />
        </svg>
      </div>
      <div className="absolute inset-[24.14%_0.03%_0.08%_71.63%]" data-name="y">
        <svg className="absolute block inset-0 size-full" fill="none" height="43.0967" preserveAspectRatio="none" viewBox="0 0 40.1842 43.0967" width="40.1842">
          <path d={svgPaths.p6b72f00} fill="#86B817" id="y" />
        </svg>
      </div>
    </div>
  );
}

function HopinFormat() {
  return (
    <div className="-translate-y-1/2 absolute aspect-[135.39501953125/39.03279495239258] left-[16.15%] overflow-clip right-[16.15%] top-1/2" data-name="Hopin/Format-307">
      <div className="absolute inset-[0.79%_16.35%_83.15%_78.99%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="7.24116" preserveAspectRatio="none" viewBox="0 0 7.2784 7.24116" width="7.2784">
          <path d={svgPaths.p3c104600} fill="#2C3242" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[21.35%_22.39%_0_61.39%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="35.461" preserveAspectRatio="none" viewBox="0 0 25.3679 35.461" width="25.3679">
          <path d={svgPaths.p3995f800} fill="#2C3242" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[21.35%_0_22.85%_85.64%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="25.1578" preserveAspectRatio="none" viewBox="0 0 22.4567 25.1578" width="22.4567">
          <path d={svgPaths.p30718f80} fill="#2C3242" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0.79%_59.09%_22.85%_26.55%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="34.4266" preserveAspectRatio="none" viewBox="0 0 22.4568 34.4266" width="22.4568">
          <path d={svgPaths.p18742000} fill="#2C3242" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[22.45%_16.97%_22.85%_79.55%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="24.6613" preserveAspectRatio="none" viewBox="0 0 5.44778 24.6613" width="5.44778">
          <path d={svgPaths.p177b5ec0} fill="#2C3242" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[21.35%_40.55%_21.75%_42.85%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="25.6543" preserveAspectRatio="none" viewBox="0 0 25.95 25.6543" width="25.95">
          <path d={svgPaths.p2d7bfc00} fill="#2C3242" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0.7%_86.13%_75.72%_6.6%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="10.6345" preserveAspectRatio="none" viewBox="0 0 11.3751 10.6345" width="11.3751">
          <path d={svgPaths.p3736b7c0} fill="#175FFF" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[10.54%_90.39%_71.83%_1.45%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="7.9484" preserveAspectRatio="none" viewBox="0 0 12.7578 7.9484" width="12.7578">
          <path d={svgPaths.pe4c800} fill="#175FFF" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[26.69%_92.56%_50.12%_0.22%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="10.4583" preserveAspectRatio="none" viewBox="0 0 11.2842 10.4583" width="11.2842">
          <path d={svgPaths.p23eff900} fill="#175FFF" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[42.49%_92.12%_29.45%_2.35%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="12.65" preserveAspectRatio="none" viewBox="0 0 8.65025 12.65" width="8.65025">
          <path d={svgPaths.p2f61eaf0} fill="#175FFF" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[52.04%_87.19%_22.14%_6.72%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="11.6404" preserveAspectRatio="none" viewBox="0 0 9.50892 11.6404" width="9.50892">
          <path d={svgPaths.p3bb9fc00} fill="#175FFF" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[52.79%_80.48%_26.48%_11.51%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="9.34664" preserveAspectRatio="none" viewBox="0 0 12.5269 9.34664" width="12.5269">
          <path d={svgPaths.p3553e700} fill="#175FFF" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[41.01%_77.33%_40.42%_14.85%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="8.37119" preserveAspectRatio="none" viewBox="0 0 12.2286 8.37119" width="12.2286">
          <path d={svgPaths.p33b54700} fill="#175FFF" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[16.42%_77.85%_57.15%_15.75%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="11.9171" preserveAspectRatio="none" viewBox="0 0 10.0173 11.9171" width="10.0173">
          <path d={svgPaths.p1e280700} fill="#175FFF" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[2.09%_81.29%_70.29%_13.99%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="12.4503" preserveAspectRatio="none" viewBox="0 0 7.37892 12.4503" width="7.37892">
          <path d={svgPaths.p14e3ea00} fill="#175FFF" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function HerokuFormat() {
  return (
    <div className="-translate-y-1/2 absolute aspect-[145.4813232421875/40.69407653808594] left-[13.63%] overflow-clip right-[13.63%] top-1/2" data-name="Heroku/Format-309">
      <div className="absolute inset-[0_0.14%_0_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="47.0035" preserveAspectRatio="none" viewBox="0 0 167.803 47.0035" width="167.803">
          <path d={svgPaths.p21b60700} fill="#430098" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function HelpScoutFormat() {
  return (
    <div className="-translate-y-1/2 absolute aspect-[163.12197875976562/32.57011032104492] left-[9.22%] overflow-clip right-[9.22%] top-1/2" data-name="Help Scout/Format-311">
      <div className="absolute inset-[18.16%_0.15%_0.58%_20.1%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="30.5703" preserveAspectRatio="none" viewBox="0 0 150.269 30.5703" width="150.269">
          <path d={svgPaths.pf14ac80} fill="#2A3B47" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_83.64%_1.08%_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="37.2124" preserveAspectRatio="none" viewBox="0 0 30.817 37.2124" width="30.817">
          <path d={svgPaths.p3099ac00} fill="#1087D8" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function HellosignFormat() {
  return (
    <div className="-translate-y-1/2 absolute aspect-[184/26.949495315551758] left-[4%] overflow-clip right-[4%] top-1/2" data-name="Hellosign/Format-313">
      <div className="absolute inset-[0.61%_84.18%_0.08%_0.06%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="30.9132" preserveAspectRatio="none" viewBox="0 0 33.4893 30.9132" width="33.4893">
          <path clipRule="evenodd" d={svgPaths.p28595980} fill="#00B3E6" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.15%_72.32%_16.63%_19.45%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="20.6131" preserveAspectRatio="none" viewBox="0 0 17.4917 20.6131" width="17.4917">
          <path d={svgPaths.p3cc6b080} fill="black" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.17%_63.33%_16.63%_30.52%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="20.6088" preserveAspectRatio="none" viewBox="0 0 13.0587 20.6088" width="13.0587">
          <path d={svgPaths.p64880} fill="black" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.17%_54.51%_16.61%_39.35%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="20.6131" preserveAspectRatio="none" viewBox="0 0 13.048 20.6131" width="13.048">
          <path d={svgPaths.p18545500} fill="black" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.17%_46.48%_16.61%_47.37%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="20.6131" preserveAspectRatio="none" viewBox="0 0 13.0544 20.6131" width="13.0544">
          <path d={svgPaths.p1383db00} fill="black" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[16.06%_35.12%_15.54%_54.94%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="21.2894" preserveAspectRatio="none" viewBox="0 0 21.1197 21.2894" width="21.1197">
          <path d={svgPaths.p1e250200} fill="black" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[16.06%_26.81%_15.54%_66.47%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="21.2894" preserveAspectRatio="none" viewBox="0 0 14.2845 21.2894" width="14.2845">
          <path d={svgPaths.p2407d300} fill="black" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.17%_22.15%_16.63%_75.6%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="20.6088" preserveAspectRatio="none" viewBox="0 0 4.78082 20.6088" width="4.78082">
          <path d={svgPaths.p3ba01c40} fill="black" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[16.06%_10.93%_15.54%_80.29%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="21.2912" preserveAspectRatio="none" viewBox="0 0 18.6445 21.2912" width="18.6445">
          <path d={svgPaths.pf7a2200} fill="black" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[15.88%_0.03%_15.37%_91.65%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="21.401" preserveAspectRatio="none" viewBox="0 0 17.6871 21.401" width="17.6871">
          <path d={svgPaths.pae65980} fill="black" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function HeapFormat() {
  return (
    <div className="-translate-y-1/2 absolute aspect-[125.82598114013672/48.8500862121582] left-[18.54%] overflow-clip right-[18.54%] top-1/2" data-name="Heap/Format-315">
      <div className="absolute inset-[21.67%_94.76%_22.5%_0.81%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="31.5003" preserveAspectRatio="none" viewBox="0 0 6.42866 31.5003" width="6.42866">
          <path d={svgPaths.pb54e100} fill="black" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0.4%_85.18%_57.06%_10.4%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="24.0002" preserveAspectRatio="none" viewBox="0 0 6.42869 24.0002" width="6.42869">
          <path d={svgPaths.p315f2480} fill="black" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[56.24%_85.18%_1.23%_10.4%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="24.0002" preserveAspectRatio="none" viewBox="0 0 6.42869 24.0002" width="6.42869">
          <path d={svgPaths.p315f2480} fill="#31D891" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[21.67%_75.6%_22.5%_19.98%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="31.5003" preserveAspectRatio="none" viewBox="0 0 6.42858 31.5003" width="6.42858">
          <path d={svgPaths.p166b3dc0} fill="#31D891" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[21.66%_47.62%_22.53%_35.33%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="31.4871" preserveAspectRatio="none" viewBox="0 0 24.7821 31.4871" width="24.7821">
          <path d={svgPaths.p23fa4900} fill="black" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[38.42%_31.39%_21.36%_54.53%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="22.6936" preserveAspectRatio="none" viewBox="0 0 20.4732 22.6936" width="20.4732">
          <path d={svgPaths.pbeb36f0} fill="black" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[38.44%_17.35%_21.35%_70.03%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="22.6883" preserveAspectRatio="none" viewBox="0 0 18.3412 22.6883" width="18.3412">
          <path d={svgPaths.p18a9300} fill="black" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[38.74%_0.37%_7.58%_85.18%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="30.2883" preserveAspectRatio="none" viewBox="0 0 21.007 30.2883" width="21.007">
          <path d={svgPaths.p35855af0} fill="black" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function PartnerLogoSlot(props: any) {
  return <div className="relative shrink-0 size-[231px]" data-name="Partner Logo">{props.children}</div>;
}

function PartnerLogoSet() {
  return <>
    <PartnerLogoSlot><RestreamFormat /></PartnerLogoSlot>
    <PartnerLogoSlot><RemoteFormat /></PartnerLogoSlot>
    <PartnerLogoSlot><ExpediaFormat /></PartnerLogoSlot>
    <PartnerLogoSlot><ReplitFormat /></PartnerLogoSlot>
    <PartnerLogoSlot><EbayFormat /></PartnerLogoSlot>
    <PartnerLogoSlot><HopinFormat /></PartnerLogoSlot>
    <PartnerLogoSlot><HerokuFormat /></PartnerLogoSlot>
    <PartnerLogoSlot><HelpScoutFormat /></PartnerLogoSlot>
    <PartnerLogoSlot><HellosignFormat /></PartnerLogoSlot>
    <PartnerLogoSlot><HeapFormat /></PartnerLogoSlot>
  </>;
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[35px] items-center overflow-hidden py-[120px] relative shrink-0 w-full">
      <Heading18 />
      <div className="h-[231px] relative shrink-0 w-full" data-name="Producing Event For">
        <div className="partner-marquee flex h-full w-max">
          <PartnerLogoSet />
          <PartnerLogoSet />
        </div>
      </div>
    </div>
  );
}

function Heading19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Libre_Caslon_Text:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#251915] text-[48px] whitespace-nowrap">
        <p className="leading-[56px] mb-0">{`Let's plan your next`}</p>
        <p className="leading-[56px]">moment.</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[448px] relative shrink-0 w-[448px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#565656] text-[16px] whitespace-nowrap">
        <p className="leading-[24px] mb-0">Contact us today to begin curating your special celebration —</p>
        <p className="leading-[24px] mb-0">{`tell us a bit about what you have in mind and we'll take it from`}</p>
        <p className="leading-[24px]">there.</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p143e1930} fill="black" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap">
          <p className="leading-[24px]">9717928676</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex gap-[8px] items-center max-w-[320px] pb-[9px] relative shrink-0 w-[320px]" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#565656] border-b border-solid inset-0 pointer-events-none" />
      <Container39 />
      <Container40 />
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p143e1930} fill="black" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap">
          <p className="leading-[24px]">9968211112</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center max-w-[320px] pb-[9px] relative shrink-0 w-[320px]" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#565656] border-b border-solid inset-0 pointer-events-none" />
      <Container41 />
      <Container42 />
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 20 16" width="20">
        <g id="Container">
          <path d={svgPaths.p13e73800} fill="black" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap">
          <p className="leading-[24px]">sales@happy-movments.co.in</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center max-w-[320px] pb-[9px] relative shrink-0 w-[320px]" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#565656] border-b border-solid inset-0 pointer-events-none" />
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 20 16" width="20">
        <g id="Container">
          <path d={svgPaths.p13e73800} fill="black" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap">
          <p className="leading-[24px]">www.happy-moments.co.in</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center max-w-[320px] pb-[9px] relative shrink-0 w-[320px]" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#565656] border-b border-solid inset-0 pointer-events-none" />
      <Container45 />
      <Container46 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pt-[16px] relative shrink-0 w-full" data-name="Container">
      <HorizontalBorder />
      <HorizontalBorder1 />
      <HorizontalBorder2 />
      <HorizontalBorder3 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[16px] relative shrink-0" data-name="Container">
      <Heading19 />
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="30" preserveAspectRatio="none" viewBox="0 0 384 30" width="384">
        <g id="Container">
          <path d={svgPaths.p2e497c80} fill="url(#paint0_linear_0_564)" id="Icon" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_564" x1="0" x2="384" y1="15" y2="15">
            <stop stopColor="#F97316" />
            <stop offset="1" stopColor="#F95316" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Heading20() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[0.6px] relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Libre_Caslon_Text:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[20px] text-black w-full">
        <p className="leading-[28px]">Address / Visit Us</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal gap-[22.375px] items-start leading-[0] opacity-90 relative shrink-0 text-[#565656] text-[14px] w-full whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[22.75px] mb-0">1-2-34/5, Jubilee Hills, Hyderabad,</p>
        <p className="leading-[22.75px]">Telangana 500033, India</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[22.75px]">Open: Monday - Saturday (10 AM - 6 PM)</p>
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="max-w-[448px] relative rounded-[4px] shrink-0 w-full" data-name="Background">
      <div aria-hidden className="absolute border border-[#565656] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[15.4px] items-start max-w-[inherit] p-[32px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_-0.23px_0] rounded-[4px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
        <Container47 />
        <Heading20 />
        <Paragraph />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex flex-col h-full items-start justify-between max-w-[1280px] relative shrink-0" data-name="Container">
        <Container36 />
        <Background8 />
      </div>
    </div>
  );
}

function FormHeaderHeading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Form Header → Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Libre_Caslon_Text:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[30px] text-white tracking-[-0.75px] w-full">
        <p className="leading-[36px]">Enquiry Form</p>
      </div>
    </div>
  );
}

function Svg16() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="SVG">
          <path d={svgPaths.p2fe0b980} id="Vector" stroke="#22C55E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p1f206920} fill="#22C55E" id="Vector_2" />
          <path d={svgPaths.p330bd600} fill="#22C55E" id="Vector_3" />
          <path d={svgPaths.p3a65eef0} fill="#22C55E" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function WhatsAppIconPlaceholderUsingSvg() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="WhatsApp Icon Placeholder (Using SVG)">
      <Svg16 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Or message us on WhatsApp</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container50 />
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <WhatsAppIconPlaceholderUsingSvg />
        <Container49 />
      </div>
    </div>
  );
}

function LinkWhatsAppCta() {
  return (
    <a
      className="bg-[#13281c] content-stretch flex flex-col items-start p-[17px] relative rounded-[8px] shrink-0 w-full no-underline"
      data-name="Link - WhatsApp CTA"
      href="https://wa.me/919717928676"
      rel="noreferrer"
      target="_blank"
    >
      <div aria-hidden className="absolute border border-[#1c4a2c] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container48 />
    </a>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start relative size-full">
        <FormHeaderHeading />
        <LinkWhatsAppCta />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[20px]">Name</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] w-full">
          <p className="leading-[normal]">Enter your name</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[15px] pt-[14px] px-[17px] relative size-full">
          <Container51 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#565656] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function NameField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Name Field">
      <Label />
      <Input />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p>
          <span className="leading-[20px]">{`Email `}</span>
          <span className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#a1a1aa]">(optional)</span>
        </p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] w-full">
          <p className="leading-[normal]">you@company.com</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[15px] pt-[14px] px-[17px] relative size-full">
          <Container52 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#565656] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function EmailField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Email Field">
      <Label1 />
      <Input1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[20px]">Phone Number</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] w-full">
          <p className="leading-[normal]">Enter your phone number</p>
        </div>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[15px] pt-[14px] px-[17px] relative size-full">
          <Container53 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#565656] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function PhoneNumberField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Phone Number Field">
      <Label2 />
      <Input2 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[20px]">Message</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] w-full">
          <p className="leading-[20px]">Tell us about your requirements...</p>
        </div>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-auto rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[93px] pt-[13px] px-[17px] relative size-full">
          <Container54 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#565656] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function MessageField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Message Field">
      <Label3 />
      <Textarea />
    </div>
  );
}

function MainEnquiryForm() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main Enquiry Form">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <NameField />
        <EmailField />
        <PhoneNumberField />
        <MessageField />
      </div>
    </div>
  );
}

function MainEnquiryFormContainer() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = [
      "Hello Happy Moments, I would like to enquire about an event.",
      `Name: ${formData.name}`,
      formData.email && `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Requirements: ${formData.message}`,
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/919717928676?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-row items-center self-stretch">
      <form className="reference-enquiry-form content-stretch flex flex-col items-start max-w-[448px] relative shrink-0 w-[448px]" data-name="Main - EnquiryFormContainer" onSubmit={handleSubmit}>
        <div aria-hidden className="absolute border border-[#565656] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div aria-hidden className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_-0.22px_0] pointer-events-none rounded-[8px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Main - EnquiryFormContainer:shadow" />
        <LinkWhatsAppCta />
        <div className="reference-field">
          <label className="sr-only" htmlFor="enquiry-name">Name</label>
          <input id="enquiry-name" name="name" onChange={(event) => updateField("name", event.target.value)} placeholder="Enter your name" required type="text" value={formData.name} />
        </div>
        <div className="reference-email-field">
          <span>(optional)</span>
          <label className="sr-only" htmlFor="enquiry-email">Email</label>
          <input id="enquiry-email" name="email" onChange={(event) => updateField("email", event.target.value)} placeholder="you@company.com" type="email" value={formData.email} />
        </div>
        <div className="reference-field">
          <label className="sr-only" htmlFor="enquiry-phone">Phone number</label>
          <input id="enquiry-phone" name="phone" onChange={(event) => updateField("phone", event.target.value)} placeholder="Enter your phone number" required type="tel" value={formData.phone} />
        </div>
        <div className="reference-field reference-message-field">
          <label className="sr-only" htmlFor="enquiry-message">Requirements</label>
          <textarea id="enquiry-message" name="message" onChange={(event) => updateField("message", event.target.value)} placeholder="Tell us about your requirements..." required value={formData.message} />
        </div>
        <button className="reference-send-button" type="submit">Send Message</button>
      </form>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden className="absolute border border-[#f97316] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[80px] py-[40px] relative size-full max-[700px]:flex-col max-[700px]:gap-[36px] max-[700px]:px-[20px] max-[700px]:py-[28px]">
          <Container35 />
          <MainEnquiryFormContainer />
        </div>
      </div>
    </div>
  );
}

function SectionLetsPlanYourNextMoment() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[120px] pt-[121px] px-[24px] relative shrink-0 w-full" data-name="Section - Let's plan your next moment">
      <div aria-hidden className="absolute border-[rgba(208,197,175,0.3)] border-solid border-t inset-0 pointer-events-none" />
      <div className="w-full max-w-[1120px]">
        <Frame15 />
      </div>
    </div>
  );
}

function LogoMarkSmall() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Logo Mark Small">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgLogoMarkSmall} />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <LogoMarkSmall />
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#20160d] text-[18px] whitespace-nowrap">Happy Moments</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame1 />
      <p className="[word-break:break-word] font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#565656] text-[11px] tracking-[1px] whitespace-nowrap">YOUR TRUSTED BUSINESS PARTNER</p>
      <p className="[word-break:break-word] font-['IBM_Plex_Mono:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#565656] text-[11px] whitespace-nowrap">© 2026 HAPPY MOMENTS. ALL RIGHTS RESERVED.</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer" data-name="Footer">
      <div className="site-footer-panel">
        <section className="site-footer-about">
          <a className="site-footer-brand" href="/" aria-label="Happy Moments home"><img src={imgImageHappyMomentsLogo} alt="Happy Moments" /><span>Happy<br />Moments</span></a>
          <p>Full service event management from Delhi-NCR 10+ years of event industry experience behind 100+ events: corporate, weddings, Exhibitions, Special Occasions across 25+ cities in India.</p>
          <nav className="site-footer-social" aria-label="Social media"><a href="#contact" aria-label="Instagram">◎</a><a href="#contact" aria-label="Facebook">f</a><a href="#contact" aria-label="Twitter">♥</a><a href="#contact" aria-label="YouTube">▶</a><a href="#contact" aria-label="LinkedIn">in</a></nav>
        </section>
        <section className="site-footer-links"><h3>SERVICES</h3><a href="#services">Corporate.</a><a href="#services">Wedding.</a><a href="#services">Exhibitions.</a><a href="#services">Special Occasions</a></section>
        <section className="site-footer-links"><h3>CONTACT</h3><a href="#contact">Get in Touch</a><a href="tel:+919717928676">+91 9717928676</a><a href="tel:+919968211112">+91 9968211112</a><a href="mailto:sales@happy-moments.co.in">sales@happy-moments.co.in</a></section>
        <div className="site-footer-bottom"><span className="site-footer-mini-brand"><img src={imgImageHappyMomentsLogo} alt="" />Happy Moments</span><span>Managed By D&apos;miraki</span><span>© 2026 HAPPY MOMENTS. ALL RIGHTS RESERVED.</span></div>
      </div>
    </footer>
  );
}

function ImageHappyMomentsLogo() {
  return (
    <div className="relative shrink-0 size-[57px]" data-name="Image (Happy Moments logo)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageHappyMomentsLogo} />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Container">
      <ImageHappyMomentsLogo />
      <div className="[word-break:break-word] font-['Sora:Regular',sans-serif] font-medium leading-[0] relative shrink-0 text-[#20160d] text-[18px] whitespace-nowrap">
        <p className="leading-[22px] mb-0 whitespace-pre">{`Happy `}</p>
        <p className="leading-[22px] whitespace-pre">Moments</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black tracking-[1.4px] whitespace-nowrap">
        <p className="leading-[20px]">Home</p>
      </div>
    </div>
  );
}

function Frame16() {
  return <div className="bg-gradient-to-r from-[#f97316] h-[2px] relative shrink-0 to-[#f95316] w-0" />;
}

function Link9() {
  return (
    <a href="/gallery" className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full no-underline" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black tracking-[1.4px] whitespace-nowrap">
        <p className="leading-[20px]">Gallery</p>
      </div>
    </a>
  );
}

function Frame18() {
  return <div className="bg-gradient-to-r from-[#f97316] h-[2px] relative shrink-0 to-[#f95316] w-0" />;
}

function Link10() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black tracking-[1.4px] whitespace-nowrap">
        <p className="leading-[20px]">Contact</p>
      </div>
    </div>
  );
}

function Frame19() {
  return <div className="bg-gradient-to-r from-[#f97316] h-[2px] relative shrink-0 to-[#f95316] w-0" />;
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Nav">
      <div className="relative shrink-0">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <Link8 />
          <Frame16 />
        </div>
      </div>
      <Frame17 className="relative shrink-0 w-[65.335px]" />
      <div className="relative shrink-0 w-[65.335px]">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <Link9 />
          <Frame18 />
        </div>
      </div>
      <div className="relative shrink-0">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <Link10 />
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function ButtonCssTransform() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-start justify-center pl-[3.05px] py-[14.9px] relative shrink-0" data-name="Button:css-transform">
      <Link className="bg-gradient-to-r from-[#f97316] relative rounded-[30px] shrink-0 to-[#f95316]" />
    </div>
  );
}

function Container55() {
  return (
    <div className="gallery-nav home-gallery-nav" data-name="Container">
      <a className="gallery-brand" href="/" aria-label="Happy Moments home">
        <img src={imgImageHappyMomentsLogo} alt="Happy Moments" />
        <span>Happy<br />Moments</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="#services">Services</a>
        <a href="/gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="gallery-call" href="tel:+919717928676">Call Us <span>→</span></a>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="HOME">
      <HeroCarousel />
      <Container />
      <Frame24 />
      <WhoWeAreSection />
      <WhatWeDoSection />
      <ExceptionalServicesSection />
      <WhyChooseUsSection />
      <Frame2 />
      <SectionLetsPlanYourNextMoment />
      <Footer />
      <div className="absolute backdrop-blur-[6px] bg-white left-0 top-0 w-full z-10" data-name="Header - TopAppBar">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <Container55 />
        </div>
      </div>
    </div>
  );
}
