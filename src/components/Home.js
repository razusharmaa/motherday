import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import ReactImageAppear from "react-image-appear";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [imgmode, setImageMode] = useState(false);
  const handelType = () => {
    setTimeout(() => {
      setImageMode(false);
      setIsOpen(true);
    }, 1000);
  };
  
  return (
    <div id="wrap">
      <h1>Happy Mother's Day!</h1>
      <input
        type="checkbox"
        id="checkbox"
        className="checkbox"
        onClick={handelType}
      />
      <div id="letter_wrap">
        <label htmlFor="checkbox" className="handle"></label>
        <div id="back"></div>
        <div id="flap">
          <div id="closed_flap"></div>
          <div id="open_flap"></div>
        </div>
        <div id="letter">
          {isOpen && <p>Hi Mom!</p>}
          <div className="p-2"></div>
          {isOpen && (
            <TypeAnimation
              sequence={[
                "Happy Mother's Day! I know you can't see my wish, but I love you so much, Mom. You are my world. I haven't hugged you and said 'I love you', but I love you so much, Mom. I hope you have a wonderful day filled with love . 🥰",
                1000,
                () => {
                  console.log("Sequence completed");
                  setTimeout(() => {
                    setIsOpen(!isOpen);
                    setImageMode(!imgmode);
                  }, 2000);
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={0}
              style={{ fontSize: "1em", display: "inline-block" }}
            />
          )}
          {imgmode && !isOpen && (
            <ReactImageAppear
              src={`${process.env.PUBLIC_URL}/images/mom.jpg`}
              className="w-100"
              animation="zoomIn"
              animationDuration="1s"
            />
          )}
          {isOpen && <p className="mt-2">Love you lots!</p>}
          {isOpen && <p>Raju</p>}
        </div>
        <div id="front"></div>
      </div>
    </div>
  );
}

export default Home;
