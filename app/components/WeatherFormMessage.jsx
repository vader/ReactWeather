var React = require('react');

var WeatherFormMessage = ({ temp, location }) => {
  return (
    <div>
      <h3>
        The temprature in {location} is {temp}C
      </h3>
     </div>
  );
};

module.exports = WeatherFormMessage;
