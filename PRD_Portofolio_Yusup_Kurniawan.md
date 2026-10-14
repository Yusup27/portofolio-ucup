# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## Website Portofolio Pribadi — Yusup Kurniawan

**Versi:** 1.0  
**Status:** Siap digunakan sebagai instruksi awal AI Agent di VS Code  
**Teknologi:** HTML5, CSS3, JavaScript vanilla  
**Jenis produk:** Website portofolio pribadi, responsif, satu halaman (single-page portfolio)

---

## 1. Ringkasan Produk

Bangun website portofolio pribadi untuk **Yusup Kurniawan**, yang memperkenalkan dirinya sebagai **Ketua PC IPNU Kota Bekasi**, individu yang aktif dalam organisasi, dan pribadi yang sedang mengembangkan kemampuan di bidang teknologi digital.

Website harus terlihat modern, elegan, profesional, bersih, dan meyakinkan. Pengunjung harus dapat memahami siapa Yusup, apa fokus aktivitasnya, karya atau proyek apa yang sedang dikembangkan, tulisan apa yang dibagikan, serta bagaimana cara menghubunginya.

Gunakan gambar referensi yang diberikan sebagai **inspirasi visual**, bukan untuk disalin persis. Pertahankan karakter utamanya: latar biru navy, panel utama berwarna abu-abu terang, sudut membulat, tipografi besar, aksen biru terang, foto profil sebagai fokus hero, dan elemen informasi yang terlihat seperti kartu mengambang. Sesuaikan komposisi dengan identitas organisasi dan teknologi milik Yusup.

## 2. Tujuan dan Indikator Keberhasilan

### Tujuan
1. Memperkenalkan identitas dan peran Yusup secara profesional.
2. Menampilkan pengalaman organisasi, minat teknologi, dan proyek secara terstruktur.
3. Membangun personal branding yang konsisten untuk kebutuhan organisasi, jejaring profesional, kolaborasi, serta peluang proyek.
4. Menyediakan akses yang jelas ke media sosial, repositori kode, email, atau kanal kontak lain yang benar-benar dimiliki.
5. Menjadi fondasi yang mudah dikembangkan saat pengalaman dan portofolio bertambah.

### Indikator keberhasilan
- Pengunjung dapat menemukan nama, peran, deskripsi singkat, dan tombol kontak pada bagian awal halaman.
- Semua menu navigasi dan tombol mengarah ke bagian atau tujuan yang benar.
- Tampilan tetap rapi pada layar ponsel, tablet, laptop, dan desktop.
- Tidak ada tautan palsu, tombol mati, error JavaScript di console, atau elemen yang meluap dari layar.
- Konten mudah diperbarui melalui HTML/CSS/JS tanpa framework.

## 3. Target Pengunjung

- Pengurus dan kader organisasi kepemudaan.
- Mitra organisasi, komunitas, lembaga, dan calon kolaborator.
- Rekruter, klien, atau rekan profesional di bidang teknologi.
- Orang yang ingin mengenal pengalaman, gagasan, dan karya Yusup.

## 4. Identitas dan Pesan Utama

**Nama:** Yusup Kurniawan  
**Peran utama:** Ketua PC IPNU Kota Bekasi  
**Arah personal branding:** Organisasi, kepemimpinan, kolaborasi, dan pengembangan teknologi digital.

### Pesan utama yang disarankan
“Bertumbuh melalui organisasi, membangun kolaborasi, dan mengembangkan solusi digital yang bermanfaat.”

### Contoh copy hero
- Label kecil: “Ketua PC IPNU Kota Bekasi”
- Sapaan: “Halo, saya”
- Judul utama: “Yusup Kurniawan.”
- Subjudul: “Aktif dalam organisasi, terbuka pada kolaborasi, dan terus belajar membangun solusi digital.”
- Tombol utama: “Hubungi Saya”
- Tombol sekunder: “Lihat Karya”

Copy dapat diperhalus agar natural, tetapi jangan menambahkan klaim pencapaian, jumlah anggota, jumlah proyek, penghargaan, pengalaman kerja, atau statistik yang belum diberikan oleh pemilik website.

