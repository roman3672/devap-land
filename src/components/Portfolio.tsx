"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

// Категории проектов
const categories = [
  { id: 'all', name: 'Все проекты' },
  { id: 'web', name: 'Веб-сайты' },
  { id: 'ecommerce', name: 'Интернет-магазины' },
  { id: 'app', name: 'Приложения' },
  { id: 'branding', name: 'Брендинг' },
];

// Типы для проектов
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  tags: string[];
}

// Проекты
const projects: Project[] = [
  {
    id: 1,
    title: 'Корпоративный сайт для IT-компании',
    category: 'web',
    image: '/portfolio/project1.jpg',
    tags: ['React', 'TailwindCSS', 'Next.js'],
  },
  {
    id: 2,
    title: 'Интернет-магазин электроники',
    category: 'ecommerce',
    image: '/portfolio/project2.jpg',
    tags: ['E-commerce', 'Redux', 'Node.js'],
  },
  {
    id: 3,
    title: 'Мобильное приложение для фитнеса',
    category: 'app',
    image: '/portfolio/project3.jpg',
    tags: ['React Native', 'Firebase', 'UI/UX'],
  },
  {
    id: 4,
    title: 'Брендинг для стартапа',
    category: 'branding',
    image: '/portfolio/project4.jpg',
    tags: ['Брендинг', 'Логотип', 'Фирменный стиль'],
  },
  {
    id: 5,
    title: 'Лендинг для образовательного курса',
    category: 'web',
    image: '/portfolio/project5.jpg',
    tags: ['HTML/CSS', 'JavaScript', 'Анимации'],
  },
  {
    id: 6,
    title: 'Маркетплейс товаров для дома',
    category: 'ecommerce',
    image: '/portfolio/project6.jpg',
    tags: ['Next.js', 'MongoDB', 'AWS'],
  },
];

interface ProjectItemProps {
  project: Project;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const ProjectItem = ({ project, isHovered, onHover, onLeave }: ProjectItemProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ 
        opacity: { duration: 0.3 },
        layout: { 
          type: "spring", 
          damping: 25, 
          stiffness: 120 
        }
      }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      key={project.id}
    >
      <div className="relative h-60 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.3 : 0 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Заглушка для изображения */}
        <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-500 relative">
          {/* В реальном проекте здесь будет Image компонент с настоящими изображениями */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl p-4 text-center"
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 1.03 : 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {project.title}
          </motion.div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.map((tag: string, index: number) => (
            <span key={index} className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [displayedProjects, setDisplayedProjects] = useState<Project[]>(projects);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Плавный переход при смене категории
  useEffect(() => {
    const timer = setTimeout(() => {
      const filtered = activeCategory === 'all'
        ? projects
        : projects.filter(project => project.category === activeCategory);
      
      setDisplayedProjects(filtered);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Наше <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">портфолио</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ознакомьтесь с нашими последними проектами, которые демонстрируют наши навыки и экспертизу в разработке цифровых решений.
          </motion.p>
        </div>

        {/* Фильтры категорий */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-200'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:shadow-sm'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Галерея проектов */}
        <LayoutGroup>
          <motion.div 
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
            transition={{ 
              layout: { 
                type: "spring", 
                bounce: 0.2,
                duration: 0.6 
              }
            }}
          >
            <AnimatePresence mode="wait">
              {displayedProjects.map((project) => (
                <ProjectItem
                  key={project.id}
                  project={project}
                  isHovered={hoveredProject === project.id}
                  onHover={() => setHoveredProject(project.id)}
                  onLeave={() => setHoveredProject(null)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {/* Кнопка показать больше */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href="#contact" 
            className="inline-block bg-white border border-indigo-200 hover:border-indigo-300 text-indigo-600 font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            Смотреть все проекты
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;