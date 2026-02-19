export function calculateEntropy(password) {
  let charset = 0;
  if (/[a-z]/.test(password)) charset += 26;
  if (/[A-Z]/.test(password)) charset += 26;
  if (/[0-9]/.test(password)) charset += 10;
  if (/[^a-zA-Z0-9]/.test(password)) charset += 32;
  
  // Fix: Always return a string to match the entropy property type in PasswordAnalysis (App.tsx line 76)
  if (charset === 0 || password.length === 0) return "0.00";
  
  // Cálculo de entropia: log2(charset^comprimento)
  return (Math.log2(Math.pow(charset, password.length))).toFixed(2);
}

export function generatePassword() {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  let password = "";
  for (let i = 0; i < 16; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}