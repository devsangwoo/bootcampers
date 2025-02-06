import React from 'react';
import { Mail, Github, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const contacts = [
    {
      icon: <Mail className="w-5 h-5" />,
      text: 'contact@bootcamper.kr',
      href: 'mailto:contact@bootcamper.kr'
    },
    {
      icon: <Github className="w-5 h-5" />,
      text: 'GitHub',
      href: 'https://github.com/bootcampers-korea'
    },
    {
      icon: <Globe className="w-5 h-5" />,
      text: 'Community',
      href: 'https://bootcamper.kr'
    }
  ];

  return (
    <footer className="bg-[rgb(var(--card))] py-12 mt-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Bootcampers</h3>
            <p className="text-[rgb(var(--text-secondary))] mb-2">
              비영리 개발자 커뮤니티
            </p>
            <p className="text-[rgb(var(--text-secondary))]">
              Est. 2024
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              {contacts.map((contact, index) => (
                <li key={index}>
                  <a 
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text))] transition-colors"
                  >
                    {contact.icon}
                    <span>{contact.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-[rgb(var(--border))] pt-8">
          <p className="text-center text-[rgb(var(--text-secondary))] text-sm">
            © {currentYear} Bootcampers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}; 