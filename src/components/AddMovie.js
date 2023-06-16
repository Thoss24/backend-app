import React, { useRef } from "react";
import classes from "./AddMovie.module.css";

const AddMovie = (props) => {
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const releaseDateRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.addMovie(movie);
  };

  return (
    <form action="" onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title"></label>
        <input type="text" ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="openingText"></label>
        <textarea rows='5' id="openingText" ref={openingTextRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="releaseDate"></label>
        <input type="date" id="releaseDate" ref={releaseDateRef}/>
      </div>
      <button>Add Movie</button>
    </form>
  );
};

export default AddMovie;
