import aboutImg from "../../assets/about/a1.webp"
import { Counter } from "../Counter/Counter";


const AboutSection = () => {

const stats = [
    { end: 10, label: "Years of Experience" },
    { end: 500, label: "Happy Customers" },
    { end: 50, label: "Product Choices" },
    { end: 20, label: "Global Brands" }
  ];
    return (
        <section className="container mx-auto py-10 px-4 flex flex-col md:flex-row justify-between gap-5 lg:gap-16">
        <img src={aboutImg} alt="Our Store" className="w-full h-[500px] md:w-1/3 rounded-lg shadow-lg object-cover hidden md:block" />
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950">The Best Online Store for Clothing and Jewelry</h2>
          <p className="mt-4 text-lg text-gray-700">
            We provide you with a seamless shopping experience where you can find the latest fashion trends in men's and women's clothing and luxurious jewelry.
            Our store is committed to delivering high-quality products at affordable prices, ensuring that you look stylish without breaking the bank. With a wide selection of brands, carefully curated collections, and exceptional customer service, we make shopping a delightful and hassle-free experience. Whether you're looking for the latest fashion trends or timeless jewelry pieces, we've got something special for everyone.
          </p>
          <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 justify-center md:justify-start gap-4">
            {stats.map((stat, index) => (
              <Counter key={index} end={stat.end} label={stat.label} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;