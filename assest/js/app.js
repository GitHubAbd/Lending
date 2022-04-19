const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const nav = document.getElementById("nav");
const conatiner = document.querySelector(".container");

function nightMade() {
  document.body.style = `background-color: rgb(7, 7, 39);`;
  btn1.style = `    position: absolute;
    margin: 10px;
    background-color: rgb(44, 3, 3);
    width: 150px;
    right: 3%;
    top: 93%;
    color: white;
    height: 20px;
    font-size: 15px;
    border-radius: 10px;
    font-family: 'Roboto', sans-serif;
    border: 1px solid white;
    transition:.3s  `;
  nav.style = `  font-family: "Roboto", sans-serif;
    text-align: center;
    width: 100%;
    background-color: rgb(7, 7, 39);
    color: white;
    text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
    font-size: 30px;
    height: 80px;
    -webkit-box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
    -moz-box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
    box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
    transition:.3s  `;
  btn2.style = `  
    position: absolute;
    margin: 10px;
    background-color: rgb(44, 3, 3);
    width: 150px;
    right: 15%;
    top: 93%;
    color: white;
    height: 20px;
    font-size: 15px;
    border-radius: 10px;
    font-family: 'Roboto', sans-serif;
    border: 1px solid white;
    transition:.3s   `;
    conatiner.style = `transition:.3s;
    color: white;
    
    `
  nav.innerHTML = "<h1>Night Mode</h1>";
  conatiner.innerHTML = "<h1>Welcome to the night mode</h1>"
}

function defaultMade(params) {
  document.body.style = `  background-color: white; transition:.3s`;
  btn1.style = `  position: absolute;
    margin: 10px;
    background-color: grey;
    width: 150px;
    right: 3%;
    top: 93%;
    color: black;
    height: 20px;
    font-size: 15px;
    border-radius: 10px;
    font-family: "Roboto", sans-serif;
    border: 1px solid white;
    transition:.3s  `;
  btn2.style = `position: absolute;
    margin: 10px;
    background-color: grey;
    width: 150px;
    right: 15%;
    top: 93%;
    color: black;
    height: 20px;
    font-size: 15px;
    border-radius: 10px;
    font-family: "Roboto", sans-serif;
    border: 1px solid white;
    transition:.3s`;
    nav.style = `  font-family: "Roboto", sans-serif;
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: white(7, 7, 39);
    color: black;
    text-shadow: 0px 0px 6px black;
    font-size: 30px;
    height: 80px;
    -webkit-box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
    -moz-box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
    box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
    transition:.3s  `
    conatiner.style = `transition:.3s; `
    nav.innerHTML = "<h1>Default Mode</h1>";
    conatiner.innerHTML = "<h1>Welcome to the default mode</h1>" 
}

btn1.addEventListener("click", () => {
  nightMade();
});
btn2.addEventListener("click", () => {
  defaultMade();
});
