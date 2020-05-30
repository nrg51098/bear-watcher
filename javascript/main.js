const bearDataArray=[];
let id=0;


const fetchData=(e)=>{
const nameField=document.querySelector("#nameField");
bearName = nameField.value;
const imgUrlField=document.querySelector("#urlField");
imgUrl = imgUrlField.value;
const bearObj={
    "id":id,
    "name":bearName,
    "imgUrl":imgUrl
}

displayBearDetailsCard(bearObj);

bearDataArray.push(bearObj);


console.log(id);
console.log(bearObj);
// console.log(bearDataArray);

id++;
// printToDom(bearObjParam);
e.preventDefault();

}

const displayBearDetailsCard=(bearObjParam)=>{
    let domString = "";     
        domString += `
            <div class="d-flex">
            <div class="card center">   
            <img id="detailImg" src="${bearObjParam.imgUrl}">   
            <h1 id="headerId">Name: ${bearObjParam.name}</h1>
            </div>
            </div>
        `; 
   
    const bearData= document.querySelector("#bearCardsContainer");
    bearData.innerHTML= domString;
    }




// const printToDom=(bearObjParam)=>{
// let domString = "";
// for (let i = 0; i < bearDataArrayParam.length; i++) {   
//     domString += `
//         <div class="d-flex">
//         <div class="card">   
//         <img src="${bearDataArrayParam[i].imgUrl}">   
//         <h1>${bearDataArrayParam[i].name}</h1>
//         </div>
//         </div>
//     `; 
// }
// const bearData= document.querySelector("#bearCardsContainer");
// bearData.innerHTML= domString;
// }

//https://media.gettyimages.com/photos/brown-bear-picture-id163639080?s=612x612


const getBearData =()=>{
const submit = document.querySelector('button[type="submit"]');
submit.addEventListener("click", fetchData)
}


const init =()=>{
    getBearData();
}


init();


// Bear images
//https://cdn.pixabay.com/photo/2016/03/09/09/28/bear-1245807__340.jpg
//https://cdn.pixabay.com/photo/2015/07/09/22/50/bear-838688__340.jpg
//https://cdn.pixabay.com/photo/2016/03/27/18/10/animal-1283347__340.jpg
//https://cdn.pixabay.com/photo/2016/04/07/23/19/bear-1315128__340.jpg
//https://media.gettyimages.com/photos/brown-bear-picture-id163639080?s=612x612
