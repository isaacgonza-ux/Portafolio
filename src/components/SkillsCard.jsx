import React, { useState } from 'react';
import { createPortal } from 'react-dom';

// 1. Recibimos el objeto "skill" como prop
const SkillsCard = ({ skill }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    console.log("Intentando abrir el modal...");
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  // Componente del Modal que se renderizará en el portal
  const Modal = () => (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{skill.nombre}</h2>
        <p>
          {skill.descripcion}
        </p>
        <button className="close-btn" onClick={closeModal}>
          Cerrar
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* TARJETA PRINCIPAL */}
      <div className="skills-card" onClick={openModal}>
        <img 
          src={skill.imagen} // 2. Usamos la imagen dinámica
          alt={`Logo de ${skill.nombre}`} 
          className="skills-card-image" 
        />
        {/* Título sobre la imagen (opcional, para que se sepa qué es antes de hacer click) */}
        <div className="skills-card-title" style={{ position: 'absolute', bottom: 10, left: 10, color: '#fff', fontWeight: 'bold' }}>
          {skill.nombre}
        </div>
      </div>

      {/* PORTAL PARA EL MODAL */}
      {isOpen && createPortal(<Modal />, document.body)}
    </>
  );
};

export default SkillsCard;