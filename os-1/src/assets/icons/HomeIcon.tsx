import React from "react";

export const HomeIcon = ({ width = "20", height = "20", fill = "#fff" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 10C20 9.73478 19.8946 9.48043 19.7071 9.29289C19.5195 9.10536 19.2652 9 19 9C18.7347 9 18.4804 9.10536 18.2929 9.29289C18.1053 9.48043 18 9.73478 18 10H20ZM5.99996 10C5.99996 9.73478 5.8946 9.48043 5.70707 9.29289C5.51953 9.10536 5.26518 9 4.99996 9C4.73474 9 4.48039 9.10536 4.29285 9.29289C4.10532 9.48043 3.99996 9.73478 3.99996 10H5.99996ZM20.293 12.707C20.4816 12.8892 20.7342 12.99 20.9964 12.9877C21.2586 12.9854 21.5094 12.8802 21.6948 12.6948C21.8802 12.5094 21.9854 12.2586 21.9876 11.9964C21.9899 11.7342 21.8891 11.4816 21.707 11.293L20.293 12.707ZM12 3L12.707 2.293C12.5194 2.10553 12.2651 2.00021 12 2.00021C11.7348 2.00021 11.4805 2.10553 11.293 2.293L12 3ZM2.29296 11.293C2.19745 11.3852 2.12127 11.4956 2.06886 11.6176C2.01645 11.7396 1.98886 11.8708 1.98771 12.0036C1.98655 12.1364 2.01186 12.2681 2.06214 12.391C2.11242 12.5139 2.18667 12.6255 2.28056 12.7194C2.37446 12.8133 2.48611 12.8875 2.60901 12.9378C2.7319 12.9881 2.86358 13.0134 2.99636 13.0123C3.12914 13.0111 3.26036 12.9835 3.38236 12.9311C3.50437 12.8787 3.61471 12.8025 3.70696 12.707L2.29296 11.293ZM6.99996 22H17V20H6.99996V22ZM20 19V10H18V19H20ZM5.99996 19V10H3.99996V19H5.99996ZM21.707 11.293L12.707 2.293L11.293 3.707L20.293 12.707L21.707 11.293ZM11.293 2.293L2.29296 11.293L3.70696 12.707L12.707 3.707L11.293 2.293ZM17 22C17.7956 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7956 20 19H18C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5195 19.8946 17.2652 20 17 20V22ZM6.99996 20C6.73474 20 6.48039 19.8946 6.29285 19.7071C6.10532 19.5196 5.99996 19.2652 5.99996 19H3.99996C3.99996 19.7956 4.31603 20.5587 4.87864 21.1213C5.44125 21.6839 6.20431 22 6.99996 22V20Z"
        fill={fill}
      />
    </svg>
  );
};