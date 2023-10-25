import View from "./View.js";
import icons from '../../img/icons.svg';

class resultView extends View{
    _parentElement = document.querySelector('.results');
    _errorMessage = "We could not find any recipes , please try another one."

    _generateMarkup(){
        return this._data.map(this._generatePreviewMarkup).join("")
    }
    _generatePreviewMarkup(result){
        const id = window.location.hash.slice(1);
        return `
        <li class="preview">
            <a class="preview__link ${result.id === id? "preview__link--active":""}" href="#${result.id}">
                <figure class="preview__fig">
                    <img src="${result.image}" alt="${result.title}" />
                </figure>
                <div class="preview__data">
                    <h4 class="preview__title">${result.title}</h4>
                    <p class="preview__publisher">${result.publisher}</p>

                </div>
                <div class="preview__user-generated ${result.key ? '' : 'hidden'}">
                    <svg>
                        <use href="${icons}#icon-user"></use>
                    </svg>
              </div>
            </a>
        </li>

        `;

    }
}
export default new resultView();