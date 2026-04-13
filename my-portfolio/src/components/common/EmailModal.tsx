import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

type EmailModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function EmailModal({ isOpen, onClose }: EmailModalProps) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({
    success: "",
    error: "",
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ success: "", error: "" });

    if (!formRef.current) {
      setStatus({
        success: "",
        error: "Form not ready. Please try again.",
      });
      setIsSending(false);
      return;
    }

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
      console.error("EmailJS error:", error);
      setStatus({
        success: "",
        error: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div
      className="contact-modal-overlay"
      onClick={() => {
        if (!isSending) onClose();
      }}
    >
      <div
        className="contact-modal"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <button
          type="button"
          className="contact-close"
          onClick={() => {
            if (!isSending) onClose();
          }}
          aria-label="Close contact form"
        >
          ×
        </button>

        <p className="contact-kicker">Get in touch</p>
        <h3 id="contact-modal-title">Send a Message</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="from_name"
            placeholder="Your name"
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

          {status.success && <p className="form-success">{status.success}</p>}
          {status.error && <p className="form-error">{status.error}</p>}
        </form>
      </div>
    </div>
  );
}