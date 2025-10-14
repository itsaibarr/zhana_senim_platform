"use client";
import Card from "./card";
import { Event } from "../constants/events";

interface CardGridProps {
    events?: Event[];
}

export default function CardGrid({ events = [] }: CardGridProps) {
    return(
        <div className="mt-3">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map((event) => (
                        <Card
                            key={event.id}
                            id={event.id}
                            imageSrc={event.imageSrc}
                            author={event.author}
                            date={event.date}
                            price={event.price}
                            title={event.title}
                            description={event.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
