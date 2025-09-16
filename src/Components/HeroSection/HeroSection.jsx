import React from "react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="gradient-bg text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Especialistas em Refrigeração
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Manutenção, instalação e reparo de sistemas de refrigeração comercial
          e residencial. Atendimento 24h com qualidade garantida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToContact}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors pulse-animation"
          >
            Solicitar Orçamento
          </button>
          <a
            href="tel:+5511999999999"
            className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            <i className="fas fa-phone mr-2"></i>Emergência 24h
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
