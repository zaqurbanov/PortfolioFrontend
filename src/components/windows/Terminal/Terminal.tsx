import { techStack } from "#constants/index";
import WindowHeader from "#hoc/WindowHeader";
import WIndowWrapper from "#hoc/WindowWrapper";
import { Check, Flag } from "lucide-react";

const Terminal = () => {
  return (
    <WIndowWrapper windowKey="terminal" windowName="Tech Stack">
      <>
        <WindowHeader name="Terminal" windowKey="terminal" />

        <div className="techstack">
          <p>
            <span className="font-bold">@ZaurQurbanov </span>
            show my tech stack
          </p>

          <div className="label">
            <p className="w-32">Category</p>
            <p>Technologies</p>
          </div>

          <ul className="content">
            {techStack.map(({ category, items }) => (
              <li key={category} className="flex  gap-1">
                <div className="flex w-32">
                  <Check className="check" size={20} />
                  <h3>{category}</h3>
                </div>
                <ul className="flex flex-wrap gap-1">
                  {items.map((item, i) => (
                    <li key={i}>{item},</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className="footnote">
            <p>
              <Check className="check" size={20} /> 5 of 5 loaded successfully
            </p>

            <p className="text-black">
              <Flag size={15} fill="black" />
              Render time: 6ms
            </p>
          </div>
        </div>
      </>
    </WIndowWrapper>
  );
};

export default Terminal;
