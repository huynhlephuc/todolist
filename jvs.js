// khai bao chuoi
listArray = [];
var textBox = document.querySelector('input[type="text"]');
var workList = document.querySelector(".workList .todolist");
/* var workList = document.getElementsByTagName("ul"); */

render();

// Lay du lieu tu text box
textBox.onchange = function(e) {
    let userEnteredValue = textBox.value;
    /* console.log(arr); */
    e.target.value = "";
    /* console.log(userEnteredValue); */

    // set data len localstorage
    /* localStorage.setItem("name", JSON.stringify(listArray)); */

    // get du lieu tu localstorage
    var getLocalStorageData = localStorage.getItem("name");
    if(getLocalStorageData == null){
        listArray = [];
    }else{
        listArray = JSON.parse(getLocalStorageData); 
    }
    listArray.push(userEnteredValue);
    localStorage.setItem("name", JSON.stringify(listArray));
    // count plans
    /* var num = listArray.length; */
    /* var CountList = document.querySelector(".content");
    newSpanTag = `<span>You have ${num} plan(s) to go</span>` ;
    CountList.innerHTML = newSpanTag;
 */

    // render plan
    render();
    
}

//render html
function render() {
    var workList = document.querySelector(".workList .todolist");
    var getLocalStorageData = localStorage.getItem("name");
    if(getLocalStorageData == null){
        listArray = [];
    }else{
        listArray = JSON.parse(getLocalStorageData); 
    }
    // khoi tao gia tri rong neu k khi render lan dau se bo undentify
    let newLiTag = [];
    listArray.forEach((element, index) => {
        // loc mang lay element thu index de gan vao html
        newLiTag += `<li /* id="haha" */ class="liCss"><div >${element}</div><span onclick="deleteTask(${index})">&times;</span></li>` ;
        /* workList.innerHTML = newLiTag;
        console.log(workList.innerHTML = newLiTag); */
    });
    workList.innerHTML = newLiTag;
    console.log(workList.innerHTML = newLiTag);

    //count plans
    var CountList = document.querySelector(".content");
    CountList.innerHTML = `<span>You have ${listArray.length} plan(s) to go</span>`;
}

// show how many task let

/* function count() {
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
    
} */


function deleteTask(index) {
    var goget = localStorage.getItem("name");
    var getlvalue = JSON.parse(goget);
    getlvalue.splice(index, 1); //delete or remove the li
    localStorage.setItem("name", JSON.stringify(getlvalue));
    render();
}