import React from 'react';
import Countdown from 'react-countdown';

const CustomCountdown = ({ targetDate }) => {
  const renderer = ({ days, hours, minutes, completed }) => {
    if (completed) {
      // Render a completed state if needed
      return <span>Auction Ended</span>;
    } else {
      // Render the countdown in the desired format
      return (
        <span>
          {days} day{days > 1 ? 's' : ''} {hours} hrs {minutes} minutes
        </span>
      );
    }
  };

  return (
    <Countdown
      date={targetDate}
      renderer={renderer}
    />
  );
};

export default CustomCountdown;
