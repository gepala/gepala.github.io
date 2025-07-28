import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Users,
  MapPin,
  Clock,
} from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import AdminLoginButton from "../AdminLoginButton";

interface Activity {
  id: string;
  name: string;
  description: string;
  type: "tahunan" | "bulanan" | "insidental" | "tentatif";
  image: string;
  details: {
    frequency: string;
    participants: string;
    duration: string;
    location: string;
  };
}

const activities: Activity[] = [
  {
    id: "diklat",
    name: "Pendidikan dan Latihan Dasar",
    description:
      "Program kaderisasi untuk calon anggota baru GEPALA. Meliputi materi kepecintaalaman, keorganisasian, dan praktik lapangan.",
    type: "tahunan",
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&q=80",
    details: {
      frequency: "Setiap tahun ajaran baru",
      participants: "Calon anggota baru",
      duration: "2-3 bulan",
      location: "SMAN 15 Bandung & Alam",
    },
  },
  {
    id: "bimbingan",
    name: "Masa Bimbingan",
    description:
      "Periode pendampingan intensif untuk anggota muda dalam mengembangkan kemampuan kepecintaalaman.",
    type: "tahunan",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&q=80",
    details: {
      frequency: "Pasca Diklat Dasar",
      participants: "Anggota Muda GEPALA",
      duration: "6 bulan",
      location: "SMAN 15 Bandung & Alam",
    },
  },
  {
    id: "pengembaraan",
    name: "Pengembaraan",
    description:
      "Kegiatan penjelajahan alam untuk meningkatkan kemampuan survival dan navigasi anggota.",
    type: "bulanan",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    details: {
      frequency: "Setiap bulan",
      participants: "Seluruh anggota",
      duration: "2-3 hari",
      location: "Berbagai lokasi alam",
    },
  },
  {
    id: "ekspedisi",
    name: "Ekspedisi",
    description:
      "Perjalanan pendakian ke gunung-gunung tinggi untuk menguji kemampuan dan mental anggota.",
    type: "tahunan",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80",
    details: {
      frequency: "2-3 kali per tahun",
      participants: "Anggota berpengalaman",
      duration: "5-10 hari",
      location: "Gunung-gunung tinggi",
    },
  },
  {
    id: "hut",
    name: "HUT GEPALA",
    description:
      "Perayaan ulang tahun GEPALA yang diisi dengan berbagai kegiatan dan reuni alumni.",
    type: "tahunan",
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&q=80",
    details: {
      frequency: "Setiap 20 Juli",
      participants: "Anggota & Alumni",
      duration: "1 hari",
      location: "SMAN 15 Bandung",
    },
  },
  {
    id: "bukber",
    name: "Buka Bersama",
    description:
      "Kegiatan buka puasa bersama untuk mempererat silaturahmi antar anggota selama bulan Ramadhan.",
    type: "tahunan",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&q=80",
    details: {
      frequency: "Selama Ramadhan",
      participants: "Seluruh anggota",
      duration: "1 malam",
      location: "SMAN 15 Bandung",
    },
  },
  {
    id: "baksos",
    name: "Bakti Sosial",
    description:
      "Kegiatan pengabdian kepada masyarakat sebagai wujud kepedulian sosial anggota GEPALA.",
    type: "bulanan",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80",
    details: {
      frequency: "Bulanan",
      participants: "Seluruh anggota",
      duration: "1 hari",
      location: "Masyarakat sekitar",
    },
  },
  {
    id: "bantuan",
    name: "Bantuan Kemanusiaan Pasca Bencana",
    description:
      "Tim siaga untuk membantu korban bencana alam dengan kemampuan survival dan SAR.",
    type: "insidental",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80",
    details: {
      frequency: "Saat diperlukan",
      participants: "Tim khusus",
      duration: "Sesuai kebutuhan",
      location: "Lokasi bencana",
    },
  },
  {
    id: "latber",
    name: "Latihan Bersama",
    description:
      "Latihan rutin bersama organisasi pecinta alam lain untuk sharing knowledge dan mempererat persaudaraan.",
    type: "tentatif",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    details: {
      frequency: "Berdasarkan undangan",
      participants: "Perwakilan anggota",
      duration: "2-3 hari",
      location: "Berbagai tempat",
    },
  },
];

const typeColors = {
  tahunan: "bg-blue-500",
  bulanan: "bg-green-500",
  insidental: "bg-red-500",
  tentatif: "bg-yellow-500",
};

