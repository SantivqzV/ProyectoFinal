import React from 'react';
import { Header } from "../components";

const HelpPage = () => {
  return (
    <div style={{ height: '100%', width: '100%', overflow: 'auto', fontFamily: 'Arial, sans-serif', fontSize: '16px', padding: '20px' }}>
      <Header title="Ayuda" subtitle="Soporte de RRHH y Recursos" />
      <div style={{ backgroundColor: '#f7f7f7', padding: '20px', borderRadius: '10px', marginBottom: '20px', marginTop: '20px'  }}>
        <h2 style={{ marginBottom: '10px', color: '#333' , fontWeight: "bold"}}>Bienvenido al Soporte de RRHH</h2>
        <p>
          Nuestro Centro de Soporte de RRHH está aquí para ayudarlo con cualquier pregunta o inquietud relacionada con su empleo y desarrollo profesional.
        </p>
      </div>
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '10px', color: '#333' , fontWeight: "bold" }}>Preguntas Frecuentes</h3>
        <p>
          <strong style={{ color: '#009D4E' }}>¿Cómo me inscribo en un curso?</strong><br />
          Para inscribirte en un curso, simplemente ve a la sección de Cursos de la plataforma y selecciona el curso que te interese. Luego, haz clic en el botón de inscribirse para comenzar.
        </p>
        <p>
          <strong style={{ color: '#009D4E' }}>¿Qué debo hacer si encuentro problemas técnicos?</strong><br />
          Si encuentras algún problema técnico mientras usas la plataforma, por favor comunícate con nuestro equipo de soporte de IT en it-support@example.com para obtener ayuda.
        </p>
        <p>
          <strong style={{ color: '#009D4E' }}>¿Cómo puedo dar retroalimentación sobre un curso?</strong><br />
          ¡Valoramos tu opinión! Puedes proporcionar retroalimentación sobre un curso completando el formulario de evaluación del curso que se proporciona al final de cada curso.
        </p>
      </div>
      <div style={{ backgroundColor: '#f7f7f7', padding: '20px', borderRadius: '10px' }}>
        <h3 style={{ marginBottom: '10px', color: '#333' , fontWeight: "bold"}}>Contacto de RRHH</h3>
        <p>
          Si tienes alguna pregunta o necesitas más ayuda, no dudes en contactar a nuestro departamento de RRHH en <strong style={{ color: '#009D4E' }}>rrhh@neoris.com</strong>.
        </p>
      </div>
    </div>
  );
};

export default HelpPage;
