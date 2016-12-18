var React = require('react');

var WeatherFormMessage = ({ temp, location }) => {
  return (
    <div>
      <h3 className="text-center">
        It's {temp}C in {location}
      </h3>
     </div>
  );
};

module.exports = WeatherFormMessage;
