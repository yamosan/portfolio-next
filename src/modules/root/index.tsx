import type { NextPage } from "next";
import { useCallback } from "react";
import { useRef } from "react";

import { Div100vh } from "@/shared/components/basics/Div100vh";
import { Underlined } from "@/shared/components/basics/Underlined";
import { PageSeo } from "@/shared/components/layouts/PageSeo";

import { SelfIntroductionCard } from "./components/SelfIntroductionCard";

const Root: NextPage = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const handleClick = useCallback(() => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <PageSeo path="/" />

      <Div100vh as="section" className="relative flex items-center justify-center">
        <h1 className="text-white text-6xl font-semibold flex flex-col sm:flex-row select-none">
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
      </Div100vh>
      <section
        ref={aboutRef}
        className="flex flex-col space-y-6 lg:space-y-12 items-center justify-center pb-12 sm:pb-0 pt-48 lg:pt-0 min-h-screen"
      >
        <Underlined as="h2">ABOUT ME</Underlined>
        <SelfIntroductionCard className="w-11/12 max-w-app mx-auto" />
      </section>
    </>
  );
};

export default Root;
