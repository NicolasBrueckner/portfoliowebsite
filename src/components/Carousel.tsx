import { useState } from "react";
import "../styles/carousel.css";

export default function Carousel({
  images,
  visibleCount = 1,
}: {
  images: string[];
  visibleCount?: number;
}) {
  const [current, setCurrent] = useState(0);

  const maxIndex = Math.max(images.length - visibleCount, 0);

  const nextSlide = () =>
    setCurrent((current + 1) > maxIndex ? 0 : current + 1);

  const prevSlide = () =>
    setCurrent((current - 1 < 0) ? maxIndex : current - 1);

  return (
    <div className="carousel">
      <div
        className="slides"
        style={{
          transform: `translateX(-${(current * 100) / visibleCount}%)`,
          gridTemplateColumns: `repeat(${images.length}, ${100 / visibleCount}%)`,
        }}
      >
        {images.map((src, i) => (
          <img key={i} src={src} alt={`Slide ${i + 1}`} />
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>‹</button>
      <button className="next" onClick={nextSlide}>›</button>
    </div>
  );
}
