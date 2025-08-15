import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: [t('contact.address')],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: [t('contact.phone')],
      link: 'tel:+41441234567',
    },
    {
      icon: Mail,
      title: 'Email',
      details: [t('contact.email')],
      link: 'mailto:info@handymanservice.ch',
    },
    {
      icon: Clock,
      title: 'Hours',
      details: [t('contact.hours')],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="bg-primary/10 p-3 rounded-lg">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  {item.details.map((detail, idx) => (
                    <div key={idx}>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-gray-600 hover:text-primary transition-colors"
                        >
                          {detail}
                        </a>
                      ) : (
                        <p className="text-gray-600">{detail}</p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Emergency Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-red-50 p-6 rounded-xl border border-red-200"
            >
              <h3 className="text-lg font-bold text-red-900 mb-2">
                Emergency Service
              </h3>
              <p className="text-red-700 mb-3">
                24/7 emergency repairs available
              </p>
              <a
                href="tel:+41441234567"
                className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-block"
              >
                Call Emergency Line
              </a>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-100 rounded-2xl overflow-hidden h-96 lg:h-full"
          >
            {/* Placeholder for map - in a real implementation, you'd use Google Maps or similar */}
            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-white flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Find Us Here
                </h3>
                <p className="text-gray-600">
                  Bahnhofstrasse 123<br />
                  8001 Zürich, Switzerland
                </p>
                <button className="mt-4 bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary/80 transition-colors">
                  Get Directions
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Service Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Service Areas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Zürich', 'Basel', 'Geneva', 'Bern', 'Lausanne', 'Winterthur',
              'Lucerne', 'St. Gallen', 'Lugano', 'Biel', 'Thun', 'Köniz'
            ].map((city, index) => (
              <div
                key={index}
                className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-medium"
              >
                {city}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;