import axios, 
{AxiosResponse, AxiosError}
from "../../node_modules/axios/index";

interface icar {
    model : string;
    vendor : string;
    price : number;
}

let buttonElement: HTMLButtonElement = <HTMLButtonElement> document.getElementById("getAll");
buttonElement.addEventListener("click",()=> showAllCars())
let div: HTMLDivElement = <HTMLDivElement> document.getElementById("content")

function showAllCars() : void
{
    let uri : string = "http://rest-pele-easj-dk.azurewebsites.net/api/Cars";

    axios.get<icar[]>(uri)
    .then(function (response:AxiosResponse<icar[]>):void{
        let result : string = "<ol>";
        response.data.forEach((car : icar) => {
            result += "<li>"+car.model + car.vendor + car.price.toString()+ "</li>";
        });
        result += "</ol>"
        div.innerHTML = result;
    })
    .catch(function (error:AxiosError):void{
        div.innerHTML = error.code += error;
    })
}