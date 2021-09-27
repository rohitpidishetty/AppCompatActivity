export function addMenuButton() {
    document.getElementById("menuButton").style.visibility = "visible";
    document.getElementById("menuButton").style.height = "unset";
    document.getElementById("menuButton").style.width = "2%";
    document.getElementById("optionsBar").style.visibility = "visible";
    document.getElementById("optionsBar").style.height = "unset";
    document.getElementById("optionsBar").style.width = "unset";
}
export function addNavbar() {
    document.getElementById("root").innerHTML += `<nav id="navigation">
        <img id="menuButton" onclick="openMenu()" width="15%" src="../public/images/menu.png" alt="img" />
        <div id="optionsBar"></div>
            <p>Home</p>
            <p>Menu</p>
            <p>Location</p>
            <p>Details</p>
            <p>Contact</p>
            <input placeholder="Search" />
          </nav><br><br>`
}
export function addFooter(name) {
    document.getElementById("root").innerHTML += `<footer><p>All copyrights &copy; are reserved by ${name} </p></footer>`
}
export function addForm() {
    document.getElementById("root").innerHTML += `<br/><form>
        <br/>
      <input placeholder="First Name" /><br />
      <input placeholder="Last Name" /><br />
      <input placeholder="Email Address" /><br />
      <input placeholder="Phone Number" /><br />
      <input placeholder="Address" /><br />
      <button>Submit</button><br/><br/>
    </form>`
}
export function addBackgroud(imageURL) {
    document.getElementById("root").innerHTML += `<img id="back-ground-img" src=${imageURL} />`
}
export function addTextarea() {
    document.getElementById("root").innerHTML += `<br><textarea style="border-radius:10px;padding : 10px" placeholder="Enter your text here" cols="200" rows="10" ></textarea>`
}
export function addButton(buttonDescription) {
    document.getElementById("root").innerHTML += `<br><button>${buttonDescription}</button><br>`
}
export function addSpace() {
    document.getElementById("root").innerHTML += `<br><br><br><br>`
}
export function addText(text) {
    document.getElementById("root").innerHTML += `<br><p id="text">${text}</p><br>`
}
