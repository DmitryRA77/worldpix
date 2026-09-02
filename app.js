/*
=========================================================
WORLDPIX — APP
Version 0.6
=========================================================
*/

let currentLanguage =
    localStorage.getItem("worldpix_language") || "en";

let selectedCountry = null;
let selectedCity = null;


/* =======================================================
   LANGUAGE
======================================================= */

const SUPPORTED_LANGUAGES = [
    "en",
    "ru",
    "de",
    "fr",
    "es",
    "it",
    "pt",
    "tr",
    "zh",
    "ja",
    "ko",
    "ar"
];


function setLanguage(language) {

    if (!SUPPORTED_LANGUAGES.includes(language)) {
        language = "en";
    }

    currentLanguage = language;

    localStorage.setItem(
        "worldpix_language",
        currentLanguage
    );

    document.documentElement.lang = currentLanguage;

    document.documentElement.dir =
        currentLanguage === "ar" ? "rtl" : "ltr";

    updateInterface();

    showCountryScreen();
}


/* =======================================================
   LOCALIZED NAME
======================================================= */

function localized(item) {

    return getLocalizedName(
        item,
        currentLanguage
    );
}


/* =======================================================
   TRANSLATIONS
======================================================= */

const UI = {

    en: {
        countries: "Countries",
        cities: "Cities",
        searchCountry: "Search country...",
        searchCity: "Search city...",
        chooseCountry: "Choose a country",
        chooseCity: "Choose a city",
        back: "Back",
        changeLanguage: "Change language",
        selectedLocation: "Selected location",
        openMap: "Open map",
        plots: "Digital plots",
        population: "Population"
    },

    ru: {
        countries: "Страны",
        cities: "Города",
        searchCountry: "Поиск страны...",
        searchCity: "Поиск города...",
        chooseCountry: "Выберите страну",
        chooseCity: "Выберите город",
        back: "Назад",
        changeLanguage: "Сменить язык",
        selectedLocation: "Выбранная локация",
        openMap: "Открыть карту",
        plots: "Цифровые участки",
        population: "Население"
    },

    de: {
        countries: "Länder",
        cities: "Städte",
        searchCountry: "Land suchen...",
        searchCity: "Stadt suchen...",
        chooseCountry: "Land auswählen",
        chooseCity: "Stadt auswählen",
        back: "Zurück",
        changeLanguage: "Sprache ändern",
        selectedLocation: "Ausgewählter Ort",
        openMap: "Karte öffnen",
        plots: "Digitale Grundstücke",
        population: "Bevölkerung"
    },

    fr: {
        countries: "Pays",
        cities: "Villes",
        searchCountry: "Rechercher un pays...",
        searchCity: "Rechercher une ville...",
        chooseCountry: "Choisissez un pays",
        chooseCity: "Choisissez une ville",
        back: "Retour",
        changeLanguage: "Changer de langue",
        selectedLocation: "Lieu sélectionné",
        openMap: "Ouvrir la carte",
        plots: "Terrains numériques",
        population: "Population"
    },

    es: {
        countries: "Países",
        cities: "Ciudades",
        searchCountry: "Buscar país...",
        searchCity: "Buscar ciudad...",
        chooseCountry: "Elige un país",
        chooseCity: "Elige una ciudad",
        back: "Atrás",
        changeLanguage: "Cambiar idioma",
        selectedLocation: "Ubicación seleccionada",
        openMap: "Abrir mapa",
        plots: "Parcelas digitales",
        population: "Población"
    },

    it: {
        countries: "Paesi",
        cities: "Città",
        searchCountry: "Cerca paese...",
        searchCity: "Cerca città...",
        chooseCountry: "Scegli un paese",
        chooseCity: "Scegli una città",
        back: "Indietro",
        changeLanguage: "Cambia lingua",
        selectedLocation: "Posizione selezionata",
        openMap: "Apri mappa",
        plots: "Terreni digitali",
        population: "Popolazione"
    },

    pt: {
        countries: "Países",
        cities: "Cidades",
        searchCountry: "Pesquisar país...",
        searchCity: "Pesquisar cidade...",
        chooseCountry: "Escolha um país",
        chooseCity: "Escolha uma cidade",
        back: "Voltar",
        changeLanguage: "Mudar idioma",
        selectedLocation: "Local selecionado",
        openMap: "Abrir mapa",
        plots: "Terrenos digitais",
        population: "População"
    },

    tr: {
        countries: "Ülkeler",
        cities: "Şehirler",
        searchCountry: "Ülke ara...",
        searchCity: "Şehir ara...",
        chooseCountry: "Bir ülke seçin",
        chooseCity: "Bir şehir seçin",
        back: "Geri",
        changeLanguage: "Dili değiştir",
        selectedLocation: "Seçilen konum",
        openMap: "Haritayı aç",
        plots: "Dijital parseller",
        population: "Nüfus"
    },

    zh: {
        countries: "国家",
        cities: "城市",
        searchCountry: "搜索国家...",
        searchCity: "搜索城市...",
        chooseCountry: "选择国家",
        chooseCity: "选择城市",
        back: "返回",
        changeLanguage: "更改语言",
        selectedLocation: "已选择位置",
        openMap: "打开地图",
        plots: "数字地块",
        population: "人口"
    },

    ja: {
        countries: "国",
        cities: "都市",
        searchCountry: "国を検索...",
        searchCity: "都市を検索...",
        chooseCountry: "国を選択",
        chooseCity: "都市を選択",
        back: "戻る",
        changeLanguage: "言語を変更",
        selectedLocation: "選択した場所",
        openMap: "地図を開く",
        plots: "デジタル区画",
        population: "人口"
    },

    ko: {
        countries: "국가",
        cities: "도시",
        searchCountry: "국가 검색...",
        searchCity: "도시 검색...",
        chooseCountry: "국가 선택",
        chooseCity: "도시 선택",
        back: "뒤로",
        changeLanguage: "언어 변경",
        selectedLocation: "선택한 위치",
        openMap: "지도 열기",
        plots: "디지털 구역",
        population: "인구"
    },

    ar: {
        countries: "الدول",
        cities: "المدن",
        searchCountry: "البحث عن دولة...",
        searchCity: "البحث عن مدينة...",
        chooseCountry: "اختر دولة",
        chooseCity: "اختر مدينة",
        back: "رجوع",
        changeLanguage: "تغيير اللغة",
        selectedLocation: "الموقع المحدد",
        openMap: "فتح الخريطة",
        plots: "قطع رقمية",
        population: "السكان"
    }

};


