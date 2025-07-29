import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { ArrowLeft, BookOpen, List, CheckCircle } from "lucide-react";

interface MaterialSection {
  title: string;
  subsections: {
    title: string;
    items?: string[];
    content?: string;
  }[];
}

interface MaterialData {
  id: string;
  title: string;
  description: string;
  sections: MaterialSection[];
}

const materialsData: Record<string, MaterialData> = {
  "paljal-palbal": {
    id: "paljal-palbal",
    title: "Persiapan, Perlengkapan, dan Perbekalan Perjalanan",
    description:
      "Materi lengkap tentang persiapan sebelum melakukan perjalanan alam",
    sections: [
      {
        title: "Perlengkapan",
        subsections: [
          {
            title: "Merencanakan Perlengkapan yang dibawa",
            items: [
              "Perlengkapan Jalan",
              "Perlengkapan Masak dan Makan",
              "Perlengkapan Tidur",
              "Perlengkapan Berkemah",
              "Perlengkapan Medis",
              "Perlengkapan Darurat",
            ],
          },
          {
            title: "Pengecekan Barang",
            items: ["Kondisi Kelayakan", "Penggunaan"],
          },
          {
            title: "Perawatan Barang",
            items: ["Pengecekan Ulang", "Pembersihan", "Perbaikan"],
          },
          {
            title: "Packing",
            content: "Teknik mengemas barang dengan efisien dan aman",
          },
          {
            title: "Beban",
            items: ["Beban Ideal", "Pembagian Beban"],
          },
        ],
      },
      {
        title: "Perbekalan",
        subsections: [
          {
            title: "Kandungan Perbekalan yang dibawa",
            items: ["Kalori", "Nutrisi", "Hidrasi"],
          },
          {
            title: "Perbekalan Darurat",
            content: "Jenis dan jumlah perbekalan darurat yang harus dibawa",
          },
        ],
      },
      {
        title: "Operasional",
        subsections: [
          {
            title: "Isi Kegiatan",
            content: "Perencanaan aktivitas selama perjalanan",
          },
          {
            title: "Pembagian Tugas",
            content: "Distribusi tanggung jawab antar anggota tim",
          },
        ],
      },
      {
        title: "Perencanaan Rute",
        subsections: [
          {
            title: "Layout Rute",
            content: "Pemetaan jalur yang akan dilalui",
          },
          {
            title: "Tabel Rute",
            content: "Dokumentasi detail rute perjalanan",
          },
          {
            title: "Penampang Lintasan",
            content: "Profil ketinggian dan karakteristik medan",
          },
        ],
      },
      {
        title: "Pengumpulan Informasi Lokasi",
        subsections: [
          {
            title: "Informasi Medan",
            content: "Karakteristik geografis dan topografi",
          },
          {
            title: "Iklim dan Cuaca",
            content: "Kondisi cuaca dan musim di lokasi tujuan",
          },
          {
            title: "Akomodasi & Perizinan",
            content: "Persyaratan administratif dan fasilitas yang tersedia",
          },
        ],
      },
      {
        title: "Persiapan Fisik",
        subsections: [
          {
            title: "Kondisi Fisik",
            content: "Program latihan untuk mempersiapkan stamina",
          },
        ],
      },
      {
        title: "Persiapan Kesehatan",
        subsections: [
          {
            title: "Medical Check-up",
            content: "Pemeriksaan kesehatan sebelum berangkat",
          },
        ],
      },
      {
        title: "Persiapan Mental",
        subsections: [
          {
            title: "Mental Preparation",
            content: "Persiapan psikologis menghadapi tantangan alam",
          },
        ],
      },
    ],
  },
  survival: {
    id: "survival",
    title: "Survival",
    description: "Keterampilan bertahan hidup di alam bebas",
    sections: [
      {
        title: "Tempat Perlindungan",
        subsections: [
          {
            title: "Fungsi & Kriteria Tempat Perlindungan",
            content: "Syarat-syarat tempat berlindung yang aman dan nyaman",
          },
          {
            title: "Bivak Buatan",
            content: "Cara membuat tempat perlindungan dengan peralatan",
          },
          {
            title: "Bivak Alam",
            content: "Memanfaatkan formasi alam sebagai tempat berlindung",
          },
        ],
      },
      {
        title: "Api",
        subsections: [
          {
            title: "Fungsi Perapian",
            content: "Manfaat api untuk survival dan cara penggunaannya",
          },
          {
            title: "Fire Starter",
            content: "Berbagai cara menyalakan api di alam bebas",
          },
          {
            title: "Bahan Bakar",
            items: ["Pemantik", "Ranting/Kayu Kecil", "Batang/Kayu Besar"],
          },
          {
            title: "Pembersihan Perapian",
            content: "Cara memadamkan dan membersihkan bekas api",
          },
        ],
      },
      {
        title: "Makanan",
        subsections: [
          {
            title: "Botani",
            content: "Mengenal tumbuhan yang dapat dimakan di alam",
          },
          {
            title: "Zoologi",
            content: "Cara memperoleh protein hewani di alam bebas",
          },
        ],
      },
      {
        title: "Air",
        subsections: [
          {
            title: "Mata Air",
            content: "Cara menemukan dan menggunakan sumber air alami",
          },
          {
            title: "Air Tanah",
            content: "Teknik menggali dan memperoleh air tanah",
          },
          {
            title: "Tumbuhan",
            content: "Mengambil air dari berbagai jenis tumbuhan",
          },
          {
            title: "Embun",
            content: "Cara mengumpulkan air dari embun pagi",
          },
        ],
      },
      {
        title: "Komunikasi Darurat",
        subsections: [
          {
            title: "Suara",
            content: "Teknik komunikasi menggunakan suara dan alat bantu",
          },
          {
            title: "Tanda",
            content: "Membuat tanda-tanda darurat yang dapat dilihat",
          },
        ],
      },
    ],
  },
  "tali-temali": {
    id: "tali-temali",
    title: "Tali Temali",
    description: "Pengetahuan tentang jenis tali dan berbagai macam simpul",
    sections: [
      {
        title: "Jenis Tali",
        subsections: [
          {
            title: "Kernmantel",
            content: "Tali dengan konstruksi inti dan selubung untuk climbing",
          },
          {
            title: "Paracord",
            content: "Tali serbaguna dengan kekuatan tinggi",
          },
          {
            title: "Prusik",
            content: "Tali bantu untuk teknik ascending",
          },
          {
            title: "Webbing",
            content: "Pita tali datar untuk anchor dan sling",
          },
        ],
      },
      {
        title: "Pengetahuan Dasar Simpul",
        subsections: [
          {
            title: "Terminologi",
            content: "Istilah-istilah dasar dalam tali temali",
          },
        ],
      },
      {
        title: "Prinsip Tali Temali",
        subsections: [
          {
            title: "Kekuatan Simpul",
            content: "Faktor yang mempengaruhi kekuatan tali dan simpul",
          },
        ],
      },
      {
        title: "Perawatan",
        subsections: [
          {
            title: "Pembersihan",
            content: "Cara membersihkan dan menyimpan tali",
          },
          {
            title: "Inspeksi",
            content: "Pemeriksaan kondisi tali secara berkala",
          },
        ],
      },
      {
        title: "Jenis Simpul",
        subsections: [
          {
            title: "Loop/Stopper",
            items: [
              "Overhand",
              "Double Overhand",
              "Hidup",
              "Eight",
              "Eight Follow Loop",
              "Eight Double Loop",
              "Eight Directional Loop",
              "Bowline",
              "Kupu-kupu",
              "Double Kupu-kupu",
            ],
          },
          {
            title: "Hitch",
            items: [
              "Pangkal",
              "Rolling",
              "Jangkar",
              "Magnus",
              "Prusik",
              "Munter Mule",
              "Super Munter",
            ],
          },
          {
            title: "Bend",
            items: ["Double Fisherman", "Anyam", "Pita", "Mati"],
          },
          {
            title: "Tali Tubuh",
            content: "Simpul untuk mengikat tali ke tubuh dengan aman",
          },
        ],
      },
    ],
  },
  ppgd: {
    id: "ppgd",
    title: "Pertolongan Pertama Gawat Darurat",
    description: "Pengetahuan dan keterampilan memberikan pertolongan pertama",
    sections: [
      {
        title: "Bahaya",
        subsections: [
          {
            title: "Bahaya Subjektif",
            content: "Bahaya yang berasal dari faktor manusia/pendaki",
          },
          {
            title: "Bahaya Objektif",
            content: "Bahaya yang berasal dari kondisi alam",
          },
        ],
      },
      {
        title: "Kondisi Korban",
        subsections: [
          {
            title: "Gawat",
            content: "Kondisi yang mengancam jiwa dalam waktu singkat",
          },
          {
            title: "Darurat",
            content: "Kondisi yang memerlukan pertolongan segera",
          },
          {
            title: "Gawat Darurat",
            content: "Kombinasi kondisi gawat dan darurat",
          },
        ],
      },
      {
        title: "Penanganan",
        subsections: [
          {
            title: "Prosedur PPGD",
            content: "Langkah-langkah sistematis dalam memberikan pertolongan",
          },
          {
            title: "Teknik Pertolongan",
            content: "Berbagai teknik pertolongan untuk kondisi spesifik",
          },
        ],
      },
    ],
  },
  navigasi: {
    id: "navigasi",
    title: "Navigasi",
    description: "Kemampuan dasar dalam membaca peta dan menggunakan kompas",
    sections: [
      {
        title: "Peta",
        subsections: [
          {
            title: "Perawatan Peta",
            content: "Cara merawat dan menyimpan peta dengan baik",
          },
          {
            title: "Skala dan Jenis",
            content: "Memahami skala peta dan berbagai jenis peta",
          },
          {
            title: "Informasi Marginal",
            content: "Membaca informasi di tepi peta",
          },
          {
            title: "Koordinat & Grid",
            items: ["Geografis", "UTM"],
          },
          {
            title: "Jarak",
            content: "Cara mengukur jarak di peta",
          },
          {
            title: "Arah",
            content: "Menentukan arah dan bearing",
          },
          {
            title: "Relief",
            content: "Membaca kontur dan bentuk medan",
          },
          {
            title: "Fitur Medan",
            items: [
              "Fitur Medan Mayor: Puncak, Kawah, Punggungan, Lembahan, Sadle, Lereng, Tebing",
              "Fitur Medan Minor: Spur, Draw",
              "Fitur Medan Buatan: Fill, Cut",
            ],
          },
          {
            title: "Titik Ekstrem",
            content: "Mengenali titik-titik penting di medan",
          },
        ],
      },
      {
        title: "Kompas",
        subsections: [
          {
            title: "Jenis dan Bagian",
            content: "Mengenal berbagai jenis kompas dan komponen-komponennya",
          },
          {
            title: "Perawatan",
            content: "Cara merawat kompas agar tetap akurat",
          },
          {
            title: "Pengaturan Deklinasi",
            content: "Menyesuaikan deklinasi magnetis pada kompas",
          },
        ],
      },
      {
        title: "Persiapan",
        subsections: [
          {
            title: "Layout Rute",
            content: "Merencanakan rute di atas peta",
          },
          {
            title: "Tabel Rute",
            content: "Membuat tabel perjalanan dengan bearing dan jarak",
          },
          {
            title: "Penampang Lintasan",
            content: "Analisis profil ketinggian rute",
          },
        ],
      },
      {
        title: "Penentuan Arah dan Posisi",
        subsections: [
          {
            title: "Orientasi Peta dan Orientasi Kompas",
            content: "Menyesuaikan peta dengan kondisi lapangan",
          },
          {
            title: "Resection dan Intersection",
            content: "Teknik menentukan posisi dengan triangulasi",
          },
          {
            title: "Identifikasi Medan",
            content: "Mengenali fitur medan di lapangan",
          },
        ],
      },
      {
        title: "Sistem Pergerakan",
        subsections: [
          {
            title: "Panduan Medan",
            content: "Bergerak menggunakan panduan fitur alam",
          },
          {
            title: "Man-to-man",
            content: "Sistem navigasi dengan panduan antar anggota",
          },
        ],
      },
      {
        title: "Estimasi Jarak",
        subsections: [
          {
            title: "Langkah Ganda",
            content: "Mengukur jarak dengan menghitung langkah",
          },
          {
            title: "Waktu",
            content: "Estimasi jarak berdasarkan waktu tempuh",
          },
          {
            title: "Medan",
            content: "Mempertimbangkan faktor medan dalam estimasi",
          },
        ],
      },
    ],
  },
  "pemanjatan-srt": {
    id: "pemanjatan-srt",
    title: "Panjat Tebing & Single Rope Technique",
    description: "Teknik pemanjatan tebing dan penggunaan tali tunggal",
    sections: [
      {
        title: "Pemanjatan",
        subsections: [
          {
            title: "Jarak",
            items: ["Bouldering", "Single Pitch", "Multi Pitch"],
          },
          {
            title: "Pengamanan",
            items: [
              "Free Climbing: Free Solo, Lead, Rope Solo/Self Belaying, Simul/Rope Team",
              "Non-free Climbing: Top Rope, Aid Climbing",
            ],
          },
          {
            title: "Taktik",
            items: ["Alpine", "Himalayan", "Pendakian Es", "Scrambling"],
          },
          {
            title: "Teknik",
            items: [
              "Posisi Tubuh: Backsteeping, High-steeping, Rock-on move, Laybacking, Bridging, Chimneying",
              "Jamming, Crimping, Pinching, dan Edging",
              "Hooking: Ujung Kaki, Tumit, Kaki",
              "Lainnya: Drop Knee, Dyno, Knee-bar, Ascending, Descending",
            ],
          },
        ],
      },
      {
        title: "Peralatan",
        subsections: [
          {
            title: "Tali",
            items: ["Kernmantel: Dinamis, Statis", "Prusik", "Webbing"],
          },
          {
            title: "Harness",
            items: [
              "Tipe: Seat, Full Body",
              "Bagian: Waist Belt, Foot Loop, Tie In/Hard Points, Belay Loop, Gear Loop, Haul Loop",
            ],
          },
          {
            title: "Helm",
            content: "Perlindungan kepala dari batu jatuh",
          },
          {
            title: "Carabiner",
            items: [
              "Bentuk: D Asimetris, D, Oval, Pir",
              "Jenis Pengunci: Snap/Tanpa Pengunci, Manual, Otomatis",
            ],
          },
          {
            title: "Pengaman dan Peralatan Lainnya",
            items: [
              "Sling, Quickdraw, Chalk Bag",
              "Pengaman Sisip: Pegas/Friends, Hexentric, Nuts/Stopper",
              "Pengaman Pasak: Kingpin, Piton, Ice Screw",
              "Ascender dan Descender",
            ],
          },
        ],
      },
    ],
  },
  keorganisasian: {
    id: "keorganisasian",
    title: "Keorganisasian",
    description: "Pengetahuan tentang organisasi pecinta alam dan GEPALA",
    sections: [
      {
        title: "Tentang Pecinta Alam",
        subsections: [
          {
            title: "Sejarah",
            items: ["Awal Mula", "Gladian I-IV"],
          },
          {
            title: "Kode Etik",
            content: "Kode etik pecinta alam Indonesia",
          },
        ],
      },
      {
        title: "Tentang GEPALA",
        subsections: [
          {
            title: "Sejarah",
            content: "Sejarah berdirinya GEPALA sejak 1982",
          },
          {
            title: "Hakekat",
            content: "Lima hakekat GEPALA",
          },
          {
            title: "Asas & Tujuan",
            content: "Landasan dan tujuan organisasi GEPALA",
          },
          {
            title: "Keanggotaan",
            items: [
              "Anggota Muda GEPALA",
              "Anggota Tetap GEPALA",
              "Anggota Kehormatan GEPALA",
            ],
          },
          {
            title: "Tahapan Kaderisasi",
            content: "Proses pembinaan anggota GEPALA",
          },
          {
            title: "Struktur Kepengurusan",
            items: [
              "Musyawarah Anggota/Musyawarah Istimewa",
              "Dewan Pengurus",
              "Majelis Pengawas dan Pertimbangan Organisasi",
            ],
          },
        ],
      },
      {
        title: "Bidang Umum",
        subsections: [
          {
            title: "Struktur Kepengurusan",
            items: [
              "Ketua/Komandan",
              "Sekretaris",
              "Bendahara",
              "Humas",
              "Ring 1",
              "Ring 2",
            ],
          },
        ],
      },
      {
        title: "Sidang",
        subsections: [
          {
            title: "Jenis Sidang",
            content: "Berbagai jenis sidang dalam organisasi",
          },
        ],
      },
      {
        title: "Rapat",
        subsections: [
          {
            title: "Tata Cara Rapat",
            content: "Prosedur dan etika dalam rapat organisasi",
          },
        ],
      },
    ],
  },
};

