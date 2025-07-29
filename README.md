# GEPALA - Website Resmi

Website resmi Perhimpunan Pendaki Gunung dan Penempuh Rimba (PPGPR) GEPALA SMAN 15 Bandung.

## 🏔️ Tentang GEPALA

GEPALA adalah organisasi pecinta alam yang berdedikasi untuk:

- Mengabdi kepada Tuhan Yang Maha Esa
- Memelihara alam serta isinya
- Mengabdi kepada Bangsa dan Tanah Air
- Menghormati tata kehidupan masyarakat
- Mempererat tali persaudaraan sesama pecinta alam

## 🚀 Teknologi yang Digunakan

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **UI Components**: Shadcn/ui
- **Fonts**: M Plus 2 (body text) + Montserrat (headings)

## 📦 Instalasi

1. Clone repository ini:

```bash
git clone https://github.com/gepala/gepala.github.io.git
cd gepala.github.io
```

2. Install dependencies:

```bash
npm install
```

3. Jalankan development server:

```bash
npm run dev
```

4. Build untuk production:

```bash
npm run build
```

## 🌐 Deployment ke GitHub Pages

Website ini menggunakan custom domain `gepala.github.io` dan sudah dikonfigurasi untuk deployment otomatis.

### Setup Manual:

1. **Aktifkan GitHub Pages** di repository settings
2. **Pilih source**: "GitHub Actions"
3. **Set custom domain**: `gepala.github.io`
4. **Push ke branch main** - deployment akan otomatis berjalan

### Konfigurasi yang Sudah Diterapkan:

- ✅ **Base path**: `/` di `vite.config.ts` (untuk custom domain)
- ✅ **BrowserRouter**: Untuk routing normal
- ✅ **CNAME**: Konfigurasi untuk custom domain
- ✅ **GitHub Actions**: Workflow otomatis untuk build dan deploy

### URL Website:

Setelah deploy, website akan tersedia di:
`https://gepala.github.io/`

## 📁 Struktur Project

```
src/
├── components/
│   ├── pages/          # Halaman-halaman utama
│   ├── ui/             # Komponen UI reusable
│   ├── Navbar.tsx      # Navigasi
│   └── Footer.tsx      # Footer
├── styles/
│   ├── globals.css     # CSS global + font loading
│   └── static/         # Font files
└── App.tsx             # Root component + routing
```

## 🎨 Fitur

- **Responsive Design**: Optimized untuk desktop dan mobile
- **Dark Theme**: Interface gelap yang nyaman di mata
- **Admin Panel**: Login untuk mengelola konten
- **Dynamic Content**: Artikel, galeri, dan materi yang dapat diupdate
- **SEO Optimized**: Meta tags dan semantic HTML
- **Fast Loading**: Optimized assets dan lazy loading

## 🔧 Development

### Scripts yang Tersedia:

- `npm run dev` - Development server
- `npm run build` - Build production
- `npm run preview` - Preview build production
- `npm run lint` - Linting

### Font Configuration:

- **M Plus 2**: Font utama untuk body text
- **Montserrat**: Font untuk headings (H1-H4)
- **Letter Spacing**: 0.1em untuk readability

## 📝 Kontribusi

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 Lisensi

Project ini dilisensikan di bawah MIT License.

---

**GEPALA SMAN 15 Bandung**  
_"Tabah Sampai Akhir"_ 🏔️
