/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable default-case */
/* eslint-disable linebreak-style */
// eslint-disable-next-line class-methods-use-this

const titleCol = document.querySelector('.titleCol');

class ListMovies {
  constructor() {
    this.movies = [
      {
        id: 26,
        title: 'Побег из Шоушенка',
        imdb: 9.30,
        year: 1994,
      },
      {
        id: 25,
        title: 'Крёстный отец',
        imdb: 9.20,
        year: 1972,
      },
      {
        id: 27,
        title: 'Крёстный отец 2',
        imdb: 9.00,
        year: 1974,
      },
      {
        id: 1047,
        title: 'Тёмный рыцарь',
        imdb: 9.00,
        year: 2008,
      },
      {
        id: 223,
        title: 'Криминальное чтиво',
        imdb: 8.90,
        year: 1994,
      },
    ];

    this.countTitles = 0;
    this.sortToMax = 0;
  }

  sortNumbersToMax(index) {
    this.movies.sort((a, b) => a[`${index}`] - b[`${index}`]);
  }

  sortNumbersToMin(index) {
    this.movies.sort((a, b) => b[`${index}`] - a[`${index}`]);
  }

  sortWords(wordTitle) {
    this.movies.sort((a, b) => {
      if (a[`${wordTitle}`] < b[`${wordTitle}`]) {
        return -1;
      }
      if (a[`${wordTitle}`] > b[`${wordTitle}`]) {
        return 1;
      }
      return 0;
    });
  }

  sortEvery2sec() {
    setTimeout(() => {
      switch (this.countTitles) {
        case 0:
          switch (this.sortToMax) {
            case 0:
              this.sortNumbersToMax('id');
              this.sortToMax = 1;
              break;
            case 1:
              this.sortNumbersToMin('id');
              this.countTitles = 1;
              this.sortToMax = 0;
              break;
          }
          break;
        case 1:
          switch (this.sortToMax) {
            case 0:
              this.sortWords('title');
              this.sortToMax = 1;
              break;
            case 1:
              this.movies = this.movies.reverse();
              this.countTitles = 2;
              this.sortToMax = 0;
              break;
          }
          break;
        case 2:
          switch (this.sortToMax) {
            case 0:
              this.sortNumbersToMax('imdb');
              this.sortToMax = 1;
              break;
            case 1:
              this.sortNumbersToMax('imdb');
              this.countTitles = 3;
              this.sortToMax = 0;
              break;
          }
          break;
        case 3:
          switch (this.sortToMax) {
            case 0:
              this.sortNumbersToMax('year');
              this.sortToMax = 1;
              break;
            case 1:
              this.sortNumbersToMin('year');
              this.countTitles = 0;
              this.sortToMax = 0;
              break;
          }
      }
      this.addTable();
      this.sortEvery2sec();
    }, 2000);
  }

  addTable() {
    this.removeTable();
    for (let i = 0; i < this.movies.length; i += 1) {
      titleCol.insertAdjacentHTML('afterEnd', ` <tr class="row-info">
        <td>${this.movies[i].id}</th>
        <td>${this.movies[i].title}</td>
        <td>${this.movies[i].imdb}</td>
        <td>${this.movies[i].year}</td>
    </tr>`);
    }
  }

  removeTable() {
    const rowInfo = [...document.querySelectorAll('.row-info')];
    for (let i = 0; i < rowInfo.length; i += 1) {
      rowInfo[i].remove();
    }
  }
}
