import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      icon: "fas fa-tools",
      title: "Manutenção Preventiva",
      description:
        "Mantenha seus equipamentos funcionando perfeitamente com nossa manutenção preventiva especializada.",
    },
    {
      icon: "fas fa-wrench",
      title: "Reparo e Conserto",
      description:
        "Diagnóstico rápido e reparo eficiente para todos os tipos de sistemas de refrigeração.",
    },
    {
      icon: "fas fa-cog",
      title: "Instalação",
      description:
        "Instalação profissional de ar condicionado, câmaras frias e sistemas comerciais.",
    },
  ];

  return (
    <section id="servicos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Nossos Serviços
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
