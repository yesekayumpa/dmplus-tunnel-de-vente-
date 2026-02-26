import React, { useState } from 'react';
import { CheckCircle, Users, Target, BookOpen, Award, Sparkles, Star, MessageCircle, Lightbulb, ArrowRight } from 'lucide-react';

const courses = [
  {
    title: 'Débutant',
    icon: <BookOpen className="w-5 h-5" />,
    price: 16000,
    originalPrice: 23000,
    features: [
      'Accès à la communauté privée',
      'Ressources de base en finance personnelle',
      'Support par email sous 48h',
      '1 revue de portefeuille par mois',
      'Accès aux webinaires mensuels',
      'Fiches pratiques téléchargeables'
    ],
    forWho: [
      'Nouveaux investisseurs',
      'Étudiants en finance',
      'Personnes souhaitant gérer leur épargne',
      'Toute personne débutante en investissement'
    ],
    effectiveness: [
      'Comprendre les bases des marchés financiers',
      'Établir un budget personnel',
      'Définir ses objectifs financiers',
      'Éviter les pièges courants'
    ],
    learning: [
      '6 modules progressifs',
      'Exercices pratiques',
      'Quiz d\'évaluation',
      'Cas d\'étude concrets',
      'Certificat de complétion'
    ]
  },
  {
    title: 'Intermédiaire',
    icon: <Target className="w-5 h-5" />,
    price: 13000,
    originalPrice: 29000,
    features: [
      'Tout le contenu Débutant',
      'Accès aux ateliers avancés',
      'Support prioritaire sous 24h',
      '3 revues de portefeuille par mois',
      'Analyse de marché mensuelle',
      'Outils d\'analyse technique'
    ],
    forWho: [
      'Investisseurs avec des bases',
      'Professionnels en reconversion',
      'Épargnants réguliers',
      'Auto-entrepreneurs'
    ],
    effectiveness: [
      'Diversifier son portefeuille',
      'Analyser les entreprises',
      'Gérer le risque',
      'Stratégies d\'investissement avancées'
    ],
    learning: [
      '8 modules avancés',
      'Études de cas réels',
      'Outils d\'analyse',
      'Simulateurs personnalisés',
      'Mentorat de groupe mensuel'
    ]
  },
  {
    title: 'Expert',
    icon: <Award className="w-5 h-5" />,
    price: 25000,
    originalPrice: 45000,
    features: [
      'Tout le contenu Intermédiaire',
      'Mentorat individuel mensuel',
      'Support VIP sous 4h',
      'Revues illimitées',
      'Accès aux opportunités exclusives',
      'Réseau d\'investisseurs privés'
    ],
    forWho: [
      'Investisseurs expérimentés',
      'Gérants de portefeuille',
      'Professionnels de la finance',
      'Entrepreneurs à fort potentiel'
    ],
    effectiveness: [
      'Stratégies avancées de gestion de patrimoine',
      'Investissements alternatifs',
      'Optimisation fiscale',
      'Gestion de portefeuille institutionnelle'
    ],
    learning: [
      '12 modules experts',
      'Accès à des fonds privés',
      'Rencontres trimestrielles',
      'Analyse de marché hebdomadaire',
      'Réseautage exclusif'
    ]
  }
];

const formatPrice = (amount: number) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount) + ' FCFA';
};

