const { supabase } = require('../supabase'); // Import Supabase client

// Register a new user
const register = async (req, res) => {

    const { data, error } = await supabase.auth.signUp({
        email: 'example@email.com',
        password: 'example-password',
    })
};

// Login user
const login = async (req, res) => {
  // Implement user login logic here
    const { data, error } = await supabase.auth.signInWithPassword({
        email: 'example@email.com',
        password: 'example-password',
    })
};

// Logout user
const logout = async (req, res) => {
  // Implement user logout logic here
  
    const { error } = await supabase.auth.signOut()
};

const reset_password= async (req, res) => {
    
const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: 'https://example.com/update-password',})
}

module.exports = {
  register,
  login,
  logout,
  reset_password
};
