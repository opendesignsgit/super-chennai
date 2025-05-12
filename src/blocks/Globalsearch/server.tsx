"use client";

import "./style.css";


type Props = {
  placeholderText: string;
  buttonText: string;
  enableFilters?: boolean;
  filters?: {
    label: string;
    options: {
      value: string;
      label: string;
    }[];
  }[];
};

export default function GlobalSearch({
  placeholderText,
  buttonText,
  enableFilters = false,
  filters = [],
}: Props) {
  return (
    <div className="formsSection">
      <form className="searchInputForm">
        <input placeholder={placeholderText} />
        {enableFilters && filters.length > 0 && (
          <div className="filtersContainer">
            {filters.map((filter, index) => (
              <div key={index} className="filterGroup">
                <label>{filter.label}</label>
                <select>
                  {filter.options.map((option, i) => (
                    <option key={i} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        )}
        <button type="submit">{buttonText}</button>
      </form>
    </div>
  );
}
