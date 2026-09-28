/* ─────────────────────────────────────────────────────────────
   ALTYAZILAR / CAPTIONS — düzenlenebilir (metin). Zamanlar film saniyesidir.
   note: öğretmen için önerilen seslendirme cümlesi.
   Senaryo değişirse: node scripts/build.mjs (zamanlar yeniden hesaplanır).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const CAPTIONS = [
    { scene: 1, start: 0.9, end: 7.6, tr: "Senaryo hazır, dedem de hazır!", en: "The script is ready, and so is Grandpa!",
      note: "Karo'nun \"Dedemle geçmişe yolculuk\" senaryosu hazır. Dedesi de kayda hazır. Hadi başlayalım!" },
    { scene: 1, start: 8.4, end: 14.4, tr: "Senaryoyu bir ses dosyasına dönüştürelim", en: "Let's turn the script into an audio file",
      note: "Bu derste senaryomuza uygun bir ses dosyası oluşturup değerlendireceğiz." },
    { scene: 2, start: 17.3, end: 23, tr: "Zaman çizgisi: saniye saniye ses", en: "Timeline: the sound, second by second",
      note: "Zaman çizgisinde ses soldan sağa saniye saniye dizilir. Kırmızı çizgi o an çalan yeri gösterir." },
    { scene: 2, start: 23.8, end: 29.4, tr: "Katmanlar: her ses kendi satırında", en: "Layers: each sound on its own row",
      note: "Konuşma, ses efektleri ve müzik ayrı katmanlarda durur. Birini değiştirirken ötekini bozmayız." },
    { scene: 2, start: 30.3, end: 35.9, tr: "Efekt menüsü: yankı, gürültü azaltma", en: "Effects menu: echo, noise reduction",
      note: "Efekt menüsünden yankı ekleyebilir, gürültüyü azaltabilir ya da sesi hızlandırabiliriz." },
    { scene: 2, start: 36.8, end: 43.5, tr: "Her ses kendi katmanında", en: "Every sound on its own layer",
      note: "Ses seviyesi, giriş-çıkış noktaları ve dışa aktarma da ses düzenleyicinin önemli bileşenleridir." },
    { scene: 3, start: 46.3, end: 52.9, tr: "Diyaloğu mikrofonla kaydet", en: "Record the dialogue with the mic",
      note: "Karo soruyu sorar, dedesi anlatır. Diyaloğu mikrofonla kaydederiz." },
    { scene: 3, start: 53.8, end: 59.4, tr: "Efekt ekle: geçmişe dönüş yankısı", en: "Add an effect: an echo for the flashback",
      note: "Dedenin anısına geçerken sese hafif bir yankı efekti ekleriz. Dinleyici geçmişe gittiğimizi anlar." },
    { scene: 3, start: 60.3, end: 66.3, tr: "Müziği alt katmana ekle, seviyeyi ayarla", en: "Add music underneath and set the level",
      note: "Müziği alt katmana ekleriz ve seviyesini konuşmadan alçak tutarız. Böylece sözler net duyulur." },
    { scene: 3, start: 67, end: 73.7, tr: "Yumuşak giriş-çıkış ve dışa aktar", en: "Soft fades and export",
      note: "Başa ve sona yumuşak giriş-çıkış ekler, dosyayı anlamlı bir adla dışa aktarırız." },
    { scene: 4, start: 76.5, end: 83.7, tr: "Aynı cümle, iki farklı ses", en: "The same sentence, two different voices",
      note: "Aynı cümleyi dedemiz ve bir yapay zekâ aracı seslendirdi. Dedemizin sesinde duygu ve doğal vurgular var. Yapay zekâ sesi düzgün ama biraz düz." },
    { scene: 5, start: 86.5, end: 92.2, tr: "Konuşmalar net anlaşılıyor mu?", en: "Can the words be heard clearly?",
      note: "Müzik alçak, konuşmalar net. Uygun." },
    { scene: 5, start: 93, end: 98.7, tr: "Senaryonun tüm bölümleri var mı?", en: "Are all parts of the script there?",
      note: "Kapanış mesajı kayda girmemiş. Senaryoya uygun olması için kapanışı da kaydetmeliyiz." },
    { scene: 5, start: 99.5, end: 105.2, tr: "Süre ve dosya türü uygun mu?", en: "Are the length and file type right?",
      note: "Dosya iki dakika sürüyor ve .mp3 olarak paylaşılmaya hazır. Uygun." },
    { scene: 6, start: 108, end: 113.7, tr: "Aklında kalsın: senaryoya sadık kal", en: "Remember: stay true to the script",
      note: "Aklında kalsın: ses dosyan senaryondaki bütün bölümleri içermeli ve net anlaşılmalı." },
    { scene: 6, start: 114.5, end: 120.2, tr: "Sesin, hikâyeni taşısın!", en: "Let your voice carry your story!",
      note: "Hazırladığın ses dosyası hikâyeni dinleyicilere ulaştırır!" },
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = CAPTIONS;
  else { root.BF = root.BF || {}; root.BF.CAPTIONS = CAPTIONS; }
})(typeof window !== 'undefined' ? window : globalThis);
