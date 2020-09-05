import React, { Component } from "react";

import s from "./Button/Button.module.css";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateState = (type) => {
    this.setState((state) => {
      return {
        [type]: state[type] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const percentage = (this.state.good * 100) / this.countTotalFeedback();
    return Math.round(percentage);
  };

  render() {
    return (
      <div className={s.box}>
        <h1>Please leave feedback</h1>
        <button className={s.button} onClick={() => this.updateState("good")}>
          Good
        </button>
        <button
          className={s.button}
          onClick={() => this.updateState("neutral")}
        >
          Neutral
        </button>
        <button className={s.button} onClick={() => this.updateState("bad")}>
          Bad
        </button>
        <ul>
          <h2>Statistics :</h2>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: {this.countTotalFeedback()}</li>
          <li>Positive feedback: {this.countPositiveFeedbackPercentage()} %</li>
        </ul>
      </div>
    );
  }
}
