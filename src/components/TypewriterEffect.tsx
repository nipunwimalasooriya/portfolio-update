import React from "react";
import Typewriter from "typewriter-effect";

type TypewriterEffectProps = {
  texts: string[];
};

const TypewriterEffect = ({ texts }: TypewriterEffectProps) => {
  return (
    <div className="inline-flex items-center text-primary">
      <Typewriter
        options={{
          strings: texts, // Pass in strings from parent
          autoStart: true,
          loop: true,
          delay: 100,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
};

export default TypewriterEffect;
