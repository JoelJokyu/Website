import type React from "react";
import { useState } from "react";
import Mail from "../assets/mail.svg";
import Phone from "../assets/phone.svg";
import MapPin from "../assets/map-pin.svg";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl md:text-5xl font-bold font-orbitron gradient-text mb-12 relative inline-block">
        Contact Me!
        <div className="absolute -bottom-4 left-0 w-12 h-1 bg-linear-to-r from-yellow-300 to-orange-300 rounded"></div>
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        {/* contact info */}
        <div className="space-y-8">
          {[
            {
              icon: Mail,
              title: "Email",
              value: "joelojukwu16@gmail.com",
              link: "mailto:joelojukwu16@gmail.com",
            },
            {
              icon: Phone,
              title: "Phone",
              value: "+234 806 421 9117",
              link: "tel:+2348064219117",
            },
            {
              icon: MapPin,
              title: "Location",
              value: "Lagos, Nigeria | Rivers State, Nigeria",
            },
          ].map((item) => {
            return (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-linear-to-r from-yellow-300 to-orange-300 flex items-center justify-center shrink-0">
                  <img src={item.icon} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-green-400 hover:underline transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white/70">{item.value}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* contact form */}
        <form
          onSubmit={handleSubmit}
          className="glass rounded-xl p-8 space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-white font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/30 transition-all"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-white font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/30 transition-all"
              placeholder="janedoe@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-white font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/30 transition-all resize-none"
              placeholder="Enter your message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-linear-to-r from-yellow-300 to-orange-300 hover:shadow-lg hover:shadow-yellow-300/50 text-white font-bold py-3 px-6 rounded-full uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 font-orbitron"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
