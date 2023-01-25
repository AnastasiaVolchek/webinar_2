const cardsContainer = document.querySelector(".cards");
const btnOpenPopupForm = document.querySelector("#add");

const formAddCat = document.querySelector("#popup-form-cat");
const popupAddCat = new Popup("popup-add-cats");
popupAddCat.setEventListener();



//функция, которая будет вставляьть данные из формы template, который мы создали ранее
// с данными из этой фрмы
// данные по структуре будут иметь те же ключи, что и в массиве cats.js
function handleFormAdd(e) {
    e.preventDefault();
// console.log(formAddCat.elements);

const elementsFormCat = [...formAddCat.elements];
const dataFromForm = serializeForm(elementsFormCat);
api.addNewCat(dataFromForm);
createCat(dataFromForm);
popupAddCat.close();
}

function deleteCat(cat) {
    console.log(cat);

//    api.deleteCatById();
}

// for (let i = 0; i < cats.length; i++) {
//     const cardInstance = new Card(cats[i], "#card-template");
//     const newCardElement = cardInstance.getElement();
//     cardsContainer.append(newCardElement);
    
// }
//императивный подход - сделай вот так и вот так


// cats.forEach((cat)=>{
//     createCat(cat);
// })
//декларативный подход - описание того, что нужно сделать


btnOpenPopupForm.addEventListener("click", () => popupAddCat.open());
// btnClosePopupForm.addEventListener("click", () => popupAddCat.close());
formAddCat.addEventListener("submit", handleFormAdd);


api.getAllCats().then((data) =>
    data.forEach((cat) => {
        createCat(cat);
const btnDelete = document.addEventListener("click", () => 
    deleteCat(cat)
    );
  })
);
