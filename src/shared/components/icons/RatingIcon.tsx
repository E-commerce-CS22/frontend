import React from "react";

export const RatingIcon: React.FC<{ fill?: string }> = ({ fill }) => {
  return (
    <svg id='Group_5192' width='22' height='18.691' viewBox='0 0 22 18.691'>
      <defs>
        <linearGradient id='linear-gradient' x1='0.5' x2='0.5' y2='1' gradientUnits='objectBoundingBox'>
          <stop offset='0' stopColor='#fb3' />
          <stop offset='1' stopColor='#f80' />
        </linearGradient>
      </defs>
      <path
        id='icons8-star'
        d='M11.93,2.285l2.1,6.212,6.555.076a.589.589,0,0,1,.345,1.062L15.67,13.549l1.954,6.258a.589.589,0,0,1-.9.656l-5.348-3.793L6.024,20.463a.589.589,0,0,1-.9-.656l1.954-6.258L1.815,9.634A.589.589,0,0,1,2.16,8.572L8.715,8.5l2.1-6.212A.59.59,0,0,1,11.93,2.285Z'
        transform='translate(-1.576 -1.884)'
        fill={fill ? fill : "url(#linear-gradient)"}
      />
    </svg>
  );
};

RatingIcon.defaultProps = {
  fill: "",
};
