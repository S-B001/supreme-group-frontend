import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors = { fullName: "", email: "", company: "", message: "" };
    let isValid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid email is required";
      isValid = false;
    }
    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        toast.success("Form submitted successfully!");
        setIsSubmitting(false);
        setFormData({ fullName: "", email: "", company: "", message: "" });
      }, 2000);
    }
  };

  return (
    <section className="bg-[#006abc] text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold">Get in touch</h2>
          <div className="h-[2px] w-12 bg-white my-3 md:my-5 lg:my-6 2xl:my-8"></div>
          <p className="sg-translate block font-normal text-base md:text-lg 2xl:text-2xl">For general enquiries</p>

          <div className="mt-6 space-y-4">
            <p><span className="sg-translate font-medium text-lg md:text-lg xl:text-xl" >Address:</span><br/> 110, 16th Road, Chembur, Mumbai - 400071 </p>
            <p><span className="sg-translate font-medium text-lg md:text-lg xl:text-xl">Phone:</span><br/> +91 22 25208822</p>
            <p><span className="sg-translate font-medium text-lg md:text-lg xl:text-xl" >Email:</span><br/> info@supremegroup.co.in</p>
          </div>
        </div>

        {/* Right Section - Form */}
        <form className="w-full md:w-1/2 space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full name"
            value={formData.fullName}
            onChange={handleChange}
            className="sg-translate text-white placeholder:text-opacity-90  focus-visible:border-opacity-100 border-white  border-opacity-40 placeholder:sg-translate transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2  w-full  text-base  lg:text-lg placeholder:text-white font-normal bg-transparent outline-none focus-visible:outline-none"
          />
          {errors.fullName && <p className="text-red-400 text-sm">{errors.fullName}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="sg-translate text-white placeholder:text-opacity-90  focus-visible:border-opacity-100 border-white  border-opacity-40 placeholder:sg-translate transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2  w-full  text-base  lg:text-lg placeholder:text-white font-normal bg-transparent outline-none focus-visible:outline-none"
          />
          {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}

          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="sg-translate text-white placeholder:text-opacity-90  focus-visible:border-opacity-100 border-white  border-opacity-40 placeholder:sg-translate transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2  w-full  text-base  lg:text-lg placeholder:text-white font-normal bg-transparent outline-none focus-visible:outline-none"
          />
          {errors.company && <p className="text-red-400 text-sm">{errors.company}</p>}

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="sg-translate text-white placeholder:text-opacity-90 focus-visible:border-opacity-100 border-white  border-opacity-40 placeholder:sg-translate transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2  w-full  text-base  lg:text-lg placeholder:text-white font-normal bg-transparent outline-none focus-visible:outline-none"
          />
          {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}

          <button
            type="submit"
            className="border-2 border-white py-2 px-8 rounded-full mt-4 hover:bg-white hover:text-blue-600 transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Loading..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
