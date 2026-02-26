
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSlider from "@/components/HeroSlider.tsx";
import BankingSection, { ProductsSection } from "@/components/features/banking/BankingSection.tsx";
import RevenueSection from "@/components/features/banking/RevenueSection.tsx";
import CoursesSection from "@/components/features/courses/CoursesSection.tsx";
import ClimateCourseSection from "@/components/features/courses/ClimateCourseSection.tsx";
import SubscriptionSection from "@/components/SubscriptionSection.tsx";
import StatsSection from "@/components/features/stats/StatsSection.tsx";
import TrainersSection from "@/components/TrainersSection.tsx";
import MasterclassSection from "@/components/features/courses/MasterclassSection.tsx";
import Testimonials from "@/components/features/testimonials/Testimonials.tsx";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <HeroSlider />
        <CoursesSection />
        <SubscriptionSection />
        <ClimateCourseSection />
        <RevenueSection />
        <BankingSection />
        <ProductsSection />
        <TrainersSection />
        <MasterclassSection />
        <StatsSection />
        <Testimonials />
        </main>
      <Footer />
    </div>
  );
};

export default Index;
