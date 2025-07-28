import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-900">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl text-yellow-500 mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl text-white mb-4">Halaman Tidak Ditemukan</h2>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. 
            Mungkin halaman telah dipindahkan atau URL yang dimasukkan salah.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3"
            asChild
          >
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Kembali ke Beranda
            </Link>
          </Button>
          
          <Button 
            variant="outline" 
            className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-6 py-3"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali
          </Button>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">Atau kunjungi halaman lain:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link 
              to="/tentang" 
              className="text-yellow-500 hover:text-yellow-400 text-sm underline"
            >
              Tentang
            </Link>
            <span className="text-gray-600">•</span>
            <Link 
              to="/kegiatan" 
              className="text-yellow-500 hover:text-yellow-400 text-sm underline"
            >
              Kegiatan
            </Link>
            <span className="text-gray-600">•</span>
            <Link 
              to="/materi" 
              className="text-yellow-500 hover:text-yellow-400 text-sm underline"
            >
              Materi
            </Link>
            <span className="text-gray-600">•</span>
            <Link 
              to="/artikel" 
              className="text-yellow-500 hover:text-yellow-400 text-sm underline"
            >
              Artikel
            </Link>
            <span className="text-gray-600">•</span>
            <Link 
              to="/galeri" 
              className="text-yellow-500 hover:text-yellow-400 text-sm underline"
            >
              Galeri
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}