import { useContext } from "react";
import { OnlyContext } from "../context/Context";
function Card() {
  const { theme } = useContext(OnlyContext);

  return (
    <div
      style={{
        width: "300px",
        padding: "20px",
        margin: "20px auto",
        borderRadius: "10px",
        backgroundColor: theme === "light" ? "#ffffff" : "#333333",
        color: theme === "light" ? "#000000" : "#ffffff",
        border: "1px solid black",
      }}
    >
      <h2>My Card</h2>
      <p>This card changes color using Context API.</p>
    </div>
  );
}

export default Card;