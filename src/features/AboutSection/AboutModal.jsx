import React, { useRef, useState } from "react";
import "./AboutModal.css";
import Technologies from "../ProjectSection/ProjectHeader/Technologies";
import emailjs from "@emailjs/browser";

//Modal component
const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const contactForm = useRef();

  //State variables fro managing form input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [messageError, setMessageError] = useState(false);

  //Handles the form submission to send an email using the emailjs library.
  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await emailjs.sendForm(
        "service_3681q3l",
        "template_w42z98i",
        contactForm.current,
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
        {window.innerWidth <= 1024 ? (
          <button className="modal-close" onClick={onClose}>
            X
          </button>
        ) : null}
        <div className="about-me-container">
          <div className="about-me-info-container">
            <h1>About me</h1>
            <p>
              Olen motivoitunut ohjelmistokehittäjä, jolla on vankka tekninen
              osaaminen ja monipuolinen kokemus erilaisista projekteista. Olen
              suorittamassa tieto- ja viestintätekniikan perustutkintoa Business
              College Helsingissä, ja olen sitoutunut jatkamaan oppimista
              alallani.
              <br />
              <br /> Tavoitteenani on hyödyntää teknistä osaamistani ja
              luovuuttani töissä ja tulevissa projekteissani. Olen innokas
              oppimaan uutta ja uskon jatkuvaan kehitykseen
              ohjelmistokehityksessä. Olen työskennellyt eri projekteissa, mikä
              on antanut minulle laajan käsityksen eri teknologioista ja
              ohjelmointikielistä.
              <br />
              <br /> Olen valmis ottamaan vastuuta ja kohtaamaan uusia
              haasteita. Innolla odotan mahdollisuutta tuoda osaamiseni ja
              kokemukseni käyttöönne sekä oppia lisää alastamme.
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
        <div className="middle-container">
          {window.innerWidth <= 1024 ? null : (
            <button className="modal-close" onClick={onClose}>
              X
            </button>
          )}

          <div className="dividers-container">
            <div className="divider-one"></div>
            <div className="divider-two"></div>
          </div>
        </div>
        <div className="contact-me-container">
          <h1>Get in touch</h1>
          <p>Job offers, questions or just chat!</p>
          <form ref={contactForm} onSubmit={sendEmail}>
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
                style={{
                  resize: "none",
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
  );
};

export default Modal;
