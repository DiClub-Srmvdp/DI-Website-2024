import * as React from "react";
import { Carousel } from "react-round-carousel";

import useWindowDimensions from "./useDimensions";

export default function Slider() {
  const carouselRef = React.createRef();
  const { width } = useWindowDimensions();

  const projects = [
    {
      image: `/assets/img/projects/dld/parking_proj.png`,
      content: (
        <div>
          <strong>Parking Project</strong>
        </div>
      ),
    },
    {
      image: `/assets/img/projects/dld/code_editor_proj.png`,
      content: (
        <div>
          <strong>Code Editor</strong>
        </div>
      ),
    },
    {
      image: `/assets/img/projects/dld/Stadium_proj.jpg`,
      content: (
        <div>
          <strong>Stadium Management</strong>
        </div>
      ),
    },
    {
      image: `/assets/img/projects/dld/tic_proj.png`,
      content: (
        <div>
          <strong>Tic-Tac-Toe App</strong>
        </div>
      ),
    },
    {
      image: `/assets/img/projects/dld/blog_proj.png`,
      content: (
        <div>
          <strong>Java Blog</strong>
        </div>
      ),
    },
    {
      image: `/assets/img/projects/dld/cmpn_intrst.png`,
      content: (
        <div>
          <strong>Compound Interest Calculator</strong>
        </div>
      ),
    },
  ];

  return width > 576 ? (
    <Carousel ref={carouselRef} items={projects} slideOnClick itemWidth={450} classNamePrefix="custom-slider"/>
  ) : (
    <Carousel ref={carouselRef} items={projects} slideOnClick itemWidth={300} classNamePrefix="custom-slider"/>
  );
}
