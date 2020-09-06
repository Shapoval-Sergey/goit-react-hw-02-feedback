import React from "react";

import Notification from "../Notification/Notification";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {total > 0 && (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedbacks: {positivePercentage}%</p>
        </>
      )}

      {!total && <Notification message="No feedback given" />}
    </>
  );
};

export default Statistics;
