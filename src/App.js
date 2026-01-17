import './App.css';
import "milligram";
import {useState} from "react";

function App() {
    const [title, setTitle] = useState('Wall-E');
    const [year, setYear] = useState('');
    const [movies, setMovies] = useState([
        {title: "Wall-E"},
        {title: "Pulp Fiction"},
        {title: "Matrix"},
        {title: "1670"},]);

    function addMovie(event) {
        event.preventDefault();
        if (title.length < 5) {
            return alert('Tytuł jest za krótki');
        }
        // props.onMovieSubmit({title, year});
        setTitle('');
        setYear('');
        setMovies([...movies, {title, year}])
    }

    return <form onSubmit={addMovie}>
        <h2>Title & Year</h2>
        <ul>
            {movies.map(movie => <li key={movie.title}>{movie.title} ({movie.year})</li>)}
        </ul>
        <h2>Add movie</h2>
        <div>
            <label>Tytuł</label>
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>
        </div>
        <div>
            <label>Rok nagrania</label>
            <input type="text" value={year} onChange={(event) => setYear(event.target.value)}/>
        </div>
        <button>Add a movie</button>
    </form>;

}

export default App;
