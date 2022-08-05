'use strict';

let numberOfFilms = null;

function start() {
    do {
        numberOfFilms = prompt("How many movies have you seen?", "");
    } while (numberOfFilms === null || numberOfFilms === '' || isNaN(numberOfFilms) || numberOfFilms.length > 50);
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
};

function rememberMyMovies() {
    const questions = {
        lastWatchedMovie: "One of the last watched movies?",
        rate: "How much do you rate it",
    };
    
    for (let i = 0; i < 2; i++) {
        const a = prompt(questions.lastWatchedMovie + " " + i, "");
        const b = prompt(questions.rate + " " + i, "");
    
        
        if (
            a === null || 
            a === '' || 
            a.length > 50 || 
            b === null || 
            b === '' || 
            b.length > 50
        ) {
            i--;
            continue;
        }
            
        personalMovieDB.movies[a] = b;
    }
}

rememberMyMovies();


function detectPersonalLever() {
    if (personalMovieDB.count < 10) {
        alert("You have watched only few movies");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("You are classic viewer");
    } else if (personalMovieDB.count >= 30) {
        alert("You are cinephile");
    } else {
        alert("Ooops, we have got an error...");
    }
}

detectPersonalLever();


function showMyDB() {
    if(!personalMovieDB.privat) {
        console.log(personalMovieDB);
    } else {
        alert("personalMovieDB privat is " + personalMovieDB.privat);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        const a = prompt(`What is your favorite movie genres at number ${i + 1}`, "");

        if (
            a === null || 
            a.trim() === '' || 
            isFinite(a) ||
            a.length > 50
        ) {
            i--;
            continue;
        }
            
        personalMovieDB.genres[i] = a;
    }
}

writeYourGenres();