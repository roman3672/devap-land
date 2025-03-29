"use client";

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Услуги',
      links: [
        { name: 'Веб-разработка', href: '#services' },
        { name: 'UI/UX Дизайн', href: '#services' },
        { name: 'SEO-оптимизация', href: '#services' },
        { name: 'Интернет-магазины', href: '#services' },
        { name: 'Контекстная реклама', href: '#services' },
      ],
    },
    {
      title: 'Компания',
      links: [
        { name: 'О нас', href: '#about' },
        { name: 'Портфолио', href: '#portfolio' },
        { name: 'Отзывы', href: '#testimonials' },
        { name: 'Вакансии', href: '#' },
        { name: 'Блог', href: '#' },
      ],
    },
    {
      title: 'Поддержка',
      links: [
        { name: 'Контакты', href: '#contact' },
        { name: 'FAQ', href: '#' },
        { name: 'Политика конфиденциальности', href: '#' },
        { name: 'Условия использования', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Информация о компании */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 text-2xl font-bold mb-4">
              <span className="text-blue-400">DevAp</span>
              <span className="text-white">Agency</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Мы создаем современные цифровые решения, которые помогают бизнесу расти 
              и достигать новых высот в цифровом мире.
            </p>
            <div className="flex space-x-4 mb-8">
              {[
                { name: 'Facebook', href: '#' },
                { name: 'Twitter', href: '#' },
                { name: 'Instagram', href: '#' },
                { name: 'LinkedIn', href: '#' },
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="bg-gray-800 hover:bg-blue-600 h-10 w-10 rounded-full flex items-center justify-center text-white transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-xs font-medium">{social.name.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Ссылки в футере */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold text-xl mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Нижняя часть футера */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear} DevAp Agency. Все права защищены.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
              Политика конфиденциальности
            </Link>
            <Link href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 