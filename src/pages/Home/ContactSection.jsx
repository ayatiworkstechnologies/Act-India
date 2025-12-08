import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import emailjs from "@emailjs/browser"; // ✅ FIX: correct import

// 🔒 Validation schema
const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(80, "Name is too long"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  message: z.string().min(10, "Message should be at least 10 characters"),
  company: z.string().optional(), // honeypot
});

export default function ContactSection() {
  const [serverMsg, setServerMsg] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
    setFocus,
    watch,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      company: "", // honeypot
    },
  });

  // Autofocus first error on submit attempts
  useEffect(() => {
    const firstError = Object.keys(errors)[0];
    if (firstError) setFocus(firstError);
  }, [errors, setFocus]);

  const onSubmit = async (values) => {
    setServerMsg(null);

    // 🚫 Honeypot: if filled, likely a bot
    if (values.company && values.company.trim().length > 0) {
      setServerMsg({ type: "error", text: "Spam detected." });
      return;
    }

    // Extra context for your EmailJS template
    const payload = {
      ...values,
      page: typeof window !== "undefined" ? window.location.href : "N/A",
      source: "ACT India — Contact Section",
      submitted_at: new Date().toLocaleString("en-IN"),
      year: new Date().getFullYear(),
    };

    try {
      // ⛳ Replace with your own EmailJS IDs
      const SERVICE_ID = "service_sm2d2ao";
      const TEMPLATE_ID = "template_agcpgdr";
      const PUBLIC_KEY = "1OAToflI7vmUK7Dqz";

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, { publicKey: PUBLIC_KEY });

      setServerMsg({ type: "success", text: "✅ Message sent successfully!" });
      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setServerMsg({ type: "error", text: "❌ Failed to send. Try again later." });
    }
  };

  const phoneVal = watch("phone");

  return (
    <section className="w-full px-6 md:px-16 py-12 bg-white" id="form">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <p className="text-gray-500 text-sm tracking-wide uppercase font-primary">
            We’re here to help you
          </p>
          <h2 className="text-4xl font-semibold leading-tight font-primary">
            LET’S <span className="text-black font-primary">TALK</span> <br />
            ABOUT <br />
            YOUR NEEDS
          </h2>
          <p className="text-gray-400 max-w-md font-primary font-semibold">
            Looking for top-quality services and trusted dealership solutions? Reach out to us today.
          </p>

          {/* Contact Info */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-3">
              <Mail className="text-secondary" size={22} />
              <p className="text-gray-700">
                <span className="block font-medium">E-mail</span>
                actindia@gmail.com
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-secondary" size={22} />
              <p className="text-gray-700">
                <span className="block font-medium">Phone Number</span>
                +91 95952 22292
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side Form */}
        <motion.form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-sm p-6 md:p-8 space-y-5"
        >
          {/* Global message */}
          {serverMsg && (
            <div
              className={`text-sm rounded-md p-3 ${
                serverMsg.type === "success"
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {serverMsg.text}
            </div>
          )}

          {/* Honeypot (hidden) */}
          <div className="hidden">
            <label className="block text-sm font-semibold font-primary">Company</label>
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...register("company")}
              className="w-full mt-1 px-4 py-3 rounded-md border border-gray-300"
            />
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-semibold font-primary" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              {...register("name")}
              className={`w-full mt-1 px-4 py-3 rounded-md border font-secondary focus:outline-none focus:ring-2 ${
                errors.name ? "border-red-400 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.name && (
              <p id="name-error" className="text-red-500 text-xs mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold font-primary" htmlFor="email">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email")}
              className={`w-full mt-1 px-4 py-3 rounded-md border font-secondary focus:outline-none focus:ring-2 ${
                errors.email ? "border-red-400 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.email && (
              <p id="email-error" className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold font-primary" htmlFor="phone">
              Phone Number
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 select-none">+91</span>
              <input
                id="phone"
                inputMode="numeric"
                placeholder="10-digit mobile number"
                maxLength={10}
                {...register("phone")}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                className={`w-full pl-12 mt-1 px-4 py-3 rounded-md border font-secondary focus:outline-none focus:ring-2 ${
                  errors.phone ? "border-red-400 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                }`}
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value.replace(/\D/g, ""); // digits only
                }}
              />
            </div>
            {errors.phone && (
              <p id="phone-error" className="text-red-500 text-xs mt-1">
                {errors.phone.message}
              </p>
            )}
            {!errors.phone && phoneVal && phoneVal.length < 10 && (
              <p className="text-[11px] text-gray-500 mt-1">Enter all 10 digits.</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold font-primary" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Tell us a bit about your requirement"
              {...register("message")}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={`w-full mt-1 px-4 py-3 rounded-md border font-secondary focus:outline-none focus:ring-2 ${
                errors.message ? "border-red-400 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.message && (
              <p id="message-error" className="text-red-500 text-xs mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
            type="submit"
            disabled={isSubmitting}
            className={`inline-flex items-center gap-2 font-semibold px-5 py-3  text-white
              ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-primary hover:opacity-90"}
            `}
          >
            {isSubmitting ? (
              <>
                <span className="h-4 w-4 border-2 border-white border-b-transparent animate-spin" />
                Sending…
              </>
            ) : (
              <>Send Message →</>
            )}
          </motion.button>

          {isSubmitSuccessful && serverMsg?.type === "success" && (
            <p className="text-xs text-gray-500">We’ve received your details. Expect a reply soon.</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
