import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    servico: "",
    endereco: "",
    descricao: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "telefone") {
      // Format phone number
      let formattedValue = value.replace(/\D/g, "");
      if (formattedValue.length >= 11) {
        formattedValue = formattedValue.replace(
          /(\d{2})(\d{5})(\d{4})/,
          "($1) $2-$3"
        );
      } else if (formattedValue.length >= 7) {
        formattedValue = formattedValue.replace(
          /(\d{2})(\d{4})(\d{0,4})/,
          "($1) $2-$3"
        );
      } else if (formattedValue.length >= 3) {
        formattedValue = formattedValue.replace(/(\d{2})(\d{0,5})/, "($1) $2");
      }
      setFormData((prev) => ({ ...prev, [name]: formattedValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.nome || !formData.telefone || !formData.servico) {
      alert("Por favor, preencha todos os campos obrigatórios (*)");
      return;
    }

    // Create WhatsApp message
    let message = `🔧 *SOLICITAÇÃO DE SERVIÇO - FRIGOTECH*\n\n`;
    message += `👤 *Nome:* ${formData.nome}\n`;
    message += `📱 *Telefone:* ${formData.telefone}\n`;
    if (formData.email) message += `📧 *Email:* ${formData.email}\n`;
    message += `🛠️ *Serviço:* ${formData.servico}\n`;
    if (formData.endereco) message += `📍 *Endereço:* ${formData.endereco}\n`;
    if (formData.descricao)
      message += `📝 *Descrição:* ${formData.descricao}\n`;
    message += `\n⏰ *Enviado em:* ${new Date().toLocaleString("pt-BR")}`;

    // WhatsApp number (replace with actual business number)
    const whatsappNumber = "5521973402054";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Show success message
    alert(
      "Redirecionando para o WhatsApp! Sua mensagem será enviada automaticamente."
    );

    // Reset form
    setFormData({
      nome: "",
      telefone: "",
      email: "",
      servico: "",
      endereco: "",
      descricao: "",
    });
  };

  return (
    <section id="contato" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Solicite seu Orçamento
        </h3>
        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 p-8 rounded-xl shadow-lg"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Tipo de Serviço *
              </label>
              <select
                name="servico"
                value={formData.servico}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Selecione o serviço</option>
                <option value="Manutenção Preventiva">
                  Manutenção Preventiva
                </option>
                <option value="Reparo/Conserto">Reparo/Conserto</option>
                <option value="Instalação">Instalação</option>
                <option value="Emergência">Emergência</option>
                <option value="Orçamento">Orçamento</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Endereço
              </label>
              <input
                type="text"
                name="endereco"
                value={formData.endereco}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Descrição do Problema/Necessidade
              </label>
              <textarea
                name="descricao"
                value={formData.descricao}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Descreva detalhadamente sua necessidade..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
            >
              <i className="fab fa-whatsapp text-xl"></i>
              <span>Enviar via WhatsApp</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
