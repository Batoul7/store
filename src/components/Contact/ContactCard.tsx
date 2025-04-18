import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface ContactCardProps {
  data: { icon: IconDefinition; title: string; text: string }[];
}

const ContactCard: React.FC<ContactCardProps> = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div key={index} className={`${index === 0 ? "col-span-2" : "col-span-1"} p-3`}>
          <div className="bg-white shadow-lg rounded-xl p-5 text-center">
            <div className="text-blue-400 text-4xl mb-3">
              <FontAwesomeIcon icon={item.icon}/>
            </div>
            <h4 className="text-lg font-bold text-gray-700 mb-1">{item.title}</h4>
            <p className="text-gray-600">{item.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ContactCard;