function text(key) {

    return (
        UI[currentLanguage]?.[key] ||
        UI.en[key] ||
        key
    );
}


/* =======================================================
   DOM HELPERS
======================================================= */

function find(...ids) {

    for (const id of ids) {

        const element = document.getElementById(id);

        if (element) return element;
    }

    return null;
}


function showOnly(screen) {

    const screens = [
        "languageScreen",
        "countryScreen",
        "cityScreen",
        "mapScreen",
        "homeScreen"
    ];

    screens.forEach(id => {

        const element =
            document.getElementById(id);

        if (element) {

            element.style.display =
                id === screen ? "" : "none";
        }

    });
}


/* =======================================================
   LANGUAGE SCREEN
======================================================= */

function showLanguageScreen() {

    showOnly("languageScreen");

    const buttons =
        document.querySelectorAll(
            "[data-language]"
        );

    buttons.forEach(button => {

        button.onclick = () => {

            setLanguage(
                button.dataset.language
            );

        };

    });
}


/* =======================================================
   COUNTRY SCREEN
======================================================= */

function showCountryScreen() {

    showOnly("countryScreen");

    renderCountries();

    setupCountrySearch();
}


function renderCountries(search = "") {

    const container =
        find(
            "countryList",
            "countriesList",
            "countryGrid",
            "countries"
        );

    if (!container) return;

    const query =
        search.trim().toLocaleLowerCase(
            currentLanguage
        );

    const countries =
        WORLDPIX_LOCATIONS.filter(country => {

            const name =
                localized(country)
                    .toLocaleLowerCase(
                        currentLanguage
                    );

            return name.includes(query);

        });


    container.innerHTML = "";


    if (countries.length === 0) {

        container.innerHTML = `
            <div class="empty-result">
                ${text("countries")}
            </div>
        `;

        return;
    }


    countries.forEach(country => {

        const button =
            document.createElement("button");

        button.className = "location-card";

        button.type = "button";

        button.innerHTML = `
            <span class="location-name">
                ${localized(country)}
            </span>

            <span class="location-arrow">
                ›
            </span>
        `;


        button.onclick = () => {

            selectedCountry = country;

            showCityScreen();

        };


        container.appendChild(button);

    });

}


