import icons from '../../img/icons.svg';

export default class View {
  _data;
  render(data) {
    this._data = data;
    if (!data || (Array.isArray(data) && data.length === 0)) {
      return this.renderError();
    }
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const currentElements = Array.from(
      this._parentElement.querySelectorAll('*')
    );
    // console.log(currentElements)
    newElements.forEach((newEL, i) => {
      const currentEL = currentElements[i];
      if (
        !newEL.isEqualNode(currentEL) &&
        newEL.firstChild?.nodeValue.trim() !== ''
      ) {
        currentEL.textContent = newEL.textContent;
      }
      if (!newEL.isEqualNode(currentEL)) {
        Array.from(newEL.attributes).forEach(attribute => {
          currentEL.setAttribute(attribute.name, attribute.value);
        });
      }
    });
  }
  _clear() {
    this._parentElement.innerHTML = '';
  }
  renderSpinner() {
    const markup = `
        <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>
        `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  renderError(message = this._errorMessage) {
    const markup = `
    <div class="error">
      <div>
        <svg>
          <use href="src/img/${icons}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${message}</p>
    </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  renderMessage(message = this._message) {
    const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  _generateMarkup() {
    return this._data.map(this._generatePreviewMarkup).join('');
  }
}
