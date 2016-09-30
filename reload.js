window.onload = function (){
var keyArr = [0, 0];

function reloadStylesheets() {

    var queryString = '?reload=' + new Date().getTime();
    var styleSheets = document.styleSheets;
    for(var i = 0; i < styleSheets.length; i++){
            var oldstyle = styleSheets[i];
            if(oldstyle.href.indexOf('bootstrap') == -1){ 
                var newstyle = document.createElement('link');              
                newstyle.href = oldstyle.href.replace(/\?.*|$/, queryString);
                newstyle.rel = "stylesheet";
                document.getElementsByTagName('head')[0].appendChild(newstyle);
                document.getElementsByTagName('head')[0].removeChild(oldstyle.ownerNode);
        }
    }
}


function reloadScripts() {
    
    var queryString = '?reload=' + new Date().getTime();
    var scripts = document.getElementsByTagName('script')[0]
    for(var i = 0; i < scripts.length; i++){
            var oldscript = scripts[i];
            var oldhref = oldscript.href
            if(oldhref.toLowerCase().indexOf('jquery') == -1 && oldhref){ 
                var newstyle = document.createElement('link');              
                newstyle.href = oldscript.href.replace(/\?.*|$/, queryString);
                newstyle.rel = "stylesheet";
                document.getElementsByTagName('head')[0].appendChild(newstyle);
                document.getElementsByTagName('head')[0].removeChild(oldscript.ownerNode);
        }
    }
}


function reloadCaller(){
        
            keyArr.push(event.keyCode || event.which );
            keyArr.shift();
            if(keyArr.indexOf(46)+1 && keyArr.indexOf(99)+1){
                setTimeout(reloadStylesheets(),500);
                keyArr = [0, 0];
            }else if(keyArr.indexOf(46)+1 && keyArr.indexOf(115)+1){
                setTimeout(reloadScripts(),500);
                keyArr = [0, 0];
            }else if(keyArr.indexOf(46)+1 && keyArr.indexOf(97)+1){
                setTimeout(function run(){reloadScripts();reloadStylesheets();},500);
                keyArr = [0, 0];
            }else if(keyArr.indexOf(46)+1 && keyArr.indexOf(114)+1){
                keyArr = [0, 0];
                location.reload();
            }
            console.log(event.keyCode || event.which)

}

window.onload = window.addEventListener("keypress", reloadCaller );



}

/* Reload CSS only = ( . + c ); Reload Scripts only = ( . + s ); Reload JS & CSS ( . + a ); Reload page ( . + r )