import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  MapPin,
  Instagram,
  Send,
  Users,
  Mountain,
  Handshake,
  Brain,
  Flag,
  BookOpenText,
} from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { toast } from "sonner";
import AdminLoginButton from "../AdminLoginButton";
import FAQ from "./homepage/FAQ";

const CompassLogo = ({ className }: { className?: string }) => (
  <svg
    width="300"
    height="200"
    viewBox="-900 -550 1800 1100"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* North arrow - animates first */}
    <polygon
      points="0,-550 -200,-350 0,0 200,-350"
      fill="rgb(234 179 8)"
      className="animate-draw-north"
      style={{ opacity: 0 }}
    />

    {/* South arrow - animates second */}
    <polygon
      points="0,550 205,350 0,0 -200,350"
      fill="rgb(234 179 8)"
      className="animate-draw-south"
      style={{ opacity: 0 }}
    />

    {/* East arrow - animates third */}
    <polygon
      points="900,0 580,-110 0,0 580,110"
      fill="rgb(234 179 8)"
      className="animate-draw-east"
      style={{ opacity: 0 }}
    />

    {/* West arrow - animates fourth */}
    <polygon
      points="-900,0 -580,110 0,0 -580,-110"
      fill="rgb(234 179 8)"
      className="animate-draw-west"
      style={{ opacity: 0 }}
    />

    {/* Cross lines - animate fifth */}
    <line
      x1="-400"
      y1="200"
      x2="400"
      y2="-200"
      stroke="rgb(234 179 8)"
      strokeWidth="18"
      strokeDasharray="1000"
      strokeDashoffset="1000"
      className="animate-draw-cross1"
    />
    <line
      x1="400"
      y1="200"
      x2="-400"
      y2="-200"
      stroke="rgb(234 179 8)"
      strokeWidth="18"
      strokeDasharray="1000"
      strokeDashoffset="1000"
      className="animate-draw-cross2"
    />

    {/* Corner lines - animate last */}
    <line
      x1="375"
      y1="225"
      x2="415"
      y2="170"
      stroke="rgb(234 179 8)"
      strokeWidth="24"
      strokeDasharray="100"
      strokeDashoffset="100"
      className="animate-draw-corner2"
    />
    <line
      x1="375"
      y1="-225"
      x2="415"
      y2="-170"
      stroke="rgb(234 179 8)"
      strokeWidth="24"
      strokeDasharray="100"
      strokeDashoffset="100"
      className="animate-draw-corner4"
    />
    <line
      x1="-375"
      y1="225"
      x2="-415"
      y2="170"
      stroke="rgb(234 179 8)"
      strokeWidth="24"
      strokeDasharray="100"
      strokeDashoffset="100"
      className="animate-draw-corner1"
    />
    <line
      x1="-375"
      y1="-225"
      x2="-415"
      y2="-170"
      stroke="rgb(234 179 8)"
      strokeWidth="24"
      strokeDasharray="100"
      strokeDashoffset="100"
      className="animate-draw-corner3"
    />
  </svg>
);

const benefits = [
  {
    icon: Mountain,
    title: "Petualangan",
    description: "Menjelajahi alam terbuka dengan aman dan bertanggung jawab",
  },
  {
    icon: Users,
    title: "Keluarga",
    description:
      "Membangun ikatan persaudaraan yang kuat dengan sesama anggota",
  },
  {
    icon: Flag,
    title: "Organisasi",
    description: "Mengembangkan kemampuan leadership dan manajemen organisasi",
  },
  {
    icon: BookOpenText,
    title: "Pengetahuan",
    description:
      "Mendapatkan ilmu tentang kepecintaalaman dan lingkungan hidup",
  },
  {
    icon: Brain,
    title: "Karakter",
    description:
      "Membentuk karakter yang berani, tangguh, dan bertanggung jawab",
  },
  {
    icon: Handshake,
    title: "Relasi",
    description: "Membangun jaringan dengan komunitas pecinta alam lainnya",
  },
];

