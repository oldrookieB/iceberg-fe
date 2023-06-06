import TechButton from "../ui/TechButton";
import { useState } from "react";
import { TECHSTACKS } from "../../constants/techStacks";

interface TechStack {
  title: string;
  isSelected: boolean;
}

const SelectTechStack = () => {
  const [techStacks, setTechStacks] = useState<TechStack[]>(
    TECHSTACKS.map((techStack) => {
      return { title: techStack.title, isSelected: false };
    })
  );

  const selectTechStackHandler = (select: string) => {
    const newTechStacks = techStacks.map((techStack) => {
      if (techStack.title === select) {
        const newTechStack = {
          title: techStack.title,
          isSelected: !techStack.isSelected,
        };

        return newTechStack;
      } else {
        return techStack;
      }
    });

    setTechStacks(newTechStacks);
  };
  return (
    <div className="flex flex-col w-full">
      <label className="label">
        <span className="label-text">기술 스택</span>
      </label>
      <div className="flex flex-wrap gap-2">
        {techStacks.map((techStack) => (
          <TechButton
            key={techStack.title}
            onClick={selectTechStackHandler}
            title={techStack.title}
            isSelected={techStack.isSelected}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectTechStack;
