import "../styles/components.css";

import { MdDateRange, MdTimelapse } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";

// Section with two cards

export default function BlogPost({
  imglink,
  heading,
  duration,
  date,
  month,
  year,
}) {
  const read = "read";
  return (
    <div className="blog-post">
      <div className="image-container">
        <img src={imglink} />
        <div className="wrapperbox">
          <div className="in-box">
            <GoArrowUpRight />
          </div>
          <div className="in-box">
            <GoArrowUpRight />
          </div>
        </div>
      </div>
      <div className="data-container">
        <MdDateRange />
        <span style={{ marginLeft: "0.3vw" }}> {month}</span>
        <span style={{ marginLeft: "0.2vw" }}>{date}, </span>
        <span style={{ marginLeft: "0.5vw", marginRight: "1vw" }}> {year}</span>
        <MdTimelapse />
        <span style={{ marginLeft: "0.2vw" }}> {duration}</span>
        <span style={{ marginLeft: "0.5vw" }}> {read}</span>
      </div>
      <div className="info">{heading}</div>
    </div>
  );
}
