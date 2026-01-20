import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import SectionWrapper from "../ui/SectionWrapper";
import AnimatedText from "../ui/AnimatedText";
import { FaSpinner } from "react-icons/fa";
import toast from "react-hot-toast";

const SITE_KEY = "6LcYBTEsAAAAAGEMF3iWuQJJbq_md6toNba3jhR2"; // <-- replace with your Google Site Key

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "", // honeypot
  });

  const [loading, setLoading] = useState(false);
  const [lastSent, setLastSent] = useState(0);

  // Load reCAPTCHA script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    script.async = true;
    document.body.appendChild(script);
  }, []);

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

    // Honeypot protection
    if (form.website) return;

    // Cooldown 30s
    if (Date.now() - lastSent < 30000) {
      toast.error("Please wait before sending again.");
      return;
    }

    if (!validateForm()) return;

    setLoading(true);

    try {
      // Get reCAPTCHA token
      const token = await window.grecaptcha.execute(SITE_KEY, { action: "submit" });

      await emailjs.send(
        "service_f4uveej",      // Service ID
        "template_5wo4uie",     // Template ID
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
          "g-recaptcha-response": token, // <-- important for verification
        },
        "zGGobHW0GEs2iaSRh"     // Public Key
      );

      toast.success("Message sent successfully ✨");
      setLastSent(Date.now());
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
        {/* Honeypot */}
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
          className="p-4 rounded-lg border dark:bg-slate-800"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="p-4 rounded-lg border dark:bg-slate-800"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          rows={6}
          className="p-4 rounded-lg border dark:bg-slate-800"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg mx-auto flex items-center gap-2 hover:bg-blue-700 transition"
        >
          {loading ? (
            <>
              <FaSpinner className="animate-spin" />
              Sending...
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
