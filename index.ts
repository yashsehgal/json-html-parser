
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM();

const RootElement = dom.window.document.getElementById('root');

const CardComponent = [
    {
        "id": "parent",
        "class": "card-container",
        "type": "div",
        "children": [
            { 
                "type": "h3", 
                "id": "name",
                "children": "Tony Parker"
            },
            {
                "type": "p",
                "id": "role",
                "children": "Iron Man at Oscorp Inc."
            },
            {
                "type": "button",
                "id": "view-profile-btn",
                "children": "View Profile",
                "class": "primary-btn"
            }
        ]
    }
];

RenderJSON(CardComponent);

function RenderJSON(component) {
    if (component[0].id !== 'parent') {
        errorLog('JSON Object Parent should have an ID of parent');
        errorLog('Please add id="parent" in the root of the JSON');
        return;
    };
    
    let parentComponent = component[0]; 
    // checking parent element type and id
    if (parentComponent.type === null) {
        warnLog('Please specify the `type` of the parent element.');
        warnLog('By default the program will render it as a `div`');
        return;
    } else if (parentComponent.type === undefined) {
        errorLog('Type of the parent element cannot be undefined');
        return;
    }

    let parentElementWrapper= dom.window.document.createElement(parentComponent.type);
    parentElementWrapper.id = parentComponent.id;
    parentElementWrapper.classList.add(parentComponent.class ? parentComponent.class : '');
    parentElementWrapper.innerHTML = 'working';

    RootElement.appendChild(parentElementWrapper);
}


// Loggers - Temporary code

function logMessage(message) {
    if (!message) return;
    console.log("(MESSAGE): ", message);
}
function warnLog(message) {
    if (!message) return;
    console.warn("(WARNING): ", message);
}
function errorLog(message) {
    if (!message) return;
    console.error("(ERROR): ", message);
}
function infoLog(message) {
    if (!message) return;
    console.info("(INFO): ", message);
}