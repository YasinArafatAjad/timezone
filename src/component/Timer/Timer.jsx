import "./Timer.css";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

const Timer = () => {
  return (
    <div>
      <h1 className="text-center py-2 text-[#fff]">
        Its going to happen A big change here.
      </h1>

      <FlipClockCountdown
        to={"2024/12/07"}
        labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
        labelStyle={{
          fontSize: '0.8rem',
          fontWeight: 500,
          textTransform: "uppercase",
        }}
        digitBlockStyle={{ width: 40, height: 60, fontSize: 30 }}
        dividerStyle={{ color: "white", height: 1 }}
        separatorStyle={{ color: "red", size: "5px" }}
        showSeparators={false}      
        duration={0.5}
      >
        Finished
      </FlipClockCountdown>
    </div>
  );
};

export default Timer;