## 5. Ruang Lingkup

### Termasuk dalam versi pertama (MVP)
- Website single-page dengan navigasi anchor.
- Bagian Beranda, Tentang Saya, Fokus Aktivitas, Pengalaman Organisasi, Proyek/Karya, Artikel/Gagasan, dan Kontak.
- Foto profil yang dapat diganti melalui folder aset lokal.
- Kartu proyek dan aktivitas dengan label status yang jelas, misalnya “Konsep”, “Dalam Pengembangan”, atau “Selesai”.
- Navigasi desktop dan menu hamburger pada layar kecil.
- Animasi ringan saat bagian memasuki viewport, dengan dukungan reduced motion.
- Desain responsif, metadata dasar SEO, serta aksesibilitas dasar.

### Tidak termasuk dalam versi pertama
- Backend, database, login, dashboard admin, atau CMS.
- Form kontak yang menyimpan/mengirim data ke server.
- Klaim statistik otomatis atau integrasi API yang belum diperlukan.
- Blog dinamis. Bagian artikel cukup berupa kartu yang dapat diarahkan ke tautan artikel sungguhan ketika sudah tersedia.
- E-commerce, pembayaran, dan fitur akun pengguna.

## 6. Struktur Halaman dan Spesifikasi Bagian

### 6.1 Header / Navigasi
- Logo teks sederhana: **YK** atau wordmark **Yusup Kurniawan**. Jangan membuat logo organisasi resmi tanpa aset atau izin yang sesuai.
- Menu: Beranda, Tentang, Fokus, Karya, Artikel, Kontak.
- Tombol CTA: “Mari Terhubung” atau “Hubungi Saya”.
- Header berada di bagian atas; boleh menggunakan efek sticky dengan latar semi-solid saat halaman digulir.
- Menu aktif mendapat penanda visual yang halus.
- Pada mobile, menu berubah menjadi tombol hamburger dengan label aksesibel dan dapat ditutup setelah item dipilih.

### 6.2 Hero / Beranda
- Menjadi bagian paling kuat secara visual dan langsung menjelaskan identitas Yusup.
- Gunakan panel besar abu-abu terang di atas latar biru navy.
- Foto profil berbentuk lingkaran atau potongan portrait, dengan lingkaran/gradasi biru sebagai latar pendukung.
- Foto tidak boleh dipaksakan jika aset belum tersedia; sediakan placeholder elegan yang mudah diganti.
- Nama ditampilkan dengan tipografi besar dan tebal.
- Tambahkan satu atau dua label kecil seperti “Organisasi”, “Kolaborasi”, atau “Digital”. Hindari label yang memberi kesan gelar profesional yang belum dimiliki.
- Dua CTA: “Lihat Karya” menuju bagian Karya dan “Hubungi Saya” menuju bagian Kontak.
- Kartu mengambang boleh menampilkan “Organisasi & Kepemimpinan” dan “Teknologi Digital”, bukan angka pengalaman atau statistik yang belum terverifikasi.

### 6.3 Tentang Saya
- Paragraf perkenalan 2–3 paragraf pendek.
- Tekankan semangat belajar, tanggung jawab organisasi, kerja sama, dan minat membangun solusi digital.
- Tampilkan poin ringkas: Peran, Fokus, Nilai Kerja.
- Jangan mencantumkan alamat rumah, nomor identitas, atau informasi pribadi sensitif.

### 6.4 Fokus Aktivitas
Tampilkan tiga kartu fokus utama:
1. **Organisasi & Kepemimpinan** — koordinasi, pengembangan organisasi, kaderisasi, dan kerja kolaboratif.
2. **Teknologi Digital** — pembelajaran pemrograman, website, dan pengembangan sistem informasi.
3. **Komunikasi & Kolaborasi** — membangun jejaring, menyusun gagasan, dan bekerja lintas pihak.

Jelaskan sebagai bidang aktivitas/minat, bukan klaim layanan komersial yang telah tersedia.

