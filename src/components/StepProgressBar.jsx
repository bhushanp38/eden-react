import React from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";

const StepProgressBar = ({ page_no }) => {
  // const [progress, setProgress] = useState(16.66);
  switch (page_no) {
    case 1:
      var progress = 16.66;
      break;
    case 2:
      progress = 50;
      break;
    case 3:
      progress = 83.33;
      break;
    case 4:
      progress = 100;
      break;
    default:
      progress = 16.66;
  }

  return (
    <div className="w-75 mx-auto my-5 py-4">
      <ProgressBar percent={progress} filledBackground="#3f51b5" height={2}>
        <Step>
          {({ accomplished, index }) => (
            <>
              <div
                className={`indexedStep ${
                  accomplished ? "accomplished" : null
                }`}
              >
                {index + 1}
              </div>
              <div className={"test"}></div>
            </>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <>
              <div
                className={`indexedStep ${
                  accomplished ? "accomplished" : null
                }`}
              >
                {index + 1}
              </div>
              <div className={"test"}></div>
            </>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <>
              <div
                className={`indexedStep ${
                  accomplished ? "accomplished" : null
                }`}
              >
                {index + 1}
              </div>
              <div className={"test"}></div>
            </>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <>
              <div
                className={`indexedStep ${
                  accomplished ? "accomplished" : null
                }`}
              >
                {index + 1}
              </div>
              <div className={"test"}></div>
            </>
          )}
        </Step>
      </ProgressBar>
      {/* <div style={{ marginTop: "40px" }}>
        <button onClick={() => setProgress(progress + 33.32)}>5 +</button>
      </div>
      <div
        onClick={() => setProgress(progress - 33.32)}
        style={{ marginTop: "20px" }}
      >
        <button>- 5</button>
      </div> */}
    </div>
  );
};

export default StepProgressBar;
