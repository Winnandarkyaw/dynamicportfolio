import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { experiences } from "../../resources/experiences";
function Experience() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title="Experience" />
      <div className="flex">
        <div className="flex flex-col gap-5 border-l-2 border-[#c72b4f82]">
          {experiences.map((experience, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer">
              <h1
                className={`text-xl px-5 ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml[2px]"
                    : "text-white"
                }`}>
                {experience.period}
              </h1>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Experience;
