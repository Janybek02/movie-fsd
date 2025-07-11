import type { HeaderConfig } from "./types";
export const headerConfig:HeaderConfig = {
  logo: 'LOGO',
  links: [
    { label: 'Главная', href: '/' },
    { label: 'Популярные', href: '/popular' },
    { label: 'Сериалы', href: '/series' },
    { label: 'Фильмы', href: '/movies' },
    { label: 'Избранные', href: '/favorite' },
  ],
  lan: "ru",
};