import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <i className="fas fa-snowflake text-2xl"></i>
              <h4 className="text-xl font-bold">FrigoTech</h4>
            </div>
            <p className="text-gray-300">
              Especialistas em refrigeração com mais de 15 anos de experiência
              no mercado.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-gray-300">
              <p>
                <i className="fas fa-phone mr-2"></i>(11) 99999-9999
              </p>
              <p>
                <i className="fas fa-envelope mr-2"></i>contato@frigotech.com.br
              </p>
              <p>
                <i className="fas fa-map-marker-alt mr-2"></i>São Paulo, SP
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Horário de Atendimento
            </h4>
            <div className="space-y-2 text-gray-300">
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 12h</p>
              <p className="text-green-400 font-semibold">Emergências: 24h</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 FrigoTech. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
