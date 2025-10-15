"use client";

import Image from "next/image";
import { Calendar, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";
import { events } from "@/constants/events";

const detailedEvents = [
    {
        id: "1",
        fullDescription: "Этот мастер-класс предназначен для начинающих дизайнеров и тех, кто хочет понять основы пользовательского опыта. Мы разберём:\n\n• Основные принципы UX-дизайна\n• Исследование пользователей\n• Создание пользовательских персонажей\n• Картирование пользовательского пути\n• Прототипирование и тестирование\n\nПо окончании курса вы сможете самостоятельно проводить UX-исследования и создавать понятные интерфейсы.",
        duration: "3 часа",
        level: "Начальный",
        prerequisites: "Базовые знания дизайна приветствуются, но не обязательны"
    },
    {
        id: "2",
        fullDescription: "Полный практический курс по работе с Figma для создания современных пользовательских интерфейсов. В программе:\n\n• Интерфейс Figma и основные инструменты\n• Создание компонентов и стилей\n• Работа с Auto Layout\n• Прототипирование интерактивных элементов\n• Совместная работа в команде\n• Экспорт и подготовка к разработке\n\nКурс включает практические задания и реальные кейсы.",
        duration: "4 часа",
        level: "Средний",
        prerequisites: "Базовые знания Figma или аналогичных инструментов"
    },
    {
        id: "3",
        fullDescription: "Курс по созданию интерактивных прототипов в Adobe XD. Вы научитесь:\n\n• Создавать wireframes и mockups\n• Работать с компонентами и состояниями\n• Настраивать переходы и анимации\n• Создавать интерактивные прототипы\n• Проводить пользовательское тестирование\n• Подготавливать файлы для разработчиков\n\nКурс включает практические упражнения на каждом этапе.",
        duration: "3.5 часа",
        level: "Средний",
        prerequisites: "Знание основ Adobe XD"
    },
    {
        id: "4",
        fullDescription: "Комплексный курс по созданию и поддержке дизайн-систем. В программе:\n\n• Что такое дизайн-система и зачем она нужна\n• Структура дизайн-системы\n• Создание компонентов и паттернов\n• Документация и гайдлайны\n• Внедрение в команде разработчиков\n• Масштабирование и поддержка\n\nПримеры из реальных проектов крупных компаний.",
        duration: "5 часов",
        level: "Продвинутый",
        prerequisites: "Опыт работы с UI/UX дизайном от 1 года"
    },
    {
        id: "5",
        fullDescription: "Курс по созданию анимаций для веб-интерфейсов. Вы изучите:\n\n• Основы CSS анимаций\n• JavaScript анимации\n• Работа с библиотеками (Framer Motion, GSAP)\n• Принципы хорошей анимации\n• Микроинтерации\n• Анимации для мобильных устройств\n\nПрактические примеры и готовые компоненты.",
        duration: "3 часа",
        level: "Средний",
        prerequisites: "Базовые знания HTML/CSS и JavaScript"
    },
    {
        id: "6",
        fullDescription: "Комплексный курс по пользовательским исследованиям. В программе:\n\n• Виды пользовательских исследований\n• Интервью и опросы\n• Юзабилити-тестирование\n• Анализ данных\n• Создание personas и сценариев\n• A/B тестирование\n• Отчёты и презентация результатов\n\nПрактические методики и инструменты для проведения исследований.",
        duration: "4 часа",
        level: "Средний",
        prerequisites: "Базовые знания UX-дизайна"
    }
];

interface EventPageProps {
    params: {
        id: string;
    };
}

export default function EventPage({ params }: EventPageProps) {
    const event = events.find((e) => e.id === params.id);
    const detailedEvent = detailedEvents.find((de) => de.id === params.id);

    if (!event) {
        notFound();
    }

    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    const handleGoToPayment = () => {
        router.push(`/payment/${event.id}`);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                <button
                    onClick={handleBack}
                    className="mb-6 text-gray-600 hover:text-gray-900 flex items-center gap-2"
                >
                    ← Назад к событиям
                </button>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
                    <div className="relative w-full h-[400px]">
                        <Image
                            src={event.imageSrc}
                            alt={event.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="p-8">
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
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

                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            {event.title}
                        </h1>

                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            {event.description}
                        </p>

                        {detailedEvent && (
                            <>
                                <div className="grid md:grid-cols-3 gap-6 mb-8">
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h3 className="font-semibold text-gray-900 mb-2">Длительность</h3>
                                        <p className="text-gray-600">{detailedEvent.duration}</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h3 className="font-semibold text-gray-900 mb-2">Уровень</h3>
                                        <p className="text-gray-600">{detailedEvent.level}</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h3 className="font-semibold text-gray-900 mb-2">Предварительные знания</h3>
                                        <p className="text-gray-600">{detailedEvent.prerequisites}</p>
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Подробное описание</h2>
                                    <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                                        {detailedEvent.fullDescription}
                                    </div>
                                </div>
                            </>
                        )}

                        <div className="flex gap-4">
                            <Button
                                onClick={handleGoToPayment}
                                className="flex-1 bg-[#E94D42] hover:bg-[#d43d32] text-white rounded-none font-bold h-[60px] text-lg"
                            >
                                Записаться на курс <Image src="/arrow-up-right-white.svg" alt="Logo" width={24} height={24} />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
