import { Search, SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Header() {
    return(
        <div className="header">
            <div className="container justify-between">
                <Image src="/logo.svg" alt="Logo" width={189} height={41} />

                <div className="flex items-center gap-5 w-[612px]">
                    <div className="relative w-[459px]">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input 
                            placeholder="Введите название мероприятия" 
                            className="pl-16 h-16 w-full font-bold rounded-none"
                        />
                    </div>
                    <Button variant="outline" size="default" className="gap-2 h-16 w-[130px] font-bold rounded-none">
                        <SlidersHorizontal className="h-5 w-5" />
                        Фильтры
                    </Button>
                </div>

                <a href="#" className="px-6 py-4 bg-[#E94D42] text-[#FFF] flex gap-2 items-center font-bold">Поддержка <Image src="/support.svg" alt="" width={28} height={28} /></a>
            </div>
        </div>
    )
}