import colors from "./constants";
const drawFaceContainer = (ctx, detections) => {
  detections.forEach((detection) => {
    // do the magic
    const { topLeft, bottomRight } = detection;
    const size = [bottomRight[0] - topLeft[0], bottomRight[1] - topLeft[1]];
    // Draw the rectangle around the face of each person
    ctx.lineWidth = "3";
    const color =
      colors[Number.parseInt(Math.random() * 10000) % colors.length];
    ctx.strokeStyle = color;
    ctx.rect(topLeft[0], topLeft[1], size[0], size[1]);
    //   Draw text 'Face'
    ctx.strokeStyle = "#0095F6";
    ctx.font = "18px Consolas bold";
    ctx.fillStyle = color;
    ctx.fillText("Face Detected", topLeft[0] + 0.25 * size[0], topLeft[1] - 5);
    ctx.stroke();
  });
};
export default drawFaceContainer;
