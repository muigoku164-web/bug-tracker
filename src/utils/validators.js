export const isValidEmail = email =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const isValidUrl = url =>
  /^https?:\/\/[^\s$.?#].[^\s]*$/.test(url);
