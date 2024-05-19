if (navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition(MyLocation, handleError)
}else {
    alert('OPS looks like this browser don\'t support Geolocation')
}

function MyLocation(position) 
{
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var accuracy = position.coords.accuracy;

    var Details = document.getElementById('details');

    console.log(latitude, longitude, accuracy);

    Details.innerHTML = `<li> latitude : ${latitude} </li> <li> longitude : ${longitude} </li> <li> accuracy : ${accuracy} meters </li>`
}

function handleError(error) 
{
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}