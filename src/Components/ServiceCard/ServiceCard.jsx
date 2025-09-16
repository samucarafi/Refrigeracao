import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-card bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <div className="text-blue-600 text-4xl mb-4">
        <i className={icon}></i>
      </div>
      <h4 className="text-xl font-bold mb-4 text-gray-800">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
