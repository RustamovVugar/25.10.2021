let userName=document.querySelector("#name");
let surname=document.querySelector("#surname");
let age=document.querySelector("#age");
let table=document.querySelector("#table");
let button=document.querySelector("#submit");
let popup=document.querySelector(".popup");
let btn=document.querySelector("#btn");
let product=document.querySelector(".product")
let productName=document.querySelector("#product");
let kategory=document.querySelector("#kategory");
let price=document.querySelector("#price");
let image=document.querySelector("#upload");
let btn2=document.querySelector("#add");
let upload=document.querySelector("#upload")


button.addEventListener("click",newScreen);

function newScreen (event){
event.preventDefault();
 popup.style.display="flex";    
    }

    btn.addEventListener("click",addition);
    function addition(event) {
        event.preventDefault(); 
        product.style.display="flex"; 
    }
    let count=0;
    btn2.addEventListener("click",addProduct);
    
    function addProduct (event){
          
            let inputName=productName.value;
            let inputKategory=kategory.value;
            let inputPrice=price.value;
            let inputImage=upload.value;
            count=count+1;
            let inputRows=`<tr> 
                           <td> ${count}</td>
                          <td> ${inputName} </td>
                          <td> ${inputKategory} </td>
                          <td> ${inputPrice}</td>
                          <td> ${inputImage}</td>

                          
                          </tr>
                          `  
                        
                        table.innerHTML+=inputRows;
    
        
                    
                   productName.value="";
                   kategory.value="";
                   inputPrice.value="";
    };
    
