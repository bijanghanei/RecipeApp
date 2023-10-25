function e(e){return e&&e.__esModule?e.default:e}var t,r,n,i=globalThis,a={},o={},s=i.parcelRequire3a11;null==s&&((s=function(e){if(e in a)return a[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},i.parcelRequire3a11=s),(0,s.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>r,set:e=>r=e,enumerable:!0,configurable:!0});var r,n=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),s("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.1bd0218f.js","hfd23","icons.c14567a0.svg"]'));var c={};c=new URL("icons.c14567a0.svg",import.meta.url).toString(),(Fraction=function(e,t){/* double argument invocation */if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(// what are they?
// hmm....
// assume they are ints?
this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){// or a = '2/3' and b = undefined if we are just passed a single-part number
var r,n,i=num.split(" ");/* compound fraction e.g. 'A B/C' *///  if a is an integer ...
if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));// could not parse
if(!r||n)return;/* simple fraction e.g. 'A/B' */if("string"==typeof r&&r.match("/")){// it's not a whole number... it's actually a fraction without a whole part written
var a=r.split("/");this.numerator=a[0],this.denominator=a[1];/* string floating point */}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},/* pretty-printer, converts fractions into whole numbers and fractions */Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},/* destructively rescale the fraction by some integral factor */Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));// fractions that are equal should have equal normalized forms
var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},/* Utility functions *//* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */Fraction.prototype.normalize=(t=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},r=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){// XXX hackish.  Is there a better way to address this issue?
//
/* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */if(t(this.denominator)){var e=r(this.denominator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*n),//this.numerator *= scaleup;
this.numerator*=n}if(t(this.numerator)){var e=r(this.numerator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*n),//this.numerator *= scaleup;
this.denominator*=n}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),/* Takes two numbers and returns their greatest common factor.
 */Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(// for each factor in fa
// if it's also in fb
// put it into the common factors
n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;// and increment
return 1!=t&&r.push(t),r;// Return the prime factors
},n=Fraction;class l{_data;render(e){if(this._data=e,!e||Array.isArray(e)&&0===e.length)return this.renderError();let t=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}update(e){this._data=e;let t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));// console.log(currentElements)
n.forEach((e,t)=>{let r=i[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>{r.setAttribute(e.name,e.value)})})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let t=`
        <div class="spinner">
          <svg>
            <use href="${/*@__PURE__*/e(c)}#icon-loader"></use>
          </svg>
        </div>
        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderError(t=this._errorMessage){let r=`
    <div class="error">
      <div>
        <svg>
          <use href="src/img/${/*@__PURE__*/e(c)}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${t}</p>
    </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}renderMessage(t=this._message){let r=`
      <div class="message">
        <div>
          <svg>
            <use href="${/*@__PURE__*/e(c)}#icon-smile"></use>
          </svg>
        </div>
        <p>${t}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}_generateMarkup(){return this._data.map(this._generatePreviewMarkup).join("")}}class u extends l{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find any recipes , please try another one.";_generateIngridientMarkup(t){return`
            <li class="recipe__ingredient">
                <svg class="recipe__icon">
                <use href="${/*@__PURE__*/e(c)}#icon-check"></use>
                </svg>
                <div class="recipe__quantity">${t.quantity?new n(t.quantity).toString():""}</div>
                <div class="recipe__description">
                <span class="recipe__unit">${t.unit}</span>
                ${t.description}
                </div>
            </li>
            `}_generateMarkup(){return`
            <figure class="recipe__fig">
                <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
                <h1 class="recipe__title">
                <span>${this._data.title}</span>
                </h1>
            </figure>

            <div class="recipe__details">
                <div class="recipe__info">
                <svg class="recipe__info-icon">
                    <use href="${/*@__PURE__*/e(c)}#icon-clock"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
                <span class="recipe__info-text">minutes</span>
                </div>
                <div class="recipe__info">
                <svg class="recipe__info-icon">
                    <use href="${/*@__PURE__*/e(c)}#icon-users"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
                <span class="recipe__info-text">servings</span>

                <div class="recipe__info-buttons">
                    <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                    <svg>
                        <use href="${/*@__PURE__*/e(c)}#icon-minus-circle"></use>
                    </svg>
                    </button>
                    <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                    <svg>
                        <use href="${/*@__PURE__*/e(c)}#icon-plus-circle"></use>
                    </svg>
                    </button>
                </div>
                </div>

                <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
                <svg>
                  <use href="${/*@__PURE__*/e(c)}#icon-user"></use>
                </svg>
              </div>
                <button class="btn--round btn--bookmark">
                <svg class="">
                    <use href="${/*@__PURE__*/e(c)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
                </svg>
                </button>
            </div>

            <div class="recipe__ingredients">
                <h2 class="heading--2">Recipe ingredients</h2>
                <ul class="recipe__ingredient-list">
                ${this._data.ingredients.map(this._generateIngridientMarkup).join("")}

                </ul>
            </div>

            <div class="recipe__directions">
                <h2 class="heading--2">How to cook it</h2>
                <p class="recipe__directions-text">
                This recipe was carefully designed and tested by
                <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
                directions at their website.
                </p>
                <a
                class="btn--small recipe__btn"
                href="${this._data.sourceUrl}"
                target="_blank"
                >
                <span>Directions</span>
                <svg class="search__icon">
                    <use href="${/*@__PURE__*/e(c)}#icon-arrow-right"></use>
                </svg>
                </a>
            </div>
            `}addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let n=Number(r.dataset.updateTo);n>0&&e(n)})}addHandlerBookmark(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--bookmark");r&&// btn.addEventListener("click",handler)
e()})}}var d=new u;class h extends l{_parentElement=document.querySelector(".search");_clear(){this._parentElement.querySelector(".search__field").value=""}getQuery(){let e=this._parentElement.querySelector(".search__field").value;return this._clear(),e}addHandlerSearch(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e()})}}var p=new h;class f extends l{_parentElement=document.querySelector(".results");_errorMessage="We could not find any recipes , please try another one.";_generateMarkup(){return this._data.map(this._generatePreviewMarkup).join("")}_generatePreviewMarkup(t){let r=window.location.hash.slice(1);return`
        <li class="preview">
            <a class="preview__link ${t.id===r?"preview__link--active":""}" href="#${t.id}">
                <figure class="preview__fig">
                    <img src="${t.image}" alt="${t.title}" />
                </figure>
                <div class="preview__data">
                    <h4 class="preview__title">${t.title}</h4>
                    <p class="preview__publisher">${t.publisher}</p>

                </div>
                <div class="preview__user-generated ${t.key?"":"hidden"}">
                    <svg>
                        <use href="${/*@__PURE__*/e(c)}#icon-user"></use>
                    </svg>
              </div>
            </a>
        </li>

        `}}var g=new f;const m="https://forkify-api.herokuapp.com/api/v2/recipes/",v="f9e22ddf-8e27-4c14-b883-1f1d0f39d609";/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,r,n,a){var o,s,c=Object.create((r&&r.prototype instanceof m?r:m).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
i(c,"_invoke",{value:(o=new x(a||[]),s=h,function(r,i){if(s===p)throw Error("Generator is already running");if(s===f){if("throw"===r)throw i;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:t,done:!0}}for(o.method=r,o.arg=i;;){var a=o.delegate;if(a){var c=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function e(r,n){var i=n.method,a=r.iterator[i];if(a===t)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===i&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g);var o=d(a,r.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var s=o.arg;return s?s.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=s.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(a,o);if(c){if(c===g)continue;return c}}if("next"===o.method)// function.sent implementation.
o.sent=o._sent=o.arg;else if("throw"===o.method){if(s===h)throw s=f,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);s=p;var l=d(e,n,o);if("normal"===l.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
s=o.done?f:"suspendedYield",l.arg===g)continue;return{value:l.arg,done:o.done}}"throw"===l.type&&(s=f,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
o.method="throw",o.arg=l.arg)}})}),c)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var h="suspendedStart",p="executing",f="completed",g={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function m(){}function v(){}function _(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var y={};l(y,o,function(){return this});var b=Object.getPrototypeOf,w=b&&b(b(F([])));w&&w!==r&&n.call(w,o)&&// of the polyfill.
(y=w);var k=_.prototype=m.prototype=Object.create(y);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function E(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function $(e,t){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
i(this,"_invoke",{value:function(i,a){function o(){return new t(function(r,o){!function r(i,a,o,s){var c=d(e[i],e,a);if("throw"===c.type)s(c.arg);else{var l=c.arg,u=l.value;return u&&"object"==typeof u&&n.call(u,"__await")?t.resolve(u.__await).then(function(e){r("next",e,o,s)},function(e){r("throw",e,o,s)}):t.resolve(u).then(function(e){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
l.value=e,o(l)},function(e){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",e,o,s)})}}(i,a,r,o)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(o,// invocations of the iterator.
o):o()}})}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function F(e){if(e||""===e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw TypeError(typeof e+" is not iterable")}return v.prototype=_,i(k,"constructor",{value:_,configurable:!0}),i(_,"constructor",{value:v,configurable:!0}),v.displayName=l(_,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,_):(e.__proto__=_,l(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
e.awrap=function(e){return{__await:e}},E($.prototype),l($.prototype,s,function(){return this}),e.AsyncIterator=$,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new $(u(t,r,n,i),a);return e.isGeneratorFunction(r)?o// If outerFn is a generator, return the full iterator.
:o.next().then(function(e){return e.done?e.value:o.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
E(k),l(k,c,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
l(k,o,function(){return this}),l(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
e.done=!0,e)}},e.values=F,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return i("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else if(l){if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&// location outside the try/catch block.
(a=null);var o=a?a.completion:{};return(o.type=e,o.arg=t,a)?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;S(r)}return i}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:F(e),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=t),g}},e}({});try{regeneratorRuntime=_}catch(e){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=_:Function("r","regeneratorRuntime = r")(_)}const y=function(e){return new Promise(function(t,r){setTimeout(function(){r(Error(`Request took too long! Timeout after ${e} second`))},1e3*e)})},b=async function(e){try{let t=fetch(e),r=await Promise.race([t,y(10)]),n=await r.json();if(!r.ok)throw Error(`${n.message} (${r.status})`);return n}catch(e){throw e}},w=async function(e,t){try{let r=fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),n=await Promise.race([r,y(10)]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},k={recipe:{},search:{query:"",result:[],page:1,resultsPerPage:10},bookmarks:[]},E=function(e){return{id:e.id,title:e.title,publisher:e.publisher,sourceUrl:e.source_url,image:e.image_url,servings:e.servings,cookingTime:e.cooking_time,ingredients:e.ingredients,...e.key&&{key:e.key}}},$=async function(e){try{let t=await b(`${m}${e}?key=${v}`),r=t.data.recipe;k.recipe=E(r),k.bookmarks.some(t=>t.id===e)?k.recipe.bookmarked=!0:k.recipe.bookmarked=!1}catch(e){throw e}},L=function(e){k.recipe.ingredients.forEach(t=>{let r=k.recipe.servings;t.quantity=t.quantity*(e/r)}),k.recipe.servings=e},S=async function(e){try{k.search.query=e;let t=await b(`${m}?search=${e}&key=${v}`),r=t.data.recipes;k.search.result=r.map(function(e){let t={id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}};return t}),k.search.page=1;// console.log(state.search.result);
}catch(e){throw console.log(e),e}},x=function(e=1){try{k.search.page=e;let t=(e-1)*k.search.resultsPerPage,r=e*k.search.resultsPerPage;return k.search.result.slice(t,r)}catch(e){throw e}},F=function(){localStorage.setItem("bookmarks",JSON.stringify(k.bookmarks))},M=function(e){k.bookmarks.push(e),e.id===k.recipe.id&&(k.recipe.bookmarked=!0),F()},H=function(e){let t=k.bookmarks.findIndex(t=>t.id===e);k.bookmarks.splice(t,1),e===k.recipe.id&&(k.recipe.bookmarked=!1),F()},P=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format! Please type as the place holder.");let[r,n,i]=t;return{quantity:r?Number(r):null,unit:n,description:i}}),r={// id: KEY,
title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,servings:Number(e.servings),cooking_time:Number(e.cookingTime),ingredients:t},n=await w(`${m}?key=${v}`,r);console.log(n,"❌"),console.log(n.data.recipe),k.recipe=E(n.data.recipe),console.log(k.recipe),M(k.recipe)}catch(e){throw e}};class j extends l{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline"),n=Number(r.dataset.goto);e(n)})}_generateMarkup(){let t=this._data.page,r=Math.ceil(this._data.result.length/this._data.resultsPerPage);return 1===r?"":1===t?`
            <button data-goto=${t+1} class="btn--inline pagination__btn--next">
                <span>Page 2</span>
                    <svg class="search__icon">
                        <use href="${/*@__PURE__*/e(c)}#icon-arrow-right"></use>
                    </svg>
            </button>
            `:t===r?`
            <button data-goto=${t-1} class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${/*@__PURE__*/e(c)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${r}</span>
            </button>
            `:t>1&&t<this._data.result.length?`
            <button data-goto=${t-1} class="btn--inline pagination__btn--prev">
                    <svg class="search__icon">
                        <use href="${/*@__PURE__*/e(c)}#icon-arrow-left"></use>
                    </svg>
                <span>Page ${t-1}</span>
            </button>
            <button  data-goto=${t+1} class="btn--inline pagination__btn--next">
                <span>Page ${t+1}</span>
                    <svg class="search__icon">
                        <use href="${/*@__PURE__*/e(c)}#icon-arrow-right"></use>
                    </svg>
            </button>
            `:void 0}}var q=new j;class O extends l{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="We could not find any recipes , please try another one.";_generateMarkup(){return this._data.map(this._generatePreviewMarkup).join("")}_generatePreviewMarkup(t){let r=window.location.hash.slice(1);return`
        <li class="preview">
        <a class="preview__link ${t.id===r?"preview__link--active":""}" href="#${t.id}">
            <figure class="preview__fig">
                <img src="${t.image}" alt="${t.title}" />
            </figure>
            <div class="preview__data">
                <h4 class="preview__title">${t.title}</h4>
                <p class="preview__publisher">${t.publisher}</p>

            </div>
            <div class="preview__user-generated ${t.key?"":"hidden"}">
            <svg>
              <use href="${/*@__PURE__*/e(c)}#icon-user"></use>
            </svg>
          </div>
        </a>
        </li>

        `}addHandlerBookmarks(e){window.addEventListener("load",e)}}var N=new O;// import icons from '../../img/icons.svg';
class T extends l{_parentElement=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnClose=document.querySelector(".btn--close-modal");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnUpload=document.querySelector(".upload__btn");_message="Successfuly uploaded";constructor(){super(),this._addHandlerCloseWindow(),this._addHandlerShowWindow();// this._addHandlerUpload()
}_toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this._toggleWindow.bind(this))}_addHandlerCloseWindow(){this._btnClose.addEventListener("click",this._toggleWindow.bind(this)),this._overlay.addEventListener("click",this._toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("click",function(t){t.preventDefault();let r=[...new FormData(this)],n=Object.fromEntries(r);e(n)})}}var A=new T;// import 'regenerator-runtime/runtime';
// import searchView from './views/searchView';
// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
const R=async function(){try{let e=window.location.hash.slice(1);if(!e)return;d.renderSpinner(),g.update(x()),N.update(k.bookmarks),await $(e),d.render(k.recipe)}catch(e){d.renderError()}},W=async function(){try{g.renderSpinner();let e=p.getQuery();if(!e)return;await S(e),g.render(x()),q.render(k.search)}catch(e){console.log(e)}},C=async function(e){try{A.renderSpinner(),await P(e),d.render(k.recipe),A.renderMessage(),N.render(k.recipe),window.history.pushState("null","",`#${k.recipe.id}`)}catch(e){A.renderError(e.message),console.log(e)}};(function(){let e=localStorage.getItem("bookmarks");e&&(k.bookmarks=JSON.parse(e))})(),N.addHandlerBookmarks(function(){N.render(k.bookmarks)}),N.addHandlerBookmarks(),p.addHandlerSearch(W),d.addHandlerRender(R),d.addHandlerServings(function(e){// update servings in state
L(e),d.update(k.recipe);// render recipe
// recipeView.render(model.state.recipe);
}),d.addHandlerBookmark(function(){k.recipe.bookmarked?H(k.recipe.id):M(k.recipe),d.update(k.recipe),N.render(k.bookmarks)}),q.addHandlerClick(function(e){try{g.render(x(e)),q.render(k.search)}catch(e){q.renderError()}}),A.addHandlerUpload(C);//# sourceMappingURL=index.1bd0218f.js.map

//# sourceMappingURL=index.1bd0218f.js.map
