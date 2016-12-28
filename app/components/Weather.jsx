var React = require('react');
var WeatherFormMessage = require('WeatherFormMessage');
var WeatherForm = require('WeatherForm');
var ErrorModal = require('ErrorModal');
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
      errorMessage: undefined,
      location: undefined,
      temp: undefined,
    });

    weatherMapApi.getTemp(location).then(function (temp) {
        _this.setState({
          location: location,
          temp: temp,
          isLoading: false,
        });
      },
      function (e) {
        _this.setState({
          isLoading: false,
          errorMessage: e.message,
        });
      });
  },

  componentDidMount: function () {
    // The last location referes to the query string i.e ?location=London
    var location = this.props.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },

  componentWillReceiveProps: function (nextProps) {
    var location = nextProps.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },

  render: function () {
    var { temp, location, isLoading, errorMessage } = this.state;

    var loading = function () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather for {location}...</h3>;
      } else if (temp && location) {
        return <WeatherFormMessage temp={temp} location={location}/>;
      }
    };

    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {loading()}
        {renderError()}
      </div>
    );
  },
});

module.exports = Weather;
