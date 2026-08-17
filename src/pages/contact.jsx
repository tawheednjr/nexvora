import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    // Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.service ||
      !formData.message
    ) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields.",
      });

      return;
    }

    setLoading(true);

    try {
      const API_URL = import.meta.env.VITE_API_URL;

      if (!API_URL) {
        throw new Error("API URL is not configured.");
      }

      const response = await fetch(`${API_URL}/send-email`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to send message.");
      }

      setStatus({
        type: "success",
        message:
          "Your project request has been sent successfully. We will contact you soon!",
      });

      // Clear form
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        type: "error",
        message:
          "Something went wrong. Please try again or contact us directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen py-32 px-6 overflow-hidden bg-black text-white">

      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-purple-600/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 blur-[160px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-5 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm mb-6">
            Let's Work Together
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Let's Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Amazing
            </span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400 text-lg leading-8">
            Have a project idea? Tell us about it and let's turn your
            vision into a powerful digital experience.
          </p>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Talk
            </h2>

            <p className="text-gray-400 leading-8 mb-10 max-w-xl">
              Whether you need a modern website, mobile application,
              AI automation or a custom software solution, our team
              is ready to help.
            </p>

            <div className="space-y-7">

              {/* Email */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Mail size={24} />
                </div>

                <div>
                  <p className="text-gray-500 text-sm mb-1">
                    Email
                  </p>

                  <p className="font-medium text-white">
                    hello@nexvora.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Phone size={24} />
                </div>

                <div>
                  <p className="text-gray-500 text-sm mb-1">
                    Phone
                  </p>

                  <p className="font-medium text-white">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <MapPin size={24} />
                </div>

                <div>
                  <p className="text-gray-500 text-sm mb-1">
                    Location
                  </p>

                  <p className="font-medium text-white">
                    India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 rounded-2xl border border-purple-500/20 bg-purple-500/5">
              <p className="text-gray-300">
                🚀 Have an idea? Let's turn it into reality.
              </p>

              <p className="text-gray-500 text-sm mt-2">
                Tell us what you need and we'll get back to you as soon
                as possible.
              </p>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl"
          >

            {/* Name + Email */}
            <div className="grid md:grid-cols-2 gap-6">

              {/* Name */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Your Name *
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Email Address *
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition"
                />
              </div>
            </div>

            {/* Company */}
            <div className="mt-6">
              <label className="block text-sm text-gray-400 mb-2">
                Company
              </label>

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name"
                className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition"
              />
            </div>

            {/* Service */}
            <div className="mt-6">
              <label className="block text-sm text-gray-400 mb-2">
                What do you need? *
              </label>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 text-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition"
              >
                <option value="" className="bg-black">
                  Select a service
                </option>

                <option value="Web Development" className="bg-black">
                  Web Development
                </option>

                <option
                  value="Mobile App Development"
                  className="bg-black"
                >
                  Mobile App Development
                </option>

                <option value="AI Automation" className="bg-black">
                  AI Automation
                </option>

                <option value="UI / UX Design" className="bg-black">
                  UI / UX Design
                </option>

                <option value="Cloud & DevOps" className="bg-black">
                  Cloud & DevOps
                </option>

                <option value="Custom Software" className="bg-black">
                  Custom Software
                </option>
              </select>
            </div>

            {/* Budget */}
            <div className="mt-6">
              <label className="block text-sm text-gray-400 mb-2">
                Project Budget
              </label>

              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 text-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition"
              >
                <option value="" className="bg-black">
                  Select your budget
                </option>

                <option
                  value="₹10,000 - ₹25,000"
                  className="bg-black"
                >
                  ₹10,000 - ₹25,000
                </option>

                <option
                  value="₹25,000 - ₹50,000"
                  className="bg-black"
                >
                  ₹25,000 - ₹50,000
                </option>

                <option
                  value="₹50,000 - ₹1,00,000"
                  className="bg-black"
                >
                  ₹50,000 - ₹1,00,000
                </option>

                <option value="₹1,00,000+" className="bg-black">
                  ₹1,00,000+
                </option>
              </select>
            </div>

            {/* Message */}
            <div className="mt-6">
              <label className="block text-sm text-gray-400 mb-2">
                Tell us about your project *
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                placeholder="Tell us about your idea, requirements, timeline..."
                className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition resize-none"
              />
            </div>

            {/* Status */}
            {status.message && (
              <div
                className={`mt-6 flex items-start gap-3 p-4 rounded-xl border ${
                  status.type === "success"
                    ? "bg-green-500/10 border-green-500/20 text-green-400"
                    : "bg-red-500/10 border-red-500/20 text-red-400"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle
                    size={20}
                    className="shrink-0 mt-0.5"
                  />
                ) : (
                  <AlertCircle
                    size={20}
                    className="shrink-0 mt-0.5"
                  />
                )}

                <p className="text-sm">
                  {status.message}
                </p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="mt-8 w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 font-semibold text-white hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {loading
                ? "Sending..."
                : "Send Project Request"}

              {!loading && <Send size={20} />}
            </button>

            <p className="text-gray-600 text-xs text-center mt-4">
              We'll never share your information with third parties.
            </p>

          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;