/*
  WORLDPIX — LOCATIONS DATABASE
  Version 0.6

  IMPORTANT:
  - IDs never depend on language.
  - Names are localized.
  - Ukraine is intentionally excluded.
  - Purchases will later be enabled only for eligible cities.
*/

const WORLDPIX_LOCATIONS = [

  // =========================================================
  // RUSSIA
  // =========================================================

  {
    id: "russia",
    names: {
      en: "Russia",
      ru: "Россия",
      de: "Russland",
      fr: "Russie",
      es: "Rusia",
      it: "Russia",
      pt: "Rússia",
      tr: "Rusya",
      zh: "俄罗斯",
      ja: "ロシア",
      ko: "러시아",
      ar: "روسيا"
    },

    cities: [

      {
        id: "moscow",
        names: {
          en: "Moscow",
          ru: "Москва",
          de: "Moskau",
          fr: "Moscou",
          es: "Moscú",
          it: "Mosca",
          pt: "Moscou",
          tr: "Moskova",
          zh: "莫斯科",
          ja: "モスクワ",
          ko: "모스크바",
          ar: "موسكو"
        },
        population: 14500000,
        lat: 55.7558,
        lng: 37.6173
      },

      {
        id: "saint_petersburg",
        names: {
          en: "Saint Petersburg",
          ru: "Санкт-Петербург",
          de: "Sankt Petersburg",
          fr: "Saint-Pétersbourg",
          es: "San Petersburgo",
          it: "San Pietroburgo",
          pt: "São Petersburgo",
          tr: "Sankt-Peterburg",
          zh: "圣彼得堡",
          ja: "サンクトペテルブルク",
          ko: "상트페테르부르크",
          ar: "سانت بطرسبرغ"
        },
        population: 5600000,
        lat: 59.9343,
        lng: 30.3351
      },

      {
        id: "novosibirsk",
        names: {
          en: "Novosibirsk",
          ru: "Новосибирск",
          de: "Nowosibirsk",
          fr: "Novossibirsk",
          es: "Novosibirsk",
          it: "Novosibirsk",
          pt: "Novosibirsk",
          tr: "Novosibirsk",
          zh: "新西伯利亚",
          ja: "ノヴォシビルスク",
          ko: "노보시비르스크",
          ar: "نوفوسيبيرسك"
        },
        population: 1700000,
        lat: 55.0084,
        lng: 82.9357
      }

    ]
  },


  // =========================================================
  // UNITED STATES
  // =========================================================

  {
    id: "united_states",
    names: {
      en: "United States",
      ru: "США",
      de: "Vereinigte Staaten",
      fr: "États-Unis",
      es: "Estados Unidos",
      it: "Stati Uniti",
      pt: "Estados Unidos",
      tr: "Amerika Birleşik Devletleri",
      zh: "美国",
      ja: "アメリカ合衆国",
      ko: "미국",
      ar: "الولايات المتحدة"
    },

    cities: [

      {
        id: "new_york",
        names: {
          en: "New York",
          ru: "Нью-Йорк",
          de: "New York",
          fr: "New York",
          es: "Nueva York",
          it: "New York",
          pt: "Nova York",
          tr: "New York",
          zh: "纽约",
          ja: "ニューヨーク",
          ko: "뉴욕",
          ar: "نيويورك"
        },
        population: 18900000,
        lat: 40.7128,
        lng: -74.0060
      },

      {
        id: "los_angeles",
        names: {
          en: "Los Angeles",
          ru: "Лос-Анджелес",
          de: "Los Angeles",
          fr: "Los Angeles",
          es: "Los Ángeles",
          it: "Los Angeles",
          pt: "Los Angeles",
          tr: "Los Angeles",
          zh: "洛杉矶",
          ja: "ロサンゼルス",
          ko: "로스앤젤레스",
          ar: "لوس أنجلوس"
        },
        population: 12800000,
        lat: 34.0522,
        lng: -118.2437
      },

      {
        id: "chicago",
        names: {
          en: "Chicago",
          ru: "Чикаго",
          de: "Chicago",
          fr: "Chicago",
          es: "Chicago",
          it: "Chicago",
          pt: "Chicago",
          tr: "Chicago",
          zh: "芝加哥",
          ja: "シカゴ",
          ko: "시카고",
          ar: "شيكاغو"
        },
        population: 9200000,
        lat: 41.8781,
        lng: -87.6298
      },

      {
        id: "houston",
        names: {
          en: "Houston",
          ru: "Хьюстон",
          de: "Houston",
          fr: "Houston",
          es: "Houston",
          it: "Houston",
          pt: "Houston",
          tr: "Houston",
          zh: "休斯顿",
          ja: "ヒューストン",
          ko: "휴스턴",
          ar: "هيوستن"
        },
        population: 7600000,
        lat: 29.7604,
        lng: -95.3698
      },

      {
        id: "miami",
        names: {
          en: "Miami",
          ru: "Майами",
          de: "Miami",
          fr: "Miami",
          es: "Miami",
          it: "Miami",
          pt: "Miami",
          tr: "Miami",
          zh: "迈阿密",
          ja: "マイアミ",
          ko: "마이애미",
          ar: "ميامي"
        },
        population: 6200000,
        lat: 25.7617,
        lng: -80.1918
      }

    ]
  },


  // =========================================================
  // CHINA
  // =========================================================

  {
    id: "china",
    names: {
      en: "China",
      ru: "Китай",
      de: "China",
      fr: "Chine",
      es: "China",
      it: "Cina",
      pt: "China",
      tr: "Çin",
      zh: "中国",
      ja: "中国",
      ko: "중국",
      ar: "الصين"
    },

    cities: [

      {
        id: "beijing",
        names: {
          en: "Beijing",
          ru: "Пекин",
          de: "Peking",
          fr: "Pékin",
          es: "Pekín",
          it: "Pechino",
          pt: "Pequim",
          tr: "Pekin",
          zh: "北京",
          ja: "北京",
          ko: "베이징",
          ar: "بكين"
        },
        population: 22000000,
        lat: 39.9042,
        lng: 116.4074
      },

      {
        id: "shanghai",
        names: {
          en: "Shanghai",
          ru: "Шанхай",
          de: "Shanghai",
          fr: "Shanghai",
          es: "Shanghái",
          it: "Shanghai",
          pt: "Xangai",
          tr: "Şanghay",
          zh: "上海",
          ja: "上海",
          ko: "상하이",
          ar: "شنغهاي"
        },
        population: 30000000,
        lat: 31.2304,
        lng: 121.4737
      },

      {
        id: "guangzhou",
        names: {
          en: "Guangzhou",
          ru: "Гуанчжоу",
          de: "Guangzhou",
          fr: "Canton",
          es: "Cantón",
          it: "Canton",
          pt: "Cantão",
          tr: "Guangzhou",
          zh: "广州",
          ja: "広州",
          ko: "광저우",
          ar: "قوانغتشو"
        },
        population: 28000000,
        lat: 23.1291,
        lng: 113.2644
      },

      {
        id: "shenzhen",
        names: {
          en: "Shenzhen",
          ru: "Шэньчжэнь",
          de: "Shenzhen",
          fr: "Shenzhen",
          es: "Shenzhen",
          it: "Shenzhen",
          pt: "Shenzhen",
          tr: "Shenzhen",
          zh: "深圳",
          ja: "深圳",
          ko: "선전",
          ar: "شنتشن"
        },
        population: 17500000,
        lat: 22.5431,
        lng: 114.0579
      },

      {
        id: "tianjin",
        names: {
          en: "Tianjin",
          ru: "Тяньцзинь",
          de: "Tianjin",
          fr: "Tianjin",
          es: "Tianjin",
          it: "Tianjin",
          pt: "Tianjin",
          tr: "Tianjin",
          zh: "天津",
          ja: "天津",
          ko: "톈진",
          ar: "تيانجين"
        },
        population: 14000000,
        lat: 39.3434,
        lng: 117.3616
      }

    ]
  },


  // =========================================================
  // INDIA
  // =========================================================

  {
    id: "india",
    names: {
      en: "India",
      ru: "Индия",
      de: "Indien",
      fr: "Inde",
      es: "India",
      it: "India",
      pt: "Índia",
      tr: "Hindistan",
      zh: "印度",
      ja: "インド",
      ko: "인도",
      ar: "الهند"
    },

    cities: [

      {
        id: "new_delhi",
        names: {
          en: "New Delhi",
          ru: "Нью-Дели",
          de: "Neu-Delhi",
          fr: "New Delhi",
          es: "Nueva Delhi",
          it: "Nuova Delhi",
          pt: "Nova Deli",
          tr: "Yeni Delhi",
          zh: "新德里",
          ja: "ニューデリー",
          ko: "뉴델리",
          ar: "نيودلهي"
        },
        population: 30000000,
        lat: 28.6139,
        lng: 77.2090
      },

      {
        id: "mumbai",
        names: {
          en: "Mumbai",
          ru: "Мумбаи",
          de: "Mumbai",
          fr: "Mumbai",
          es: "Bombay",
          it: "Mumbai",
          pt: "Mumbai",
          tr: "Mumbai",
          zh: "孟买",
          ja: "ムンバイ",
          ko: "뭄바이",
          ar: "مومباي"
        },
        population: 22000000,
        lat: 19.0760,
        lng: 72.8777
      },

      {
        id: "kolkata",
        names: {
          en: "Kolkata",
          ru: "Колката",
          de: "Kolkata",
          fr: "Calcutta",
          es: "Calcuta",
          it: "Calcutta",
          pt: "Calcutá",
          tr: "Kalküta",
          zh: "加尔各答",
          ja: "コルカタ",
          ko: "콜카타",
          ar: "كولكاتا"
        },
        population: 23000000,
        lat: 22.5726,
        lng: 88.3639
      },

      {
        id: "bengaluru",
        names: {
          en: "Bengaluru",
          ru: "Бенгалуру",
          de: "Bengaluru",
          fr: "Bangalore",
          es: "Bangalore",
          it: "Bangalore",
          pt: "Bangalore",
          tr: "Bengaluru",
          zh: "班加罗尔",
          ja: "ベンガルール",
          ko: "벵갈루루",
          ar: "بنغالورو"
        },
        population: 13000000,
        lat: 12.9716,
        lng: 77.5946
      },

      {
        id: "hyderabad",
        names: {
          en: "Hyderabad",
          ru: "Хайдарабад",
          de: "Hyderabad",
          fr: "Hyderabad",
          es: "Hyderabad",
          it: "Hyderabad",
          pt: "Hyderabad",
          tr: "Haydarabad",
          zh: "海得拉巴",
          ja: "ハイデラバード",
          ko: "하이데라바드",
          ar: "حيدر آباد"
        },
        population: 11000000,
        lat: 17.3850,
        lng: 78.4867
      },

      {
        id: "ahmedabad",
        names: {
          en: "Ahmedabad",
          ru: "Ахмадабад",
          de: "Ahmedabad",
          fr: "Ahmedabad",
          es: "Ahmedabad",
          it: "Ahmedabad",
          pt: "Ahmedabad",
          tr: "Ahmedabad",
          zh: "艾哈迈达巴德",
          ja: "アフマダーバード",
          ko: "아마다바드",
          ar: "أحمد آباد"
        },
        population: 9000000,
        lat: 23.0225,
        lng: 72.5714
      }

    ]
  },


  // =========================================================
  // JAPAN
  // =========================================================

  {
    id: "japan",
    names: {
      en: "Japan",
      ru: "Япония",
      de: "Japan",
      fr: "Japon",
      es: "Japón",
      it: "Giappone",
      pt: "Japão",
      tr: "Japonya",
      zh: "日本",
      ja: "日本",
      ko: "일본",
      ar: "اليابان"
    },

    cities: [

      {
        id: "tokyo",
        names: {
          en: "Tokyo",
          ru: "Токио",
          de: "Tokio",
          fr: "Tokyo",
          es: "Tokio",
          it: "Tokyo",
          pt: "Tóquio",
          tr: "Tokyo",
          zh: "东京",
          ja: "東京",
          ko: "도쿄",
          ar: "طوكيو"
        },
        population: 33000000,
        lat: 35.6762,
        lng: 139.6503
      },

      {
        id: "osaka",
        names: {
          en: "Osaka",
          ru: "Осака",
          de: "Osaka",
          fr: "Osaka",
          es: "Osaka",
          it: "Osaka",
          pt: "Osaka",
          tr: "Osaka",
          zh: "大阪",
          ja: "大阪",
          ko: "오사카",
          ar: "أوساكا"
        },
        population: 19000000,
        lat: 34.6937,
        lng: 135.5023
      },

      {
        id: "nagoya",
        names: {
          en: "Nagoya",
          ru: "Нагоя",
          de: "Nagoya",
          fr: "Nagoya",
          es: "Nagoya",
          it: "Nagoya",
          pt: "Nagoya",
          tr: "Nagoya",
          zh: "名古屋",
          ja: "名古屋",
          ko: "나고야",
          ar: "ناغويا"
        },
        population: 9500000,
        lat: 35.1815,
        lng: 136.9066
      }

    ]
  },


  // =========================================================
  // SOUTH KOREA
  // =========================================================

  {
    id: "south_korea",
    names: {
      en: "South Korea",
      ru: "Южная Корея",
      de: "Südkorea",
      fr: "Corée du Sud",
      es: "Corea del Sur",
      it: "Corea del Sud",
      pt: "Coreia do Sul",
      tr: "Güney Kore",
      zh: "韩国",
      ja: "韓国",
      ko: "대한민국",
      ar: "كوريا الجنوبية"
    },

    cities: [

      {
        id: "seoul",
        names: {
          en: "Seoul",
          ru: "Сеул",
          de: "Seoul",
          fr: "Séoul",
          es: "Seúl",
          it: "Seul",
          pt: "Seul",
          tr: "Seul",
          zh: "首尔",
          ja: "ソウル",
          ko: "서울",
          ar: "سيول"
        },
        population: 22000000,
        lat: 37.5665,
        lng: 126.9780
      },

      {
        id: "busan",
        names: {
          en: "Busan",
          ru: "Пусан",
          de: "Busan",
          fr: "Busan",
          es: "Busan",
          it: "Busan",
          pt: "Busan",
          tr: "Busan",
          zh: "釜山",
          ja: "釜山",
          ko: "부산",
          ar: "بوسان"
        },
        population: 3400000,
        lat: 35.1796,
        lng: 129.0756
      }

    ]
  },


  // =========================================================
  // INDONESIA
  // =========================================================

  {
    id: "indonesia",
    names: {
      en: "Indonesia",
      ru: "Индонезия",
      de: "Indonesien",
      fr: "Indonésie",
      es: "Indonesia",
      it: "Indonesia",
      pt: "Indonésia",
      tr: "Endonezya",
      zh: "印度尼西亚",
      ja: "インドネシア",
      ko: "인도네시아",
      ar: "إندونيسيا"
    },

    cities: [

      {
        id: "jakarta",
        names: {
          en: "Jakarta",
          ru: "Джакарта",
          de: "Jakarta",
          fr: "Jakarta",
          es: "Yakarta",
          it: "Giacarta",
          pt: "Jacarta",
          tr: "Cakarta",
          zh: "雅加达",
          ja: "ジャカルタ",
          ko: "자카르타",
          ar: "جاكرتا"
        },
        population: 42000000,
        lat: -6.2088,
        lng: 106.8456
      }

    ]
  },


  // =========================================================
  // BANGLADESH
  // =========================================================

  {
    id: "bangladesh",
    names: {
      en: "Bangladesh",
      ru: "Бангладеш",
      de: "Bangladesch",
      fr: "Bangladesh",
      es: "Bangladés",
      it: "Bangladesh",
      pt: "Bangladesh",
      tr: "Bangladeş",
      zh: "孟加拉国",
      ja: "バングラデシュ",
      ko: "방글라데시",
      ar: "بنغلاديش"
    },

    cities: [

      {
        id: "dhaka",
        names: {
          en: "Dhaka",
          ru: "Дакка",
          de: "Dhaka",
          fr: "Dacca",
          es: "Daca",
          it: "Dacca",
          pt: "Daca",
          tr: "Dakka",
          zh: "达卡",
          ja: "ダッカ",
          ko: "다카",
          ar: "دكا"
        },
        population: 37000000,
        lat: 23.8103,
        lng: 90.4125
      }

    ]
  },


  // =========================================================
  // PAKISTAN
  // =========================================================

  {
    id: "pakistan",
    names: {
      en: "Pakistan",
      ru: "Пакистан",
      de: "Pakistan",
      fr: "Pakistan",
      es: "Pakistán",
      it: "Pakistan",
      pt: "Paquistão",
      tr: "Pakistan",
      zh: "巴基斯坦",
      ja: "パキスタン",
      ko: "파키스탄",
      ar: "باكستان"
    },

    cities: [

      {
        id: "karachi",
        names: {
          en: "Karachi",
          ru: "Карачи",
          de: "Karatschi",
          fr: "Karachi",
          es: "Karachi",
          it: "Karachi",
          pt: "Carachi",
          tr: "Karaçi",
          zh: "卡拉奇",
          ja: "カラチ",
          ko: "카라치",
          ar: "كراتشي"
        },
        population: 21000000,
        lat: 24.8607,
        lng: 67.0011
      },

      {
        id: "lahore",
        names: {
          en: "Lahore",
          ru: "Лахор",
          de: "Lahore",
          fr: "Lahore",
          es: "Lahore",
          it: "Lahore",
          pt: "Lahore",
          tr: "Lahor",
          zh: "拉合尔",
          ja: "ラホール",
          ko: "라호르",
          ar: "لاهور"
        },
        population: 14000000,
        lat: 31.5204,
        lng: 74.3587
      }

    ]
  },


  // =========================================================
  // EGYPT
  // =========================================================

  {
    id: "egypt",
    names: {
      en: "Egypt",
      ru: "Египет",
      de: "Ägypten",
      fr: "Égypte",
      es: "Egipto",
      it: "Egitto",
      pt: "Egito",
      tr: "Mısır",
      zh: "埃及",
      ja: "エジプト",
      ko: "이집트",
      ar: "مصر"
    },

    cities: [

      {
        id: "cairo",
        names: {
          en: "Cairo",
          ru: "Каир",
          de: "Kairo",
          fr: "Le Caire",
          es: "El Cairo",
          it: "Il Cairo",
          pt: "Cairo",
          tr: "Kahire",
          zh: "开罗",
          ja: "カイロ",
          ko: "카이로",
          ar: "القاهرة"
        },
        population: 26000000,
        lat: 30.0444,
        lng: 31.2357
      }

    ]
  },


  // =========================================================
  // BRAZIL
  // =========================================================

  {
    id: "brazil",
    names: {
      en: "Brazil",
      ru: "Бразилия",
      de: "Brasilien",
      fr: "Brésil",
      es: "Brasil",
      it: "Brasile",
      pt: "Brasil",
      tr: "Brezilya",
      zh: "巴西",
      ja: "ブラジル",
      ko: "브라질",
      ar: "البرازيل"
    },

    cities: [

      {
        id: "sao_paulo",
        names: {
          en: "São Paulo",
          ru: "Сан-Паулу",
          de: "São Paulo",
          fr: "São Paulo",
          es: "São Paulo",
          it: "San Paolo",
          pt: "São Paulo",
          tr: "São Paulo",
          zh: "圣保罗",
          ja: "サンパウロ",
          ko: "상파울루",
          ar: "ساو باولو"
        },
        population: 22000000,
        lat: -23.5505,
        lng: -46.6333
      },

      {
        id: "rio_de_janeiro",
        names: {
          en: "Rio de Janeiro",
          ru: "Рио-де-Жанейро",
          de: "Rio de Janeiro",
          fr: "Rio de Janeiro",
          es: "Río de Janeiro",
          it: "Rio de Janeiro",
          pt: "Rio de Janeiro",
          tr: "Rio de Janeiro",
          zh: "里约热内卢",
          ja: "リオデジャネイロ",
          ko: "리우데자네이루",
          ar: "ريو دي جانيرو"
        },
        population: 13000000,
        lat: -22.9068,
        lng: -43.1729
      }

    ]
  },


  // =========================================================
  // MEXICO
  // =========================================================

  {
    id: "mexico",
    names: {
      en: "Mexico",
      ru: "Мексика",
      de: "Mexiko",
      fr: "Mexique",
      es: "México",
      it: "Messico",
      pt: "México",
      tr: "Meksika",
      zh: "墨西哥",
      ja: "メキシコ",
      ko: "멕시코",
      ar: "المكسيك"
    },

    cities: [

      {
        id: "mexico_city",
        names: {
          en: "Mexico City",
          ru: "Мехико",
          de: "Mexiko-Stadt",
          fr: "Mexico",
          es: "Ciudad de México",
          it: "Città del Messico",
          pt: "Cidade do México",
          tr: "Mexico City",
          zh: "墨西哥城",
          ja: "メキシコシティ",
          ko: "멕시코시티",
          ar: "مكسيكو سيتي"
        },
        population: 22000000,
        lat: 19.4326,
        lng: -99.1332
      }
    ]
  },


  // =========================================================
  // TURKEY
  // =========================================================

  {
    id: "turkey",
    names: {
      en: "Türkiye",
      ru: "Турция",
      de: "Türkei",
      fr: "Turquie",
      es: "Turquía",
      it: "Turchia",
      pt: "Turquia",
      tr: "Türkiye",
      zh: "土耳其",
      ja: "トルコ",
      ko: "튀르키예",
      ar: "تركيا"
    },

    cities: [

      {
        id: "istanbul",
        names: {
          en: "Istanbul",
          ru: "Стамбул",
          de: "Istanbul",
          fr: "Istanbul",
          es: "Estambul",
          it: "Istanbul",
          pt: "Istambul",
          tr: "İstanbul",
          zh: "伊斯坦布尔",
          ja: "イスタンブール",
          ko: "이스탄불",
          ar: "إسطنبول"
        },
        population: 16000000,
        lat: 41.0082,
        lng: 28.9784
      },

      {
        id: "ankara",
        names: {
          en: "Ankara",
          ru: "Анкара",
          de: "Ankara",
          fr: "Ankara",
          es: "Ankara",
          it: "Ankara",
          pt: "Ancara",
          tr: "Ankara",
          zh: "安卡拉",
          ja: "アンカラ",
          ko: "앙카라",
          ar: "أنقرة"
        },
        population: 5800000,
        lat: 39.9334,
        lng: 32.8597
      }

    ]
  },


  // =========================================================
  // GERMANY
  // =========================================================

  {
    id: "germany",
    names: {
      en: "Germany",
      ru: "Германия",
      de: "Deutschland",
      fr: "Allemagne",
      es: "Alemania",
      it: "Germania",
      pt: "Alemanha",
      tr: "Almanya",
      zh: "德国",
      ja: "ドイツ",
      ko: "독일",
      ar: "ألمانيا"
    },

    cities: [

      {
        id: "berlin",
        names: {
          en: "Berlin",
          ru: "Берлин",
          de: "Berlin",
          fr: "Berlin",
          es: "Berlín",
          it: "Berlino",
          pt: "Berlim",
          tr: "Berlin",
          zh: "柏林",
          ja: "ベルリン",
          ko: "베를린",
          ar: "برلين"
        },
        population: 3800000,
        lat: 52.5200,
        lng: 13.4050
      },

      {
        id: "hamburg",
        names: {
          en: "Hamburg",
          ru: "Гамбург",
          de: "Hamburg",
          fr: "Hambourg",
          es: "Hamburgo",
          it: "Amburgo",
          pt: "Hamburgo",
          tr: "Hamburg",
          zh: "汉堡",
          ja: "ハンブルク",
          ko: "함부르크",
          ar: "هامبورغ"
        },
        population: 1900000,
        lat: 53.5511,
        lng: 9.9937
      }
    ]
  },


  // =========================================================
  // FRANCE
  // =========================================================

  {
    id: "france",
    names: {
      en: "France",
      ru: "Франция",
      de: "Frankreich",
      fr: "France",
      es: "Francia",
      it: "Francia",
      pt: "França",
      tr: "Fransa",
      zh: "法国",
      ja: "フランス",
      ko: "프랑스",
      ar: "فرنسا"
    },

    cities: [

      {
        id: "paris",
        names: {
          en: "Paris",
          ru: "Париж",
          de: "Paris",
          fr: "Paris",
          es: "París",
          it: "Parigi",
          pt: "Paris",
          tr: "Paris",
          zh: "巴黎",
          ja: "パリ",
          ko: "파리",
          ar: "باريس"
        },
        population: 11000000,
        lat: 48.8566,
        lng: 2.3522
      },

      {
        id: "marseille",
        names: {
          en: "Marseille",
          ru: "Марсель",
          de: "Marseille",
          fr: "Marseille",
          es: "Marsella",
          it: "Marsiglia",
          pt: "Marselha",
          tr: "Marsilya",
          zh: "马赛",
          ja: "マルセイユ",
          ko: "마르세유",
          ar: "مرسيليا"
        },
        population: 1800000,
        lat: 43.2965,
        lng: 5.3698
      }

    ]
  },


  // =========================================================
  // UNITED KINGDOM
  // =========================================================

  {
    id: "united_kingdom",
    names: {
      en: "United Kingdom",
      ru: "Великобритания",
      de: "Vereinigtes Königreich",
      fr: "Royaume-Uni",
      es: "Reino Unido",
      it: "Regno Unito",
      pt: "Reino Unido",
      tr: "Birleşik Krallık",
      zh: "英国",
      ja: "イギリス",
      ko: "영국",
      ar: "المملكة المتحدة"
    },

    cities: [

      {
        id: "london",
        names: {
          en: "London",
          ru: "Лондон",
          de: "London",
          fr: "Londres",
          es: "Londres",
          it: "Londra",
          pt: "Londres",
          tr: "Londra",
          zh: "伦敦",
          ja: "ロンドン",
          ko: "런던",
          ar: "لندن"
        },
        population: 10000000,
        lat: 51.5074,
        lng: -0.1278
      },

      {
        id: "manchester",
        names: {
          en: "Manchester",
          ru: "Манчестер",
          de: "Manchester",
          fr: "Manchester",
          es: "Mánchester",
          it: "Manchester",
          pt: "Manchester",
          tr: "Manchester",
          zh: "曼彻斯特",
          ja: "マンチェスター",
          ko: "맨체스터",
          ar: "مانشستر"
        },
        population: 2700000,
        lat: 53.4808,
        lng: -2.2426
      }

    ]
  },


  // =========================================================
  // ITALY
  // =========================================================

  {
    id: "italy",
    names: {
      en: "Italy",
      ru: "Италия",
      de: "Italien",
      fr: "Italie",
      es: "Italia",
      it: "Italia",
      pt: "Itália",
      tr: "İtalya",
      zh: "意大利",
      ja: "イタリア",
      ko: "이탈리아",
      ar: "إيطاليا"
    },

    cities: [

      {
        id: "rome",
        names: {
          en: "Rome",
          ru: "Рим",
          de: "Rom",
          fr: "Rome",
          es: "Roma",
          it: "Roma",
          pt: "Roma",
          tr: "Roma",
          zh: "罗马",
          ja: "ローマ",
          ko: "로마",
          ar: "روما"
        },
        population: 4300000,
        lat: 41.9028,
        lng: 12.4964
      },

      {
        id: "milan",
        names: {
          en: "Milan",
          ru: "Милан",
          de: "Mailand",
          fr: "Milan",
          es: "Milán",
          it: "Milano",
          pt: "Milão",
          tr: "Milano",
          zh: "米兰",
          ja: "ミラノ",
          ko: "밀라노",
          ar: "ميلانو"
        },
        population: 3200000,
        lat: 45.4642,
        lng: 9.1900
      }

    ]
  },


  // =========================================================
  // SPAIN
  // =========================================================

  {
    id: "spain",
    names: {
      en: "Spain",
      ru: "Испания",
      de: "Spanien",
      fr: "Espagne",
      es: "España",
      it: "Spagna",
      pt: "Espanha",
      tr: "İspanya",
      zh: "西班牙",
      ja: "スペイン",
      ko: "스페인",
      ar: "إسبانيا"
    },

    cities: [

      {
        id: "madrid",
        names: {
          en: "Madrid",
          ru: "Мадрид",
          de: "Madrid",
          fr: "Madrid",
          es: "Madrid",
          it: "Madrid",
          pt: "Madri",
          tr: "Madrid",
          zh: "马德里",
          ja: "マドリード",
          ko: "마드리드",
          ar: "مدريد"
        },
        population: 6900000,
        lat: 40.4168,
        lng: -3.7038
      },

      {
        id: "barcelona",
        names: {
          en: "Barcelona",
          ru: "Барселона",
          de: "Barcelona",
          fr: "Barcelone",
          es: "Barcelona",
          it: "Barcellona",
          pt: "Barcelona",
          tr: "Barselona",
          zh: "巴塞罗那",
          ja: "バルセロナ",
          ko: "바르셀로나",
          ar: "برشلونة"
        },
        population: 5600000,
        lat: 41.3874,
        lng: 2.1686
      }

    ]
  },


  // =========================================================
  // ARGENTINA
  // =========================================================

  {
    id: "argentina",
    names: {
      en: "Argentina",
      ru: "Аргентина",
      de: "Argentinien",
      fr: "Argentine",
      es: "Argentina",
      it: "Argentina",
      pt: "Argentina",
      tr: "Arjantin",
      zh: "阿根廷",
      ja: "アルゼンチン",
      ko: "아르헨티나",
      ar: "الأرجنتين"
    },

    cities: [

      {
        id: "buenos_aires",
        names: {
          en: "Buenos Aires",
          ru: "Буэнос-Айрес",
          de: "Buenos Aires",
          fr: "Buenos Aires",
          es: "Buenos Aires",
          it: "Buenos Aires",
          pt: "Buenos Aires",
          tr: "Buenos Aires",
          zh: "布宜诺斯艾利斯",
          ja: "ブエノスアイレス",
          ko: "부에노스아이레스",
          ar: "بوينس آيرس"
        },
        population: 15000000,
        lat: -34.6037,
        lng: -58.3816
      }

    ]
  },


  // =========================================================
  // PHILIPPINES
  // =========================================================

  {
    id: "philippines",
    names: {
      en: "Philippines",
      ru: "Филиппины",
      de: "Philippinen",
      fr: "Philippines",
      es: "Filipinas",
      it: "Filippine",
      pt: "Filipinas",
      tr: "Filipinler",
      zh: "菲律宾",
      ja: "フィリピン",
      ko: "필리핀",
      ar: "الفلبين"
    },

    cities: [

      {
        id: "manila",
        names: {
          en: "Manila",
          ru: "Манила",
          de: "Manila",
          fr: "Manille",
          es: "Manila",
          it: "Manila",
          pt: "Manila",
          tr: "Manila",
          zh: "马尼拉",
          ja: "マニラ",
          ko: "마닐라",
          ar: "مانيلا"
        },
        population: 25000000,
        lat: 14.5995,
        lng: 120.9842
      }

    ]
  },


  // =========================================================
  // THAILAND
  // =========================================================

  {
    id: "thailand",
    names: {
      en: "Thailand",
      ru: "Таиланд",
      de: "Thailand",
      fr: "Thaïlande",
      es: "Tailandia",
      it: "Thailandia",
      pt: "Tailândia",
      tr: "Tayland",
      zh: "泰国",
      ja: "タイ",
      ko: "태국",
      ar: "تايلاند"
    },

    cities: [

      {
        id: "bangkok",
        names: {
          en: "Bangkok",
          ru: "Бангкок",
          de: "Bangkok",
          fr: "Bangkok",
          es: "Bangkok",
          it: "Bangkok",
          pt: "Bangcoc",
          tr: "Bangkok",
          zh: "曼谷",
          ja: "バンコク",
          ko: "방콕",
          ar: "بانكوك"
        },
        population: 18000000,
        lat: 13.7563,
        lng: 100.5018
      }

    ]
  },


  // =========================================================
  // VIETNAM
  // =========================================================

  {
    id: "vietnam",
    names: {
      en: "Vietnam",
      ru: "Вьетнам",
      de: "Vietnam",
      fr: "Viêt Nam",
      es: "Vietnam",
      it: "Vietnam",
      pt: "Vietname",
      tr: "Vietnam",
      zh: "越南",
      ja: "ベトナム",
      ko: "베트남",
      ar: "فيتنام"
    },

    cities: [

      {
        id: "ho_chi_minh_city",
        names: {
          en: "Ho Chi Minh City",
          ru: "Хошимин",
          de: "Ho-Chi-Minh-Stadt",
          fr: "Hô Chi Minh-Ville",
          es: "Ciudad Ho Chi Minh",
          it: "Ho Chi Minh",
          pt: "Cidade de Ho Chi Minh",
          tr: "Ho Chi Minh Kenti",
          zh: "胡志明市",
          ja: "ホーチミン市",
          ko: "호찌민시",
          ar: "مدينة هو تشي منه"
        },
        population: 14000000,
        lat: 10.8231,
        lng: 106.6297
      },

      {
        id: "hanoi",
        names: {
          en: "Hanoi",
          ru: "Ханой",
          de: "Hanoi",
          fr: "Hanoï",
          es: "Hanói",
          it: "Hanoi",
          pt: "Hanói",
          tr: "Hanoi",
          zh: "河内",
          ja: "ハノイ",
          ko: "하노이",
          ar: "هانوي"
        },
        population: 8500000,
        lat: 21.0285,
        lng: 105.8542
      }

    ]
  },


  // =========================================================
  // IRAN
  // =========================================================

  {
    id: "iran",
    names: {
      en: "Iran",
      ru: "Иран",
      de: "Iran",
      fr: "Iran",
      es: "Irán",
      it: "Iran",
      pt: "Irã",
      tr: "İran",
      zh: "伊朗",
      ja: "イラン",
      ko: "이란",
      ar: "إيران"
    },

    cities: [

      {
        id: "tehran",
        names: {
          en: "Tehran",
          ru: "Тегеран",
          de: "Teheran",
          fr: "Téhéran",
          es: "Teherán",
          it: "Teheran",
          pt: "Teerã",
          tr: "Tahran",
          zh: "德黑兰",
          ja: "テヘラン",
          ko: "테헤란",
          ar: "طهران"
        },
        population: 10000000,
        lat: 35.6892,
        lng: 51.3890
      }

    ]
  },


  // =========================================================
  // IRAQ
  // =========================================================

  {
    id: "iraq",
    names: {
      en: "Iraq",
      ru: "Ирак",
      de: "Irak",
      fr: "Irak",
      es: "Irak",
      it: "Iraq",
      pt: "Iraque",
      tr: "Irak",
      zh: "伊拉克",
      ja: "イラク",
      ko: "이라크",
      ar: "العراق"
    },

    cities: [

      {
        id: "baghdad",
        names: {
          en: "Baghdad",
          ru: "Багдад",
          de: "Bagdad",
          fr: "Bagdad",
          es: "Bagdad",
          it: "Baghdad",
          pt: "Bagdá",
          tr: "Bağdat",
          zh: "巴格达",
          ja: "バグダッド",
          ko: "바그다드",
          ar: "بغداد"
        },
        population: 8000000,
        lat: 33.3152,
        lng: 44.3661
      }

    ]
  },


  // =========================================================
  // COLOMBIA
  // =========================================================

  {
    id: "colombia",
    names: {
      en: "Colombia",
      ru: "Колумбия",
      de: "Kolumbien",
      fr: "Colombie",
      es: "Colombia",
      it: "Colombia",
      pt: "Colômbia",
      tr: "Kolombiya",
      zh: "哥伦比亚",
      ja: "コロンビア",
      ko: "콜롬비아",
      ar: "كولومبيا"
    },

    cities: [

      {
        id: "bogota",
        names: {
          en: "Bogotá",
          ru: "Богота",
          de: "Bogotá",
          fr: "Bogotá",
          es: "Bogotá",
          it: "Bogotá",
          pt: "Bogotá",
          tr: "Bogota",
          zh: "波哥大",
          ja: "ボゴタ",
          ko: "보고타",
          ar: "بوغوتا"
        },
        population: 11000000,
        lat: 4.7110,
        lng: -74.0721
      },

      {
        id: "medellin",
        names: {
          en: "Medellín",
          ru: "Медельин",
          de: "Medellín",
          fr: "Medellín",
          es: "Medellín",
          it: "Medellín",
          pt: "Medellín",
          tr: "Medellín",
          zh: "麦德林",
          ja: "メデジン",
          ko: "메데인",
          ar: "ميديلين"
        },
        population: 2600000,
        lat: 6.2442,
        lng: -75.5812
      }

    ]
  },


  // =========================================================
  // SOUTH AFRICA
  // =========================================================

  {
    id: "south_africa",
    names: {
      en: "South Africa",
      ru: "Южная Африка",
      de: "Südafrika",
      fr: "Afrique du Sud",
      es: "Sudáfrica",
      it: "Sudafrica",
      pt: "África do Sul",
      tr: "Güney Afrika",
      zh: "南非",
      ja: "南アフリカ",
      ko: "남아프리카 공화국",
      ar: "جنوب أفريقيا"
    },

    cities: [

      {
        id: "johannesburg",
        names: {
          en: "Johannesburg",
          ru: "Йоханнесбург",
          de: "Johannesburg",
          fr: "Johannesburg",
          es: "Johannesburgo",
          it: "Johannesburg",
          pt: "Joanesburgo",
          tr: "Johannesburg",
          zh: "约翰内斯堡",
          ja: "ヨハネスブルグ",
          ko: "요하네스버그",
          ar: "جوهانسبرغ"
        },
        population: 7500000,
        lat: -26.2041,
        lng: 28.0473
      },

      {
        id: "cape_town",
        names: {
          en: "Cape Town",
          ru: "Кейптаун",
          de: "Kapstadt",
          fr: "Le Cap",
          es: "Ciudad del Cabo",
          it: "Città del Capo",
          pt: "Cidade do Cabo",
          tr: "Cape Town",
          zh: "开普敦",
          ja: "ケープタウン",
          ko: "케이프타운",
          ar: "كيب تاون"
        },
        population: 5000000,
        lat: -33.9249,
        lng: 18.4241
      }

    ]
  },


  // =========================================================
  // NIGERIA
  // =========================================================

  {
    id: "nigeria",
    names: {
      en: "Nigeria",
      ru: "Нигерия",
      de: "Nigeria",
      fr: "Nigéria",
      es: "Nigeria",
      it: "Nigeria",
      pt: "Nigéria",
      tr: "Nijerya",
      zh: "尼日利亚",
      ja: "ナイジェリア",
      ko: "나이지리아",
      ar: "نيجيريا"
    },

    cities: [

      {
        id: "lagos",
        names: {
          en: "Lagos",
          ru: "Лагос",
          de: "Lagos",
          fr: "Lagos",
          es: "Lagos",
          it: "Lagos",
          pt: "Lagos",
          tr: "Lagos",
          zh: "拉各斯",
          ja: "ラゴス",
          ko: "라고스",
          ar: "لاغوس"
        },
        population: 15000000,
        lat: 6.5244,
        lng: 3.3792
      },

      {
        id: "abuja",
        names: {
          en: "Abuja",
          ru: "Абуджа",
          de: "Abuja",
          fr: "Abuja",
          es: "Abuya",
          it: "Abuja",
          pt: "Abuja",
          tr: "Abuja",
          zh: "阿布贾",
          ja: "アブジャ",
          ko: "아부자",
          ar: "أبوجا"
        },
        population: 4000000,
        lat: 9.0765,
        lng: 7.3986
      }

    ]
  },


  // =========================================================
  // AUSTRALIA
  // =========================================================

  {
    id: "australia",
    names: {
      en: "Australia",
      ru: "Австралия",
      de: "Australien",
      fr: "Australie",
      es: "Australia",
      it: "Australia",
      pt: "Austrália",
      tr: "Avustralya",
      zh: "澳大利亚",
      ja: "オーストラリア",
      ko: "호주",
      ar: "أستراليا"
    },

    cities: [

      {
        id: "sydney",
        names: {
          en: "Sydney",
          ru: "Сидней",
          de: "Sydney",
          fr: "Sydney",
          es: "Sídney",
          it: "Sydney",
          pt: "Sydney",
          tr: "Sidney",
          zh: "悉尼",
          ja: "シドニー",
          ko: "시드니",
          ar: "سيدني"
        },
        population: 5300000,
        lat: -33.8688,
        lng: 151.2093
      },

      {
        id: "melbourne",
        names: {
          en: "Melbourne",
          ru: "Мельбурн",
          de: "Melbourne",
          fr: "Melbourne",
          es: "Melbourne",
          it: "Melbourne",
          pt: "Melbourne",
          tr: "Melbourne",
          zh: "墨尔本",
          ja: "メルボルン",
          ko: "멜버른",
          ar: "ملبورن"
        },
        population: 5100000,
        lat: -37.8136,
        lng: 144.9631
      }

    ]
  }

];


