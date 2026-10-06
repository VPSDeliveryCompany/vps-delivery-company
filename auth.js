import { supabase } from "./supabase.js";

const signup = async (email, password, name, phone) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    alert(error.message);
    return;
  }

  await supabase
    .from("profiles")
    .insert({
      id: data.user.id,
      full_name: name,
      phone: phone
    });

  alert("Account created successfully");
};


const login = async (email, password) => {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if(error){
    alert(error.message);
    return;
  }

  window.location.href = "dashboard.html";
};

export { signup, login };