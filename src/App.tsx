import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, createContext, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/pages/Homepage";
import About from "./components/pages/About";
import Activities from "./components/pages/Activities";
import Materials from "./components/pages/Materials";
import Articles from "./components/pages/Articles";
import Gallery from "./components/pages/Gallery";
import ArticleDetail from "./components/pages/ArticleDetail";
import MaterialDetail from "./components/pages/MaterialDetail";
import ArticleEditor from "./components/pages/ArticleEditor";
import GalleryEditor from "./components/pages/GalleryEditor";
import NotFound from "./components/pages/NotFound";
import { Toaster } from "./components/ui/sonner";
import "./styles/globals.css";

// ScrollToTop component to automatically scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Context for authentication and data management
interface AuthContextType {
  isAuthenticated: boolean;
  currentUser: { id: string; name: string } | null;
  login: (id: string, password: string) => boolean;
  logout: () => void;
}

interface Article {
  id: string;
  title: string;
  content: string;
  author: {
    type: "individual" | "group";
    name: string;
    nta?: string;
    members?: string[];
    cohort?: string[];
  };
  createdAt: string;
  excerpt: string;
}

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  images: string[];
  createdAt: string;
}

interface AppContextType {
  articles: Article[];
  gallery: GalleryItem[];
  addArticle: (article: Article) => void;
  updateArticle: (id: string, article: Article) => void;
  deleteArticle: (id: string) => void;
  addGalleryItem: (item: GalleryItem) => void;
  updateGalleryItem: (id: string, item: GalleryItem) => void;
  deleteGalleryItem: (id: string) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);
const AppContext = createContext<AppContextType | null>(null);

// Mock data
const mockArticles: Article[] = [
  {
    id: "1",
    title: "Mengenal Teknik Dasar Pendakian Gunung",
    content:
      "Pendakian gunung merupakan salah satu kegiatan yang membutuhkan persiapan matang...",
    author: {
      type: "individual",
      name: "John Doe",
      nta: "AG001",
    },
    createdAt: "2024-01-15",
    excerpt: "Panduan lengkap untuk pemula dalam pendakian gunung",
  },
  {
    id: "2",
    title: "Survival di Alam Bebas",
    content:
      "Kemampuan survival adalah keterampilan penting bagi setiap pecinta alam...",
    author: {
      type: "group",
      name: "Tim Ekspedisi Rinjani",
      members: ["Alice", "Bob", "Charlie"],
      cohort: ["40", "41"],
    },
    createdAt: "2024-01-10",
    excerpt: "Tips dan trik bertahan hidup di alam bebas",
  },
];

const mockGallery: GalleryItem[] = [
  {
    id: "1",
    title: "Ekspedisi Rinjani 2024",
    description: "Perjalanan menakjubkan ke puncak Rinjani",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600",
    ],
    createdAt: "2024-01-20",
  },
  {
    id: "2",
    title: "Latihan Rutin GEPALA",
    description: "Dokumentasi kegiatan latihan rutin anggota GEPALA",
    images: [
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600",
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600",
    ],
    createdAt: "2024-01-15",
  },
];

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<{
    id: string;
    name: string;
  } | null>(null);
  const [articles, setArticles] = useState<Article[]>(mockArticles);
  const [gallery, setGallery] = useState<GalleryItem[]>(mockGallery);

  const login = (id: string, password: string): boolean => {
    const users = [
      { id: "dp", password: "Sejak1982", name: "Dewan Pengurus" },
      { id: "mppo", password: "TabahSampaiAkhir", name: "MPPO" },
    ];

    const user = users.find((u) => u.id === id && u.password === password);
    if (user) {
      setIsAuthenticated(true);
      setCurrentUser({ id: user.id, name: user.name });
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  const addArticle = (article: Article) => {
    setArticles((prev) => [...prev, article]);
  };

  const updateArticle = (id: string, article: Article) => {
    setArticles((prev) => prev.map((a) => (a.id === id ? article : a)));
  };

  const deleteArticle = (id: string) => {
    setArticles((prev) => prev.filter((a) => a.id !== id));
  };

  const addGalleryItem = (item: GalleryItem) => {
    setGallery((prev) => [...prev, item]);
  };

  const updateGalleryItem = (id: string, item: GalleryItem) => {
    setGallery((prev) => prev.map((g) => (g.id === id ? item : g)));
  };

  const deleteGalleryItem = (id: string) => {
    setGallery((prev) => prev.filter((g) => g.id !== id));
  };

  const authValue: AuthContextType = {
    isAuthenticated,
    currentUser,
    login,
    logout,
  };

  const appValue: AppContextType = {
    articles,
    gallery,
    addArticle,
    updateArticle,
    deleteArticle,
    addGalleryItem,
    updateGalleryItem,
    deleteGalleryItem,
  };

  return (
    <AuthContext.Provider value={authValue}>
      <AppContext.Provider value={appValue}>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-gray-900 text-white">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/tentang" element={<About />} />
                <Route path="/kegiatan" element={<Activities />} />
                <Route path="/materi" element={<Materials />} />
                <Route path="/materi/:id" element={<MaterialDetail />} />
                <Route path="/artikel" element={<Articles />} />
                <Route path="/artikel/:id" element={<ArticleDetail />} />
                <Route path="/artikel/editor" element={<ArticleEditor />} />
                <Route path="/artikel/editor/:id" element={<ArticleEditor />} />
                <Route path="/galeri" element={<Gallery />} />
                <Route path="/galeri/editor" element={<GalleryEditor />} />
                <Route path="/galeri/editor/:id" element={<GalleryEditor />} />
                {/* Catch-all route for 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <Toaster />
          </div>
        </Router>
      </AppContext.Provider>
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
