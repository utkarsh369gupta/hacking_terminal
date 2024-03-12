
let body = document.body;
body.setAttribute("style", "background-color: black; border: 2px solid #23ad2e; margin: 5%; height: 75vh; width: 90%;");


let madeBy = document.querySelector('.Madeby')
madeBy.setAttribute("style", "color: #23ad2e; padding: 14px; position: fixed; right: 0; margin-right: 6.5vw; bottom: 15vh")

let con = document.querySelector('.container')
con.setAttribute("style", "color: #23ad2e; padding: 14px")


function element(container, text) {
    let e = document.createElement("div")
    e.setAttribute("style", "color: #23ad2e; font-size: 17px; padding: 4px")
    e.innerHTML = `${text}`
    container.appendChild(e)
}


let point = document.createElement("span");
point.setAttribute("style", "padding: 4px")
point.innerHTML = ".";

function loaddots(con) {
    return setInterval(() => {
        con.appendChild(point.cloneNode(true));
    }, 450);
}
function removedots(con) {
    let points = con.querySelectorAll('span');
    while (points.length > 0) {
        con.removeChild(points[points.length - 1]);
        points = con.querySelectorAll('span');
    }
}
async function loading(con) {
    return new Promise((resolve) => {
        let x = loaddots(con)
        setTimeout(() => {
            clearInterval(x);
            removedots(con);
            resolve();
        }, 2000);
    });
}

function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}
async function stop(ms) {
    await delay(ms);
}
async function main() {
    confirm("Are you ready?")
    element(con, 'Initializing Hacking');
    await loading(con);
    await stop(450);
    element(con, 'Reading your files');
    await loading(con);
    await loading(con);
    await loading(con);
    await stop(450);
    element(con, 'Detecting Password files ');
    await loading(con);
    await loading(con);
    await stop(450);
    element(con, 'Sending all passwords and personal files to server');
    await loading(con);
    await stop(450);
    element(con, 'Cleaning up');
    await loading(con);
    await stop(450);
    let space = document.createElement("br")
    con.appendChild(space)
    element(con, `<br><br/>`)
    await stop(450);
    popup(con)
}

main();


