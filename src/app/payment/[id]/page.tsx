"use client";

import Image from "next/image";
import { Calendar, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { notFound, useRouter } from "next/navigation";
import { events } from "@/constants/events";

interface PaymentPageProps {
  params: {
    id: string;
  };
}

export default function PaymentPage({ params }: PaymentPageProps) {
  const event = events.find((e) => e.id === params.id);

  if (!event) {
    notFound();
  }

  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handlePay = () => {
    const telegramUrl = `https://t.me/zamasenbot?start=pay_${event.id}`;
    window.open(telegramUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={handleBack}
          className="mb-6 text-gray-600 hover:text-gray-900 flex items-center gap-2"
        >
          ← Назад
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl mx-auto">
          <div className="relative w-full h-[320px]">
            <Image
              src={event.imageSrc}
              alt={event.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-8">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-5">
              <span className="font-medium">{event.author}</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{event.date}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Coins className="h-4 w-4" />
                <span>{event.price} ₸</span>
              </div>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {event.title}
            </h1>

            <p className="text-gray-600 mb-8 leading-relaxed">
              {event.description}
            </p>

            <div className="bg-gray-50 rounded-lg p-5 mb-8">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">
                  Итог к оплате
                </span>
                <span className="text-2xl font-bold text-gray-900">
                  {event.price} ₸
                </span>
              </div>
            </div>

            <Button
              onClick={handlePay}
              className="w-full bg-[#E94D42] hover:bg-[#d43d32] text-white rounded-none font-bold h-[60px] text-lg"
            >
              Оплатить и зарегистрироваться
              <Image
                src="/arrow-up-right-white.svg"
                alt="Оплатить"
                width={24}
                height={24}
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}