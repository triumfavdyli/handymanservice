import React from 'react';
import { Wrench, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary p-2 rounded-lg">
                <img
                  src="/public/handyman-logo.gif"
                  alt="HandymanService Logo"
                  className="w-8 h-8"
                  style={{ width: '30px', height: '30px' }}
                />
              </div>
              <span className="text-2xl font-bold">HANDYMANSERVICE.CH</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Social, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-primary transition-colors"
                >
                  <Social className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t('footer.services')}
            </h3>
            <ul className="space-y-3">
              {[
                'Plumbing',
                'Electrical',
                'Carpentry',
                'Painting',
                'Maintenance',
                'Emergency Repair',
              ].map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('#services')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t('footer.company')}
            </h3>
            <ul className="space-y-3">
              {[
                { name: t('nav.about'), href: '#about' },
                { name: t('nav.testimonials'), href: '#testimonials' },
                { name: t('nav.gallery'), href: '#gallery' },
                { name: t('nav.contact'), href: '#contact' },
                { name: t('footer.privacy'), href: '#' },
                { name: t('footer.terms'), href: '#' },
              ].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 HandymanService. {t('footer.rights')}
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Licensed & Insured</span>
            <span className="text-gray-400 text-sm">•</span>
            <span className="text-gray-400 text-sm">
              24/7 Emergency Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;