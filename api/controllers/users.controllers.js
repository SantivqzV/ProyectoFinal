import { supabase } from "../database/db.js";
import jwt from 'jsonwebtoken';


let unity_user_id;


// Register a new user
export const register = async (req, res) => {
try{
  console.log(req.body);
    
    const { data, error } = await supabase.auth.signUp(
      {
        email: req.body.email,
        password: req.body.password,
        options: {
          data: {
            nombre: req.body.nombre,
            is_admin: req.body.is_admin,
            apellido1: req.body.apellido1,
            apellido2: req.body.apellido2,
            puesto: req.body.puesto,
            pais: req.body.pais,
            ciudad: req.body.ciudad,
            nombre_departamento: req.body.nombre_departamento,
          }
        }
      }
    )

    console.log(data);
    res.status(201).json({ "Success": "User registered successfully" });
    
  }
  catch(error){
    res.status(500).json({ "Error":error});
  }
};

// Login user
export const login = async (req, res) => {
  // Implement user login logic here
  console.log("hola");
  try{
    const { data, error } = await supabase.auth.signInWithPassword({
        email: req.body.email,
        password: req.body.password,
    });
    
    if (error) throw error;

    console.log(data);
    res.status(201).json(data);

  }
  catch(error){
    res.status(500).json({ error: error.message });
  }
};

// Logout user
export const logout = async (req, res) => {
  // Implement user logout logic here
    try{
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      res.status(201).json({ "Success": "User logged out successfully" });

    }
    catch(error){
      res.status(500).json({ error: error.message });
    }
};

export const reset_password= async (req, res) => {
    
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: 'https://example.com/update-password',})
}

export const getIdFromToken = async (req, res) => {
  try {

    const decoded = jwt.decode(req.params.token);
    unity_user_id = decoded.sub

    console.log({"id_from_token": unity_user_id});

    res.status(200).json({ "id": decoded.sub });


  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserId = async(req, res)=>{

    console.log(unity_user_id);

    res.status(200).json({ "id": unity_user_id});

};
