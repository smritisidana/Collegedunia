import React from "react";
import { mdiStar } from "@mdi/js";
import { Icon } from "@mdi/react";

import "./CollegeCard.css";

function CollegeCard({ detail, reference }) {
  const {
    tags,
    rating,
    ranking,
    promoted,
    amenties,
    discount,
    offertext,
    fees_cycle,
    college_name,
    nearest_place,
    original_fees,
    rating_remarks,
    discounted_fees,
    famous_nearest_places,
  } = detail;

  function getNearestFamousPlace() {
    const matches = famous_nearest_places.match(/(\d+\.?\d*) *(kms?|Kms?)/g);
    return matches.reduce(
      (accumulator, value) =>
        accumulator.replace(
          value,
          `<span class="collegeCardNearest--bold">${value}</span>`
        ),
      famous_nearest_places
    );
  }

  function getOff() {
    const matches = offertext.match(/\d+(,\d+)*(\.\d*)?/g);
    return matches
      .reduce(
        (accumulator, value) =>
          accumulator.replace(
            value,
            `<span class="collegeCardOffer--green">${value}</span>`
          ),
        offertext
      )
      .replace("Flat", "<span class='collegeCardOffer--muted'>Flat</span>")
      .replace(
        "LOGIN",
        "<span class='collegeCardOffer--button'>LOGIN</span>"
      );
  }

  return (
    <div className="collegeCard" ref={reference}>
      <div className="collegeCardImage">
        <img alt="college" src="images/college_02.jpg" />
        <div className="collegeCardImageItem">
          <div className="collegeCardTag-group d-flex align-center">
            {tags.map((tag, i) => (
              <div key={i} className="collegeCardTag thin-text bold-text">
                {tag}
              </div>
            ))}
          </div>
          <div className="collegeCardRank light-text bold-text">
            #{ranking}
          </div>
        </div>
      </div>
      {promoted ? <div className="collegeCardPromotion">PROMOTED</div> : null}
      {promoted ? <div className="collegeCardPromotionShadow" /> : null}
      <div className="collegeCardRating">
        <div className="collegeCardRatingText">
          <div>
            <span className="collegeCardRatingText--bold">{rating}</span>
            /5
          </div>
          <div>{rating_remarks}</div>
        </div>
      </div>
      <div className="collegeCardDetails d-flex">
        <div className="collegeCardDetailsBasic">
          <div className="collegeCardName-wrapper bold-text">
            <span className="collegeCardName">{college_name}</span>
            <span className="collegeCardStar-group">
              {[...Array(5)].map((e, i) => (
                <Icon
                  color={i < rating ? "#444444" : "#adadad"}
                  path={mdiStar}
                  size={0.52}
                  key={i}
                />
              ))}
            </span>
          </div>
          <div className="collegeCardNearest thin-text bold-text">
            <span className="collegeCardNearest-bold">
              {nearest_place[0]}
            </span>
            <span className="collegeCardNearest-muted">
              {" | "}
              {nearest_place[1]}
            </span>
          </div>
          <div className="collegeCardNearestFamous thin-text bold-text">
            <span className="collegeCardNearest-match">93% Match: </span>
            <span
              dangerouslySetInnerHTML={{ __html: getNearestFamousPlace() }}
            ></span>
          </div>
          <div className="collegeCardOfferPromotion thin-text bold-text">
            <span dangerouslySetInnerHTML={{ __html: getOff() }}></span>
          </div>
        </div>
        <div className="collegeCardDetailsRate">
          <div className="collegeCardDiscount-wrapper d-flex align-center thin-text">
            <div className="collegeCardOriginalFee thin-text">
              ₹{original_fees.toLocaleString()}
            </div>
            <div className="collegeCardDiscount">
              {discount}
              <div className="collegeCardDiscount-dot" />
            </div>
          </div>
          <div className="collegeCardDiscount-fees bold-text">
            ₹{discounted_fees.toLocaleString()}
          </div>
          <div className="collegeCard__fees-cycle thin-text">{fees_cycle}</div>
          <div className="collegeCardAmenities light-text bold-text">
            {amenties.join("  ·  ")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.forwardRef((props, ref) => (
  <CollegeCard {...props} reference={ref} />
));
