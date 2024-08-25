import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Calendly from '../components/admin/Calendly';

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
    <div className='w3-pale-blue'>
     <div className="w3-container w3-content mt-5 w3-padding-32">
  <form ref={form} onSubmit={sendEmail} className="p-4 border rounded bg-light shadow-sm">
    <div className="mb-3">
      <input
        type="text"
        name="first_name"
        placeholder="First Name"
        value={form.first_name}
        className="form-control"
        required
      />
    </div>
    <div className="mb-3">
      <input
        type="text"
        name="last_name"
        placeholder="Last Name"
        value={form.last_name}
        className="form-control"
        required
      />
    </div>
    <div className="mb-3">
      <input
        type="text"
        name="user_name"
        placeholder="Name"
        value={form.user_name}
        className="form-control"
        required
      />
    </div>
    <div className="mb-3">
      <label className="form-label">Email</label>
      <input
        type="email"
        name="user_email"
        placeholder="email@mail.com"
        value={form.user_email}
        className="form-control"
        required
      />
    </div>
    <div className="mb-3">
      <textarea
        name="message"
        placeholder="Message"
        value={form.message}
        className="form-control"
        rows="4"
        required
      ></textarea>
    </div>
    <div className="text-center">
      <input
        type="submit"
        value="Send"
        className="btn btn-primary"
      />
    </div>
  </form>
</div>

<Calendly/>
</div>

  );
};

export default Contact;