"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [formMessage, setFormMessage] = useState("");

  const onSubmit = (data) => {
    console.log(data);
    setFormMessage("Thank you for reaching out! We will get back to you soon.");
  };

  return (
    <div className="container">
      <section className="py-25 relative">
        <div
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{
            backgroundImage:
              "url('https://i.ibb.co.com/qM2tK9RL/Group-1321314677.png')",
          }}
        ></div>

        <div className="flex flex-col xl:flex-row w-full gap-8 z-50">
          {/* Left / Form Section */}
          <div className="w-full xl:w-3/4 flex flex-col gap-6">
            <div className="p-6 md:p-8 rounded-3xl shadow-sm flex flex-col xl:flex-row gap-6 xl:gap-10 bg-white">
              <div className="w-full xl:w-6/10">
                <h2 className="section_title mb-4">Contact Us</h2>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="space-y-4">
                    <div>
                      <label
                        className="block text-xl text-primary-text"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        {...register("name", { required: "Name is required" })}
                        type="text"
                        id="name"
                        className="w-full mt-2 p-3 border border-gray-300 rounded-full"
                        placeholder="Your Name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        className="block text-xl text-primary-text"
                        htmlFor="email"
                      >
                        Email Address
                      </label>
                      <input
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Please enter a valid email address",
                          },
                        })}
                        type="email"
                        id="email"
                        className="w-full mt-2 p-3 border border-gray-300 rounded-full"
                        placeholder="youremail@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        className="block text-xl text-primary-text"
                        htmlFor="phone"
                      >
                        Phone Number
                      </label>
                      <input
                        {...register("phone", {
                          required: "Phone number is required",
                        })}
                        type="text"
                        id="phone"
                        className="w-full mt-2 p-3 border border-gray-300 rounded-full"
                        placeholder="Your Phone"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        className="block text-xl text-primary-text"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        {...register("message", {
                          required: "Message is required",
                        })}
                        id="message"
                        className="w-full mt-2 p-3 border border-gray-300 rounded-4xl"
                        rows={4}
                        placeholder="Your message here"
                      ></textarea>
                      {errors.message && (
                        <p className="text-red-500 text-sm">
                          {errors.message.message}
                        </p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 mt-4 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition"
                    >
                      Send Message
                    </button>
                  </div>
                </form>

                {formMessage && (
                  <div className="mt-4 text-teal-500">{formMessage}</div>
                )}
              </div>

              <div className="w-full xl:w-4/10 mt-6 xl:mt-0">
                <Image
                  src="https://i.ibb.co.com/8T2zSkK/Frame-2147227119.png"
                  alt="Map Location"
                  width={500}
                  height={300}
                  unoptimized
                  className="object-cover w-full rounded-3xl"
                />
              </div>
            </div>

            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25709.74756456555!2d100.86312591111833!3d12.902200724443599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31029698ddc9ddb1%3A0x3178160f4850d39e!2sJomtien%20Beach!5e1!3m2!1sen!2sbd!4v1760784748098!5m2!1sen!2sbd"
                width="100%"
                height="250"
                className="rounded-3xl"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right / Info Section */}
          <div className="w-full xl:w-1/4 flex flex-col gap-6 mt-6 xl:mt-0">
            {/* Open Hours */}
            <div className="bg-white p-6 rounded-3xl shadow-sm flex flex-col justify-center items-center h-[320px]">
              <Image
                src="https://i.ibb.co.com/C3vnT2rH/Frame-3.png"
                alt="Open Hours"
                width={500}
                height={300}
                unoptimized
                className="object-cover h-24 w-24 mb-6"
              />
              <h3 className="section_subTitle mb-4">We’re Open</h3>
              <p className="section_description text-center">
                Monday – Friday: 7:00 AM – 4:00 PM
              </p>
            </div>

            {/* Phone Number */}
            <div className="bg-white p-6 rounded-3xl shadow-sm flex flex-col justify-center items-center h-[320px]">
              <Image
                src="https://i.ibb.co.com/mCNTD9dR/Frame-2.png"
                alt="Phone"
                width={500}
                height={300}
                unoptimized
                className="object-cover h-24 w-24 mb-6"
              />
              <h3 className="section_subTitle mb-4">Phone Number</h3>
              <p className="section_description text-center">
                Got questions? Let's talk! <br />
                <strong>+1 123 123 1234</strong>
              </p>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-3xl shadow-sm flex flex-col justify-center items-center h-[320px]">
              <Image
                src="https://i.ibb.co.com/b5VnNJkS/Frame-1.png"
                alt="Email"
                width={500}
                height={300}
                unoptimized
                className="object-cover h-24 w-24 mb-6"
              />
              <h3 className="section_subTitle mb-4">Email Address</h3>
              <p className="section_description text-center">
                Send us your requests or questions at: <br />
                <strong>support@kutde.com</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
