import React from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Image, Text } from "react-konva";
import useImage from "use-image";
const App = () => {
  const url = "https://konvajs.org/assets/yoda.jpg";
  const [image] = useImage(url);
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text text={"sanaz"} />
        <Image src={image} />
      </Layer>
    </Stage>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
