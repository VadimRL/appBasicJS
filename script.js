/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms = null;

do {
    numberOfFilms = prompt("How many movies have you seen?");
    console.log(numberOfFilms);
} while (numberOfFilms === null || numberOfFilms === '' || numberOfFilms.length > 50);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

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

/* let i = 0;

do {
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
        i = (i === 0) ? 0 : i - 1;
        continue;
    }
        
    personalMovieDB.movies[a] = b;

    i++;
} while (i < 2); */


if (personalMovieDB.count < 10) {
    alert("You have watched only few movies");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("You are classic viewer");
} else if (personalMovieDB.count >= 30) {
    alert("You are cinephile");
} else {
    alert("Ooops, we have got an error...");
}

console.log(personalMovieDB.count >= 30);