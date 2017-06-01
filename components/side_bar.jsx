import React from 'react';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <aside>
          <section>
            <h2>Craig Dejean</h2>
            <img className="profilePic" src="../public/images/craig.jpg"/>
            <p>Check me out on
              <a href="https://twitter.com/t3chcraig1" target="_blank"> twitter</a>,

              <a href="https://github.com/craig91" target="_blank"> github</a>, or send me an email.</p>
          </section>
        </aside>
      </div>

    )
  }
}

export default SideBar;
