import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_u96ktuk",
        "template_3dsy6sq",
        formRef.current!,
        "oiyK82ekyOKggogpg"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you, I will get back to you ASAP!");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong!");
        }
      );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="contact bg-[#0c0c0c] w-full h-[100vh]">
      <div className={`flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
        <div className="flex-[0.75] p-8 rounded-2xl mt-20">
          <h3 className="">Contact</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-300 to-blue-600 rounded-xl blur-xl opacity-80 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 w-full"></div>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your Good Name?"
                  className="bg-black py-4 px-6 placeholder:text-gray text-white rounded-lg outline-none font-medium border-none relative w-full"
                />
              </div>
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur-xl opacity-80 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 w-full"></div>
                <input
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your Web Address?"
                  className="bg-black py-4 px-6 placeholder:text-gray text-white rounded-lg outline-none font-medium border-none relative w-full"
                />
              </div>
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur-xl opacity-80 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 w-full"></div>
                <textarea
                  rows={3}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hello there, how can I help you?"
                  className="bg-black py-4 px-6 placeholder:text-gray text-white rounded-lg outline-none font-medium border-none relative w-full resize-none"
                />
              </div>
            </label>

            <div className="relative group mt-3">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur-xl opacity-80 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 w-28"></div>
              <button
                type="submit"
                className="bg-black py-3 px-8 rounded-xl outline-none w-fit text-gray-300 group-hover:text-white transition duration-200 font-light relative"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>

        <div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"></div>
      </div>
    </div>
  );
};

export default Contact;
