import { supabase } from "$lib/supabaseClient";

export async function load({params}) {
  
let { data, error } = await supabase
  .from("billionaire")
  .select(
    `
    *,
    country (
      country_name
    ),
    industry (
      industry_name
    ),
    billionaire_info (
      source_id (
        source
      )
    )
  `
  )
  .eq("id", params.id);
      console.log(error)
  return {
    billionaire: data ?? [],
  };
}
          




