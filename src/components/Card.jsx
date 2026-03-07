import { useState } from 'react';

const Card = ({ name, rating, image, deleteMovie }) => {
    const [btnval, setbtnval] = useState(false);
    

    return(
        <div className="w-72 p-4 bg-zinc-700 rounded-xl">
            <div className="w-full h-40 rounded-xl">
                <img className="w-full h-full rounded-xl object-cover" src={image} alt="" />
            </div>
            <div>
                <h2 className="mt-2 font-bold text-3xl "> 
                    Name: {name}
                </h2>
                <h5 className="mt-2 font-semibold text-sm">
                    Desc:
                </h5>
                {btnval && (
          <p className="text-sm text-gray-300 mt-1">
            {name} this is a description of the movie. It is a great movie with an amazing storyline and fantastic performances by the actors. The movie has received rave reviews from critics and audiences alike, making it a must-watch for all movie enthusiasts.
          </p>
        )}
                <h5 className="mt-2 font-bold text-md text-gray-300">
                    Rating: {rating}🚀🚀
                </h5>   
                
                <div className="flex justify-center mt-4 " >
                {/* <button className="px-6 py-2 bg-amber-600 mt-2 rounded-full ">
                    <a href="https://en.wikipedia.org/wiki/Toxic_(2026_film)" target="_blank" rel="noopener noreferrer">View More</a>
                </button> */}
                <button onClick={() => setbtnval(prev => !prev)} className="bg-orange-400 px-4 py-2 rounded-full text-violet-50 font-bold">
                    {btnval ? 'View Less' : 'View More'}
                </button>
                <button onClick={deleteMovie} className="bg-red-500 px-4 py-2 rounded-full text-white font-bold ml-2">
                    Delete  
                </button>
                </div>
            </div>
        </div>
    )
}

export default Card;