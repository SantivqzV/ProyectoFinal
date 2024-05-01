import React from 'react';
import { Header } from "../components";

const HelpPage = () => {
  return (
    <div style={{ height: '100%', width: '100%', overflow: 'auto', fontFamily: 'Arial, sans-serif', fontSize: '16px', padding: '20px' }}>
      <Header title="Help" subtitle="HR Support and Resources" />
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
          <h3 style={{ marginBottom: '10px', color: '#333' , fontWeight: "bold" }}>Preguntas Frecuentes</h3>
          <p>
            <strong style={{ color: '#009D4E' }}>¿Cómo me inscribo en un curso?</strong><br />
            Para inscribirte en un curso, simplemente navega a la sección de Cursos de la plataforma y selecciona el curso que te interesa. Luego, haz clic en el botón de inscripción para comenzar.
          </p>
          <p>
            <strong style={{ color: '#009D4E' }}>¿Qué debo hacer si encuentro problemas técnicos?</strong><br />
            Si encuentras algún problema técnico mientras utilizas la plataforma, por favor contacta a nuestro equipo de soporte técnico en it-support@example.com para obtener ayuda.
          </p>
          <p>
            <strong style={{ color: '#009D4E' }}>¿Cómo puedo proporcionar comentarios sobre un curso?</strong><br />
            ¡Valoramos tus comentarios! Puedes proporcionar comentarios sobre un curso completando el formulario de evaluación del curso que se proporciona al final de cada curso.
          </p>
        </div>
        <div style={{ backgroundColor: '#f7f7f7', padding: '20px', borderRadius: '10px' }}>
          <h3 style={{ marginBottom: '10px', color: '#333' , fontWeight: "bold"}}>Contactar a RRHH</h3>
          <p>
            Si tienes alguna pregunta o necesitas más ayuda, no dudes en contactar a nuestro departamento de RRHH en <strong style={{ color: '#009D4E' }}>hr@neoris.com</strong>.
          </p>
        </div>
    </div>
  );
};

export default HelpPage;
