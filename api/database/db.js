// db.js
import { createClient } from '@supabase/supabase-js';

const config = {
  SUPABASE_URL: process.env.SUPABASE_URL,
  SUPABASE_KEY: process.env.SUPABASE_KEY,
  options: { encrypt: true, trustServerCertificate: true },
}; 

const supabase = createClient(config.SUPABASE_URL, config.SUPABASE_KEY);


export { supabase };
