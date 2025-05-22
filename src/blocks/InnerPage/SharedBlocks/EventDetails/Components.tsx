import React from 'react';
import Image from 'next/image';
import { Media } from '@/payload-types';

type Props = {
  bannerImage?: Media;
  eventTitle: string;
  mainImage?: Media;
  tags?: { tag: string }[];
  interestedCount?: number;
  about?: any;
  artistImage?: Media;
  artistName?: string;
  artistRole?: string;
  details?: {
    date?: string;
    time?: string;
    duration?: string;
    ageLimit?: string;
    language?: string;
    genre?: string;
    location?: string;
  };
  priceLabel?: string;
  priceNote?: string;
  ctaText?: string;
};

const EventDetailsBlock: React.FC<Props> = ({
  bannerImage,
  eventTitle,
  mainImage,
  tags,
  interestedCount,
  about,
  artistImage,
  artistName,
  artistRole,
  details,
  priceLabel,
  priceNote,
  ctaText,
}) => {
  return (
    <>
      <section className="accaodomationBannerSection">
        <div>
          {bannerImage?.url && <Image src={bannerImage.url} alt="" width={1920} height={600} />}
        </div>
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Events</h3>
            <div className="breadCrum">
              <a href="/">Home</a> - <a href="/events">Events</a>
            </div>
          </div>
        </div>
      </section>

      <section className="EventsBanSec SecPadblock12">
        <div className="container max-w-7xl mx-auto">
          <div className="EventContBox flex">
            <div className="EventLeft">
              <h2>{eventTitle}</h2>

              {mainImage?.url && (
                <div className="EventBanImg">
                  <Image src={mainImage.url} alt="" width={1000} height={600} />
                </div>
              )}

              <div className="ebanimgbtn flex justify-between items-center mb-[5vh]">
                <div className="ebbmgiL flex">
                  {tags?.map((tag, index) => (
                    <h5 key={index}>{tag.tag}</h5>
                  ))}
                </div>
                <div className="ebbmgiR flex items-center">
                  <h5>{interestedCount} are interested</h5>
                  <button>I’m Interested</button>
                </div>
              </div>

              <div className="EventContBox mb-[5vh]">
                <h3>About The Event</h3>
                <div>{/* Renders rich text */}</div>
              </div>

              <div className="EventContBox">
                <h3>Artists</h3>
                <div className="ArtistsImg">
                  {artistImage?.url && <Image src={artistImage.url} alt="" width={500} height={500} />}
                </div>
                <h4 className="flex flex-col">
                  <strong>{artistName}</strong>
                  <small>{artistRole}</small>
                </h4>
              </div>
            </div>

            <div className="EventRight">
              <div className="evderibox">
                <div className="evderListbox">
                  <div className="evderViewbox">
                    {details?.date && (
                      <div className="evderlinks flex items-center">
                        <img src="/images/events/calendar.png" alt="" />
                        <p>{details.date}</p>
                      </div>
                    )}
                    {details?.time && (
                      <div className="evderlinks flex items-center">
                        <img src="/images/events/time.png" alt="" />
                        <p>{details.time}</p>
                      </div>
                    )}
                    {details?.duration && (
                      <div className="evderlinks flex items-center">
                        <img src="/images/events/duration.png" alt="" />
                        <p>{details.duration}</p>
                      </div>
                    )}
                    {details?.ageLimit && (
                      <div className="evderlinks flex items-center">
                        <img src="/images/events/age_limit.png" alt="" />
                        <p>{details.ageLimit}</p>
                      </div>
                    )}
                    {details?.language && (
                      <div className="evderlinks flex items-center">
                        <img src="/images/events/language.png" alt="" />
                        <p>{details.language}</p>
                      </div>
                    )}
                    {details?.genre && (
                      <div className="evderlinks flex items-center">
                        <img src="/images/events/genre.png" alt="" />
                        <p>{details.genre}</p>
                      </div>
                    )}
                    {details?.location && (
                      <div className="evderlinks flex items-center">
                        <img src="/images/events/location.png" alt="" />
                        <p>{details.location}</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="evdPricbox flex justify-between">
                  <div className="EpriLeft">
                    <h4>{priceLabel}</h4>
                    <h6>{priceNote}</h6>
                  </div>
                  <div className="ebokbtn">
                    <button className="evbookbtnd">{ctaText || 'Book Now'}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventDetailsBlock;