### 6.5 Pengalaman Organisasi
- Tampilkan peran utama: Ketua PC IPNU Kota Bekasi.
- Sediakan kolom/periode yang bisa diisi setelah data resmi diberikan.
- Gunakan format timeline atau kartu sederhana.
- Pengalaman lain dapat ditambahkan melalui data yang dapat diedit di HTML.
- Jangan mengarang periode jabatan, riwayat organisasi, capaian, tanggal, atau nama program.

### 6.6 Karya / Proyek
- Tampilkan grid kartu proyek, idealnya 2–3 kolom pada desktop dan satu kolom pada ponsel.
- Setiap kartu memuat gambar/thumbnail, nama proyek, deskripsi singkat, teknologi/ruang lingkup, status, dan tombol “Detail” jika tersedia.
- Data awal boleh berupa placeholder yang jelas dan tidak berpura-pura sebagai proyek selesai. Gunakan label seperti “Dalam Pengembangan” atau “Segera Ditambahkan”.
- Kandidat jenis proyek yang bisa dipakai setelah pemilik mengonfirmasi: website portofolio ini, website company profile/landing page, serta konsep sistem informasi organisasi atau layanan sosial.
- Jangan menambahkan tautan demo atau GitHub yang fiktif. Jika tautan belum tersedia, sembunyikan tombol terkait.

### 6.7 Artikel / Gagasan
- Bagian opsional tetapi disiapkan dalam layout.
- Tampilkan kartu tulisan bertema organisasi, kepemimpinan, teknologi, dan pengembangan diri.
- Jika belum ada artikel asli, tampilkan empty state profesional seperti “Tulisan akan ditambahkan segera” atau sembunyikan bagian ini melalui satu konfigurasi yang mudah diubah.
- Jangan membuat judul atau tautan artikel seolah-olah sudah dipublikasikan padahal belum.

### 6.8 Kontak
- Ajakan singkat untuk berdiskusi atau berkolaborasi.
- Sediakan link opsional untuk email, Instagram, LinkedIn, GitHub, atau platform lain hanya jika alamat aslinya sudah diisi.
- Gunakan `mailto:` untuk email yang valid.
- Jangan tampilkan placeholder seperti `example@email.com` sebagai kontak publik saat produksi.
- Tidak perlu form pada versi pertama. Jika kelak dibuat, harus dijelaskan bahwa form memerlukan layanan backend atau layanan pihak ketiga agar benar-benar terkirim.

### 6.9 Footer
- Nama Yusup Kurniawan.
- Tahun hak cipta dihasilkan otomatis dengan JavaScript.
- Tautan navigasi ringkas dan tautan media sosial yang benar-benar tersedia.
- Tombol kembali ke atas boleh ditambahkan jika tidak mengganggu.

## 7. Arahan Desain Visual

### Gaya
Modern, profesional, minimal, editorial, elegan, dengan hierarki tipografi kuat dan banyak ruang kosong. Jangan membuat tampilan terlalu ramai atau seperti template generik.

### Palet warna awal
- Navy background: `#102B68` atau warna sejenis.
- Navy gelap: `#071A42`.
- Panel utama: `#E7EAF0`.
- Panel/permukaan: `#F6F7FA`.
- Aksen biru: `#3F5BFF`.
- Teks utama: `#101116`.
- Teks sekunder: `#5F6470`.
- Garis/border: `rgba(20, 30, 60, 0.12)`.

Warna boleh disesuaikan agar rasio kontras teks tetap nyaman dibaca. Hindari teks abu-abu sangat pucat di atas panel terang.

### Komposisi yang terinspirasi dari gambar referensi
- Kanvas/latar luar navy dengan glow atau blur biru yang lembut.
- Panel situs lebar dengan sudut membulat besar dan border tipis.
- Hero memiliki judul besar, portrait fokus di bagian tengah/kanan, serta kartu info berlapis yang tidak menutupi teks penting.
- Aksen berbentuk pill untuk kategori.
- Bagian konten berikutnya menggunakan panel terang dengan layout editorial dan kartu sederhana.
- Gunakan bayangan lembut, bukan shadow gelap berlebihan.
- Hindari efek glassmorphism yang mengurangi keterbacaan.

