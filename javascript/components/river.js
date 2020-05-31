import utils from "../helpers/utils.js"
import bearData from "../helpers/data/bearData.js"



    const makeBearCards=(bearDataArrayParam)=>{
        let domString = "<div class='row'>";    
        for (let i = 0; i < bearDataArrayParam.length; i++) {  
            const bear=bearDataArrayParam[i];
        
            domString += `
            <div class="col-6 mb-4">
            <div id="${bear.id}" class="card text-center bear-card">
            <img class="card-img-top" src="${bear.imgUrl}" alt="Picture of the ${bear.name}">
            <div class="card-body">
            <div class="card-title">            
                <h5>${bear.name}</h5> 
                <small class="message">${bear.lastMessage}
                </small>                                 
            </div>          
            </div>
            <div class="card-footer">
                <div class="row">
                <div class="col-4">
                <h6 class="">Fish Caught: ${bear.fishCaught}</h6>            
                </div>
                <div class="col-8">
                <button type="button" class="m-auto btn btn-outline-warning attemptButton"><i class="fab fa-tripadvisor"></i></button>
                <button type="button" class="m-auto btn btn-outline-success successButton"><i class="fas fa-fish"></i></button>
                </div>
                <div class="col-12 text-center">
                <button type="button" class="m-auto btn btn-outline-danger btn-sm name showHistoryButton">Show History</button>
                <div class="history"></div>
                </div>

                
                </div>
            </div>          
            </div>
        </div>
            `; 
            
        } 
        domString += `</div>`;

        clearAndHideForm();    
        utils.printToDom("#bearCardsContainer", domString);   
        attachEvents();    
    }

    const clearAndHideForm=()=>{
        const form = document.querySelector("#collapseOne");
        form.classList.remove("show");

        document.querySelector("#bear-form").reset();

    }



    const attachEvents =()=>{
        attachGenericEventListner("button.successButton", successFunction );
        attachGenericEventListner("button.attemptButton", attemptFunction ); 
        attachGenericEventListner("button.showHistoryButton", historyFunction );  
 
            
    }



    const attachGenericEventListner = (target, callBackFuction)=>{
        const targetElement = document.querySelectorAll(target);

        for (let i = 0; i < targetElement.length; i++) {
            targetElement[i].addEventListener("click", callBackFuction);
        }       

    }

    const successFunction=(e)=>{        
        let bearDataArray= bearData.getBearArray();
        const bearId= e.target.closest(".bear-card").id;    
    
        const bearIndex= bearDataArray.findIndex(bear => bear.id === bearId);
        bearDataArray[bearIndex].fishCaught += 1; 
        bearDataArray[bearIndex].lastMessage = "Caught one YAY !!!" 
        bearDataArray[bearIndex].fishingHistory.push({"time":`${Date.now()}`, "result": "Success"});
        console.log(bearDataArray[bearIndex]);         
        
        
        makeBearCards(bearDataArray);
    
        e.preventDefault();
    
            
    }
    
    const attemptFunction=(e)=>{
    
        let bearDataArray= bearData.getBearArray();
        const bearId= e.target.closest(".bear-card").id;    
    
        const bearIndex= bearDataArray.findIndex(bear => bear.id === bearId);         
        bearDataArray[bearIndex].lastMessage = "Boooo Try again !!!"
        bearDataArray[bearIndex].fishingHistory.push({"time":`${Date.now()}`, "result": "Attempt"});
        console.log(bearDataArray[bearIndex]);

        makeBearCards(bearDataArray);
    
        e.preventDefault();
    
            
        }

        const historyFunction=(e)=>{  
            
            let bearDataArray= bearData.getBearArray();
            const bearId= e.target.closest(".bear-card").id;  
            const bearIndex= bearDataArray.findIndex(bear => bear.id === bearId);
            const shortVar=bearDataArray[bearIndex].fishingHistory;
            let domString ="";
            for (let i = 0; i < shortVar.length; i++) {
                domString += `
                <div class="row mt-2">
                <div class="col-6">
                <small>${shortVar[i].time}</small>
                </div>
                <div class="col-6">
                <small>${shortVar[i].result}</small>
                </div>
                </div>
                `;
                
            }
        
                         
            
            if(e.target.nextElementSibling.classList.contains("history")) {
                e.target.nextElementSibling.innerHTML= domString;
            }
                
            
            // console.log(e.target.closest(".history"))

            // const historyDiv= e.tareget.parentElement
            // console.log(historyDiv);
            // historyDiv.innerHTML=`<h1>asdfasdfasdf</h1>`;
            
            
        
            e.preventDefault();        
                
        }



export default {makeBearCards};