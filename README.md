# Netflix GPT
**Introduction:** It is a fully responsive React-based web application designed to offer users an interactive and dynamic movie browsing experience. Key features of the application include:
- **Movie List:** On the homepage, users can view a list of movies that includes the movie title, poster image, and release year.
- **Search Functionality:** Users can filter movies by entering keywords in search bar to quickly find specific movie.
- **Favourites Management:** Users can mark movies as favourites. Favourite movies are saved and can be viewed on a separate page dedicated to favourites.
- **Infinite Scrolling:** Application supports infinite scrolling, allowing users to load more movies as they scroll down, enhancing the browsing experience without page reloads.
<br/><br/>
## Live Demo
**Click URL:** [Movie App](https://movies-clubs.netlify.app/)<br/><br/>
## Used Library, Framework and API
- ***React JS*** <br/>
- ***Tailwind CSS***             : For beautiful UI and Responsiveness.<br/>
- ***Redux***                    : For state management.<br/>
- ***Browser Local Storage***    : To store movies data.<br/>
- ***TMDB API***                 : To fetch movies data.<br/>
- ***React Router***             : Used for routing within the application.<br/><br/>
## Design Decisions
- **Components**<br/>
  - **MovieList Component (named as Body component)** <br/>
    - **Purpose:** Displays a list of movies and implement infinite scrolling of movies.<br/>
    - **Implementation Details:** <br/>
      - Displays movie with its image, title, releasing year.<br/>
      - New movies will be displayed on the page as the user scrolls.<br/><br/>
  - **Header Component** <br/>
    - **Purpose:** Provides a search bar to filter the list of movies and includes navigation to the favourite movies page.<br/>
    - **Implementation Details:** <br/>
      - Search updates the list of movies dynamically as the user types.<br/>
      - Includes a favourite icon, when clicked, redirects the user to the page displaying their favourite movies.<br/><br/>
  - **Favourite Component**<br/>
    - **Purpose:** Displays a list of favourite movies.<br/>
    - **Implementation Details:** <br/>
      - User can see their favourite movies and remove them.<br/><br/>
   - **App Component**<br/>
     - **Purpose:** To manage the overall application state.<br/>
     - **Implementation Details:** <br/>
       - Combines Header, MovieList and Favourite components.<br/><br/>

## Running the Application
- **Prerequisites:**
  - Node.js: Ensure that Node.js (version 14 or higher) is installed. Download and install from nodejs.org.
- **Installation:**
  - **Clone the repository:**
    - git clone https://github.com/shakibsiddiqui1/movie-club.git
    - cd movie-club
  - **Install the dependencies:**
    - npm install
  - **Running the Application:** in VS code.
    - **Start the development server:**
      - npm run dev
      - Open your web browser and navigate to http://localhost:5173 to view the application.<br/><br/>
  
## Additional Features Implemented
- **Favourite Movie page:** <br/>
  - Display favourite movies added by user.
  - User can remove the favourite movies.<br/><br/>
  
## Possible Improvements
- **Improved UI/UX**
  - **Styling Enhancements:** Enhance the design of overall website.
- **Performance Optimization**
  - **Debouncing Technique:** Implement debouncing in search bar for search optimization.
  - **Lazy Loading of image:** To load image only when they are scrolled into view.
- **Extended Functionality**
  - **Add movie trailer page:** When the user clicks on a movie, they will be redirected to the trailer page where the movie trailer will start playing.
  - **Login/Signup pages**
- **Testing**
  - **Unit Testing:** Implement unit tests for individual components using Jest and React Testing Library to ensure they work as expected.<br/><br/>

# Screenshots
- **Home Page**<br/>
![Screenshot (98)](https://github.com/user-attachments/assets/d7fd215e-373a-454f-a1dc-0bd844910690)
<br/>
- **Favourite Movie Page**<br/>
![Screenshot (99)](https://github.com/user-attachments/assets/a20effb2-927e-41c2-b50f-aaa394995cfc)

<br/><br/>

##  💖Conclusion
The Movie Filtering Application provides a dynamic and interactive experience for filtering movies based on title. It leverages React's component-based architecture, and modern responsive framework Tailwind CSS to deliver a responsive user interface. Future improvements could enhance functionality, performance, and user experience.<br/><br/>
If you have any questions, suggestions, or just want to connect, feel free to reach out.<br/><br/><br/>
Made with ❤️ and React.
