(()=>{const e=document.querySelectorAll("button"),a=document.getElementById("block"),r=e=>{a.className=`col mt-5 padding-5 ${e}`};e.forEach((e=>e.addEventListener("click",(e=>{switch(e.target.innerText){case"Galben":r("bg-warning");break;case"Verde":r("bg-success");break;case"Rosu":r("bg-danger");break;case"Albastru":r("bg-primary");break;case"Sur":r("bg-secondary");break;case"Negru":r("bg-dark")}}))))})();