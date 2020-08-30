import React from "react";

import "./CollegeCard.css";

export default function CollegeCardLoading() {
  return (
    <div className="collegeCardLoading-wrapper">
      <div className="collegeCardLoading loadingImage" />
      <div className="collegeCardLoadingText">
        <div className="collegeCardLoading loadingTitle" />
        <div className="collegeCardLoading loadingSubtitle" />
        <div className="collegeCardLoading loadingSubtitle" />
        <div className="collegeCardLoading loadingPromo" />
      </div>
    </div>
  );
}
