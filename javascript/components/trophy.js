import utils from "../helpers/utils.js"
import bearData from "../helpers/data/bearData.js"


const findFatWinners=()=>{
    let bearDataArray= bearData.getBearArray();

    let sortedArray= bearDataArray.sort((a, b)=> b.fishCaught - a.fishCaught)
    console.log(sortedArray);

    let domString =  buildTrophyDomString(sortedArray);
    utils.printToDom("#bearCardsContainer", domString);

}

const buildTrophyDomString=(bearDataArrayParam)=>{

    let domString = `<div class='row justify-content-center'>
    <h2 class="col-12 mb-5 text-center">Fat Bear Award</h2>`;     
    let winnerRank='';

        for (let i = 0; i < 3; i++) {  
            const bear=bearDataArrayParam[i];
            
            if(i===0){
                winnerRank = "Gold";
            } else if(i===1){
                winnerRank = "Silver";
            } else{
                winnerRank = "Bronze";
            }
        
            domString += `
            <div class="col-4 mb-4">
            <div id="${bear.id}" class="card text-center bear-card">
            <img class="card-img-top" src="${bear.imgUrl}" alt="Picture of the ${bear.name}">
            <div class="card-body">
            <div class="card-title">  
            <h2 class="${winnerRank}">${winnerRank}</h2>          
                <h5>${bear.name}</h5>
            </div>          
            </div>
            <div class="card-footer">
                <div class="row">                
                <h6 class="text-center">Fish Caught: ${bear.fishCaught}</h6>                                  
                </div>
            </div>          
            </div>
        </div>
            `; 
            
        } 
        domString += `</div>`;

        return domString;
}


export default {findFatWinners};