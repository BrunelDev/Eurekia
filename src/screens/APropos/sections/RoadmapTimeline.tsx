"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { roadmapData, RoadmapPhase } from "./../../../lib/Roadmap";

// 🔹 Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const RoadmapItem: React.FC<{ phase: RoadmapPhase; phaseIndex: number }> = ({
  phase,
  phaseIndex,
}) => {
  return (
    <motion.div
      key={phase.id}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: phaseIndex * 0.1 }}
      className="relative"
    >
      {/* Point sur la ligne */}
      <div className="absolute left-0 md:left-1/2 top-0 w-5 h-5 bg-[#cd9f25] rounded-full border-4 border-white transform md:-translate-x-1/2 -translate-x-2.5 shadow-md" />

      {/* Bloc de contenu alterné */}
      <div
        className={`ml-10 md:ml-0 md:w-1/2 ${
          phaseIndex % 2 === 0
            ? "md:pr-12 md:text-right"
            : "md:pl-12 md:ml-auto"
        }`}
      >
        {/* En-tête */}
        <div className="mb-3 flex items-center gap-3 justify-start md:justify-end">
          <div>
            <h3 className="text-2xl font-bold text-[#1e1e1e] leading-tight">
              {phase.title}
            </h3>
            <p className="text-sm text-[#cd9f25] font-semibold">
              {phase.period}
            </p>
          </div>
        </div>

        {/* Carte des tâches */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="bg-[#fbf9eb] rounded-xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow"
        >
          {phase.items.map((item, index) => (
            <div key={index} className="flex gap-3 items-start">
              <div className="w-2 h-2 bg-[#cd9f25] rounded-full mt-2 flex-shrink-0" />
              <p className="font-medium text-[#1e1e1e]">{item.title}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

const RoadmapTimeline = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Ligne verticale */}
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[3px] bg-[#fbf9eb] transform md:-translate-x-1/2" />



          {/* Phases */}
          <div className="space-y-03 md:space-y-08">
            {roadmapData.map((phase, index) => (
              <RoadmapItem key={phase.id} phase={phase} phaseIndex={index} />
            ))}
          </div>
        </div>

        {/* Section "Donnez votre avis" */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 bg-[#fbf9eb] rounded-2xl p-10 text-center shadow-inner"
        >
          <h3 className="text-2xl font-bold text-[#1e1e1e] mb-3">
            🙋 Vous souhaitez nous aider à prioriser ?
          </h3>
          <p className="text-lg text-[#666] mb-6">
            Une fonctionnalité vous semble prioritaire ? Donnez-nous votre avis
            pour nous aider à améliorer EURÊK’IA !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3 bg-[#cd9f25] text-white font-semibold rounded-lg hover:bg-[#b8891f] transition-all"
            >
              Donnez votre avis
            </button>
          
          </div>
        </motion.div>
      </div>

      {/* 🔹 Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl p-8 max-w-md w-full shadow-lg relative"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold text-[#1e1e1e] mb-4">
              💬 Donnez votre avis
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Dites-nous quelle fonctionnalité ou idée vous semble prioritaire.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#cd9f25]"
              />
              <textarea
                placeholder="Votre suggestion..."
                rows={4}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#cd9f25]"
              />
              <button
                type="submit"
                className="w-full bg-[#cd9f25] text-white py-3 rounded-lg font-semibold hover:bg-[#b8891f] transition-all"
              >
                Envoyer
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default RoadmapTimeline;
