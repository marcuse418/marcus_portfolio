import { useState, useEffect } from "react";

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "Marcus Elliott";
    const [IsVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);

                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 150);

        return () => clearInterval(interval);
    }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gray-50 text-black flex flex-col items-center justify-center">
      <div className={`mb-4 text-4xl font-inter font-normal transition-opacity duration-500 ${IsVisible ? 'opacity-100' : 'opacity-0'}`}>
        {text}
    </div>

    </div> 
  );
};