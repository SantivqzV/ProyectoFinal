import { supabase } from "../database/db.js";
import jwt from 'jsonwebtoken';
    

export const adminDashboardInfo = async (req,res) =>{

    let pais = req.params.pais;
    let adminInfoJson ={};
    console.log(pais);

    if (pais=="global"){
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

    }
    else{
    
        let { data: cursos_mas_populares, error_1 } = await supabase
        .from('cursos_mas_populares_pais')
        .select('*')
        .eq("pais", pais);
    
        if (error_1) throw error_1;
    
        adminInfoJson["cursos_populares"] = cursos_mas_populares
        
        let { data: nuevos_usuarios_semana, error_2 } = await supabase
        .from('nuevos_usuarios_semana_por_pais')
        .select('*')
        .eq("pais", pais);
        
    
        if (error_2) throw error_2;
    
        adminInfoJson["nuevos_usuarios"] = nuevos_usuarios_semana
    
        let { data: top_usuarios_puntos_semana, error_3 } = await supabase
        .from('top_usuarios_puntos_semana_pais')
        .select('*')
        .eq("pais", pais);
    
        if (error_3) throw error_3;
    
        adminInfoJson["top_usuarios_semana"] = top_usuarios_puntos_semana
        
        let { data: uso_aplicacion_por_hora_dia, error_4 } = await supabase
        .from('uso_aplicacion_por_hora_dia_pais')
        .select('*')
        .eq("pais", pais);
    
        if (error_4) throw error_4;
    
        adminInfoJson["uso_aplicacion_por_hora_dia"] = uso_aplicacion_por_hora_dia
    
        res.json(adminInfoJson)
    }
}


export const userDashboardInfo = async (req, res) =>{

    const token = req.headers.authorization.split(' ')[1]; // Assumes 'Bearer' scheme
    const decoded = jwt.decode(token);

    var userInfoJson = {};

    const idUsuario = decoded.sub
    const nombreUsuario = decoded.user_metadata.nombre;
    const apellido1Usuario = decoded.user_metadata.apellido1;
    const puestoUsuario = decoded.user_metadata.puestoUsuario;

    let { data: actividadSemanal, error } = await supabase
    .from('horas_totales_por_dia')
    .select("*")
    .eq("id_usuario", idUsuario);
    if(error) throw error;

    let { data: cursoEnProgreso, error1 } = await supabase
    .from('curso_en_progreso_usuario')
    .select("*")
    .eq("id_usuario", idUsuario);
    if(error1) throw error1;

    let { data: cursosCompletados, error2 } = await supabase
    .rpc('total_cursos_completados_usuario', { "p_id_usuario":
        idUsuario
    })
    if(error2) throw error2;
    
    let { data: leaderboard, error3 } = await supabase
        .from('top_usuarios_puntos_semana_pais')
        .select('*');

    if(error3) throw error;

    userInfoJson = {
        "nombre" : nombreUsuario,
        "apellido1": apellido1Usuario,
        "puesto": puestoUsuario,
        "cursosCompletados": cursosCompletados,
        "cursoEnProgreso": cursoEnProgreso,
        "actividadSemanal": actividadSemanal,
        "leaderboard": leaderboard
    }

    res.json(userInfoJson)

}


