import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Seats = () => {
  const { login } = useSelector((state) => state.comp);
  const navigate = useNavigate();

  useEffect(() => {
    if (login) {
      console.log("anda berhasil login");
    } else {
      navigate("/login");
    }
  }, [login]);
  return (
    <div>
      <h2>Seats</h2>
    </div>
  );
};

export default Seats;
