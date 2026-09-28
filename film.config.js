/* ─────────────────────────────────────────────────────────────
   FİLM KİMLİĞİ / Film identity — scripts/build.mjs ile scenes/film.js'ten üretilir.
   Süreler altyazı uzunluğundan hesaplanır (okuma hızı: ~10 harf/sn).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const META = {
    "slug": "kayit-basliyor",
    "title": "Kayıt Başlıyor",
    "titleEn": "Recording Now",
    "grade": 6,
    "theme": "Dijital Ürün Tasarımı ve Geliştirme",
    "code": "BTY.6.2.7",
    "outcome": "Ses dosyası geliştirebilme",
    "outcomeEn": "Developing an audio file",
    "duration": 121.6,
    "tempo": 1
  };
  const SCENES = [
    {
      "id": "s0",
      "t0": 0,
      "t1": 15.8,
      "name": "",
      "en": "",
      "concept": "",
      "noHeader": true
    },
    {
      "id": "s1",
      "t0": 15.8,
      "t1": 44.8,
      "name": "Arayüz",
      "en": "The interface",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s2",
      "t0": 44.8,
      "t1": 75.1,
      "name": "Ses dosyasını oluştur",
      "en": "Build the audio file",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s3",
      "t0": 75.1,
      "t1": 85.1,
      "name": "İnsan sesi, yapay ses",
      "en": "Human voice, AI voice",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s4",
      "t0": 85.1,
      "t1": 106.6,
      "name": "Ölçütlerle değerlendir",
      "en": "Check with criteria",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s5",
      "t0": 106.6,
      "t1": 121.6,
      "name": "Aklında kalsın",
      "en": "Remember",
      "concept": "",
      "noHeader": false
    }
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = { META, SCENES };
  else { root.BF = root.BF || {}; root.BF.META = META; root.BF.SCENES = SCENES; }
})(typeof window !== 'undefined' ? window : globalThis);
