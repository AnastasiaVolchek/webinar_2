import { api } from "./api.js";
import { Card } from "./card.js";
import { Popup } from "./popup.js";
import { serializeForm } from "./utils.js";


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

const oldStorage = JSON.parse(localStorage.getItem("cats"));
oldStorage.push(dataFromForm);
localStorage.setItem("cats", JSON.stringify(oldStorage));
  const setTime = new Date(new Date().getTime() + 6000);
  localStorage.setItem("catsRefresh", setTime);

  // updateLocalStorage(cats, {type: "ADD_CAT"});
popupAddCat.close();
}

function createCat(data) {
    const cardInstance = new Card(data, "#card-template");
    const newCardElement = cardInstance.getElement();
    cardsContainer.append(newCardElement); 
}

// function deleteCat(cat) {
//     console.log(cat);

// // //    api.deleteCatById();
// }

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

// api.getAllCats().then((data) =>
//     data.forEach((cat) => {
//         createCat(cat);
//   })
// );

function checkLocalStorage() {
    const localData = JSON.parse(localStorage.getItem("cats"));
console.log({localData});
  
    const getTimeExpires = localStorage.getItem("catsRefresh");
    if (localData && localData.length && new Date() < new Date(getTimeExpires)) {
      localData.forEach((data) => createCat(data));
    } else {
         api.getAllCats().then((data) => {
           localStorage.setItem("cats", JSON.stringify(data));
           data.forEach((cat) => {
         createCat(cat);
        });
      });
      // updateLocalStorage(cats, {type: "ALL_CATS"});
      const setTime = new Date(new Date().getTime() + 6000);
      localStorage.setItem("catsRefresh", setTime);
    }
  }
  
  checkLocalStorage();


  // function addCats() {
  //   const time1 = new Date();
  //   if (time1 > obj.time2 + 60000) {
  //   } else {
  //     const res = localStorage.getItem("cats");
  //     res.forEach((data) =>
  //      data.forEach((cat) => {
  //      createCat(cat);
  //       })
  //     );
  //   }
  // }
  
  // addCats()
  // api.deleteCatById("")



// document.cookie = "Luke=IamYourFather";

// Cookies.set("YourName", "DifferentValue");
// console.log(Cookies.get("YourName"));

// // // const storage = window.localStorage.;

// localStorage.setItem("cats", JSON.stringify(cats));
// localStorage.setItem("time", "myTime");

// const result = localStorage.getItem("cats");
// const result2 =  localStorage.getItem("time");


// // localStorage.removeItem("cats");

// const result = JSON.parse(localStorage.getItem("cats"));
// console.log(result.map((e) => ({ ...e, name: `${e.name} + edited` })));

// sessionStorage.setItem("dogs", JSON.stringify([{name: "Dog"}, {name: "Dog2"}]));