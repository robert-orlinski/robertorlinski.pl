const externalRedirects = [
  {
    source: '/youtube',
    destination: 'https://www.youtube.com/channel/UC_qgM2UztycBZGQLNaGs9Jg',
    permanent: true,
  },
];

const pagesRedirects = [
  {
    source: '/wszystkie-wpisy',
    destination: '/artykuly',
    permanent: true,
  },
  {
    source: '/mobile-apps',
    destination: '/artykuly/building-mobile-apps-with-no-time-and-experience',
    permanent: true,
  },
];

const topicsRedirects = [
  {
    source: '/tematy/filozofia',
    destination: '/tematy/przemyslenia',
    permanent: true,
  },
  {
    source: '/tematy/nauka',
    destination: '/tematy/rozwoj',
    permanent: true,
  },
];

const goodiesRedirects = [
  {
    source: '/7-narzedzi-dla-szybkich-stron',
    destination: 'https://static.robertorlinski.pl/7-narzedzi-dla-szybkich-stron.pdf',
    permanent: true,
  },
];

const postsRedirects = [
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
    destination: '/artykuly/narzedzia-dla-produktywnosci',
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
    source: '/przyspieszamy-strone-wordpressie-5-sprawdzonych-sposobow',
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
    source: '/wpisy-na-blogu',
    destination: '/artykuly/jak-stworzyc-motyw-wordpress-005',
    permanent: true,
  },
  {
    source: '/dobre-praktyki-css',
    destination: '/artykuly/dobre-praktyki-css',
    permanent: true,
  },
  {
    source: '/15-dobrych-praktyk-css',
    destination: '/artykuly/dobre-praktyki-css',
    permanent: true,
  },
  {
    source: '/css-dobre-praktyki',
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
    source: '/nawigacja-aktywacja-i-wyswietlenie',
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
    source: '/swietne-czcionki-importowane-r',
    destination: '/artykuly/swietne-fonty',
    permanent: true,
  },
  {
    source: '/dodatki-dla-tworcow-stron-internetowych',
    destination: '/artykuly/dodatki-dla-tworcow-stron-internetowych',
    permanent: true,
  },
  {
    source: '/dodatki-dla-tworcow-stron',
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
    source: '/animacja-elementu-przewijania',
    destination: '/artykuly/efekt-pojawiania-sie-elementow',
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
    destination: '/artykuly/progress-bar',
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
  {
    source: '/5-dobrych-praktyk-wordpress',
    destination: '/artykuly/5-dobrych-praktyk-wordpress',
    permanent: true,
  },
  {
    source: '/nawigacja-ktora-chowa-sie-podczas-przewijania-w-dol-i-ukazuje-gdy-scrollujemy-w-gore',
    destination: '/artykuly/nawigacja-chowajaca-sie-podczas-przewijania-w-dol',
    permanent: true,
  },
  {
    source: '/nawigacja-podczas-przewijania',
    destination: '/artykuly/nawigacja-chowajaca-sie-podczas-przewijania-w-dol',
    permanent: true,
  },
  {
    source: '/pozyskiwanie-zlecen-jako-freelancer',
    destination: '/artykuly/pozyskiwanie-zlecen-jako-freelancer',
    permanent: true,
  },
  {
    source: '/10-wtyczek-do-visual-studio-code',
    destination: '/artykuly/wtyczki-do-visual-studio-code',
    permanent: true,
  },
  {
    source: '/wtyczki-do-visual-studio-code',
    destination: '/artykuly/wtyczki-do-visual-studio-code',
    permanent: true,
  },
  {
    source: '/7-mixin-scss',
    destination: '/artykuly/7-mixin-scss',
    permanent: true,
  },
  {
    source: '/7-mixin-sass',
    destination: '/artykuly/7-mixin-scss',
    permanent: true,
  },
  {
    source: '/metodologia-bem',
    destination: '/artykuly/metodologia-bem',
    permanent: true,
  },
  {
    source: '/freelance-dlaczego-warto',
    destination: '/artykuly/freelance-dlaczego-warto',
    permanent: true,
  },
  {
    source: '/tworzenie-stron-do-edycji-bez-kodu',
    destination: '/artykuly/tworzenie-edytowalnych-stron-w-wordpress',
    permanent: true,
  },
  {
    source:
      '/3-niezawodne-sposoby-na-tworzenie-stron-opartych-o-wordpress-i-mozliwych-do-prostej-edycji-bez-zagladania-w-kod',
    destination: '/artykuly/tworzenie-edytowalnych-stron-w-wordpress',
    permanent: true,
  },
  {
    source: '/hamburger-menu',
    destination: '/artykuly/hamburger-menu',
    permanent: true,
  },
  {
    source: '/reset-hasla-do-panelu-wordpress',
    destination: '/artykuly/reset-hasla-do-panelu-wordpress',
    permanent: true,
  },
  {
    source: '/pole-tekstowe-oraz-lista-wyboru-w-jednym',
    destination: '/artykuly/pole-tekstowe-oraz-lista-wyboru-w-jednym',
    permanent: true,
  },
  {
    source: '/ograniczanie-wyswietlanego-tekstu',
    destination: '/artykuly/ograniczanie-wyswietlanego-tekstu',
    permanent: true,
  },
  {
    source: '/10-motywow-wordpress',
    destination: '/artykuly/10-motywow-wordpress',
    permanent: true,
  },
  {
    source: '/responsywny-kwadrat-w-css',
    destination: '/artykuly/responsywny-kwadrat-w-css',
    permanent: true,
  },
  {
    source: '/przyklejona-nawigacja-przykrywa-kotwice',
    destination: '/artykuly/przyklejona-nawigacja-przykrywa-kotwice',
    permanent: true,
  },
  {
    source: '/progress-bar',
    destination: '/artykuly/progress-bar',
    permanent: true,
  },
  {
    source: '/wordpress-gutenberg-008',
    destination: '/artykuly/wordpress-gutenberg-008',
    permanent: true,
  },
  {
    source: '/wordpress-gutenberg-007',
    destination: '/artykuly/wordpress-gutenberg-007',
    permanent: true,
  },
  {
    source: '/wordpress-gutenberg-006',
    destination: '/artykuly/wordpress-gutenberg-006',
    permanent: true,
  },
  {
    source: '/wordpress-gutenberg-005',
    destination: '/artykuly/wordpress-gutenberg-005',
    permanent: true,
  },
  {
    source: '/wordpress-gutenberg-009',
    destination: '/artykuly/wordpress-gutenberg-009',
    permanent: true,
  },
  {
    source: '/wordpress-gutenberg-010',
    destination: '/artykuly/wordpress-gutenberg-010',
    permanent: true,
  },
  {
    source: '/plynne-przewijanie-witryny',
    destination: '/artykuly/plynne-przewijanie-witryny',
    permanent: true,
  },
  {
    source: '/jak-szybciej-renderowac-strony-internetowe',
    destination: '/artykuly/jak-szybciej-renderowac-strony-internetowe',
    permanent: true,
  },
  {
    source: '/wordpress-gutenberg-004',
    destination: '/artykuly/wordpress-gutenberg-004',
    permanent: true,
  },
  {
    source: '/nauka-wordpressa-w-2021-roku',
    destination: '/artykuly/nauka-wordpressa-w-2021-roku',
    permanent: true,
  },
  {
    source: '/parcel-bundler',
    destination: '/artykuly/parcel-bundler',
    permanent: true,
  },
  {
    source: '/wordpress-gutenberg-003',
    destination: '/artykuly/wordpress-gutenberg-003',
    permanent: true,
  },
  {
    source: '/wartosci-z-wordpressa-w-plikach-css-i-js',
    destination: '/artykuly/wartosci-z-wordpressa-w-plikach-css-i-js',
    permanent: true,
  },
  {
    source: '/wordpress-gutenberg-002',
    destination: '/artykuly/wordpress-gutenberg-002',
    permanent: true,
  },
  {
    source: '/wordpress-gutenberg-001',
    destination: '/artykuly/wordpress-gutenberg-001',
    permanent: true,
  },
  {
    source: '/kontrola-zasobow-pobieranych-przez-wtyczki',
    destination: '/artykuly/kontrola-zasobow-pobieranych-przez-wtyczki',
    permanent: true,
  },
  {
    source: '/jak-zasypiac-szybciej-dzieki-prokrastynacji',
    destination: '/artykuly/jak-zasypiac-szybciej-dzieki-prokrastynacji',
    permanent: true,
  },
  {
    source: '/programista-wolontariusz',
    destination: '/artykuly/programista-wolontariusz',
    permanent: true,
  },
  {
    source: '/trudno-o-cenniejszego-wolontariusza-niz-programista/',
    destination: '/artykuly/programista-wolontariusz',
    permanent: true,
  },
  {
    source: '/gutenberg-ukochane-dziecko-wordpressa',
    destination: '/artykuly/gutenberg-ukochane-dziecko-wordpressa',
    permanent: true,
  },
  {
    source: '/variable-fonts',
    destination: '/artykuly/variable-fonts',
    permanent: true,
  },
  {
    source: '/jak-skopiowac-strone-internetowa-na-swoj-komputer',
    destination: '/artykuly/jak-skopiowac-strone-internetowa-na-swoj-komputer',
    permanent: true,
  },
  {
    source: '/materialy-do-nauki-jezyka-angielskiego',
    destination: '/artykuly/materialy-do-nauki-jezyka-angielskiego',
    permanent: true,
  },
  {
    source: '/mater-do-nauki-jezyka-angielskiego',
    destination: '/artykuly/materialy-do-nauki-jezyka-angielskiego',
    permanent: true,
  },
  {
    source: '/jak-nie-siedziec-ciagle-w-telefonie',
    destination: '/artykuly/jak-nie-siedziec-ciagle-w-telefonie',
    permanent: true,
  },
  {
    source: '/focus-widoczny-tylko-podczas-nawigowania-klawiatura',
    destination: '/artykuly/focus-widoczny-tylko-podczas-nawigowania-klawiatura',
    permanent: true,
  },
  {
    source: '/focus-widoczny-tylko-podczas-nawigowania-klawiatura',
    destination: '/artykuly/focus-widoczny-tylko-podczas-nawigowania-klawiatura',
    permanent: true,
  },
  {
    source: '/nowa-wersja',
    destination: '/artykuly/nowa-wersja-robertorlinski.pl',
    permanent: true,
  },
  {
    source: '/meetup-lekcje',
    destination: '/artykuly/wystapienie-na-meetupie-lekcje',
    permanent: true,
  },
  {
    source: '/wszystkie-artykuly',
    destination: '/artykuly',
    permanent: true,
  },
];

const dynamicPathsRedirects = [
  {
    source: '/(\\d{4})/(\\d{2})/(\\d{2})/:slug',
    destination: '/artykuly/:slug',
    permanent: false,
  },
];

const redirects = pagesRedirects.concat(
  externalRedirects,
  topicsRedirects,
  goodiesRedirects,
  postsRedirects,
  dynamicPathsRedirects,
);

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return redirects;
  },
};
