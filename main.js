var searchContent = document.querySelector(".searchInput");
var counter = document.querySelector(".faviort-counter");
var increase = 0;
function search(){
    alert(searchContent.value)

}
function disappear(e){
    e.remove();
}
function faviort(){
    increase = parseInt(counter.textContent);
    counter.textContent = ++increase;

}