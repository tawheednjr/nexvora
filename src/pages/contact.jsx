import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState("");
const [error, setError] = useState("");

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  setError("");
  setSuccess("");

  if (!formData.name || !formData.email || !formData.message) {
    setError("Please fill all fields.");
    return;
  }

  setLoading(true);

  try {
    
    // const response = await fetch("http://localhost:5000/send-email",
    // const response = await fetch("http://localhost:5000/send-email",
    const response = await fetch("https://nexvora-backend-gamma.vercel.app/send-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (data.success) {
  setSuccess("Message sent successfully!");
  setLoading(false);

  setFormData({
    name: "",
    email: "",
    message: "",
  });
} else {
    setError("Failed to send message");
    setLoading(false);
  }

  } catch (error) {
    console.error(error);
    setError("Server error");
    setLoading(false);
  }

};

  return (
    <div className="min-h-screen bg-black text-white px-8 py-20">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-12">
          Contact Us
        </h1>

        {success && (
          <div className="mb-6 p-4 bg-green-600 rounded-xl"> {success}
          </div>
)}

{error && (
  <div className="mb-6 p-4 bg-red-600 rounded-xl">
    {error}
  </div>
)}

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-4 bg-gray-900 border border-gray-800 rounded-xl"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-4 bg-gray-900 border border-gray-800 rounded-xl"
          />          

          <textarea
            rows="6"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-4 bg-gray-900 border border-gray-800 rounded-xl"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-xl font-semibold transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>


      </div>
    </div>
  );
}

export default Contact;