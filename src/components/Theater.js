import React from "react";
import { useNavigate } from "react-router-dom";

const Theater = () => {
  const navigate = useNavigate();

  const handleTicketCounter = () => {
    navigate("/ticket-counter");
  };
  return (
    <div>
      <h1>theater</h1>
      <button onClick={handleTicketCounter}>Go to ticket Counter</button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>
    </div>
  );
};

export default Theater;
