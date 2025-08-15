import React from 'react';
import { Wrench, Zap, Paintbrush, Hammer, Settings, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Wrench,
      title: t('services.plumbing'),
      description: t('services.plumbing.desc'),
      price: 'CHF 80-150/hour',
      image: '/images/work6.jpg',
    },
    {
      icon: Zap,
      title: t('services.electrical'),
      description: t('services.electrical.desc'),
      price: 'CHF 90-180/hour',
      image: '/images/work4.jpg',
    },
    {
      icon: Hammer,
      title: t('services.carpentry'),
      description: t('services.carpentry.desc'),
      price: 'CHF 70-130/hour',
      image: '/images/Carpentry.webp',
    },
    {
      icon: Paintbrush,
      title: t('services.painting'),
      description: t('services.painting.desc'),
      price: 'CHF 60-120/hour',
      image: '/images/painting.webp',
    },
    {
      icon: Settings,
      title: t('services.maintenance'),
      description: t('services.maintenance.desc'),
      price: 'CHF 75-140/hour',
      image: '/images/work5.jpg',
    },
    {
      icon: AlertCircle,
      title: t('services.emergency'),
      description: t('services.emergency.desc'),
      price: 'CHF 120-200/hour',
      image: '/images/work6.jpg',
    },
  ];

  const scrollToBooking = () => {
    const element = document.querySelector('#booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4 bg-white p-3 rounded-xl shadow-lg">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-gray-900">{service.price}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {service.description}
                </p>
                <button
                  onClick={scrollToBooking}
                  className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/80 transform hover:scale-105 transition-all duration-200"
                >
                  Book Service
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;