// =========================================================
// HELPER FUNCTIONS
// =========================================================

function getLocalizedName(item, language) {
  if (!item || !item.names) return "";

  return (
    item.names[language] ||
    item.names.en ||
    Object.values(item.names)[0] ||
    ""
  );
}


function getCountryById(countryId) {
  return WORLDPIX_LOCATIONS.find(
    country => country.id === countryId
  );
}


function getCityById(countryId, cityId) {
  const country = getCountryById(countryId);

  if (!country) return null;

  return country.cities.find(
    city => city.id === cityId
  ) || null;
}


function getAllCities() {
  const result = [];

  WORLDPIX_LOCATIONS.forEach(country => {

    country.cities.forEach(city => {

      result.push({
        ...city,
        countryId: country.id,
        countryNames: country.names
      });

    });

  });

  return result;
}
// =========================================================
// WORLDPIX 0.7 — HINDI + POLISH LOCALIZATION
// =========================================================

const WORLDPIX_EXTRA_LOCALIZATION = {

  // ---------------------------------------------------------
  // COUNTRIES
  // ---------------------------------------------------------

  countries: {

    russia: {
      hi: "रूस",
      pl: "Rosja"
    },

    united_states: {
      hi: "संयुक्त राज्य अमेरिका",
      pl: "Stany Zjednoczone"
    },

    china: {
      hi: "चीन",
      pl: "Chiny"
    },

    india: {
      hi: "भारत",
      pl: "Indie"
    },

    japan: {
      hi: "जापान",
      pl: "Japonia"
    },

    south_korea: {
      hi: "दक्षिण कोरिया",
      pl: "Korea Południowa"
    },

    indonesia: {
      hi: "इंडोनेशिया",
      pl: "Indonezja"
    },

    bangladesh: {
      hi: "बांग्लादेश",
      pl: "Bangladesz"
    },

    pakistan: {
      hi: "पाकिस्तान",
      pl: "Pakistan"
    },

    egypt: {
      hi: "मिस्र",
      pl: "Egipt"
    },

    brazil: {
      hi: "ब्राज़ील",
      pl: "Brazylia"
    },

    mexico: {
      hi: "मेक्सिको",
      pl: "Meksyk"
    },

    turkey: {
      hi: "तुर्की",
      pl: "Turcja"
    },

    germany: {
      hi: "जर्मनी",
      pl: "Niemcy"
    },

    france: {
      hi: "फ़्रांस",
      pl: "Francja"
    },

    united_kingdom: {
      hi: "यूनाइटेड किंगडम",
      pl: "Wielka Brytania"
    },

    italy: {
      hi: "इटली",
      pl: "Włochy"
    },

    spain: {
      hi: "स्पेन",
      pl: "Hiszpania"
    },

    argentina: {
      hi: "अर्जेंटीना",
      pl: "Argentyna"
    },

    philippines: {
      hi: "फ़िलीपींस",
      pl: "Filipiny"
    },

    thailand: {
      hi: "थाईलैंड",
      pl: "Tajlandia"
    },

    vietnam: {
      hi: "वियतनाम",
      pl: "Wietnam"
    },

    iran: {
      hi: "ईरान",
      pl: "Iran"
    },

    iraq: {
      hi: "इराक",
      pl: "Irak"
    },

    colombia: {
      hi: "कोलंबिया",
      pl: "Kolumbia"
    },

    south_africa: {
      hi: "दक्षिण अफ्रीका",
      pl: "Republika Południowej Afryki"
    },

    nigeria: {
      hi: "नाइजीरिया",
      pl: "Nigeria"
    },

    australia: {
      hi: "ऑस्ट्रेलिया",
      pl: "Australia"
    }

  },


  // ---------------------------------------------------------
  // CITIES
  // ---------------------------------------------------------

  cities: {

    moscow: {
      hi: "मॉस्को",
      pl: "Moskwa"
    },

    saint_petersburg: {
      hi: "सेंट पीटर्सबर्ग",
      pl: "Petersburg"
    },

    novosibirsk: {
      hi: "नोवोसिबिर्स्क",
      pl: "Nowosybirsk"
    },

    new_york: {
      hi: "न्यूयॉर्क",
      pl: "Nowy Jork"
    },

    los_angeles: {
      hi: "लॉस एंजिल्स",
      pl: "Los Angeles"
    },

    chicago: {
      hi: "शिकागो",
      pl: "Chicago"
    },

    houston: {
      hi: "ह्यूस्टन",
      pl: "Houston"
    },

    miami: {
      hi: "मियामी",
      pl: "Miami"
    },

    beijing: {
      hi: "बीजिंग",
      pl: "Pekin"
    },

    shanghai: {
      hi: "शंघाई",
      pl: "Szanghaj"
    },

    guangzhou: {
      hi: "ग्वांगझोउ",
      pl: "Kanton"
    },

    shenzhen: {
      hi: "शेनझेन",
      pl: "Shenzhen"
    },

    tianjin: {
      hi: "तियानजिन",
      pl: "Tianjin"
    },

    new_delhi: {
      hi: "नई दिल्ली",
      pl: "Nowe Delhi"
    },

    mumbai: {
      hi: "मुंबई",
      pl: "Mumbaj"
    },

    kolkata: {
      hi: "कोलकाता",
      pl: "Kalkuta"
    },

    bengaluru: {
      hi: "बेंगलुरु",
      pl: "Bengaluru"
    },

    hyderabad: {
      hi: "हैदराबाद",
      pl: "Hajdarabad"
    },

    ahmedabad: {
      hi: "अहमदाबाद",
      pl: "Ahmedabad"
    },

    tokyo: {
      hi: "टोक्यो",
      pl: "Tokio"
    },

    osaka: {
      hi: "ओसाका",
      pl: "Osaka"
    },

    nagoya: {
      hi: "नागोया",
      pl: "Nagoja"
    },

    seoul: {
      hi: "सियोल",
      pl: "Seul"
    },

    busan: {
      hi: "बुसान",
      pl: "Pusan"
    },

    jakarta: {
      hi: "जकार्ता",
      pl: "Dżakarta"
    },

    dhaka: {
      hi: "ढाका",
      pl: "Dhaka"
    },

    karachi: {
      hi: "कराची",
      pl: "Karaczi"
    },

    lahore: {
      hi: "लाहौर",
      pl: "Lahaur"
    },

    cairo: {
      hi: "काहिरा",
      pl: "Kair"
    },

    sao_paulo: {
      hi: "साओ पाउलो",
      pl: "São Paulo"
    },

    rio_de_janeiro: {
      hi: "रियो डी जनेरियो",
      pl: "Rio de Janeiro"
    },

    mexico_city: {
      hi: "मेक्सिको सिटी",
      pl: "Meksyk"
    },

    istanbul: {
      hi: "इस्तांबुल",
      pl: "Stambuł"
    },

    ankara: {
      hi: "अंकारा",
      pl: "Ankara"
    },

    berlin: {
      hi: "बर्लिन",
      pl: "Berlin"
    },

    hamburg: {
      hi: "हैम्बर्ग",
      pl: "Hamburg"
    },

    paris: {
      hi: "पेरिस",
      pl: "Paryż"
    },

    marseille: {
      hi: "मार्सेय",
      pl: "Marsylia"
    },

    london: {
      hi: "लंदन",
      pl: "Londyn"
    },

    manchester: {
      hi: "मैनचेस्टर",
      pl: "Manchester"
    },

    rome: {
      hi: "रोम",
      pl: "Rzym"
    },

    milan: {
      hi: "मिलान",
      pl: "Mediolan"
    },

    madrid: {
      hi: "मैड्रिड",
      pl: "Madryt"
    },

    barcelona: {
      hi: "बार्सिलोना",
      pl: "Barcelona"
    },

    buenos_aires: {
      hi: "ब्यूनस आयर्स",
      pl: "Buenos Aires"
    },

    manila: {
      hi: "मनीला",
      pl: "Manila"
    },

    bangkok: {
      hi: "बैंकॉक",
      pl: "Bangkok"
    },

    ho_chi_minh_city: {
      hi: "हो ची मिन्ह सिटी",
      pl: "Ho Chi Minh"
    },

    hanoi: {
      hi: "हनोई",
      pl: "Hanoi"
    },

    tehran: {
      hi: "तेहरान",
      pl: "Teheran"
    },

    baghdad: {
      hi: "बगदाद",
      pl: "Bagdad"
    },

    bogota: {
      hi: "बोगोटा",
      pl: "Bogota"
    },

    medellin: {
      hi: "मेडेलिन",
      pl: "Medellín"
    },

    johannesburg: {
      hi: "जोहान्सबर्ग",
      pl: "Johannesburg"
    },

    cape_town: {
      hi: "केप टाउन",
      pl: "Kapsztad"
    },

    lagos: {
      hi: "लागोस",
      pl: "Lagos"
    },

    abuja: {
      hi: "अबुजा",
      pl: "Abudża"
    },

    sydney: {
      hi: "सिडनी",
      pl: "Sydney"
    },

    melbourne: {
      hi: "मेलबर्न",
      pl: "Melbourne"
    }

  }

};


// =========================================================
// APPLY EXTRA LOCALIZATION
// =========================================================

WORLDPIX_LOCATIONS.forEach(country => {

  // Add Hindi + Polish to country names
  if (WORLDPIX_EXTRA_LOCALIZATION.countries[country.id]) {

    Object.assign(
      country.names,
      WORLDPIX_EXTRA_LOCALIZATION.countries[country.id]
    );

  }

  // Add Hindi + Polish to city names
  country.cities.forEach(city => {

    if (WORLDPIX_EXTRA_LOCALIZATION.cities[city.id]) {

      Object.assign(
        city.names,
        WORLDPIX_EXTRA_LOCALIZATION.cities[city.id]
      );

    }

  });

});
