import { Link } from "react-router-dom";
import { Instagram, Youtube, Music } from "lucide-react";

const menuItems = [
  { name: "Beranda", path: "/" },
  { name: "Tentang", path: "/tentang" },
  { name: "Kegiatan", path: "/kegiatan" },
  { name: "Materi", path: "/materi" },
  { name: "Artikel", path: "/artikel" },
  { name: "Galeri", path: "/galeri" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organisasi */}
          <div>
            <h3 className="text-lg mb-4 text-yellow-500">Organisasi</h3>
            <div className="space-y-2">
              <p className="text-sm">
                Perhimpunan Pendaki Gunung dan Penempuh Rimba
              </p>
              <p className="tracking-[0.2em]">GEPALA</p>
              <p className="text-sm text-gray-400">SMAN 15 Bandung</p>
              <p className="text-sm text-gray-400">Sejak 20 Juli 1982</p>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-md mb-3 text-yellow-500">Sosial Media</h4>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/ppgprgepala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.youtube.com/@ppgprgepala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@ppgpr.gepala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  <Music className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Menu Utama */}
          <div>
            <h3 className="text-lg mb-4 text-yellow-500">Menu Utama</h3>
            <div className="space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block text-sm text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-lg mb-4 text-yellow-500">Kontak</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div>
                <p className="text-white">Alamat:</p>
                <p>Jl. Sariasih No.10</p>
                <p>Sarijadi, Sukasari</p>
                <p>Kota Bandung, Jawa Barat 40151</p>
              </div>
              <div className="mt-4">
                <p className="text-white">Email:</p>
                <a
                  href="mailto:gepala.sman15@gmail.com"
                  className="hover:text-yellow-500 transition-colors"
                >
                  gepala.sman15@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Lokasi */}
          <div>
            <h3 className="text-lg mb-4 text-yellow-500">Lokasi</h3>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?q=SMAN+15+Bandung&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; 2024 GEPALA SMAN 15 Bandung. Hak Cipta Dilindungi.</p>
          <p className="mt-1">Tabah Sampai Akhir</p>
        </div>
      </div>
    </footer>
  );
}
