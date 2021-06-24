import React, { useState } from "react";
import QueriesStyle from "./QueriesStyle";

const Queries = () => {
  const [display, setDisplay] = useState(false);

  function toggleButton() {
    if (!display) setDisplay(true);
    else setDisplay(false);
  }

  return (
    <QueriesStyle>
      <h1>FAQ</h1>
      <nav>
        <div herf="/">How many team members can I in vite? </div>

        <svg width="10" height="7" onClick={toggleButton}>
          <path
            d="M1 .799l4 4 4-4"
            stroke="#F47B56"
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </nav>

      <label>
        <span>
          What is the maximum file upload size?{" "}
          <svg width="10" height="7" onClick={toggleButton}>
            <path
              d="M1 .799l4 4 4-4"
              stroke="#F47B56"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </span>
        <p>
          Not more than 2gb All files in your account must fit your allotted
          storage space.
        </p>
      </label>
      
      <nav>
        <div herf="/"> How do I reset my password?</div>
        <svg width="10" height="7" onClick={toggleButton}>
          <path
            d="M1 .799l4 4 4-4"
            stroke="#F47B56"
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </nav>{" "}
      <nav>
        <div herf="/">Can I cancel my subscription? </div>

        <svg width="10" height="7" onClick={toggleButton}>
          <path
            d="M1 .799l4 4 4-4"
            stroke="#F47B56"
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </nav>
      <nav>
        <div herf="/">Do you provide additional support?</div>

        <svg width="10" height="7" onClick={toggleButton}>
          <path
            d="M1 .799l4 4 4-4"
            stroke="#F47B56"
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </nav>{" "}
    </QueriesStyle>
  );
};

export default Queries;
