import "../styles/components.css";

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
          <div className="in-box">↗</div>
          <div className="in-box">↗</div>
        </div>
      </div>
      <div className="data-container">
        <span>🗓️ {month}</span>
        <span>{date}, </span>
        <span style={{ marginLeft: "0.5vw" }}> {year}</span>
        <span style={{ marginLeft: "1vw" }}>🕒 {duration}</span>
        <span style={{ marginLeft: "0.5vw" }}> {read}</span>
      </div>
      <div className="info">{heading}</div>
    </div>
  );
}
