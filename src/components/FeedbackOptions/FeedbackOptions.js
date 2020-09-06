import React from "react";
import PropTypes from "prop-types";

import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((typeBtn) => (
        <button
          key={typeBtn}
          type="submit"
          className={s.button}
          onClick={() => onLeaveFeedback(typeBtn)}
        >
          {typeBtn}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
