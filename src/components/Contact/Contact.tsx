import React from "react";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import { faLocation, faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";

const contactCardData = [
  {
    icon: faLocation,
    title: "Call Us",
    text: " New York, NY 535022",
  },
  {
    icon: faPhone,
    title: "Address",
    text: "+1 5589 55488 55",
  },
  {
    icon: faMessage,
    title: "Email Us",
    text: "info@example.com",
  },
];

const Contact: React.FC = () => {
  return (
    <section className="pb-10 ">
      <div className="pb-5 h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d96778.43262902627!2d-73.998241!3d40.710839!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1725563061883!5m2!1sen!2sus"
          className="w-full h-full"
        ></iframe>
      </div>
      <div className="py-5 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="text-center grid">
            <ContactCard data={contactCardData} />
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
