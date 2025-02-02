import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


const RenderTags = ({ problem }) => {
    const tags = problem.tags && problem.tags.length > 0 ? problem.tags : problem.topics;
    const [showAll, setShowAll] = useState(false);
  
    const visibleTags = showAll ? tags : tags.slice(0, 2); // Show only 2 tags by default
  
    return (
        <div className="tags-container">
        {visibleTags.map((tag, index) => (
            <span key={index} className="tag-pill">
            {tag}
            </span>
        ))}
        {tags.length > 2 && (
            <span
            className="tags-toggle-icon"
            onClick={() => setShowAll(!showAll)}
            >
            {showAll ? <FaChevronUp /> : <FaChevronDown />}
            </span>
        )}
        </div>
    );
  };
  
  export default RenderTags;
  