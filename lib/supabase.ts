import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gyrafhmknmxfyeevqodh.supabase.co";
const supabaseAnonKey = "sb_publishable_tQjcDeaqPpdnGVmfuW4dlw_PLDHh3B9";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
