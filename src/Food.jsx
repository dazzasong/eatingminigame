export default function Food({ src }) {
  return (
    <img
      src={src}
      alt=""
      width={240}
      height={240}
      style={{ cursor: "grab", userSelect: "none" }}
    />
  );
}