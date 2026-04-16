import React from 'react';
import Insta from '../../assets/instagram.png'
import Fb from '../../assets/facebook.png'
import X from '../../assets/twitter.png'

const Footer = () => {
    return (
        
        <footer className="bg-green-900 text-white py-12 px-4 mt-20">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
                
                {/* Brand Name */}
                <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">KeenKeeper</h2>
                
                {/* Description */}
                <p className=" text-gray-300 text-sm md:text-base mb-8 leading-relaxed">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                {/* icon */}
                <div className="flex flex-col items-center gap-4 mb-12">
                    <h3 className="text-lg font-medium">Social Links</h3>
                    <div className="flex gap-4">
                        <div className='cursor-pointer'>
                            <img src={Insta} alt="Instagram" />
                        </div>
                        <div className='cursor-pointer'>
                            <img src={Fb} alt="Instagram" />
                        </div>
                        <div className='cursor-pointer'>
                            <img src={X} alt="Instagram" />
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="w-full pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-400 gap-4">
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className="flex gap-6">
                        <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
                        <span className="hover:text-white cursor-pointer transition">Terms of Service</span>
                        <span className="hover:text-white cursor-pointer transition">Cookies</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;