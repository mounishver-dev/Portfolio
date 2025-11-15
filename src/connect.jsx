import { useState } from "react";
import "./connect.css";

export default function Connect() {
  const [status, setStatus] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }



  /*
function handleSubmit(e) {
  e.preventDefault();

  fetch("http://localhost:5000/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        setStatus("Message sent! ✔️");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send. ❌");
      }
    })
    .catch(() => setStatus("Server error"));
}

for local
*/


function handleSubmit(e) {
  e.preventDefault();

  setStatus("Sending...");

  fetch("/api/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        setStatus("Message sent! ✔");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send ❌");
      }
    })
    .catch(err => {
      console.error(err);
      setStatus("Server error ❌");
    });
}



  return (
    <section className="connect-section" id="connect">
      <div className="connect-card">
        <h2 className="connect-title">Connect</h2>
        <p className="connect-sub">
          Let’s build something memorable — reach out for design, collaboration,
          or freelance work.
        </p>

        <div className="connect-grid">
          <div className="contact-info">
            <div className="info-row">
              <strong>Email: </strong>
              <a href="mailto:mounishver.s@gmail.com ">
                mounishver.s@gmail.com 
              </a>
            </div>

            <div className="social-row">
              <a className="social-btn" href="https://github.com/mounishver-dev" target="_blank">GitHub</a>
              <a className="social-btn" href="https://www.linkedin.com/in/mounishver-s-85911b381/" target="_blank">LinkedIn</a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={form.message}
              onChange={handleChange}
            />

            <button className="btn-primary" type="submit">
              Send
            </button>

            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
