import "../styles/main.css";

// Section with two cards

export default function DualCard({
  imglink,
  heading,
  bodytext,
  direction = "row",
  children,
}) {
  return (
    <div className="dual-card" style={{ flexDirection: direction }}>
      <div className="image-block">
        <img src={imglink} alt={heading} />
      </div>
      <div className="text-block">
        <h2 className="heading">{heading}</h2>
        <p className="bodytext">{bodytext}</p>
        {children && <div className="points-box">{children}</div>}
      </div>
    </div>
  );
}
