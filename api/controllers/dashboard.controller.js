import { supabase } from "../database/db.js";
    

export const adminDashboardInfo = async (req,res) =>{
try{
    let adminInfoJson ={}

    let { data: cursos_mas_populares, error_1 } = await supabase
    .from('cursos_mas_populares')
    .select('*');

    if (error_1) throw error_1;

    adminInfoJson["cursos_populares"] = cursos_mas_populares
    
    let { data: nuevos_usuarios_semana, error_2 } = await supabase
    .from('nuevos_usuarios_semana')
    .select('*');

    if (error_2) throw error_2;

    adminInfoJson["nuevos_usuarios"] = nuevos_usuarios_semana

    let { data: top_usuarios_puntos_semana, error_3 } = await supabase
    .from('top_usuarios_puntos_semana')
    .select('*');

    if (error_3) throw error_3;

    adminInfoJson["top_usuarios_semana"] = top_usuarios_puntos_semana
    
    let { data: uso_aplicacion_por_hora_dia, error_4 } = await supabase
    .from('uso_aplicacion_por_hora_dia')
    .select('*')

    if (error_4) throw error_4;

    adminInfoJson["uso_aplicacion_por_hora_dia"] = uso_aplicacion_por_hora_dia

    res.json(adminInfoJson)
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
}


export const userDashboardInfo = async (req, res) =>{
    res.json({"Datos":"Datos"})
}


