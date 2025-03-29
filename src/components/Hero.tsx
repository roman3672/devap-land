"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-gray-50 via-indigo-50 to-gray-50 overflow-hidden">
      {/* Декоративный фон */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-40 right-1/3 w-48 h-48 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Текстовый контент */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Создаем <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">цифровые решения</span>, которые двигают бизнес вперед
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Мы — команда профессионалов, специализирующаяся на разработке современных веб-решений, которые помогают бизнесу расти и достигать новых высот в цифровом мире.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="#services"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl shadow-indigo-200 hover:translate-y-[-2px]"
              >
                Наши услуги
              </Link>
              <Link 
                href="#contact" 
                className="bg-white hover:bg-gray-50 text-indigo-600 font-medium py-3 px-8 rounded-lg border border-indigo-200 transition-all shadow-lg hover:shadow-xl hover:translate-y-[-2px]"
              >
                Обсудить проект
              </Link>
            </div>
          </motion.div>
          
          {/* Иллюстрация/Графика */}
          <motion.div 
            className="flex-1 hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full h-[400px]">
              <Image 
                src="/hero-illustration.svg" 
                alt="Веб разработка и дизайн"
                fill
                className="object-contain drop-shadow-xl"
                priority
              />
            </div>
          </motion.div>
        </div>
        
        {/* Статистика */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {[
            { number: '150+', label: 'Завершенных проектов' },
            { number: '98%', label: 'Довольных клиентов' },
            { number: '10+', label: 'Лет опыта' },
            { number: '24/7', label: 'Поддержка клиентов' },
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white bg-opacity-80 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">{stat.number}</div>
              <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Волнистый разделитель */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-20 w-full">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V100.31C57.57,110.08,158.52,98.74,221.4,85.58Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;