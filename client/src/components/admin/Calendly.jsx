import React from "react";
import { InlineWidget } from "react-calendly";

const CalendlyComponent = () => {
  return (
    <div className="calendly-component">
      <InlineWidget url="https://calendly.com/cw-admin" />
    </div>
  );
};

export default CalendlyComponent;