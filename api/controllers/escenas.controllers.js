import { supabase } from "../database/db.js";

export const putCertificado = async (req,res) =>{
  try {

    const { data, error } = await supabase
    .from('progreso_usuario_juego')
    .update({ "documento": true })
    .eq('id_usuario', req.params.idUsuario)
    .select()  
    
    res.json(data)
  } catch (error) {
    // Catch any unexpected errors and respond with a 500 status and the error message
    res.status(500).json({ error: error.message });
  }
}

export const getProgreso = async (req, res) => {
  try {
    // Fetch the curso with the specified ID from the 'Cursos' table
    console.log('ID parameter:', req.params.idUsuario); // Log the ID parameter

    const { data: escena, error } = await supabase
      .from('progreso_usuario_juego')
      .select('*')
      .eq('id_usuario', req.params.idUsuario)
      .single();

    // If the curso is found, respond with the curso data
    res.json(escena);
    
  } catch (error) {
    // Catch any unexpected errors and respond with a 500 status and the error message
    res.status(500).json({ error: error.message });
  }
};

export const putEscena = async (req, res) => {

  try {
    // Update data in the 'Cursos' table

    const { data, error } = await supabase
      .from('progreso_usuario_juego')
      .update({ "id_escena": req.params.idEscena})
      .eq('id_usuario', req.params.idUsuario)
      .select();

    if (error) {
      console.error('Error updating escena:', error);
      throw error;
    } else{
      res.json(data);
    }

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const putCurso = async (req, res) => {

  try {

    // Update data in the 'Cursos' table
    const { data, error } = await supabase
      .from('progreso_usuario_juego')
      .update({ "id_curso": req.params.idCurso, "documento": null})
      .eq('id_usuario', req.params.idUsuario)
      .select();

    if (error) {
      console.error('Error updating escena:', error);
      throw error;
    } else{
      res.json(data);
    }

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};