### Tipografi
- Gunakan font modern sans-serif seperti Inter, Manrope, atau system font stack yang setara.
- Gunakan `clamp()` untuk ukuran judul responsif.
- Judul hero besar, tetapi tidak meluap pada layar kecil.
- Batasi lebar paragraf agar nyaman dibaca.

### Bentuk dan gerakan
- Radius panel/kartu: sekitar 16–28 px sesuai ukuran komponen.
- Tombol berbentuk pill atau radius besar.
- Transisi hover sekitar 150–250 ms.
- Gerakan harus ringan dan tidak membuat halaman terasa lambat.
- Hormati `prefers-reduced-motion: reduce`.

## 8. Persyaratan Responsif

Website harus dapat digunakan mulai dari lebar viewport **320 px** hingga layar desktop besar.

### Breakpoint acuan
- Mobile kecil: 320–479 px.
- Mobile besar: 480–767 px.
- Tablet: 768–1023 px.
- Desktop: 1024 px ke atas.

Breakpoint boleh diperbaiki berdasarkan kebutuhan layout, bukan diterapkan secara kaku.

### Perilaku responsif
- Tidak boleh muncul horizontal scrolling pada lebar 320 px.
- Navigasi berubah menjadi hamburger pada layar kecil.
- Hero desktop boleh dua kolom/berlapis; di mobile menjadi satu kolom dengan urutan yang jelas: identitas, judul/deskripsi, portrait, lalu CTA (atau urutan lain yang paling terbaca).
- Portrait dan kartu mengambang harus diperkecil atau disusun ulang di mobile, tidak menutupi nama atau tombol.
- Grid 3 kolom di desktop, 2 kolom di tablet, 1 kolom di mobile.
- Padding, ukuran font, dan jarak menggunakan nilai fleksibel seperti `clamp()`, `%`, `rem`, `min()`, dan `max()` bila sesuai.
- Tombol dan tautan harus mudah disentuh dengan jari.
- Uji menu mobile dalam kondisi terbuka dan tertutup.

## 9. Fungsionalitas JavaScript

Gunakan JavaScript vanilla, modular, mudah dibaca, dan tanpa dependensi framework.

Fitur yang dibutuhkan:
1. **Mobile navigation:** buka/tutup hamburger, tutup menu saat link dipilih, serta perbarui `aria-expanded`.
2. **Smooth scrolling:** navigasi anchor bergerak halus kecuali pengaturan reduced motion meminta gerakan dikurangi.
3. **Active navigation:** tandai menu berdasarkan bagian yang sedang dibaca, menggunakan `IntersectionObserver` jika sesuai.
4. **Reveal animation:** animasi masuk sederhana untuk elemen saat terlihat, dengan fallback jika JavaScript nonaktif atau reduced motion diaktifkan.
5. **Dynamic year:** tahun footer mengikuti tahun saat ini.
6. **Conditional links:** jangan menampilkan tombol kontak/proyek untuk URL kosong atau placeholder.
7. **No unnecessary effects:** jangan menambahkan typing animation, cursor custom, preloader, parallax berat, atau slider otomatis kecuali ada alasan jelas dan performanya tetap baik.

## 10. Teknologi dan Struktur Berkas

Gunakan HTML5 semantik, CSS3, dan JavaScript vanilla. Jangan memakai React, Vue, Bootstrap, Tailwind, jQuery, atau build tools untuk versi awal. Hindari library eksternal kecuali benar-benar diperlukan dan dijelaskan.

### Struktur proyek yang diharapkan

```text
portfolio-yusup/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   │   ├── profile-yusup.jpg      # ditambahkan oleh pemilik
│   │   └── projects/              # thumbnail proyek asli
│   └── icons/                     # jika diperlukan
└── README.md
```

