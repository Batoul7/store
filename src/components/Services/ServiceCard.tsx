import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ServiceCardProps {
  data: { icon: IconDefinition ; h: string; p: string }[];
  display?: string;
  gap?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ data, display = "", gap = "" }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 ">
      {data.map((item, index) => (  
      <div key={index} className={`bg-white shadow-sm shadow-blue-400 rounded-xl p-4 ${display} ${gap}`}>
        <div className="text-blue-400 text-4xl mb-4">
            <FontAwesomeIcon icon={item.icon}/>
        </div>
        <h4 className="text-lg font-bold text-gray-700 mb-2">{item.h}</h4>
        <p className="text-gray-600">{item.p}</p>
      </div>
      ))}
    </div>
  );
};

export default ServiceCard;
