$("#box .song-container").mouseenter(function() {
    return $(this).css("background-color", "hsla(0,0%,100%,.3)"),
    $(this).children("div").find(".singer-band").css("color", "#FFFFFF"),
    $(this).find(".album-name").css("color", "#FFFFFF"),
    $(this).find(".number").remove(),
    $(this).prepend("<img class='play-icon' src='./images/play-icon.png'>"),
    $(this).find(".like").html("<img class='like-song' src='./images/spotify-heart.png'>"),
    $(this).find(".more").html("<img class='more-song' src='./images/spotify-more.png'>");
});

$("#box .song-container").mouseleave(function() {
    return $(this).css("background-color", ""),
    $(this).children("div").find(".singer-band").css("color", ""),
    $(this).find(".album-name").css("color", ""),
    $(this).find(".play-icon").remove(),
    $(this).prepend(`<p class='number'> ${$(this).index()+1} </p>`),
    $(this).find(".like-song").remove(),
    $(this).find(".more-song").remove();
});


/*
const APIController = (function() {

    const clientId = '';
    const clientSecret = '';

    //private methods
    const _getToken = async () => {

        const result = await fetch('', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization' : 'Basic' + btoa(clientId + ':' + clientSecret)
            }
            body: 'grant_type=client_credentials'
        });

        const data = await result.json();
        return data.access_token;
    }

    const _getGenres = async (token) => {

        const result = await fetch('', {
            method: 'GET',
            headers: { 'Authorization' : '' + token}
        });

        const data = await result.json();
        return data.categories.items;

    }

    const _getTracks = async (token, trackEndPoint) => {

        const limit = 10;

        const result = await fetch(`${trackEndPoint}?limit=${limit}`, {
            method: 'GET',
            headers: { 'Authorization' : '' + token}
        });

        const data = await result.json();
        return data.items;
    }

})();
*/

