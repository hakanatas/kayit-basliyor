/* ─────────────────────────────────────────────────────────────
   KAYIT BAŞLIYOR — BTY.6.2.7 (senaryo)
   Her vuruş bir altyazıdır: tr, en, note (öğretmen için seslendirme).
   Değiştirdikten sonra: npm run build
   ───────────────────────────────────────────────────────────── */
BF.defineFilm({
  meta: {
    slug: 'kayit-basliyor', title: 'Kayıt Başlıyor', titleEn: 'Recording Now', code: 'BTY.6.2.7',
    outcomeEn: 'Developing an audio file',
    summary: '"Dedemle geçmişe yolculuk" senaryosu bir ses dosyasına dönüştürülür. Ses düzenleyicinin arayüz bileşenleri (zaman çizgisi, ses katmanları, efekt menüsü) tanıtılır. Diyalog mikrofonla kaydedilir; ses efektleri ve müzik ayrı katmanlara eklenir, ses seviyeleri ve giriş-çıkış ayarlanır, dosya dışa aktarılır. İnsan sesi ile yapay zekâ sesi vurgu, ses rengi ve anlatım hızı yönünden karşılaştırılır. Son olarak ses dosyası belirlenen ölçütlerle değerlendirilir.',
    summaryEn: 'The "Trip to the past with Grandpa" script becomes an audio file: timeline, layers and effects are introduced; dialogue is recorded; effects and music go on separate layers; levels and fades are set; the file is exported; a human voice is compared with an AI voice; and the result is checked against criteria.',
    blurb: 'Zaman çizgisi ve katmanlar; kayıt, efekt, müzik, seviye, dışa aktarma; insan ve yapay zekâ sesi.',
    posterAlt: 'Başlık ve Karo; çevresinde mikrofon, ses dalgası, kulaklık ve yapay zekâ karoları',
  },
  scenes: [
    { type: 'intro', icons: [{ icon: 'mic', c: 'mercan' }, { icon: 'wave', c: 'turkuaz' }, { icon: 'headphones', c: 'kobalt' }, { icon: 'story', c: 'safran' }, { icon: 'speaker', c: 'mor' }, { icon: 'ai', c: 'kobalt' }, { icon: 'rubric', c: 'zumrut' }, { icon: 'play', c: 'zumrut' }],
      beats: [
        { tr: 'Senaryo hazır, dedem de hazır!', en: 'The script is ready, and so is Grandpa!', extra: 1,
          note: 'Karo\'nun "Dedemle geçmişe yolculuk" senaryosu hazır. Dedesi de kayda hazır. Hadi başlayalım!' },
        { tr: 'Senaryoyu bir ses dosyasına dönüştürelim', en: 'Let\'s turn the script into an audio file',
          note: 'Bu derste senaryomuza uygun bir ses dosyası oluşturup değerlendireceğiz.' },
      ] },
    { type: 'cards', name: 'Arayüz', en: 'The interface', desc: 'Zaman çizgisi, ses katmanları ve efekt menüsü.', out: 'a',
      cards: [
        { word: 'ZAMAN ÇİZGİSİ', def: 'Sesin soldan sağa, saniye saniye dizildiği şerit', icon: 'clock', c: 'kobalt' },
        { word: 'KATMAN', def: 'Konuşma, efekt ve müzik ayrı satırlarda', icon: 'sheet', c: 'turkuaz' },
        { word: 'EFEKT MENÜSÜ', def: 'Yankı, gürültü azaltma, hızlandırma', icon: 'gear', c: 'mor' },
      ],
      result: { word: 'SES DÜZENLEYİCİ', c: 'safran', chips: ['seviye', 'giriş-çıkış', 'dışa aktar'], line: 'Her ses kendi katmanında: düzenlemesi kolay' },
      beats: [
        { tr: 'Zaman çizgisi: saniye saniye ses', en: 'Timeline: the sound, second by second',
          note: 'Zaman çizgisinde ses soldan sağa saniye saniye dizilir. Kırmızı çizgi o an çalan yeri gösterir.' },
        { tr: 'Katmanlar: her ses kendi satırında', en: 'Layers: each sound on its own row',
          note: 'Konuşma, ses efektleri ve müzik ayrı katmanlarda durur. Birini değiştirirken ötekini bozmayız.' },
        { tr: 'Efekt menüsü: yankı, gürültü azaltma', en: 'Effects menu: echo, noise reduction',
          note: 'Efekt menüsünden yankı ekleyebilir, gürültüyü azaltabilir ya da sesi hızlandırabiliriz.' },
        { tr: 'Her ses kendi katmanında', en: 'Every sound on its own layer', extra: 1,
          note: 'Ses seviyesi, giriş-çıkış noktaları ve dışa aktarma da ses düzenleyicinin önemli bileşenleridir.' },
      ] },
    { type: 'app', app: 'audio', title: 'Ses Düzenleyici', name: 'Ses dosyasını oluştur', en: 'Build the audio file', desc: 'Kayıt, efekt, müzik katmanı, seviye, giriş-çıkış ve dışa aktarma.', out: 'a',
      data: { track1: 'Diyalog', track2: 'Müzik', file: 'dedemle-gecmise-yolculuk.mp3' },
      tools: [{ id: 'record', label: 'Mikrofon' }, { id: 'effect', label: 'Efekt' }, { id: 'music', label: 'Müzik' }, { id: 'volume', label: 'Seviye' }, { id: 'fade', label: 'Giriş/çıkış' }, { id: 'export', label: 'Dışa aktar' }],
      beats: [
        { tr: 'Diyaloğu mikrofonla kaydet', en: 'Record the dialogue with the mic', tool: 'record', hint: '"Dede, çocukken ne oynardın?"', extra: 1,
          note: 'Karo soruyu sorar, dedesi anlatır. Diyaloğu mikrofonla kaydederiz.' },
        { tr: 'Efekt ekle: geçmişe dönüş yankısı', en: 'Add an effect: an echo for the flashback', tool: 'effect', hint: 'Yankı efekti',
          note: 'Dedenin anısına geçerken sese hafif bir yankı efekti ekleriz. Dinleyici geçmişe gittiğimizi anlar.' },
        { tr: 'Müziği alt katmana ekle, seviyeyi ayarla', en: 'Add music underneath and set the level', tools: ['music', 'volume'], hint: 'Müzik konuşmadan alçak',
          note: 'Müziği alt katmana ekleriz ve seviyesini konuşmadan alçak tutarız. Böylece sözler net duyulur.' },
        { tr: 'Yumuşak giriş-çıkış ve dışa aktar', en: 'Soft fades and export', tools: ['fade', 'export'], hint: 'dedemle-gecmise-yolculuk.mp3', extra: 1,
          note: 'Başa ve sona yumuşak giriş-çıkış ekler, dosyayı anlamlı bir adla dışa aktarırız.' },
      ] },
    { type: 'compare', name: 'İnsan sesi, yapay ses', en: 'Human voice, AI voice', desc: 'İnsan sesi ile yapay zekâ sesinin vurgu, ses rengi ve hız açısından karşılaştırılması.', out: 'a, b',
      left: 'DEDEMİN SESİ', right: 'YAPAY ZEKÂ SESİ', leftC: 'safran', rightC: 'mor', sameLabel: 'ortak', diffLabel: 'fark',
      beats: [
        { tr: 'Aynı cümle, iki farklı ses', en: 'The same sentence, two different voices', extra: 1.5,
          note: 'Aynı cümleyi dedemiz ve bir yapay zekâ aracı seslendirdi. Dedemizin sesinde duygu ve doğal vurgular var. Yapay zekâ sesi düzgün ama biraz düz.',
          a: { icon: 'voice', name: 'Dedemin sesi', tag: 'duygulu', c: 'safran' }, b: { icon: 'ai', name: 'Yapay zekâ sesi', tag: 'düzgün', c: 'mor' }, same: 'aynı metin', diff: ['vurgu ve duygu', 'ses rengi', 'anlatım hızı'] },
      ] },
    { type: 'judge', name: 'Ölçütlerle değerlendir', en: 'Check with criteria', desc: 'Ses dosyası belirlenen ölçütlerle değerlendirilir.', out: 'b', labels: { ok: 'uygun', no: 'eksik' },
      beats: [
        { tr: 'Konuşmalar net anlaşılıyor mu?', en: 'Can the words be heard clearly?',
          note: 'Müzik alçak, konuşmalar net. Uygun.',
          row: { icon: 'headphones', text: 'Konuşmalar müzikten yüksek ve net anlaşılıyor', ok: true, why: 'Seviyeler dengeli' } },
        { tr: 'Senaryonun tüm bölümleri var mı?', en: 'Are all parts of the script there?',
          note: 'Kapanış mesajı kayda girmemiş. Senaryoya uygun olması için kapanışı da kaydetmeliyiz.',
          row: { icon: 'story', text: 'Kapanıştaki "Büyüklerimizi dinleyelim" mesajı yok', ok: false, why: 'Kapanışı da kaydetmeliyim' } },
        { tr: 'Süre ve dosya türü uygun mu?', en: 'Are the length and file type right?',
          note: 'Dosya iki dakika sürüyor ve .mp3 olarak paylaşılmaya hazır. Uygun.',
          row: { icon: 'file', text: 'Süre 2 dakika, dosya .mp3 olarak kaydedildi', ok: true, why: 'Paylaşmaya hazır' } },
      ] },
    { type: 'summary',
      lines: [
        { icon: 'clock', c: 'kobalt', text: 'Zaman çizgisi ve katmanlarla çalış' },
        { icon: 'mic', c: 'mercan', text: 'Kaydet, efekt ve müzik ekle, seviyeyi ayarla' },
        { icon: 'rubric', c: 'zumrut', text: 'Senaryoya ve ölçütlere göre kontrol et' },
      ],
      beats: [
        { tr: 'Aklında kalsın: senaryoya sadık kal', en: 'Remember: stay true to the script',
          note: 'Aklında kalsın: ses dosyan senaryondaki bütün bölümleri içermeli ve net anlaşılmalı.' },
        { tr: 'Sesin, hikâyeni taşısın!', en: 'Let your voice carry your story!',
          note: 'Hazırladığın ses dosyası hikâyeni dinleyicilere ulaştırır!' },
      ] },
  ],
});
