import { supabase } from "../database/db.js";
import jwt from 'jsonwebtoken';  

export const adminDashboardInfo = async (req,res) =>{

    let pais = req.params.pais;
    pais = pais.toLowerCase();
    let adminInfoJson ={};
    console.log(pais);

    if (pais=="global"){
        let { data: cursos_mas_populares, error_1 } = await supabase
        .from('cursos_mas_populares')
        .select('*');
        if (error_1) throw error_1;


        let { data: nuevos_usuarios_semana, error_2 } = await supabase
        .from('nuevos_usuarios_semana')
        .select('*');
        if (error_2) throw error_2;


        let { data: top_usuarios_puntos_semana, error_3 } = await supabase
        .from('top_usuarios_puntos_semana')
        .select('*');
        if (error_3) throw error_3;
        

        let { data: uso_aplicacion_por_hora_dia, error_4 } = await supabase
        .from('uso_aplicacion_por_hora_dia')
        .select('*')
        if (error_4) throw error_4;

        
        let { data: detalle_curso_mas_popular, error5 } = await supabase
        .from('detalle_cursos_mas_populares')
        .select('*')
        .range(0, 0);
        if (error5) throw error5;

        
        let { data: total_usuarios, error6 } = await supabase
        .from('total_usuarios')
        .select('*');
        if(error6) throw error6;
        

        adminInfoJson = {"cursos_populares":cursos_mas_populares,
        "nuevos_usuarios":nuevos_usuarios_semana,
        "top_usuarios_semana": top_usuarios_puntos_semana,
        "uso_aplicacion_por_hora_dia": uso_aplicacion_por_hora_dia,
        "curso_mas_popular": detalle_curso_mas_popular,
        "total_usuarios":total_usuarios
        }

        res.json(adminInfoJson)

    }
    else{
    try{
        let { data: cursos_mas_populares, error_1 } = await supabase
        .from('cursos_mas_populares_pais')
        .select('*')
        .eq("pais", pais);
        if (error_1) throw error_1;
        
        let { data: nuevos_usuarios_semana, error_2 } = await supabase
        .from('nuevos_usuarios_semana_por_pais')
        .select('*')
        .eq("pais", pais);
        if (error_2) throw error_2;

    
        let { data: top_usuarios_puntos_semana, error_3 } = await supabase
        .from('top_usuarios_puntos_semana_pais')
        .select('*')
        .eq("pais", pais);
        if (error_3) throw error_3;
        

        let { data: uso_aplicacion_por_hora_dia, error_4 } = await supabase
        .from('uso_aplicacion_por_hora_dia_pais')
        .select('*')
        .eq("pais", pais);
        if (error_4) throw error_4;

        
        let { data: detalle_curso_mas_popular, error5 } = await supabase
        .from('detalle_cursos_mas_populares_pais')
        .select('*')
        .eq("pais", pais)
        .range(0, 0);
        if (error5) throw error5;
        
        let { data: total_usuarios, error6 } = await supabase
        .from('total_usuarios_pais')
        .select('*')
        .eq("pais", pais);
        if(error6) throw error6;

        adminInfoJson = {"cursos_populares":cursos_mas_populares,
        "nuevos_usuarios":nuevos_usuarios_semana,
        "top_usuarios_semana": top_usuarios_puntos_semana,
        "uso_aplicacion_por_hora_dia": uso_aplicacion_por_hora_dia,
        "curso_mas_popular": detalle_curso_mas_popular,
        "total_usuarios":total_usuarios
        }
    
        res.json(adminInfoJson)
    }
        catch(error){
            console.error(error);
            res.status(500).json({ error: error.toString()});
        }
    }
}

export const userDashboardInfo = async (req, res) =>{

    const decoded = jwt.decode(req.params.token);

    console.log(decoded);

    var userInfoJson = {};

    const idUsuario = decoded.sub
    const nombreUsuario = decoded.user_metadata.nombre;
    const apellido1Usuario = decoded.user_metadata.apellido1;
    const puestoUsuario = decoded.user_metadata.puesto;

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

    
    let { data: puntosSemana, error3 } = await supabase
    .from('top_usuarios_puntos_semana')
    .select('total_puntos_semana')
    .eq("id_usuario", idUsuario);

    if(error3) throw error3;

    
    let { data: puntosTotales, error4 } = await supabase
    .from('progreso_usuario')
    .select('puntaje')
    .eq("id_usuario", idUsuario);
            
    if(error4) throw error4;


    userInfoJson = {
        "nombre" : nombreUsuario,
        "apellido1": apellido1Usuario,
        "puesto": puestoUsuario,
        "cursosCompletados": cursosCompletados,
        "cursoEnProgreso": cursoEnProgreso,
        "actividadSemanal": actividadSemanal,
        "puntosSemana": puntosSemana,
        "puntosTotales": puntosTotales
    }

    res.json(userInfoJson)

}