function setupCountrySearch() {

    const input =
        find(
            "countrySearch",
            "searchCountry",
            "country-search"
        );

    if (!input) return;


    input.placeholder =
        text("searchCountry");


    input.oninput = () => {

        renderCountries(
            input.value
        );

    };

}


/* =======================================================
   CITY SCREEN
======================================================= */

function showCityScreen() {

    showOnly("cityScreen");

    renderCities();

    setupCitySearch();

    updateCityHeader();
}


function renderCities(search = "") {

    const container =
        find(
            "cityList",
            "citiesList",
            "cityGrid",
            "cities"
        );

    if (!container || !selectedCountry) return;


    const query =
        search.trim().toLocaleLowerCase(
            currentLanguage
        );


    const cities =
        selectedCountry.cities.filter(city => {

            const name =
                localized(city)
                    .toLocaleLowerCase(
                        currentLanguage
                    );

            return name.includes(query);

        });


    container.innerHTML = "";


    cities.forEach(city => {

        const button =
            document.createElement("button");

        button.className = "location-card";

        button.type = "button";


        button.innerHTML = `

            <span class="location-name">
                ${localized(city)}
            </span>

            <span class="location-population">
                ${text("population")}:
                ${formatPopulation(city.population)}
            </span>

        `;


        button.onclick = () => {

            selectedCity = city;

            openCityMap();

        };


        container.appendChild(button);

    });

}


function setupCitySearch() {

    const input =
        find(
            "citySearch",
            "searchCity",
            "city-search"
        );

    if (!input) return;


    input.placeholder =
        text("searchCity");


    input.oninput = () => {

        renderCities(
            input.value
        );

    };

}


function updateCityHeader() {

    const elements =
        document.querySelectorAll(
            "[data-country-name]"
        );

    elements.forEach(element => {

        element.textContent =
            localized(selectedCountry);

    });

}


/* =======================================================
   MAP
======================================================= */

function openCityMap() {

    showOnly("mapScreen");

    updateMapInformation();

    createDemoMap();
}


function updateMapInformation() {

    if (!selectedCountry || !selectedCity) {
        return;
    }


    const countryName =
        localized(selectedCountry);

    const cityName =
        localized(selectedCity);


    const countryElements =
        document.querySelectorAll(
            "[data-selected-country]"
        );


    countryElements.forEach(element => {

        element.textContent =
            countryName;

    });


    const cityElements =
        document.querySelectorAll(
            "[data-selected-city]"
        );


    cityElements.forEach(element => {

        element.textContent =
            cityName;

    });


    const locationElements =
        document.querySelectorAll(
            "[data-selected-location]"
        );


    locationElements.forEach(element => {

        element.textContent =
            `${countryName} → ${cityName}`;

    });

}


/* =======================================================
   DEMO MAP
======================================================= */

