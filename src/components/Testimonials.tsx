"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    content: 'Мы работаем с DevAp Agency на протяжении трех лет. За это время они помогли нам полностью обновить корпоративный сайт, оптимизировать его для поисковых систем и создать эффективную онлайн-стратегию. Наш трафик вырос на 80%, а конверсия увеличилась вдвое. Очень рекомендую их услуги!',
    author: 'Алексей Смирнов',
    position: 'Генеральный директор, ТехноПром',
    image: '/avatars/avatar1.jpg',
    rating: 5,
  },
  {
    id: 2,
    content: 'Благодаря DevAp Agency наш интернет-магазин вышел на новый уровень. Они провели полный редизайн, улучшили юзабилити и внедрили современные технологии. Особенно впечатлила скорость работы и профессиональный подход команды. Результат превзошел наши ожидания!',
    author: 'Мария Иванова',
    position: 'Владелец, Fashion Store',
    image: '/avatars/avatar2.jpg',
    rating: 5,
  },
  {
    id: 3,
    content: 'Хочу выразить благодарность команде DevAp Agency за создание нашего корпоративного сайта. Они проделали отличную работу, начиная от дизайна и заканчивая технической реализацией. Сайт полностью соответствует нашим требованиям, отлично работает на всех устройствах и уже приносит новых клиентов.',
    author: 'Дмитрий Волков',
    position: 'Маркетинг-директор, BuildGroup',
    image: '/avatars/avatar3.jpg',
    rating: 5,
  },
  {
    id: 4,
    content: 'С DevAp Agency мы реализовали сложный проект по созданию B2B-платформы. Несмотря на множество технических нюансов, команда справилась великолепно. Особенно ценю их внимание к деталям и готовность найти оптимальное решение для любой задачи. Продолжаем сотрудничество!',
    author: 'Елена Соколова',
    position: 'ИТ-директор, LogisticsPro',
    image: '/avatars/avatar4.jpg',
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Автоматическое переключение слайдов
  useEffect(() => {
    if (!inView) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [inView]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Отзывы <span className="text-blue-600">клиентов</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Узнайте, что говорят о нас клиенты, которые уже оценили наш профессионализм и качество работы.
          </motion.p>
        </div>

        {/* Слайдер с отзывами */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div 
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className={`${index === currentIndex ? 'block' : 'hidden'} bg-white rounded-2xl shadow-xl p-8 sm:p-10`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Рейтинг */}
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Текст отзыва */}
                  <blockquote className="text-gray-600 italic mb-8 text-lg">
                    "{testimonial.content}"
                  </blockquote>
                  
                  {/* Автор */}
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 mr-4">
                      {/* Заглушка для аватарки (в реальном проекте будет Image) */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600"></div>
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">{testimonial.author}</div>
                      <div className="text-sm text-gray-500">{testimonial.position}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Навигация по слайдам */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
          
          {/* Кнопки вперед/назад */}
          <button 
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-lg text-gray-600 hover:text-blue-600 transition-colors hidden lg:block"
            onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)}
            aria-label="Previous testimonial"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-lg text-gray-600 hover:text-blue-600 transition-colors hidden lg:block"
            onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)}
            aria-label="Next testimonial"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 