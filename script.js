function milesToKm(distance) {
    return distance * 1.60934;
}

function kmToMiles(distance) {
    return distance / 1.60934;
}

document.addEventListener('submit', e => {
    e.preventDefault();
    let distanceEntered = document.querySelector('#distance-input').value;

    let convertedDistance;

    if (document.querySelector('#mToKm').checked){
        convertedDistance = milesToKm(distanceEntered);
    } else {
        convertedDistance = kmToMiles(distanceEntered);
    }

    document.querySelector('#distance-result').innerText = convertedDistance;
    
    document.querySelector('.result-div').classList.remove('d-none');

    document.querySelector('#distance-input').value = null;
});
