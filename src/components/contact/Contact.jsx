import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import SectionWrapper from "../ui/SectionWrapper";
import AnimatedText from "../ui/AnimatedText";
import { FaSpinner } from "react-icons/fa";
import toast from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "", // honeypot
  });

  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return false;
    }
    if (!form.email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot spam protection
    if (form.website) return;

    if (!validateForm()) return;

    setLoading(true);

    try {
      // Execute invisible reCAPTCHA
      const recaptchaValue = await recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset();

      if (!recaptchaValue) {
        toast.error("Please complete the CAPTCHA.");
        setLoading(false);
        return;
      }

      // Send email
      await emailjs.send(
        "service_f4uveej",  // Your Service ID
        "template_5wo4uie", // Your Template ID
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        "zGGobHW0GEs2iaSRh" // Your Public Key
      );

      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "", website: "" });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper id="contact" className="bg-gray-50 dark:bg-slate-900 scroll-mt-20">
      <AnimatedText text="Contact Me" />

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto mt-10 flex flex-col gap-6"
      >
        {/* Honeypot field */}
        <input
          type="text"
          name="website"
          value={form.website}
          onChange={handleChange}
          className="hidden"
          tabIndex="-1"
          autoComplete="off"
        />

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="p-4 rounded-lg border dark:bg-slate-800"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="p-4 rounded-lg border dark:bg-slate-800"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          rows={6}
          required
          className="p-4 rounded-lg border dark:bg-slate-800"
        />

        {/* Invisible reCAPTCHA */}
        <ReCAPTCHA
          sitekey="6LcYBTEsAAAAAGEMF3iWuQJJbq_md6toNba3jhR2"
          size="invisible"
          ref={recaptchaRef}
        />

        <button type="submit" disabled={loading} className="px-6 py-3 bg-blue-600 text-white rounded-lg mx-auto flex items-center gap-2">
          {loading ? (
            <>
            <FaSpinner className="animate-spin" /> Sending...
            </>
            ) : (
            "Send Message"
            )}
        </button>

      </form>
    </SectionWrapper>
  );
};

export default Contact;
