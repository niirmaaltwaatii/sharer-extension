/*
Author : Niirmaal Twaatii
GitHub : https://github.com/niirmaaltwaatii/sharer-extension/
*/

function shrimg(info, tab){
    console.log(info);
    chrome.windows.create({
        "url" : "https://www.facebook.com/sharer.php?u=" + info.srcUrl + "",
        "type": "popup"
    });
}

function shrquote(info, tab){
    console.log(info);
    chrome.windows.create({
        "url" : "https://www.facebook.com/sharer.php?u=fb.com&quote="+info.selectionText,
        "type": "popup"
    });
}
function shrquotewurl(info, tab){
    console.log(info);
    chrome.windows.create({
        "url" : "https://www.facebook.com/sharer.php?u="+info.pageUrl+"&quote="+info.selectionText,
        "type": "popup"
    });
}

//share images
chrome.contextMenus.create({
    "title": "Share Image on facebook",
    "contexts": ["image"],
    "onclick": shrimg
});

//share quotes
chrome.contextMenus.create({
    "title": "Share Quote with link on Facebook",
    "contexts": ["selection"],
    "onclick": shrquotewurl
});
chrome.contextMenus.create({
    "title": "Share Quote on Facebook",
    "contexts": ["selection"],
    "onclick": shrquote
});