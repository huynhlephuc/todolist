
var arr = []; ;
var textBox = document.querySelector('input[type="text"]');
/* var workList = document.getElementsByTagName("ul"); */



// Lay du lieu tu text box
textBox.onchange = function(e) {
    arr.push(e.target.value);
    /* console.log(arr); */
    e.target.value = "";

    // set data len localstorage
    var a = localStorage.setItem("name", JSON.stringify(arr));

    // get du lieu tu localstorage
    var b = localStorage.getItem("name");
    var c = JSON.parse(b);
    console.log(c);
    render();
}

//render html
function render() {
    var workList = document.querySelector(".workList .todolist");
    var go = localStorage.getItem("name");
    var localvalue = JSON.parse(go);
    let newLiTag = '';
    localvalue.forEach((element, index) => {
        newLiTag = `<li /* id="haha" */ class="liCss"><div >${element}</div><div>&times;</div></li>` + '' + newLiTag ;
        workList.innerHTML = newLiTag;
        console.log(workList.innerHTML = newLiTag);
    });
    
}