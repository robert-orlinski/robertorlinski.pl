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
  {
    source: '/wyswietlanie-meta-danych',
    destination: '/artykuly/jak-stworzyc-motyw-wordpress-010',
    permanent: true,
  },
  {
    source: '/10-darmowych-szablonow-psd',
    destination: '/artykuly/10-darmowych-szablonow-psd',
    permanent: true,
  },
  {
    source: '/pojawianie-sie-elementow',
    destination: '/artykuly/efekt-pojawiania-sie-elementow',
    permanent: true,
  },
  {
    source: '/wycinanie-elementow-dzieki-clip-path',
    destination: '/artykuly/wycinanie-elementow-dzieki-clip-path',
    permanent: true,
  },
  {
    source: '/obrazek-wyrozniajacy',
    destination: '/artykuly/jak-stworzyc-motyw-wordpress-011',
    permanent: true,
  },
  {
    source: '/efekt-maszyny-do-pisania',
    destination: '/artykuly/efekt-maszyny-do-pisania',
    permanent: true,
  },
  {
    source: '/biblioteki-animacjami',
    destination: '/artykuly/biblioteki-z-animacjami',
    permanent: true,
  },
  {
    source: '/archiwa',
    destination: '/artykuly/jak-stworzyc-motyw-wordpress-012',
    permanent: true,
  },
  {
    source: '/preloader',
    destination: '/artykuly/preloader-w-czystym-js',
    permanent: true,
  },
  {
    source: '/pasek-postepu-ktory-zwieksza-sie-przewijania-strony-internetowej',
    destination: '/artykuly/pasek-postepu-ktory-zwieksza-sie-przewijania-strony-internetowej',
    permanent: true,
  },
  {
    source: '/biblioteka-do-tworzenia-karuzeli',
    destination: '/artykuly/siema-js',
    permanent: true,
  },
  {
    source: '/10-efektow-uzytych-na-zdjeciach',
    destination: '/artykuly/10-efektow-uzytych-na-zdjeciach',
    permanent: true,
  },
  {
    source: '/10-gier-ktore-ucza-tworzenia-stron',
    destination: '/artykuly/10-gier-pomagajacych-w-nauce-jsa-i-cssa',
    permanent: true,
  },
  {
    source: '/formularz-wyszukiwania',
    destination: '/artykuly/jak-stworzyc-motyw-wordpress-013',
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
