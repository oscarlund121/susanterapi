"use client";
import React from "react";

const MicroInteractionsDemo = () => {
  return (
    <div className="max-w-6xl mx-auto px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-light text-[#333333] mb-4">
          Micro-Interactions Demo
        </h1>
        <p className="text-lg text-gray-600">
          10 rolige effekter til terapi-website
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 1. Åndedræts-effekt */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-gray-800">1. Åndedræts-effekt</h3>
          <button className="px-6 py-3 bg-blue-100 text-blue-800 border border-blue-200 breathe-button">
            Åndedræt Button
          </button>
          <div className="p-6 bg-white border border-gray-200 shadow-sm breathe-card">
            <p className="text-gray-700">Card med åndedræts-rytme</p>
          </div>
        </div>

        {/* 2. Magnetisk trækning */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-gray-800">2. Magnetisk trækning</h3>
          <button className="px-6 py-3 bg-green-100 text-green-800 border border-green-200 magnetic-button">
            Magnetisk Button
          </button>
          <div className="p-6 bg-white border border-gray-200 shadow-sm magnetic-card">
            <p className="text-gray-700">Card med magnetisk effekt</p>
          </div>
        </div>

        {/* 3. Bølge-effekt */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-gray-800">3. Bølge-effekt</h3>
          <button className="px-6 py-3 bg-teal-100 text-teal-800 border border-teal-200 wave-button overflow-hidden relative">
            <span className="relative z-10">Bølge Button</span>
          </button>
          <div className="p-6 bg-white border border-gray-200 shadow-sm wave-card overflow-hidden relative">
            <p className="text-gray-700 relative z-10">Card med bølge-effekt</p>
          </div>
        </div>

        {/* 4. Energi-cirkler */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-gray-800">4. Energi-cirkler</h3>
          <button className="px-6 py-3 bg-purple-100 text-purple-800 border border-purple-200 energy-button relative overflow-hidden">
            Energi Button
          </button>
          <div className="p-6 bg-white border border-gray-200 shadow-sm energy-card relative overflow-hidden">
            <p className="text-gray-700">Card med energi-cirkler</p>
          </div>
        </div>

        {/* 5. Gentle Float */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-gray-800">5. Gentle Float</h3>
          <button className="px-6 py-3 bg-indigo-100 text-indigo-800 border border-indigo-200 float-button">
            Float Button
          </button>
          <div className="p-6 bg-white border border-gray-200 shadow-sm float-card">
            <p className="text-gray-700">Card med gentle float</p>
          </div>
        </div>

        {/* 6. Heartbeat puls */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-gray-800">6. Heartbeat puls</h3>
          <button className="px-6 py-3 bg-pink-100 text-pink-800 border border-pink-200 heartbeat-button">
            Heartbeat Button
          </button>
          <div className="p-6 bg-white border border-gray-200 shadow-sm heartbeat-card">
            <p className="text-gray-700">Card med heartbeat puls</p>
          </div>
        </div>

        {/* 7. Glow effekt */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-gray-800">7. Glow effekt</h3>
          <button className="px-6 py-3 bg-yellow-100 text-yellow-800 border border-yellow-200 glow-button">
            Glow Button
          </button>
          <div className="p-6 bg-white border border-gray-200 shadow-sm glow-card">
            <p className="text-gray-700">Card med glow effekt</p>
          </div>
        </div>

        {/* 8. Morphing skygger */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-gray-800">8. Morphing skygger</h3>
          <button className="px-6 py-3 bg-gray-100 text-gray-800 border border-gray-200 morphing-button">
            Morphing Button
          </button>
          <div className="p-6 bg-white border border-gray-200 shadow-sm morphing-card">
            <p className="text-gray-700">Card med morphing skygger</p>
          </div>
        </div>

        {/* 9. Subtle Scale */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-gray-800">9. Subtle Scale</h3>
          <button className="px-6 py-3 bg-rose-100 text-rose-800 border border-rose-200 scale-button">
            Scale Button
          </button>
          <div className="p-6 bg-white border border-gray-200 shadow-sm scale-card">
            <p className="text-gray-700">Card med subtle scale</p>
          </div>
        </div>

        {/* 10. Opacity Flow */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-gray-800">10. Opacity Flow</h3>
          <button className="px-6 py-3 bg-cyan-100 text-cyan-800 border border-cyan-200 opacity-button">
            Opacity Button
          </button>
          <div className="p-6 bg-white border border-gray-200 shadow-sm opacity-card">
            <p className="text-gray-700">Card med opacity flow</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* 1. Åndedræts-effekt */
        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        .breathe-button:hover { animation: breathe 4s ease-in-out infinite; }
        .breathe-card:hover { animation: breathe 4s ease-in-out infinite; }

        /* 2. Magnetisk trækning */
        .magnetic-button { transition: all 0.3s ease; }
        .magnetic-button:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        .magnetic-card { transition: all 0.3s ease; }
        .magnetic-card:hover { transform: translateY(-3px); box-shadow: 0 6px 20px rgba(0,0,0,0.1); }

        /* 3. Bølge-effekt */
        @keyframes wave {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .wave-button::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent); transform: translateX(-100%); transition: all 0.6s; }
        .wave-button:hover::before { animation: wave 0.6s ease-in-out; }
        .wave-card::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(0,0,0,0.05), transparent); transform: translateX(-100%); transition: all 0.8s; }
        .wave-card:hover::before { animation: wave 0.8s ease-in-out; }

        /* 4. Energi-cirkler */
        @keyframes energyPulse {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }
        .energy-button::after { content: ''; position: absolute; top: 50%; left: 50%; width: 20px; height: 20px; border: 2px solid currentColor; border-radius: 50%; transform: translate(-50%, -50%) scale(0); opacity: 0; }
        .energy-button:hover::after { animation: energyPulse 1.5s ease-out infinite; }
        .energy-card::after { content: ''; position: absolute; top: 50%; left: 50%; width: 30px; height: 30px; border: 2px solid #cbd5e1; border-radius: 50%; transform: translate(-50%, -50%) scale(0); opacity: 0; }
        .energy-card:hover::after { animation: energyPulse 2s ease-out infinite; }

        /* 5. Gentle Float */
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        .float-button:hover { animation: gentleFloat 3s ease-in-out infinite; }
        .float-card:hover { animation: gentleFloat 4s ease-in-out infinite; }

        /* 6. Heartbeat puls */
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          14% { transform: scale(1.05); }
          28% { transform: scale(1); }
          42% { transform: scale(1.05); }
          70% { transform: scale(1); }
        }
        .heartbeat-button:hover { animation: heartbeat 2s ease-in-out infinite; }
        .heartbeat-card:hover { animation: heartbeat 2.5s ease-in-out infinite; }

        /* 7. Glow effekt */
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(251, 191, 36, 0.3); }
          50% { box-shadow: 0 0 20px rgba(251, 191, 36, 0.6); }
        }
        .glow-button:hover { animation: glow 2s ease-in-out infinite; }
        .glow-card:hover { animation: glow 3s ease-in-out infinite; }

        /* 8. Morphing skygger */
        @keyframes morphShadow {
          0% { box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
          25% { box-shadow: 0 4px 8px rgba(0,0,0,0.15); }
          50% { box-shadow: 0 8px 16px rgba(0,0,0,0.2); }
          75% { box-shadow: 0 4px 8px rgba(0,0,0,0.15); }
          100% { box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        }
        .morphing-button:hover { animation: morphShadow 3s ease-in-out infinite; }
        .morphing-card:hover { animation: morphShadow 4s ease-in-out infinite; }

        /* 9. Subtle Scale */
        .scale-button { transition: transform 0.3s ease; }
        .scale-button:hover { transform: scale(1.02); }
        .scale-card { transition: transform 0.4s ease; }
        .scale-card:hover { transform: scale(1.01); }

        /* 10. Opacity Flow */
        @keyframes opacityFlow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .opacity-button:hover { animation: opacityFlow 2s ease-in-out infinite; }
        .opacity-card:hover { animation: opacityFlow 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default MicroInteractionsDemo;
