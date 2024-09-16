# 🍿 usePopcorn

usePopcorn is a movie search and rating app built using React. It allows users to search for movies, view detailed information, rate movies, and keep track of the films they’ve watched. The app leverages the OMDb API to fetch movie data and stores user data locally.

## 🚀 Live Demo

You can check out the live demo [here](#).

## Features

- Search for movies using the OMDb API.
- View movie details including plot, actors, director, genre, and IMDb rating.
- Add movies to your "watched" list and rate them.
- View summaries of the movies you’ve watched, including the average IMDb rating, user rating, and total runtime.
- Local storage support: your watched list and ratings are saved, even after refreshing the page.
- Keyboard shortcuts for navigation:
  -  `Enter`: Focus on the search bar and clear the current search term.
  -  `Escape`: Close the movie details view.

---

## 🛠️ Installation & Setup

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/en/) (v14.x or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps to Install

1. Clone this repository to your local machine:

```bash
git clone https://github.com/yourusername/usePopcorn.git
cd usePopcorn
```

2.Install the dependencies:
npm install

3.Create an `.env` file at the root of the project and add your OMDb API key:
You can get an API key by signing up at `OMDb API`.

4.Start the development server:
npm start
The app should now be running on `http://localhost:3000`.

---

🌟 Key Features

1. Movie Search
   The app allows you to search for movies by title using the OMDb API. As you type in the search bar, it displays a list of movies matching the query.

2. Movie Details
   Click on a movie to view its details, such as:

- Plot
- Genre
- Director
- Actors
  -IMDb rating

3. Rating Movies
   After viewing a movie’s details, you can give it your own rating by selecting stars. Your rating will be saved locally.

4. Watched Movies List
   You can add movies to your "watched" list. The app will display a summary of the movies you’ve watched, including:

- Average IMDb rating
- Average user rating
- Total runtime of all watched movies

5. Local Storage
   The app uses local storage to save your watched list and ratings, ensuring that your data persists even after refreshing the page.

---

🔑 Keyboard Shortcuts

- Enter: Focus on the search bar and clear the current query.
- Escape: Close the movie details modal and return to the main screen.

---

📦 Dependencies

- React: The core JavaScript library for building the UI.
- OMDb API: For fetching movie data.
- Custom Hooks: Several custom hooks (like `useMovies` and `useKey`) are used to handle API calls and keyboard events efficiently.
- Local Storage: Data is stored in the browser’s local storage using the custom hook `useLocalStorageState`.

---

💻 Technologies Used

- React: The frontend library used to create interactive user interfaces.
- CSS: For styling the components.
- OMDb API: To fetch movie data.
- Local Storage: To persist user ratings and watched movies across sessions.

---

🤝 Acknowledgements

- `OMDb API` for providing movie data.

---
