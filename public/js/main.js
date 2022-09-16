const list=document.querySelector("#ol")

list.addEventListener('click',(evt)=>{
    const clikedId=evt.target.dataset.id
    if(clikedId){
        fetch(`http://localhost:5050/deletProduct/${clikedId}`,{
            method:"delete"
        }).then(req=>req.json()).then(data=>{
                console.log(data)
                window.location.href='http://localhost:5050/admin'
            })
    }
})
