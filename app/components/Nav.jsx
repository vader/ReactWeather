var React = require('react');
var { Link, IndexLink } = require('react-router');

var Nav = (props) => {
  return (
    <div>
      <h4>Nav component</h4>
      <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Weather</IndexLink>
      <Link to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</Link>
      <Link to="/examples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Examples</Link>
    </div>
  );
};

module.exports = Nav;
