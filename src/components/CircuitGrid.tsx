import { useEffect, useRef } from "react";

const CircuitGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; life: number; maxLife: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;

    const drawGrid = () => {
      ctx.strokeStyle = "rgba(0, 210, 255, 0.04)";
      ctx.lineWidth = 0.5;
      const spacing = 60;
      for (let x = 0; x < w(); x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h());
        ctx.stroke();
      }
      for (let y = 0; y < h(); y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w(), y);
        ctx.stroke();
      }
    };

    const spawnParticle = () => {
      if (particles.length > 30) return;
      const edge = Math.random();
      let x: number, y: number, vx: number, vy: number;
      if (edge < 0.25) { x = 0; y = Math.random() * h(); vx = 0.3 + Math.random() * 0.5; vy = (Math.random() - 0.5) * 0.3; }
      else if (edge < 0.5) { x = w(); y = Math.random() * h(); vx = -(0.3 + Math.random() * 0.5); vy = (Math.random() - 0.5) * 0.3; }
      else if (edge < 0.75) { x = Math.random() * w(); y = 0; vx = (Math.random() - 0.5) * 0.3; vy = 0.3 + Math.random() * 0.5; }
      else { x = Math.random() * w(); y = h(); vx = (Math.random() - 0.5) * 0.3; vy = -(0.3 + Math.random() * 0.5); }
      const maxLife = 200 + Math.random() * 200;
      particles.push({ x, y, vx, vy, life: 0, maxLife });
    };

    const animate = () => {
      ctx.clearRect(0, 0, w(), h());
      drawGrid();

      if (Math.random() < 0.03) spawnParticle();

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        const alpha = Math.min(p.life / 30, 1) * Math.max(0, 1 - p.life / p.maxLife);

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 210, 255, ${alpha * 0.6})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 210, 255, ${alpha * 0.15})`;
        ctx.fill();

        if (p.life > p.maxLife) particles.splice(i, 1);
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.5 }}
    />
  );
};

export default CircuitGrid;
