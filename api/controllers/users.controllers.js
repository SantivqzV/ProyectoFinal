import { supabase } from "../database/db.js";

// Register a new user
export const register = async (req, res) => {
try{

    const { data, error } = await supabase.auth.signUp({
      email: req.body.email,
      password: req.body.password,
    });

    if (error) throw error;

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

      console.log(data);
      res.status(201).json({ "Success": "User logged in successfully" });

    }
    catch(error){
      res.status(500).json({ error: error.message });
    }
};

export const reset_password= async (req, res) => {
    
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: 'https://example.com/update-password',})
}