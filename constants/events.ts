export interface Event {
    id: string;
    imageSrc: string;
    author: string;
    date: string;
    price: string;
    title: string;
    description: string;
}

export const events: Event[] = [
    {
        id: "1",
        imageSrc: "/card-image.png",
        author: "Erzhuman Aibar",
        date: "2окт, 2025",
        price: "500",
        title: "Введение в UX-дизайн: как создавать понятные интерфейсы",
        description: "Узнай основы UX-дизайна и научись превращать идеи в удобные цифровые продукты. На сессии разберём реальные кейсы и простые принципы проектирования."
    },
    {
        id: "2",
        imageSrc: "/card-image.png",
        author: "Amina Kazakova",
        date: "5окт, 2025",
        price: "700",
        title: "Мастер-класс по UI-дизайну в Figma",
        description: "Практический мастер-класс по созданию современных интерфейсов в Figma. Узнай о лучших практиках и инструментах для эффективной работы."
    },
    {
        id: "3",
        imageSrc: "/card-image.png",
        author: "Daniyar Bekov",
        date: "10окт, 2025",
        price: "600",
        title: "Прототипирование в Adobe XD",
        description: "Изучите основы прототипирования и создания интерактивных прототипов в Adobe XD. Практические упражнения и реальные примеры."
    },
    {
        id: "4",
        imageSrc: "/card-image.png",
        author: "Gulnara Tursynova",
        date: "15окт, 2025",
        price: "800",
        title: "Дизайн-системы: от концепции к реализации",
        description: "Узнайте, как создавать и поддерживать дизайн-системы для крупных проектов. Примеры из реальных компаний и практические советы."
    },
    {
        id: "5",
        imageSrc: "/card-image.png",
        author: "Rustam Aliev",
        date: "20окт, 2025",
        price: "550",
        title: "Анимации в веб-дизайне",
        description: "Мастер-класс по созданию анимаций для веб-интерфейсов. Использование CSS, JavaScript и современных библиотек."
    },
    {
        id: "6",
        imageSrc: "/card-image.png",
        author: "Madina Omarova",
        date: "25окт, 2025",
        price: "650",
        title: "Исследование пользователей: UX-исследования",
        description: "Основы проведения пользовательских исследований. Методы, инструменты и анализ результатов для улучшения UX."
    }
];
