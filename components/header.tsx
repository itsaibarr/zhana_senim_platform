"use client";

import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";

interface HeaderProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    filters: {
        minPrice: string;
        maxPrice: string;
        selectedAuthors: string[];
        startDate: string;
        endDate: string;
    };
    onFiltersChange: (filters: {
        minPrice: string;
        maxPrice: string;
        selectedAuthors: string[];
        startDate: string;
        endDate: string;
    }) => void;
}

const authors = [
    "Erzhuman Aibar",
    "Amina Kazakova",
    "Daniyar Bekov",
    "Gulnara Tursynova",
    "Rustam Aliev",
    "Madina Omarova"
];

export default function Header({ searchQuery, setSearchQuery, filters, onFiltersChange }: HeaderProps) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [tempFilters, setTempFilters] = useState(filters || {
        minPrice: "",
        maxPrice: "",
        selectedAuthors: [],
        startDate: "",
        endDate: ""
    });

    const handleApplyFilters = () => {
        onFiltersChange(tempFilters);
        setIsDialogOpen(false);
    };

    const handleAuthorChange = (author: string, checked: boolean) => {
        setTempFilters(prev => ({
            ...prev,
            selectedAuthors: checked
                ? [...prev.selectedAuthors, author]
                : prev.selectedAuthors.filter(a => a !== author)
        }));
    };

    return(
        <div className="header">
            <div className="container justify-between">
                <Image src="/logo.svg" alt="Logo" width={189} height={41} />

                <div className="flex items-center gap-5 w-[612px]">
                    <div className="relative w-[459px]">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Введите название мероприятия"
                            className="pl-16 h-16 w-full font-bold rounded-none"
                        />
                    </div>
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger asChild>
                            <Button variant="outline" size="default" className="gap-2 h-16 w-[130px] font-bold rounded-none">
                                <SlidersHorizontal className="h-5 w-5" />
                                Фильтры
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Фильтры</DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-medium">Мин. цена</label>
                                        <Input
                                            type="number"
                                            value={tempFilters.minPrice}
                                            onChange={(e) => setTempFilters(prev => ({ ...prev, minPrice: e.target.value }))}
                                            placeholder="0"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium">Макс. цена</label>
                                        <Input
                                            type="number"
                                            value={tempFilters.maxPrice}
                                            onChange={(e) => setTempFilters(prev => ({ ...prev, maxPrice: e.target.value }))}
                                            placeholder="1000"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm font-medium">Автор</label>
                                    <div className="grid grid-cols-2 gap-2 mt-2">
                                        {authors.map(author => (
                                            <div key={author} className="flex items-center space-x-2">
                                                <Checkbox
                                                    id={author}
                                                    checked={tempFilters.selectedAuthors.includes(author)}
                                                    onCheckedChange={(checked) => handleAuthorChange(author, checked as boolean)}
                                                />
                                                <label htmlFor={author} className="text-sm">{author}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-medium">Дата начала</label>
                                        <Input
                                            type="date"
                                            value={tempFilters.startDate}
                                            onChange={(e) => setTempFilters(prev => ({ ...prev, startDate: e.target.value }))}
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium">Дата окончания</label>
                                        <Input
                                            type="date"
                                            value={tempFilters.endDate}
                                            onChange={(e) => setTempFilters(prev => ({ ...prev, endDate: e.target.value }))}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end gap-2">
                                <Button variant="outline" onClick={() => setTempFilters(filters)}>Сбросить</Button>
                                <Button onClick={handleApplyFilters}>Применить</Button>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>

                <a href="#" className="px-6 py-4 bg-[#E94D42] text-[#FFF] flex gap-2 items-center font-bold">Поддержка <Image src="/support.svg" alt="" width={28} height={28} /></a>
            </div>
        </div>
    )
}
