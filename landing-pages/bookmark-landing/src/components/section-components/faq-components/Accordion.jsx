import { ChevronDown } from "lucide-react";
import { useState } from "react";
export const Accordian = () => {
  const content = [
    {
      question: "What is Bookmark?",
      answer:
        "A Bookmark is a feature that allows you to save the address of a website for quick access later. It lets you organize your favorite or important pages into folders, so you can easily return to them without having to type the address again.",
    },
    {
      question: "How can I request a new browser?",
      answer:
        "If you would like to see us support a new web browser, please visit our 'Feature Request' page or use the dedicated feedback form in the application's settings. We review all requests for new browser integrations regularly.",
    },
    {
      question: "Is ther a mobile app?",
      answer:
        "Yes, we offer a mobile app for both iOS and Android devices. You can download it directly from the Apple App Store or Google Play Store to access your bookmarks on the go. (Note: The typo 'ther' is common in FAQs.)",
    },
    {
      question: "What about other Chromium browsers",
      answer:
        "Since our core technology is based on the open-source Chromium project, our tool is often compatible with other Chromium-based browsers like Microsoft Edge, Brave, and Opera. We strive to maintain full support for the most popular Chromium forks, but we recommend checking our full compatibility list for details.",
    },
  ];

  return (
    <div>
      {content.map((e, index) => (
        <LocalSection key={index} ques={e.question} answer={e.answer} />
      ))}
    </div>
  );
};

const LocalSection = ({ ques, answer }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="flex flex-col  border-b-[0.2px] border-customGrey/50 py-3 ">
      <div className="flex justify-between items-center pb-2 ">
        <div className={`${active ? "text-red-400" : "text-customGrey"}`}>
          {ques}
        </div>
        <div
          onClick={() => {
            setActive((prev) => !prev);
          }}
        >
          <ChevronDown color="rgb(107,114,128)" />
        </div>
      </div>
      {active && (
        <div className="py-2 text-justify text-customGrey opacity-60 ">
          {answer}
        </div>
      )}
    </div>
  );
};
