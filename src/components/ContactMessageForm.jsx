
import { useState } from "react";
import {
  LockKeyhole,
  Send,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  topic: "",
  message: "",
};

const topics = [
  "Order or delivery",
  "Verify a seller or batch",
  "How to use the test",
  "Product feedback or complaint",
  "Partnerships & stockists",
  "Other",
];

export default function ContactMessageForm() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setStatus("");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (
      formData.phone.trim() &&
      !/^[+]?[\d\s()-]{7,18}$/.test(formData.phone.trim())
    ) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.topic) {
      newErrors.topic = "Please select an inquiry type.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please enter at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("error");
      return;
    }

    // Frontend validation only.
    // Connect your backend API here before using this in production.
    setStatus("success");
    setFormData(initialForm);
    setErrors({});
  };

  const inputClass =
    "mt-2 w-full rounded-lg border border-transparent bg-[#f1f2ff] px-3 py-3 text-xs text-[#092c60] outline-none transition placeholder:text-[#9290a2] focus:border-[#bd2d79] focus:bg-white";

  const labelClass =
    "text-[10px] font-semibold text-[#092c60]";

  return (
    <section className="bg-[#fcfaff] px-5 pb-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Form Introduction */}
          <div className="rounded-2xl border border-[#f0edf8] bg-white p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-2">
              <LockKeyhole size={13} className="text-[#bd2d79]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#bd2d79]">
                Secure Message
              </span>
            </div>

            <h2 className="text-2xl font-semibold tracking-tight text-[#092c60] sm:text-3xl">
              Send us a message
            </h2>

            <p className="mt-3 text-xs leading-6 text-[#666477]">
              Fill in the details below and a Prega Gene support
              specialist will reach out to you via your preferred
              contact channel.
            </p>

            <div className="mt-8 rounded-xl bg-[#f1f2ff] p-4">
              <div className="flex items-center gap-2 text-[#092c60]">
                <ShieldCheck size={17} className="text-[#bd2d79]" />

                <span className="text-xs font-semibold">
                  Your privacy matters
                </span>
              </div>

              <p className="mt-2 text-[11px] leading-5 text-[#666477]">
                Share only the information needed to help us resolve
                your inquiry. Do not include medical records or
                sensitive health details.
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Encrypted", "No spam", "Reply within 24 hours"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#ece9f5] bg-white px-3 py-2 text-[9px] font-medium text-[#555467]"
                  >
                    ✓ {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-[#f0edf8] bg-white p-5 shadow-[0_8px_30px_rgba(9,44,96,0.05)] sm:p-8">
            <form onSubmit={handleSubmit} noValidate>

              <div className="mb-5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#bd2d79]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#bd2d79]">
                  Encrypted Inquiry Form
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                {/* Full Name */}
                <div>
                  <label htmlFor="contact-name" className={labelClass}>
                    Full Name <span className="text-[#bd2d79]">*</span>
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g., Priya Sharma"
                    className={inputClass}
                    aria-invalid={!!errors.name}
                  />

                  {errors.name && (
                    <p className="mt-1 text-[10px] text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className={labelClass}>
                    Email Address <span className="text-[#bd2d79]">*</span>
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="priya@example.com"
                    className={inputClass}
                    aria-invalid={!!errors.email}
                  />

                  {errors.email && (
                    <p className="mt-1 text-[10px] text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="contact-phone" className={labelClass}>
                    Phone Number <span className="text-[#9290a2]">(Optional)</span>
                  </label>

                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className={inputClass}
                    aria-invalid={!!errors.phone}
                  />

                  {errors.phone && (
                    <p className="mt-1 text-[10px] text-red-600">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Inquiry Topic */}
                <div>
                  <label htmlFor="contact-topic" className={labelClass}>
                    Inquiry Type <span className="text-[#bd2d79]">*</span>
                  </label>

                  <select
                    id="contact-topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none`}
                    aria-invalid={!!errors.topic}
                  >
                    <option value="">Select a topic...</option>

                    {topics.map((topic) => (
                      <option key={topic} value={topic}>
                        {topic}
                      </option>
                    ))}
                  </select>

                  {errors.topic && (
                    <p className="mt-1 text-[10px] text-red-600">
                      {errors.topic}
                    </p>
                  )}
                </div>

              </div>

              {/* Message */}
              <div className="mt-4">
                <label htmlFor="contact-message" className={labelClass}>
                  Your Message <span className="text-[#bd2d79]">*</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you today? Please share non-clinical test inquiries or batch lot numbers if applicable."
                  className={`${inputClass} resize-none`}
                  aria-invalid={!!errors.message}
                />

                {errors.message && (
                  <p className="mt-1 text-[10px] text-red-600">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Privacy Notice */}
              <div className="mt-4 flex gap-3 rounded-xl bg-[#f0f1ff] p-4">
                <LockKeyhole
                  size={16}
                  className="mt-0.5 shrink-0 text-[#bd2d79]"
                />

                <p className="text-[10px] leading-5 text-[#555467]">
                  <strong className="text-[#092c60]">
                    Health Privacy Notice:
                  </strong>{" "}
                  Please avoid sharing private medical records or
                  sensitive health details. Your message should contain
                  only the information necessary to address your inquiry.
                  See our{" "}
                  <a
                    href="/privacy-policy"
                    className="font-semibold text-[#bd2d79] underline"
                  >
                    Privacy Policy
                  </a>.
                </p>
              </div>

              {/* Success Message */}
              {status === "success" && (
                <div
                  role="status"
                  className="mt-4 flex items-start gap-2 rounded-lg bg-green-50 p-3 text-xs text-green-800"
                >
                  <CheckCircle2 size={17} className="shrink-0" />

                  <p>
                    Thank you. Your form passed validation. Connect
                    the backend to receive and process your message.
                  </p>
                </div>
              )}

              {/* Error Message */}
              {status === "error" && (
                <div
                  role="alert"
                  className="mt-4 flex items-center gap-2 rounded-lg bg-red-50 p-3 text-xs text-red-700"
                >
                  <AlertCircle size={16} />

                  Something went wrong. Please check the highlighted
                  fields and try again.
                </div>
              )}

              {/* Submit */}
              <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#092c60] px-6 text-xs font-semibold text-white transition hover:bg-[#123b73]"
                >
                  Send Message
                  <Send size={14} />
                </button>

                <div className="flex items-center gap-1.5 text-[9px] text-[#666477]">
                  <ShieldCheck size={13} className="text-[#bd2d79]" />
                  Your inquiry is handled confidentially
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
