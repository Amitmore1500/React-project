import Card from "./components/Card";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([
    {
      name: "Toxic",
      rating: "5.0",
      image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/medium/toxic-a-fairy-tale-for-grown-ups-et00378770-1771578880.jpg"
    },
    {
     
      name: "KGF",
      rating: "4.8",
      image: "https://wallpapercave.com/wp/wp4019390.jpg"
    },
    {
      
      name: "Salaar",
      rating: "4.7",
      image: "https://i.pinimg.com/736x/57/06/c8/5706c8ec1abbc3cc954f4e143d60e13e.jpg"
    }
  ]);
  return(
    <div className="w-full min-h-screen bg-zinc-800 text-white p-8 flex items-center gap-8 justify-center">
       {movies.map((movie) => (
        <Card
          name={movie.name}
          rating={movie.rating}
          image={movie.image}
          deleteMovie={() => {
            setMovies(movies.filter((m) => m.name != movie.name));
          }}
        />
      ))}
    </div>
  )
}
export default App; 
