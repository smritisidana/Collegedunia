import React, { createElement, useState, useRef, useCallback } from "react";

import "./CollegeList.css";
import { CollegeCard, CollegeCardLoading } from "../components";
import { usePagination } from "../hooks";

function CollegeList() {
  const [pageNo, setPageNo] = useState(1);

  const { colleges, loading, hasValue, length } = usePagination(
    pageNo
  );

  const observer = useRef();

  const lastCollegeCardRef = useCallback(
    (value) => {
      if (loading) 
        return;
      if (observer.current) 
        observer.current.disconnect();
      observer.current = new IntersectionObserver((collegeEntries) => {
        if (collegeEntries[0].isIntersecting && hasValue) {
          setPageNo((lastPageNo) => lastPageNo + 1);
        }
      });

      if (value)
        observer.current.observe(value);
    },
    [loading, hasValue]
  );

  return (
    <div className="collegeList">
      <div className="collegeListTitle">Colleges in North India</div>
      <div className="collegeListItems">
        {colleges.map((college, index) =>
          createElement(CollegeCard, {
            ref: (ref) => index === length - 1 && lastCollegeCardRef(ref),
            detail: college,
            key: index,
          })
        )}
        {loading && [...Array(4)].map(
          (e, i) => <CollegeCardLoading key={i} />)
        }
      </div>
    </div>
  );
}

export default CollegeList;
