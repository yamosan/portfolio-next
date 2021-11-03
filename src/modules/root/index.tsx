import type { NextPage } from "next";
import { useCallback } from "react";
import { useRef } from "react";

import { Underlined } from "@/shared/components/basics/Underlined";

import { SelfIntroductionCard } from "./components/SelfIntroductionCard";

const Root: NextPage = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const handleClick = useCallback(() => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <section className="relative flex items-center justify-center h-screen">
        <h1 className="text-white text-6xl font-semibold flex flex-col sm:flex-row">
          <span>Hello,&ensp;</span>
          <span>
            I&apos;m Yam<span className="text-main">o</span>.
          </span>
        </h1>
        <button onClick={handleClick} className="block absolute bottom-0 mb-10">
          <div className="relative p-1.5">
            <p className="text-white font-regular">about me!</p>
            <div className="animate-fade-in-down" aria-hidden>
              <div className="absolute left-1/2 -translate-x-1/2 mx-auto w-4 h-4 border-main border-b-2 border-r-2 transform origin-center rotate-45"></div>
            </div>
          </div>
        </button>
      </section>
      <section
        ref={aboutRef}
        className="flex flex-col space-y-6 lg:space-y-12 items-center justify-center pt-28 sm:pt-48 lg:pt-0 min-h-screen"
      >
        <Underlined as="h2">ABOUT ME</Underlined>
        <SelfIntroductionCard className="w-11/12 max-w-app mx-auto" />
      </section>
    </>
  );
};

export default Root;
