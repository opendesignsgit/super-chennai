'use client';

import React, { useRef, useEffect, useState } from 'react';
// import './style.css';

type Paragraph = {
  id: string;
  text: string;
};

type Image = {
  url: string;
  alt?: string;
};

type Props = {
  heading: string;
  image: Image;
  paragraphs: Paragraph[];
};

export default function VolunteerContentLife({
  heading,
  image,
  paragraphs,
}: Props) {
  const [scrollDir, setScrollDir] = useState<'left' | 'right'>('left');
  const lastScrollY = useRef(0);
  const bgTextRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setScrollDir('left');
      } else {
        setScrollDir('right');
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div className="volunteerParaSection container max-w-7xl mx-auto px-4">
        <div
          className={`VolunteeerTextBackground ${scrollDir === 'right' ? 'scroll-right' : 'scroll-left'}`}
          ref={bgTextRef}
        >
          <p>Volunteer &nbsp; Volunteer &nbsp; Volunteer &nbsp; Volunteer</p>
        </div>

        <div className="volunteerRow">
          <img src={image.url} alt={image.alt || 'Volunteer Image'} />
          <div className="volunteeerMainContent">
            <h3>{heading}</h3>
            {paragraphs.map((para, idx) => (
              <p key={para.id || idx} className={`paraVolunteerSection para-${idx}`}>
                {para.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
