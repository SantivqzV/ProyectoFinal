import { supabase } from "../database/db.js";

export const getLeaderboard = async (req,res) =>{

    try{
        let { data: top_usuarios_puntos_semana, error } = await supabase
        .from('top_usuarios_puntos_semana_pais')
        .select('*');

        if(error) throw error;
        res.json(top_usuarios_puntos_semana)
    } catch(error){
        res.status(500).json({ error: error.message });
    }
}