import styled from 'styled-components';

import VisuallyHiddenElement from 'Components/VisuallyHiddenElement';
import EnvelopeContainer from 'Components/EnvelopeContainer';
import SectionTitle from 'Components/SectionTitle';
import Blockquote from 'Components/Blockquote';
import Highlight from 'Components/Highlight';
import Wrapper from 'Components/Wrapper';
import Link from 'Components/Link';
import H3 from 'Components/H3';
import H4 from 'Components/H4';
import H5 from 'Components/H5';
import P from 'Components/P';

import { to } from 'Devices';

const NewsletterExample = () => (
  <Wrapper withSpaceAbove withSpaceBelow id="przykladowe-wydanie">
    <Title>Jak dokładnie to wygląda?</Title>
    <Container as="article" size="small">
      <EnvelopeContainer>
        <VisuallyHiddenElement as="header">
          <H3>Przykład newslettera:</H3>
        </VisuallyHiddenElement>
        <P>Cześć ☀️</P>
        <P>
          W tym wydaniu, wymienię 7 pytań, które są w stanie dać Ci tonę plusów na rozmowach
          kwalifikacyjnych i naprawdę dobrze poznać konkretne firmy. Jeśli planujesz w bliższej lub
          dalszej przyszłości aplikować do pracy, w której pisze się kod, to na pewno Ci się
          przydadzą!
        </P>
        <Blockquote>
          <P>
            W swojej historii zawodowej, miałem okazję rekrutować programistów, jak i sam nieraz
            brałem udział w rozmowach rekrutacyjnych.
          </P>
          <P>
            I z wszystkich tych doświadczeń, wyciągnąłem kilka pytań, które zostały zadane mi lub
            zadałem je samodzielnie - pytań, które były w stanie odmienić bieg całej rozmowy
            kwalifikacyjnej!
          </P>
        </Blockquote>
        <P>Przejdźmy do rzeczy 🚀</P>
        <P>(Link do materiałów, na które ostatnio wpadłem, będą na końcu maila - jak zwykle ✨)</P>
        <H4>Jak mogę stać się idealnym kandydatem na to stanowisko?</H4>
        <P>
          Uważam, że nie ma lepszego pytania, które można zadać na rozmowie kwalifikacyjnej. Serio.
        </P>
        <P>
          Nie dość, że pokażesz, że zależy Ci mocniej, to jeszcze naprowadzisz rekrutera lub
          rekruterkę na tory, na których skupicie się na ważnych dla danej firmy obszarach Twojego
          doświadczenia, a nie takich, które wydają się istotne dla Ciebie lub po prostu pojawiły
          się w toku rozmowy.
        </P>
        <P>
          Sam raz znalazłem się w sytuacji, gdzie zadanie tego pytania zmieniło bieg całej rozmowy
          rekrutacyjnej o 180 stopni, bo z drugą osobą w końcu zaczynaliśmy rozmawiać o tym co dla
          niej naprawdę istotne.
        </P>
        <H4>Po czym poznam, że dobrze wykonuję swoją pracę?</H4>
        <P>
          Kolejne pytanie, kolejny plus dla Ciebie i kolejne cenne informacje o firmie, do której
          aplikujesz.
        </P>
        <P>
          Plus dla Ciebie - znów pokazujesz, że Ci zależy. Chcesz wiedzieć, czy wykonujesz dobrą
          robotę, co jest jasnym sygnałem, że <b>chcesz wykonywać dobrą robotę</b>.
        </P>
        <P>
          A dodatkowo, dowiesz się sporo o podejściu do jakości w danej firmie, strukturze
          zarządczej i managerskiej, strukturze Twojego przyszłego zespołu i o tym, czy w danym
          miejscu bardziej liczy się proaktywność, czy kompleksowe wykonywanie poleceń. Same mega
          cenne informacje.
        </P>
        <H4>Jaki jest przeciętny staż pracy osoby na moim stanowisku?</H4>
        <P>
          Proste pytanie, na które czym prostszą odpowiedź dostaniesz, tym lepiej możesz myśleć o
          danej organizacji, do której się rekrutujesz. Jeśli jednak dostaniesz pokrętną i zawiłą
          odpowiedź, wiesz, że coś może być na rzeczy.
        </P>
        <P>
          Ale jeśli jednak otrzymasz konkretne wartości (w rodzaju roku, dwóch lat, pięciu, itp.),
          to na ich podstawie bardzo sprawnie możesz wywnioskować, czy inne osoby chcą pracować tam
          gdzie Ty, również po pewnym czasie.
        </P>
        <P>I oczywiście, jeśli coś dodatkowo budzi Twoje wątpliwości, zawsze możesz dopytać.</P>
        <H4>Czy Wasi programiści mają czas na rozwój i szukanie najlepszych rozwiązań?</H4>
        <P>
          Pytanie dotyczy zarówno benefitów w rodzaju budżetu rozwojowego, szkoleń wewnętrznych,
          webinarów i tym podobnych, jak i czasu czystej pracy.
        </P>
        <P>
          I z mojej perspektywy, ta ostatnia kwestia jest ważniejsza, niż wszystkie pozostałe razem
          wzięte.
        </P>
        <P>
          Powie Ci, czy dana firma pracuje bardziej na zasadzie "robimy najszybciej, jak to możliwe
          i w miarę dobrze", czy jednak osoby, które pracują na aplikowanym przez Ciebie stanowisku,
          mogą już teraz szukać najlepszych rozwiązań, eksperymentować i regularnie wymieniać się
          zdobytą w tym procesie wiedzą.
        </P>
        <H4>Jak wygląda przeciętny dzień pracy na moim stanowisku?</H4>
        <P>
          Jak często będę musiał uczestniczyć w spotkaniach? Ile czasu mam na pracę głęboką? Czy
          muszę cały czas siedzieć pod Slackiem, czy jednak mogę nie zawsze być responsywnym, aby
          skupić się na konkretnym zadaniu?
        </P>
        <P>
          Czy akceptowana jest praca asynchroniczna, a jeśli nie, to jak luźne będą godziny, w
          których będę wykonywać wszelkie zadania dla Waszej firmy?
        </P>
        <P>Wszystkie te wątpliwości, powinno rozwiać wymienione w podtytule pytanie!</P>
        <H4>
          Jak dużą częścią mojej pracy będzie utrzymanie kodu, a jak dużą tworzenie nowych funkcji?
        </H4>
        <P>
          Mało z nas lubi pracę z kodem legacy, a ci z nas, którezy dobrze się w nim czują, mimo
          wszystko woleliby wiedzieć, że to właśnie z nim będą głównie pracować.
        </P>
        <P>
          Dlatego nieocenionym jest pytanie o stosunek nowych feature'ów, wypuszczanych na
          aplikowanym stanowisku, do utrzymania już istniejących.
        </P>
        <P>
          Jeśli to drugie, to na przykład 80%, otrzymujesz jasny sygnał, że masz do czynienia z
          firmą działającą głównie w legacy, o czym warto mieć świadomość, przed pierwszym dniem
          pracy.
        </P>
        <H4>Czy Ty naprawdę lubisz swoją pracę?</H4>
        <P>
          Pytanie, które sam bardzo lubię zadawać na koniec rozmowy rekrutacyjnej - przełamuje
          dodatkowe lody z osobą, która Cię rekrutuje i daje Ci dodatkowy, może trochę bardziej
          osobisty obraz o samej firmie.
        </P>
        <P>
          Dzięki temu pytaniu nie dość, że poznasz zdanie o danej organizacji od pojedynczej osoby,
          która w niej pracuje; wymienisz się dodatkowymi doświadczeniami; to jeszcze zostaniesz w
          jej głowie jako ktoś, kto zainteresował się również jej prywatnym zdaniem.
        </P>
        <P>
          A to może sprawić, że jej zrobi się milej, a Ty zbudujesz z nią jeszcze lepszą relację (co
          chcesz zrobić, bo to ta osoba przekazuje feedback o Tobie dalej lub sama jest już
          decyzyjna).
        </P>
        <H4>To będzie tyle z pytań, teraz mam dla Ciebie jeszcze kilka obiecanych linków 💥</H4>
        <H5>
          1.{' '}
          <Link href="https://css-tricks.com/next-gen-css-container/" isUnderlineVisible>
            Next Gen CSS: @container
          </Link>
        </H5>
        <P>
          Funkcja eksperymentalna, ale jedna z tych, które jeśli staną się powszechne, to zatrzęsą
          CSSem 💥
        </P>
        <P>
          W skrócie, @container, pozwala nam definiować media queries, ale zależnie od kontenera,
          zawierającego konkretny element lub elementy, a nie ekranu (jak w przypadku @media).
          Kontenera, czyli w tym przypadku elementu będącego bezpośrednim rodzicem elementu
          najbardziej nadrzędnego, z tych, które są zapisane w konkretnym media container query.
        </P>
        <H5>
          2.{' '}
          <Link href="https://www.caniemail.com/" isUnderlineVisible>
            Can I email
          </Link>
        </H5>
        <P>Czy kiedykolwiek przyszło Ci kodować templatkę maila?</P>
        <P>
          Jeśli tak, to pewnie zdajesz sobie sprawę, jak niewdzięczne to zadanie - wymaga łamania
          ogromu reguł, dobrych dla standardowych stron internetowych, tworzenia nadmiarowego kodu i
          testowania, które zabiera często więcej czasu, niż samo kodowanie.
        </P>
        <P>
          Ale jest coś, co Ci pomoże w tym zadaniu, gdy te kiedykolwiek pojawi się jeszcze w Twojej
          pracy - strona, którą podrzucam w podtytule.
        </P>
        <P>
          Czyli{' '}
          <Link href="https://caniuse.com/" isUnderlineVisible>
            Can I Use
          </Link>
          , które wszyscy kochamy, ale dla maili! Pozwala wpisać konkretny tag HTMLa lub właściwość
          CSSa i sprawdzić, które narzędzia do otwierania maili je wspierają.
        </P>
        <H5>
          3.{' '}
          <Link href="https://open.spotify.com/episode/1A0I5eY6VVAhe6xrNsj5TL" isUnderlineVisible>
            The "Hardcore Year" Approach to $10k/Month in Revenue with Andrey Azimov of Sheet2Site
          </Link>
        </H5>
        <P>
          Bardzo inspirująca rozmowa w ramach podcastu Indie Hackers z Andreyem Azimovem -
          człowieczkiem z Ukrainy, który od 5 lat żyje jako cyfrowy nomada, a w marcu 2018 roku
          postanowił zrezygnować z etatu i pracować przez rok tak bardzo jak to tylko możliwe i w
          tym czasie tworzyć własne produkty.
        </P>
        <P>
          Do tej pory zrobił ich kilkanaście, a w tamten rok doprowadził do stanu, w którym nie
          musiał myśleć o powrocie na etat. Sporo inspiracji, przede wszystkim pokazujących inne niż
          jesteśmy przyzwyczajeni, bardziej "spartańskie" podejście do tworzenia produktów on-line.
          Mocno polecam 💪
        </P>
        <H5>
          4.{' '}
          <Link
            href="https://overreacted.io/making-setinterval-declarative-with-react-hooks/"
            isUnderlineVisible
          >
            Making setInterval Declarative with React Hooks
          </Link>
        </H5>
        <P>
          Jeśli kiedykolwiek przyszło Ci korzystać z funkcji <Highlight>setInterval()</Highlight> w
          projekcie Reactowym, to zapewne masz świadomość, że nie działa ona tak, jak z pozoru
          mogłoby się wydawać, że zadziała - albo nic nie robi, albo zatrzymuje się po pierwszym
          wykonaniu 🧐 O tych problemach możesz poczytać w podlinkowanym artykule.
        </P>
        <P>
          Dodatkowo autor pokazuje, jak można utworzyć <b>własny hook</b> z działającym interwałem,
          który później bardzo niezwykle łatwo można reużywać - sam z takiego hooku korzystam w
          projektach, gdzie wykorzystuję wspomnianą funkcję.
        </P>
        <H5>
          5.{' '}
          <Link href="https://undraw.co/illustrations" isUnderlineVisible>
            UnDraw Illustations
          </Link>
        </H5>
        <P>Zbiór z toną cudownych ilustracji w .svg. I co najlepsze - do wolnego użytku!</P>
        <P>
          Gdy w przyszłości zdarzy się tak, że będziesz tworzyć design strony internetowej lub
          aplikacji dla siebie, albo swojego klienta lub klientki, to koniecznie zajrzyj do tego
          zbioru. Znajdziesz tu sporo ilustracji, które taki design bardzo ładnie urozmaicą ✨
        </P>
        <P>Dzięki wielkie za dziś!</P>
      </EnvelopeContainer>
    </Container>
  </Wrapper>
);

const Title = styled(SectionTitle)`
  margin-bottom: 1.2em;
`;

const Container = styled(Wrapper)`
  padding: 2.5rem;
  box-shadow: 0px 11px 43px 0 var(--brand-color-brightened);

  background-color: #fff;

  @media ${to.tablet} {
    padding: 2rem;
  }
`;

export default NewsletterExample;
