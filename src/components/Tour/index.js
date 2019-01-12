import React from "react";
import "./Tour.scss";

class Tour extends React.Component {
  state = {
    showInfo: false
  };
  handleInfo = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };
  render() {
    const { showInfo } = this.state;
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;
    return (
      <article className="tour">
        <div className="image-container">
          <img src={img} alt="" />
          <span className="close-btn" onClick={() => removeTour(id)}>
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{" "}
            <span onClick={this.handleInfo}>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          {showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}

export default Tour;