### Ketentuan kode
- Gunakan nama class yang konsisten dan mudah dipahami.
- Pisahkan markup, style, dan interaksi sesuai struktur di atas.
- Hindari inline CSS dan inline JavaScript kecuali untuk kebutuhan sangat kecil yang beralasan.
- Tambahkan komentar hanya pada bagian yang membutuhkan penjelasan.
- Pastikan path aset benar dan tidak ada resource yang hilang.
- Gunakan CSS variables pada `:root` untuk warna, spacing utama, radius, dan shadow.
- Buat komponen visual konsisten, misalnya `.container`, `.section`, `.button`, `.project-card`, `.eyebrow`.
- Isi konten profil, daftar proyek, dan tautan harus mudah diperbarui.
- Sertakan README berisi cara menjalankan website secara lokal, mengganti foto, mengedit konten, dan mempublikasikan website.

## 11. SEO, Aksesibilitas, dan Kualitas

### SEO dasar
- Elemen `<title>` yang menyebut nama dan portofolio.
- Meta description yang akurat.
- Meta viewport.
- Open Graph metadata dasar, tanpa gambar sosial palsu.
- Heading berurutan: satu H1 utama, H2 untuk section, H3 untuk subbagian/kartu sesuai kebutuhan.
- Gunakan teks alternatif pada gambar yang bermakna.
- Favicon dapat ditambahkan jika aset tersedia.

### Aksesibilitas
- Gunakan landmark semantik: `header`, `nav`, `main`, `section`, `footer`.
- Semua tombol/link dapat diakses melalui keyboard.
- Fokus keyboard terlihat jelas.
- Tombol icon-only memiliki accessible label.
- Menu mobile menggunakan `aria-label`, `aria-expanded`, dan relasi yang sesuai.
- Kontras teks dan latar harus memadai.
- Jangan memakai warna sebagai satu-satunya penanda status.
- Sediakan fallback jika animasi dimatikan.

### Performa dan keamanan
- Optimalkan ukuran foto; gunakan WebP bila tersedia dan tetap sediakan format yang didukung browser.
- Tetapkan `width`/`height` atau `aspect-ratio` untuk mencegah layout shift.
- Gunakan lazy loading pada gambar di bawah hero.
- Jangan mengumpulkan data pribadi, memasang tracker, atau menambahkan secret/API key.
- Tidak boleh ada error JavaScript di console.
- Hindari video latar, animasi berat, dan gambar berukuran sangat besar.

## 12. Kriteria Penerimaan (Acceptance Criteria)

Pekerjaan dinyatakan selesai jika seluruh butir utama berikut terpenuhi:

- [ ] Website dapat dibuka dengan membuka `index.html` atau menggunakan Live Server di VS Code.
- [ ] Nama “Yusup Kurniawan” dan peran “Ketua PC IPNU Kota Bekasi” tampil jelas.
- [ ] Gaya visual mengambil inspirasi dari gambar referensi: navy, panel terang, portrait fokus, tipografi tegas, dan kartu modern.
- [ ] Seluruh bagian yang disebutkan dalam PRD tersedia, atau bagian opsional disiapkan dalam bentuk empty state yang jelas.
- [ ] Menu desktop dan hamburger mobile bekerja dengan benar.
- [ ] CTA “Lihat Karya” dan “Hubungi Saya” mengarah ke tujuan yang benar.
- [ ] Tidak ada tautan palsu, kontak contoh, atau proyek fiktif yang ditampilkan sebagai fakta.
- [ ] Tampilan berfungsi pada viewport 320 px, 375 px, 768 px, 1024 px, dan 1440 px tanpa horizontal overflow.
- [ ] Teks tidak terpotong; portrait dan kartu tidak bertumpuk secara tidak sengaja.
- [ ] Interaksi keyboard dan fokus terlihat; `prefers-reduced-motion` dihormati.
- [ ] Gambar memiliki alt text yang sesuai dan gambar non-hero memakai lazy loading bila relevan.
- [ ] Console browser bebas error dan tidak ada aset lokal yang gagal dimuat.
- [ ] README tersedia dan menjelaskan cara mengganti konten/aset serta menjalankan website.

## 13. Rencana Pengujian Manual

