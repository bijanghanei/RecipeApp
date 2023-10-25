import View from './View.js';
import icons from '../../img/icons.svg';

class paginationView extends View {
  _parentElement = document.querySelector('.pagination');
  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      const goToPage = Number(btn.dataset.goto);
      handler(goToPage);
    });
  }
  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.result.length / this._data.resultsPerPage
    );
    if (numPages === 1) return '';
    if (currentPage === 1) {
      return `
            <button data-goto=${
              currentPage + 1
            } class="btn--inline pagination__btn--next">
                <span>Page 2</span>
                    <svg class="search__icon">
                        <use href="${icons}#icon-arrow-right"></use>
                    </svg>
            </button>
            `;
    }
    if (currentPage === numPages) {
      return `
            <button data-goto=${
              currentPage - 1
            } class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${numPages}</span>
            </button>
            `;
    }
    if (currentPage > 1 && currentPage < this._data.result.length) {
      return `
            <button data-goto=${
              currentPage - 1
            } class="btn--inline pagination__btn--prev">
                    <svg class="search__icon">
                        <use href="${icons}#icon-arrow-left"></use>
                    </svg>
                <span>Page ${currentPage - 1}</span>
            </button>
            <button  data-goto=${
              currentPage + 1
            } class="btn--inline pagination__btn--next">
                <span>Page ${currentPage + 1}</span>
                    <svg class="search__icon">
                        <use href="${icons}#icon-arrow-right"></use>
                    </svg>
            </button>
            `;
    }
  }
}
export default new paginationView();
