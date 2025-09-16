import React from "react";

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="gradient-bg text-white py-4 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <i className="fas fa-snowflake text-3xl"></i>
          <h1 className="text-2xl font-bold">FrigoTech</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <button
            onClick={() => scrollToSection("servicos")}
            className="hover:text-blue-200 transition-colors"
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection("sobre")}
            className="hover:text-blue-200 transition-colors"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("contato")}
            className="hover:text-blue-200 transition-colors"
          >
            Contato
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
