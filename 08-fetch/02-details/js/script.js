/* becode/javascript
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
/*(async () => {
    let data = await fetch('http://127.0.0.1:5500/_shared/api.json');
    let main = await data.json();

    .then(data => console.log(data));
})();  */



document.getElementById("run").addEventListener("click" , function(){
    getObj = () => {
        fetch('http://127.0.0.1:5500/_shared/api.json')
        .then(response=> response.json())
        .then(data => console.log(data));
    }
    getObj();
});

(() => {
    // your code here
})();