export default function Homepage() {
  const [messageForm, setMessageForm] = useState({
    name: "",
    from: "",
    contact: "",
    message: "",
  });
  const [showLogoAnimation, setShowLogoAnimation] = useState(true);

  useEffect(() => {
    // Animation will run automatically when component mounts
    // The CSS animations are set to run with staggered timing
    const timer = setTimeout(() => {
      setShowLogoAnimation(false);
    }, 3500); // Total animation duration is about 3 seconds, so we wait 3.5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleContactMethodChange = (value: string) => {
    if (value === "location") {
      window.open("https://maps.app.goo.gl/MnckbXihwUtazfxf6", "_blank");
    } else if (value === "instagram") {
      window.open("https://instagram.com/ppgprgepala", "_blank");
    }
  };

  const handleSendMessage = () => {
    if (
      !messageForm.name ||
      !messageForm.from ||
      !messageForm.contact ||
      !messageForm.message
    ) {
      toast.error("Mohon lengkapi semua kolom yang tersedia");
      return;
    }
    toast.success("Pesan berhasil dikirim! Terima kasih atas minatnya.");
    setMessageForm({ name: "", from: "", contact: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="h-[100vh] flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, 0.8)), url('/bg/bg4.png')`,
        }}
      >
        <div className="text-center text-white z-10 px-4">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center justify-center">
            <div className="mb-8">
              {showLogoAnimation ? (
                <CompassLogo className="mx-auto" />
              ) : (
                <CompassLogo className="mx-auto" />
              )}
            </div>

            <div className="mb-4">
              <h1 className="text-lg md:text-xl text-gray-300 mb-2 animate-fadein-text">
                Perhimpunan Pendaki Gunung dan Penempuh Rimba
              </h1>
              <h2
                className="text-4xl md:text-6xl tracking-[0.3em] mb-6 animate-fadein-text"
                style={{ marginLeft: "0.15em" }}
              >
                G E P A L A
              </h2>
            </div>

            <p className="text-xl md:text-2xl text-yellow-500 mb-8 italic animate-fadein-text">
              "Tabah Sampai Akhir"
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 animate-fadein-btn"
                onClick={() => {
                  document.getElementById("recruitment")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Bergabung
              </Button>
              <Button
                variant="outline"
                className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-3 animate-fadein-btn"
                asChild
              >
                <Link to="/tentang">Selengkapnya Tentang Kami</Link>
              </Button>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
      </section>

      {/* Sekilas Tentang Kami */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-8 text-yellow-500">
              Sekilas Tentang Kami
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 text-justify">
              GEPALA merupakan ekstrakurikuler pecinta alam di SMAN 15 Bandung
              yang sudah berdiri sejak 20 Juli 1982 dan merupakan
              ekstrakurikuler tertua di SMAN 15 Bandung. Selama bertahun-tahun,
              GEPALA telah menjadi wadah bagi para anggotanya untuk
              mengembangkan kecintaan terhadap alam, membangun karakter yang
              tangguh, dan menjalin persaudaraan yang erat.
            </p>
            <Button
              variant="outline"
              className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
              asChild
            >
              <Link to="/tentang">Selengkapnya</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Yang Didapat Dari GEPALA */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-yellow-500">
            Yang Didapat Dari GEPALA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 hover:border-yellow-500 transition-colors"
              >
                <CardContent className="p-6 text-center">
                  <benefit.icon className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-xl mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment */}
      <section id="recruitment" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-8 text-yellow-500">
              Bergabunglah Dengan Kami
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 text-justify">
              Apakah kamu siap untuk menjadi bagian dari keluarga besar GEPALA?
              Kami mencari individu yang memiliki semangat petualangan, cinta
              terhadap alam, dan siap untuk mengembangkan diri. Bersama GEPALA,
              kamu akan mendapatkan pengalaman tak terlupakan, teman
              seperjuangan, dan karakter yang kuat.
            </p>
            <Button
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3"
              onClick={() =>
                window.open("https://instagram.com/ppgprgepala", "_blank")
              }
            >
              Info Recruitment
            </Button>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 bg-yellow-500">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl text-black italic">
              "GEPALA tidak hanya tabah di awal, GEPALA tidak hanya tabah di
              pertengahan, GEPALA tabah sampai akhir!"
            </blockquote>
          </div>
        </div>
      </section>

      {/* Pertanyaan dan FAQ */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-yellow-500">
            Punya Pertanyaan?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Kontak */}
            <div>
              <h3 className="text-2xl mb-6 text-white">Hubungi Kami</h3>
              <div className="space-y-3">
                <div className="bg-gray-800 rounded-lg transition-all duration-300 ease-in-out p-6 h-16 flex items-center">
                  <div
                    className="flex items-center space-x-2 cursor-pointer p-6 -m-6 h-full w-full"
                    onClick={() => handleContactMethodChange("location")}
                  >
                    <MapPin className="w-5 h-5 text-yellow-500" />
                    <span>Kunjungi Sekretariat</span>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg transition-all duration-300 ease-in-out p-6 h-16 flex items-center">
                  <div
                    className="flex items-center space-x-2 cursor-pointer p-6 -m-6 h-full w-full"
                    onClick={() => handleContactMethodChange("instagram")}
                  >
                    <Instagram className="w-5 h-5 text-yellow-500" />
                    <span>DM Instagram Kami</span>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg pt-6 pb-6 px-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Send className="w-5 h-5 text-yellow-500" />
                    <span>Kirim Pesan</span>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="name" className="block mb-2">
                          Nama Lengkap
                        </Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={messageForm.name}
                          onChange={(e) =>
                            setMessageForm((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                          className="bg-gray-700 border-gray-600"
                        />
                      </div>
                      <div>
                        <Label htmlFor="from" className="block mb-2">
                          Dari
                        </Label>
                        <Input
                          id="from"
                          placeholder="Murid SMAN 15 Bandung"
                          value={messageForm.from}
                          onChange={(e) =>
                            setMessageForm((prev) => ({
                              ...prev,
                              from: e.target.value,
                            }))
                          }
                          className="bg-gray-700 border-gray-600"
                        />
                      </div>
                      <div>
                        <Label htmlFor="contact" className="block mb-2">
                          Email/Nomor WhatsApp
                        </Label>
                        <Input
                          id="contact"
                          placeholder="085x-xxxx-xxxx"
                          value={messageForm.contact}
                          onChange={(e) =>
                            setMessageForm((prev) => ({
                              ...prev,
                              contact: e.target.value,
                            }))
                          }
                          className="bg-gray-700 border-gray-600"
                        />
                      </div>
                      <div>
                        <Label htmlFor="message" className="block mb-2">
                          Pesan
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Halo, saya tertarik untuk bergabung dengan GEPALA..."
                          value={messageForm.message}
                          onChange={(e) =>
                            setMessageForm((prev) => ({
                              ...prev,
                              message: e.target.value,
                            }))
                          }
                          className="bg-gray-700 border-gray-600 min-h-[200px]"
                        />
                      </div>
                      <Button
                        onClick={handleSendMessage}
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
                      >
                        Kirim Pesan
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <FAQ />
          </div>
        </div>
      </section>

      <AdminLoginButton />
    </div>
  );
}
