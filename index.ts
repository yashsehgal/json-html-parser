
const CardComponent = require('./component.json');
const logger = require('./utils/logger');

RenderJSON(CardComponent);

function RenderJSON(component) {
    if (component[0].id !== 'parent') {
        logger.errorLog('JSON Object Parent should have an ID of parent');
        logger.errorLog('Please add id="parent" in the root of the JSON');
        return;
    };
    
    let parentComponent = component[0]; 
    // checking parent element type and id
    if (parentComponent.type === null) {
        logger.warnLog('Please specify the `type` of the parent element. By default the program will render it as a `div`');
    } else if (parentComponent.type === undefined) {
        logger.errorLog('Type of the parent element cannot be undefined');
    } else {
        let parentElementWrapper= window.document.createElement(parentComponent.type);
        parentElementWrapper.id = parentComponent.id;
        parentElementWrapper.classList.add(parentComponent.class ? parentComponent.class : '');
    }
}