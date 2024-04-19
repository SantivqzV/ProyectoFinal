// db.js
import { createClient } from '@supabase/supabase-js';

/* const config = {
  SUPABASE_URL: process.env.SUPABASE_URL,
  SUPABASE_KEY: process.env.SUPABASE_KEY,
  options: { encrypt: true, trustServerCertificate: true },
}; */

const SUPABASE_URL="https://qdqplvmmwtbfexywkbjh.supabase.co";
const SUPABASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkcXBsdm1td3RiZmV4eXdrYmpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM0MTMwMzcsImV4cCI6MjAyODk4OTAzN30.LY8eKjawHS-uhn6DYqHFf0-ytJ73EQ1e9s4yfFAc214";


const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);


export { supabase };
