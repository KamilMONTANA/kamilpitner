export interface ServiceItem {
  id: string;
  badge: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
  highlight?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  duration: string;
}

export interface ReviewToolItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  idealFor: string;
  icon: "card" | "stand" | "tag" | "link";
  highlight?: boolean;
}

export interface ReviewsAutomationConfig {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  stats: { value: string; label: string; sublabel: string }[];
  tools: ReviewToolItem[];
  howItWorks: { step: string; title: string; desc: string }[];
  compatibilityText: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  tagline: string;
  phone: string;
  phoneRaw: string; // for tel: links
  email: string;
  location: string;
  statusText: string;
  isAvailable: boolean;
  services: ServiceItem[];
  analyticsFeatures: {
    title: string;
    description: string;
    items: string[];
  };
  benefits: {
    title: string;
    description: string;
    agencyVsFreelance: {
      withKamil: string[];
      withAgency: string[];
    };
  };
  reviewsAutomation: ReviewsAutomationConfig;
  processSteps: StepItem[];
  faq: FaqItem[];
}

export const siteConfig: SiteConfig = {
  name: "Kamil Pitner",
  role: "Strony WWW • Google & FB Ads • Wizytówki Google • Karty NFC",
  tagline: "Tworzę nowoczesne strony internetowe, prowadzę dochodowe kampanie Google & Facebook Ads oraz pozycjonuję wizytówki w Mapach Google z wykorzystaniem kart zbliżeniowych NFC.",
  phone: "+48 600 000 000",
  phoneRaw: "+48600000000",
  email: "kontakt@kamilpitner.pl",
  location: "Polska / Cały kraj (100% online)",
  statusText: "Dostępny do nowych projektów w tym miesiącu",
  isAvailable: true,

  services: [
    {
      id: "strony-www",
      badge: "Strony Internetowe",
      title: "Strony WWW, które sprzedają",
      shortDesc: "Nowoczesne, błyskawiczne strony internetowe zaprojektowane tak, aby klient od razu zadzwonił lub wysłał zapytanie.",
      longDesc: "Tworzę strony, które otwierają się natychmiast na każdym smartfonie. Bez ociężałych, psujących się starych systemów i wiecznych problemów technicznych. Odwiedzający nie traci cierpliwości czekając na załadowanie oferty – w ułamku sekundy widzi czym się zajmujesz, dlaczego warto Ci zaufać i jednym ruchem dzwoni lub wysyła formularz wyceny. Do tego otrzymujesz przejrzysty panel, w którym sam zmienisz ofertę czy cennik.",
      deliverables: [
        "Indywidualny projekt graficzny dopasowany do Twojej branży",
        "Perfekcyjne wyświetlanie na telefonach i tabletach (ponad 80% ruchu ze smartfonów)",
        "Błyskawiczne ładowanie – strona otwiera się w ułamku sekundy",
        "Szybki kontakt: bezpośredni telefon + prosty formularz wyceny",
        "Prosty, bezpieczny panel do samodzielnej edycji tekstów i cennika",
        "Pełne wdrożenie, domena, poczta i opieka – nie musisz się na niczym znać"
      ],
      metrics: [
        { label: "Czas ładowania", value: "< 0.5 sekundy" },
        { label: "Wyświetlanie", value: "100% pod telefony" },
        { label: "Główny cel", value: "Telefony i zapytania" }
      ],
      highlight: true,
    },
    {
      id: "reklamy-ads",
      badge: "Płatne Reklamy",
      title: "Kampanie Google & Facebook Ads",
      shortDesc: "Płatny ruch, który przynosi zysk, a nie tylko kliknięcia. Twoja oferta trafia prosto do osób szukających Twojej usługi.",
      longDesc: "Uruchamiam reklamy, które trafiają prosto do klientów z portfelem w ręku. Nie przepalam Twojego budżetu na puste wyświetlenia – każda wydana złotówka ma konkretny cel: wygenerować telefon, zapytanie ofertowe lub bezpośrednią sprzedaż.",
      deliverables: [
        "Precyzyjny dobór fraz, których używają klienci szukający Twoich usług",
        "Chwytliwe teksty reklamowe, które wyróżniają Cię na tle lokalnej konkurencji",
        "Bieżąca kontrola stawek i odcinanie słów, które nie przynoszą zapytań",
        "Przejrzyste comiesięczne podsumowanie: wiesz dokładnie ile zarobiłeś z reklam",
        "Budżet na reklamy jest w 100% Twój – zero ukrytych prowizji od wydatków"
      ],
      metrics: [
        { label: "Cel kampanii", value: "Nowe Zlecenia" },
        { label: "Rozliczenie", value: "Jasne & Bez prowizji" },
        { label: "Efekt", value: "Klienci od 1. dnia" }
      ],
      highlight: true,
    },
    {
      id: "wizytowki-google",
      badge: "Lokalna Dominacja",
      title: "Wizytówki Google & Mapy",
      shortDesc: "Bądź pierwszym wyborem w swoim mieście. Gdy klient w Twojej okolicy szuka fachowca, Twoja firma pojawia się na samej górze.",
      longDesc: "Profil Firmy w Google to dla lokalnego przedsiębiorcy najpotężniejsze bezpłatne źródło zleceń. Kompleksowo optymalizuję Twoją wizytówkę w Mapach Google, aby wyprzedzała konkurencję i generowała stały, bezpłatny napływ telefonów od lokalnych mieszkańców.",
      deliverables: [
        "Pełne uzupełnienie i profesjonalna optymalizacja Profilu Firmy w Google",
        "Dopasowanie usług i lokalizacji tak, by wyświetlać się w całym Twoim mieście i powiecie",
        "Wdrożenie zbliżeniowych kart NFC i stojaków do błyskawicznego zbierania opinii 5★",
        "Wypozycjonowanie firmy do pierwszej trójki w Mapach Google w Twojej okolicy",
        "Ochrona profilu przed nieuczciwą konkurencją i fałszywymi zgłoszeniami"
      ],
      metrics: [
        { label: "Pozycja w mieście", value: "Top 3 w Mapach" },
        { label: "Źródło zleceń", value: "Lokalni Mieszkańcy" },
        { label: "Koszt kliknięcia", value: "0 zł (Ruch bezpłatny)" }
      ],
      highlight: true,
    },
    {
      id: "opinie",
      badge: "Opinie i Zaufanie",
      title: "Opinie Google i Karty NFC",
      shortDesc: "Automatyczne zbieranie ocen 5★ za pomocą kart zbliżeniowych NFC i stojaków.",
      longDesc: "Zdobądź dziesiątki pozytywnych opinii od zadowolonych klientów. Dostarczam fizyczne karty zbliżeniowe NFC oraz stojaki na biurko – klient przykłada telefon i w 5 sekund wystawia ocenę 5★.",
      deliverables: [
        "Fizyczne karty zbliżeniowe NFC z Twoim logo dla pracowników lub kierowców",
        "Eleganckie stojaki na ladę, biurko lub do recepcji",
        "Bezpośredni link i kod QR do szybkiego wystawienia oceny",
        "Wzrost wiarygodności, który przekonuje niezdecydowanych klientów"
      ],
      metrics: [
        { label: "Czas wystawienia", value: "5 sekund" },
        { label: "Format", value: "Karty NFC & Stojaki" },
        { label: "Cel", value: "Setki opinii 5★" }
      ],
      highlight: true,
    }
  ],

  analyticsFeatures: {
    title: "Wiesz dokładnie, skąd dzwonią Twoi klienci",
    description: "Koniec z działaniem na ślepo i zgadywaniem, czy marketing działa. Wdrażam system, dzięki któremu dokładnie wiesz, ile telefonów wykonali klienci ze strony, które reklamy przyniosły zlecenia i na czym zarabiasz najwięcej. Wszystko w prostych słowach, bez technicznego bełkotu.",
    items: [
      "Dokładne zliczanie połączeń telefonicznych wykonanych ze strony",
      "Śledzenie, które reklamy przynoszą płacących klientów, a które należy wyłączyć",
      "Wiesz z jakiego miasta i dzielnicy dzwonią do Ciebie najczęściej",
      "Ochrona Twojego budżetu przed niepotrzebnymi wydatkami na puste kliknięcia",
      "Krótkie, czytelne podsumowania – czarno na białym widzisz swój zysk"
    ]
  },

  benefits: {
    title: "Dlaczego bezpośrednia współpraca ze mną?",
    description: "Nie jestem molochem z dziesiątkami menedżerów. Współpracując ze mną, rozmawiasz bezpośrednio z osobą, która projektuje Twoją stronę, prowadzi kampanie i optymalizuje widoczność w Google.",
    agencyVsFreelance: {
      withKamil: [
        "Rozmawiasz bezpośrednio ze specjalistą – zero pośredników i 'głuchego telefonu'",
        "Ekspresowy czas reakcji – odbieram telefon i reaguję od ręki",
        "Brak ukrytych kosztów korporacyjnych i narzutów agencji",
        "100% elastyczności i dopasowania do dynamiki Twojej firmy",
        "Płacisz za realne efekty i bezpośrednie zaangażowanie"
      ],
      withAgency: [
        "Kontakt przez account managerów, którzy nie znają technicznych szczegółów",
        "Długie procedury i oczekiwanie na proste poprawki dniami lub tygodniami",
        "Wysokie koszty stałe wynikające z utrzymania biur i zarządu",
        "Przekazywanie projektów niedoświadczonym stażystom",
        "Skupienie na wskaźnikach próżności (odsłony) zamiast na realnych telefonach"
      ]
    }
  },

  reviewsAutomation: {
    badge: "Fizyczne Narzędzia do Opinii Google",
    title: "Zbliż telefon i zbieraj 5 gwiazdek w 5 sekund.",
    subtitle: "Karty zbliżeniowe NFC, eleganckie stojaki na ladę i wodoodporne tagi QR, które automatyzują pozyskiwanie recenzji w Google.",
    description: "92% klientów sprawdza opinie w Google przed wyborem lokalnej firmy, ale tylko 5% zadowolonych osób pamięta, by wystawić ocenę po powrocie do domu. Tradycyjna prośba 'proszę znaleźć nas w Google' przegrywa z brakiem czasu. Inteligentne nośniki NFC usuwają wszelkie bariery: klient przykłada telefon, a na jego ekranie natychmiast pojawia się okienko oceny Twojego Profilu Firmy w Google z zaznaczonymi 5 gwiazdkami!",
    stats: [
      {
        value: "+340%",
        label: "Więcej opinii w Google",
        sublabel: "Średni wzrost liczby recenzji w pierwszych 30 dniach po wdrożeniu kart zbliżeniowych"
      },
      {
        value: "5 sek.",
        label: "Czas na wystawienie opinii",
        sublabel: "Zero wyszukiwania firmy, zero ręcznego wpisywania adresu URL lub nazwy"
      },
      {
        value: "100%",
        label: "Zgodności ze smartfonami",
        sublabel: "Działa natychmiast na iPhone i Androidzie bez pobierania jakiejkolwiek aplikacji"
      },
      {
        value: "Top 3",
        label: "Pozycja w Mapach Google",
        sublabel: "Świeże i regularne opinie to kluczowy powód, dla którego Google poleca Twoją firmę na samej górze"
      }
    ],
    tools: [
      {
        id: "karty-nfc",
        badge: "Bestseller dla zespołów",
        title: "Karty Wizytówkowe Zbliżeniowe 5★",
        subtitle: "Elegancka, trwała karta formatu płatniczego ze zbliżeniowym chipem",
        description: "Najwygodniejsze narzędzie do zbierania opinii w bezpośrednim kontakcie z klientem. Ty lub Twoi pracownicy macie ją zawsze pod ręką – w portfelu, kieszeni lub za etui telefonu. Wystarczy zbliżyć smartfon klienta, by otworzyć bezpośredni formularz 5★.",
        features: [
          "Działa zbliżeniowo bezdotykowo na odległość 2-4 cm",
          "Zero baterii i zero ładowania – karta działa bezterminowo",
          "Działa błyskawicznie nawet przez grube etui ochronne telefonu",
          "Elegancki, matowy design premium z Twoim logo i danymi"
        ],
        idealFor: "Kelnerzy, serwisanci, hydraulicy, monterzy, kurierzy, taksówkarze, agenci nieruchomości, rzemieślnicy, doradcy 1-na-1",
        icon: "card",
        highlight: true
      },
      {
        id: "stojaki-qr-nfc",
        badge: "Na ladę i recepcję",
        title: "Stojaki na Ladę (Zbliżenie + Kod QR)",
        subtitle: "Elegancki ekspozytor, przy którym klienci sami zostawiają oceny",
        description: "Stylowy stojak na ladę recepcyjną, biurko lub stolik w lokalu. Klient może zbliżyć telefon lub zeskanować aparat. Przyciąga wzrok klienta w kluczowym momencie – podczas płatności lub po skończonej usłudze.",
        features: [
          "Dwa sposoby użycia: zbliżenie telefonu lub szybki kod QR",
          "Trwały, odporny na zarysowania akryl z czytelnym wezwaniem do oceny",
          "Kompaktowy rozmiar – nie zabiera cennego miejsca na ladzie kasowej",
          "Możliwość zdalnej aktualizacji linku bez konieczności wymiany stojaka"
        ],
        idealFor: "Restauracje, kawiarnie, salony kosmetyczne i fryzjerskie, gabinety stomatologiczne i lekarskie, hotele, kasy sklepowe",
        icon: "stand",
        highlight: true
      },
      {
        id: "naklejki-tagi-nfc",
        badge: "Uniwersalny montaż",
        title: "Wodoodporne Naklejki Zbliżeniowe",
        subtitle: "Trwałe dyski samoprzylepne działające na każdej powierzchni",
        description: "Dyskretne naklejki zbliżeniowe, które działają bez zakłóceń nawet po naklejeniu na metalowe blaty, terminale płatnicze czy szyby. W 100% odporne na wilgoć, deszcz i codzienne przecieranie środkami czyszczącymi.",
        features: [
          "Działają bez zakłóceń na metalu, szkle, drewnie i plastiku",
          "Wodoodporna, wzmocniona powłoka ochronna",
          "Mocny klej – naklejka nie odkleja się przy regularnym myciu",
          "Dyskretny format idealnie pasujący w dowolne miejsce"
        ],
        idealFor: "Stoliki w restauracjach, stanowiska fryzjerskie, drzwi wyjściowe z lokalu, witryny sklepowe, pudełka i opakowania na wynos",
        icon: "tag",
        highlight: false
      },
      {
        id: "direct-link-google",
        badge: "Pełne wdrożenie",
        title: "Gotowy Link Otwierający 5 Gwiazdek",
        subtitle: "Telefon klienta natychmiast wyświetla formularz oceny",
        description: "Sama karta to dopiero początek – najważniejsza jest poprawna konfiguracja. Przygotowuję oficjalny, bezpieczny link Twojego Profilu w Google, który po zbliżeniu telefonu od razu wyświetla okno wystawienia opinii z zaznaczonymi 5 gwiazdkami, zamiast zmuszać klienta do szukania przycisku w profilu.",
        features: [
          "Automatyczne otwieranie okna oceny bezpośrednio w aplikacji Mapy Google",
          "Bezpieczny, krótki adres z szyfrowaniem",
          "Opcjonalny filtr chroniący przed przypadkowymi negatywnymi ocenami",
          "100% zgodności z oficjalnymi wytycznymi i zasadami Google"
        ],
        idealFor: "Każda firma posiadająca wizytówkę w Google i chcąca szybko zdobywać pozytywne opinie",
        icon: "link",
        highlight: false
      }
    ],
    howItWorks: [
      {
        step: "01",
        title: "Klient kończy wizytę lub płaci",
        desc: "W momencie największego zadowolenia z obsługi prosisz klienta o 5 sekund na wystawienie opinii."
      },
      {
        step: "02",
        title: "Zbliża telefon lub skanuje QR",
        desc: "Ekran smartfona natychmiast wyświetla powiadomienie otwierające formularz oceny Twojej firmy w Google."
      },
      {
        step: "03",
        title: "5 gwiazdek ląduje w Twoim profilu",
        desc: "Bez logowania, bez szukania. Nowa pozytywna recenzja buduje autorytet i podnosi pozycję w Mapach Google."
      }
    ],
    compatibilityText: "Współpracuje ze wszystkimi smartfonami iPhone (od iPhone XS/XR wzwyż z iOS 13+) oraz urządzeniami z systemem Android (Samsung, Xiaomi, Huawei, Motorola itd.). Bez aplikacji, bez kabli, bez baterii."
  },

  processSteps: [
    {
      number: "01",
      title: "Krótka rozmowa telefoniczna",
      description: "Dzwonisz lub zostawiasz namiar. W 10-15 minut omawiamy Twój biznes, obecną sytuację i to, czego najbardziej potrzebujesz (strona, reklamy Google/FB czy wizytówka w Mapach Google).",
      duration: "15 minut"
    },
    {
      number: "02",
      title: "Plan działania & Realizacja",
      description: "Przedstawiam prostą i przejrzystą ofertę. Po akceptacji od razu przechodzę do pracy: tworzę stronę, konfiguruję analitykę lub uruchamiam kampanie.",
      duration: "3 - 10 dni"
    },
    {
      number: "03",
      title: "Wdrożenie, telefony & Optymalizacja",
      description: "Projekt rusza na żywo. Twoja oferta zaczyna trafiać do klientów, a my monitorujemy zapytania telefoniczne i stale optymalizujemy wyniki.",
      duration: "Ciągły wzrost"
    }
  ],

  faq: [
    {
      question: "Ile kosztuje stworzenie strony internetowej lub prowadzenie kampanii reklamowych?",
      answer: "Każdy projekt wyceniam indywidualnie po krótkiej rozmowie telefonicznej, w zależności od zakresu. Nie ma u mnie ukrytych opłat ani gwiazdek – przed rozpoczęciem prac znasz dokładny koszt. Zadzwoń, a wstępną wycenę przedstawię Ci już podczas pierwszej rozmowy."
    },
    {
      question: "Jak szybko możemy zacząć współpracę?",
      answer: "Zazwyczaj do prac nad projektem mogę przystąpić w ciągu 24-48 godzin od zatwierdzenia ustaleń. Proste landing page czy konfigurację kampanii realizuję często w kilka dni roboczych."
    },
    {
      question: "Czy do uruchomienia strony lub kampanii muszę mieć gotowe teksty i grafiki?",
      answer: "Nie! Jeśli nie masz przygotowanych materiałów, pomogę Ci opracować chwytliwe nagłówki, perswazyjne teksty oraz dobiorę profesjonalne zdjęcia branżowe."
    },
    {
      question: "Dlaczego polecasz kontakt telefoniczny zamiast formularzy?",
      answer: "W biznesie liczy się czas. 5-minutowa rozmowa pozwala ustalić więcej niż 10 wymienionych maili w ciągu tygodnia. Dzięki temu od razu wiemy, czy i jak mogę Ci pomóc, oszczędzając Twój cenny czas."
    },
    {
      question: "Czy po wykonaniu strony mam do niej pełne prawa?",
      answer: "Oczywiście. Po zakończeniu projektu i rozliczeniu otrzymujesz 100% praw do kodu, grafik oraz dostępów. Nie ma żadnego uzależnienia ani umów 'wiążących' na lata."
    },
    {
      question: "Jak wygląda rozliczenie budżetu reklamowego w Google i Facebook Ads?",
      answer: "Pełna transparentność. Budżet na kliknięcia wpłacasz bezpośrednio na swoje konto w Google lub Meta – masz 100% wglądu w każdą wydaną złotówkę. Moje wynagrodzenie to osobna, stała stawka za przygotowanie, optymalizację i prowadzenie kampanii bez ukrytych prowizji."
    },
    {
      question: "Jak działają karty zbliżeniowe NFC do zbierania opinii w Google?",
      answer: "Karta działa dokładnie tak samo jak zbliżeniowe płatności telefonem (Apple Pay / Google Pay). Wewnątrz karty ukryty jest bezpieczny mikrochip NFC. Kiedy klient zbliży swój smartfon na odległość 2-3 cm, na ekranie telefonu natychmiast pojawia się powiadomienie otwierające okno recenzji Twojego Profilu Firmy w Google z zaznaczonymi 5 gwiazdkami. Całość zajmuje dosłownie 5 sekund!"
    },
    {
      question: "Czy klient musi instalować jakąkolwiek aplikację, żeby karta NFC zadziałała?",
      answer: "Nie! W technologii NFC nie są potrzebne żadne aplikacje, rejestracje ani dodatkowe uprawnienia. Wszystkie nowoczesne smartfony (iPhone od 2018 roku oraz niemal 100% modeli z systemem Android) mają moduł NFC włączony domyślnie. Dla starszych telefonów stojaki i naklejki posiadają dodatkowo czytelny kod QR."
    }
  ]
};
