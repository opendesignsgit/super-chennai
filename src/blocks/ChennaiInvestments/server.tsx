"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./style.css";

// Types
type MediaType = {
  url: string;
  alt?: string;
};

type InvestmentItem = {
  title: string;
  description?: string;
  image?: MediaType;
};

type InvestmentCategory = {
  name: string;
  items: InvestmentItem[];
};

type ChennaiInvestmentsProps = {
  heading: string;
  subheading?: string;
  categorySource: InvestmentCategory[];
};

export default function ChennaiInvestments({
  heading,
  subheading,
  categorySource,
}: ChennaiInvestmentsProps) {
  const [categories, setCategories] = useState<InvestmentCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    if (categorySource?.length) {
      setCategories(categorySource);
      setSelectedCategory(categorySource[0]?.name || "");
    }
  }, [categorySource]);

  // Show message when there are no categories or selected category
  if (!categories.length) {
    return (
      <div className="container max-w-7xl mx-auto px-4 ChennaiInvestContainerdiv">
        <div className="ChennaiInvestMents">
          <h4>{heading}</h4>
          <h6>{subheading}</h6>
        </div>
        <p>No categories available to display.</p>
      </div>
    );
  }

  const activeCategory = categories.find((cat) => cat.name === selectedCategory);
  const activeData = activeCategory?.items || [];

  return (
    <div className="container max-w-7xl mx-auto px-4 ChennaiInvestContainerdiv">
      <div className="ChennaiInvestMents">
        <h4>{heading}</h4>
        <h6>{subheading}</h6>
      </div>

      <div className="chennaiInvestmentsButtons">
        {categories.map((category, index) => (
          <button
            key={index}
            className={category.name === selectedCategory ? "active" : ""}
            onClick={() => setSelectedCategory(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="buildingSectionFlex">
        {activeData.map((item, index) => (
          <div className="bulidingSection" key={index}>
            {index % 2 === 0 ? (
              <>
                <div className="builidngContent">
                  <h3>{item.title}</h3>
                  <h5>{item.description}</h5>
                </div>
                {item.image?.url && (
                  <Image
                    className="buildingImage"
                    src={item.image.url}
                    alt={item.image.alt || ""}
                    width={500}
                    height={300}
                  />
                )}
              </>
            ) : (
              <>
                {item.image?.url && (
                  <Image
                    className="buildingImage1"
                    src={item.image.url}
                    alt={item.image.alt || ""}
                    width={500}
                    height={300}
                  />
                )}
                <div className="builidngContent1">
                  <h3>{item.title}</h3>
                  <h5>{item.description}</h5>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
