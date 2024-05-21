import React from "react";

import { useWindowSize } from "@reactuses/core";
import Confetti from "react-confetti";

// styles
import "./style.css";
import { Link } from "react-router-dom";

const SuccesModal = () => {
  const { width, height } = useWindowSize();
  return (
    <div className="success-modal">
      <Confetti width={width} height={height} />
      <div>
        <h2>Siz muvaffaqiyatli ro'yhatdan o'tdingiz🎉</h2>
        <Link to="/">Bosh sahifaga qaytish</Link>
      </div>
    </div>
  );
};

export default SuccesModal;
