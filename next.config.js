const transferRedirects = [
  {
    source: '/wszystkie-wpisy',
    destination: '/artykuly',
    permanent: true,
  },
];

const postRedirects = [
  {
    source: '/stworzyc-motyw-wordpress-001-instalacja-serwera-lokalnego',
    destination: '/artykuly/jak-stworzyc-motyw-wordpress-001',
    permanent: true,
  },
  {
    source: '/instalacja-wordpressa-na-serwerze-lokalnym',
    destination: '/artykuly/jak-stworzyc-motyw-wordpress-002',
    permanent: true,
  },
];

const redirects = transferRedirects.concat(postRedirects);

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return redirects;
  },
};
