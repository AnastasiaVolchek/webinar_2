

//функция, которая будт доставать value из html разметки формы, которую введ пользователь
export function serializeForm(elements){
    const formData ={};
    elements.forEach((input) => {
     //console.log(input.type);
     console.log(input.name)
            if (input.type === "submit") return;
            if (input.type !== "checkbox") { 
                 formData[input.name] = input.value;          
             }
             if (input.type === "checkbox") { 
                formData[input.name] = input.checked;
             }
    
        });
        return formData;
    }


    // длинная форма => formData[input.name] = input.value;     
                // console.log("inp", input.value);   
            // if(input.name === "age") {
            //     formData.age = input.value;
            // }     
            // if(input.name === "name") {
            //     formData.name = input.value;
            // }     
            // if(input.name === "image") {
            //     formData.image = input.value;
            // }     
            // if(input.name === "description") {
            //     formData.description = input.value;
            // }   