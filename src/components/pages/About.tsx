import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import AdminLoginButton from "../AdminLoginButton";
import HeaderGlobal from "../HeaderGlobal";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    function clearLogoActive() {
      document.body.classList.remove("logo-explain-hovering");
      document.body.classList.remove("logo-explain-hovering-kuning");
      document
        .querySelectorAll("[data-logo-part]")
        .forEach((el) => el.classList.remove("active"));
    }

    const items = document.querySelectorAll(".logo-explain");
    items.forEach((item) => {
      item.addEventListener("mouseenter", function () {
        clearLogoActive();
        document.body.classList.add("logo-explain-hovering");
        const keys =
          (item as HTMLElement).getAttribute("data-logo")?.split(/\s+/) ?? [];
        document.querySelectorAll("[data-logo-part]").forEach((el) => {
          const parts =
            (el as HTMLElement).getAttribute("data-logo-part")?.split(/\s+/) ??
            [];
          if (keys.some((k) => parts.includes(k))) {
            el.classList.add("active");
          }
        });
      });
      item.addEventListener("mouseleave", function () {
        clearLogoActive();
      });
    });
    // Cleanup
    return () => {
      items.forEach((item) => {
        item.removeEventListener("mouseenter", clearLogoActive);
        item.removeEventListener("mouseleave", clearLogoActive);
      });
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      <HeaderGlobal
        {...{
          title: "Tentang Kami",
          description:
            "Mengenal lebih dalam tentang Pecinta Alam Indonesia dan Perhimpunan Pendaki Gunung dan Penempuh Rimba GEPALA",
        }}
      />
      {/* Pecinta Alam */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-12 text-yellow-500 text-center">
              Pecinta Alam Indonesia
            </h2>

            {/* Apa itu Pecinta Alam */}
            <Card className="mb-12 bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-yellow-500">
                  Apa itu Pecinta Alam?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed space-y-4 text-justify">
                  Pencinta alam adalah istilah yang dipergunakan untuk
                  kelompok-kelompok yang bergerak di alam bebas, pada bidang
                  petualangan, lingkungan hidup dan konservasi alam, dan
                  pendidikan maupun kemanusiaan. Di Indonesia istilah ini
                  merujuk pada kelompok yang bergerak di bidang petualangan alam
                  bebas, seperti mendaki gunung, ekspedisi ke belantara, panjat
                  tebing, arung jeram, susur gua, penyelaman bawah laut dan
                  bertualang dengan perahu layar.
                  <br />
                  <br />
                  Sejarah Pencinta Alam di Indonesia adalah dengan terbentuknya
                  "Perkumpulan Petjinta Alam", di prakarsai oleh Awibowo pada
                  bulan Oktober tahun 1953 di Yogyakarta. Kemudian istilah
                  Pencinta Alam dipopulerkan oleh para mahasiswa di Universitas
                  Indonesia. Mapala UI pada tahun 1964, para tokohnya seperti
                  Soe Hok Gie, Herman Lantang, Aristides Katopo, dll. Setelah
                  itu perkembangan kelompok-kelompok Pencinta alam berkembang
                  sangat pesat.
                </p>
              </CardContent>
            </Card>

            {/* Sejarah Singkat */}
            <Card className="mb-12 bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-yellow-500">
                  Sejarah Singkat Pecinta Alam
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-300 leading-relaxed space-y-4 text-justify">
                  <p>
                    Menurut alm. Norman Edwin dalam tulisannya{" "}
                    <em>"Awibowo – Biang Pencinta Alam Indonesia"</em>
                    (Mutiara, 20 Juni–3 Juli 1984), Awibowo adalah pendiri
                    perkumpulan pecinta alam pertama di Indonesia, yaitu{" "}
                    <strong className="text-yellow-500">
                      Perkoempoelan Pentjinta Alam (PPA)
                    </strong>{" "}
                    pada{" "}
                    <strong className="text-yellow-500">18 Oktober 1953</strong>
                    .
                  </p>
                  <p>
                    Setelah menyelesaikan pendidikannya di Universitas Indonesia
                    di Bogor (sekarang IPB), Awibowo dan rekan-rekannya
                    berdiskusi untuk menentukan nama yang tepat. Beberapa usulan
                    seperti "penggemar alam" atau "pesuka alam" sempat muncul,
                    tetapi Awibowo mengusulkan
                    <strong className="text-yellow-500">
                      "pecinta alam"
                    </strong>{" "}
                    karena kata "cinta" memiliki makna lebih dalam dibanding
                    "gemar" atau "suka".
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Kode Etik */}
            <Card className="mb-12 bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-yellow-500 text-center">
                  Kode Etik Pecinta Alam
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-300 leading-relaxed text-lg space-y-4 mx-auto">
                  <p>
                    Pecinta alam Indonesia sadar bahwa alam beserta isinya
                    adalah ciptaan Tuhan Yang Maha Esa.
                  </p>

                  <p>
                    Pecinta alam Indonesia sebagai bagian dari masyarakat
                    Indonesia sadar akan tanggung jawabnya terhadap Tuhan,
                    Bangsa dan Tanah Air.
                  </p>

                  <p>
                    Pecinta alam Indonesia sadar bahwa segenap pecinta alam
                    adalah saudara, sebagai sesama makhluk yang mencintai alam
                    sebagai anugerah Tuhan Yang Maha Esa.
                  </p>

                  <p>
                    Sesuai dengan hakekat di atas kami dengan kesadaran
                    menyatakan sebagai berikut:
                  </p>

                  <div className="text-gray-300 leading-relaxed text-lg space-y-4 mx-auto">
                    <p className="text-lg">
                      1. Mengabdi kepada Tuhan Yang Maha Esa.
                    </p>

                    <p className="text-lg">
                      2. Memelihara alam serta isinya serta mempergunakan sumber
                      alam sesuai batas kebutuhan.
                    </p>

                    <p className="text-lg">
                      3. Mengabdi kepada Bangsa dan Tanah Air.
                    </p>

                    <p className="text-lg">
                      4. Menghormati tata kehidupan yang berlaku pada masyarakat
                      sekitarnya, serta menghargai manusia sesuai martabatnya.
                    </p>

                    <p className="text-lg">
                      5. Berusaha mempererat tali persaudaraan sesama pecinta
                      alam, sesuai dengan azaz dan tujuan pecinta alam.
                    </p>

                    <p className="text-lg">
                      6. Berusaha saling membantu dan saling menghargai dalam
                      pelaksanaan pengabdian terhadap Tuhan, Bangsa dan Tanah
                      Air.
                    </p>

                    <p className="text-lg">7. Selesai.</p>
                  </div>

                  <br />

                  <div
                    className="text-lg text-gray-300 leading-relaxed text-lg space-y-4 mx-auto"
                    style={{
                      display: "flex",
                      justifyContent: "right",
                    }}
                  >
                    <p>
                      Disahkan dalam <br />
                      Forum Gladian IV di Ujung Pandang <br />
                      Tanggal 28 Januari tahun 1974 <br />
                      Pukul 01.00 WITA
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* GEPALA */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-12 text-yellow-500 text-center">
              GEPALA
            </h2>

            {/* Apa itu GEPALA */}
            <Card className="mb-12 bg-gray-700 border-gray-600">
              <CardHeader>
                <CardTitle className="text-2xl text-yellow-500">
                  Apa itu GEPALA?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-300 leading-relaxed space-y-4 text-justify">
                  <p>
                    <strong className="text-yellow-500">GEPALA</strong>{" "}
                    merupakan ekstrakurikuler pecinta alam di SMAN 15 Bandung
                    yang sudah berdiri sejak{" "}
                    <strong className="text-yellow-500">20 Juli 1982</strong>{" "}
                    dan merupakan ekstrakurikuler tertua di SMAN 15 Bandung.
                  </p>
                  <p>
                    Nama <strong className="text-yellow-500">"GEPALA"</strong>{" "}
                    berasal dari siloka Sunda, yaitu kata <strong>"GEP"</strong>{" "}
                    yang berarti menangkap dan <strong>"ALA"</strong> yang
                    berarti mengambil. Secara filosofi, GEPALA dimaknai sebagai
                    upaya untuk menangkap dan mempelajari ilmu pengetahuan serta
                    mengambil manfaatnya.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Sejarah Singkat GEPALA */}
            <Card className="mb-12 bg-gray-700 border-gray-600">
              <CardHeader>
                <CardTitle className="text-2xl text-yellow-500">
                  Sejarah Singkat GEPALA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-300 leading-relaxed text-justify space-y-4">
                  <p>
                    GEPALA bermula dari obrolan santai sekelompok siswa SMAN 15
                    yang sering berkumpul di warung/kantin sekolah sekitar tahun
                    1982. Awalnya, mereka bercanda tentang ide membentuk grup
                    pencinta alam, lalu sepakat mewujudkannya. Nama grup ini
                    mengalami beberapa perubahan—mulai dari{" "}
                    <strong className="text-yellow-500">
                      PELANDA GIRI (Pelajar Pendaki Gunung)
                    </strong>
                    , kemudian{" "}
                    <strong className="text-yellow-500">
                      SMC (Student Mountaineering Club)
                    </strong>
                    , hingga akhirnya menjadi{" "}
                    <strong className="text-yellow-500">GEPALA</strong>, yang
                    diambil dari bahasa Sunda (Gep = tangkap, Ala = ambil).
                  </p>
                  <p>
                    Setelah mendapat persetujuan dari kesiswaan, GEPALA resmi
                    berdiri pada Juli 1982. Angkatan pertama memulai perjalanan
                    panjang dengan semangat eksplorasi alam dan kekeluargaan.
                    Meski menghadapi tantangan, GEPALA terus berkembang, menjaga
                    nilai-nilai kecintaan terhadap alam serta prinsip:{" "}
                    <em className="text-yellow-400">
                      "Teangan elmu sing katimu, Tangan pangabisa sing karasa,
                      Teangan pangarti sing kaharti"
                    </em>{" "}
                    (Carilah ilmu yang bermanfaat, Rasakan kemampuan yang
                    dimiliki, Pahami makna yang tersirat).
                  </p>
                  <p>
                    Hingga kini, GEPALA tetap berproses, mewariskan semangat
                    petualangan dan kebersamaan kepada setiap angkatan baru.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Hakekat GEPALA */}
            <Card className="mb-12 bg-gray-700 border-gray-600">
              <CardHeader>
                <CardTitle className="text-2xl text-yellow-500 text-center">
                  Hakekat GEPALA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-300 leading-relaxed text-lg space-y-4 mx-auto">
                  <p className="text-lg">
                    GEPALA bertakwa kepada Tuhan Yang Maha Esa.
                  </p>

                  <p className="text-lg">GEPALA cinta Bangsa dan Tanah Air.</p>

                  <p className="text-lg">
                    GEPALA berani, tabah, dan ulet dalam menghadapi persoalan.
                  </p>

                  <p className="text-lg">
                    GEPALA selalu siap menolong dan membantu sesama makhluk.
                  </p>

                  <p className="text-lg">
                    GEPALA selalu menjaga dan menjunjung tinggi SMAN 15 Bandung
                    dan nama organisasi.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Makna Lambang */}
            <Card className="mb-12 bg-gray-700 border-gray-600">
              <CardHeader>
                <CardTitle className="text-2xl text-yellow-500">
                  Makna Lambang GEPALA
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Logo GEPALA */}
                <div className="logo-logo-container flex justify-center items-start mb-8">
                  <svg
                    id="logo-svg"
                    width="300"
                    height="300"
                    viewBox="-1100 -1100 2200 2200"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      display: "block",
                      width: "300px",
                      height: "300px",
                    }}
                  >
                    {/* Latar Merah (segiempat, merah) */}
                    <rect
                      id="logo-segiempat-merah"
                      data-logo-part="segiempat merah"
                      width="1930"
                      height="1930"
                      x="-965"
                      y="-965"
                      fill="none"
                      stroke="red"
                      strokeWidth="70"
                    />
                    {/* Latar Biru (biru, segiempat) */}
                    <rect
                      id="logo-biru"
                      data-logo-part="segiempat biru"
                      width="1860"
                      height="1860"
                      x="-930"
                      y="-930"
                      fill="darkblue"
                    />
                    {/* Garis di antara mata angin (silang, kuning) */}
                    <g
                      id="logo-silang-kuning"
                      data-logo-part="mataangin silang kuning"
                      stroke="yellow"
                      strokeWidth="18"
                    >
                      <line x1="-400" y1="-20" x2="400" y2="-420" />
                      <line x1="-400" y1="-420" x2="400" y2="-20" />
                    </g>
                    <g
                      id="logo-silang-kuning2"
                      data-logo-part="mataangin silang kuning"
                      stroke="yellow"
                      strokeWidth="24"
                    >
                      <line x1="375" y1="5" x2="415" y2="-50" />
                      <line x1="375" y1="-445" x2="415" y2="-390" />
                      <line x1="-375" y1="5" x2="-415" y2="-50" />
                      <line x1="-375" y1="-445" x2="-415" y2="-390" />
                    </g>
                    {/* Mata Angin Vertikal (vertikal, kuning) */}
                    <g
                      id="logo-vertikal-kuning"
                      data-logo-part="mataangin vertikal kuning"
                      fill="yellow"
                      stroke="none"
                    >
                      <polygon points="0,-770 -200,-570 0,-220 200,-570" />
                      <polygon points="0,330 205,130 0,-220 -200,130" />
                    </g>
                    {/* Mata Angin Horizontal (horizontal, kuning) */}
                    <g
                      id="logo-horizontal-kuning"
                      data-logo-part="mataangin horizontal kuning"
                      fill="yellow"
                      stroke="none"
                    >
                      <polygon points="900,-220 580,-330 0,-220 580,-110" />
                      <polygon points="-900,-220 -580,-110 0,-220 -580,-330" />
                    </g>
                    <path d="" fill="#FFFF00" transform="translate(0,0)" />
                    {/* Tulisan GEPALA */}
                    <image
                      id="logo-teks"
                      data-logo-part="teks kuning"
                      height="2000"
                      width="2000"
                      x="-1000"
                      y="-1000"
                      href="/logoTeks.png"
                    />
                  </svg>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl text-yellow-500 mb-4">
                      Arti Lambang
                    </h4>
                    <div className="space-y-3 text-gray-300">
                      <p className="logo-explain" data-logo="segiempat">
                        • <strong>Segi empat</strong> melambangkan kesempurnaan
                      </p>
                      <div>
                        <p className="logo-explain" data-logo="mataangin">
                          • <strong>Arah mata angin:</strong>
                        </p>
                        <div className="ml-4 space-y-1">
                          <p className="logo-explain" data-logo="vertikal">
                            - <strong>Vertikal</strong> melambangkan hubungan
                            antara manusia dengan Tuhan Yang Maha Esa
                          </p>
                          <p className="logo-explain" data-logo="horizontal">
                            - <strong>Horizontal</strong> melambangkan hubungan
                            antara manusia dengan manusia
                          </p>
                          <p className="logo-explain" data-logo="silang">
                            - <strong>Garis silang</strong> melambangkan
                            hubungan antara manusia dengan lingkungan hidup
                          </p>
                        </div>
                      </div>
                      <p className="logo-explain" data-logo="teks">
                        • <strong>Tulisan GEPALA</strong> melambangkan identitas
                        organisasi GEPALA
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl text-yellow-500 mb-4">
                      Warna Lambang
                    </h4>
                    <div className="space-y-3 text-gray-300">
                      <p className="logo-explain" data-logo="kuning">
                        •{" "}
                        <span className="inline-block w-4 h-4 bg-yellow-500 rounded mr-2"></span>
                        <strong>Kuning</strong> melambangkan kehangatan jiwa,
                        lambang cahaya, dan kebahagiaan yang menggambarkan
                        kejayaan, keluhuran budi dan keagungan
                      </p>
                      <p className="logo-explain" data-logo="merah">
                        •{" "}
                        <span className="inline-block w-4 h-4 bg-red-500 rounded mr-2"></span>
                        <strong>Merah</strong> melambangkan semangat dan
                        keberanian
                      </p>
                      <p className="logo-explain" data-logo="biru">
                        •{" "}
                        <span className="inline-block w-4 h-4 bg-blue-900 rounded mr-2"></span>
                        <strong>Biru tua</strong> melambangkan bahtera,
                        kedamaian, ketenangan, kepercayaan kepada diri sendiri
                        dan keseimbangan
                      </p>
                    </div>
                  </div>
                </div>

                <style>{`
  .logo-explain {
    transition: background 0.3s cubic-bezier(0.4,0,0.2,1);
    cursor: pointer;
  }
  .logo-explain:hover {
    background-color: rgba(234, 179, 8, 0.12);
  }
  #logo-svg [data-logo-part] {
    opacity: 1;
    transition: opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.5s cubic-bezier(0.4,0,0.2,1);
    pointer-events: none;
    transform: scale(1);
  }
  .logo-explain-hovering #logo-svg [data-logo-part] {
    opacity: 0.05;
    transform: scale(0.97);
  }
  .logo-explain-hovering #logo-svg [data-logo-part].active {
    opacity: 1;
    transform: scale(1.1);
    filter: drop-shadow(20 20 20px rgba(0, 0, 0, 0.53));
  }
`}</style>
              </CardContent>
            </Card>

            {/* Keanggotaan */}
            <Card className="bg-gray-700 border-gray-600">
              <CardHeader>
                <CardTitle className="text-2xl text-yellow-500">
                  Keanggotaan GEPALA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">
                  Keanggotaan GEPALA terdiri dari{" "}
                  <strong className="text-yellow-500">
                    Anggota Muda GEPALA (AmG)
                  </strong>
                  ,
                  <strong className="text-yellow-500">
                    {" "}
                    Anggota Tetap GEPALA (AG)
                  </strong>
                  , dan
                  <strong className="text-yellow-500">
                    {" "}
                    Anggota Kehormatan GEPALA (AKG)
                  </strong>
                  .
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="bg-gray-600 border-gray-500">
                    <CardHeader>
                      <CardTitle className="text-lg text-yellow-500">
                        Anggota Muda (AmG)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm">
                        Siswa SMA Negeri 15 Bandung yang telah lulus Pendidikan
                        dan Latihan Dasar GEPALA.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-600 border-gray-500">
                    <CardHeader>
                      <CardTitle className="text-lg text-yellow-500">
                        Anggota Tetap (AG)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm">
                        Anggota muda GEPALA yang telah mendapatkan Nomor Tanda
                        Anggota Tetap GEPALA.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-600 border-gray-500">
                    <CardHeader>
                      <CardTitle className="text-lg text-yellow-500">
                        Anggota Kehormatan (AKG)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm">
                        Orang yang diangkat menjadi anggota kehormatan karena
                        jasa-jasanya terhadap kemajuan GEPALA.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <AdminLoginButton />
    </div>
  );
}
