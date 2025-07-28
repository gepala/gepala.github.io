import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ArrowLeft, Save, Plus, Minus, Upload, X } from "lucide-react";
import { useApp, useAuth } from "../../App";
import { toast } from "sonner";

export default function GalleryEditor() {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const { gallery, addGalleryItem, updateGalleryItem } = useApp();
  const { isAuthenticated } = useAuth();

  const [form, setForm] = useState({
    title: "",
    description: "",
    images: [] as string[],
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const isEditing = !!id;
  const existingItem = isEditing ? gallery.find((g) => g.id === id) : null;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/galeri");
      return;
    }

    if (isEditing && existingItem) {
      setForm({
        title: existingItem.title,
        description: existingItem.description,
        images: existingItem.images,
      });
    }
  }, [isAuthenticated, isEditing, existingItem, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  const handleSave = () => {
    if (!form.title || !form.description) {
      toast.error("Mohon lengkapi judul dan deskripsi");
      return;
    }

    if (form.images.length === 0) {
      toast.error("Mohon tambahkan minimal satu gambar");
      return;
    }

    const galleryData = {
      id: isEditing ? id! : Date.now().toString(),
      title: form.title,
      description: form.description,
      images: form.images,
      createdAt: isEditing
        ? existingItem!.createdAt
        : new Date().toISOString().split("T")[0],
    };

    if (isEditing) {
      updateGalleryItem(id!, galleryData);
      toast.success("Galeri berhasil diperbarui");
    } else {
      addGalleryItem(galleryData);
      toast.success("Galeri berhasil ditambahkan");
    }

    navigate("/galeri");
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    Array.from(files).forEach((file) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result as string;
          setForm((prev) => ({
            ...prev,
            images: [...prev.images, result],
          }));
        };
        reader.readAsDataURL(file);
      } else {
        toast.error("File harus berupa gambar");
      }
    });

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const removeImage = (index: number) => {
    setForm((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button
              variant="outline"
              className="mb-6 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
              asChild
            >
              <Link to="/galeri">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Galeri
              </Link>
            </Button>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-yellow-500">
                  {isEditing ? "Edit Galeri" : "Tambah Galeri Baru"}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Title */}
                <div>
                  <Label htmlFor="title">Judul Galeri *</Label>
                  <Input
                    id="title"
                    value={form.title}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, title: e.target.value }))
                    }
                    className="bg-gray-700 border-gray-600"
                    placeholder="Masukkan judul galeri..."
                  />
                </div>

                {/* Description */}
                <div>
                  <Label htmlFor="description">Deskripsi *</Label>
                  <Textarea
                    id="description"
                    value={form.description}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    className="bg-gray-700 border-gray-600"
                    placeholder="Deskripsi galeri..."
                  />
                </div>

                {/* Images */}
                <div>
                  <Label>Gambar *</Label>
                  <p className="text-sm text-gray-400 mb-3">
                    Upload gambar dari komputer Anda (JPEG, PNG, WebP)
                  </p>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                  />

                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    className="mb-4 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Gambar
                  </Button>

                  {form.images.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {form.images.map((image, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={image}
                            alt={`Preview ${index + 1}`}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            onClick={() => removeImage(index)}
                            className="absolute -top-2 -right-2 w-6 h-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-3 p-3 bg-gray-700 rounded-lg">
                    <p className="text-sm text-gray-300">
                      <strong>Tips:</strong> Anda dapat memilih beberapa gambar
                      sekaligus. Format yang didukung: JPEG, PNG, WebP.
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-end space-x-4 pt-6">
                  <Button variant="outline" onClick={() => navigate("/galeri")}>
                    Batal
                  </Button>
                  <Button
                    onClick={handleSave}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    {isEditing ? "Perbarui" : "Simpan"} Galeri
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
