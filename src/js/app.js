/* eslint-disable linebreak-style */
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

  sortEvery2sec() {
    setTimeout(() => {
      if (this.countTitles === 0) {
        if (this.sortToMax === 0) {
          this.movies.sort((a, b) => a.id - b.id);
          this.sortToMax = 1;
        } else if (this.sortToMax === 1) {
          this.movies.sort((a, b) => b.id - a.id);
          this.countTitles = 1;
          this.sortToMax = 0;
        }
      } else if (this.countTitles === 1) {
        if (this.sortToMax === 0) {
          this.movies.sort((a, b) => {
            if (a.title < b.title) {
              return -1;
            }
            if (a.title > b.title) {
              return 1;
            }
            return 0;
          });
          this.sortToMax = 1;
        } else if (this.sortToMax === 1) {
          this.movies = this.movies.reverse();
          this.countTitles = 2;
          this.sortToMax = 0;
        }
      } else if (this.countTitles === 2) {
        if (this.sortToMax === 0) {
          this.movies.sort((a, b) => a.imdb - b.imdb);
          this.sortToMax = 1;
        } else if (this.sortToMax === 1) {
          this.movies.sort((a, b) => a.imdb - b.imdb);
          this.sortToMax = 0;
          this.countTitles = 3;
        }
      } else if (this.countTitles === 3) {
        if (this.sortToMax === 0) {
          this.movies.sort((a, b) => a.year - b.year);
          this.sortToMax = 1;
        } else if (this.sortToMax === 1) {
          this.movies.sort((a, b) => a.year - b.year);
          this.sortToMax = 0;
          this.countTitles = 0;
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

  // eslint-disable-next-line class-methods-use-this
  removeTable() {
    const rowInfo = [...document.querySelectorAll('.row-info')];
    for (let i = 0; i < rowInfo.length; i += 1) {
      rowInfo[i].remove();
    }
  }
}

