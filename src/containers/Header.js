import React from "react";

const Header = () => {
  return (
    <div className="ui pointing menu">
      <div className="ui container">
        <a className="active item">Home</a>
        <a className="item">Messages</a>
        <a className="item">Friends</a>
        <div className="right menu">
          <div className="item">
            <div className="ui transparent icon input">
              <input type="text" placeholder="Search..." />
              <i className="search link icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
