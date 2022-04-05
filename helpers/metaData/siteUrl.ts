const productionHost =
  process.env.NEXT_PUBLIC_HOST || process.env.NEXT_PUBLIC_VERCEL_URL || 'robertorlinski.pl';
const devHost = 'localhost:3000';
const host = process.env.NODE_ENV === 'production' ? productionHost : devHost;

const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';

export default `${protocol}://${host}` as const;
export { host, protocol };
