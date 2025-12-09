import React, { useState } from "react";
import PrecareSection from "./PrecareSection";
import EaasService from "./EaasService";
import AuxilliarySection from "./AuxilliarySection";
import OperatorTrainingCertSection from "./OperatorTraining";

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4">
        {/* TAB HEADERS */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-8 border-b border-gray-300">
            <button
              onClick={() => setActiveTab("tab1")}
              className={`pb-3 text-sm md:text-base font-medium transition-all duration-300 relative
                ${
                  activeTab === "tab1"
                    ? "text-secondary border-b-2 border-secondary"
                    : "text-gray-600 hover:text-secondary"
                }`}
            >
              Equipment Life Cycle
            </button>

            <button
              onClick={() => setActiveTab("tab2")}
              className={`pb-3 text-sm md:text-base font-medium transition-all duration-300
                ${
                  activeTab === "tab2"
                    ?  "text-secondary border-b-2 border-secondary"
                    : "text-gray-600 hover:text-secondary"
                }`}
            >
              Auxiliary Services
            </button>

            <button
              onClick={() => setActiveTab("tab3")}
              className={`pb-3 text-sm md:text-base font-medium transition-all duration-300
                ${
                  activeTab === "tab3"
                    ?  "text-secondary border-b-2 border-secondary"
                    : "text-gray-600 hover:text-secondary"
                }`}
            >
              Operator Training
            </button>
          </div>
        </div>

        {/* TAB CONTENT */}
        <div className="transition-all duration-300">
          {activeTab === "tab1" && (
            <div className="animate-fadeIn">
              <PrecareSection />
              <EaasService />
            </div>
          )}

          {activeTab === "tab2" && (
            <div className="animate-fadeIn">
              <AuxilliarySection />
            </div>
          )}

          {activeTab === "tab3" && (
            <div className="animate-fadeIn">
              <OperatorTrainingCertSection />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