1. Buka dengan Live Server pada VS Code.
2. Uji tampilan pada lebar 320, 375, 768, 1024, dan 1440 piksel melalui DevTools.
3. Klik setiap item menu dan CTA; pastikan menuju bagian yang benar.
4. Buka dan tutup hamburger, pilih menu, lalu pastikan menu kembali tertutup.
5. Navigasi menggunakan Tab, Shift+Tab, Enter, dan Space; perhatikan indikator fokus.
6. Aktifkan pengaturan reduced motion pada sistem/browser dan pastikan animasi dikurangi.
7. Ubah sementara teks panjang untuk mengecek apakah layout tetap aman.
8. Periksa Console dan Network untuk error JavaScript atau file yang tidak ditemukan.
9. Pastikan semua tautan eksternal membuka tujuan yang benar dan menggunakan atribut keamanan yang sesuai jika dibuka di tab baru.
10. Uji kondisi saat foto profil atau gambar proyek belum tersedia; layout harus tetap profesional.

## 14. Tahapan Implementasi untuk AI Agent

Kerjakan berurutan dan periksa hasil setiap tahap:

1. **Analisis dan setup:** periksa folder proyek yang sedang terbuka. Jika sudah ada file penting, jangan menimpa sebelum memeriksanya. Buat struktur file yang diperlukan.
2. **Kerangka HTML:** buat seluruh section semantik dan navigasi terlebih dahulu.
3. **Design system CSS:** definisikan variabel, tipografi, tombol, container, panel, kartu, dan background.
4. **Desktop UI:** implementasikan layout desktop berdasarkan arahan visual.
5. **Responsive UI:** sesuaikan tablet dan mobile, lalu uji pada lebar 320 px ke atas.
6. **JavaScript:** tambahkan navigasi mobile, active section, reveal animation, dan tahun footer.
7. **Quality assurance:** cek link, aset, console, aksesibilitas, reduced motion, serta overflow.
8. **Dokumentasi:** buat README dan rangkum file yang dibuat serta cara mengujinya.

Jangan berhenti setelah membuat mockup visual. Hasil akhir harus berupa HTML, CSS, dan JavaScript yang berjalan.

## 15. Instruksi Final Khusus untuk AI Agent

- Baca PRD ini sampai selesai sebelum mulai menulis kode.
- Gunakan gambar referensi yang disediakan sebagai panduan gaya; jangan mencoba menyalin identitas, teks, atau foto orang dari desain contoh.
- Jangan membuat fakta, prestasi, angka statistik, riwayat jabatan, kontak, tautan sosial, maupun proyek selesai yang belum dikonfirmasi.
- Jika data belum tersedia, gunakan placeholder yang diberi komentar untuk diganti pemilik, atau sembunyikan elemen yang tidak siap.
- Prioritaskan struktur yang rapi, keterbacaan, responsivitas, aksesibilitas, dan kemudahan pengembangan—bukan sekadar efek visual.
- Buat implementasi lengkap di file proyek, bukan hanya menampilkan potongan kode di chat.
- Setelah selesai, laporkan: file yang dibuat/diubah, fitur yang berfungsi, hasil pengujian viewport, dan data/aset yang masih perlu diberikan oleh pemilik.

---

## 16. Data yang Perlu Disiapkan Pemilik Website

Daftar ini tidak menghalangi pembuatan versi awal, tetapi perlu dilengkapi agar website siap dipublikasikan:

- [ ] Foto profil profesional milik Yusup.
- [ ] Periode resmi jabatan Ketua PC IPNU Kota Bekasi.
- [ ] Biografi singkat yang telah disetujui.
- [ ] Pengalaman organisasi atau kegiatan yang boleh dipublikasikan.
- [ ] Daftar proyek asli, statusnya, teknologi yang digunakan, dan tautan demo/repository jika tersedia.
- [ ] Artikel atau tulisan yang sudah dipublikasikan (opsional).
- [ ] Email dan tautan media sosial profesional yang ingin ditampilkan.
- [ ] CV PDF (opsional, jika ingin tombol unduh CV).

**Catatan:** Buat versi awal tetap utuh meskipun daftar data di atas belum lengkap. Website harus tampak profesional tanpa mengarang informasi.
