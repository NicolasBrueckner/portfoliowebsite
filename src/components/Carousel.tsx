import { useEffect, useState } from "react";
import "../styles/carousel.css";
import "glightbox/dist/css/glightbox.css";
import GLightbox from "glightbox";

if (typeof window !== "undefined") {
  setTimeout(() => GLightbox({ touchNavigation: true, loop: true }), 0);
}



export default function Carousel({
  images,
  visibleCount = 1,
}: {
  images: string[];
  visibleCount?: number;
}) {
  const iSize = "70%"
  const [current, setCurrent] = useState(0);
  const maxIndex = Math.max(images.length - visibleCount, 0);

  useEffect(() => {
    const lightbox = GLightbox({ touchNavigation: true, loop: true, selector: '.glightbox' });
    return () => lightbox.destroy();
  }, []);

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
          <a key={i} href={src} className="glightbox" data-gallery="carousel">
            <img key={i} src={src} alt={`Slide ${i + 1}`} />
          </a>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}><LeftIcon width={iSize} height={iSize}/></button>
      <button className="next" onClick={nextSlide}><RightIcon width={iSize} height={iSize}/></button>
    </div>
  );
}


function LeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="30.08 24.98 128.78 300.03" {...props}>
  <path fill="currentColor" d="M301.179 521.701c-3.015 7.225-3.015 14.45 0 21.675l63.232 128.311c-2.409 6.03-7.529 9.946-15.36 11.748a13789.754 13789.754 0 0 0-52.395-68.223c-17.464-22.594-35.84-45.335-55.124-68.224-7.832-9.633-7.832-18.972 0-28.017 19.285-22.888 37.66-45.477 55.124-67.768a6689.84 6689.84 0 0 0 52.395-67.768c7.831 1.214 12.951 5.13 15.36 11.747l-63.232 126.52z" transform="translate(-205.555 -358.435)"/>
</svg>
  );
}

function RightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="30.08 24.98 128.82 300.03" {...props}>
  <path fill="currentColor" d="M298.918 521.701c3.015 7.225 3.015 14.45 0 21.675l-63.26 128.311c2.409 6.03 7.529 9.946 15.36 11.748a15032.33 15032.33 0 0 1 52.422-68.223c17.465-22.594 35.84-45.335 55.125-68.224 7.832-9.633 7.832-18.972 0-28.017-19.285-22.888-37.66-45.477-55.125-67.768a6971.29 6971.29 0 0 1-52.422-67.768c-7.831 1.214-12.951 5.13-15.36 11.747l63.26 126.52z" transform="translate(-205.555 -358.435)"/>
</svg>
  );
}