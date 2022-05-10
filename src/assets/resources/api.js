const path = 'https://coronavirus-19-apt-herokuapp.com/countries'

const headers = {
    mothod: 'get',
    mode: 'cors',
    cache: 'default'
}

function getCountry(country) {
    return fetch (`${path}/${country}`, headers)
    .then((response) => response.json())
}

export default {
    getCountry
}