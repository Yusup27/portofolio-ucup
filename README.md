# Portfolio Yusup Kurniawan

Website portofolio pribadi untuk Yusup Kurniawan dengan pendekatan single-page, responsif, dan sesuai dengan PRD yang disusun sebelumnya.

## Struktur project

```text
portfolio-yusup/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   │   ├── profile-placeholder.svg
│   │   └── projects/
│   │       ├── project-portfolio.svg
│   │       ├── project-company.svg
│   │       └── project-system.svg
│   └── icons/
├── README.md
└── PRD_Portofolio_Yusup_Kurniawan.md
```

## Menjalankan website secara lokal

1. Buka folder project di VS Code.
2. Jalankan Live Server, atau buka file `index.html` langsung di browser.
3. Untuk server lokal manual, jalankan:

```bash
python -m http.server 8000
```

Lalu buka:

```text
http://localhost:8000/
```

## Mengganti konten

### Profil dan teks utama
Edit file `index.html` pada bagian section seperti hero, tentang, fokus, pengalaman, proyek, artikel, dan kontak.

### Foto profil
Ganti file `assets/images/profile-placeholder.svg` dengan foto profesional yang sesuai. Pastikan nama file tetap sama atau sesuaikan path di `index.html`.

### Thumbnail proyek
Ganti file SVG di folder `assets/images/projects/` atau ganti path pada elemen `<img>` di `index.html` sesuai kebutuhan.

### Tautan media sosial dan kontak
Pada halaman, tombol kontak dan media sosial diatur agar tidak menampilkan tautan kosong. Untuk mengaktifkannya, edit elemen `<a>` di section kontak dan isi atribut `href` sesuai data yang valid.

## Catatan desain

- Layout dibuat responsif mulai dari layar kecil sampai desktop.
- Warna utama menggunakan palet navy yang sesuai PRD.
- Navbar mobile, smooth scroll, reveal animation, dan dynamic year sudah diatur di `js/script.js`.
- Aksesibilitas dasar sudah disiapkan: focus ring, landmark, `aria-label`, dan reduced motion fallback.

## Publikasi

Ketika data resmi sudah siap, tinggal lengkapi:

- foto profil
- jabatan dan periode organisasi
- tautan kontak yang valid
- proyek/profil yang sudah tersedia
- artikel atau tulisan yang sudah dipublikasikan

Semua konten tetap mudah diperbarui tanpa framework.
