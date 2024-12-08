const ArrowIcon = ({ className, strokeColor = "#ffffff" }) => {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4 6.25L7.29289 9.54289C7.62623 9.87623 7.79289 10.0429 8 10.0429C8.20711 10.0429 8.37377 9.87623 8.70711 9.54289L12 6.25"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;
