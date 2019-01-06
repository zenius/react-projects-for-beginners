import React from "react";
import ReactDOM from "react-dom";
import book_cover from "./images/the_subtle_art_of_not_giving_fuck.jpg";
import "./css/index.css";
import "./css/book.css";

function Book() {
  return (
    <section className="book">
      <CoverImage />
      <Title />
      <Author />
    </section>
  );
}

const CoverImage = () => <img src={book_cover} alt="book cover" />;

const Title = () => <h1>The Subtle Art of Not Giving a F*ck</h1>;

const Author = () => <label>by Mark Manson</label>;

ReactDOM.render(<Book />, document.getElementById("root"));
