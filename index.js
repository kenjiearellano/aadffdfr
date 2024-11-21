const content=document.querySelector("#content")
window.addEventListener("load", ()=>{
    getUser()

})

function getUser(){

    let html=""


    fetch("https://bscs3a-crud-api.onrender.com/api/members" , {mode: "cors"})

    .then((response) =>{
        console.log(response)
            return response.json()
    })
    ,then((data) =>{
        console.log(data)
        data.array.forEach(element => {
            html +=`<li>${element.first_name} ${element.last_name}</li>`      
        })

        content.innerHTML = html
    })
    .catch((error) =>{
        console.log(error)    
})

}
