var React = require('react');
var { Link, IndexLink } = require('react-router');

var Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();
    var location = this.refs.search.value;

    if (location && location.length > 0) {
      var encoded = encodeURIComponent(location);
      this.refs.search.value = '';
      window.location.hash = '#/?location=' + encoded;
    }
  },
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menuText">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active"
                activeStyle={{ fontWeight: 'bold' }}>Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" ref="search" placeholder="Search weather by city"/>
              </li>
              <li>
                <button type="submit" className="button">Search</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  },
});

module.exports = Nav;
