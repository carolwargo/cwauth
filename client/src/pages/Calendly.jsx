import React from "react";
import { InlineWidget } from "react-calendly";

const CalendlyPage = () => {
  return (
      <div className="bg-secondary">  
     
      <InlineWidget 
            url="https://calendly.com/cw-admin/30min" 
            styles={{ minWidth: '100%', height: '400px' }}
            data-resize="true"
            prefill={{
              fullName: "John Doe",
              email: "john@doe2.com",
              customAnswers: {
                a1: "Yes",
                a2: "At the Starbucks on 3rd and 16th"
              }
            }} 
          />
       
      </div>
    
  );
};

export default CalendlyPage;
