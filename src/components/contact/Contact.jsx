import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import SectionWrapper from "../ui/SectionWrapper";
import AnimatedText from "../ui/AnimatedText";
import { FaSpinner } from "react-icons/fa";
import toast from "react-hot-toast";

const SITE_KEY = "6LcYBTEsAAAAAGEMF3iWuQJJbq_md6toNba3jhR2"; 

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "", // honeypot
  });

  const [loading, setLoading] = useState(false);
  const [lastSent, setLastSent] = useState(0);

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
    if (form.website) return;
    if (Date.now() - lastSent < 30000) {
      toast.error("Please wait before sending again.");
      return;
    }
    if (!validateForm()) return;

    setLoading(true);
    try {
      const token = await window.grecaptcha.execute(SITE_KEY, { action: "submit" });
      await emailjs.send(
        "service_f4uveej",      
        "template_5wo4uie",     
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
          "g-recaptcha-response": token, 
        },
        "zGGobHW0GEs2iaSRh"     
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
    <SectionWrapper id="contact" className="bg-slate-950 text-white scroll-mt-20 py-16">
      <AnimatedText text="Contact Me" />

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto mt-10 flex flex-col gap-6 px-4"
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

        {/* Name Input Box - Cyan Theme */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="p-4 rounded-xl border-2 bg-slate-900/40 text-white placeholder-gray-500 focus:outline-none transition-all duration-300
            border-cyan-500/30 shadow-[inset_0_0_10px_rgba(34,211,238,0.05)]
            hover:border-cyan-400 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
          required
        />

        {/* Email Input Box - Purple/Violet Theme */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="p-4 rounded-xl border-2 bg-slate-900/40 text-white placeholder-gray-500 focus:outline-none transition-all duration-300
            border-purple-500/30 shadow-[inset_0_0_10px_rgba(192,132,252,0.05)]
            hover:border-purple-400 focus:border-purple-400 focus:shadow-[0_0_15px_rgba(192,132,252,0.3)]"
          required
        />

        {/* Message Input Box - Pink Theme */}
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          rows={6}
          className="p-4 rounded-xl border-2 bg-slate-900/40 text-white placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none
            border-pink-500/30 shadow-[inset_0_0_10px_rgba(244,63,94,0.05)]
            hover:border-pink-400 focus:border-pink-400 focus:shadow-[0_0_15px_rgba(244,63,94,0.3)]"
          required
        />

        {/* Send Button - Light Purple Capsule Theme */}
        <button
          type="submit"
          disabled={loading}
          className="
            px-8 py-3
            mx-auto
            flex items-center justify-center 
            rounded-full border-2 
            bg-slate-900/50 
            text-sm font-semibold tracking-wide
            transition-all duration-300 ease-in-out
            border-purple-500/30 text-purple-400 
            hover:border-purple-400 hover:shadow-[0_0_15px_rgba(192,132,252,0.4)]
            focus:border-purple-400 focus:shadow-[0_0_15px_rgba(192,132,252,0.4)]
            disabled:opacity-50 disabled:pointer-events-none
          "
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <FaSpinner className="animate-spin text-white" />
              <span>Sending...</span>
            </div>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </SectionWrapper>
  );
};

export default Contact;