import React from "react";
import { useState, useEffect } from "react";
const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};
const allQuestions = [
  {
    question:
      "Ochiq suv havzalarini ifloslantiruvchi havfli manbalarga kiradi?",
    options: [
      "maishiy chiqindi suvlar",
      "sug‘orish dalalari",
      "filtratsiya dalalari",
      "yog‘ingarchilik suvlari",
      "korxona chiqindi suvlari",
    ],
    answer: 0,
  },
  {
    question: "Ikkinchi toifa suv havzalariga kiradi?",
    options: [
      "cho‘milish, sport va aholi dam olish maqsadlari uchun qo‘llaniladigan suv havzalari",
      "ichimlik suv sifatida foydalanuvchi suv havzalari",
      "ishlab chiqarish korxonalari uchun foydalaniladigan suv havzalari",
      "oziq ovqat sanoati uchun foydalaniladigan suv havzalari",
      "shahar markazida joylashgan suv havzalari",
    ],
    answer: 0,
  },
  {
    question: "Birinchi toifa suv havzalariga kiradi?",
    options: [
      "suv ta'minoti manbalari uchun foydalaniladigan suv havzalari",
      "baliqchilikda foydalaniladigan suv havzalari",
      "ishlab chiqarish korxonalari uchun foydalaniladigan suv havzalari",
      "cho‘milish uchun foydalaniladigan suv havzalari",
      "qishloq ho‘jalik maqsadlarida foydalaniladigan suv havzalari",
    ],
    answer: 0,
  },
  {
    question:
      "Suv havzalarini ifloslanishi aholi uchun qanday noqulayliklar tug‘diradi?",
    options: [
      "aholining sanitar talablarini qondirmaydi",
      "suv manbasidan cho‘milish maqsadida foydalanib bo‘lmaydi",
      "hududning me'moriy ko‘rinishini yomonlashtiradi",
      "mikroiqlimga salbiy ta'sir ko‘rsatadi",
      "sanitar rejimni yomonlashtiradi",
    ],
    answer: 0,
  },
  {
    question: "Suv havzalarini ifloslantiruvchi havfli manbaga kiradi?",
    options: [
      "ishlab chiqarish korxona chiqindi suvlari",
      "yog‘ingarchilik chiqindi suvlari",
      "tuproq eroziyasi",
      "daryoda daraxt oqizish",
      "suv hayvonlarining nobud bo‘lishi",
    ],
    answer: 0,
  },
  {
    question:
      "Suv manbalarining organoleptik ko‘rsatkichlariga nimalar kiradi?",
    options: [
      "hid, bo‘yalish, muallaq moddalar",
      "hid, erigan kislorod, azot ammiak",
      "hid, azot ammiak, azot nitrat",
      "azot ammiak, azot nitrit, kislorod",
      "erigan kislorod, azot, ftor",
    ],
    answer: 0,
  },
  {
    question:
      "Zararli moddalarni suv havzalarining sanitar rejimiga ko‘rsatadigan ta'siri qanday ko‘rsatkichlar bo‘yicha o‘rganiladi?",
    options: [
      "KBE, ammonifikatsiya jarayoni, nitrifikatsiya",
      "hid, bo‘yalish, ta'mi",
      "KBE, bo‘yalish, ko‘pik xosil qilish",
      "KBE, KXE, AKX",
      "KBE, KXE, hidi",
    ],
    answer: 0,
  },
  {
    question:
      "Zarali moddalarni suv muhitida meyorlashtirishda uning zaharlilik ta'siri qanday o‘rganiladi?",
    options: [
      "laboratoriya hayvonlarida",
      "ko‘ngillilarda olib borish",
      "suvning ko‘pik xosil qilish xususiyati",
      "gelmintologik tahlil natijalari",
      "entomologik ko‘rsatkichlarni tekshirish",
    ],
    answer: 0,
  },
  {
    question: "Qanday zararlilik limit ko‘rsatkichlarni bilasiz?",
    options: [
      "organoleptik, umum sanitar, toksikologik",
      "organoleptik, toksikologik, baktereologik",
      "organoleptik, gelmintologik, toksik",
      "entomologik, organoleptik, sanitar rejim",
      "ximiyaviy, fizik, mexanik",
    ],
    answer: 0,
  },
  {
    question: "Tozalash stansiyasi hududiga qo‘yiladigan gigienik talablar:",
    options: [
      "chegaralangan, obodonlashtirilgan, yoritilgan",
      "chegaralangan, katta, ximikatlardan foydalanish",
      "vertikal planirovka o‘tkazish, salqin, shamol yaxshi esishi",
      "ko‘kalamzorlashtirilgan, sovuq, qorong‘i",
      "salqin, yoritilgan, asfaltlangan hudud",
    ],
    answer: 0,
  },
  {
    question:
      "Muallaq moddalar bo‘yicha tindirgichlar samaradorligi necha foizni tashkil etadi?",
    options: ["50 - 70%", "50 - 80%", "20 - 40%", "30 - 40%", "10 - 20%"],
    answer: 0,
  },
  {
    question: "Tozalash stansiyasini sanitar texnik tekshirishdan maqsad?",
    options: [
      "qurilmalarni to‘g‘ri tanglanganligi va ulardan foydalanishni tekshirish",
      "stansiyadan to‘g‘ri foydalanishni tekshirish",
      "xodimlarni kasallanish darajasini tekshirish",
      "texnik xodimlar o‘rtasida bakteriya tashuvchilarni o‘rganish",
      "stansiyaning situatsion rejasini o‘rganish",
    ],
    answer: 0,
  },
  {
    question:
      "Kanalizatsiya tozalash stansiya ishchilarining kasallanish darajasi qanday o‘rganiladi?",
    options: [
      "mehnatga layoqatsizlik varaqalari bo‘yicha",
      "statistik talonlar bo‘yicha",
      "umumiy kasallanish bo‘yicha",
      "yuqumli kasallanish bo‘yicha",
      "tezkor xabarlar bo‘yicha",
    ],
    answer: 0,
  },
  {
    question: "Septik tindirgichni cho‘kmadan tozalash davriyligi?",
    options: [
      "yilda 1- 2 marta",
      "yilda 4 marta",
      "har oyda",
      "har kuni",
      "3 oyda bir marta",
    ],
    answer: 0,
  },
  {
    question:
      "Biofiltrni chiqindi suv tarkibidagi muallaq moddalarni kamaytirish bo‘yicha samaradorligi nechaga teng?",
    options: ["70 - 90%", "20 - 30%", "40 - 50%", "50 - 60%", "100%"],
    answer: 0,
  },
  {
    question:
      "Tozalash stansiyasida foydalaniladigan tindirgichlar tipi nimalarga qarab belgilanadi?",
    options: [
      "tozalash stansiyasining ish quvvatiga qarab",
      "tozalash bosqichlariga qarab",
      "sanitar qoida va meyorlarga qarab",
      "qurilish meyor va qoidalariga qarab",
      "epidemiologik holatga qarab",
    ],
    answer: 0,
  },
  {
    question: "Septik tindirgich qachon qo‘llaniladi?",
    options: [
      "tozalash stansiyasining ish quvvati 25 m³/sutkagacha bo‘lganda",
      "tozalash stansiyasining ish quvvati 10000 m³/sutkagacha bo‘lganda",
      "tozalash stansiyasining ish quvvati 100 m³/sutkagacha bo‘lganda",
      "tozalash stansiyasining ish quvvati 20000 m³/sutkagacha bo‘lganda",
      "tozalash stansiyasining ish quvvati 3000 m³/sutkagacha bo‘lganda",
    ],
    answer: 0,
  },
  {
    question: "Emsher tindirgichi qanday hollarda qo‘llaniladi?",
    options: [
      "tozalash stansiyasining ish quvvati 1000 m³gacha bo‘lganda",
      "tozalash stansiyasining ish quvvati 3000 m³gacha bo‘lganda",
      "tozalash stansiyasining ish quvvati 10000 m³gacha bo‘lganda",
      "tozalash stansiyasining ish quvvati 1000000 m³gacha bo‘lganda",
      "tozalash stansiyasining ish quvvati 20000 m³gacha bo‘lganda",
    ],
    answer: 0,
  },
  {
    question: "Tozalash stansiyalarida qumtutkichlar qachon qo‘llaniladi?",
    options: [
      "tozalash stansiyasining ish 100m³/sutkadan ko‘p bo‘lganda",
      "tozalash stansiyasining ish quvvati 100 m³/sutkagacha bo‘lganda",
      "tozalash stansiyasining ish quvvati 1000 m³ bo‘lganda",
      "tozalash stansiyasining ish quvvati 10000 m³ gacha bo‘lganda",
      "tozalash stansiyasining ish quvvati 25000 m³ gacha bo‘lganda",
    ],
    answer: 0,
  },
  {
    question: "Qachon radial tindirgichlardan foydalaniladi?",
    options: [
      "tozalash stansiyasining ish quvvati 20 000 m³/sutkadan ko‘p bo‘lganda",
      "tozalash stansiyasining ish quvvati 1 000 m³/sutkagacha bo‘lganda",
      "tozalash stansiyasining ish quvvati 200 m³/sutkadan ko‘p bo‘lganda",
      "tozalash stansiyasining ish quvvati 3000 m³/sutkadan ko‘p bo‘lganda",
      "tozalash stansiyasining ish quvvati 9 000 m³/sutkagacha bo‘lganda",
    ],
    answer: 0,
  },
  {
    question:
      "Biologik tozalash bosqichining tuproqli usuliga kiruvchi qurilmalarni ko‘rsating?",
    options: [
      "sug‘orish dalasi, filtratsiya dalasi, aerofiltr",
      "sug‘orish dalasi, filtratsiya dalasi, biologik hovuz",
      "sug‘orish dalasi, filtratsiya dalasi, aerotenk",
      "sug‘orish dalasi, filtratsiya dalasi, qum tutkich",
      "sug‘orish dalasi, haydash dalasi, aerotenk",
    ],
    answer: 0,
  },
  {
    question:
      "Oqava suvlarni tozalashda qo‘llaniladigan septik tindirgichning kamchiliklari nimalardan iborat?",
    options: [
      "qurilmadagi chirish, qurilmani qo‘lda tozalash",
      "kam miqdordagi suvni tozalashi va qo‘lda tlzalash",
      "muallaq moddalardan yetarli tozalamaslik, xloridlar miqdori",
      "ko‘p miqdordagi suvni tozalash, assenizatsion mashina yordamida tozalash",
      "toza il ajratadi, tozalashning yuqori samaradorligi",
    ],
    answer: 0,
  },
  {
    question:
      "Oqava suvlarni zararsizlantirish samaradorligini baholovchi ko‘rsatkichlarga nimalar kiradi?",
    options: [
      "koli indeks, qoldiq xlor, mikroblar soni",
      "koli indeks, quruq qoldiq, muallaq moddalar",
      "koli titr, KBE, KXE",
      "umumiy mikroblar soni, rang ko‘rsatkich, loyqalik",
      "koli indeks, umumiy mikroblar soni, muallaq moddalar miqdori",
    ],
    answer: 0,
  },
  {
    question: "Septik tindirgichning afzal tomonlarini ko‘rsating",
    options: [
      "foydalanishning qulayligi, cho‘kmani zararsizlantirish, degelmintizatsiya",
      "foydalanishning murakkabligi, zararsizlantirish, digelmintizatsiya",
      "foydalanishning murakkabligi, metan va ozonning xosil bo‘lishi",
      "aerob jarayon, anaerob jarayon, ishqoriy bijg‘ish",
      "cho‘kmani zararsizlantirish, lakto musbat va lakto manfiy tayoqchalarni to‘liq ushlab qolish",
    ],
    answer: 0,
  },
  {
    question: "Oqava suvlarni mexanik tozalash qurilmalarini ko‘rsating?",
    options: [
      "panjara, qumtutkich, tindirgich",
      "panjara, qumtktkich, biofiltr",
      "tindirgich, qumtutkich, aerotenk",
      "panjara, biofiltr, aeofiltr",
      "qumtutkich, biologik hovuz, aerotenk",
    ],
    answer: 0,
  },
  {
    question:
      "Oqava suvlarni biologik tozalash samaradorligi qanday ko‘rsatkichlar bo‘yicha baholanadi?",
    options: [
      "KBE, oksidlanish, erigan kislorod",
      "KBE, KXE, mikroblar soni",
      "KBE, erigan kislorod, erigan azot",
      "KBE, KXE, koli titr",
      "KBE, erigan kislorod, koli indeks",
    ],
    answer: 0,
  },
  {
    question:
      "Oqava suvlarning qanday ko‘rsatkichlari bo‘yicha tindirgichlar samaradorligi baholanadi?",
    options: [
      "tiniqlik, muallaq moddalar miqdori",
      "tiniqlik, azot ammiak",
      "azot ammiak, oksidlanish",
      "tiniqlik, azot nitriti",
      "azot ammiak, gelmint tuxumlarining soni",
    ],
    answer: 0,
  },
  {
    question:
      "Sug‘orish dalasi va filtratsiya dalalarining o‘zaro farqi nimada?",
    options: [
      "foydalanishda, ish yuklamasida",
      "mexanik tozalash, tuzilishida",
      "biologik tozalash, ish yuklamasida",
      "zararsizlantirish, degelmintizatsiyada",
      "ulaning o‘zaro hech qanday farqi yo‘q",
    ],
    answer: 0,
  },
  {
    question: "Oqava suv tarkibidagi qoldiq xlor miqdori nechaga teng?",
    options: ["1,5 - 2 mg/l", "3 - 5 mg/l", "4,0 mg/l", "1-5 mg/l", "6-9 mg/l"],
    answer: 0,
  },
  {
    question: "Tuproqli sharoitda ketuvchi ekstensiv qurilmalarga kiradi?",
    options: [
      "sug‘orish dalasi, filtratsiya dalasi, qishloq xo‘jalik sug‘orish dalalari",
      "sug‘orish dalasi, filtratsiya dalasi, aerotenk",
      "sug‘orish dalasi, filtratsiya dalasi, biologik hovuzlar",
      "sug‘orish dalasi, filtratsiya dalasi, metantenk",
      "sug‘orish dalasi, filtratsiya dalasi, aerofiltr",
    ],
    answer: 0,
  },
  {
    question: "Tuproqli sharoitda ketuvchi intensiv qurilmalarga kiradi?",
    options: [
      "biofiltr, aerofiltr",
      "aerofiltr, aerotenk",
      "biofiltr, aerotenk",
      "aerotenk, metantenk",
      "biofiltr, siklon",
    ],
    answer: 0,
  },
  {
    question:
      "Oqava suvlarni biologik tozalash bosqichida qo‘llaniluvchi, suvli muhitda ketuvchi tozalash qurilmalarga kiradi?",
    options: [
      "aerotenk, biologik hovuz",
      "aerotenk, oddiy hovuz",
      "aerofiltr, aerotenk",
      "biologik hovuz, biofiltr",
      "oddiy hovuz, sug‘orish dalasi",
    ],
    answer: 0,
  },
  {
    question: "Faol il nima?",
    options: [
      "suvdagi maprofit mikroorganizmlar biotsenozi",
      "septikda cho‘kkan cho‘kma",
      "oqava suv tarkibidagi cho‘kma",
      "erigan organik moddalar",
      "metantenkdagi cho‘kma",
    ],
    answer: 0,
  },
  {
    question:
      "Xo‘jalik maishiy oqava suvlarni tozalash bosqichlarini ko‘rsating?",
    options: [
      "mexanik, biologik, zararsizlantirish",
      "tuproqli, suvli, atmosferali",
      "mexanik, biologik, degelmintizatsiya",
      "dezinfeksiya, degazatsiya, dezaktivatsiya",
      "mexanik, biologik, dezinseksiya",
    ],
    answer: 0,
  },
  {
    question:
      "Chiqindi suvlarni mexanik tozalash bosqichida qo‘llaniladigan va ilni qayta ishlovchi qurilmalarga nimalar kiradi?",
    options: [
      "septik, ikki yarusli",
      "metantenk, qumtutkich",
      "gorizontal, vertikal",
      "gorizontal, septik",
      "radial, emsher",
    ],
    answer: 0,
  },
  {
    question:
      "Agarda nazorat ostidagi ob'ektda hosil bo‘layotgan chiqindi suv bir hil miqdorda bo‘lsa qanday turdagi sinamalar olinadi?",
    options: [
      "o‘rtacha sutkalik, o‘riacha smenali",
      "o‘rtacha, proporsional",
      "o‘rtacha, o‘rtacha proporsional",
      "o‘rtacha proporsional, proporsional",
      "bir vaqtlik, bir martalik",
    ],
    answer: 0,
  },
  {
    question: "Oqava suvlarni laborator tekshirish programmasi?",
    options: [
      "to‘liq va qisqa",
      "sutkalik va oylik",
      "o‘rtacha va bir martalik",
      "har kuni va bir martalik",
      "har oyda va o‘rtacha yillik",
    ],
    answer: 0,
  },
  {
    id: 164,
    question: "Kanalizatsiya sxemasining turlari?",
    options: [
      "markazlashtirilgan, markazlashtirilmagan, aralash",
      "mahalliy, bir martalik, qisman",
      "yer osti, yer usti, aralash",
      "ko‘p qavatli, kam qavatli, xonadonli",
      "kombinatsiyalashgan, aralash, bir martalik",
    ],
    answer: 0,
  },
  {
    id: 165,
    question: "Kanalizatsiya sistemasining turlari?",
    options: [
      "alohida, umumiy oqib ketuvchi, kombinatsiyalashgan",
      "ko‘p qavatli, bir qavatli, bir martalik",
      "xonadonli, hovlili, aralash",
      "kombinatsiyalashgan, kombinatsiyalashmagan, aralash",
      "umumiy oo‘ib ketuvchi, kombinatsiyalashgan, markazlashtirilmagan",
    ],
    answer: 0,
  },
  {
    id: 166,
    question: "Gorizontal qum tutkichlarda suv harakati tezligi nechaga teng?",
    options: [
      "0,3 - 0,15 m/s",
      "2 m/s",
      "5 m/s",
      "0,1 - 0,25 m/s",
      "0,3 - 3 m/s",
    ],
    answer: 0,
  },
  {
    id: 167,
    question:
      "To‘liq aloxida kanalizatsiya tizimi qanday qismlardan iborat bo‘ladi?",
    options: [
      "maishiy va yog‘ingarchilik",
      "sedimitatsion va aspiratsion",
      "maishiy va kanalizatsion",
      "ho‘jalik va maishiy",
      "alanga osti va yo‘nalishli",
    ],
    answer: 0,
  },
  {
    id: 168,
    question:
      "Chiqindi suvlarni mexanik tozalash bosqichining birinchi qurilmasiga kiradi?",
    options: ["panjara", "qumtutkich", "aerotenk", "metantenk", "tindirgich"],
    answer: 0,
  },
  {
    id: 169,
    question: "Qumtutkichlar chiqindi suv tarkibidan nimalarni ushlab qoladi?",
    options: [
      "og‘ir mineral moddalarni",
      "organik moddalarni",
      "mikroorganizmlarni",
      "viruslarni",
      "gelmintlarni",
    ],
    answer: 0,
  },
  {
    id: 170,
    question: "Qumtutkich turlarini ko‘rsating?",
    options: [
      "gorizontal va vertikal",
      "gorizontal va radial",
      "vertikal va kubsimon",
      "gorizontal va metantenk",
      "aerotenk va tindirgich",
    ],
    answer: 0,
  },
  {
    id: 171,
    question: "Tindirgich turlarini ko‘rsating?",
    options: [
      "birlamchi va ikkilamchi",
      "oligosaprob va mezasoprob",
      "metantenk va siklon",
      "aerotenk va multitsiklon",
      "skrubber va aerotenk",
    ],
    answer: 0,
  },
  {
    id: 172,
    question:
      "Agarda chiqindi suv tarkibida muallaq moddalar miqdori 60-70%, bo‘lsa birlamchi tindirgichlardan foydalaniladimi?",
    options: [
      "foydalanilmaydi",
      "foydalaniladi",
      "metantenk bilan birga ishlatiladi",
      "aerotenk bilan birga ishlatiladi",
      "perforator bilan birga ishlatiladi",
    ],
    answer: 0,
  },
  {
    id: 173,
    question: "Tindirgichlar samaradorligini oshirish usullari?",
    options: [
      "aeratsiya va biokoagulyasiya",
      "mexanik va biologik",
      "aerob va anierob bijg‘ish",
      "aeratsiya va mezanizatsiya",
      "zararsizlantirish va utilizatsiya",
    ],
    answer: 0,
  },
  {
    id: 174,
    question:
      "Chiqindi suvlarni biologik tozalashning asosiy maqsadini ko‘rsating?",
    options: [
      "organik moddalarni parchalanishi va mineralizatsiyalanishi",
      "mineral moddalarni parchalanishi va mineralizatsiyalanishi",
      "bakteriyalarni parchalanishi va mineralizatsiyalanishi",
      "radiaktiv moddalarni parchalanishi va mineralizatsiyalanishi",
      "korxona chiqindilarini parchalanishi va mineralizatsiyalanishi",
    ],
    answer: 0,
  },
  {
    id: 175,
    question:
      "Qishloq ho‘jalik sug‘orish dalalarining asosiy vazifasi nimadan iborat?",
    options: [
      "qishloq ho‘jalik ekinlarini yetishtirish",
      "chiqindi suvlarni organik moddalardan tozalash",
      "chiqindi suvlarni mineral moddalardan tozalash",
      "cho‘kmani zararsizlantirish va foydalanish",
      "qattiq moddalarni zararsizlantirish va utilizatsiya qilish",
    ],
    answer: 0,
  },
  {
    id: 176,
    question: "Chiqindi suvlarni zararsizlantirish usullarini ko‘rsating?",
    options: [
      "reagentli va reagentsiz",
      "aeratsiya va filtratsiya",
      "ozonlash va xlorlash",
      "biokoagulyasiya va aeratsiya",
      "biogelmintizatsiya va ftorsizlantirish",
    ],
    answer: 0,
  },
  {
    id: 177,
    question: "Tuproqda tabiiy kislorod miqdori necha foizga teng?",
    options: ["20,13%", "4,20%", "26,0%", "3,355", "39,0%"],
    answer: 0,
  },
  {
    question: "Tuproqda vabo vibrioning yashash davomiyligi?",
    options: [
      "7 - 15 kun",
      "30 - 150 kun",
      "40 - 57 kun",
      "2 kun",
      "50 - 200 kun",
    ],
    answer: "7 - 15 kun",
  },
  {
    question: "Intensiv harakatli ko‘chalardagi urnalar orasidagi masofa?",
    options: ["50 m", "150m", "300m", "500m", "30m"],
    answer: "50 m",
  },
  {
    question: "Bozorlardagi bir urna uchun ajratilgan maydon o‘lchami?",
    options: ["250m2", "2500m2", "500m", "250m2", "700m"],
    answer: "250m2",
  },
  {
    question:
      "Yirik shaharlarda bir odamdan hosil bo‘ladigan qattiq maishiy chiqindi miqdori nechaga teng?",
    options: ["0,9 - 1,0 m3", "200kg", "500kg", "2 - 3 m3", "2000t"],
    answer: "0,9 - 1,0 m3",
  },
  {
    question:
      "Yirik shaharlardagi ishlab chiqarish korxonasidan xosil bo‘ladigan qattiq chiqindining bir odam uchun meyori?",
    options: ["0,5 - 1 kg", "2 - 15kg", "30 - 50 kg", "300kg", "700kg"],
    answer: "0,5 - 1 kg",
  },
  {
    question:
      "Bir odamdan xosil bo‘ladigan suyuq chiqindilar meyori nechaga teng?",
    options: ["1,5 - 2,0 m3", "2,5 - 5 m3", "20000t", "500t", "0,5 t"],
    answer: "1,5 - 2,0 m3",
  },
  {
    question:
      "Turli sharoitlarda kompostning yetilishi uchun qancha vaqt zarur bo‘ladi?",
    options: ["5 - 12 oy", "1 - 2 yil", "1 - 2 oy", "4 - 14 oy", "3 - 4 yil"],
    answer: "5 - 12 oy",
  },
  {
    question: "Xlebnikov sanitar soni nima degani?",
    options: [
      "bu organik azotni azot gumusiga nisbati",
      "azot gumusini tuproqdagi karbonat angidridga nisbati",
      "azot gumusini  tuproqdagi is gaziga nisbati",
      "azot gumusini tuproqdagi kislorodga nisbati",
      "azot gumusini tuproq gumusiga nisbati",
    ],
    answer: "bu organik azotni azot gumusiga nisbati",
  },
  {
    question: "Gofman zonasi nima degani?",
    options: [
      "tuproq suvlarini xosil bo‘luvchi qismi",
      "tuproq gumusini xosil bo‘luvchi qismi",
      "tuproqda organik moddalarni xosil bo‘luvchi qismi",
      "tuproqda zaharli moddalarni xosil bo‘luvchi qismi",
      "tuproqda radiaktiv moddalarni xosil bo‘luvchi qismi",
    ],
    answer: "tuproq suvlarini xosil bo‘luvchi qismi",
  },
  {
    question:
      "Tuproqning g‘ovakliligi qanday bo‘lganda tuproqni o‘z o‘zini tozalash jarayoni uchun optimal sharoit bo‘ladi?",
    options: ["60 65%", "70 80%", "40 30%", "50 10%", "90 95%"],
    correct: "60 65%",
  },
  {
    question: "Sog‘lom tuproq qanday bo‘lishi zarur?",
    options: [
      "yirik donador va quruq",
      "mayda donador va nam",
      "g‘ovakli va suv o‘tkazuvchi",
      "havo o‘tkazuvchi va g‘ovakli",
      "gigroskopik ap nam",
    ],
    correct: "yirik donador va quruq",
  },
  {
    question: "Tuproqning asosiy komponentlariga nimalar kiradi?",
    options: [
      "mineral va organik moddalar",
      "organik va zaharli moddalar",
      "organik va toksikologik moddalar",
      "fizik va ximiyaviy moddalar",
      "fizik va mexanik moddalar",
    ],
    correct: "mineral va organik moddalar",
  },
  {
    id: 187,
    question:
      "Tuproqning g‘ovakliligi qanday bo‘lganda tuproqni o‘z-o‘zini tozalash jarayoni uchun optimal sharoit bo‘ladi?",
    options: ["60-65%", "70-80%", "40-30%", "50-10%", "90-95%"],
    answer: "60-65%",
  },
  {
    id: 188,
    question: "Sog‘lom tuproq qanday bo‘lishi zarur?",
    options: [
      "yirik donador va quruq",
      "mayda donador va nam",
      "g‘ovakli va suv o‘tkazuvchi",
      "havo o‘tkazuvchi va g‘ovakli",
      "gigroskopik va nam",
    ],
    answer: "yirik donador va quruq",
  },
  {
    id: 189,
    question: "Tuproqning asosiy komponentlariga nimalar kiradi?",
    options: [
      "mineral va organik moddalar",
      "organik va zaharli moddalar",
      "organik va toksikologik moddalar",
      "fizik va kimyoviy moddalar",
      "fizik va mexanik moddalar",
    ],
    answer: "mineral va organik moddalar",
  },
  {
    id: 190,
    question: "Klark nima degani?",
    options: [
      "tuproqda kimyoviy moddalarning saqlanishi",
      "suvda kimyoviy moddalarni saqlanishi",
      "atmosferada kimyoviy moddalarni saqlanishi",
      "suv havzalarida kimyoviy moddalarni saqlanishi",
      "yer osti suvlarida kimyoviy moddalarni saqlanishi",
    ],
    answer: "tuproqda kimyoviy moddalarning saqlanishi",
  },
  {
    id: 191,
    question: "Tuproqdagi suyuq namlik formalarini ko‘rsating?",
    options: [
      "gigroskopik, pardali, kapilyar, erkin",
      "bog‘langan, kapilyar, suvli, qumli",
      "havoli, tuproqli, kapilyar, erkin",
      "havoli, kapilyar, tuproqli, yer osti",
      "yer osti, kapilyar, suvli, havoli",
    ],
    answer: "gigroskopik, pardali, kapilyar, erkin",
  },
  {
    id: 192,
    question:
      "Agar tuproq nikel bilan ifloslangan bo‘lsa qanday kasallik yuzaga keladi?",
    options: [
      "shizofreniya",
      "botulizm",
      "itay-itay",
      "metgemoglobinemiya",
      "Urov kasalligi",
    ],
    answer: "shizofreniya",
  },
  {
    id: 193,
    question: "Tuproqda qorin tifi qo‘zg‘atuvchisining yashovchanlik muddati?",
    options: [
      "400 sutka",
      "200 sutka",
      "100-200 sutka",
      "20 sutka",
      "10-90 sutka",
    ],
    answer: "400 sutka",
  },
  {
    id: 194,
    question: "Askarida tuxumlari tuproqda necha yil saqlanadi?",
    options: ["7-10 yil", "1-2 yil", "20-25 yil", "1,5-2 yil", "saqlanmaydi"],
    answer: "7-10 yil",
  },
  {
    id: 195,
    question: "Tuproqni ifloslantiruvchi manbalar qanday guruhlarga bo‘linadi?",
    options: [
      "tabiiy va antropogen",
      "maqsadli va mexanik",
      "antropogen va kimyoviy",
      "kimyoviy va fizikaviy",
      "kimyoviy va texnogen",
    ],
    answer: "tabiiy va antropogen",
  },
  {
    id: 196,
    question: "Mineral o‘g‘it turlarini ko‘rsating?",
    options: [
      "makro va mikro o‘g‘itlar",
      "kimyoviy va biologik",
      "fizik va biologik",
      "pestitsidlar va kaliyli o‘g‘itlar",
      "o‘simliklar o‘sishini stimullovchi moddalar va pestitsidlar",
    ],
    answer: "makro va mikro o‘g‘itlar",
  },
  {
    id: 197,
    question: "O‘simliklar o‘sishini boshqaruvchi moddalarga nimalar kiradi?",
    options: [
      "nikotin birikmalari va etilen",
      "kaliy va magniy",
      "spirt va fosfor",
      "sulfatlar va xloridlar",
      "xlor va brom",
    ],
    answer: "nikotin birikmalari va etilen",
  },
  {
    id: 198,
    question: "Chiqindi turlarini ko‘rsating?",
    options: [
      "qattiq va suyuq chiqindilar",
      "suyuq va yarim suyuq chiqindilar",
      "pestitsidlar va o‘g‘itlar",
      "pastasimonlar va pestitsidlar",
      "qattiq va pastasimon",
    ],
    answer: "qattiq va suyuq chiqindilar",
  },
  {
    id: 199,
    question:
      "Tuproqni muhofaza qilishga qaratilgan chora tadbirlar qanday guruhlarga bo‘linadi?",
    options: [
      "sanitar-texnik, texnologik, rejalashtiruvchi",
      "sanitar-texnik, texnologik, mexanik",
      "fizik, kimyoviy, biologik",
      "biologik, qonuniy, ma'muriy",
      "texnologik, biologik, texnogen",
    ],
    answer: "sanitar-texnik, texnologik, rejalashtiruvchi",
  },
  {
    id: 200,
    question: "Suyuq chiqindilarga nimalar kiradi?",
    options: [
      "yuvindi suvlar va o‘ralarda yig‘iluvchi xojatxona chiqindilari",
      "yuvindi suvlar va ko‘cha suprindilari",
      "yuvindi suvlar va qozonxona shlaklari",
      "yuvindi suvlar va qurilish chiqindilari",
      "yuvindi suvlar va DPM chiqindilari",
    ],
    answer: "yuvindi suvlar va o‘ralarda yig‘iluvchi xojatxona chiqindilari",
  },
  {
    id: 201,
    question: "Chiqindilarni chetlashtirish tizimlarini ko‘rsating?",
    options: [
      "oqib ketuvchi, olib ketiluvchi, aralash",
      "oqib ketuvchi, markazlashtirilgan, aralash",
      "olib ketiluvchi, markazlashtirilmagan, hovlili",
      "aralash, xonadonli, kanalizatsiya",
      "kanalizatsiya, oqib ketuvchi, aralash",
    ],
    answer: "oqib ketuvchi, olib ketiluvchi, aralash",
  },
  {
    id: 202,
    question: "Qattiq chiqindilarni yig‘ish usullarini ko‘rsating?",
    options: [
      "statsionar va smenali",
      "statsionar va marshrutli",
      "statsionar va alanga osti",
      "statsionar va yo‘nalishli",
      "smenali va yo‘nalishli",
    ],
    answer: "statsionar va smenali",
  },
  {
    id: 203,
    question:
      "Chiqindilarni olib ketishda qaysi korxona mashinalaridan foydalaniladi?",
    options: [
      "maxsustrans",
      "evakuator",
      "tez tibbiy yordam",
      "obodonlashtirish",
      "ko‘kalamzorlashtirish",
    ],
    answer: "maxsustrans",
  },
  {
    id: 204,
    question:
      "Chiqindilarni zararsizlantirish usullariga qo‘yiladigan gigienik talablar?",
    options: [
      "tezkor, ishonchli, suv havzalarini ifloslantirmaslik",
      "sanitar-gigienik xavfsiz, fitoakkumulyasiya",
      "sanitar-gigienik xavfsiz, suvga migratsiya",
      "sanitar-gigienik xavfsiz, havoga migratsiya",
      "sanitar-gigienik xavfsiz, PDUV ni o‘rnatish",
    ],
    answer: "tezkor, ishonchli, suv havzalarini ifloslantirmaslik",
  },
  {
    id: 205,
    question:
      "Chiqindilarni zararsizlantirishda qanday turdagi mikroorganizmlar ishtirok etadi?",
    options: [
      "mezofil va termofil",
      "mezofil va termik",
      "mezofil va lakto musbat",
      "mezofil va lakto manfiy",
      "mezofil va koli titr",
    ],
    answer: "mezofil va termofil",
  },
  {
    id: 206,
    question:
      "Chiqindilarni biotermik usulda zararsizlantirishda o‘tkaziladigan bioximiyaviy jarayonlarga ta'sir etuvchi omillar?",
    options: [
      "aeratsiya, namlik, chiqindilar o‘lchami, chiqindilar рНi",
      "koagulyasiya, chiqindilar namligi, chiqindilar рНi",
      "flokulyasiya, namlik, chiqindilar рНi",
      "migratsiya, namlik, chiqindi рНi",
      "zararsizlantirish, organik moddalpar miqdori",
    ],
    answer: "aeratsiya, namlik, chiqindilar o‘lchami, chiqindilar рНi",
  },
  {
    id: 207,
    question:
      "Qattiq maishiy chiqindilarni termik usulda zararsizlantirish usullari?",
    options: [
      "oddiy termik va piroliz",
      "biotermik va piroliz",
      "mexanik va piroliz",
      "biologik va piroliz",
      "kimyoviy va piroliz",
    ],
    answer: "oddiy termik va piroliz",
  },
  {
    id: 208,
    question: "Chiqindilarni yoqish qanday haroratda olib boriladi?",
    options: [
      "900-1000 gradusda",
      "100-200 gradusda",
      "500-1500 gradusda",
      "1000-2000 gradusda",
      "400-500 gradusda",
    ],
    answer: "900-1000 gradusda",
  },
  {
    id: 209,
    question: "Piroliz usulida harorat necha gradusgacha ko‘tarilishi mumkin?",
    options: [
      "1640 gradusgacha",
      "1000 gradusgacha",
      "100 gradusgacha",
      "900 gradusgacha",
      "2500 gradusgacha",
    ],
    answer: "1640 gradusgacha",
  },
  {
    id: 210,
    question:
      "Qattiq chiqindilarni yoqish qurilmalariga nisbatan o‘rnatiladigan S’HM o‘lchami nechaga teng bo‘ladi?",
    options: ["300 metr", "500 metr", "1000 metr", "100 metr", "50 metr"],
    answer: "300 metr",
  },
  {
    id: 211,
    question:
      "Qattiq maishiy chiqindilarni kimyoviy usulda zararsizlantirishda nimadan foydalaniladi?",
    options: [
      "sulfat kislotadan",
      "koagulyantdan",
      "spirtdan",
      "yoddan",
      "xlordan",
    ],
    answer: "sulfat kislotadan",
  },
  {
    id: 212,
    question:
      "Suyuq chiqindilarni zararsizlantirishda qanday qurilmalardan foydalaniladi?",
    options: [
      "quyish stansiyasidan",
      "kompostlash dalalaridan",
      "lyuftklozet",
      "axlatxonalar",
      "piroliz",
    ],
    answer: "quyish stansiyasidan",
  },
  {
    id: 213,
    question:
      "Quyish stansiyalari uchun o‘rnatilgan S’HM o‘lchami nechaga teng?",
    options: ["300 metr", "500 metr", "200 metr", "1000 metr", "2000 metr"],
    answer: "300 metr",
  },
  {
    id: 214,
    question: "Ishlab chiqarish korxona chiqindilarining turlari?",
    options: [
      "utilizatsiyalanadigan va utilizatsiya qilinmaydigan",
      "utilizatsiyalanadigan va kanalizatsiya",
      "zararsizlantirish va utilizatsiya qilinmaydigan",
      "suvga migratsiya va kanalizatsiya",
      "havoga migratsiya va kanalizatsiya",
    ],
    answer: "utilizatsiyalanadigan va utilizatsiya qilinmaydigan",
  },
  {
    id: 215,
    question:
      "Utilizatsiya qilinmaydigan korxona chiqindilari qanday sinflarga bo‘linadi?",
    options: ["5 sinfga", "3 sinfga", "4 sinfga", "2 sinfga", "7 sinfga"],
    answer: "5 sinfga",
  },
  {
    id: 216,
    question:
      "Utilizatsiya qilinmaydigan korxona chiqindilarining birinchi sinfiga kiradi?",
    options: [
      "neft yog‘ chiqindilari",
      "ko‘cha suprindisi",
      "DPM chiqindilari",
      "zaharli moddalar",
      "yog‘och qirindisi",
    ],
    answer: "neft yog‘ chiqindilari",
  },
  {
    id: 217,
    question:
      "Maishiy chiqindilarni yig‘ishning texnologik tizimlarini ko‘rsating?",
    options: [
      "unitar va alohida",
      "aralash va kanalizatsiya",
      "aralash va umumiy oqib ketuvchi",
      "yarim alohida va alohida",
      "utilizatsiya qilinadigan va utilizatsiya qilinmaydigan",
    ],
    answer: "unitar va alohida",
  },
  {
    id: 218,
    question:
      "Tumanlardan QMChlarni chetlashtirishning qanday tizimlarini bilasiz?",
    options: [
      "olib ketiluvchi va transportsiz",
      "o‘zi oqib ketuvchi va aralash",
      "kanalizatsiya va olib ketiluvchi",
      "olib ketiluvchi va utilizatsiya qilinadigan",
      "utilizatsiya qilinadigan va utilizatsiya qilinmaydigan",
    ],
    answer: "olib ketiluvchi va transportsiz",
  },
  {
    id: 219,
    question:
      "QMChlarni chetlashtirishda foydalaniladigan olib ketuvchi tizim usullarini ko‘rsating?",
    options: [
      "rejali hovli va rejali xonadon usuli",
      "rejali shahar va rejali mahalla usuli",
      "rejali viloyat va rejali maydon usuli",
      "kanalizatsiya va utilizatsiya",
      "utilizatsiya va utilizatsiya qilinmaydigan",
    ],
    answer: "rejali hovli va rejali xonadon usuli",
  },
  {
    id: 220,
    question: "Tuproqning sanitar holatini baholovchi ko‘rsatkichlar:",
    options: [
      "anaeroblar titri va Xlebnikov sanitar soni",
      "sulfatlar va xloridlar",
      "kislota va spirt",
      "koagulyantlar va flokulyantlar",
      "koli titr va koli indeks",
    ],
    answer: "anaeroblar titri va Xlebnikov sanitar soni",
  },
  {
    id: 221,
    question: "Tuproqda Cl perfringens ning bo‘lishi nimadan dalolat beradi?",
    options: [
      "tuproqni ancha ilgari ifloslanganligidan",
      "tuproqni yaqinda ifloslanganligidan",
      "toza tuproq",
    ],
    answer: "tuproqni ancha ilgari ifloslanganligidan",
  },
  {
    id: 222,
    question: "Tuproqning havflilik ko‘rsatkichlari?",
    options: [
      "havfsiz, havfli, o‘ta havfli",
      "toza, havfsiz, shartli havfli",
      "toza, havfli, Xlebnikov sanitar soni",
      "toza, ifloslangan, havfli",
      "kuchsiz ifloslangan, havfli, toza",
    ],
    answer: "havfsiz, havfli, o‘ta havfli",
  },
  {
    id: 223,
    question: "Tuproqning ifloslanish darajalarini ko‘rsating?",
    options: [
      "toza, ifloslangan, kuchli ifloslangan",
      "toza, toza bo‘lmagan, steril",
      "havfsiz, nisbiy havfsiz, steril",
      "nosteril, toza, havfli",
      "toza, kuchsiz ifloslangan, kuchli ifloslangan",
    ],
    answer: "toza, ifloslangan, kuchli ifloslangan",
  },
  {
    id: 224,
    question: "Xlebnikov sanitar soni meyorda nechaga teng bo‘ladi?",
    options: ["0,98 -1,0", "0,85- 0,98", "0,7 - 0,85", "0,7- 0,5", "0,5 - 0,6"],
    answer: "0,98 -1,0",
  },
  {
    id: 225,
    question:
      "Plyajning qancha maydoniga 1 ta chiqindi tashlash urnasi to‘g‘ri kelishi kerak?",
    options: [
      "har 30 metrga bitta",
      "har 100 metrda",
      "har 200 metrda",
      "har 500 metrda",
      "har 1000 metrda",
    ],
    answer: "har 30 metrga bitta",
  },
  {
    id: 226,
    question:
      "Chiqindi tashlash pavilonlari va turar joy binolari orasidagi masofa nechaga teng bo‘ladi?",
    options: [
      "20m dan 100 m gacha",
      "50m dan 200 m gacha",
      "30 do 300 m",
      "100m dan 500 mgacha",
      "100m dan 1000m gacha",
    ],
    answer: "20m dan 100 m gacha",
  },
  {
    id: 227,
    question:
      "Chiqindi tashlash pavilonlari uchun ajratilgan maydonning meyordagi o‘lchami?",
    options: ["10m/kV", "20m/kv", "50m/kv", "100m/kv", "300m/kv"],
    answer: "10m/kV",
  },
  {
    id: 228,
    question: "Maxsustrans mashinalarining meyordagi soni?",
    options: [
      "100000 aholiga 20 ta mashina",
      "100000 aholiga 10 ta mashina",
      "10000 aholiga 20 ta mashina",
      "10000 aholiga 10 ta mashina",
      "10000 aholiga 5 ta mashina",
    ],
    answer: "100000 aholiga 20 ta mashina",
  },
  {
    id: 229,
    question:
      "Jamoat hojatxonalarining xizmat ko‘rsatish radiusi nechaga teng bo‘ladi?",
    options: ["500 metr", "100 metr", "200 metr", "1000 metr", "2000 metr"],
    answer: "500 metr",
  },
  {
    id: 230,
    question:
      "Maydon va ko‘chalardagi jamoat hojatxonalarining o‘tkazuvchanlik xususiyati?",
    options: [
      "5000 kishiga 1 ta o‘rin",
      "100 kishiga 1 ta o‘rin",
      "300 kishiga 1 ta o‘rin",
      "500 kishiga 1 ta o‘rin",
      "10000 kishiga 1 ta o‘rin",
    ],
    answer: "5000 kishiga 1 ta o‘rin",
  },
  {
    id: 231,
    question:
      "Har bir unitaz uchun tavsiya etiladigan maydon o‘lchami nechaga teng?",
    options: ["2,75 m/kv", "3,0 m/kv", "4,0 m/kv", "0,5 m/kv", "4,75 m/kv"],
    answer: "2,75 m/kv",
  },
  {
    id: 232,
    question: "Qaylardan suyuq chiqindilarni olib ketish muddatlari?",
    options: [
      "oyda bir marta",
      "oyda 2 marta",
      "har kuni",
      "har haftada",
      "yilda bir marta",
    ],
    answer: "oyda bir marta",
  },
  {
    id: 233,
    question: "Haydash dalalarining yo‘l qo‘yiladigan ish yuklamasi?",
    options: ["400 t/ga", "600 t/ga", "1000 t/ga", "100 t/ga", "2000 t/ga"],
    answer: "400 t/ga",
  },
  {
    id: 234,
    question: "Quyish stansiyasi uchun maydon o‘lchami nechaga teng bo‘ladi?",
    options: [
      "1000 t chiqindiga 0,2 ga maydon",
      "1000 t chiqindiga 0,5 ga maydon",
      "2000t chiqindiga 1 ga maydon",
      "2000 t chiqindiga 2 ga maydon",
      "2000 t chiqindiga 5 ga maydon",
    ],
    answer: "1000 t chiqindiga 0,2 ga maydon",
  },
  {
    id: 235,
    question:
      "Assenizatsiya dalasi va haydash dalasi uchun tashkil etilgan S’HM o‘lchami nechaga teng bo‘ladi?",
    options: ["1000 m", "100 m", "300m", "500m", "2000m"],
    answer: "1000 m",
  },
  {
    id: 236,
    question:
      "Agarda tuproqni ifloslantiruvchi manba bitta bo‘lsa, sinama olish uchun ajratilgan maydon o‘lchami nechaga teng bo‘ladi?",
    options: [
      "har biri 25 m/kV bo‘lgan 2 ta maydon",
      "har biri 35 m/kv bo‘lgan 3 ta maydon",
      "har biri 100 m /kv bo‘lgan 10 ta maydon",
      "o‘lchami 100 m/kv bo‘lgan 1 ta maydon",
      "o‘lchami 25 m/kv bo‘lgan 1 ta maydon",
    ],
    answer: "har biri 25 m/kV bo‘lgan 2 ta maydon",
  },
  {
    id: 237,
    question:
      "Tuproqdan sinama olish nuqtalarini o‘zaro joylashtirish sxemasi?",
    options: [
      "diagonal va konvert usuli",
      "periferiya va burchak usuli",
      "diagonal va periferiya usuli",
      "aylana bo‘ylab va konvert usuli",
      "meridian va periferiya bo‘ylab",
    ],
    answer: "diagonal va konvert usuli",
  },
  {
    id: 238,
    question:
      "Tuproqdan olingan namunalarning umumiy og‘irligi qanchani tashkil etadi?",
    options: [
      "1 kg dan kam emas",
      "2 kg dan kam emas",
      "5 kg dan kam emas",
      "10 kg dan kam emas",
      "15 kg dan kam emas",
    ],
    answer: "1 kg dan kam emas",
  },
  {
    id: 239,
    question: "Tuproqdan olingan o‘rtacha namuna og‘irligi nechaga teng?",
    options: [
      "2 kg dan kam emas",
      "4 kg dan kam emas",
      "5 kg dan kam emas",
      "10 kg dan kam emas",
      "20 kg dan kam emas",
    ],
    answer: "2 kg dan kam emas",
  },
  {
    id: 240,
    question: "Tuproqdan namuna olishda qanday qurilmadan foydalaniladi?",
    options: [
      "Nekrasov burg‘usidan",
      "Gofman burg‘usidan",
      "Emsher burg‘usidan",
      "Danilyuk burg‘usidan",
      "Aberyanov burg‘usidan",
    ],
    answer: "Nekrasov burg‘usidan",
  },
  {
    id: 241,
    question:
      "Tuproqni sanitar baktereologik tekshirishda qanday ko‘rsatkichlar o‘rganiladi?",
    options: [
      "mikroblar soni, koli titr",
      "mexanik tarkib, mikroblar soni",
      "gigroskopik tarkib, koli titr",
      "filtratsiya koeffitsienti, koli indeks",
      "koli titr, koli indeks",
    ],
    answer: "mikroblar soni, koli titr",
  },
  {
    id: 242,
    question: "QMChlarni yig‘ilish meyorlarining turlari?",
    options: [
      "o‘rtacha va differensirlangan",
      "boshlang‘ich va o‘rtacha",
      "dekadali va o‘rtacha",
      "oylik va yillik",
      "dahalik va yillik",
    ],
    answer: "o‘rtacha va differensirlangan",
  },
  {
    id: 243,
    question:
      "Shaharlarda bir yilda bir odamdan hosil bo‘ladigan QMChning yig‘ilish meyorlari nechaga teng bo‘ladi?",
    options: ["453kg", "600kg", "700kg", "1000kg", "2000kg"],
    answer: "453kg",
  },
  {
    id: 244,
    question:
      "Shaharni sanitar tozalash ob'ektlarini sanitar vrach tomonidan nazorat qilish muddatlari?",
    options: [
      "oyda bir marta",
      "6 oyda bir marta",
      "dekadada bir marta",
      "2 yilda bir marta",
      "haftada bir marta",
    ],
    answer: "oyda bir marta",
  },
  {
    id: 245,
    question:
      "Aholi turar joylarini sanitar tozalashning rejali xonadon usulidan qayerlarda foydalanish samarali hisoblanadi?",
    options: [
      "bir qavatli uylarda",
      "ko‘p qavatli uylarda",
      "9 qavatli uylarda",
      "4 qavatligacha bo‘lgan uylarda",
      "6 qavatligacha bo‘lgan jamoat binolarida",
    ],
    answer: "bir qavatli uylarda",
  },
  {
    id: 246,
    question:
      "Yilning issiq davrida bozorlarning qattiq qoplamasini yuvish qancha vaqt orasida olib boriladi?",
    options: [
      "har kuni",
      "haftada bir marta",
      "oyda bir marta",
      "dekadada bir marta",
      "yilda bir marta",
    ],
    answer: "har kuni",
  },
  {
    id: 247,
    question:
      "Madaniyat va istirohat bog‘larida asosiy tozalash ishlari qachon o‘tkaziladi?",
    options: [
      "bog‘ yopilgach tonggi soat 8 gacha",
      "kech soat 10 dan so‘ng",
      "tonggi soat 7 dan so‘ng",
      "bog‘ yopilgandan so‘ng",
      "ish vaqti davomida",
    ],
    answer: "bog‘ yopilgach tonggi soat 8 gacha",
  },
  {
    id: 248,
    question:
      "Biotermik kameralarda kuzatiladigan maksimal harorat nechaga teng bo‘ladi?",
    options: [
      "70 -75 gradus",
      "60- 65 gradus",
      "50 -55 gradus",
      "40 -45 gradus",
      "80 -90 gradus",
    ],
    answer: "70 -75 gradus",
  },
  {
    id: 249,
    question:
      "Maxsustrans parklari uchun o‘rnatilgan S’HM o‘lchami nechaga teng bo‘ladi?",
    options: ["100 metr", "200 metr", "300 metr", "500 metr", "800 metr"],
    answer: "100 metr",
  },
  {
    id: 250,
    question: "Qabristonlar uchun o‘rnatilgan S’HM o‘lchami:",
    options: ["300 metr", "500 metr", "1000 metr", "2000 metr", "1500 metr"],
    answer: "300 metr",
  },
  {
    id: 251,
    question: "Muhim epidemiologik ahamiyatga ega bo‘lgan ob'ektlarga kiradi?",
    options: [
      "yuqumli kasalliklar, teri tanosil kasalliklar shifoxonasi, plyajlar",
      "mikrorayonlar,kasalxonalar,madaniyat va istirohat bog‘lari",
      "bozorlar, ko‘chalar, maydonlar",
      "bozorlar, kompostlash dalasi, assenizatsiya dalasi",
      "assenizatsiya dalasi, haydash dalasi",
    ],
    answer:
      "yuqumli kasalliklar, teri tanosil kasalliklar shifoxonasi, plyajlar",
  },
  {
    id: 252,
    question:
      "Aholi turar joylarida xosil bo‘luvchi suyuq chiqindilarni olib ketishda qanday transport vositalaridan foydalaniladi?",
    options: [
      "vakuumlit assenizatsion mashinalardan",
      "konteynerli maxsus mashinalardan",
      "sisternali mashinalar yordamida",
      "konteynerli va sisternali mashinalarda",
      "vakuumsiz assenizatsion mashinalarda",
    ],
    answer: "vakuumlit assenizatsion mashinalardan",
  },
  {
    id: 253,
    question:
      "Mavsumning o‘rtacha harorati 5 dan 5 gradus gacha necha kunda bir marta qattiq maishiy chiqindilarni olib ketishni tashkil etiladi?",
    options: [
      "uch kunda bir marta",
      "har kuni",
      "ikki kunda bir marta",
      "yetti kunda bir marta",
      "oyda bir marta",
    ],
    answer: "uch kunda bir marta",
  },
  {
    id: 254,
    question:
      "Mavsumning o‘rtacha harorati 5 gradus va undan yuqori. QMChlarni olib ketish qanday muddatda tashkil etilishi kerak?",
    options: [
      "har kuni",
      "3 kunda bir marta",
      "4 kunda bir marta",
      "5 kunda bir marta",
      "7 kunda bir marta",
    ],
    answer: "har kuni",
  },
  {
    id: 255,
    question: "Suyuq chiqindilar qaerlarga chetlashtiriladi?",
    options: [
      "quyish stansiyalari, assenizatsiya dalalariga",
      "maxsus poligonlar, assenizatsiya dalalariga",
      "assenizatsiya dalalariga, kompostlash",
      "ko‘mish dalalari, quyish stansiyalariga",
      "poligonlar, assenizatsiya mashinalar",
    ],
    answer: "quyish stansiyalari, assenizatsiya dalalariga",
  },
  {
    id: 256,
    question:
      "Plyajlarda toza qum sepish qanday muddatlar orasida tashkil etiladi?",
    options: [
      "yilda bir marta",
      "6 oyda bir marta",
      "har 3 oyda bir marta",
      "har oyda bir marta",
      "har haftada bir marta",
    ],
    answer: "yilda bir marta",
  },
  {
    id: 257,
    question: "Botqoq yerlarni quritishda qanday o‘simliklardan foydalaniladi?",
    options: [
      "hind gurichi, kanop",
      "pista, kanop",
      "pista, hind gurichi",
      "paxta, gurich",
      "sabzi, sholg‘om",
    ],
    answer: "hind gurichi, kanop",
  },
  {
    id: 258,
    question:
      "Ishlab chiqarish korxonalarini tasniflash nima asosida tashkil etiladi?",
    options: [
      "atrofga ajraluvchi moddalar zararligiga, korxona quvvatiga",
      "joy relefiga, shamollar guliga",
      "zararlilik, trubalar balandligi",
      "xom ashyo sifati, xavflilik darajasi",
      "S’HM kengligi, obodonlashtirish",
    ],
    answer: "atrofga ajraluvchi moddalar zararligiga, korxona quvvatiga",
  },
  {
    id: 259,
    question:
      "SanQ va M 0006 93 qanday turdagi ishlab chiqarish korxonalari uchun tadbiq etiladi?",
    options: [
      "atmosfera havosini ifloslantiruvchi korxonalari uchun",
      "shovqin hosil qiluvchi ishlab chiqarish korxonalari uchun",
      "tebranish hosil qiluvchi korxonalari uchun",
      "suv havzalarini ifloslantiruvchi korxonalar uchun",
      "aholi turar joylarini ifloslantiruvchi ishlab chiqarish korxonalari uchun",
    ],
    answer: "atmosfera havosini ifloslantiruvchi korxonalari uchun",
  },
  {
    id: 260,
    question:
      "Korxonalar uchun tashkil etiladigan S’HM o‘lchamlari qanchaga teng?",
    options: [
      "50 -1000m",
      "100 - 500m",
      "100 - 800m",
      "800 -1000m",
      "600 -1200m",
    ],
    answer: "50 -1000m",
  },
];
function App() {
  const [questions, setQuestions] = useState([]); // 15 ta tasodifiy savol
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // 15 ta tasodifiy savolni olish
  useEffect(() => {
    const selectedQuestions = shuffleArray(allQuestions).slice(0, 15);
    setQuestions(selectedQuestions);
  }, []);

  const handleAnswer = (index) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(index);
      if (index === questions[currentQuestion].answer) {
        setScore(score + 1);
      }

      setTimeout(() => {
        if (currentQuestion + 1 < questions.length) {
          setCurrentQuestion(currentQuestion + 1);
          setSelectedAnswer(null);
        } else {
          setShowResult(true);
        }
      }, 1000);
    }
  };

  return (
    <div className="quiz-container">
      {questions.length === 0 ? ( // ⚡ Savollar yuklanmaguncha "Yuklanmoqda" ko‘rsatiladi
        <h2>Yuklanmoqda...</h2>
      ) : showResult ? (
        <div className="result">
          <h2>
            Natijangiz: {score} / {questions.length}
          </h2>
          <button onClick={() => window.location.reload()}>
            Qayta boshlash
          </button>
        </div>
      ) : (
        <div className="question-card">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`option ${
                  selectedAnswer !== null
                    ? index === questions[currentQuestion].answer
                      ? "correct" // ✅ TO‘G‘RI JAVOB YASHIL BO‘LADI
                      : index === selectedAnswer
                      ? "wrong" // ❌ NOTO‘G‘RI JAVOB QIZIL BO‘LADI
                      : ""
                    : ""
                }`}
                onClick={() => handleAnswer(index)}
                disabled={selectedAnswer !== null}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
