import React, { useState } from "react";
import Masony from "react-masonry-component";
import Hero from "../../components/Hero";

const Paintings = () => {
  console.log("render")
  const [categoryString, setCategory] = useState("all");
  const [toggledBool, setToggledBool] = useState(false);
  const [thisPhotoObj, setThisPhotoObj] = useState({});
  const btnActive = {backgroundColor: "lightgrey"}
  const btn = {backgroundColor: "transparent"}

  const handleClose = () => setToggledBool(false);
  const handleShow = (imageObj) => {
    setToggledBool(true);
    setThisPhotoObj(imageObj);
    console.log(imageObj);
  };

  // import images in images folder as an object
  function importAll(r) {
    return r.keys().map(r);
  }
  const pictureObjectArray = importAll(
    require.context("./images/", false, /\.(png|jpe?g|svg|PNG|JPE?G|TIF|tif)$/)
  );

  // jsx for dynamically rendering images
  const dynamicImageHandler = (filteredPictureObjectArray) => {
    return filteredPictureObjectArray.map((image, i) => (
      <li className={`photo-item`}>
        <button
          onClick={() => {
            const imageObj = {
              src: filteredPictureObjectArray[i].default,
              name: filteredPictureObjectArray[i],
            };
            handleShow(imageObj);
          }}
        >
          <img src={filteredPictureObjectArray[i].default} alt={image.name} />
        </button>
      </li>
    ));
  };

  const modalImageHandler = () => {};

  // when current category changes: filter for images with that category
  const pictureArrayHandler = () => {
    if (categoryString === "all") {
      console.log(pictureObjectArray);
      return dynamicImageHandler(pictureObjectArray);
    }
    const filteredPictureObjectArray = [];
    pictureObjectArray.map((pictureObject) => {
      const pathArray = pictureObject.default.split("/");
      const nameArray = pathArray[pathArray.length - 1].split("-");
      const pictureCategoryString = nameArray[0];
      if (pictureCategoryString === categoryString) {
        filteredPictureObjectArray.push(pictureObject);
      }
    });
    return dynamicImageHandler(filteredPictureObjectArray);
  };

  // Masory Options
  const masonryOptions = {
    fitWidth: false,
    columnWidth: 300,
    gutter: 30,
    itemSelector: ".photo-item",
  };

  return (
    <div id="paintings-container">
      <Hero />
      <div className="categories-container">
        <div id="button-bar">
          <button
            id="all-btn"
            className="btn mr-4 my-4"
            onClick={() => setCategory("all")}
          >
            All
          </button>
          <button
            id="paintings-btn "
            className="m-4"
            style={categoryString === "paintings" ? btnActive : btn}
            onClick={() => setCategory("paintings")}
          >
            Paintings
          </button>
          <button
            id="stationary-btn"
            className="btn m-4"
            onClick={() => setCategory("stationary")}
          >
            Stationary
          </button>
          <button
            id="business-btn "
            className="btn ml-4 my-4"
            onClick={() => setCategory("business")}
          >
            Business
          </button>
        </div>
      </div>
      <Masony
        className={"photo-list"}
        elementType={"ul"}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
      >
        {pictureArrayHandler()}
      </Masony>
    </div>
  );
};
// about
// blog
// no match
export default Paintings;
