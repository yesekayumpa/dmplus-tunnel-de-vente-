import React, { useState } from 'react';
import { Play, X, Clock, User, Star, ArrowRight, PlayCircle, ChevronDown, Lock, Mail, Eye, EyeOff, Sparkles, MessageCircle, Lightbulb, Users, BookOpen, CheckCircle } from 'lucide-react';

const MasterclassSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
    setEmail('');
    setPassword('');
    setShowPassword(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de connexion ici
    console.log('Tentative de connexion:', { email, password });
    // Simuler une connexion r&eacute;ussie
    alert('Connexion r&eacute;ussie ! Vous avez maintenant acc&egrave;s &agrave; tous les modules Premium.');
    closeLoginModal();
  };

  const FormationModules = () => {
    const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

    const toggleSection = (sectionId: string) => {
      setOpenSections(prev => ({
        ...prev,
        [sectionId]: !prev[sectionId]
      }));
    };

    const modules = [
      {
        id: "section-1",
        number: "01",
        title: "Introduction",
        description: "Découvrez notre formation complète en design graphique",
        lessons: [
          {
            title: "Présentation de la formation complète",
            content: [
              "Logiciels incontournables du design graphique",
              "Pack bonus montage vidéo et marketing digital",
              "Cadre sécurisé et accessible"
            ]
          }
        ]
      },
      {
        id: "section-2",
        number: "02",
        title: "Les outils essentiels",
        description: "Maîtriser les logiciels de base et organiser son workflow",
        lessons: [
          {
            title: "Panorama des outils : gratuit vs pro",
            content: [
              "Adobe Photoshop, Illustrator, InDesign",
              "Alternatives gratuites puissantes",
              "Choisir selon ses objectifs"
            ]
          }
        ]
      },
      {
        id: "section-3",
        number: "03",
        title: "Premier projet graphique",
        description: "Réaliser un premier visuel concret de A à Z",
        lessons: [
          {
            title: "De l'idée à la réalisation",
            content: [
              "Analyse d'un brief client",
              "Recherche d'inspiration",
              "Création pas à pas d'une affiche",
              "Export aux bons formats"
            ]
          }
        ]
      },
      {
        id: "section-4",
        number: "04",
        title: "Maîtrise du design",
        description: "Acquérir les fondamentaux pour des créations professionnelles",
        lessons: [
          {
            title: "Les secrets des pros",
            content: [
              "Les 7 principes fondamentaux du design",
              "Composition et hiérarchie visuelle",
              "Grilles et alignement",
              "Analyse et amélioration de visuels"
            ]
          }
        ]
      },
      {
        id: "section-5",
        number: "05",
        title: "Identité visuelle",
        description: "Concevoir une charte graphique professionnelle",
        lessons: [
          {
            title: "Logo et direction artistique",
            content: [
              "Recherche et création d'un moodboard",
              "Création du logo et direction artistique",
              "Déclinaison sur différents supports",
              "Constitution du dossier client"
            ]
          }
        ]
      },
      {
        id: "section-6",
        number: "06",
        title: "Lancement professionnel",
        description: "Se positionner sur le marché et trouver ses premiers clients",
        lessons: [
          {
            title: "Portfolio et premiers clients",
            content: [
              "Créer un portfolio professionnel",
              "Plateformes d'exposition (Behance, Instagram)",
              "Fixer ses tarifs et propositions",
              "Stratégies pour trouver ses premiers clients"
            ]
          }
        ]
      }
    ];

    return (
      <div className="space-y-6">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Programme de la Formation
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            6 modules complets pour devenir un designer graphique professionnel
          </p>
        </div>

        {/* Modules accordéon */}
        <div className="max-w-4xl mx-auto space-y-4">
          {modules.map((module, index) => (
            <div key={module.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              {/* Header */}
              <button
                onClick={() => toggleSection(module.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-lg">{module.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{module.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{module.description}</p>
                  </div>
                </div>
                <ChevronDown className={`w-6 h-6 text-red-600 transition-transform duration-300 flex-shrink-0 ${
                  openSections[module.id] ? 'rotate-180' : ''
                }`} />
              </button>
              
              {/* Content */}
              <div className={`border-t border-gray-200 transition-all duration-300 ${
                openSections[module.id] 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                <div className="p-6 space-y-4">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <div key={lessonIndex} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                          <PlayCircle className="w-4 h-4 text-red-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{lesson.title}</h4>
                          <span className="text-xs text-gray-500">Leçon {lessonIndex + 1}</span>
                        </div>
                      </div>
                      <ul className="space-y-2 ml-11">
                        {lesson.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section récapitulative */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mt-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="font-semibold text-gray-900 text-lg mb-2">6 Modules</h4>
              <p className="text-gray-600 text-sm">Formation complète et structurée</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="font-semibold text-gray-900 text-lg mb-2">157 minutes</h4>
              <p className="text-gray-600 text-sm">Contenu vidéo de qualité</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="font-semibold text-gray-900 text-lg mb-2">Accès illimité</h4>
              <p className="text-gray-600 text-sm">Formation à vie et mises à jour</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="pt-0 pb-0 md:pt-8 md:pb-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5 pt-0 pb-0 md:pt-6 md:pb-4"></div>
            
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section FormationModules */}
        <div className="mb-16">
          <FormationModules />
        </div>

        {/* Section Premium et Standard - ajoutée avant Comment acheter un bien */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 mb-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choisissez Votre Parcours
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mt-3"></div>
            <p className="text-style-header text-gray-700 max-w-3xl mx-auto mt-6">
              Des formations adaptées à tous les niveaux, conçues par des experts pour vous aider à maîtriser la finance personnelle et l'investissement.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-xl transition-all duration-500 border-2 border-gray-100 overflow-hidden hover:border-red-200 hover:scale-[1.02]">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-50 to-transparent rounded-full blur-2xl opacity-50"></div>
                <div className="p-4 relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-3">
                      <BookOpen className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Standard</h3>
                      <p className="text-xs text-gray-600 font-medium">Formation complète</p>
                    </div>
                  </div>
                  <div className="mb-5">
                    <div className="flex items-baseline justify-center bg-gradient-to-r from-red-50 to-red-50 rounded-xl py-2 px-3 border border-red-100">
                      <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">297</span>
                      <span className="text-base font-semibold text-red-600 ml-1">FCFA</span>
                    </div>
                    <p className="text-center text-xs text-gray-500 mt-2 font-medium">Prix unique • Accès immédiat</p>
                  </div>
                  <p className="text-gray-600 mb-4 text-xs md:text-sm leading-relaxed">
                    Formations complètes pour apprendre à votre rythme avec nos ressources en ligne.
                  </p>
                  <ul className="space-y-2 mb-5">
                    <li className="flex items-center bg-gray-50 rounded-lg p-2 transition-all duration-300 hover:bg-red-50">
                      <div className="w-5 h-5 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-2">
                        <CheckCircle className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span className="text-xs font-medium text-gray-700">Accès illimité aux cours</span>
                    </li>
                    <li className="flex items-center bg-gray-50 rounded-lg p-2 transition-all duration-300 hover:bg-red-50">
                      <div className="w-5 h-5 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-2">
                        <CheckCircle className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span className="text-xs font-medium text-gray-700">Ressources téléchargeables</span>
                    </li>
                    <li className="flex items-center bg-gray-50 rounded-lg p-2 transition-all duration-300 hover:bg-red-50">
                      <div className="w-5 h-5 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-2">
                        <CheckCircle className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span className="text-xs font-medium text-gray-700">Communauté active</span>
                    </li>
                  </ul>
                  <button className="w-full py-2.5 px-3 bg-gradient-to-r from-black to-gray-800 text-white font-semibold rounded-full transition-all duration-500 text-xs hover:from-gray-800 hover:to-black transform hover:scale-[1.02] border border-gray-200">
                    Accéder au cours
                  </button>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-xl transition-all duration-500 border-2 border-gray-100 overflow-hidden hover:border-red-200 hover:scale-[1.02]">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-50 to-transparent rounded-full blur-2xl opacity-50"></div>
                <div className="p-4 relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-3">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Premium</h3>
                      <p className="text-xs text-red-600 font-medium">Accompagnement personnalisé</p>
                    </div>
                  </div>
                  <div className="mb-5">
                    <div className="flex items-baseline justify-center bg-gradient-to-r from-red-50 to-red-50 rounded-xl py-2 px-3 border border-red-100">
                      <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">597</span>
                      <span className="text-base font-semibold text-red-600 ml-1">FCFA</span>
                    </div>
                    <p className="text-center text-xs text-gray-500 mt-2 font-medium">Prix unique • Accès immédiat</p>
                  </div>
                  <p className="text-gray-600 mb-4 text-xs md:text-sm leading-relaxed">
                    Coaching individuel avec suivi personnalisé pour atteindre vos objectifs rapidement.
                  </p>
                  <ul className="space-y-2 mb-5">
                    <li className="flex items-center bg-gray-50 rounded-lg p-2 transition-all duration-300 hover:bg-red-50">
                      <div className="w-5 h-5 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-2">
                        <CheckCircle className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span className="text-xs font-medium text-gray-700">Sessions individuelles</span>
                    </li>
                    <li className="flex items-center bg-gray-50 rounded-lg p-2 transition-all duration-300 hover:bg-red-50">
                      <div className="w-5 h-5 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-2">
                        <CheckCircle className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span className="text-xs font-medium text-gray-700">Plan d'action sur mesure</span>
                    </li>
                    <li className="flex items-center bg-gray-50 rounded-lg p-2 transition-all duration-300 hover:bg-red-50">
                      <div className="w-5 h-5 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-2">
                        <CheckCircle className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span className="text-xs font-medium text-gray-700">Suivi régulier</span>
                    </li>
                  </ul>
                  <button className="w-full py-2.5 px-3 bg-gradient-to-r from-black to-gray-800 text-white font-semibold rounded-full transition-all duration-500 text-xs hover:from-gray-800 hover:to-black transform hover:scale-[1.02] border border-gray-200">
                    Accéder au cours
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
        
      </div>

      {/* Modal de connexion Premium */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={closeLoginModal}>
          <div className="relative w-full max-w-md transform transition-all duration-300 scale-100" onClick={e => e.stopPropagation()}>
            <button 
              onClick={closeLoginModal}
              className="absolute -top-12 right-0 text-white/80 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Fermer la connexion"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 hover:bg-white/20">
                <X className="w-6 h-6" />
              </div>
            </button>
            
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* En-tête du modal */}
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 text-white">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                    <Lock className="w-5 h-5" />
                    <span className="font-semibold">ACCÈS PREMIUM</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Débloquez tous les modules</h2>
                  <p className="text-red-100">Accédez à 5 modules exclusifs et toutes les ressources</p>
                </div>
              </div>
              
              {/* Formulaire de connexion */}
              <form onSubmit={handleLogin} className="p-6 space-y-4">
                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                    Adresse email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors text-gray-900 placeholder-gray-500"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors text-gray-900 placeholder-gray-500"
                      placeholder="•••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded" />
                    <span className="ml-2 text-xs md:text-sm text-gray-600">Se souvenir de moi</span>
                  </label>
                  <a href="#" className="text-xs md:text-sm text-red-600 hover:text-red-500 font-medium">
                    Mot de passe oublié ?
                  </a>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
                >
                  Se connecter
                </button>
                
                <div className="text-center">
                  <p className="text-xs md:text-sm text-gray-600">
                    Pas encore membre ?{' '}
                    <a href="#" className="font-medium text-red-600 hover:text-red-500">
                      S'abonner maintenant
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

          </section>
  );
};

export default MasterclassSection;
