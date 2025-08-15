import React, { createContext, useContext, useState } from 'react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
];

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.testimonials': 'Testimonials',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.booking': 'Book Now',
    
    // Hero Section
    'hero.title': 'Professional Handyman Services',
    'hero.subtitle': 'Expert repairs, installations, and maintenance for your home and office',
    'hero.cta': 'Get Free Quote',
    'hero.call': 'Call Now: +41 44 123 4567',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Professional solutions for all your repair and maintenance needs',
    'services.plumbing': 'Plumbing',
    'services.plumbing.desc': 'Complete plumbing services including repairs, installations, and emergency fixes',
    'services.electrical': 'Electrical',
    'services.electrical.desc': 'Safe electrical installations, repairs, and maintenance by certified electricians',
    'services.carpentry': 'Carpentry',
    'services.carpentry.desc': 'Custom woodwork, furniture repair, and installation services',
    'services.painting': 'Painting',
    'services.painting.desc': 'Interior and exterior painting with premium materials and finishes',
    'services.maintenance': 'General Maintenance',
    'services.maintenance.desc': 'Regular maintenance services to keep your property in perfect condition',
    'services.emergency': 'Emergency Repairs',
    'services.emergency.desc': '24/7 emergency repair services for urgent issues',
    
    // About
    'about.title': 'Why Choose Us',
    'about.subtitle': 'Professional, reliable, and trusted handyman services in Switzerland',
    'about.experience': '15+ Years Experience',
    'about.experience.desc': 'Extensive experience in all types of repairs and maintenance',
    'about.certified': 'Certified Professionals',
    'about.certified.desc': 'All our technicians are fully certified and insured',
    'about.warranty': '1 Year Warranty',
    'about.warranty.desc': 'We guarantee our work with comprehensive warranty coverage',
    'about.support': '24/7 Support',
    'about.support.desc': 'Round-the-clock customer support and emergency services',
    
    // Testimonials
    'testimonials.title': 'What Our Customers Say',
    'testimonials.subtitle': 'Read reviews from satisfied customers across Switzerland',
    
    // Gallery
    'gallery.title': 'Our Work',
    'gallery.subtitle': 'See the quality of our professional handyman services',
    
    // Booking
    'booking.title': 'Book Your Service',
    'booking.subtitle': 'Schedule your handyman service online - quick and easy',
    'booking.name': 'Full Name',
    'booking.email': 'Email Address',
    'booking.phone': 'Phone Number',
    'booking.service': 'Select Service',
    'booking.date': 'Preferred Date',
    'booking.time': 'Preferred Time',
    'booking.message': 'Description of Work',
    'booking.submit': 'Book Service',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch for a free consultation and quote',
    'contact.address': 'Bahnhofstrasse 123, 8001 Zürich, Switzerland',
    'contact.phone': '+41 44 123 4567',
    'contact.email': 'info@handymanservice.ch',
    'contact.hours': 'Mon-Fri: 7:00-19:00, Sat: 8:00-16:00',
    
    // Footer
    'footer.description': 'Professional handyman services across Switzerland. Quality work, competitive prices, and customer satisfaction guaranteed.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.support': 'Support',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.rights': 'All rights reserved.',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.services': 'Dienstleistungen',
    'nav.about': 'Über uns',
    'nav.testimonials': 'Bewertungen',
    'nav.gallery': 'Galerie',
    'nav.contact': 'Kontakt',
    'nav.booking': 'Jetzt buchen',
    
    // Hero Section
    'hero.title': 'Professionelle Handwerker-Dienstleistungen',
    'hero.subtitle': 'Fachkundige Reparaturen, Installationen und Wartung für Ihr Zuhause und Büro',
    'hero.cta': 'Kostenloses Angebot',
    'hero.call': 'Jetzt anrufen: +41 44 123 4567',
    
    // Services
    'services.title': 'Unsere Dienstleistungen',
    'services.subtitle': 'Professionelle Lösungen für alle Ihre Reparatur- und Wartungsbedürfnisse',
    'services.plumbing': 'Sanitäre Anlagen',
    'services.plumbing.desc': 'Komplette Sanitärdienstleistungen einschließlich Reparaturen, Installationen und Notfallreparaturen',
    'services.electrical': 'Elektroarbeiten',
    'services.electrical.desc': 'Sichere Elektroinstallationen, Reparaturen und Wartung durch zertifizierte Elektriker',
    'services.carpentry': 'Zimmerei',
    'services.carpentry.desc': 'Maßgeschneiderte Holzarbeiten, Möbelreparaturen und Installationsdienstleistungen',
    'services.painting': 'Malerei',
    'services.painting.desc': 'Innen- und Außenanstriche mit hochwertigen Materialien und Oberflächen',
    'services.maintenance': 'Allgemeine Wartung',
    'services.maintenance.desc': 'Regelmäßige Wartungsdienstleistungen, um Ihre Immobilie in perfektem Zustand zu halten',
    'services.emergency': 'Notreparaturen',
    'services.emergency.desc': '24/7 Notreparaturdienste für dringende Probleme',
    
    // About
    'about.title': 'Warum uns wählen',
    'about.subtitle': 'Professionelle, zuverlässige und vertrauensvolle Handwerker-Dienstleistungen in der Schweiz',
    'about.experience': '15+ Jahre Erfahrung',
    'about.experience.desc': 'Umfangreiche Erfahrung in allen Arten von Reparaturen und Wartung',
    'about.certified': 'Zertifizierte Fachkräfte',
    'about.certified.desc': 'Alle unsere Techniker sind vollständig zertifiziert und versichert',
    'about.warranty': '1 Jahr Garantie',
    'about.warranty.desc': 'Wir garantieren unsere Arbeit mit umfassendem Garantieschutz',
    'about.support': '24/7 Support',
    'about.support.desc': 'Rund um die Uhr Kundensupport und Notfalldienste',
    
    // Testimonials
    'testimonials.title': 'Was unsere Kunden sagen',
    'testimonials.subtitle': 'Lesen Sie Bewertungen von zufriedenen Kunden in der ganzen Schweiz',
    
    // Gallery
    'gallery.title': 'Unsere Arbeit',
    'gallery.subtitle': 'Sehen Sie die Qualität unserer professionellen Handwerker-Dienstleistungen',
    
    // Booking
    'booking.title': 'Buchen Sie Ihren Service',
    'booking.subtitle': 'Planen Sie Ihren Handwerker-Service online - schnell und einfach',
    'booking.name': 'Vollständiger Name',
    'booking.email': 'E-Mail-Adresse',
    'booking.phone': 'Telefonnummer',
    'booking.service': 'Service auswählen',
    'booking.date': 'Bevorzugtes Datum',
    'booking.time': 'Bevorzugte Zeit',
    'booking.message': 'Beschreibung der Arbeit',
    'booking.submit': 'Service buchen',
    
    // Contact
    'contact.title': 'Kontaktieren Sie uns',
    'contact.subtitle': 'Nehmen Sie Kontakt auf für eine kostenlose Beratung und ein Angebot',
    'contact.address': 'Bahnhofstrasse 123, 8001 Zürich, Schweiz',
    'contact.phone': '+41 44 123 4567',
    'contact.email': 'info@handymanservice.ch',
    'contact.hours': 'Mo-Fr: 7:00-19:00, Sa: 8:00-16:00',
    
    // Footer
    'footer.description': 'Professionelle Handwerker-Dienstleistungen in der ganzen Schweiz. Qualitätsarbeit, wettbewerbsfähige Preise und garantierte Kundenzufriedenheit.',
    'footer.services': 'Dienstleistungen',
    'footer.company': 'Unternehmen',
    'footer.support': 'Support',
    'footer.privacy': 'Datenschutzrichtlinie',
    'footer.terms': 'Nutzungsbedingungen',
    'footer.rights': 'Alle Rechte vorbehalten.',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.about': 'À propos',
    'nav.testimonials': 'Témoignages',
    'nav.gallery': 'Galerie',
    'nav.contact': 'Contact',
    'nav.booking': 'Réserver',
    
    // Hero Section
    'hero.title': 'Services de Bricolage Professionnels',
    'hero.subtitle': 'Réparations expertes, installations et maintenance pour votre domicile et bureau',
    'hero.cta': 'Devis Gratuit',
    'hero.call': 'Appelez maintenant: +41 44 123 4567',
    
    // Services
    'services.title': 'Nos Services',
    'services.subtitle': 'Solutions professionnelles pour tous vos besoins de réparation et maintenance',
    'services.plumbing': 'Plomberie',
    'services.plumbing.desc': 'Services de plomberie complets incluant réparations, installations et dépannages d\'urgence',
    'services.electrical': 'Électricité',
    'services.electrical.desc': 'Installations électriques sûres, réparations et maintenance par des électriciens certifiés',
    'services.carpentry': 'Menuiserie',
    'services.carpentry.desc': 'Travaux de menuiserie sur mesure, réparation de meubles et services d\'installation',
    'services.painting': 'Peinture',
    'services.painting.desc': 'Peinture intérieure et extérieure avec des matériaux et finitions premium',
    'services.maintenance': 'Maintenance Générale',
    'services.maintenance.desc': 'Services de maintenance régulière pour maintenir votre propriété en parfait état',
    'services.emergency': 'Réparations d\'Urgence',
    'services.emergency.desc': 'Services de réparation d\'urgence 24/7 pour les problèmes urgents',
    
    // About
    'about.title': 'Pourquoi Nous Choisir',
    'about.subtitle': 'Services de bricolage professionnels, fiables et de confiance en Suisse',
    'about.experience': '15+ Années d\'Expérience',
    'about.experience.desc': 'Vaste expérience dans tous types de réparations et maintenance',
    'about.certified': 'Professionnels Certifiés',
    'about.certified.desc': 'Tous nos techniciens sont entièrement certifiés et assurés',
    'about.warranty': 'Garantie 1 An',
    'about.warranty.desc': 'Nous garantissons notre travail avec une couverture de garantie complète',
    'about.support': 'Support 24/7',
    'about.support.desc': 'Support client et services d\'urgence 24h/24',
    
    // Testimonials
    'testimonials.title': 'Ce Que Disent Nos Clients',
    'testimonials.subtitle': 'Lisez les avis de clients satisfaits partout en Suisse',
    
    // Gallery
    'gallery.title': 'Notre Travail',
    'gallery.subtitle': 'Découvrez la qualité de nos services de bricolage professionnels',
    
    // Booking
    'booking.title': 'Réservez Votre Service',
    'booking.subtitle': 'Planifiez votre service de bricolage en ligne - rapide et facile',
    'booking.name': 'Nom Complet',
    'booking.email': 'Adresse E-mail',
    'booking.phone': 'Numéro de Téléphone',
    'booking.service': 'Sélectionner le Service',
    'booking.date': 'Date Préférée',
    'booking.time': 'Heure Préférée',
    'booking.message': 'Description du Travail',
    'booking.submit': 'Réserver le Service',
    
    // Contact
    'contact.title': 'Nous Contacter',
    'contact.subtitle': 'Contactez-nous pour une consultation gratuite et un devis',
    'contact.address': 'Bahnhofstrasse 123, 8001 Zurich, Suisse',
    'contact.phone': '+41 44 123 4567',
    'contact.email': 'info@handymanservice.ch',
    'contact.hours': 'Lun-Ven: 7:00-19:00, Sam: 8:00-16:00',
    
    // Footer
    'footer.description': 'Services de bricolage professionnels partout en Suisse. Travail de qualité, prix compétitifs et satisfaction client garantie.',
    'footer.services': 'Services',
    'footer.company': 'Entreprise',
    'footer.support': 'Support',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions d\'Utilisation',
    'footer.rights': 'Tous droits réservés.',
  },
  it: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Servizi',
    'nav.about': 'Chi Siamo',
    'nav.testimonials': 'Testimonianze',
    'nav.gallery': 'Galleria',
    'nav.contact': 'Contatti',
    'nav.booking': 'Prenota',
    
    // Hero Section
    'hero.title': 'Servizi di Tuttofare Professionali',
    'hero.subtitle': 'Riparazioni esperte, installazioni e manutenzione per la tua casa e ufficio',
    'hero.cta': 'Preventivo Gratuito',
    'hero.call': 'Chiama ora: +41 44 123 4567',
    
    // Services
    'services.title': 'I Nostri Servizi',
    'services.subtitle': 'Soluzioni professionali per tutte le tue esigenze di riparazione e manutenzione',
    'services.plumbing': 'Idraulica',
    'services.plumbing.desc': 'Servizi idraulici completi incluse riparazioni, installazioni e interventi di emergenza',
    'services.electrical': 'Elettricità',
    'services.electrical.desc': 'Installazioni elettriche sicure, riparazioni e manutenzione da elettricisti certificati',
    'services.carpentry': 'Falegnameria',
    'services.carpentry.desc': 'Lavori in legno su misura, riparazione mobili e servizi di installazione',
    'services.painting': 'Pittura',
    'services.painting.desc': 'Pittura interna ed esterna con materiali e finiture premium',
    'services.maintenance': 'Manutenzione Generale',
    'services.maintenance.desc': 'Servizi di manutenzione regolare per mantenere la tua proprietà in perfette condizioni',
    'services.emergency': 'Riparazioni di Emergenza',
    'services.emergency.desc': 'Servizi di riparazione di emergenza 24/7 per problemi urgenti',
    
    // About
    'about.title': 'Perché Sceglierci',
    'about.subtitle': 'Servizi di tuttofare professionali, affidabili e di fiducia in Svizzera',
    'about.experience': '15+ Anni di Esperienza',
    'about.experience.desc': 'Vasta esperienza in tutti i tipi di riparazioni e manutenzione',
    'about.certified': 'Professionisti Certificati',
    'about.certified.desc': 'Tutti i nostri tecnici sono completamente certificati e assicurati',
    'about.warranty': 'Garanzia 1 Anno',
    'about.warranty.desc': 'Garantiamo il nostro lavoro con copertura di garanzia completa',
    'about.support': 'Supporto 24/7',
    'about.support.desc': 'Supporto clienti e servizi di emergenza 24 ore su 24',
    
    // Testimonials
    'testimonials.title': 'Cosa Dicono i Nostri Clienti',
    'testimonials.subtitle': 'Leggi le recensioni di clienti soddisfatti in tutta la Svizzera',
    
    // Gallery
    'gallery.title': 'Il Nostro Lavoro',
    'gallery.subtitle': 'Vedi la qualità dei nostri servizi di tuttofare professionali',
    
    // Booking
    'booking.title': 'Prenota il Tuo Servizio',
    'booking.subtitle': 'Programma il tuo servizio di tuttofare online - veloce e facile',
    'booking.name': 'Nome Completo',
    'booking.email': 'Indirizzo Email',
    'booking.phone': 'Numero di Telefono',
    'booking.service': 'Seleziona Servizio',
    'booking.date': 'Data Preferita',
    'booking.time': 'Orario Preferito',
    'booking.message': 'Descrizione del Lavoro',
    'booking.submit': 'Prenota Servizio',
    
    // Contact
    'contact.title': 'Contattaci',
    'contact.subtitle': 'Contattaci per una consulenza gratuita e un preventivo',
    'contact.address': 'Bahnhofstrasse 123, 8001 Zurigo, Svizzera',
    'contact.phone': '+41 44 123 4567',
    'contact.email': 'info@handymanservice.ch',
    'contact.hours': 'Lun-Ven: 7:00-19:00, Sab: 8:00-16:00',
    
    // Footer
    'footer.description': 'Servizi di tuttofare professionali in tutta la Svizzera. Lavoro di qualità, prezzi competitivi e soddisfazione del cliente garantita.',
    'footer.services': 'Servizi',
    'footer.company': 'Azienda',
    'footer.support': 'Supporto',
    'footer.privacy': 'Informativa sulla Privacy',
    'footer.terms': 'Termini di Servizio',
    'footer.rights': 'Tutti i diritti riservati.',
  },
};

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
  languages: Language[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const setLanguage = (lang: string) => {
    setCurrentLanguage(lang);
  };

  const t = (key: string): string => {
    return translations[currentLanguage]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};