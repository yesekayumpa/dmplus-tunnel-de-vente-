import React, { useEffect, useState } from 'react';
import { BookOpen, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Testimonials = () => {
  return (
    <section className="py-8 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-red-500 text-sm font-semibold tracking-wider uppercase mb-3">Témoignages</span>
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">Ce que disent nos étudiants</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mt-4"></div>
        </div>
        
        <div className="relative">
          {/* Grid layout for mobile and tablet - show all 3 cards */}
          <div className="grid grid-cols-1 lg:hidden gap-4">
            {[
              {
                name: "Aïcha K.",
                role: "Designer Graphique",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                rating: 5,
                text: "Grâce à cette formation, j'ai pu lancer mon activité de freelance en design graphique. Les cours sont clairs et les projets concrets m'ont permis de me constituer un portfolio solide."
              },
              {
                name: "Mohamed D.",
                role: "Développeur Web",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                rating: 5,
                text: "La qualité des formations est exceptionnelle. J'ai particulièrement apprécié les études de cas réels qui m'ont permis de comprendre les enjeux concrets du métier."
              },
              {
                name: "Fatou N.",
                role: "Entrepreneuse",
                image: "https://randomuser.me/api/portraits/women/68.jpg",
                rating: 4,
                text: "En tant que débutante, j'ai trouvé les explications très accessibles. Le suivi personnalisé m'a permis de progresser rapidement et d'acquérir des compétences solides."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center mb-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-red-500/50"
                  />
                  <div className="ml-2 sm:ml-3">
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-xs text-gray-600">{testimonial.role}</p>
                  </div>
                  <div className="ml-auto flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-3 h-3 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic text-xs sm:text-sm">"{testimonial.text}"</p>
              </div>
            ))}
          </div>

          {/* Carousel only for large desktop */}
          <Carousel 
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full py-4 hidden lg:block"
          >
            <CarouselContent className="-ml-4">
              {[
                {
                  name: "Aïcha K.",
                  role: "Designer Graphique",
                  image: "https://randomuser.me/api/portraits/women/44.jpg",
                  rating: 5,
                  text: "Grâce à cette formation, j'ai pu lancer mon activité de freelance en design graphique. Les cours sont clairs et les projets concrets m'ont permis de me constituer un portfolio solide."
                },
                {
                  name: "Mohamed D.",
                  role: "Développeur Web",
                  image: "https://randomuser.me/api/portraits/men/32.jpg",
                  rating: 5,
                  text: "La qualité des formations est exceptionnelle. J'ai particulièrement apprécié les études de cas réels qui m'ont permis de comprendre les enjeux concrets du métier."
                },
                {
                  name: "Fatou N.",
                  role: "Entrepreneuse",
                  image: "https://randomuser.me/api/portraits/women/68.jpg",
                  rating: 4,
                  text: "En tant que débutante, j'ai trouvé les explications très accessibles. Le suivi personnalisé m'a permis de progresser rapidement et d'acquérir des compétences solides."
                }
              ].map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 lg:basis-1/3">
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full">
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-14 h-14 rounded-full object-cover border-2 border-red-500/50"
                      />
                      <div className="ml-4">
                        <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                      <div className="ml-auto flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"{testimonial.text}"</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        
        {/* Bouton "Voir nos formations" ajouté ici */}
        <div className="text-center mt-8">
          <a 
            href="#formations" 
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border-2 border-red-600 text-red-600 font-semibold rounded-full hover:bg-red-50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 text-sm sm:text-base"
          >
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Voir nos formations complètes</span>
            <span className="sm:hidden">Formations</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
