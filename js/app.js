const loadButton = () => {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    inputField.value = '';
    // console.log(inputText)

    const url = `https://openapi.programming-hero.com/api/phones?search=${inputText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))

}
const displayPhone = (phones) => {
    console.log(phones)
    const sectionContainer = document.getElementById('div-container')
    for (const phone of phones) {
        const div = document.createElement('div');
        div.classList.add('col-lg-4')
        div.classList.add('col-sm-6')
        div.classList.add('px-5')

        div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
             <h5>Name: ${phone.phone_name}</h5>
                <p class="card-text">Brand: ${phone.brand}</p>
            </div>
            <button onclick="exploreButton('${phone.slug}')" class="btn btn-primary">Explore</button>
        </div>
        `
        sectionContainer.appendChild(div)
        console.log(phone)
    }

}

const exploreButton = (info) => {
    const url = `https://openapi.programming-hero.com/api/phone/${info}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayExplore(data.data))
    // console.log(info)
}

const displayExplore = (details) => {
    const exploreContainer = document.getElementById('explore-container');
    const div = document.createElement('div')
    div.innerHTML = `
    <img class="w-25" src="${details.image}" class="card-img-top" alt="...">
    <h6>${details.releaseDate}</h6>
    <p>Storage: ${details.mainFeatures.storage}
    </p>
    <p> displaySize: ${details.mainFeatures.displaySize}</p>
    <p> ChipSet: ${details.mainFeatures.chipSet}</p>
    <p> Memory: ${details.mainFeatures.memory}</p>
    
    `
    exploreContainer.appendChild(div)
    console.log(details.mainFeatures)
}