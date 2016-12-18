var React = require('react');
var WeatherFormMessage = require('WeatherFormMessage');
var WeatherForm = require('WeatherForm');
var weatherMapApi = require('weatherMapApi');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,
    };
  },

  handleSearch: function (location) {
    var _this = this;
    this.setState({
      isLoading: true,
    });

    weatherMapApi.getTemp(location).then(function (temp) {
      _this.setState({
        location: location,
        temp: temp,
        isLoading: false,
      });
    },
    function (errorMessage) {
      alert(errorMessage);
      _this.setState({
        isLoading: false,
        location: null,
        temp: null,
      });
    });
  },

  render: function () {
    var { temp, location, isLoading } = this.state;

    var loading = function () {
      if (isLoading) {
        return <h4>Weather is loading...</h4>;
      }else if (temp && location) {
        return <WeatherFormMessage temp={temp} location={location}/>;
      }
    };

    return (
      <div>
       <h4>Weather component</h4>
       <WeatherForm onSearch={this.handleSearch}/>
       {loading()}
       </div>
    );
  },
});

module.exports = Weather;
