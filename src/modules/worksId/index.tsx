import type { NextPage } from "next";

import { ViewSource, VisitWebsite } from "@/modules/worksId/components/IconBadge";

import { WorkInfo } from "./components/WorkInfo";

const Works: NextPage = () => {
  return (
    <div className="h-screen w-screen bg-black flex flex-col space-y-8 items-center justify-center">
      <WorkInfo
        title="Conne!"
        genre="Web"
        role="Frontend"
        skill="TypeScript"
        period="2months"
        skillKeywords={["TailwindCSS", "styled-jsx", "emotion", "linaria", "React", "redux"]}
      />

      <ul className="flex space-x-2">
        <li>
          <ViewSource />
        </li>
        <li>
          <VisitWebsite />
        </li>
      </ul>
    </div>
  );
};

export default Works;
