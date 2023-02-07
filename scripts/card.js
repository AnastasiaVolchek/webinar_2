// const card = document.querySelector("#tmp-card");
// const template = document.querySelector("#card-template").content;

// console.log(card);
// console.log(template);

// узел типа тег - btn div
// узел типа text - какой-то текст
// узел типа "элемент"
// узел типа документ-фрагмент - у него свойство content 

export class Card {
    constructor(dataCat, selectorTemplate) {
        this._data = dataCat;
        this._selectorTemplate = selectorTemplate;
    }
    _getTemplate (){ // возвр содержимое шаблона в ивде дом-узла
        return document.querySelector(this._selectorTemplate).content.querySelector(".card");
        //документ фрагмент - это легковесная версия ноды типа элемент
    }
    getElement() {
       this.element = this._getTemplate().cloneNode(true);
       const cardTitle = this.element.querySelector(".card__name");
       const cardImage = this.element.querySelector(".card__image");
       const cardLike = this.element.querySelector(".card__like");
       const cardDelete = this.element.querySelector(".card__delete");
      
       cardDelete.classList.add(`${this._data._id}`);

       if (!this._data.favorite) {
            cardLike.remove();
       }

       cardTitle.textContent = this._data.name ?? "Barsik";
       cardImage.src = this._data.image || "https://http.cat/102";
       return this.element;

    }
}

// const card = new Card(cats[0], "#card-template");

// card.getElement();

// console.log(card);
