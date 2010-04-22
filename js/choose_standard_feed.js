/*
 * This file is only used by the not-officially-supported
 * browsestandardfeeds.html
 */

function chooseFeed(node) {
    var feed_id = dojo.attr(node, "feed_id");
    var dest = "sway.html?feedsource=stdfeed&f=" + feed_id;
    // Not clear whether it makes a difference whether I do this
    // or use window.location.href ...
    window.location = dest;
}


