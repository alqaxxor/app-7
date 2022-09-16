const rest=document.querySelector(".list")

rest.addEventListener('click',(evt)=>{
    const clikedId=evt.target.dataset.id
    if(clikedId){
        fetch(`http://localhost:5050/deletRest/${clikedId}`,{
            method:"delete"
        }).then(req=>req.json()).then(data=>{
            console.log(data)
            window.location.href='http://localhost:5050/restorouns'
        })
    }
})