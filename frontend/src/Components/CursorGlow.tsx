"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const circleRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const circleX = useRef(0);
  const circleY = useRef(0);

  useEffect(() => {
    const circle = circleRef.current;
    if (!circle) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    const animate = () => {
      circleX.current += (mouseX.current - circleX.current) * 0.08;
      circleY.current += (mouseY.current - circleY.current) * 0.08;
      circle.style.left = `${circleX.current}px`;
      circle.style.top  = `${circleY.current}px`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={circleRef}
      className="hidden md:block"
      style={{
        position: "fixed",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        border: "1px solid rgba(184,115,51,0.20)",
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
