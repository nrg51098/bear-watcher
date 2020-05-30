const bearDataArray=[];



const createNewBear=(e)=>{
const bearName=document.querySelector("#nameField").value;
const imgUrl=document.querySelector("#urlField").value;
const newBearObj={
    "id":`${Date.now()}`,
    "name":bearName,
    "imgUrl":imgUrl,
    "fishCaught": 0
}
bearDataArray.unshift(newBearObj);
createBearCards(bearDataArray);
console.log(newBearObj)


e.preventDefault();

}

const createBearCards=(bearDataArrayParam)=>{
    let domString = "<div class='row'>";    
    for (let i = 0; i < bearDataArrayParam.length; i++) {  
        const bear=bearDataArrayParam[i];
    
        domString += `
        <div class="col-6 mb-4">
        <div id="${bear.id}" class="card text-center dino-card">
          <img class="card-img-top" src="${bear.imgUrl}" alt="Picture of the ${bear.name}">
          <div class="card-body">
          <div class="card-title">            
              <h5>${bear.name}</h5>                                  
          </div>
          </div>
          <div class="card-footer">
            <div class="row">
            <div class="col-6">
            <h6 class="">Fish Caught: ${bear.fishCaught}</h6>            </div>
            <div class="col-6">
              <button type="button" class="m-auto btn btn-outline-warning catchButton"><i class="fab fa-tripadvisor"></i></button>
            </div>
            </div>
          </div>          
        </div>
      </div>
        `; 
    } 

    const form = document.querySelector("#collapseOne");
    form.classList.remove("show");

    document.querySelector("#bear-form").reset(); 
   
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







const init =()=>{
    const submit = document.querySelector('button[type="submit"]');
    submit.addEventListener("click", createNewBear)
}


init();


// Bear images
//https://cdn.pixabay.com/photo/2016/03/09/09/28/bear-1245807__340.jpg
//https://cdn.pixabay.com/photo/2015/07/09/22/50/bear-838688__340.jpg
//https://cdn.pixabay.com/photo/2016/03/27/18/10/animal-1283347__340.jpg
//https://cdn.pixabay.com/photo/2016/04/07/23/19/bear-1315128__340.jpg
//https://media.gettyimages.com/photos/brown-bear-picture-id163639080?s=612x612
