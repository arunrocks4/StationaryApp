import React from 'react';
import { link } from 'react-router';

const App = (props) => {
  return (
    <div className="conatiner">
      <nav className="navbar navbar-defalut">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand">Scotch Books</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><link to="/">Home</link></li>
              <li><link to="/about">About</link></li>
              <li><link to="/books">Book</link></li>
              <li><link to="/cart">Cart</link></li>
            </ul>

          </div>

        </div>

      </nav>
      {props.children}
    </div>
  )
}
export default App;