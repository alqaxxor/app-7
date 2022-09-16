const list=document.querySelector('#ol-list')

list.addEventListener('click',evt=>{
    const productId=evt.target.dataset.id
    if(productId) {
        alert('korzinkaga qoshildi')
        document.cookie=`productId${productId}=${productId}`
    }
})