function createDemoMap() {

    const map =
        find(
            "mapGrid",
            "map",
            "plotGrid"
        );

    if (!map) return;


    /*
      IMPORTANT:

      This is only a visual prototype.

      We DO NOT create 100,000,000 DOM elements.

      Later the real map will use a virtualized
      rendering system connected to Supabase.
    */


    map.innerHTML = "";


    const fragment =
        document.createDocumentFragment();


    const amount = 225;


    for (let i = 0; i < amount; i++) {

        const plot =
            document.createElement("button");

        plot.className = "plot";

        plot.type = "button";

        plot.dataset.plot =
            i + 1;


        plot.onclick = () => {

            selectDemoPlot(plot);

        };


        fragment.appendChild(plot);

    }


    map.appendChild(fragment);

}


function selectDemoPlot(plot) {

    document
        .querySelectorAll(".plot.selected")
        .forEach(item => {

            item.classList.remove("selected");

        });


    plot.classList.add("selected");


    const number =
        plot.dataset.plot;


    const info =
        find(
            "plotInfo",
            "selectedPlot",
            "plotDetails"
        );


    if (info) {

        info.textContent =
            `${text("plots")}: #${number}`;

    }

}


/* =======================================================
   BACK BUTTONS
======================================================= */

function goBackToCountries() {

    selectedCountry = null;

    selectedCity = null;

    showCountryScreen();

}


function goBackToCities() {

    selectedCity = null;

    showCityScreen();

}


function goBackToLanguage() {

    showLanguageScreen();

}


/* =======================================================
   GLOBAL BUTTON EVENTS
======================================================= */

function setupNavigation() {


    document
        .querySelectorAll(
            "[data-back-country]"
        )
        .forEach(button => {

            button.onclick =
                goBackToCountries;

        });


    document
        .querySelectorAll(
            "[data-back-city]"
        )
        .forEach(button => {

            button.onclick =
                goBackToCities;

        });


    document
        .querySelectorAll(
            "[data-change-language]"
        )
        .forEach(button => {

            button.onclick =
                goBackToLanguage;

        });

}


/* =======================================================
   UPDATE INTERFACE
======================================================= */

function updateInterface() {

    document
        .querySelectorAll(
            "[data-i18n]"
        )
        .forEach(element => {

            const key =
                element.dataset.i18n;

            element.textContent =
                text(key);

        });


    document
        .querySelectorAll(
            "[data-i18n-placeholder]"
        )
        .forEach(element => {

            const key =
                element.dataset.i18nPlaceholder;

            element.placeholder =
                text(key);

        });


    document.documentElement.lang =
        currentLanguage;


    document.documentElement.dir =
        currentLanguage === "ar"
            ? "rtl"
            : "ltr";

}


/* =======================================================
   FORMAT POPULATION
======================================================= */

function formatPopulation(number) {

    if (!number) return "—";


    if (number >= 1000000) {

        const value =
            number / 1000000;

        return (
            value
                .toFixed(
                    value % 1 === 0 ? 0 : 1
                )
            + "M"
        );

    }


    if (number >= 1000) {

        return (
            Math.round(number / 1000)
            + "K"
        );

    }


    return String(number);

}


/* =======================================================
   INIT
======================================================= */

function initWorldpix() {

    console.log(
        "WORLDPIX 0.6 started"
    );

    console.log(
        "Countries:",
        WORLDPIX_LOCATIONS.length
    );

    console.log(
        "Cities:",
        getAllCities().length
    );


    updateInterface();

    setupNavigation();


    /*
      If language screen exists,
      start there only for a new user.

      Returning users go directly
      to country selection.
    */

    const savedLanguage =
        localStorage.getItem(
            "worldpix_language"
        );


    if (!savedLanguage) {

        showLanguageScreen();

    } else {

        showCountryScreen();

    }

}


/* =======================================================
   START
======================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initWorldpix
    );

} else {

    initWorldpix();

}
