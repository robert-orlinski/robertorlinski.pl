const transferRedirects = [
  {
    source: '/wszystkie-wpisy',
    destination: '/artykuly',
    permanent: true,
  },
];

const postRedirects = [
  {
    source: '/witaj-swiecie-programajstrow',
    destination: '/artykuly/witaj-swiecie-programajstrow',
    permanent: true,
  },
  {
    source: '/daje-sie-poznac',
    destination: '/artykuly/daje-sie-poznac',
    permanent: true,
  },
  {
    source: '/narzedzia-do-organizacji',
    destination: '/artykuly/narzedzia-do-organizacji',
    permanent: true,
  },
  {
    source: '/podstawowe-wtyczki-wordpressa',
    destination: '/artykuly/10-niezbednych-wtyczek-do-wordpressa',
    permanent: true,
  },
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
  {
    source: '/pliki-motywu-wordpress',
    destination: '/artykuly/jak-stworzyc-motyw-wordpress-003',
    permanent: true,
  },
  {
    source: '/przyspieszamy-strone-na-wordpressie',
    destination: '/artykuly/jak-przyspieszyc-strone-na-wordpressie',
    permanent: true,
  },
  {
    source: '/jak-dodac-certyfikat-ssl',
    destination: '/artykuly/jak-dodac-certyfikat-ssl',
    permanent: true,
  },
  {
    source: '/pierwszy-kod-i-uruchomienie-motywu',
    destination: '/artykuly/jak-stworzyc-motyw-wordpress-004',
    permanent: true,
  },
  {
    source: '/dostepne-strony-internetowe',
    destination: '/artykuly/dostepne-strony-internetowe',
    permanent: true,
  },
  {
    source: '/jak-wyswietlic-wpisy-na-blogu',
    destination: '/artykuly/jak-stworzyc-motyw-wordpress-005',
    permanent: true,
  },
  {
    source: '/dobre-praktyki-css',
    destination: '/artykuly/dobre-praktyki-css',
    permanent: true,
  },
  {
    source: '/dolaczanie-plikow-css-oraz-javascript',
    destination: '/artykuly/jak-stworzyc-motyw-wordpress-006',
    permanent: true,
  },
  {
    source: '/sublime-text-3-motywy',
    destination: '/artykuly/motywy-do-sublime-text-3',
    permanent: true,
  },
  {
    source: '/naglowek-oraz-stopka-motywu-wordpress',
    destination: '/artykuly/jak-stworzyc-motyw-wordpress-007',
    permanent: true,
  },
  {
    source: '/nawigacja-w-motywie-wordpress',
    destination: '/artykuly/jak-stworzyc-motyw-wordpress-008',
    permanent: true,
  },
  {
    source: '/wtyczki-sublime-text-3',
    destination: '/artykuly/wtyczki-do-sublime-text-3',
    permanent: true,
  },
  {
    source: '/zmienne-w-czystym-css',
    destination: '/artykuly/zmienne-w-czystym-css',
    permanent: true,
  },
  {
    source: '/tworzenie-edytowanych-podstron',
    destination: '/artykuly/jak-stworzyc-motyw-wordpress-009',
    permanent: true,
  },
  {
    source: '/efekt-parallax-w-czystym-css',
    destination: '/artykuly/efekt-parallax-w-czystym-css',
    permanent: true,
  },
  {
    source: '/swietne-czcionki',
    destination: '/artykuly/swietne-fonty',
    permanent: true,
  },
  {
    source: '/dodatki-dla-tworcow-stron-internetowych',
    destination: '/artykuly/dodatki-dla-tworcow-stron-internetowych',
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
