import type { NextPage } from "next";

import { Underlined } from "@/shared/components/basics/Underlined";

export const Contact: NextPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-full min-h-screen">
        <Underlined as="h2">CONTACT</Underlined>
        <div className="pt-10 text-white text-center">
          <p className="">ご連絡は下記gmailまでお願いします</p>
          <a
            href="mailto:yamorimasato@gmail.com"
            className="block w-max mx-auto font-light leading-none transition duration-200 border-b-0 hover:border-b border-white mt-3"
          >
            yamorimasato@gmail.com
          </a>
        </div>
      </div>
    </>
  );
};
