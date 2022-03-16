
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
    count();
}

//render html
function render() {
    var workList = document.querySelector(".workList .todolist");
    var go = localStorage.getItem("name");
    var localvalue = JSON.parse(go);
    // khoi tao gia tri rong neu k khi render lan dau se bo undentify
    let newLiTag = '';
    localvalue.forEach((element, index) => {
        // loc mang lay element thu index de gan vao html
        newLiTag = `<li /* id="haha" */ class="liCss"><div >${element}</div><span onclick="deleteTask(${index})">&times;</span></li>` + '' + newLiTag ;
        workList.innerHTML = newLiTag;
        console.log(workList.innerHTML = newLiTag);
    });
    
}

// show how many task let

function count() {
    var CountList = document.querySelector(".content");
    var go = localStorage.getItem("name");
    var localvalue = JSON.parse(go);
    var num = 0;
    localvalue.forEach((element, index) => {
        num = index ;
        newSpanTag = `<span>You have ${num +1} plan(s) to go</span>` ;
        CountList.innerHTML = newSpanTag;
        
    });
    console.log(num);
    
}


function deleteTask(index) {
    var goget = localStorage.getItem("name");
    var getlvalue = JSON.parse(goget);
    getlvalue.splice(index, 1);
    localStorage.setItem("name", JSON.stringify(getlvalue));
    render();
}