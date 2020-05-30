import river from "../components/river.js"
import bearData from "../helpers/data/bearData.js"

const createNewBear=()=>{

    const submit = document.querySelector('button[type="submit"]');
    submit.addEventListener("click", addBearToCard)

}

const addBearToCard=(e)=>{
    const bearName=document.querySelector("#nameField").value;
    const imgUrl=document.querySelector("#urlField").value;
    const newBearObj={
        "id":`${Date.now()}`,
        "name":bearName,
        "imgUrl":imgUrl,
        "fishCaught": 0,
        "lastMessage": ""
    }
    let bearDataArray= bearData.getBearArray();
    bearDataArray.unshift(newBearObj);
    river.makeBearCards(bearDataArray);
    
    
    e.preventDefault();
    
    }

export default {createNewBear};
