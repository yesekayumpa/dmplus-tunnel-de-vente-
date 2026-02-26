import React, { useState } from 'react';
import { 
  Clock, 
  Users, 
  Award, 
  BookOpen, 
  Target, 
  CheckCircle, 
  PlayCircle,
  Calendar,
  Globe,
  Heart,
  Brain,
  Home,
  Baby,
  Droplet,
  Apple,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Search,
  ChevronRight
} from 'lucide-react';

const ClimateCourseSection = () => {
  return (
    <main id="site-content" className="body-content bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* En-tête de section */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 md:mb-3">
            Ce que vous allez apprendre
          </h2>
          <div className="w-16 h-0.5 bg-red-500 mx-auto rounded-full mb-2 md:mb-4"></div>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Maîtrisez les compétences essentielles du design graphique professionnel
          </p>
        </div>

        {/* Grille des compétences */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto">
          {/* Carte 1 */}
          <div className="bg-white rounded-xl p-2 md:p-3 lg:p-4 shadow-sm transition-all duration-200">
            <div>
              <h3 className="font-semibold text-gray-900 mb-0.5 md:mb-1 text-sm md:text-base">Maîtriser les outils essentiels</h3>
              <p className="text-sm text-gray-600 leading-tight md:leading-relaxed">
                Photoshop, Illustrator et InDesign pour concrétiser vos idées créatives
              </p>
            </div>
          </div>

          {/* Carte 2 */}
          <div className="bg-white rounded-xl p-2 md:p-3 lg:p-4 shadow-sm transition-all duration-200">
            <div>
              <h3 className="font-semibold text-gray-900 mb-0.5 md:mb-1 text-sm md:text-base">Créer des visuels percutants</h3>
              <p className="text-sm text-gray-600 leading-tight md:leading-relaxed">
                Logos, affiches, flyers et supports de communication qui captent l'attention
              </p>
            </div>
          </div>

          {/* Carte 3 */}
          <div className="bg-white rounded-xl p-2 md:p-3 lg:p-4 shadow-sm transition-all duration-200">
            <div>
              <h3 className="font-semibold text-gray-900 mb-0.5 md:mb-1 text-sm md:text-base">Optimiser votre workflow</h3>
              <p className="text-sm text-gray-600 leading-tight md:leading-relaxed">
                Raccourcis, automatisations et bonnes pratiques des professionnels
              </p>
            </div>
          </div>

          {/* Carte 4 */}
          <div className="bg-white rounded-xl p-2 md:p-3 lg:p-4 shadow-sm transition-all duration-200">
            <div>
              <h3 className="font-semibold text-gray-900 mb-0.5 md:mb-1 text-sm md:text-base">Adapter vos créations</h3>
              <p className="text-sm text-gray-600 leading-tight md:leading-relaxed">
                Designs adaptés à tous supports (print, web, réseaux sociaux)
              </p>
            </div>
          </div>

          {/* Carte 5 */}
          <div className="bg-white rounded-xl p-2 md:p-3 lg:p-4 shadow-sm transition-all duration-200">
            <div>
              <h3 className="font-semibold text-gray-900 mb-0.5 md:mb-1 text-sm md:text-base">Développer votre identité visuelle</h3>
              <p className="text-sm text-gray-600 leading-tight md:leading-relaxed">
                Fondamentaux du graphisme (couleurs, typographies, composition)
              </p>
            </div>
          </div>

          {/* Carte bonus */}
          <div className="bg-red-50 rounded-xl p-2 md:p-3 lg:p-4 shadow-sm hover:bg-red-100 transition-all duration-200">
            <div>
              <h3 className="font-semibold text-gray-900 mb-0.5 md:mb-1 text-sm md:text-base">Ressources exclusives</h3>
              <p className="text-sm text-gray-600 leading-tight md:leading-relaxed">
                Templates, modèles et guides professionnels inclus
              </p>
              <span className="inline-block mt-1 md:mt-2 px-2 py-1 bg-red-600 text-white rounded text-sm font-medium">
                Bonus
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ClimateCourseSection;
