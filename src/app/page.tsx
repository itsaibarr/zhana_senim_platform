"use client";

import { useState, useMemo } from "react";
import CardGrid from "../../components/card_grid";
import Header from "../../components/header";
import { events } from "../../constants/events";

// Helper function to parse event dates
const parseEventDate = (dateStr: string): Date => {
    // Assuming format "DDMMM, YYYY" like "2окт, 2025"
    const cleaned = dateStr.replace('окт', 'Oct').replace(',', '');
    return new Date(cleaned);
};

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filters, setFilters] = useState({
        minPrice: "",
        maxPrice: "",
        selectedAuthors: [] as string[],
        startDate: "",
        endDate: ""
    });

    const filteredEvents = useMemo(() => {
        let filtered = events;

        // Filter by search query (title or description)
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(event =>
                event.title.toLowerCase().includes(query) ||
                event.description.toLowerCase().includes(query)
            );
        }

        // Filter by price range
        if (filters.minPrice) {
            const minPrice = parseInt(filters.minPrice);
            filtered = filtered.filter(event => parseInt(event.price) >= minPrice);
        }
        if (filters.maxPrice) {
            const maxPrice = parseInt(filters.maxPrice);
            filtered = filtered.filter(event => parseInt(event.price) <= maxPrice);
        }

        // Filter by selected authors
        if (filters.selectedAuthors.length > 0) {
            filtered = filtered.filter(event => filters.selectedAuthors.includes(event.author));
        }

        // Filter by date range with improved parsing
        if (filters.startDate) {
            const startDate = new Date(filters.startDate);
            filtered = filtered.filter(event => {
                const eventDate = parseEventDate(event.date);
                return eventDate >= startDate;
            });
        }
        if (filters.endDate) {
            const endDate = new Date(filters.endDate);
            filtered = filtered.filter(event => {
                const eventDate = parseEventDate(event.date);
                return eventDate <= endDate;
            });
        }

        return filtered;
    }, [searchQuery, filters]);

    const handleFiltersChange = (newFilters: typeof filters) => {
        setFilters(newFilters);
    };

    return (
        <div className="">
            <Header
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                filters={filters}
                onFiltersChange={handleFiltersChange}
            />
            <CardGrid events={filteredEvents} />
        </div>
    );
}
