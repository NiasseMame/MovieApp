import { useState } from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import './assets/css/style.css'


const App = () => {
  const moviesData = [
      {
        id: "tt13560574",
        title: "X",
        runtime: "105 min",
        genre: "Horror",
        director: "Ti West",
        plot: "Set in 1979, adult movie actors and a small film crew arrive to a farmhouse occupied by an elderly couple in the desolate Texas countryside to film an adult movie. As the day shifts to night, the visitors slowly realize that they are not safe, and are being targeted by a nearby enemy.",
        language: "English",
        poster: "https://m.media-amazon.com/images/M/MV5BMTJiMmE5YWItOWZjYS00YTg0LWE0MTYtMzg2ZTY4YjNkNDEzXkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_SX300.jpg"
      },
      {
        id: "tt4263482",
        title: "The Witch",
        runtime: "92 min",
        genre: "Horror",
        director: "Robert Eggers",
        plot: "New England, 1630: William and Katherine try to lead a devout Christian life, homesteading on the edge of an impassible wilderness, with five children. When their newborn son mysteriously vanishes and their crops fail, the family begins to turn on one another. 'The Witch' is a chilling portrait of a family unraveling within their own sins, leaving them prey for an inconceivable evil.",
        language: "English",
        poster: "https://m.media-amazon.com/images/M/MV5BMTUyNzkwMzAxOF5BMl5BanBnXkFtZTgwMzc1OTk1NjE@._V1_SX300.jpg"
      },
      {
        id: "tt7784604",
        title: "Hereditary",
        runtime: "127 min",
        genre: "Horror",
        director: "Ari Aster",
        plot: "When her mentally ill mother passes away, Annie (Toni Collette), her husband (Gabriel Byrne), son (Alex Wolff), and daughter (Milly Shapiro) all mourn her loss. The family turn to different means to handle their grief, including Annie and her daughter both flirting with the supernatural. They each begin to have disturbing, otherworldly experiences linked to the sinister secrets and emotional trauma that have been passed through the generations of their family.",
        language: "English",
        poster: "https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_SX300.jpg"
      },
      {
        id: "tt1392214",
        title: "Prisoners",
        runtime: "153 min",
        genre: "Mystery",
        director: "Denis Villeneuve",
        plot: "How far would you go to protect your family? Keller Dover is facing every parent's worst nightmare. His six-year-old daughter, Anna, is missing, together with her young friend, Joy, and as minutes turn to hours, panic sets in. The only lead is a dilapidated RV that had earlier been parked on their street. Heading the investigation, Detective Loki arrests its driver, Alex Jones, but a lack of evidence forces his release.",
        language: "English",
        poster: "https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_SX300.jpg"
      },
      {
        id: "tt0482571",
        title: "The Prestige",
        runtime: "130 min",
        genre: "Mystery",
        director: "Christopher Nolan",
        plot: "In the end of the nineteenth century, in London, Robert Angier, his beloved wife Julia McCullough, and Alfred Borden are friends and assistants of a magician. When Julia accidentally dies during a performance, Robert blames Alfred for her death, and they become enemies. Both become famous and rival magicians, sabotaging the performance of the other on the stage. When Alfred performs a successful trick, Robert becomes obsessed trying to disclose the secret of his competitor with tragic consequences.",
        language: "English",
        poster: "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_SX300.jpg"
      },
      {
        id: "tt0209144",
        title: "Memento",
        runtime: "113 min",
        genre: "Mystery",
        director: "Christopher Nolan",
        plot: "Memento chronicles two separate stories of Leonard, an ex-insurance investigator who can no longer build new memories, as he attempts to find the murderer of his wife, which is the last thing he remembers. One story line moves forward in time while the other tells the story backwards revealing more each time.",
        language: "English",
        poster: "https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
      },
      {
        id: "tt4353250",
        title: "The Last Black Man in San Francisco",
        runtime: "121 min",
        genre: "Drama",
        director: "Joe Talbot",
        plot: "Jimmie Fails IV, a black man, is a third generation San Franciscan. Having been pushed out by circumstances like many others, Jimmie, who works a low paying job as a nurse in a seniors' care facility, returned to San Francisco three years ago and has been living in his best friend Montgomery Allen's house that he shares with his blind grandfather, Jimmie who sleeps on the floor in Mont's already cramped bedroom. Despite the house, Mont's situation is not much better than Jimmie's, Mont who works at a supermarket fish counter while he sketches and writes a play on the side.",
        language: "English",
        poster: "https://m.media-amazon.com/images/M/MV5BNTQ5OTUwYjQtYmM5Ni00YTY5LWFiOWEtYTg1MTg2Y2NmY2JhXkEyXkFqcGdeQXVyMTAzNjk5MDI4._V1_SX300.jpg"
      },
      {
        id: "tt14230458",
        title: "Poor Things",
        runtime: "141 min",
        genre: "Drama",
        director: "Yorgos Lanthimos",
        plot: "An account of the fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter.",
        "Language": "English, French, Portuguese",
        language: "English",
        poster: "https://m.media-amazon.com/images/M/MV5BNGIyYWMzNjktNDE3MC00YWQyLWEyMmEtN2ZmNzZhZDk3NGJlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg"
      },
      {
        id: "tt5537002",
        title: "Killers of the Flower Moon",
        runtime: "206 min",
        genre: "Drama",
        director: "Martin Scorsese",
        plot: "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one - until the FBI steps in to unravel the mystery.",
        language: "English",
        poster: "https://m.media-amazon.com/images/M/MV5BMTdiOTg2YmQtZTdjNi00NGJjLWI2ZTQtYWNkNDUwMDEzOTQxXkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_SX300.jpg"
      },
      {
        id: "tt7270808",
        title: "Freaks Out",
        runtime: "141 min",
        genre: "Drama",
        director: "Gabriele Mainetti",
        plot: "Matilde, Cencio, Fulvio and Mario are family when the 2nd world war hits Rome. Israel, the owner of their circus, disappears in the attempt to find a getaway overseas for them all. The four friends are in disarray. Without anyone looking after them but above all, without the circus, they lose their social placement and they feel only as sideshow attractions on the loose in a city at war.",
        language: "Italian",
        poster: "https://m.media-amazon.com/images/M/MV5BMThmYmNlMGQtYWM1NC00ZDk1LWJiMTgtOWEyNTU4YTA0ZWIxXkEyXkFqcGdeQXVyMzIwNDY4NDI@._V1_SX300.jpg"
      },
      {
        id: "tt4925340",
        title: "The Nest",
        runtime: "107 min",
        genre: "Mystery",
        director: "Roberto De Feo",
        plot: "Samuel is a paraplegic boy who lives with his mother Elena in an isolated mansion. When he meets Denise, he finds the strength to open up to the world. Elena won't let him go so easily, and she is ready to do whatever it takes to ...",
        language: "Italian",
        poster: "https://m.media-amazon.com/images/M/MV5BZDgyZTQ2NTctMzczZC00OGE5LWE3ZTUtYWJkMjAzMTQ0MWQyXkEyXkFqcGdeQXVyMzIwNDY4NDI@._V1_SX300.jpg"
      },
      {
        id: "tt14561712",
        title: "La Chimera",
        runtime: "130 min",
        genre: "Comedy",
        director: "Alice Rohrwacher",
        plot: "A group of archaeologists and the black market of historical artifacts.",
        language: "Italian",
        poster: "https://m.media-amazon.com/images/M/MV5BMzFlZTNiMjItYjQ0Yy00ZGRhLWFkNjAtYjkxMTFjNTg3OWNiXkEyXkFqcGdeQXVyODA0MjgyNzM@._V1_SX300.jpg"
      },
  ];

  const [genre, setGenre] = useState('');
  const [director, setDirector] = useState('');
  const [language, setLanguage] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(null);

  const pickMovies = () => {
// Log opzioni selezionate
  console.log("Selected Genre:", genre);
  console.log("Selected Director:", director);
  console.log("Selected Language:", language);

    // Filtro i film in base alla selezione
  const filtered = moviesData.filter(movie => {
    // Controllo che i film rispettino la selezione
  const genreMatch = !genre || movie.genre.toLowerCase() === genre.toLowerCase();
  const directorMatch = !director || movie.director.toLowerCase() === director.toLowerCase();
  const languageMatch = !language || movie.language.toLowerCase() === language.toLowerCase();


  console.log(`${movie.title}: genreMatch=${genreMatch}, directorMatch=${directorMatch}, languageMatch=${languageMatch}`);
   // Return true se la selezione è rispettata
  return genreMatch && directorMatch && languageMatch;
    });

    // Log filtered movies array
    console.log(filtered);

    // Aggiorno state con i film filtrati
    setFilteredMovies(filtered);
  };


  return (
  <> 
  <Header/>
  
    <div className="pick">

    <p className="paragraph">Welcome to our Movie Filtering App! This handy tool allows you to discover movies based on your preferences. Simply select the genre, director, and language of your choice, then click 'Pick the movie' to see the results. Whether you're in the mood for horror, mystery, drama, or more, our app helps you find the perfect film for your viewing pleasure. Happy exploring!</p>

      <h2>Select the categories</h2>

      <div>
      <label>
      <strong>Genre:</strong>
        <select name="genre" id="genre"value={genre} onChange={e => setGenre(e.target.value)}>
          <option value="">Select...</option>
          <option value="Horror">Horror</option>
          <option value="Mystery">Mystery</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
        </select>
      </label>

      <label>
        <strong>Director:</strong>
        <select name="director" id="director" value={director} onChange={e => setDirector(e.target.value)}>
          <option value="">Select...</option>
          <option value="Ti West">Ti West</option>
          <option value="Robert Eggers">Robert Eggers</option>
          <option value="Ari Aster">Ari Aster</option>
          <option value="Denis Villeneuve">Denis Villeneuve</option>
          <option value="Christopher Nolan">Christopher Nolan</option>
          <option value="Joe Talbot">Joe Talbot</option>
          <option value="Yorgos Lanthimos">Yorgos Lanthimos</option>
          <option value="Martin Scorsese">Martin Scorsese</option>
          <option value="Gabriele Mainetti">Gabriele Mainetti</option>
          <option value="Roberto De Feo">Roberto De Feo</option>
          <option value="Alice Rohrwacher">Alice Rohrwacher</option>
        </select>
      </label>

      <label>
        <strong>Language:</strong>
        <select name="language" id="language" value={language} onChange={e => setLanguage(e.target.value)}>
          <option value="">Select...</option>
          <option value="English">English</option>
          <option value="Italian">Italian</option>
        </select>
      </label>

        <br></br>
        <button onClick={pickMovies}>Pick the movie</button>
      </div>

      
        <div>

          {filteredMovies && filteredMovies.length === 0 && (
          <p className="message">No movies match the selection.</p>
          )}

          {filteredMovies && filteredMovies.length > 0 && (

          <MovieList movies={filteredMovies || moviesData} />
          )}
        </div>
  
    </div>
  <Footer />
  </>
);
};

export default App;