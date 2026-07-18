import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { supabase } from "../lib/supabase";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase
      .from("contact_messages")
      .insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      ]);

    setLoading(false);

    if (error) {
      alert("Failed to send message.");
      console.error(error);
      return;
    }

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 4000);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="bg-ink py-20 sm:py-24 lg:py-32">
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed right-3 top-3 z-[9999] w-[calc(100%-1.5rem)] max-w-[360px] rounded-2xl border border-signal/30 bg-[#171717]/95 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:right-6 sm:top-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-signal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Message Sent Successfully
                </h3>

                <p className="mt-1 text-sm leading-6 text-white/60">
                  Thanks for reaching out! I'll get back to you as soon as possible.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-10 lg:grid-cols-2 lg:gap-16"
        >
          <div>
            <h2 className="font-display text-[clamp(2.5rem,7vw,4.5rem)] uppercase leading-none text-paper sm:text-6xl lg:text-7xl">
              Let's
              <br />
              Connect
            </h2>
            <p className="mt-6 max-w-sm text-sm text-paper/60 sm:text-base">
              Have a project in mind? Let's build something extraordinary
              together.
            </p>

            <div className="mt-10 space-y-5 sm:mt-12 sm:space-y-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-paper/10 p-3 text-signal">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-paper/40">Email</p>
                  <a
                    href="mailto:kundannetke1@gmail.com"
                    className="break-all text-paper transition-colors hover:text-signal"
                  >
                    kundannetke1@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-full bg-paper/10 p-3 text-signal">
                  <FaGithub className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-paper/40">GitHub</p>
                  <a
                    href="https://github.com/Kundan-code7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all text-paper transition-colors hover:text-signal"
                  >
                    @Kundan-code7
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-full bg-paper/10 p-3 text-signal">
                  <FaLinkedin className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-paper/40">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/kundan-netke-588214346"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all text-paper transition-colors hover:text-signal"
                  >
                    @Kundan Netke
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-paper/10 bg-paper/5 p-4 backdrop-blur-sm sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-bold uppercase tracking-[0.2em] text-paper/40"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="mt-2 w-full bg-transparent py-2 text-base text-paper outline-none placeholder:text-paper/25 sm:text-lg"
                />
                <div className="mt-2 h-px w-full bg-paper/10" />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-bold uppercase tracking-[0.2em] text-paper/40"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="mt-2 w-full bg-transparent py-2 text-base text-paper outline-none placeholder:text-paper/25 sm:text-lg"
                />
                <div className="mt-2 h-px w-full bg-paper/10" />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-bold uppercase tracking-[0.2em] text-paper/40"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="mt-2 w-full resize-none bg-transparent py-2 text-base text-paper outline-none placeholder:text-paper/25 sm:text-lg"
                />
                <div className="mt-2 h-px w-full bg-paper/10" />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-signal py-4 text-sm font-bold uppercase tracking-[0.2em] text-paper transition-all duration-300 ease-exhale hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(245,113,27,0.35)] disabled:cursor-not-allowed disabled:opacity-50"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" strokeWidth={2} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}