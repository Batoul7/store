import React from "react";

const ContactForm: React.FC = () => {
  return (
    <form className="shadow-lg p-5 rounded-lg bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
      </div>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Subject"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
      </div>
      <div className="mt-4">
        <textarea
          rows={4}
          placeholder="Message"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
        ></textarea>
      </div>
      <div className=" mt-4">
        <button className="text-blue-400 border border-blue-400 py-2 px-4 rounded-md hover:text-white hover:bg-blue-400 cursor-pointer">Send Message</button>
      </div>
    </form>
  );
};

export default ContactForm;
