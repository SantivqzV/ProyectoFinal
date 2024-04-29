import { supabase } from "../database/db.js";
import jwt from 'jsonwebtoken';

let unity_user_id;

// Register a new user
export const register = async (req, res) => {
try{
    
    const { data, error } = await supabase.auth.signUp(
      {
        email: req.body.email,
        password: req.body.password,
        options: {
          data: {
            nombre: req.body.options.data.nombre,
            is_damin: req.body.options.data.is_damin,
            apellido1: req.body.options.data.apellido1,
            apellido2: req.body.options.data.apellido2,
            puesto: req.body.options.data.puesto,
            pais: req.body.options.data.pais,
            ciudad: req.body.options.data.ciudad,
            nombre_departamento: req.body.options.data.nombre_departamento,
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
    const token = req.headers.authorization.split(' ')[1]; // Assumes 'Bearer' scheme
    const decoded = jwt.decode(token);

    console.log(decoded.sub)

    res.status(200).json({ "id": decoded.sub });
    unity_user_id = decoded.sub
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserId = async(req,res)=>{
    console.log(unity_user_id)

    res.json({"id": unity_user_id})
};


