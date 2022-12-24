import React from "react";
import { useNavigate } from "react-router-dom";

const TicketCount = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Welcome to the ticket Counter</h1>
      <button onClick={handleHome}>Go to home</button>
    </div>
  );
};

export default TicketCount;
