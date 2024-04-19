import { supabase } from "../database/db.js";

export const getCursos = async (req, res) => {
  try {
    const { data: cursos, error } = await supabase.from('cursos').select();

    res.json(cursos);
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCurso = async (req, res) => {
  try {
    // Fetch the curso with the specified ID from the 'Cursos' table
    console.log('ID parameter:', req.params.id); // Log the ID parameter

    const { data: curso, error } = await supabase
      .from('cursos')
      .select('*')
      .eq('id_curso', req.params.id)
      .single();

      // If the curso is found, respond with the curso data
      res.json(curso);
    
  } catch (error) {
    // Catch any unexpected errors and respond with a 500 status and the error message
    res.status(500).json({ error: error.message });
  }
};


export const postCurso = async (req, res) => {
  try {
    const { nombre_curso, categoria, duracion_horas, id_articulo, puntos } = req.body;

    // Insert data into the 'Cursos' table
    const { data, error } = await supabase
      .from('cursos')
      .insert([{ nombre_curso, categoria, duracion_horas, id_articulo, puntos }]);
    
    res.json({ nombre_curso, categoria, duracion_horas, id_articulo, puntos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const putCurso = async (req, res) => {
  try {
    const { nombre_curso, categoria, duracion_horas, id_articulo, puntos } = req.body;

    // Update data in the 'Cursos' table
    const { data, error } = await supabase
      .from('cursos')
      .update({ nombre_curso, categoria, duracion_horas, id_articulo, puntos })
      .eq('id_curso', req.params.id);

    res.json({ nombre_curso, categoria, duracion_horas, id_articulo, puntos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteCurso = async (req, res) => {
  try {
    // Delete data from the 'Cursos' table 
    const { error } = await supabase
    .from('cursos')
    .delete()
    .eq('id_curso', req.params.id)
        

    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};