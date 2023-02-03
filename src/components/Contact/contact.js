import React from "react";
import "./contact.css";
import Title from "../shared/Title";
import Button from "../shared/Button";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";

const Contact = () => {
  const contact = [
    {
      icon: <AiOutlineMail />,
      title: "Email",
      text: "sagarikadalai37@gamil.com",
      link: "mailto:sagarikadalai37@gamil.com",
    },
    {
      icon: <AiOutlineWhatsApp />,
      title: "WhatsApp",
      text: "+91-7978174725",
      link: "https://wa.me/917978174725",
    },
    {
      icon: <BiPhoneCall />,
      title: "Phone Number",
      text: "+91-7978174725",
      link: "tel:+917978174725",
    },
  ];
  return (
    <section id="contact">
      <Title title="Contact Me" text="Get in Touch" />
      <div className="contact-container">
        <div className="contact-box-container">
          {contact.map((item, index) => (
            <div className="contact-box" key={index}>
              {item.icon}
              <div className="contact-box-title">{item.title}</div>
              <div className="contact-box-text">{item.text}</div>
              <a
                className="contact-box-link"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.title === "Phone Number"
                  ? "Give me a Call"
                  : "Send a message"}
              </a>
            </div>
          ))}
        </div>
        <div className="contact-form">
          <form action="https://formspree.io/f/xpznyyne" method="post">
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Full Name"
                name="name"
                id="name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                id="email"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <Button text="Send Message" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
