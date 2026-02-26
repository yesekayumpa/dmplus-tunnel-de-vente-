import {Sparkles, Zap, ArrowRight, Star} from "lucide-react";
import React, {useEffect, useState} from "react";
import {useScrollAnimation} from "@/hooks/useScrollAnimation.tsx";

const HeroBanner = () => {
    const [heroRef, heroVisible] = useScrollAnimation(0.1);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);


    return (
        <div ref={heroRef} className="flex md:w-full justify-center overflow-hidden pt-4 relative">
            {/* Arrière-plan décoratif */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-50/20 via-transparent to-red-50/20 pointer-events-none"></div>
            <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-red-400/10 to-red-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-r from-red-400/10 to-red-400/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
            
            <div
                className="text-center flex flex-col items-center mt-16 max-w-2xl mx-4 relative z-10">
                <div
                    className={`inline-flex items-center space-x-2 px-3 py-1.5 bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-200 rounded-full
                text-red-600 mb-6 leading-tight transition-all duration-1000 delay-200 backdrop-blur-sm ${
                        heroVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
                    }`}
                    >
                    <Sparkles className="w-4 h-4 animate-pulse"/>
                    <span className="font-semibold text-sm">
                    Formation Premium
                    </span>
                </div>
                <h2
                    className={`font-black text-xl md:text-4xl mt-4 mb-4 max-w-4xl mx-auto
                bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent transition-all delay-300 leading-tight duration-1000 ${
                        heroVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
                    }`}>
                    Deviens un Designer
                    <span className="block text-lg md:text-3xl mt-2 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                        Graphique Professionnel
                    </span>
                </h2>
                <p className={`max-w-xl text-gray-600 text-base font-medium
                    transition-all delay-400 leading-relaxed duration-1000 ${
                    heroVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
                }`}>
                    Apprends à utiliser Photoshop, Illustrator et InDesign comme un pro,
                    avec en BONUS des formations en Montage Vidéo (Premiere Pro) et Marketing Digital.
                </p>

                <div
                    className={`flex flex-wrap justify-center  md:justify-between mt-6 gap-3 
                    transition-all delay-500 leading-tight duration-1000 ${
                        heroVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
                    }`}>
                    <div
                        className="flex items-center space-x-2 px-3 py-1.5 bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 rounded-full text-amber-700 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                        <Star className="w-4 h-4 fill-amber-500 text-amber-500"/>
                        <span className="font-semibold">4.9/5 étoiles</span>
                    </div>
                    <div
                        className="flex items-center space-x-2 px-3 py-1.5 bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-full text-red-700 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                        <Zap className="w-4 h-4 text-red-600"/>
                        <span className="font-semibold">Accès immédiat</span>
                    </div>
                </div>
                
                {/* Boutons CTA */}
                <div className={`flex flex-col sm:flex-row gap-3 mt-6 transition-all delay-600 duration-1000 ${
                    heroVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
                }`}>
                    <button className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        <span className="flex items-center gap-2">
                            Commencer maintenant
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                    </button>
                    <button className="bg-white hover:bg-gray-50 text-gray-800 font-semibold py-3 px-6 rounded-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 shadow-md hover:shadow-lg">
                        Voir le programme
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner;