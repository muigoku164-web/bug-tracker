// src/utils/validators.js

export const Validators = {
  isEmail: (email) => /\S+@\S+\.\S+/.test(email),
  isStrongPassword: (password) => password.length >= 6,
};
