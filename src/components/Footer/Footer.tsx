import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { categories, customerService, icons, paymentMethods } from '../../Data/FooterData';
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <div className='bg-blue-400 text-white py-6 px-4 sm:px-6'>
            <div className='container mx-auto flex flex-col gap-4'>
                <div className='text-center'>
                    <p className="text-xl mb-2">Follow Us On Social Media</p>
                    <div className="flex items-center justify-center gap-3">
                        {icons.map((icon) => (
                            <Link to={`${icon.path}`} className='text-2xl transition-all duration-300 hover:scale-125'><FontAwesomeIcon icon={icon.name} /></Link>
                        ))}
                    </div>
                </div>
                <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-t border-white pt-3">
                    <div>
                        <h5 className='font-semibold text-lg mb-3'>About Us</h5>
                        <p>Your online store for the latest tech gadgets, exquisite jewelry, and fashionable clothing for men and women. We are committed to providing high-quality products and excellent customer service.</p>
                    </div>
                    <div>
                        <h5 className='font-semibold text-lg mb-3'>Categories</h5>
                        <ul className='links'>
                            {categories.map((category, index) => (
                                <li key={index} className='link'>
                                    <Link to={category.path}>{category.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h5 className='font-semibold text-lg mb-3'>Customer Service</h5>
                        <ul className='links'>
                            {customerService.map((service, index) => (
                                <li key={index} className='link'>
                                    <Link to={service.path}>{service.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h5 className='font-semibold text-lg mb-3'>Secure Payment</h5>
                        <p>We accept all major credit cards and ensure secure transactions.</p>
                        <div className="flex gap-2 mt-2">
                            {paymentMethods.map((method, index) => (
                                <img key={index} src={method.img} alt={method.name} className="h-8" />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="text-center border-t border-white pt-3">
                    <p>&copy; 2025 Online Shop. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}
