# Alliance Heroes

This project is a frontend application built with **Next.js 15** and **TailwindCSS**, designed to showcase characters from the Star Wars universe using the SWAPI API. The goal is to provide a clean, responsive, and user-friendly interface to browse, search, and filter heroes.

---

## Getting Started

### Installation

1. Clone the repository.
2. Run the following commands:

```bash
pnpm install
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Overview

### Home Page

- The application starts on a **Home Page**.
- The page features an **intro animation** to provide a smooth and engaging first impression.
- From here, users can navigate to the **Heroes List Page**.

### Heroes List Page

- Displays a **paginated list of heroes**.
- Each hero is shown with a card containing key details such as **name, gender, height, hair color**, etc.
- Users can **click on the hero's photo or name** to go to a detailed page for that hero.

### Search & Filters

- The list allows **searching heroes by name**.
- Filters are applied **only to the currently loaded page** because the SWAPI API does not support server-side filtering for all heroes.
- It is technically possible to fetch all heroes and filter on the frontend, but this would be inefficient and suboptimal.
- Ideally, this would require a **backend endpoint** that accepts filters, similar to the search functionality.
- Current filters work **per-page only** to optimize performance and avoid multiple unnecessary API requests.

### Pagination

- Pagination is fully functional and allows users to navigate through different pages of heroes.
- Each page fetches only the heroes for that page from the API.

### Hero Detail Page

- Clicking on a hero card opens a **detailed page** for that hero.
- Detailed page includes:
  - All hero parameters (**height, mass, hair, skin, eyes, birth year, gender, etc.**)
  - Links to related resources such as **homeworld, films, species, vehicles, and starships** are **hashed**
- Users can **copy the page URL** via a dedicated button.

## Technology Stack

- **Next.js 15**
- **TailwindCSS**
- **JavaScript/TypeScript**

---

## Additional Features

- Fully **responsive UI** for mobile, tablet, and desktop screens.
- Accessible design (**keyboard-friendly navigation**).
- Smooth **animations** for page transitions and hero cards.
- **Copy-to-clipboard** functionality for hero detail pages.
