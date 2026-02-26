import React, { useState } from 'react';
import { Trophy, Gem, CheckCircle, XCircle } from 'lucide-react';

const SubscriptionSection = () => {
  const [billingCycle, setBillingCycle] = useState<'month' | 'year'>('month');

  const managePrice = (cycle: 'month' | 'year') => {
    setBillingCycle(cycle);
  };

  const plans = [
    {
      name: 'Standard',
      icon: <Trophy className="w-16 h-16 text-yellow-400" />,
      description: 'Formations complètes pour apprendre à votre rythme avec nos ressources en ligne.',
      monthlyPrice: 29000,
      yearlyPrice: 290000, // 2 mois gratuits: 29000 * 10
      features: [
        { text: 'Accès illimité aux cours', included: true },
        { text: 'Ressources téléchargeables', included: true },
        { text: 'Communauté active', included: true }
      ],
      buttonClass: 'bg-red-600 hover:bg-red-700 text-white'
    },
    {
      name: 'Premium',
      icon: <Gem className="w-16 h-16 text-red-500" />,
      description: 'Coaching individuel avec suivi personnalisé pour atteindre vos objectifs rapidement.',
      monthlyPrice: 59000,
      yearlyPrice: 590000, // 2 mois gratuits: 59000 * 10
      features: [
        { text: 'Sessions individuelles', included: true },
        { text: 'Plan d\'action sur mesure', included: true },
        { text: 'Suivi régulier', included: true }
      ],
      buttonClass: 'border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
    }
  ];

  return null;
};

export default SubscriptionSection;
