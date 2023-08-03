// color=document.getElementById('color').value;
// var value=document.querySelectorAll('input[name="value"]');
// var find_value;
// var selectedValue;
// var num=document.getElementById('num').value; 
// value.forEach((radio) => {
//     if (radio.checked) {
//         selectedValue = radio.value;
//     }});

// function fun_click()    {    
//     if(selectedValue==='circle'){
//         for(let i=0;i<num;i++){        
//             head=document.getElementById('output');
//             new_tag=document.createElement('div'); 
//             head.classList.add('new_tag'); 
//             head.appendChild(new_tag);            
//             new_tag.style.width="100px";
//             new_tag.style.height="100px";            
//             new_tag.style.backgroundColor=color;
//         }
//     }
//     else if(selectedValue=='rectangle'){
//         for(let i=0;i<num;i++){        
//             head=document.getElementById('output');
//             new_tag=document.createElement('div'); 
//             head.classList.add('new_tag'); 
//             head.appendChild(new_tag);
//             // new_tag.innerHTML=++i; 
//             new_tag.style.width="100px";
//             new_tag.style.height="100px";
//             // new_tag.style.display="inline";
//             // new_tag.style.border="sol    id";
//             // new_tag.style.border-radius="100px";
            
//             new_tag.style.backgroundColor=color;
//         }
//     } 
//     else if(selectedValue=='sqare'){
//         for(let i=0;i<num;i++){        
//             head=document.getElementById('output');
//             new_tag=document.createElement('div'); 
//             head.classList.add('new_tag'); 
//             head.appendChild(new_tag);
//             // new_tag.innerHTML=++i; 
//             new_tag.style.width="100px";
//             new_tag.style.height="100px";
//             // new_tag.style.display="inline";
//             // new_tag.style.border="sol    id";
//             // new_tag.style.border-radius="100px";
            
//             new_tag.style.backgroundColor=color;
//         }
//     }
// }



// function fun_click() {
//     var color = document.getElementById('color').value;
//     var value = document.querySelectorAll('input[name="value"]:checked')[0].value;
//     var num = document.getElementById('num').value;
//     var head = document.getElementById('output');
//     var para=document.createElement('p');
   

//     for (let i = 0; i < num; i++) {
//         var new_tag = document.createElement('div');
//         head.appendChild(new_tag);
//         new_tag.appendChild(para);

//         // new_tag.style.width = "100px";
//         // new_tag.style.height = "100px";
//         // new_tag.style.backgroundColor = color;

//         if (value === 'rectangle') {
//             new_tag.style.width="100px";
//             new_tag.style.height="100px";
//             new_tag.style.background=color;
            
//             // new_tag.classList.add('rectangle');
//             // // new_tag.innerHTML=i;
//             para.innerHTML=+i;
//         } else if (value === 'square') {
//             new_tag.classList.add('square');
//         } else {
//             new_tag.classList.add('circle');
//         }
//     }
// }

let count=1;
let temp=1;
function fun_click() {
    var shape=document.getElementsByName('value');
for (let i = 0; i < shape.length; i++) {
    if(shape[i].checked)
        ans=shape[i].value;
}
const peter=document.querySelector('#num');
let val=parseInt(peter.value);
    if(ans==='circle'){
        for (let i = count ; i <=val; i++) {
            const cir=document.createElement("div");
            const para=document.createElement("div");
            const output=document.querySelector('#output');
            const selectedcolor=document.querySelector("#color");
            const finalcolor=selectedcolor.value;
            output.appendChild(cir);
            cir.appendChild(para);
            cir.setAttribute("style",`width:100px; heigth:700px; border-radius:50%; background:${finalcolor};`);
            para.innerHTML=`${temp++}`;
            para.setAttribute("style","display:flex; align-items:center; justify-content:center; font-size:15px;");
        }
    }
    else if(ans=='square'){
        for (let i = count ; i <=val; i++) {
            const cir=document.createElement("div");
            const para=document.createElement("div");
            const output=document.querySelector('#output');
            const selectedcolor=document.querySelector("#color");
            const finalcolor=selectedcolor.value;
            output.appendChild(cir);
            cir.appendChild(para);
            cir.setAttribute("style",`width:100px; heigth:700px;  background:${finalcolor};`);
            para.innerHTML=`${temp++}`;
            para.setAttribute("style","display:flex; align-items:center; justify-content:center; font-size:15px;")
        }
    }
    else if(ans=='rectangle'){
        for (let i = count ; i <=val; i++) {
            const cir=document.createElement("div");
            const para=document.createElement("div");
            const output=document.querySelector('#output');
            const selectedcolor=document.querySelector("#color");
            const finalcolor=selectedcolor.value;
            output.appendChild(cir);
            cir.appendChild(para);
            cir.setAttribute("style",`width:250px; heigth:700px;  background:${finalcolor};`);
            para.innerHTML=`${temp++}`;
            para.setAttribute("style","display:flex; align-items:center; justify-content:center; font-size:10px; height:100px;")
        }
    }    
}

