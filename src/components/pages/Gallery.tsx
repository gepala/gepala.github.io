import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { Plus, Edit, Trash, Calendar, Images, X } from "lucide-react";
import { useApp, useAuth } from "../../App";
import { toast } from "sonner";
import { ImageWithFallback } from "./ImageWithFallback";
import AdminLoginButton from "../AdminLoginButton";

export default function Gallery() {
  const { gallery, deleteGalleryItem } = useApp();
  const { isAuthenticated } = useAuth();
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const handleDelete = (id: string) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus galeri ini?")) {
      deleteGalleryItem(id);
      toast.success("Galeri berhasil dihapus");
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
              Galeri GEPALA
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dokumentasi kegiatan, ekspedisi, dan momen-momen berharga dalam
              perjalanan GEPALA selama bertahun-tahun
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {gallery.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {gallery.map((item) => (
                  <Card
                    key={item.id}
                    className="bg-gray-800 border-gray-700 hover:border-yellow-500 transition-all overflow-hidden group"
                  >
                    <div className="relative">
                      {/* Main Image */}
                      <div className="aspect-video relative overflow-hidden">
                        <ImageWithFallback
                          src={item.images[0]}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                          onClick={() =>
                            setSelectedImage({
                              src: item.images[0],
                              alt: item.title,
                            })
                          }
                        />

                        {/* Image Count Badge */}
                        {item.images.length > 1 && (
                          <Badge className="absolute top-2 right-2 bg-black/50 text-white">
                            <Images className="w-3 h-3 mr-1" />
                            {item.images.length}
                          </Badge>
                        )}

                        {/* Date Badge */}
                        <Badge className="absolute bottom-2 left-2 bg-yellow-500 text-black">
                          <Calendar className="w-3 h-3 mr-1" />
                          {formatDate(item.createdAt)}
                        </Badge>
                      </div>

                      {/* Thumbnail Row */}
                      {item.images.length > 1 && (
                        <div className="flex space-x-1 p-2 bg-gray-700">
                          {item.images.slice(1, 4).map((image, index) => (
                            <div
                              key={index}
                              className="relative w-16 h-12 rounded overflow-hidden cursor-pointer hover:opacity-80"
                              onClick={() =>
                                setSelectedImage({
                                  src: image,
                                  alt: `${item.title} - ${index + 2}`,
                                })
                              }
                            >
                              <ImageWithFallback
                                src={image}
                                alt={`${item.title} - ${index + 2}`}
                                className="w-full h-full object-cover"
                              />

                              {/* Show +count for last thumbnail if more images */}
                              {index === 2 && item.images.length > 4 && (
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-xs">
                                  +{item.images.length - 4}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl text-yellow-500 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {item.description}
                      </p>

                      <div className="flex justify-between items-center">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            setSelectedImage({
                              src: item.images[0],
                              alt: item.title,
                            })
                          }
                          className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                        >
                          Lihat Galeri
                        </Button>

                        {isAuthenticated && (
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm" asChild>
                              <Link to={`/galeri/editor/${item.id}`}>
                                <Edit className="w-4 h-4" />
                              </Link>
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDelete(item.id)}
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
                  Belum ada galeri yang tersedia.
                </p>
              </div>
            )}

            {/* CRUD Controls */}
            <div className="text-center">
              {isAuthenticated ? (
                <Button
                  className="bg-yellow-500 hover:bg-yellow-600 text-black"
                  asChild
                >
                  <Link to="/galeri/editor">
                    <Plus className="w-4 h-4 mr-2" />
                    Tambah Galeri
                  </Link>
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <AdminLoginButton />

      {/* Image Modal */}
      {selectedImage && (
        <Dialog
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogContent className="max-w-4xl bg-gray-900 border-gray-700 p-0">
            <DialogHeader className="sr-only">
              <DialogTitle>Preview Gambar</DialogTitle>
              <DialogDescription>
                Preview gambar galeri GEPALA - {selectedImage.alt}
              </DialogDescription>
            </DialogHeader>
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2 z-10 bg-black/50 text-white hover:bg-black/70"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-4 h-4" />
              </Button>
              <ImageWithFallback
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
