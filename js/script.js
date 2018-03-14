function switchChannel(channelName) {
    console.log('Tuning into channel' + channelName);
    document.getElementById('current_channel').innerHTML = channelName;
    document.getElementById('current_location-link').href = "http://w3w.co/upgrading.never.helps";
    document.getElementById('current_location').innerHTML = 'upgrading.never.helps';

}

function changestar_fill() {
    console.log('fill');
    $('#Channel-Bar-Star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star.png')
}

function changestar_unfill(Channel_id) {
    removeClass();
    $(Channel_id).addClass('selected');
    $('#Channel-Bar-Star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star-o.png')
}



function removeClass() {
    $('.selected').removeClass();
}

function toogle_box(button_id) {
    $('#' + button_id).toggle();
    console.log('toggle');

}
