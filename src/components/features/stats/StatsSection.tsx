import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './StatsSection.css';

const StatsSection = () => {
  const [showDescription, setShowDescription] = useState(false); // Commence caché
  const location = useLocation();

  // Cache automatiquement la description quand on quitte la page
  useEffect(() => {
    // Réinitialise à false quand on arrive sur la page
    setShowDescription(false);
    
    // Cache quand on quitte la page
    const handlePageHide = () => {
      setShowDescription(false);
    };
    
    // Cache quand la page perd le focus
    const handleBlur = () => {
      setShowDescription(false);
    };
    
    // Cache quand on clique en dehors du composant
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      const statsSection = document.querySelector('.stats-section-container');
      if (statsSection && !statsSection.contains(target)) {
        setShowDescription(false);
      }
    };
    
    window.addEventListener('pagehide', handlePageHide);
    window.addEventListener('blur', handleBlur);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('pagehide', handlePageHide);
      window.removeEventListener('blur', handleBlur);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [location.pathname]); // Se réexécute quand la route change

  return (
    <div className="stats-section-container w-full max-w-5xl md:max-w-5xl mx-auto bg-white p-2 md:p-8 pb-12 md:pb-16 font-sans relative overflow-hidden">
      {/* Titre Formateur */}
      <div className="relative text-center mb-8 sm:mb-12 animate-fade-in-up">
        {/* Arrière-plan décoratif */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-red-400 to-red-600 rounded-full filter blur-2xl animate-pulse"></div>
        </div>
        
        {/* Conteneur du titre avec effets */}
        <div className="relative z-10 inline-block">
          {/* Titre principal */}
          <h1 className="relative text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-2 sm:mb-3 md:mb-4 leading-tight">
            <span className="relative inline-block">
              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-transparent to-red-200 opacity-0 hover:opacity-100 transition-opacity duration-700 rounded-lg transform skew-x-12"></div>
              
              {/* Texte avec gradient */}
              <span className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent drop-shadow-lg hover:drop-shadow-xl transition-all duration-300 cursor-default inline-block transform hover:scale-105">
                Formateur
              </span>
            </span>
          </h1>

          {/* Particules décoratives */}
                    <div className="absolute top-1/2 -left-4 w-1 h-1 bg-red-300 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 -right-3 w-1 h-1 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative z-10 items-stretch text-center lg:text-left">
        {/* Contenu principal */}
        <div className="flex-1 flex flex-col justify-between">
          {/* Titre principal avec animations améliorées */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight animate-fade-in-up">
            <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">
              Blaise KAYUMPA Yese
            </span>
            <span className="block text-lg sm:text-2xl md:text-4xl mt-2 sm:mt-3 bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent font-semibold animate-gradient-shift">
              Designer Graphique Senior
            </span>
          </h1>

          {/* Bouton pour afficher/masquer la description */}
          <button
            onClick={() => setShowDescription(!showDescription)}
            className="group flex items-center gap-1 sm:gap-2 text-red-600 hover:text-red-700 font-medium mb-3 sm:mb-4 transition-all duration-300 transform hover:scale-105 hover:shadow-lg px-1 sm:px-2 py-1.5 sm:py-2 rounded-full border border-red-200/30 hover:border-red-300/50 animate-fade-in-up mx-auto lg:mx-0 text-xs sm:text-sm"
            style={{ animationDelay: '200ms' }}
          >
            <span className="text-xs sm:text-sm font-medium">
              {showDescription ? 'Masquer' : 'Voir'} la description
            </span>
            <svg 
              className={`w-4 h-4 transition-all duration-500 ${showDescription ? 'rotate-180' : ''} group-hover:scale-110`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          
          {/* Description avec animation de révélation */}
          <div className={`overflow-hidden transition-all duration-700 ease-in-out ${showDescription ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="relative">
              {/* Carte principale avec design exceptionnel */}
              <div className="bg-gradient-to-br from-white via-gray-50/90 to-red-50/20 border border-gray-200/50 rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-6 shadow-xl sm:shadow-2xl hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-700 relative overflow-hidden group animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                {/* Motifs décoratifs animés en arrière-plan */}
                <div className="absolute top-0 right-0 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-gradient-to-br from-red-400/20 to-red-500/20 rounded-full filter blur-2xl sm:blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-gradient-to-br from-gray-400/15 to-gray-500/15 rounded-full filter blur-xl sm:blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 bg-gradient-to-br from-red-300/10 to-red-400/10 rounded-full filter blur-2xl sm:blur-3xl animate-spin-slow"></div>
                
                {/* Lignes décoratives animées */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-200 to-transparent animate-slide-right"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent animate-slide-left" style={{ animationDelay: '1s' }}></div>
                
                {/* Effet de brillance au survol */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl transform -skew-x-12"></div>
                
                <div className="relative z-20">
                  {/* En-tête de la description avec animations */}
                  <div className="flex items-center gap-1 sm:gap-2 mb-3 sm:mb-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                    <div className="group">
                      <h3 className="text-base sm:text-xl font-bold bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                        Profil Professionnel
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">Designer Graphique Senior</p>
                    </div>
                  </div>

                  {/* Description principale avec effets améliorés */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-3 sm:mb-4 border border-gray-100/50 shadow-inner hover:shadow-lg transition-all duration-500 group animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-medium group-hover:text-gray-800 transition-colors duration-300">
                      Blaise KAYUMPA Yese est un <span className="font-bold text-red-600 hover:text-red-700 transition-colors duration-300 cursor-default">Designer Graphique Senior</span> avec plus de <span className="font-bold text-gray-700 hover:text-gray-800 transition-colors duration-300 cursor-default">8 ans d'expérience</span> dans la création visuelle et la communication digitale.
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mt-2 sm:mt-3 group-hover:text-gray-700 transition-colors duration-300">
                      Passionné par l'innovation et l'esthétique, il maîtrise parfaitement les outils de conception graphique et les tendances actuelles du design.
                    </p>
                    {/* Effet de brillance subtil */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  </div>

                  {/* Section expertise avec design exceptionnel */}
                  <div className="bg-gradient-to-r from-red-50/50 via-gray-50/50 to-red-50/50 rounded-xl sm:rounded-2xl p-2 sm:p-3 pb-3 sm:pb-4 border border-red-100/30 hover:border-red-200/50 transition-all duration-500 group animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                    <div className="flex items-center gap-1 mb-2 sm:mb-3">
                      <h4 className="text-sm sm:text-lg font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">Domaines d'Expertise</h4>
                      <div className="flex-1 h-px bg-gradient-to-r from-red-200 to-transparent"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-left">
                      {[
                        { 
                          icon: '🎓', 
                          title: 'Formation complète', 
                          desc: 'Photoshop, Illustrator et outils professionnels',
                          color: 'from-red-500 to-red-600'
                        },
                        { 
                          icon: '👥', 
                          title: 'Accompagnement personnalisé', 
                          desc: 'Suivi par des experts du secteur',
                          color: 'from-red-500 to-red-600'
                        },
                        { 
                          icon: '🏆', 
                          title: 'Certification professionnelle', 
                          desc: 'Reconnue par les entreprises',
                          color: 'from-red-600 to-red-700'
                        },
                        { 
                          icon: '📈', 
                          title: 'Évolution de carrière', 
                          desc: 'Développez votre potentiel professionnel',
                          color: 'from-red-600 to-red-700'
                        },
                      ].map((item, index) => (
                        <div 
                          key={index} 
                          className={`group flex items-start gap-1 p-1.5 sm:p-2 bg-white/90 backdrop-blur-sm rounded-lg border border-gray-100/50 hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer hover:bg-white ${item.extraPadding ? 'mb-2' : ''}`}
                        >
                          <div className="flex-1">
                            <h5 className="font-bold text-gray-800 text-xs sm:text-base mb-1 group-hover:text-gray-900 transition-colors duration-300">{item.title}</h5>
                            <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{item.desc}</p>
                          </div>
                          {/* Effet de brillance au survol */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bouton CTA aligné à gauche sur desktop, centré sur mobile */}
          <div className="flex justify-start lg:justify-start justify-center mb-6 sm:mb-8 mt-6 sm:mt-8 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            <button className="group relative overflow-hidden border-2 border-gray-300 hover:border-red-600 text-gray-700 hover:text-red-600 font-semibold px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-full sm:rounded-lg sm:rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:-translate-y-1 bg-white/90 backdrop-blur-sm hover:bg-white min-w-[150px] sm:min-w-[200px]">
              <span className="flex items-center justify-center relative z-10 gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-sm sm:text-base md:text-lg">Voir Portfolio</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
            </button>
          </div>
        </div>

        {/* Image à droite avec effets exceptionnels */}
        <div className="flex-shrink-0 lg:w-[400px] flex items-center justify-center animate-fade-in-up" style={{ animationDelay: '900ms' }}>
          <div className="relative group">
            {/* Conteneur de l'image avec effets améliorés */}
            <div className="relative bg-white p-3 rounded-2xl shadow-2xl transform transition-all duration-700 hover:shadow-3xl z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-red-100/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <img 
                src="/Prof.png" 
                alt="Blaise KAYUMPA Yese - Designer Graphique Senior" 
                className="w-full h-auto object-cover rounded-xl relative z-10 transition-all duration-700 group-hover:brightness-110"
                onError={(e) => {
                  console.error('Image failed to load:', e);
                  e.target.style.display = 'none';
                }}
                onLoad={() => {
                  console.log('Image loaded successfully');
                }}
              />
              
              {/* Effet de brillance exceptionnel au survol */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-xl transform -skew-x-12"></div>
            </div>
            
            {/* Icônes Adobe avec animations exceptionnelles */}
            {[
              { icon: '/photoshop.png', position: 'top-0 left-1/2 -translate-x-1/2 -translate-y-16', delay: '1000ms' },
              { icon: '/adobe-illustrator.png', position: 'top-1/4 right-0 translate-x-16 -translate-y-1/2', delay: '1100ms' },
              { icon: '/xd.png', position: 'bottom-0 right-1/4 translate-x-8 translate-y-16', delay: '1200ms' },
              { icon: '/indesign.png', position: 'top-1/4 left-0 -translate-x-16 -translate-y-1/2', delay: '1300ms' },
            ].map((tool, index) => (
              <div
                key={index}
                className={`absolute ${tool.position} w-12 h-12 flex items-center justify-center cursor-pointer z-50 animate-fade-in-up`}
                style={{ 
                  animationDelay: tool.delay,
                  animation: `float 4s ease-in-out infinite, fade-in-up 0.8s ease-out ${tool.delay} both`
                }}
              >
                <img 
                  src={tool.icon} 
                  alt={`Adobe ${tool.icon.split('/')[1].split('.')[0]}`} 
                  className="w-8 h-8 object-contain animate-spin-slow"
                  onError={(e) => {
                    console.error(`Failed to load icon: ${tool.icon}`, e);
                  }}
                  onLoad={() => {
                    console.log(`Successfully loaded icon: ${tool.icon}`);
                  }}
                />
              </div>
            ))}
            
            </div>
        </div>
      </div>

      {/* Section Vidéo explicative */}
      <div className="mt-12 sm:mt-16 animate-fade-in-up" style={{ animationDelay: '1400ms' }}>
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
            <span className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
              Découvrez mon travail en vidéo
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            Une présentation immersive de mes créations
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Conteneur vidéo avec design exceptionnel */}
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl p-1 shadow-xl group">
            {/* Effets de brillance */}
            <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 via-transparent to-red-500/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            {/* Conteneur vidéo */}
            <div className="relative bg-black rounded-lg sm:rounded-xl overflow-hidden aspect-video">
              {/* Icône de lecture centrée */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:scale-110 hover:bg-red-500 transition-all duration-500 cursor-pointer group">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  {/* Effet de pulsation */}
                  <div className="absolute inset-0 bg-red-600/30 rounded-full animate-ping"></div>
                </div>
              </div>
              
              {/* Image placeholder ou vidéo */}
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm">Cliquez pour lire la vidéo</p>
                </div>
              </div>
              
              {/* Overlay sombre au survol */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          
          {/* Informations sur la vidéo */}
          <div className="mt-4 sm:mt-6 text-center">
            <p className="text-gray-500 text-xs">
              <span className="inline-flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                </svg>
                3 minutes
              </span>
              <span className="mx-1">•</span>
              <span className="inline-flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Présentation
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
