import { createClient } from "@supabase/supabase-js";

const subapaseURL = 'https://vpszquhfbyayggtwkidk.supabase.co';
const subaApiKey  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwc3pxdWhmYnlheWdndHdraWRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc5NDMzMzEsImV4cCI6MjA3MzUxOTMzMX0.tgB9rBQZ8MncT8Nk65_vEFcsBMizQoUnhs9AP8TAk9M';

export const supabase = createClient(subapaseURL , subaApiKey)