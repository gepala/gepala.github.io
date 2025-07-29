import { Link } from "react-router-dom";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-24 gap-8">
          {/* Organisasi */}
          <div className="lg:col-span-7">
            <div className="flex items-center mb-4">
              <img
                src="/logoMataAngin.svg"
                alt="Logo Mata Angin GEPALA"
                className="w-12 h-8 mr-3"
              />
              <div>
                <h4 className="text-xs text-yellow-400">
                  Perhimpunan Pendaki Gunung dan Penempuh Rimba
                </h4>
                <h3 className="text-lg text-yellow-500">G E P A L A</h3>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-400 text-justify">
                GEPALA merupakan ekstrakurikuler pecinta alam di SMAN 15 Bandung
                yang sudah berdiri sejak 20 Juli 1982 dan merupakan
                ekstrakurikuler tertua di SMAN 15 Bandung.
                <br />
              </p>
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
                  <svg
                    fill="currentColor"
                    width="20"
                    height="20"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z" />
                    <path d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z" />
                    <path d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@ppgprgepala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  <svg
                    fill="currentColor"
                    width="20"
                    height="20"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M508.64,148.79c0-45-33.1-81.2-74-81.2C379.24,65,322.74,64,265,64H247c-57.6,0-114.2,1-169.6,3.6-40.8,0-73.9,36.4-73.9,81.4C1,184.59-.06,220.19,0,255.79q-.15,53.4,3.4,106.9c0,45,33.1,81.5,73.9,81.5,58.2,2.7,117.9,3.9,178.6,3.8q91.2.3,178.6-3.8c40.9,0,74-36.5,74-81.5,2.4-35.7,3.5-71.3,3.4-107Q512.24,202.29,508.64,148.79ZM207,353.89V157.39l145,98.2Z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@ppgpr.gepala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  <svg
                    fill="currentColor"
                    width="20"
                    height="20"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Menu Utama */}
          <div className="lg:col-span-3">
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
          <div className="lg:col-span-7">
            <h3 className="text-lg mb-4 text-yellow-500">Kontak</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div>
                <p className="text-sm text-white">Alamat:</p>
                <p>Jl. Sarimanis No.1, Kel. Sarijadi, Kec. Sukasari</p>
                <p>Kota Bandung, Jawa Barat 40151</p>
              </div>
              <div className="mt-4">
                <p className="text-sm text-white">Email:</p>
                <a
                  href="mailto:ppgpr.gepala@gmail.com"
                  className="hover:text-yellow-500 transition-colors"
                >
                  ppgpr.gepala@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Lokasi */}
          <div className="lg:col-span-7">
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
          <p>
            &copy; 2025 Perhimpunan Pendaki Gunung dan Penempuh Rimba GEPALA.
          </p>
          <p className="mt-1">Tabah Sampai Akhir</p>
        </div>
      </div>
    </footer>
  );
}
