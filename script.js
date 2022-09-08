/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';


const personalMovieDB = {
    count: null,
    movies: {},
    actors: {},
    genres: [],
    privat: true,

    toggleVisibleMyDB() {
        this.privat = !this.privat;
    },

    start() {
        do {
            const a = prompt("How many movies have you seen?", "");
            this.count = a && a.trim();
        } while (this.count === null || this.count === '' || isNaN(this.count) || this.count.length > 50);
    },

    rememberMyMovies() {
        
        for (let i = 0; i < 2; i++) {
            const lastMovie = prompt("One of the last watched movies? " + i, "");
            const movieRate = prompt("How much do you rate it " + i, "");

            const a = lastMovie && lastMovie.trim();
            const b = movieRate && movieRate.trim();

            console.log(a);
            console.log(b);
            
            if (
                a === null || 
                a === '' || 
                a.length > 50 || 
                b === null || 
                b === '' || 
                isNaN(b) ||
                b.length > 50
            ) {
                i--;
                continue;
            }
                
            personalMovieDB.movies[a] = b;
        }
    },

    detectPersonalLever() {
        if (personalMovieDB.count < 10) {
            alert("You have watched only few movies");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert("You are classic viewer");
        } else if (personalMovieDB.count >= 30) {
            alert("You are cinephile");
        } else {
            alert("Ooops, we have got an error...");
        }
    },

    showMyDB() {
        if(!personalMovieDB.privat) {
            console.log(personalMovieDB);
        } else {
            alert("personalMovieDB privat is " + personalMovieDB.privat);
        }
    },

    writeYourGenres() {
        for (let i = 0; i < 3; i++) {
            const usersGenre = prompt(`What is your favorite movie genres at number ${i + 1}`, "");
            const a = usersGenre && usersGenre.trim();
    
            if (
                a === null || 
                a === '' || 
                isFinite(a) ||
                a.length > 50
            ) {
                i--;
                continue;
            }
                
            personalMovieDB.genres[i] = a;
        }

        this.genres.forEach((genre, index) => {
            console.log(`Любимый жанр #${index + 1} - это ${genre}`);
        })
    },

};


// personalMovieDB.start();
// personalMovieDB.rememberMyMovies();
// personalMovieDB.writeYourGenres();


// start();

// rememberMyMovies();

// detectPersonalLever();

// showMyDB();

// writeYourGenres();
