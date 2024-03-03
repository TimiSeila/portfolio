import React, { useRef, useState } from "react";
import "./AboutModal.css";
import Technologies from "../ProjectSection/ProjectHeader/Technologies";
import emailjs from "@emailjs/browser";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      await emailjs.sendForm(
        "service_3681q3l",
        "template_w42z98i",
        form.current,
        {
          publicKey: "9xXTDVqww8lkgHFYh",
        }
      );

      setMessageSent(true);
    } catch (err) {
      console.error(err);
      setMessageError(true);
    } finally {
      setLoading(false);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <div className="modal-container">
          <div className="about-me-container">
            <div className="about-me-info-container">
              <h1>About me</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                enim arcu, sagittis in ultricies vestibulum, sollicitudin quis
                risus. Nullam accumsan scelerisque mi. Vivamus porttitor, arcu
                et consectetur volutpat, ligula libero mattis leo, eu semper leo
                nisl ut nisl. In tempus vel purus sed tempus. Fusce cursus ut
                arcu ultricies faucibus. Aliquam pharetra arcu vel nisi feugiat
                eleifend. Fusce viverra, ante tincidunt gravida facilisis,
                turpis nisi commodo massa, vel tincidunt tellus mauris quis
                orci. Nulla ac ex eget erat imperdiet scelerisque at id felis.
                Ut venenatis libero nec velit molestie, eu aliquet nisi tempus.
              </p>
            </div>
            <div className="about-me-technologies-container">
              <p className="tech-info">Technologies I'm familiar with</p>
              <Technologies
                technologies={["react", "javascript", "firebase", "unity"]}
                nameForClass="about-me-tech-icon"
              />
            </div>
          </div>
          <div className="dividers-container">
            <div className="divider-one"></div>
            <div className="divider-two"></div>
          </div>
          <div className="contact-me-container">
            <h1>Get in touch</h1>
            <p>Job offers, questions or just chat!</p>
            <form ref={form} onSubmit={sendEmail}>
              <label>
                Name
                <input
                  className="contact-me-inputfield"
                  autoComplete="off"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>
              <label>
                Email
                <input
                  className="contact-me-inputfield"
                  autoComplete="off"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <label>
                Message
                <textarea
                  className="contact-me-inputfield"
                  autoComplete="off"
                  type="text"
                  name="message"
                  rows="3"
                  style={{
                    boxSizing: "border-box",
                    minWidth: "80%",
                    maxWidth: "80%",
                    minHeight: "30px",
                    maxHeight: "180px",
                  }}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </label>
              <input
                type="submit"
                value={loading ? "Sending..." : "Send Message"}
                className="contact-me-submit"
              />
            </form>
            {messageSent ? (
              <p>Message sent successfully!</p>
            ) : messageError ? (
              <p>An error has occured, Message not sent!</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
