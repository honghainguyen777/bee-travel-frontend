import "./Sidebar.css";
import React from "react";

class Sidebar extends React.Component {
    // ({ width, height, children }) =>
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            xPosition: -props.width
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }
//   const [xPosition, setX] = React.useState(-width);

  toggleMenu () {
      console.log(this.state.xPosition);
    if (this.state.xPosition < 0) {
      this.setState({xPosition: 0});
    } else {
      this.setState({xPosition: -this.props.width});
    }
  }

  componentDidMount() {
      this.setState({xPosition: -this.props.width});
  }
  render() {
    console.log(this.state.xPosition);
    return (
        <React.Fragment>
          <div
            className="side-bar"
            style={{
              transform: `translatex(${this.state.xPosition}px)`,
              width: `${this.props.width}px`,
              minHeight: this.props.height
            }}
          >
            <div className="content">{this.props.children}</div>
          </div>
          <div
              onClick={this.toggleMenu}
              className="toggle-menu"
              style={{
                // transform: `translate(${this.props.width}px, 20vh)`,
                transform: `translatex(${this.state.xPosition + this.props.width}px)`
              }}
            ></div>
        </React.Fragment>
      );
  }
};

export default Sidebar;