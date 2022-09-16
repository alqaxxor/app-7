const list=document.querySelector('.list')

list.addEventListener('click',evt=>{
    const restorounId=evt.target.dataset.id
    if (restorounId){
        console.log(restorounId)
        document.cookie=`restorounId=${restorounId}`
        console.log(document.cookie)
        window.location.href='http://localhost:5050/userFoods'
        
    }
})