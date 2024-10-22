// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

"user strict";
let numberOfFilms;

// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false

const personalMovieDB = {
  count: numberOfFilms, 
  movies: {},
  actors: {},
  genres: [],
  privat: true
};

// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате: 
//     movies: {
//         'logan': '8.1'
//     }

// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
// str.length - и получить её длину)

function rememberMyFilms() {
for (let i = 0; i < 2; i++) {
  const a = prompt ('Один из последних просмотренных фильмов?', ''),
        b = prompt ('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
          personalMovieDB.movies[a] = b;
          console.log ('done');
        } else {
          console.log ('error');
          i--;
        }
  }    
}
rememberMyFilms();

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

function detectPersonalLevel() {
  if (personalMovieDB.count <10) {
    console.log ('Просмотрено довольно мало фильмов')
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
    console.log ('Вы классический зритель.');
  } else if (personalMovieDB.count >= 30) {
    console.log ('Вы киноман.');
  } else {
    console.log ('Произошла ошибка.');
  }
}
detectPersonalLevel();

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

function showMyDB () {
  if (personalMovieDB.privat === false) {
    console.log (personalMovieDB);
  }
}
showMyDB();


// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

function writeYourGenres () {
  for (i=1, i <=3, i++ ) {
    personalMovieDB.genres[i - 1]  = promt (`Ваш любимый жанр под номером ${i}"`);
  }
}
writeYourGenres ();








showMyDB(q1);
// function showMyDB (db) {
//   if (!db.privat) {
//     console.log (db);
//   } else {
//     console.log ('Доступ запрещен. База данных приватна.')
//   }
// }
// showMyDB(personalMovieDB); это пример написания от чата .