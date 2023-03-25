function fun(){

const resp=document.querySelector(".list-li").classList;
resp.toggle("active");
} 
let title = document.querySelector('.types');
let name = "DESIGNER";
let index = 1;
function types() {

    // const new_tittle = name.slice(0, index);
    title.innerHTML = new_tittle;
    // index >name.length ? index = 0 : index++;

    setTimeout(types, 200);

}