import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Footer from "../Footer";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      from_name: "",
      from_email: "",
      message: "",
    },
    validationSchema: Yup.object({
      from_name: Yup.string()
        .min(3, "Name must be 3 characters or more")
        .max(20, "Name must be 20 characters or less")
        .required("Name Is Required*"),
      from_email: Yup.string()
        .email("Invalid email address*")
        .required("Email Is Required*"),
      message: Yup.string().required("Message Is Required*"),
    }),
    onSubmit: (values, { resetForm }) => {
      sendEmail(values);
      resetForm();
    },
  });

  const sendEmail = (values) => {
    setLoading(true);
    emailjs
      .send("service_fekfr7p", "template_3me38fq", values, "IfViBsJvLvESG_-9C")
      .then(
        () => {
          setLoading(false);
          console.log("SUCCESS!");
          navigate("/success");
        },
        (error) => {
          setLoading(false);
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <div className="w-[90%] mx-auto mt-10 mb-36 lg:w-[85%]">
        <div className="flex flex-col gap-16 lg:flex-row">
          {/* Left Side */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl text-purple-900 arsenal-sc-bold">
              Get in Touch
            </h1>
            <h1 className="text-xl md:text-4xl my-4 font-bold">
              ASK ME OR CALL ME FOR ANY QUESTION.
            </h1>
            <p className="text-gray-500 my-6 mb-10">
              Have questions or need assistance? I am here to help. Reach out to
              me for inquiries or any information you need.
            </p>
            <div className="flex flex-col lg:flex-row">
              <div className="mb-6 lg:mb-0 lg:mr-8">
                <h1 className="text-2xl dm-sans-bold w-fit text-purple-900 mb-1 border-b-[3px] border-purple-500">
                  Address
                </h1>
                <p className="text-lg w-4/5 text-gray-500 mt-4 my-1">
                  Agarwal Enterprises, near ITO, Bikaner
                </p>
              </div>
              <div>
                <h1 className="text-2xl dm-sans-bold w-fit text-purple-900 mb-1 border-b-[3px] border-purple-500">
                  Working Hours
                </h1>
                <p className="text-lg text-gray-500 mt-4 mb-3">
                  Mon-Fri: 10:00am - 5:00pm
                </p>
                <p className="text-lg text-gray-500 my-3">
                  Saturday: 9:00 am - 4:00 pm
                </p>
                <p className="text-lg text-gray-500 my-3">Sunday: Closed</p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row mt-5">
              <div className="mb-6 lg:mb-0 lg:mr-8">
                <h1 className="text-2xl dm-sans-bold w-fit text-purple-900 mb-1 border-b-[3px] border-purple-500">
                  Details
                </h1>
                <p className="text-lg text-gray-500 my-2 mt-4">9511517845</p>
                <p className="text-lg text-gray-500 ">
                  lakshitcollege@gmail.com
                </p>
              </div>
              <div className="md:mx-auto">
                <p className="text-2xl dm-sans-bold w-fit text-purple-900 mb-1 border-b-[3px] border-purple-500">
                  Follow Me On
                </p>
                <div className="flex text-3xl mt-4 gap-6">
                  <a
                    href="https://x.com/LakshitAgarwal7"
                    target="_blank"
                    className="hover:text-black"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/lakshit-agarwal-6082b9216/"
                    target="_blank"
                    className="text-blue-500"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.instagram.com/lakshit.7811/"
                    target="_blank"
                    className="text-pink-500"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Form */}
          <div className="w-full lg:w-1/2 my-auto">
            <form
              className="bg-purple-50 p-5 rounded-lg"
              onSubmit={formik.handleSubmit}
            >
              <h1 className="text-2xl dm-sans-bold text-purple-900 mb-5">
                Send a Message
              </h1>

              <label
                className={`block text-purple-700 ${
                  formik.touched.from_name && formik.errors.from_name
                    ? `text-red-500`
                    : null
                }`}
              >
                {formik.touched.from_name && formik.errors.from_name
                  ? formik.errors.from_name
                  : "Name"}
              </label>
              <input
                className="text-purple-900 w-full p-2 bg-purple-200 rounded-lg my-3"
                type="text"
                name="from_name"
                placeholder="Name"
                value={formik.values.from_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <label
                className={`block text-purple-700 ${
                  formik.touched.from_email && formik.errors.from_email
                    ? `text-red-500`
                    : null
                }`}
              >
                {formik.touched.from_email && formik.errors.from_email
                  ? formik.errors.from_email
                  : "Email"}
              </label>
              <input
                className="w-full p-2 bg-purple-200 text-purple-900 rounded-lg my-3"
                type="email"
                name="from_email"
                placeholder="Email"
                value={formik.values.from_email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <label
                className={`block text-purple-700 ${
                  formik.touched.message && formik.errors.message
                    ? `text-red-500`
                    : null
                }`}
              >
                {formik.touched.message && formik.errors.message
                  ? formik.errors.message
                  : "Message"}
              </label>
              <textarea
                className="text-purple-900 w-full p-2 bg-purple-200 rounded-lg my-3"
                name="message"
                placeholder="Message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>

              <input
                className="w-full p-2 bg-purple-700 text-white cursor-pointer rounded-lg my-3"
                type="submit"
                value={loading ? "Sending..." : "Send"}
                disabled={loading}
              />
              {loading ? (
                <p className="text-center text-purple-700 mt-2">
                  Sending your message, please wait...
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
