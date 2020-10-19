const map = L.map('mapid').setView([-27.222633,-49.6455874], 15)

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    
})

let marker;

// create and add marker
map.on('click', (event) => {

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;


    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;
    // remove icon 
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)

})

// add field photos
function addPhotoField(){
    // pick container of photos #images
    const container = document.querySelector('#images')
    // pick  container to duplicate  .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // Clone a last image add   
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)
   // check if empty if empty do not add
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    }

    //clean first 
   input.value= ""
   
   
    // add clone to container of #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
        
        span.parentNode.children[0].value = ""

        return
    }

    // delete field in
    span.parentNode.remove();
}

// select yes or no 
function toggleSelect(event) {
    // get button click 
    document.querySelectorAll('.button-select button')
    .forEach( function(button) {
        button.classList.remove('active')
    })

    const button = event.currentTarget
    button.classList.add('active')

    // atualizar o meu input hidden com o valor selecionado

    const input = document.querySelector('[name="open_on_weekends"]')
    
    input.value = button.dataset.value



    // retirar a class .active dos botoes 

    // colocar a class .active nesse botao clicado

}

const lg = document.queryselectorAll('.map-container input')
function validade(event){
    if(lg == ("")) {
        event.preventDefault()
    alert('Selecione um ponto no mapa')
    }
    // validar se lat e lng estao preenchidos
   
}