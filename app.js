const refresh = document.querySelector('.fa-exchange-alt')
refresh.addEventListener('click', () => {
    location.reload()
})

let countryAll;

const fillInfo = () => {
    const countryName = document.querySelector('.countryName')
    countryName.textContent = countryAll.data[0].name
    const flagInfoS = document.querySelector('.flagInfoS')
    flagInfoS.src = countryAll.data[0].flag
    const region = document.querySelector('.region')
    const population = document.querySelector('.population')
    region.textContent = countryAll.data[0].region
    population.textContent = countryAll.data[0].population
    const domain = document.querySelector('.domain')
    domain.textContent = countryAll.data[0].topLevelDomain[0]
    const capital = document.querySelector('.capital')
    capital.textContent = countryAll.data[0].capital
    const map = document.querySelector('#gmap_canvas')
    console.log(map.src);
    map.src = `https://maps.google.com/maps?q=${countryAll.data[0].name}&t=&z=3&ie=UTF8&iwloc=&output=embed`
}
const getCountryInfo = () => {
    const app = document.querySelector('.app')
    app.style.opacity = 0;
    setTimeout(() => {
        app.style.display = 'none';
        const appResult = document.querySelector('.appResult')
        appResult.style.display = 'block'
        setTimeout(() => {
            appResult.style.opacity = '1'
        }, 300)
        fillInfo()
    }, 200)
}


const btn = document.querySelector('#btn');
const input = document.querySelector('#countryname')
btn.addEventListener('click', () => {
    const country = input.value;
    const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
    axios.get(url)
    .then((res) => {
        countryAll = res
        console.log(res)
        getCountryInfo()
    }).catch(() => {
        Swal.fire({
            title: 'Error detected!',
            text: `We dont have country named ${input.value} at our base!, maybe type in english?`,
            icon: 'warning'
        })
    })

})


