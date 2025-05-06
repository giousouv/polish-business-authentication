# 🎨 Design Notes

This document explains the rationale behind UI/UX decisions, with a focus on Polish business professionals.

## 👥 Target Audience

Polish and English speaking business professionals. Emphasis on clarity, reliability, and familiarity in UI design.

## 🧩 UI Decisions

Login - Simplified form with "Zapamiętaj mnie (Remember me)" toggle.
Register - Designed for B2B, includes organization name field.
Forgot Password - Reassurance copy and visual hierarchy on submit.

## 📱 Responsive Design

1. Tailwind CSS used with responsive breakpoints (`sm`, `md`, `lg`).
2. Font sizes scale for readability.
3. Forms adapt to full width on mobile.

## 🌐 Localization Choices

1. Dynamic UI text updated via `useTranslation()` from i18next.
2. Placeholders and button labels are translated (e.g., `Zaloguj się (Log In)`).