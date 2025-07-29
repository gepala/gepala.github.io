import { useParams, Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ArrowLeft, Calendar, User, Users, Edit } from "lucide-react";
import { useApp, useAuth } from "../../App";
import { formatCohortDisplay } from "../../lib/utils";

export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const { articles } = useApp();
  const { isAuthenticated } = useAuth();

  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-red-500 mb-4">
            Artikel Tidak Ditemukan
          </h1>
          <Button asChild>
            <Link to="/artikel">Kembali ke Daftar Artikel</Link>
          </Button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen pt-20">
      <article className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button
              variant="outline"
              className="mb-6 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
              asChild
            >
              <Link to="/artikel">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Artikel
              </Link>
            </Button>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
              {/* Header */}
              <div className="mb-8">
                <div className="flex justify-between items-start mb-4">
                  <Badge
                    variant="outline"
                    className="border-yellow-500 text-yellow-500"
                  >
                    {article.author.type === "individual"
                      ? "Individu"
                      : "Kelompok"}
                  </Badge>
                  {isAuthenticated && (
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/artikel/editor/${article.id}`}>
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </Link>
                    </Button>
                  )}
                </div>

                <h1 className="text-3xl md:text-4xl text-yellow-500 mb-4">
                  {article.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(article.createdAt)}
                  </div>

                  <div className="flex items-center">
                    {article.author.type === "individual" ? (
                      <>
                        <User className="w-4 h-4 mr-2" />
                        <span>{article.author.name}</span>
                        {article.author.nta && (
                          <Badge variant="secondary" className="ml-2 text-xs">
                            {article.author.nta}
                          </Badge>
                        )}
                      </>
                    ) : (
                      <>
                        <Users className="w-4 h-4 mr-2" />
                        <span>{article.author.name}</span>
                        {article.author.cohort && (
                          <Badge variant="secondary" className="ml-2 text-xs">
                            Angkatan{" "}
                            {formatCohortDisplay(article.author.cohort)}
                          </Badge>
                        )}
                      </>
                    )}
                  </div>
                </div>

                {article.author.type === "group" && article.author.members && (
                  <div className="mt-4 p-4 bg-gray-700 rounded-lg">
                    <h3 className="text-sm text-yellow-500 mb-2">
                      Anggota Tim:
                    </h3>
                    <p className="text-sm text-gray-300">
                      {article.author.members.join(", ")}
                    </p>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="prose prose-invert prose-yellow max-w-none">
                <div
                  className="text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-8 flex justify-between">
              <Button
                variant="outline"
                className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                asChild
              >
                <Link to="/artikel">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Kembali ke Artikel
                </Link>
              </Button>

              <Button
                className="bg-yellow-500 hover:bg-yellow-600 text-black"
                onClick={() => window.print()}
              >
                Cetak Artikel
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
