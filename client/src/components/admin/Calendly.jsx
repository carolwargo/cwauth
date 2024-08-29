import React from "react";
import { InlineWidget } from "react-calendly";

const CalendlyComponent = () => {
  return (
    <>
   
    <div className="calendly-component ">
      <div className="w3-container w3-content">
      <InlineWidget url="https://calendly.com/cw-admin/30min" />
  </div>
    </div>
    </>
  );
};

export default CalendlyComponent;