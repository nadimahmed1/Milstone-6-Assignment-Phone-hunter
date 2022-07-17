const loadButton = () => {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    inputField.value = '';
    console.log(inputText)

    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`
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
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
            </div>
        </div>
        `
        sectionContainer.appendChild(div)
        console.log(phone)
    }

}