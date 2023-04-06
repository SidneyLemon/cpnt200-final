import { supabase } from "$lib/supabaseClient";

export async function load() {
  
let { data, error } = await supabase.from("billionaire").select(`
    *,
    country (
      country_name
    ),
    industry (
      industry_name
    )
  `);
      console.log(error)
  return {
    billionaire: data ?? [],
  
  };
}
          




