var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <div className="callout">
        <p className="text-center">Welcome to the about page</p>
          <p>
            <ul>
              <li><a href="https://facebook.github.io/react">React</a> - This was the JavaScript used</li>
            </ul>
          </p>
      </div>

    </div>
    );
};

module.exports = About;