const typeLabels = {
  tahunan: "Tahunan",
  bulanan: "Bulanan",
  insidental: "Insidental",
  tentatif: "Tentatif",
};

export default function Activities() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState<string>("semua");

  const filteredActivities =
    selectedFilter === "semua"
      ? activities
      : activities.filter((activity) => activity.type === selectedFilter);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredActivities.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + filteredActivities.length) % filteredActivities.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl mb-6 text-yellow-500">
              Kegiatan GEPALA
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Berbagai kegiatan kepecintaalaman dan keorganisasian yang mengasah
              kemampuan dan mempererat persaudaraan anggota GEPALA
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant={selectedFilter === "semua" ? "default" : "outline"}
              onClick={() => setSelectedFilter("semua")}
              className={
                selectedFilter === "semua"
                  ? "bg-yellow-500 text-black"
                  : "border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
              }
            >
              Semua Kegiatan
            </Button>
            {Object.entries(typeLabels).map(([key, label]) => (
              <Button
                key={key}
                variant={selectedFilter === key ? "default" : "outline"}
                onClick={() => setSelectedFilter(key)}
                className={
                  selectedFilter === key
                    ? "bg-yellow-500 text-black"
                    : "border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                }
              >
                {label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Carousel */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          {filteredActivities.length > 0 && (
            <div className="max-w-6xl mx-auto">
              {/* Main Activity Card */}
              <Card className="mb-8 bg-gray-800 border-gray-700 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <ImageWithFallback
                      src={filteredActivities[currentIndex].image}
                      alt={filteredActivities[currentIndex].name}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge
                        className={`${
                          typeColors[filteredActivities[currentIndex].type]
                        } text-white`}
                      >
                        {typeLabels[filteredActivities[currentIndex].type]}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-8">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl text-yellow-500">
                        {filteredActivities[currentIndex].name}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="p-0">
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {filteredActivities[currentIndex].description}
                      </p>

                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 text-sm">
                          <Calendar className="w-4 h-4 text-yellow-500" />
                          <span className="text-gray-400">Frekuensi:</span>
                          <span className="text-white">
                            {filteredActivities[currentIndex].details.frequency}
                          </span>
                        </div>

                        <div className="flex items-center space-x-3 text-sm">
                          <Users className="w-4 h-4 text-yellow-500" />
                          <span className="text-gray-400">Peserta:</span>
                          <span className="text-white">
                            {
                              filteredActivities[currentIndex].details
                                .participants
                            }
                          </span>
                        </div>

                        <div className="flex items-center space-x-3 text-sm">
                          <Clock className="w-4 h-4 text-yellow-500" />
                          <span className="text-gray-400">Durasi:</span>
                          <span className="text-white">
                            {filteredActivities[currentIndex].details.duration}
                          </span>
                        </div>

                        <div className="flex items-center space-x-3 text-sm">
                          <MapPin className="w-4 h-4 text-yellow-500" />
                          <span className="text-gray-400">Lokasi:</span>
                          <span className="text-white">
                            {filteredActivities[currentIndex].details.location}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>

              {/* Navigation */}
              <div className="flex items-center justify-between mb-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>

                <div className="text-center">
                  <p className="text-gray-400 text-sm">
                    {currentIndex + 1} dari {filteredActivities.length} kegiatan
                  </p>
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Thumbnail Navigation */}
              <div className="flex justify-center">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-fit">
                  {filteredActivities.map((activity, index) => (
                    <Card
                      key={activity.id}
                      className={`cursor-pointer transition-all hover:scale-105 ${
                        index === currentIndex
                          ? "ring-2 ring-yellow-500 bg-gray-700 border-yellow-500"
                          : "bg-gray-800 border-gray-700 hover:border-yellow-500"
                      }`}
                      onClick={() => goToSlide(index)}
                    >
                      <div className="aspect-square relative overflow-hidden rounded-t-lg">
                        <ImageWithFallback
                          src={activity.image}
                          alt={activity.name}
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute top-2 left-2">
                          <Badge
                            className={`${
                              typeColors[activity.type]
                            } text-white text-xs`}
                          >
                            {typeLabels[activity.type]}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-3">
                        <h3 className="text-sm text-white truncate">
                          {activity.name}
                        </h3>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}

          {filteredActivities.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">
                Tidak ada kegiatan yang sesuai dengan filter ini.
              </p>
            </div>
          )}
        </div>
      </section>

      <AdminLoginButton />
    </div>
  );
}
