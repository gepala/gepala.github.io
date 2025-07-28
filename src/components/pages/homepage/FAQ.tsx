import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "Apa itu GEPALA?",
    answer:
      "GEPALA adalah Perhimpunan Pendaki Gunung dan Penempuh Rimba, ekstrakurikuler pecinta alam di SMAN 15 Bandung yang telah berdiri sejak 20 Juli 1982.",
  },
  {
    question: "Bagaimana cara bergabung dengan GEPALA?",
    answer:
      "Kamu bisa bergabung dengan mengikuti recruitment yang biasanya dilakukan di awal tahun ajaran. Ikuti Instagram kami untuk info terbaru.",
  },
  {
    question: "Apa saja kegiatan di GEPALA?",
    answer:
      "Kegiatan GEPALA meliputi Diklat Dasar, Pengembaraan, Ekspedisi, Latihan Rutin, Bakti Sosial, dan berbagai kegiatan kepecintaalaman lainnya.",
  },
  {
    question: "Apakah ada biaya untuk bergabung?",
    answer:
      "Ada kontribusi untuk kegiatan organisasi, namun kami selalu berusaha meminimalkan biaya dan memberikan kemudahan bagi anggota.",
  },
];

export default function FAQ() {
  return (
    <div>
      <h3 className="text-2xl mb-6 text-white">Frequently Asked Questions</h3>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-gray-800 border-gray-700 rounded-lg mb-2"
          >
            <AccordionTrigger className="px-6 py-4 text-yellow-500 hover:text-yellow-400 hover:no-underline">
              <div className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                {faq.question}
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
