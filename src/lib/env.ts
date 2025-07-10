function getEnvVariable(key: string): string {
  const value = import.meta.env[key];

  if (!value) {
    throw new Error(`A variável de ambiente ${key} não está definida.`);
  }

  return value;
}

export const ENV = {
  API_URL: getEnvVariable('VITE_API_URL'),
};
