import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function EmailModal({ isOpen, onClose }) {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({
    success: "",
    error: "",
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ success: "", error: "" });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus({
        success: "Message sent successfully.",
        error: "",
      });

      formRef.current.reset();
    } catch (error) {
      console.error("Email sending error:", error);

      setStatus({
        success: "",
        error: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="contact-modal-overlay"   onClick={() => {if (!isSending) onClose();}}>
      <div
        className="contact-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <button
          type="button"
          className="contact-close"
            onClick={() => {if (!isSending) onClose();}}
          aria-label="Close contact form"
        >
          ×
        </button>

        <p className="contact-kicker">Get in touch</p>
        <h3 id="contact-modal-title">Send a Message</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
          />

          <input
            type="text"
            name="title"
            placeholder="Your title"
            required
          />

          <input
            type="email"
            name="reply_to"
            placeholder="Your email"
            required
          />

          <textarea
            name="message"
            placeholder="Your message"
            rows={6}
            required
          />

          <button type="submit" className="btn btn-secondary" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}
          </button>

          {status.success ? (
            <p className="form-success">{status.success}</p>
          ) : null}

          {status.error ? (
            <p className="form-error">{status.error}</p>
          ) : null}
        </form>
      </div>
    </div>
  );
}