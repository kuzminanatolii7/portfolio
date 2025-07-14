import { Github, Linkedin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa6';

const links = [
  {
    href: 'https://github.com/billionare7077',
    icon: <Github className="w-6 h-6 text-[#f5f306]" />,
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/anatoliikuzmin-229801374/',
    icon: <Linkedin className="w-6 h-6 text-[#0077B5]" />,
    label: 'LinkedIn',
  },
  {
    href: 'https://wa.me/380953724690',
    icon: <FaWhatsapp className="w-6 h-6 text-[#25D366]" />,
    label: 'WhatsApp',
  }
];

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
      {links.map(({ href, icon, label }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group relative p-3 bg-white dark:bg-gray-900 rounded-lg hover:scale-110 transform transition-transform duration-300 border border-gray-200 dark:border-gray-800"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          <div>{icon}</div>
        </a>
      ))}
    </div>
  );
}