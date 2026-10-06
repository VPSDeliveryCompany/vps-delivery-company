import { createClient } from 
'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = "https://nflnamxzcgearpofmguk.supabase.co";

const supabaseKey = "sb_publishable__WmTZMtXWwKqGj2PczTqsg_3fYaXVBD";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);