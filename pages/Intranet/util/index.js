const utils = {
    
    // if (navigator.userAgent.match(/Tablet|iPad/i))
    // {
    //     // do tablet stuff
    // } else if(navigator.userAgent.match(/Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i) )
    // {
    //     // do mobile stuff
    // } else {
    //     // do desktop stuff
    // }
    isMobile: () => !!( 
        navigator.userAgent.match(/Android/i)       ||  
        navigator.userAgent.match(/Tablet/i)        ||  
        navigator.userAgent.match(/webOS/i)         ||  
        navigator.userAgent.match(/iPhone/i)        ||  
        navigator.userAgent.match(/iPad/i)          ||  
        navigator.userAgent.match(/iPod/i)          ||  
        navigator.userAgent.match(/BlackBerry/i)    ||  
        navigator.userAgent.match(/Windows Phone/i)
    )
}

export default utils