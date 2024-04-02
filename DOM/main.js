// start head

let logocontent = document.createElement("p");
let logo = document.createElement("span");
let home = document.createElement("span");

let logotext = document.createTextNode("Ahmed");
let hometext = document.createTextNode("Home About Services Contact");

logo.appendChild(logotext);
home.appendChild(hometext);

logocontent.className = "logocontent";
logo.className = "logo";
home.className = "home";



logocontent.style.cssText = "padding: 10px;margin: 10px;word-spacing: 6px;font-size: large;"
logo.style.cssText = "color: greenyellow;"
home.style.cssText  = " position:absolute;right: 10px;"


logocontent.appendChild(logo);
logocontent.appendChild(home);


document.body.appendChild(logocontent);
 
// end head

// start content



let content = document.createElement("div");

content.className = "content";

let table = document.createElement("table");

let count = 1; 

for (let i = 1; i <= 5; i++) {
    let row = document.createElement("tr");
    for (let j = 1; j <= 3; j++) {
        let data = document.createElement("td");
        let datatext = document.createTextNode(`${count}`);
        let datatext2 = document.createElement("br");
        let datatext3 = document.createTextNode("product");


        data.appendChild(datatext);
        data.appendChild(datatext2);
        data.appendChild(datatext3);
        data.style.cssText = "margin: 20px;background-color: white;";


        row.appendChild(data);
        count++; 
        if (count > 15) break; 
    }
    table.appendChild(row);
    if (count > 15) break; 
}
table.style.cssText = "text-align: center;margin-left: auto;margin-right: auto;width: 90%;background-color: #eee;height: 600px;";


content.appendChild(table);
document.body.appendChild(content);

// end content
// start foter

let foter = document.createElement("p");
let fotertext = document.createTextNode("copyright 2024")
foter.className = "foter";

foter.appendChild(fotertext);

foter.style.cssText = "height: 40px;background-color: yellowgreen;color: white;text-align: center;padding-top: 20px;font-size: large;";

document.body.appendChild(foter);

// the end weeeeeeeeeeeeeeeeeeeeeeeeeeeeeee


