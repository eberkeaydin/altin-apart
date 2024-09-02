import React from "react";

const Button = ({ styles }) => {
  const phoneNumber = "+905557712019";
  const handleClick = () => {
    // Use window.open with the 'tel:' scheme to open the phone application
    if (phoneNumber) {
      window.open(`tel:${phoneNumber}`);
    }
  };

  return (
    <button
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary golden-yellow-gradient rounded-[10px] outline-none ${styles}`}
      onClick={handleClick}
    >
      Hemen Ara
    </button>
  );
};

export default Button;
