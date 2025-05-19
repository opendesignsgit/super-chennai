"use client";

import React, { useEffect, useRef, useState } from "react";

type WorkItem = {
  label: string;
  link: string;
  image: {
    url: string;
    alt?: string;
  };
};

type WorkInChennaiBlockProps = {
  heading: string;
  intro: string;
  description: string;
  items: WorkItem[];
};

export default function WorkInChennaiBlock({
  heading,
  intro,
  description,
  items = [],
}: WorkInChennaiBlockProps) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [previewSrc, setPreviewSrc] = useState<string | undefined>(
    items[0]?.image?.url
  );
  const [fade, setFade] = useState(true);
  const [scrollDir, setScrollDir] = useState<"left" | "right">("left");
  const bgTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollDir((prev) => (prev === "left" ? "right" : "left"));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setFade(false);
    const timeout = setTimeout(() => setFade(true), 300);
    return () => clearTimeout(timeout);
  }, [previewSrc]);

  return (
    <div>
          <div className="workIntroParaSection container max-w-7xl mx-auto px-4">
          <div
          className={`VolunteeerTextBackground ${
            scrollDir === "right" ? "scroll-right" : "scroll-left"
          }`}
          ref={bgTextRef}
        >
          <p>Work &nbsp; Work &nbsp; Work &nbsp; Work</p>
        </div>
        <div className="workIntro">
          <h3>{heading}</h3>
          <p>
            <strong>{intro}</strong>
          </p>
          <p>{description}</p>
        </div>
      </div>

      <div className="workImageSection">
        <h4>
          Work <br /> Chennai
        </h4>
        <div className="container max-w-7xl mx-auto px-4">
          <div className="workimgIn flex">
            <div className="flex-4">
              <ul className="space-y-4">
                {items.map((item, index) => (
                  <li
                    key={index}
                    onMouseEnter={() => {
                      setPreviewSrc(item.image.url);
                      setHoverIndex(index);
                    }}
                    onMouseLeave={() => setHoverIndex(null)}
                    className={
                      hoverIndex === index ||
                      (hoverIndex === null && index === 0)
                        ? "active"
                        : ""
                    }
                  >
                    <a
                      href={item.link}
                      className={`text-white font-bold text-lg transition-opacity ${
                        hoverIndex === index ||
                        (hoverIndex === null && index === 0)
                          ? "opacity-100"
                          : "opacity-20"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-2 flex items-center justify-center hoverRightimg">
              {previewSrc && (
                <img
                  src={previewSrc}
                  alt="Preview"
                  className="hoverRightimg"
                  style={{ opacity: fade ? 1 : 0 }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
