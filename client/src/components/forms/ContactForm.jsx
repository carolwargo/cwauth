import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
<div className="w3-padding-48">
  <div className="row d-flex justify-content-center align-items-center">
      <form ref={form} onSubmit={sendEmail} className="bg-danger-subtle p-3 border rounded shadow-lg">
      <div className="d-flex justify-content-between mb-2">
  <input
    type="text"
    name="first_name"
    placeholder="First Name"
    value={form.first_name}
    style={{ fontSize: '13px' }}
    className="form-control me-2" // Add margin between inputs
    required
  />
  <input
    type="text"
    name="last_name"
    placeholder="Last Name"
    value={form.last_name}
    style={{ fontSize: '13px' }}
    className="form-control"
    required
  />
</div>


        <div className="mb-2">
          <input
            type="email"
            name="user_email"
            placeholder="Email@mail.com"
            style={{ fontSize: '13px' }}
            value={form.user_email}
            className="form-control"
            required
          />
        </div>
        <div className="mb-2">
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            className="form-control"
            style={{ fontSize: '13px' }}
            rows="5"
            required
          ></textarea>
        </div>
        <div >
          <input
            type="submit"
            value="Send"
            className="btn btn-dark mt-2 px-5"
          />
        </div>
      </form>
 
  </div>
</div>

  );
};

export default Contact;