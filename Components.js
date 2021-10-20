export function RenderMenuOption() {
    document.getElementById("menuButton").style.visibility = "visible";
    document.getElementById("menuButton").style.height = "unset";
    document.getElementById("menuButton").style.width = "2%";
}

// Rendering a Navbar to the HTML page.
export function RenderNavbar(...attrs) {
    document.getElementById("root").innerHTML += `<nav style="background-color:${attrs[attrs.length - 1].backgroundColor};border : 1px solid ${attrs[attrs.length - 1].backgroundColor};z-index:1" id="navigation">
    <img id="menuButton" onclick="openMenu()" width="15%" src="http://calc.xp3.biz/menu.png" alt="img" />
          </nav><br><br>`;
    setTimeout(() => {
        for (var i = 0; i < attrs.length - 1; i++) {
            document.querySelector("#navigation").innerHTML += `<p id=${attrs[i]} style="color:${attrs[attrs.length - 1].textColor};border : none ">${attrs[i]}</p>`
        }
        document.querySelector("#navigation").innerHTML += `  <input style="border:5px solid white" id="search_here" placeholder="Search" />`;
    }, 200);
}



// Rendering a form to the HTML page.

export function RenderForm(...inputs) {
    var Page = inputs[inputs.length - 1];
    document.getElementById("root").innerHTML += `<br/><form action="./Serve/${Page}.html" method="get" id="fill-form"><br/><br>
    </form>`
    setTimeout(() => {
        for (var j = 0; j < inputs.length - 2; j++) {
            document.querySelector("#fill-form").innerHTML += `<input style="width:60%" placeholder=${inputs[j]} name=${inputs[j]} id=${inputs[j]} /><br/>`
        }
        document.querySelector("#fill-form").innerHTML += ` <button id=${inputs[inputs.length - 2]}>${inputs[inputs.length - 2]}</button><br/><br/>`
    }, 200)
}

// 

export function RenderFooter(name) {
    document.getElementById("root").innerHTML += `<footer><p>All copyrights &copy; are reserved by ${name} </p></footer>`
}

export function RenderBackground(imageURL) {
    document.getElementById("root").innerHTML += `<img id="back-ground-img" src=${imageURL} />`
}
export function RenderTextarea() {
    document.getElementById("root").innerHTML += `<br><textarea style="border-radius:10px;padding : 10px; outline:none" placeholder="Enter your text here" cols="200" rows="10" ></textarea>`
}
export function RenderButton(buttonDescription, id) {
    document.getElementById("root").innerHTML += `<br><button id=${id}>${buttonDescription}</button><br>`
}
export function RenderSpace(times) {
    for (var i = 0; i < times; i++) {
        document.getElementById("root").innerHTML += `<br>`
    }
}
export function RenderText(text) {
    document.getElementById("root").innerHTML += `<br><p id="text" style="padding:2%;border-radius:10px">${text === undefined ? "Pass in a text as parameter" : text}</p><br>`
}
export function RenderImage(image, width) {
    document.getElementById("root").innerHTML += `<br><img src=${image} width=${width}${width.charAt(width.length - 1) === "x" ? "px" : "%"}/>`
}

export function RenderHeader(heading) {
    document.getElementById("root").innerHTML += `<br><p style="border:1px solid black;width:80%;padding:1%;color:white;background-color:black;font-size:1.2rem;opacity:0.7;text-align:left">${heading}</p>`
}