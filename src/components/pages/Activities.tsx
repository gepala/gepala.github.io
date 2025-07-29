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
import HeaderGlobal from "../HeaderGlobal";
import AdminLoginButton from "../AdminLoginButton";

interface Activity {
  id: string;
  name: string;
  description: string;
  type: "internal" | "eksternal";
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
      "Program kaderisasi awal tahununtuk calon anggota GEPALA, yang meliputi pembentukan mental dan melatih keterampilan dasar kepecintaalaman.",
    type: "internal",
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&q=80",
    details: {
      frequency: "Setelah Awal Tahun Ajaran Baru",
      participants: "Siswa GEPALA",
      duration: "3-4 bulan",
      location: "SMAN 15 Bandung & Alam Terbuka",
    },
  },
  {
    id: "mabim",
    name: "Masa Bimbingan",
    description:
      "Periode pendampingan intensif untuk anggota muda dalam mengembangkan sikap, pengetahuan, dan keterampilan kepecintaalaman.",
    type: "internal",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&q=80",
    details: {
      frequency: "Pasca Diklatsar",
      participants: "Anggota Muda GEPALA",
      duration: "3-4 bulan",
      location: "SMAN 15 Bandung & Alam Terbuka",
    },
  },
  {
    id: "pengembaraan",
    name: "Pengembaraan",
    description:
      "Kegiatan perjalanan untuk menguji kemampuan anggota muda dalam berkegiatan di alam terbuka dan berorganisasi.",
    type: "internal",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    details: {
      frequency: "Pasca Mabim, Tentatif",
      participants: "Anggota Muda GEPALA",
      duration: "2 bulan",
      location: "SMAN 15 Bandung & Alam Terbuka",
    },
  },
  {
    id: "ekspedisi",
    name: "Ekspedisi",
    description:
      "Petualangan menjelajahi alam terbuka dengan tujuan penelitian, konservasi, eksplorasi, atau lainnya.",
    type: "internal",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80",
    details: {
      frequency: "Tentatif",
      participants: "Anggota GEPALA",
      duration: "Tentatif",
      location: "Alam Terbuka",
    },
  },
  {
    id: "hut",
    name: "HUT GEPALA",
    description:
      "Perayaan hari jadi GEPALA yang diisi dengan hangatnya kebersamaan, refleksi perjalanan organisasi, dan simbolisme perayaan.",
    type: "internal",
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&q=80",
    details: {
      frequency: "Setiap 20 Juli",
      participants: "Anggota GEPALA",
      duration: "2 hari",
      location: "Alam Terbuka",
    },
  },
  {
    id: "gathering",
    name: "Gathering",
    description:
      "Kegiatan kumpul bersama untuk mempererat silaturahmi antar anggota.",
    type: "internal",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&q=80",
    details: {
      frequency: "Setiap Tahun",
      participants: "Anggota GEPALA",
      duration: "1-2 hari",
      location: "Tentatif",
    },
  },
  {
    id: "baksos",
    name: "Bakti Sosial",
    description:
      "Kegiatan pengabdian kepada masyarakat sebagai wujud kepedulian sosial anggota GEPALA.",
    type: "eksternal",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80",
    details: {
      frequency: "Setiap Tahun",
      participants: "Anggota GEPALA",
      duration: "1-2 hari",
      location: "Masyarakat Sekitar",
    },
  },
  {
    id: "kebencanaan",
    name: "Bantuan Kemanusiaan Pasca Bencana",
    description:
      "Tim siaga untuk membantu korban bencana alam dengan kemampuan survival dan SAR.",
    type: "eksternal",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80",
    details: {
      frequency: "Insidental",
      participants: "Anggota GEPALA",
      duration: "Menyesuaikan",
      location: "Lokasi Bencana",
    },
  },
  {
    id: "latber",
    name: "Latihan Bersama",
    description:
      "Latihan rutin bersama organisasi pecinta alam lain untuk sharing knowledge dan mempererat persaudaraan.",
    type: "eksternal",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    details: {
      frequency: "Tentatif",
      participants: "Anggota GEPALA & Organisasi Lain",
      duration: "Tentatif",
      location: "Tentatif",
    },
  },
];

const typeColors = {
  internal: "bg-blue-500",
  eksternal: "bg-green-500",
};

const typeLabels = {
  internal: "Internal",
  eksternal: "Eksternal",
};

export default function Activities() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState<string>("semua");

  const filteredActivities =
    selectedFilter === "semua"
      ? activities
      : activities.filter((activity) => activity.type === selectedFilter);

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    setCurrentIndex(0);
  };

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
    <div className="min-h-screen relative">
      <HeaderGlobal
        {...{
          title: "Kegiatan GEPALA",
          description:
            "Kumpulan kegiatan rutin, tahunan, dan insidental yang dilakukan oleh GEPALA untuk meningkatkan kemampuan kepecintaalaman dan kepedulian sosial.",
        }}
      />

      {/* Filter */}
      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant={selectedFilter === "semua" ? "default" : "outline"}
              onClick={() => handleFilterChange("semua")}
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
                onClick={() => handleFilterChange(key)}
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
                  <div className="relative h-64 md:h-96">
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
