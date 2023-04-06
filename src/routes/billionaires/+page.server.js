import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("billionaire").select();
  
let { data: billionaire } = await supabase
.from('billionaire')
.select(`billionaire.country_id, country.country_name)

`)

  

  return {
    billionaire: data ?? [],
    country_name: data ?? [],
  };
}
          




