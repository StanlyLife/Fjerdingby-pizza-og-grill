"use client";
// import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
const Counter = ({ end, decimals, extraClass }) => {
  return (
    <div>
      <p>meow</p>
      {/* <CountUp
        end={end ? end : 100}
        duration={3}
        decimals={decimals ? decimals : 0}
      >
        {({ countUpRef, start }) => (
          <ReactVisibilitySensor onChange={start} delayedCall>
            <span
              className={`${extraClass}`}
              data-from="0"
              data-to={end}
              ref={countUpRef}
            >
              count
            </span>
          </ReactVisibilitySensor>
        )}
      </CountUp> */}
    </div>
  );
};

export default Counter;
