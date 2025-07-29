import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import {
  ArrowLeft,
  Save,
  Plus,
  Minus,
  Bold,
  Italic,
  Underline,
  Image,
  List,
  AlignCenter,
  AlignLeft,
  AlignRight,
} from "lucide-react";
import { useApp, useAuth } from "../../App";
import { toast } from "sonner";

export default function ArticleEditor() {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const { articles, addArticle, updateArticle } = useApp();
  const { isAuthenticated } = useAuth();

  const [form, setForm] = useState({
    title: "",
    content: "",
    excerpt: "",
    authorType: "individual" as "individual" | "group",
    authorName: "",
    nta: "",
    groupMembers: [""],
    cohort: [""],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isEditing = !!id;
  const existingArticle = isEditing ? articles.find((a) => a.id === id) : null;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/artikel");
      return;
    }

    if (isEditing && existingArticle) {
      setForm({
        title: existingArticle.title,
        content: existingArticle.content,
        excerpt: existingArticle.excerpt,
        authorType: existingArticle.author.type,
        authorName: existingArticle.author.name,
        nta: existingArticle.author.nta || "",
        groupMembers: existingArticle.author.members || [""],
        cohort: existingArticle.author.cohort || [""],
      });
    }
  }, [isAuthenticated, isEditing, existingArticle, navigate]);

  useEffect(() => {
    if (contentRef.current && form.content) {
      contentRef.current.innerHTML = form.content;
    }
  }, [contentRef.current]);

  if (!isAuthenticated) {
    return null;
  }

  const handleSave = () => {
    if (!form.title || !form.content || !form.authorName) {
      toast.error("Mohon lengkapi semua field yang diperlukan");
      return;
    }

    // Get content from contentRef if available
    const content = contentRef.current?.innerHTML || form.content;

    const articleData = {
      id: isEditing ? id! : Date.now().toString(),
      title: form.title,
      content: content,
      excerpt:
        form.excerpt || content.replace(/<[^>]*>/g, "").slice(0, 150) + "...",
      author: {
        type: form.authorType,
        name: form.authorName,
        ...(form.authorType === "individual" && form.nta && { nta: form.nta }),
        ...(form.authorType === "group" && {
          members: form.groupMembers.filter((m) => m.trim()),
          cohort: form.cohort.filter((c) => c.trim()),
        }),
      },
      createdAt: isEditing
        ? existingArticle!.createdAt
        : new Date().toISOString().split("T")[0],
    };

    if (isEditing) {
      updateArticle(id!, articleData);
      toast.success("Artikel berhasil diperbarui");
    } else {
      addArticle(articleData);
      toast.success("Artikel berhasil ditambahkan");
    }

    navigate("/artikel");
  };

  const addGroupMember = () => {
    setForm((prev) => ({
      ...prev,
      groupMembers: [...prev.groupMembers, ""],
    }));
  };

  const removeGroupMember = (index: number) => {
    setForm((prev) => ({
      ...prev,
      groupMembers: prev.groupMembers.filter((_, i) => i !== index),
    }));
  };

  const updateGroupMember = (index: number, value: string) => {
    setForm((prev) => ({
      ...prev,
      groupMembers: prev.groupMembers.map((member, i) =>
        i === index ? value : member
      ),
    }));
  };

  const addCohort = () => {
    setForm((prev) => ({
      ...prev,
      cohort: [...prev.cohort, ""],
    }));
  };

  const removeCohort = (index: number) => {
    setForm((prev) => ({
      ...prev,
      cohort: prev.cohort.filter((_, i) => i !== index),
    }));
  };

  const updateCohort = (index: number, value: string) => {
    setForm((prev) => ({
      ...prev,
      cohort: prev.cohort.map((c, i) => (i === index ? value : c)),
    }));
  };

  // Rich text editor functions
  const handleFormat = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    if (contentRef.current) {
      setForm((prev) => ({
        ...prev,
        content: contentRef.current?.innerHTML || "",
      }));
    }
  };

  const handleImageUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("File harus berupa gambar");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (contentRef.current) {
        const img = document.createElement("img");
        img.src = result;
        img.style.maxWidth = "100%";
        img.style.height = "auto";
        img.style.display = "block";
        img.style.margin = "10px 0";
        img.style.borderRadius = "8px";

        // Insert image at cursor position
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          range.deleteContents();
          range.insertNode(img);
          range.collapse(false);
        } else {
          contentRef.current.appendChild(img);
        }

        setForm((prev) => ({
          ...prev,
          content: contentRef.current?.innerHTML || "",
        }));
      }
    };
    reader.readAsDataURL(file);

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleContentChange = () => {
    if (contentRef.current) {
      setForm((prev) => ({
        ...prev,
        content: contentRef.current?.innerHTML || "",
      }));
    }
  };

  return (
    <div className="min-h-screen relative">
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
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

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-yellow-500">
                  {isEditing ? "Edit Artikel" : "Tambah Artikel Baru"}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Title */}
                <div>
                  <Label htmlFor="title">Judul Artikel *</Label>
                  <Input
                    id="title"
                    value={form.title}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, title: e.target.value }))
                    }
                    className="bg-gray-700 border-gray-600"
                    placeholder="Masukkan judul artikel..."
                  />
                </div>

                {/* Rich Text Content Editor */}
                <div>
                  <Label>Konten Artikel *</Label>

                  {/* Toolbar */}
                  <div className="flex flex-wrap gap-2 p-3 bg-gray-700 border border-gray-600 rounded-t-lg">
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => handleFormat("bold")}
                      className="text-gray-300 hover:text-white hover:bg-gray-600"
                    >
                      <Bold className="w-4 h-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => handleFormat("italic")}
                      className="text-gray-300 hover:text-white hover:bg-gray-600"
                    >
                      <Italic className="w-4 h-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => handleFormat("underline")}
                      className="text-gray-300 hover:text-white hover:bg-gray-600"
                    >
                      <Underline className="w-4 h-4" />
                    </Button>

                    <Separator orientation="vertical" className="h-6" />

                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => handleFormat("justifyLeft")}
                      className="text-gray-300 hover:text-white hover:bg-gray-600"
                    >
                      <AlignLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => handleFormat("justifyCenter")}
                      className="text-gray-300 hover:text-white hover:bg-gray-600"
                    >
                      <AlignCenter className="w-4 h-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => handleFormat("justifyRight")}
                      className="text-gray-300 hover:text-white hover:bg-gray-600"
                    >
                      <AlignRight className="w-4 h-4" />
                    </Button>

                    <Separator orientation="vertical" className="h-6" />

                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => handleFormat("insertUnorderedList")}
                      className="text-gray-300 hover:text-white hover:bg-gray-600"
                    >
                      <List className="w-4 h-4" />
                    </Button>

                    <select
                      onChange={(e) =>
                        handleFormat("formatBlock", e.target.value)
                      }
                      className="bg-gray-600 text-white border border-gray-500 rounded px-2 py-1 text-sm"
                    >
                      <option value="div">Normal</option>
                      <option value="h1">Heading 1</option>
                      <option value="h2">Heading 2</option>
                      <option value="h3">Heading 3</option>
                    </select>

                    <Separator orientation="vertical" className="h-6" />

                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={handleImageUpload}
                      className="text-gray-300 hover:text-white hover:bg-gray-600"
                    >
                      <Image className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Editor */}
                  <div
                    ref={contentRef}
                    contentEditable
                    onInput={handleContentChange}
                    className="min-h-[400px] p-4 bg-white text-black border border-gray-600 rounded-b-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    style={{
                      fontFamily: "system-ui, -apple-system, sans-serif",
                      fontSize: "16px",
                      lineHeight: "1.6",
                    }}
                    suppressContentEditableWarning={true}
                  />

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />

                  <p className="text-sm text-gray-400 mt-2">
                    Gunakan toolbar di atas untuk memformat teks. Klik ikon
                    gambar untuk menambahkan foto ke artikel.
                  </p>
                </div>

                {/* Excerpt */}
                <div>
                  <Label htmlFor="excerpt">Ringkasan (Opsional)</Label>
                  <Textarea
                    id="excerpt"
                    value={form.excerpt}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, excerpt: e.target.value }))
                    }
                    className="bg-gray-700 border-gray-600"
                    placeholder="Ringkasan singkat artikel..."
                  />
                  <p className="text-sm text-gray-400 mt-1">
                    Jika kosong, akan digunakan 150 karakter pertama dari konten
                  </p>
                </div>

                {/* Author Type */}
                <div>
                  <Label>Tipe Penulis *</Label>
                  <RadioGroup
                    value={form.authorType}
                    onValueChange={(value: "individual" | "group") =>
                      setForm((prev) => ({ ...prev, authorType: value }))
                    }
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="individual" id="individual" />
                      <Label htmlFor="individual">Individu</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="group" id="group" />
                      <Label htmlFor="group">Kelompok</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Author Details */}
                {form.authorType === "individual" ? (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="authorName">Nama Penulis *</Label>
                      <Input
                        id="authorName"
                        value={form.authorName}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            authorName: e.target.value,
                          }))
                        }
                        className="bg-gray-700 border-gray-600"
                        placeholder="Nama lengkap penulis"
                      />
                    </div>
                    <div>
                      <Label htmlFor="nta">NTA (Nomor Tanda Anggota)</Label>
                      <Input
                        id="nta"
                        value={form.nta}
                        onChange={(e) =>
                          setForm((prev) => ({ ...prev, nta: e.target.value }))
                        }
                        className="bg-gray-700 border-gray-600"
                        placeholder="Contoh: NTAG 16 XXXV 345 TAAB"
                      />
                      <p className="text-sm text-gray-400 mt-1">
                        Format: NTAG 16 [Angka Romawi] [Nomor] TAAB
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="groupName">Nama Kelompok *</Label>
                      <Input
                        id="groupName"
                        value={form.authorName}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            authorName: e.target.value,
                          }))
                        }
                        className="bg-gray-700 border-gray-600"
                        placeholder="Nama kelompok atau tim"
                      />
                    </div>

                    <div>
                      <Label>Anggota Kelompok</Label>
                      {form.groupMembers.map((member, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 mt-2"
                        >
                          <Input
                            value={member}
                            onChange={(e) =>
                              updateGroupMember(index, e.target.value)
                            }
                            className="bg-gray-700 border-gray-600"
                            placeholder={`Anggota ${index + 1}`}
                          />
                          {form.groupMembers.length > 1 && (
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => removeGroupMember(index)}
                              className="text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      ))}
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={addGroupMember}
                        className="mt-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Tambah Anggota
                      </Button>
                    </div>

                    <div>
                      <Label>Angkatan</Label>
                      {form.cohort.map((c, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 mt-2"
                        >
                          <Input
                            value={c}
                            onChange={(e) =>
                              updateCohort(index, e.target.value)
                            }
                            className="bg-gray-700 border-gray-600"
                            placeholder={`Contoh: 35 (akan ditampilkan sebagai XXXV)`}
                          />
                          {form.cohort.length > 1 && (
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => removeCohort(index)}
                              className="text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      ))}
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={addCohort}
                        className="mt-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Tambah Angkatan
                      </Button>
                      <p className="text-sm text-gray-400 mt-1">
                        Masukkan angka biasa (contoh: 35), akan otomatis
                        dikonversi ke angka romawi (XXXV)
                      </p>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex justify-end space-x-4 pt-6">
                  <Button
                    variant="outline"
                    onClick={() => navigate("/artikel")}
                  >
                    Batal
                  </Button>
                  <Button
                    onClick={handleSave}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    {isEditing ? "Perbarui" : "Simpan"} Artikel
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
