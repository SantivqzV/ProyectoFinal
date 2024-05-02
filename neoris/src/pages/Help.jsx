import React from 'react';
import { Header } from '../components'; // Import your Header component

const HelpPage = () => {
  return (
    <div className="text-start p-5">
      <Header title="Ayuda" subtitle="Soporte de RRHH y Recursos" />
      <div className="bg-gray-100 p-5 rounded mt-5 mb-5">
        <h2 className="mb-2 text-gray-800 font-bold">Bienvenido al Soporte de RRHH</h2>
        <p>
          Nuestro Centro de Soporte de RH está aquí para ayudarlo con cualquier pregunta o inquietud relacionada con su empleo y desarrollo profesional.
        </p>
      </div>
      <div className="bg-white p-5 rounded mb-5">
        <h3 className="mb-2 text-gray-800 font-bold">Preguntas Frecuentes</h3>
        <p>
          <strong className="text-green-600">¿Cómo me inscribo en un curso?</strong><br />
          Para inscribirte en un curso, simplemente ve a la sección de Cursos de la plataforma y selecciona el curso que te interese. Luego, haz clic en el botón de inscribirse para comenzar.
        </p>
        <p>
          <strong className="text-green-600">¿Qué debo hacer si encuentro problemas técnicos?</strong><br />
          Si encuentras algún problema técnico mientras usas la plataforma, por favor comunícate con nuestro equipo de soporte de IT en it-support@example.com para obtener ayuda.
        </p>
        <p>
          <strong className="text-green-600">¿Cómo puedo dar retroalimentación sobre un curso?</strong><br />
          ¡Valoramos tu opinión! Puedes proporcionar retroalimentación sobre un curso completando el formulario de evaluación del curso que se proporciona al final de cada curso.
        </p>
      </div>
      <div className="bg-gray-100 p-5 rounded">
        <h3 className="mb-2 text-gray-800 font-bold">Contacto de RRHH</h3>
        <p>
          Si tienes alguna pregunta o necesitas más ayuda, no dudes en contactar a nuestro departamento de RRHH en <strong className="text-green-600">rrhh@neoris.com</strong>.
        </p>
      </div>
    </div>
  );
};

export default HelpPage;
