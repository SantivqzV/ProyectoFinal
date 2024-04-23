import { supabase } from "../database/db.js";


export const getEscena = async (req, res) => {
  try {
    // Fetch the curso with the specified ID from the 'Cursos' table
    console.log('ID parameter:', req.params.id_trabajador); // Log the ID parameter

    const { data: escena, error } = await supabase
      .from('escena_dummy')
      .select('*')
      .eq('id_trabajador', req.params.id_trabajador)
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

    console.log('ID Trabajador:', req.params.id_trabajador);
    console.log('Escena:', req.params.escena);


    // Update data in the 'Cursos' table
    const { data, error } = await supabase
    .from('escena_dummy')
    .update({ "escena": req.params.escena })
    .eq('id_trabajador', req.params.id_trabajador)
    .select()

    if (error) {
      console.error('Error updating escena:', error);
      throw error;
    }

    res.json(data);


  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};