export default function MaterialDetail() {
  const { id } = useParams<{ id: string }>();

  if (!id || !materialsData[id]) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-red-500 mb-4">Materi Tidak Ditemukan</h1>
          <Button asChild>
            <Link to="/materi">Kembali ke Daftar Materi</Link>
          </Button>
        </div>
      </div>
    );
  }

  const material = materialsData[id];

  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <section className="pt-30 py-12 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button
              variant="outline"
              className="mb-6 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
              asChild
            >
              <Link to="/materi">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Materi
              </Link>
            </Button>

            <div className="flex items-center space-x-4 mb-4">
              <BookOpen className="w-8 h-8 text-yellow-500" />
              <Badge className="bg-yellow-500 text-black">Materi</Badge>
            </div>

            <h1 className="text-3xl md:text-4xl text-yellow-500 mb-4">
              {material.title}
            </h1>
            <p className="text-lg text-gray-300">{material.description}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {material.sections.map((section, sectionIndex) => (
                <Card
                  key={sectionIndex}
                  className="bg-gray-800 border-gray-700"
                >
                  <CardHeader>
                    <CardTitle className="text-2xl text-yellow-500 flex items-center">
                      <List className="w-6 h-6 mr-3" />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {section.subsections.map(
                        (subsection, subsectionIndex) => (
                          <div key={subsectionIndex}>
                            <h3 className="text-lg text-white mb-3 flex items-center">
                              <CheckCircle className="w-5 h-5 mr-2 text-yellow-500" />
                              {subsection.title}
                            </h3>

                            {subsection.content && (
                              <p className="text-gray-300 ml-7 mb-3">
                                {subsection.content}
                              </p>
                            )}

                            {subsection.items && (
                              <ul className="space-y-2 ml-7">
                                {subsection.items.map((item, itemIndex) => (
                                  <li
                                    key={itemIndex}
                                    className="text-gray-300 flex items-start"
                                  >
                                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            )}

                            {subsectionIndex <
                              section.subsections.length - 1 && (
                              <Separator className="mt-4 bg-gray-700" />
                            )}
                          </div>
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Navigation */}
            <div className="mt-12 flex justify-between">
              <Button
                variant="outline"
                className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                asChild
              >
                <Link to="/materi">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Kembali ke Daftar Materi
                </Link>
              </Button>

              <Button
                className="bg-yellow-500 hover:bg-yellow-600 text-black"
                onClick={() => window.print()}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Cetak Materi
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
