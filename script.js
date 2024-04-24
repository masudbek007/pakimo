const elItem = document.querySelector(".pakimo_item")
const localPakimo = JSON.parse(window.localStorage.getItem("pokemons"))

const functionPakimo = () =>{

    for( let item of pokemons) {
        console.log(item);
        const newLi = document.createElement("li")
        const newImg = document.createElement('img')
        const newBlock  = document.createElement("div")
        const newItem= document.createElement('div')
        const newText= document.createElement("h2")
        const newPi = document.createElement("p")
        const newPi2 = document.createElement("p")
        const newTime = document.createElement("p")
        const newSvg =document.createElement("img")
        const newIconk= document.createElement('div')
        const newList= document.createElement('div')
    
    
    
    
    
        newLi.setAttribute("class", "p-3 my-2 bg-white  rounded-xl h-64 w-72 list-none")
        newImg.setAttribute("src", item.img)
        newImg.setAttribute("class", "pl-[55px] border-b-stone-950 ")
        newText.setAttribute("class","font-bold pt-3")
        newTime.setAttribute("class", "pt-1")
        newPi.setAttribute("class","font-bold")
        newPi2.setAttribute("class","font-bold")
        newSvg.setAttribute("src", "./img/iconk.svg")
        newSvg.setAttribute("class","w-10 mr-8")
        newList.setAttribute("class","flex justify-center justify-between")
    
    
     
        newItem.setAttribute("class","flex gap-2 pt-2")
    
        newText.textContent=item.candy
        newPi.textContent=item.weight
        newPi2.textContent=item.height
        newTime.textContent=item.spawn_time
    
    
        elItem.append(newLi)
        newLi.append(newImg,newList)
        newList.append(newBlock,newIconk)
        newBlock.append(newText,newTime,newItem)
        newIconk.append(newSvg)
        newItem.append(newPi,newPi2)
        
        newIconk.addEventListener("click", () => {
            const elImg = document.createElement("img")
            elImg.setAttribute("class","w-[29px] translate-y-[9px] translate-x-[-40px]")
            window.localStorage.setItem("todos",JSON.stringify(pokemons))

            elImg.setAttribute("src","./img/yurakcha.svg")
            newIconk.innerHTML=null
            newIconk.append(elImg)
            functionPakimo()
        })
}
}


functionPakimo()
