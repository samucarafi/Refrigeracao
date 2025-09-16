import React from "react";

const AboutSection = () => {
  const features = [
    {
      title: "15 anos de experiência",
      description: "Especialistas com vasta experiência no mercado",
    },
    {
      title: "Atendimento 24h",
      description: "Emergências atendidas a qualquer hora",
    },
    {
      title: "Garantia de qualidade",
      description: "Todos os serviços com garantia estendida",
    },
  ];

  return (
    <section id="sobre" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-6 text-gray-800">
              Por que escolher a FrigoTech?
            </h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <i className="fas fa-check-circle text-green-500 text-xl mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 text-white p-8 rounded-xl">
              <i className="fas fa-snowflake text-6xl mb-4"></i>
              <h4 className="text-2xl font-bold mb-2">Tecnologia Avançada</h4>
              <p>
                Utilizamos equipamentos de última geração para diagnósticos
                precisos e reparos eficientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
