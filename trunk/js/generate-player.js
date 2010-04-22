/*
 * Replaces the placeholder div with an actual player object.
 * Once it finishes, the callback function onYouTubePlayerReady()
 * is called.
 */
function createAndSetupPlayer() {
    //console.log("Control entered player generator function.");
    var params = { 
        allowScriptAccess:'always', 
        bgcolor:config.player.bgcolor
    };
    var atts = {
        id:config.IDs.player.player
    };
    console.log("Before SWFobject embed");
    var url = config.youtube.api
        + '?key=' + config.youtube.devkey
        + '&enablejsapi=1';
    console.log("url = " + url);
    swfobject.embedSWF(/*config.youtube.api
        + '?key=' + config.youtube.devkey
        + '&enablejsapi=1',*/
        url,
        config.IDs.player.future_player, 
        config.player.width, config.player.height,
        config.youtube.flashversion, null, null, params, atts);
    console.log("After SWFobject embed");
};

