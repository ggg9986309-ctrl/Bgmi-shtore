import {supabase} from "./supabase.js";
export const signIn=(email,password)=>supabase?.auth.signInWithPassword({email,password});
export const signUp=(email,password)=>supabase?.auth.signUp({email,password});
export const signOut=()=>supabase?.auth.signOut();
