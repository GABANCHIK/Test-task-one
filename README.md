Recipe Search Next.js Application
This is a Next.js app that allows users to search recipes by query, cuisine, and max preparation time using the Spoonacular API. It demonstrates a search page with filters and a recipes results page with server-side fetching.

Features
Search page with:

Text input for recipe query

Dropdown select for cuisine (Italian, Mexican, Chinese)

Numeric input for max preparation time (minutes)

"Next" button that enables only when at least one field is filled

Recipes page:

Fetches recipes on the server with given query parameters

Displays recipe cards with image and title

Responsive UI styled with Tailwind CSS

Uses Next.js App Router with server components and client components

Setup & Run
1. Clone repository

git clone <repo-url>
cd <repo-folder>

2. Install dependencies
npm install
# or
yarn install

3. Configure environment variables
Create a .env.local file in the root and add:

NEXT_PUBLIC_BASE_URL=https://api.spoonacular.com
API_KEY=your_spoonacular_api_key_here
You can get a free Spoonacular API key at https://spoonacular.com/food-api.

4. Run development server
npm run dev
# or
yarn dev
Open http://localhost:3000 in your browser.

Project Structure
/app — Next.js App Router pages and components

/app/page.tsx — Search page (home)

/app/recipes/page.tsx — Recipes page with server fetching

/app/components — UI components like Card and Header

/styles — Tailwind CSS configuration


Contact
For any questions or feedback, contact [n.storchak06@gmail.com].

