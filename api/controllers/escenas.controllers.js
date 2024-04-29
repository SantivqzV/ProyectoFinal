import { supabase } from "../database/db.js";

export const putCertificado = async (req,res) =>{
  try {

    const { data, error } = await supabase
    .from('progreso_usuario_juego')
    .update({ "documento": true })
    .eq('id_usuario', req.params.id_usuario)
    .select()  
    
    res.json(data)
  } catch (error) {
    // Catch any unexpected errors and respond with a 500 status and the error message
    res.status(500).json({ error: error.message });
  }
}

export const getEscena = async (req, res) => {
  try {
    // Fetch the curso with the specified ID from the 'Cursos' table
    console.log('ID parameter:', req.params.id_usuario); // Log the ID parameter

    const { data: escena, error } = await supabase
      .from('progreso_usuario_juego')
      .select('*')
      .eq('id_usuario', req.params.id_usuario)
      .single();

      // If the curso is found, respond with the curso data
      res.json(escena);
    
  } catch (error) {
    // Catch any unexpected errors and respond with a 500 status and the error message
    res.status(500).json({ error: error.message });
  }
};

export const putEscenaYCurso = async (req, res) => {

  var updates = {}
  try {

    if (req.params.nuevo_curso == "no")
    {
      updates = { "id_escena": req.params.escena}
    }
    else{
      updates= { "id_escena": req.params.escena, "id_curso":req.params.nuevo_curso, "documento":null}
    }

    // Update data in the 'Cursos' table

    const { data, error } = await supabase
      .from('progreso_usuario_juego')
      .update(updates)
      .eq('id_usuario', req.params.id_usuario)
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