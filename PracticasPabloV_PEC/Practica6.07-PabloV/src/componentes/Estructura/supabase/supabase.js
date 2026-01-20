import {createClient} from "@supabase/supabase-js"

const conexionSupabase = createClient(
    "https://cktfnnhhhgelibararbm.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrdGZubmhoaGdlbGliYXJhcmJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg4MDI1NTgsImV4cCI6MjA4NDM3ODU1OH0.yCjWGvL3aWUmz-dVgSdJUhMbjAh4vJuhRKdFKixrYPg"
);

export {conexionSupabase};