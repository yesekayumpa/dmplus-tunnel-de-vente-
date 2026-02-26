import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Slide = {
  id: number;
  title: string;
  description: string;
  features?: string[];
  image: string;
  ctaText: string;
  ctaLink: string;
};

const slides: Slide[] = [
  {
    id: 1,
    title: "Devenez un expert en graphisme",
    description: "Maîtrisez les outils essentiels du design et donnez vie à vos idées créatives avec notre formation complète.",
    features: [
      "Formation complète sur Photoshop, Illustrator et plus",
      "Accompagnement personnalisé par des experts",
      "Certification incluse à la fin de la formation"
    ],
    image: "/pack-design-graphique-removebg-preview.png",
    ctaText: "Découvrir la formation",
    ctaLink: "#pricing"
  },
  {
    id: 4,
    title: "Maîtrisez l'art du montage vidéo",
    description: "Apprenez à créer des vidéos professionnelles avec nos formations complètes sur les meilleurs logiciels du marché.",
    features: [
      "Formation complète sur Adobe Premiere Pro et After Effects",
      "Techniques avancées de montage et d'effets spéciaux",
      "Projets pratiques pour renforcer vos compétences"
    ],
    image: "/Montage Vidéo.png",
    ctaText: "Commencer maintenant",
    ctaLink: "#video"
  }
];

const HeroSlider = () => {
  return null;
};

export default HeroSlider;
