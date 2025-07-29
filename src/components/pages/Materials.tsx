import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import {
  Backpack,
  Compass,
  Link2,
  Flame,
  Heart,
  Mountain,
  Users,
} from "lucide-react";
import HeaderGlobal from "../HeaderGlobal";
import AdminLoginButton from "../AdminLoginButton";

interface Material {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  topics: string[];
}

const materials: Material[] = [
  {
    id: "paljal-palbal",
    name: "Persiapan, Perlengkapan, dan Perbekalan Perjalanan",
    description:
      "Materi lengkap tentang persiapan sebelum melakukan perjalanan alam, mulai dari perlengkapan, perbekalan, hingga perencanaan rute.",
    icon: Backpack,
    topics: [
      "Perlengkapan (Jalan, Masak, Tidur, Berkemah, Medis, Darurat)",
      "Perbekalan (Kalori, Nutrisi, Hidrasi)",
      "Operasional dan Pembagian Tugas",
      "Perencanaan Rute dan Informasi Lokasi",
      "Persiapan Fisik, Kesehatan, dan Mental",
    ],
  },
  {
    id: "navigasi",
    name: "Navigasi",
    description:
      "Kemampuan dasar dalam membaca peta, menggunakan kompas, dan menentukan posisi di alam bebas.",
    icon: Compass,
    topics: [
      "Peta (Skala, Koordinat, Relief, Fitur Medan)",
      "Kompas (Jenis, Perawatan, Deklinasi)",
      "Persiapan Rute",
      "Penentuan Arah dan Posisi",
      "Sistem Pergerakan dan Estimasi Jarak",
    ],
  },
  {
    id: "tali-temali",
    name: "Tali Temali",
    description:
      "Pengetahuan tentang jenis tali, perawatan, dan berbagai macam simpul yang digunakan dalam kegiatan kepecintaalaman.",
    icon: Link2,
    topics: [
      "Jenis Tali (Kernmantel, Paracord, Prusik, Webbing)",
      "Pengetahuan Dasar dan Prinsip Tali Temali",
      "Perawatan Tali",
      "Jenis Simpul (Loop/Stopper, Hitch, Bend)",
      "Tali Tubuh",
    ],
  },
  {
    id: "survival",
    name: "Survival",
    description:
      "Keterampilan bertahan hidup di alam bebas dengan memanfaatkan sumber daya alam yang tersedia.",
    icon: Flame,
    topics: [
      "Tempat Perlindungan (Bivak Buatan dan Alam)",
      "Api (Fire Starter, Bahan Bakar, Pembersihan)",
      "Makanan (Botani, Zoologi)",
      "Air (Mata Air, Air Tanah, Tumbuhan, Embun)",
      "Komunikasi Darurat",
    ],
  },
  {
    id: "ppgd",
    name: "Pertolongan Pertama Gawat Darurat",
    description:
      "Pengetahuan dan keterampilan memberikan pertolongan pertama pada kondisi gawat darurat di alam bebas.",
    icon: Heart,
    topics: [
      "Bahaya Subjektif dan Objektif",
      "Kondisi Korban (Gawat, Darurat, Gawat Darurat)",
      "Penanganan dan Prosedur PPGD",
      "Teknik Evakuasi",
      "Pencegahan dan Mitigasi Risiko",
    ],
  },
  {
    id: "pemanjatan-srt",
    name: "Pemanjatan dan Single Rope Technique",
    description:
      "Teknik pemanjatan tebing dan penggunaan tali tunggal untuk akses vertikal di alam bebas.",
    icon: Mountain,
    topics: [
      "Pemanjatan (Jarak, Pengamanan, Taktik, Teknik)",
      "Peralatan (Tali, Harness, Helm, Carabiner, dll)",
      "Ascending dan Descending",
      "Self Rescue dan Tim Rescue",
      "Keselamatan dan Manajemen Risiko",
    ],
  },
  {
    id: "keorganisasian",
    name: "Keorganisasian",
    description:
      "Pengetahuan tentang organisasi pecinta alam, GEPALA, dan sistem kepengurusan yang berlaku.",
    icon: Users,
    topics: [
      "Tentang Pecinta Alam (Sejarah, Kode Etik)",
      "Tentang GEPALA (Sejarah, Hakekat, Keanggotaan)",
      "Tahapan Kaderisasi",
      "Struktur Kepengurusan",
      "Bidang Umum dan Sistem Rapat",
    ],
  },
];

export default function Materials() {
  return (
    <div className="min-h-screen pt-20 relative">
      <HeaderGlobal
        {...{
          title: "Materi Kepecintaalaman dan Keorganisasian",
          description:
            "Mengenal lebih dalam tentang Pecinta Alam Indonesia dan Perhimpunan Pendaki Gunung dan Penempuh Rimba GEPALA",
        }}
      />

      {/* Materials Grid */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materials.map((material) => (
              <Card
                key={material.id}
                className="bg-gray-800 border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <material.icon className="w-8 h-8 text-black" />
                  </div>
                  <CardTitle className="text-xl text-yellow-500">
                    {material.name}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {material.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm text-yellow-500 mb-3">
                      Topik yang Dibahas:
                    </h4>
                    <ul className="space-y-2">
                      {material.topics.slice(0, 3).map((topic, index) => (
                        <li
                          key={index}
                          className="text-xs text-gray-400 flex items-start"
                        >
                          <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          {topic}
                        </li>
                      ))}
                      {material.topics.length > 3 && (
                        <li className="text-xs text-gray-500 italic">
                          dan {material.topics.length - 3} topik lainnya...
                        </li>
                      )}
                    </ul>
                  </div>

                  <Button
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
                    asChild
                  >
                    <Link to={`/materi/${material.id}`}>Pelajari</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-yellow-500">
        <div className="container mx-auto px-4">
          <div className="text-center text-black">
            <h2 className="text-3xl mb-4">Siap Mempelajari Lebih Lanjut?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan GEPALA dan dapatkan pembelajaran langsung dari
              para anggota berpengalaman
            </p>
            <Button
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-yellow-500 px-8 py-3"
              onClick={() =>
                window.open("https://instagram.com/ppgprgepala", "_blank")
              }
            >
              Bergabung Sekarang
            </Button>
          </div>
        </div>
      </section>

      <AdminLoginButton />
    </div>
  );
}
