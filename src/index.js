const butoane=document.querySelectorAll('button')
const block=document.getElementById('block')
const setBackground=(cl)=>{
      block.className=`col mt-5 padding-5 ${cl}` 
}
butoane.forEach(buton=>(
 buton.addEventListener('click',(e)=>{
    let condition =e.target.innerText
    switch(condition){
        case'Galben':s
        setBackground('bg-warning')
        break;
        case'Verde':
        setBackground('bg-success')
        break;
        case'Rosu':
        setBackground('bg-danger')
        break;
        case'Albastru':
        setBackground('bg-primary')
        break;
        case'Sur':
        setBackground('bg-secondary')
        break;
        case'Negru':
        setBackground('bg-dark')
        break;
        default:
        break;
    }
 })
))