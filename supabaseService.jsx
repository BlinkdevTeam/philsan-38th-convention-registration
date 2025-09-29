import { supabase } from "./supabaseClient";

export const getSponsorList = async (props) => {
    const { data, error } = await supabase
        .from('philsan_2025_sponsors')
        .select('*')
        .order('sponsor_name', { ascending: true });

    if (error) throw error;
    return data;
}