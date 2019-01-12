import React from "react";
import "./TourList.scss";
import Tour from "../Tour/index";
import { tourData } from "../../../public/tourData";

class Tourlist extends React.Component {
  state = {
    tours: tourData
  };
  removeTour = id => {
    const { tours } = this.state;
    const sortedTours = tours.filter(tour => tour.id !== id);
    this.setState({ tours: sortedTours });
  };
  render() {
    console.log(this.state.tours);
    const { tours } = this.state;
    return (
      <section className="tourlist">
        {tours.map(tour => {
          return (
            <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
          );
        })}
      </section>
    );
  }
}

export default Tourlist;
