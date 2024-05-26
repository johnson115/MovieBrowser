import React, { useState, useEffect } from "react";


const Browser = () => {
    const [randomNumber, setRandomNumber] = useState(null);
    const [movie, setMovieDetails] = useState({});

    const generateRandomNumber = () => {
        const random = Math.floor(Math.random() * 900); // Change the range as needed
        setRandomNumber(random);
    };

    useEffect(() => {
        const intervalId = setInterval(generateRandomNumber, 7000);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (randomNumber !== null) {
            fetch(
                `https://api.themoviedb.org/3/movie/${randomNumber}?api_key=68638adb4db3967ed4cc1ce3da324fb6&language=en-US`
            )
                .then((response) => response.json())
                .then((data) => {
                    setMovieDetails(data);
                });
        }
    }, [randomNumber]);

    let url = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        : "";

    return (
        <div>
            <img
            src={url}
            alt="movies"
            className="shows"
            style={{
                
                float:"right",
                
                marginBottom: "20px" // Use camelCase here
            }}
        />
        </div>
    );
};

export default Browser;