const CourseCard = ({ course, isPopular = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  const renderSection = (title: string, icon: React.ReactNode, items: string[]) => (
    <div className="mt-4">
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center mr-3 shadow-sm border border-red-100">
          {React.cloneElement(icon as React.ReactElement, { className: 'w-5 h-5 text-red-600' })}
        </div>
        <h4 className="font-semibold text-gray-900">{title}</h4>
      </div>
      <ul className="space-y-2 pl-13">
        {items.map((item, i) => (
          <li key={i} className="flex items-start group">
            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover:bg-green-200 transition-colors">
              <CheckCircle className="w-3 h-3 text-green-600" />
            </div>
            <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl ${
      isPopular ? 'ring-2 ring-red-200 shadow-xl' : 'shadow-lg'
    } ${isHovered ? 'transform -translate-y-2' : ''}`}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}>
      
      {/* Badge populaire */}
      {isPopular && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
            ⭐ Populaire
          </div>
        </div>
      )}
      
      {/* Arrière-plan décoratif */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative p-6">
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg mb-6 transition-all duration-300 hover:scale-110 hover:shadow-xl">
            {React.cloneElement(course.icon, { className: 'w-8 h-8 text-white' })}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h3>
          <div className="mb-4">
            <span className="text-4xl font-extrabold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
              {formatPrice(course.price)}
            </span>
            <span className="text-sm text-gray-500 ml-1">/mois</span>
            {course.originalPrice > course.price && (
              <div className="mt-2">
                <span className="text-sm text-gray-400 line-through">
                  {formatPrice(course.originalPrice)}
                </span>
                <div className="mt-1">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                    💰 Économisez {formatPrice(course.originalPrice - course.price)}/mois
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Ce qui est inclus :
            </h4>
            <ul className="space-y-3">
              {course.features.slice(0, 4).map((feature, i) => (
                <li key={i} className="flex items-start group">
                  <div className="w-6 h-6 rounded-lg bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover:bg-green-200 transition-colors">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button className={`mt-8 w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
          isPopular 
            ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-xl' 
            : 'bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white shadow-md hover:shadow-lg'
        }`}>
          <span className="flex items-center justify-center gap-2">
            Choisir {course.title}
            <ArrowRight className="w-4 h-4" />
          </span>
        </button>
      </div>
    </div>
  );
};

const CoursesSection = () => {
  return (
    <section id="formations" className="py-3 bg-white" data-courses-section>
      <div className="relative bg-white text-gray-900 py-4 px-3 sm:px-4 lg:px-6 pt-16">
        <div className="relative z-10 max-w-4xl mx-auto text-center pt-12 pb-3">
          <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-200 text-red-600 text-sm font-medium backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Formation Premium
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            <span className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
              Deviens un Designer
            </span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
              Graphique Professionnel
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
            Apprends à utiliser Photoshop, Illustrator et InDesign comme un pro,
            avec en BONUS des formations en Montage Vidéo (Premiere Pro) et
            Marketing Digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-4 sm:px-6 rounded-xl text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl max-w-xs sm:max-w-none">
              <span className="flex items-center gap-2">
                Accéder à la formation maintenant
              </span>
            </button>
                      </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 bg-white">
        {/* Section IA Career Banner */}
        <section className="py-3 mb-3">
          <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
            <div className="rounded-3xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6 lg:gap-8 items-center">
                {/* Contenu texte */}
                <div className="p-2 md:p-4 lg:p-6">
                  <div className="mb-6">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                      Maîtrisez les outils professionnels
                      <span className="block text-red-600">du design graphique</span>
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      Formation complète sur Photoshop, Illustrator et les logiciels standards de l'industrie.
                    </p>
                  </div>
                  
                  {/* Grille des fonctionnalités */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
                    <div className="group relative p-3 rounded-2xl cursor-pointer transition-all duration-300">
                      <div className="relative flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                          <Sparkles className="w-5 h-5 text-red-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-1 text-sm leading-tight whitespace-normal">Formation compl&egrave;te</h4>
                          <p className="text-gray-600 text-xs leading-relaxed whitespace-normal">Photoshop, Illustrator et outils professionnels</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group relative p-3 rounded-2xl cursor-pointer transition-all duration-300">
                      <div className="relative flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                          <Star className="w-5 h-5 text-amber-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-1 text-sm leading-tight whitespace-normal">Accompagnement personnalis&eacute;</h4>
                          <p className="text-gray-600 text-xs leading-relaxed whitespace-normal">Suivi par des experts du secteur</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group relative p-3 rounded-2xl cursor-pointer transition-all duration-300">
                      <div className="relative flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                          <MessageCircle className="w-5 h-5 text-red-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-1 text-sm leading-tight whitespace-normal">Certification professionnelle</h4>
                          <p className="text-gray-600 text-xs leading-relaxed whitespace-normal">Reconnue par les entreprises</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group relative p-3 rounded-2xl cursor-pointer transition-all duration-300">
                      <div className="relative flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                          <Lightbulb className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-1 text-sm leading-tight whitespace-normal">&Eacute;volution de carri&egrave;re</h4>
                          <p className="text-gray-600 text-xs leading-relaxed whitespace-normal">D&eacute;veloppez votre potentiel professionnel</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  </div>
                
                {/* Image */}
                <div className="relative h-48 lg:h-full min-h-[250px] flex items-center justify-center p-2 md:p-4">
                  <div className="relative">
                    <img 
                      src="/pack-design-graphique-removebg-preview.png"
                      alt="Pack Design Graphique"
                      className="relative w-full h-full object-contain rounded-2xl max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </section>
  );
};

export default CoursesSection;
