"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  UserGroupIcon, 
  LightBulbIcon, 
  RocketLaunchIcon, 
  ClockIcon
} from '@heroicons/react/24/outline';

const values = [
  {
    icon: <UserGroupIcon className="h-8 w-8 text-blue-600" />,
    title: 'Ориентация на клиента',
    description: 'Мы ставим потребности клиентов на первое место, создавая решения, которые действительно работают на ваш бизнес.',
  },
  {
    icon: <LightBulbIcon className="h-8 w-8 text-blue-600" />,
    title: 'Инновационный подход',
    description: 'Мы постоянно следим за новыми технологиями и трендами, чтобы предлагать современные и эффективные решения.',
  },
  {
    icon: <RocketLaunchIcon className="h-8 w-8 text-blue-600" />,
    title: 'Качество и надежность',
    description: 'Каждый проект разрабатывается с максимальным вниманием к деталям, обеспечивая высокое качество и стабильность работы.',
  },
  {
    icon: <ClockIcon className="h-8 w-8 text-blue-600" />,
    title: 'Соблюдение сроков',
    description: 'Мы ценим время наших клиентов и всегда стараемся доставить проекты вовремя или раньше установленного срока.',
  },
];

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Левая колонка - Информация о компании */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              О нашем <span className="text-blue-600">агентстве</span>
            </h2>
            
            <p className="text-gray-600 mb-6">
              <strong className="text-gray-800">DevAp Agency</strong> — это команда опытных профессионалов в сфере 
              веб-разработки, дизайна и цифрового маркетинга. Наша миссия — помогать бизнесам любого масштаба 
              достигать успеха в цифровом мире через создание современных, функциональных и привлекательных 
              веб-проектов.
            </p>
            
            <p className="text-gray-600 mb-6">
              Мы объединяем технические знания с креативным мышлением, чтобы предлагать нашим клиентам комплексные 
              решения, которые не только отвечают их текущим требованиям, но и учитывают перспективы развития 
              их бизнеса.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {['10+ лет опыта', '150+ успешных проектов', '98% довольных клиентов', '24/7 поддержка'].map((item, index) => (
                <div key={index} className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            
            <a 
              href="#contact" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-lg shadow-blue-600/20"
            >
              Связаться с нами
            </a>
          </motion.div>
          
          {/* Правая колонка - Наши ценности */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Наши ценности</h3>
            
            <div className="grid grid-cols-1 gap-6">
              {values.map((value, index) => (
                <motion.div 
                  key={index} 
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className="mt-1 bg-blue-50 rounded-lg p-2 h-fit">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 