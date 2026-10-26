# AGENTS.md

Персональний веб-сайт та інтерактивне резюме (CV) Олега Ситніка (Oleh Sytnik), що хоститься на GitHub Pages (`https://sytnik.github.io`).

## Структура репозиторію

- `SytnikGithub/` — вихідний код Single Page Application (SPA) на Angular.
  - `src/app/` — компоненти сторінок та навігації:
    - `primary/` — головна сторінка (профіль, контакти, огляд).
    - `technical/` — технічні навички (Hard Skills).
    - `soft/` — гнучкі навички (Soft Skills).
    - `experience/` — кар'єрний шлях та досвід роботи.
    - `certifications/` — сертифікації Microsoft Azure, .NET та курси.
    - `scientific/` — наукова діяльність (PhD дослідження та 13 публікацій з DOI).
    - `app-header/` — навігаційна панель (десктопне меню, мобільне висувне меню, перемикач теми).
  - `src/subset.mjs` — скрипт генерації обмеженого набору іконок FontAwesome у формат `.woff2`.
- `docs/` — директорія продакшн-збірки (GitHub Pages роздає сайт саме з цієї папки).
- `SytnikGithub.sln` — файл рішення Visual Studio / JetBrains Rider.
- `Oleh_Sytnik_assessment_2026-08-18.pptx` — презентація останнього асесменту (першоджерело для оновлення Soft Skills та досвіду).

> [!NOTE]
> На локальній машині користувача диск репозиторію може монтуватися як `E:\Git\sytnik.github.io` або `D:\Git\sytnik.github.io`.

---

## Команди розробки та збірки

Всі команди виконуються в підпапці `SytnikGithub`:

```bash
cd SytnikGithub

# Встановлення залежностей
npm install

# Запуск локального сервера розробки (порт 4200)
npm start -- --port 4200

# Збірка продакшн-версії (компілюється напряму в ../docs)
npm run build

# Запуск юніт-тестів
npm test
```

Конфігурація `angular.json` автоматично налаштована на збереження білду в `../docs`:
```json
"outputPath": {
  "base": "../docs",
  "browser": ""
}
```

---

## Архітектура та технологічний стек

1. **Angular 22**
   - Standalone Components (без `NgModule`).
   - Новий синтаксис керування потоком (Control Flow): `@if`, `@for`.
   - Lazy Loading компонентів у `src/app/routes.ts` через `loadComponent`.
2. **Tailwind CSS 3.4.4**
   - Повний перехід на Tailwind CSS (Bootstrap 5 повністю видалено з проєкту).
   - Конфігурація у `tailwind.config.js`, стилі в `src/styles.scss`.
   - Підтримка темної та світлої теми через класи Tailwind (`dark:...`).
3. **Іконки (FontAwesome vs Inline SVG)**
   - **Обмеження `subset.mjs`:** Скрипт компілює лише фіксований мінімальний набір іконок (17 шт.). Спроба додати нові класи FontAwesome (як-от `fa-flask`, `fa-graduation-cap`, `fa-bars`) зазнає невдачі через відсутність платного пакета `@fortawesome/fontawesome-pro`.
   - **Правило для нових іконок:** Будь-які нові іконки слід додавати як **чисті inline SVG** (наприклад, Heroicons outline з `stroke-width="1.5"` або `stroke-width="2"`), щоб візуально зберігати стиль FontAwesome Light.

---

## Контент і актуалізація розділів

### 1. Hard Skills (`/technical`)
- **AI & Agentic Coding:** Claude Code, GitHub Copilot, Cursor, Google Antigravity (пріоритетна категорія).
- **Фокус на Senior-рівень:** Видалено перерахування середовищ розробки (IDE: Rider, Visual Studio, SSMS, Git) та застарілих фронтенд-бібліотек (Grunt, MaterializeCSS, DropzoneJS).
- **Стек:** C#, .NET (Core / Framework / Blazor), Entity Framework Core, Dapper, SQL (MSSQL, MySQL, PostgreSQL), Tailwind CSS, Angular, Docker, Azure, AWS.

### 2. Soft Skills (`/soft`)
Синхронізовано з презентацією асесменту 2026 року:
- **Teamwork & Scrum participation:** Активна роль у Scrum-церемоніях, раннє усунення блокерів, зв'язок технічних рішень із бізнес-цілями.
- **Mentorship and education:** 5 груп студентів (TEAM International, Beetroot Academy), понад 50% успішно працевлаштовані.
- **Leadership and conflict resolution:** Пройдено курс *Soft Skills Plus (SSP)*, конструктивний підхід до peer code reviews.
- **Sustainable productivity:** Запобігання вигоранню команди, баланс між роботою, PhD та менторством.
- **Predictability and resilience:** Наявність BCP (Business Continuity Plan) — резервне живлення, стабільний інтернет, юридичний статус аспіранта до травня 2027 року.
- **Proactive learning & responsible AI use:** Застосування 4D Framework (Delegation, Description, Discernment, Diligence) для відповідальної інтеграції ШІ в інженерні процеси.

### 3. Scientific Activity (`/scientific`)
- **PhD Research:** Спеціальність 121 «Інженерія програмного забезпечення», Національний аерокосмічний університет «ХАІ» (червень 2023 – травень 2027).
- **Тема дисертації:** «Моделі та методи розроблення програмного забезпечення антропоцентричної диспетчеризації навчального процесу у ЗВО» (Anthropocentric Dispatching Method, ADM).
- **Публікації:** 13 наукових праць (5 фахових статей та 8 тез міжнародних конференцій) з прямими клікабельними DOI (`https://doi.org/...`, `target="_blank"`).

---

## Стандарти академічного тексту та редагування (з `EDITING.md`)

Текстовий контент сайту повинен суворо дотримуватися редакційних правил:
1. **Мова:** Виключно професійна, стримана англійська.
2. **Заборона ШІ-базвордів:** Не вживати слів *delve, tapestry, pivotal, paramount, crucial, beacon, testament, foster, leverage, multifaceted, seamless, realm, landscape*.
3. **Заборона порожніх зачинів:** Жодних *"It is worth noting that..."*, *"It is important to highlight..."*.
4. **Заборона штучних підсумків:** Жодних *"Overall..."*, *"In summary..."*.
5. **Заборонені розділові знаки:**
   - Не використовувати довгі тире (`—` або `-`).
   - Не використовувати крапки з комою (`;`).
   - Не використовувати двокрапки (`:`) для зв'язування думок або пояснень.
   - Не використовувати дужки `()` для попутних ремарок.
6. **Заборона тріад (No list triads):** Списки з рівно трьох елементів (`x, y, and z`) заборонені. Їх слід переформульовувати на пару елементів або розбивати на окремі речення.

---

## Правила безпеки та взаємодії (Guardrails)

- **Версійний контроль (Git):** Асистентам **суворо заборонено** виконувати модифікуючі команди: `git commit`, `git push`, `git merge`, `git rebase`, `git tag`, а також `git add` без явної вказівки користувача. Дозволені лише операції читання (`git status`, `git diff`, `git log`). Всі коміти здійснює особисто користувач.
- **Делегація:** Працювати лише напряму в основній сесії, не викликати автономних фонових субагентів.
- **Передача результатів:** Після завершення редагування файлів доповісти користувачу перелік змінених файлів і передати керування.
