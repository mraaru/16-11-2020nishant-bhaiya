import React from "react";
import Back00 from "../../../../Image/unnamed.jpg";

const CommonArticle = (props) => {
  return (
    <>
      <div className="articalbox">
        <div className="boxartical">
          <ul>
            <li>
              <h1
                style={{
                  fontFamily: "'Kadwa', serif",
                }}
              >
                {props.head}
              </h1>
            </li>
            <li>
              <img src={Back00} alt="" />
            </li>
            <li>
              <p>
                {props.cont}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default CommonArticle;
