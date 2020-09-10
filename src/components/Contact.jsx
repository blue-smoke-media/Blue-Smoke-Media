import React, { useState, useEffect } from "react";
import * as emailjs from "emailjs-com";

export default function Contact() {
  const [data, setData] = useState({
    business: "",
    name: "",
    email: "",
    subject: "",
    message: "",
    antiSpam: null,
  });

  const onChangeHandler = (evt) => {
    setData({
      ...data,
      [evt.target.name]: evt.target.value,
    });
  };

  const onSubmitHandler = (evt) => {
    evt.preventDefault();

    const templateParams = {
      business: data.business,
      reply_to: data.email,
      subject: data.subject,
      from_name: data.name,
      message_subject: data.subject,
      message_html: data.message,
    };

    if (!data.antiSpam) {
      emailjs.send(
        "service_kys3ouv",
        "template_fd7rhre",
        templateParams,
        "user_AKrWjfONfbrIagrKBIYq0"
      );
    }

    document.querySelector(".contact span").classList.add("message-sent");
    setTimeout(() => {
      document.querySelector(".contact span").classList.remove("message-sent");
    }, 5000);

    setData({
      business: "",
      name: "",
      email: "",
      subject: "",
      message: "",
      antiSpam: "",
    });
  };

  return (
    <section className="contact clicker">
      <h2>Contact Us</h2>
      <p>
        Effective Internet marketing and Web site Design requires a staff of
        diverse disciplines. Our full-service approach will save you time and
        the added expense of discovering the missing pieces and hiring multiple
        companies to collaborate. For quick answers, accurate quotes and 24/7
        customer service, please call{" "}
        <a href="tel:865-274-1371">865.274.1371</a> or complete the inquiry form
        below and we will contact you at a time and date that is convenient to
        you.
      </p>
      {/* //todo FORM ACTION */}
      <span>Message sent successfully</span>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="name"
          placeholder="Business"
          id="business"
          value={data.business}
          onChange={onChangeHandler}
          className="field"
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          id="name"
          value={data.name}
          onChange={onChangeHandler}
          className="field"
        />
        <input
          type="text"
          name="anti-spam"
          id="anti-spam"
          value={data.antiSpam}
          onChange={onChangeHandler}
          style={{ display: "None", position: "absolute" }}
        />

        <input
          type="text"
          name="email"
          placeholder="Email Address"
          id="email"
          value={data.email}
          onChange={onChangeHandler}
          className="field"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          id="subject"
          value={data.subject}
          onChange={onChangeHandler}
          className="field"
        />
        <textarea
          name="message"
          placeholder="Message"
          id="message"
          rows="5"
          value={data.message}
          onChange={onChangeHandler}
          className="field text"
        />
        <div className="actions">
          <input type="submit" value="Send Message" id="submit-btn" />
        </div>
      </form>
    </section>
  );
}
