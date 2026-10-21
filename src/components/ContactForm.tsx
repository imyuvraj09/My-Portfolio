import React, { useState } from "react";

interface FormState {
  name: string;
  email: string;
  message: string;
  botField: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type SubmitStatus = "idle" | "success" | "error";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    message: "",
    botField: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      newErrors.name = "Name is required.";
    } else if (trimmedName.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    } else if (trimmedName.length > 100) {
      newErrors.name = "Name must not exceed 100 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(trimmedEmail)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!trimmedMessage) {
      newErrors.message = "Message is required.";
    } else if (trimmedMessage.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    } else if (trimmedMessage.length > 3000) {
      newErrors.message = "Message must not exceed 3000 characters.";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.botField) {
      setSubmitStatus("success");
      setStatusMessage("Your message has been sent. Thank you for reaching out!");
      setFormData({ name: "", email: "", message: "", botField: "" });
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitStatus("idle");
      return;
    }

    const configuredEndpoint = (import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined)?.trim();
    const endpoint =
      configuredEndpoint && !configuredEndpoint.includes("YOUR_FORM_ID")
        ? configuredEndpoint
        : "/api/contact";

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setStatusMessage("");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setStatusMessage("Your message has been sent. Thank you for reaching out!");
        setFormData({ name: "", email: "", message: "", botField: "" });
        setErrors({});
      } else {
        let errorDetail = "";
        try {
          const data = await response.json();
          if (data && data.errors && Array.isArray(data.errors)) {
            errorDetail = data.errors
              .map((errItem: { message?: string }) => errItem.message)
              .filter(Boolean)
              .join(", ");
          } else if (data && data.message) {
            errorDetail = data.message;
          }
        } catch {
          // ignore
        }

        setSubmitStatus("error");
        setStatusMessage(
          errorDetail
            ? `Failed to send message (${errorDetail}). Please email me directly at yuvrajsinghias09122004@gmail.com.`
            : "Failed to send message. Please reach out directly to yuvrajsinghias09122004@gmail.com."
        );
      }
    } catch {
      setSubmitStatus("error");
      setStatusMessage(
        "A network error occurred while sending. Please reach out directly at yuvrajsinghias09122004@gmail.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-card" aria-labelledby="contact-form-title">
      <h3 id="contact-form-title" className="contact-form-heading">
        Send me a message
      </h3>

      <form onSubmit={handleSubmit} noValidate className="contact-form">
        <div
          className="form-honeypot"
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "1px",
            height: "1px",
            padding: "0",
            margin: "-1px",
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            border: "0",
            opacity: 0,
            pointerEvents: "none",
          }}
        >
          <label htmlFor="contact-bot-field">Do not fill this field</label>
          <input
            type="text"
            id="contact-bot-field"
            name="botField"
            value={formData.botField}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="contact-form-row">
          <div className="contact-field-group">
            <label htmlFor="contact-name" className="contact-label">
              Name <span className="required-indicator" aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              maxLength={100}
              autoComplete="name"
              placeholder="Your name"
              disabled={isSubmitting}
              className={`contact-input ${errors.name ? "input-error" : ""}`}
              aria-required="true"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
            />
            {errors.name && (
              <span id="contact-name-error" className="field-error-msg" role="alert">
                {errors.name}
              </span>
            )}
          </div>

          <div className="contact-field-group">
            <label htmlFor="contact-email" className="contact-label">
              Email <span className="required-indicator" aria-hidden="true">*</span>
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              maxLength={100}
              autoComplete="email"
              placeholder="you@example.com"
              disabled={isSubmitting}
              className={`contact-input ${errors.email ? "input-error" : ""}`}
              aria-required="true"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
            />
            {errors.email && (
              <span id="contact-email-error" className="field-error-msg" role="alert">
                {errors.email}
              </span>
            )}
          </div>
        </div>

        <div className="contact-field-group full-width">
          <label htmlFor="contact-message" className="contact-label">
            Message <span className="required-indicator" aria-hidden="true">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            maxLength={3000}
            placeholder="How can I help you? Tell me about your project, idea, or role..."
            disabled={isSubmitting}
            className={`contact-textarea ${errors.message ? "input-error" : ""}`}
            aria-required="true"
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
          />
          {errors.message && (
            <span id="contact-message-error" className="field-error-msg" role="alert">
              {errors.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="contact-submit-btn"
          aria-busy={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {submitStatus !== "idle" && (
          <div
            className={`contact-status-banner status-${submitStatus}`}
            role="status"
            aria-live="polite"
          >
            {statusMessage.includes("yuvrajsinghias09122004@gmail.com") ? (
              <span>
                {statusMessage.split("yuvrajsinghias09122004@gmail.com")[0]}
                <a
                  href={`mailto:yuvrajsinghias09122004@gmail.com?subject=Contact%20from%20Portfolio&body=${encodeURIComponent(formData.message || '')}`}
                  style={{ color: "inherit", textDecoration: "underline", fontWeight: 600 }}
                >
                  yuvrajsinghias09122004@gmail.com
                </a>
                {statusMessage.split("yuvrajsinghias09122004@gmail.com")[1]}
              </span>
            ) : (
              statusMessage
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
