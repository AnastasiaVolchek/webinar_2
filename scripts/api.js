// - GET (https://cats.petiteweb.dev/api/single/:user/show) - отобразить всех котиков
// - GET (https://cats.petiteweb.dev/api/single/:user/ids) - отобразить все возможные айди котиков
// - GET (https://cats.petiteweb.dev/api/single/:user/show/:id) - отобразить конкретного котика
// - POST (https://cats.petiteweb.dev/api/single/:user/add) - добавить котика
// - PUT (https://cats.petiteweb.dev/api/single/:user/update/:id) - изменить информацию о котике
// - DELETE (https://cats.petiteweb.dev/api/single/:user/delete/:id)- удалить котика из базы данных



const configApi = {
    url: "https://cats.petiteweb.dev/api/single/AnastasiaVolchek",
    headers: {
        Accept: "application/json",
        "Content-type": "application/json",
    }
}

class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }
    _onResponse(res) {
     return res.ok ? res.json() : Promise.reject({ ...res, message: "error"})
    }
    getAllCats() {
        /// отобразить всех котиков
        return fetch(`${this._url}/show`, {
            method: "GET",
        }).then(this._onResponse);
    }
    getAllCatsId() {
        /// отобразить все возможные id котиков
        return fetch(`${this._url}/ids`, {
            method: "GET"
        }).then(this._onResponse);
    }
    addNewCat(body) {
         /// добавить нового кота
         return fetch(`${this._url}/add`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify(body)
        }).then(this._onResponse);
    }
    getCatById(id) {
        /// отобразить конкретного котика
        return fetch(`${this._url}/show/${id}`, {
            method: "GET"
        }).then(this._onResponse);
    }
    updateCatById(id, data) {
        /// изменить инфу о конкретном котике
        return fetch(`${this._url}/update/${id}`, {
       method: "PUT",
       headers: this._headers,
       body: JSON.stringify(data)
       }).then(this._onResponse);
   }
    deleteCatById(id) {
        /// удалить конкретного котика
        return fetch(`${this._url}/delete/${id}`, {
        method: "DELETE"
        }).then(this._onResponse);
}

}

const api = new Api(configApi);
// console.log(api);


// const newCat = {
//     id: 4753457311,
//     name: "Sasha",
//     favorite: false,
//     rate: 2,
//     age: 10,
//     description: "Красавчик",
//     image: "https://http.cat/426"
// };

// const newCatUpdated = {
//     id: 4753457311,
//     name: "SashaUpdated",
//     favorite: true,
//     rate: 5,
//     age: 11,
//     description: "Красавчик",
//     image: "https://http.cat/426"
// };

// api.getAllCats();
// api.getAllCatsId();
//api.getCatById(4753457311);
//api.updateCatById(4753457311, newCatUpdated);
//api.deleteCatById(4753457311)
//api.deleteCatById(47534573);
//api.addNewCat(47657465364);
//api.deleteCatById(47657465364);
//api.addNewCat(newCat)
