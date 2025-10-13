import Image from "next/image";
import { Calendar, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CardProps {
    imageSrc: string;
    author: string;
    date: string;
    price: string;
    title: string;
    description: string;
}

export default function Card({ imageSrc, author, date, price, title, description }: CardProps) {
    return(
        <div className="w-full max-w-md bg-white border border-gray-200 overflow-hidden">
            <div className="relative w-full h-[280px]">
                <Image 
                    src={imageSrc} 
                    alt={title} 
                    fill
                    className="object-cover"
                />
            </div>
            
            <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <span className="font-medium">{author}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{date}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                        <Coins className="h-4 w-4" />
                        <span>{price}</span>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {description}
                </p>

                <div className="flex gap-2">
                    <Button className="flex-1 bg-[#E94D42] hover:bg-[#d43d32] text-white rounded-none font-bold h-[50px]">
                        Записаться <Image src="/arrow-up-right-white.svg" alt="Logo" width={20} height={20} />
                    </Button>
                    <Button variant="outline" className="flex-1 rounded-none font-bold h-[50px]">
                        Узнать больше <Image src="/arrow-up-right-black.svg" alt="Logo" width={20} height={20} />
                    </Button>
                </div>
            </div>
        </div>
    )
}