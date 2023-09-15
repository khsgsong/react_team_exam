import React, { useRef, useState, useEffect } from "react";
import "./Canvas.css";

const Canvas = () => {
  const canvasRef = useRef(null); //캔버스 (useRef) 사용
  const contextRef = useRef(null); //캔버스의 드로잉 컨텍스트를 참조

  const dpr = window.devicePixelRatio;

  const [ctx, setCtx] = useState(); //캔버스의 드로잉 컨텍스트
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 600;
    canvas.height = 300;

    const WIDTH = 600;
    const HEIGHT = 300;

    const context = canvas.getContext("2d");
    context.scale(dpr, dpr);

    context.strokeStyle = "#999";
    context.fillStyle = "#999";
    context.beginPath();
    context.roundRect(0, 0, WIDTH, HEIGHT, 0);
    context.stroke();
    context.fill();

    context.font = "30px sans-serif";
    context.fillStyle = "#000";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText("여기를 긁어보세요", WIDTH / 2, HEIGHT / 2);

    contextRef.current = context;

    setCtx(context);
  }, []);

  const startDrawing = () => {
    setIsDrawing(true);
  };
  const finishDrawing = () => {
    setIsDrawing(false);
  };

  const drawing = ({ nativeEvent }) => {
    const ERASE_RADIUS = 30;
    const { offsetX, offsetY } = nativeEvent;
    //('2d') 값 있을때
    if (ctx) {
      if (!isDrawing) {
        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY);
      } else {
        ctx.lineTo(offsetX, offsetY);

        ctx.save();
        ctx.globalCompositeOperation = "destination-out";
        ctx.beginPath();
        ctx.arc(offsetX, offsetY, ERASE_RADIUS, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.closePath();
        ctx.restore();
      }
    }
  };
  return (
    <div className="canvas_wrap">
      {/* useRef  사용 */}
      <div className="m5luck">케 미 당 첨! </div>
      <div className="result">
        <span>ISFJ</span>
        <span>ISTJ</span>
      </div>
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={drawing}
        onMouseLeave={finishDrawing}
      ></canvas>
    </div>
  );
};
export default Canvas;
