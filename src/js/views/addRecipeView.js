import View from './View.js';
// import icons from '../../img/icons.svg';

class addRecipeView extends View {
  _parentElement = document.querySelector('.upload');

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnClose = document.querySelector('.btn--close-modal');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnUpload = document.querySelector(".upload__btn")
  _message = "Successfuly uploaded"
  constructor(){
    super();
    this._addHandlerCloseWindow()
    this._addHandlerShowWindow()
    // this._addHandlerUpload()
  }


  _toggleWindow(){
    this._overlay.classList.toggle("hidden")
    this._window.classList.toggle("hidden")
  }
  _addHandlerShowWindow(){
    this._btnOpen.addEventListener("click",this._toggleWindow.bind(this));
  }
  _addHandlerCloseWindow(){
    this._btnClose.addEventListener("click",this._toggleWindow.bind(this));
    this._overlay.addEventListener("click",this._toggleWindow.bind(this))
  }
  addHandlerUpload(handler){
    this._parentElement.addEventListener("click",function(e){
        e.preventDefault();
        const dataArray = [... new FormData(this)];
        const data = Object.fromEntries(dataArray);
        handler(data);
    })
  }

}
export default new addRecipeView();
