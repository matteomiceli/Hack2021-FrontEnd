const geoBtn = document.querySelector('.btn-orange');


geoBtn.addEventListener('click', () => {
    getGeoLocation();
})

const getGeoLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, failure);
    } else {
        alert('Location not supported by your browser!')
    }
}

const success = (coordinates) => {
    const { latitude, longitude } = coordinates.coords
    return(`${latitude},${longitude}`);
}

const failure = (failure) => {
    return('error, could not access location data');
}

export { getGeoLocation };