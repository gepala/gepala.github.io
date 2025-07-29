import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import {
  Search,
  Plus,
  Edit,
  Trash,
  Calendar,
  User,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useApp, useAuth } from "../../App";
import { toast } from "sonner";
import AdminLoginButton from "../AdminLoginButton";
import { formatCohortDisplay } from "../../lib/utils";

export default function Articles() {
  const { articles, deleteArticle } = useApp();
  const { isAuthenticated } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.author.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = filteredArticles.slice(
    startIndex,
    startIndex + articlesPerPage
  );

  const handleDelete = (id: string) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus artikel ini?")) {
      deleteArticle(id);
      toast.success("Artikel berhasil dihapus");
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl mb-6 text-yellow-500">
              Artikel
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Kumpulan artikel dan tulisan tentang kepecintaalaman, pengalaman
              pendakian, dan kehidupan organisasi GEPALA
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Cari artikel..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-10 bg-gray-800 border-gray-700 text-white"
              />
            </div>
            <p className="text-center text-gray-400 text-sm mt-2">
              {filteredArticles.length} artikel ditemukan
            </p>
          </div>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {currentArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {currentArticles.map((article) => (
                  <Card
                    key={article.id}
                    className="bg-gray-800 border-gray-700 hover:border-yellow-500 transition-all"
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge
                          variant="outline"
                          className="border-yellow-500 text-yellow-500"
                        >
                          {article.author.type === "individual"
                            ? "Individu"
                            : "Kelompok"}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-400">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(article.createdAt)}
                        </div>
                      </div>
                      <CardTitle className="text-xl text-yellow-500 hover:text-yellow-400">
                        <Link to={`/artikel/${article.id}`}>
                          {article.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <div
                        className="text-gray-300 mb-4 line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: article.excerpt }}
                      />

                      <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
                        {article.author.type === "individual" ? (
                          <>
                            <User className="w-4 h-4" />
                            <span>{article.author.name}</span>
                            {article.author.nta && (
                              <Badge variant="secondary" className="text-xs">
                                {article.author.nta}
                              </Badge>
                            )}
                          </>
                        ) : (
                          <>
                            <Users className="w-4 h-4" />
                            <span>{article.author.name}</span>
                            {article.author.cohort && (
                              <Badge variant="secondary" className="text-xs">
                                Angkatan{" "}
                                {formatCohortDisplay(article.author.cohort)}
                              </Badge>
                            )}
                          </>
                        )}
                      </div>

                      <div className="flex justify-between items-center">
                        <Button variant="outline" size="sm" asChild>
                          <Link to={`/artikel/${article.id}`}>
                            Baca Selengkapnya
                          </Link>
                        </Button>

                        {isAuthenticated && (
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm" asChild>
                              <Link to={`/artikel/editor/${article.id}`}>
                                <Edit className="w-4 h-4" />
                              </Link>
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDelete(article.id)}
                              className="text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
                            >
                              <Trash className="w-4 h-4" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-400 text-lg">
                  {searchTerm
                    ? "Tidak ada artikel yang sesuai dengan pencarian."
                    : "Belum ada artikel yang tersedia."}
                </p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Sebelumnya
                </Button>

                <span className="text-gray-400">
                  Halaman {currentPage} dari {totalPages}
                </span>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                >
                  Selanjutnya
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}

            {/* CRUD Controls */}
            <div className="mt-12 text-center">
              {isAuthenticated ? (
                <Button
                  className="bg-yellow-500 hover:bg-yellow-600 text-black"
                  asChild
                >
                  <Link to="/artikel/editor">
                    <Plus className="w-4 h-4 mr-2" />
                    Tambah Artikel
                  </Link>
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </section>
      <AdminLoginButton />
    </div>
  );
}
