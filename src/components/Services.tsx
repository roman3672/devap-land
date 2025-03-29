"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  CodeBracketIcon, 
  PaintBrushIcon, 
  RocketLaunchIcon, 
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

const serviceItems = [
  {
    icon: <CodeBracketIcon className="w-10 h-10 text-blue-600" />,
    title: 'Веб-разработка',
    description: 'Создаем производительные, масштабируемые и безопасные веб-приложения с использованием современных технологий и фреймворков.',
  },
  {
    icon: <PaintBrushIcon className="w-10 h-10 text-blue-600" />,
    title: 'UI/UX Дизайн',
    description: 'Разрабатываем интуитивные, привлекательные и удобные пользовательские интерфейсы, которые увеличивают конверсию.',
  },
  {
    icon: <RocketLaunchIcon className="w-10 h-10 text-blue-600" />,
    title: 'SEO-оптимизация',
    description: 'Повышаем видимость вашего сайта в поисковых системах, увеличивая органический трафик и узнаваемость бренда.',
  },
  {
    icon: <ShoppingCartIcon className="w-10 h-10 text-blue-600" />,
    title: 'Интернет-магазины',
    description: 'Создаем современные e-commerce решения с удобной административной панелью и интеграцией платежных систем.',
  },
  {
    icon: <MagnifyingGlassIcon className="w-10 h-10 text-blue-600" />,
    title: 'Контекстная реклама',
    description: 'Настраиваем и оптимизируем рекламные кампании в Google Ads и Яндекс.Директ для привлечения целевой аудитории.',
  },
  {
    icon: <WrenchScrewdriverIcon className="w-10 h-10 text-blue-600" />,
    title: 'Техническая поддержка',
    description: 'Обеспечиваем бесперебойную работу вашего сайта, регулярные обновления и быстрое устранение возникающих проблем.',
  },
];

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Наши <span className="text-blue-600">услуги</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Мы предлагаем полный спектр услуг для реализации ваших цифровых проектов — от разработки стратегии до запуска и поддержки.
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {serviceItems.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              variants={itemVariants}
            >
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href="#contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-lg shadow-blue-600/20"
          >
            Получить консультацию
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;