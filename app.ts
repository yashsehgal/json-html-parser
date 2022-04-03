
const documentObject = require('./json/document-object.json');
const chalk = require('chalk');

// creating a short logging method

const logMessage = console.log;
const logError = console.error;
const logInfo = console.info;
const logWarning = console.warn;

// method to render the tree for document-object, in JSON

function generateDocumentTree(configurableDocumentObject) {
    
    if (configurableDocumentObject === {} || configurableDocumentObject === null || configurableDocumentObject === undefined) {
        configurableDocumentObject = { id: 'parent', contains: null, children: null };
    }

    if (!configurableDocumentObject.children) { 
        logError(chalk.red('Invalid Object [id: ' + configurableDocumentObject.id + ']' ));
        return ;
    }

    logInfo(chalk.blue('Valid Object: [id: ' + (configurableDocumentObject.id ? configurableDocumentObject.id : null) + '] ====> ' + configurableDocumentObject));
    logInfo(configurableDocumentObject);

    // generating tree structure
    logInfo('PARENT BLOCK');
    logInfo(`${chalk.blueBright('parent')}:id(${configurableDocumentObject.id})`);
    logInfo(`${chalk.blueBright('parent')}:class(${(configurableDocumentObject.className) ? configurableDocumentObject.className : null})`);
    logInfo(`${chalk.blueBright('parent')}:type(${(configurableDocumentObject.type) ? configurableDocumentObject.type : null})`);
    logInfo(`${chalk.blueBright('parent')}:children(${(configurableDocumentObject.children) ? configurableDocumentObject.children : null})`);

    (configurableDocumentObject.children ? generateChildrenTree(configurableDocumentObject.children, (configurableDocumentObject.id ? configurableDocumentObject.id : "id-none")) : generateChildrenTree(null, 'id-none'));

    function generateChildrenTree(childrenObject, parentID) {
        if (!childrenObject) return;
        logInfo(chalk.bgWhite(chalk.black(`CHILDREN OF PARENT[${parentID}]`)));
        logInfo(`${chalk.blueBright('children')}:id(${childrenObject.id})`);
        logInfo(`${chalk.blueBright('children')}:class(${(childrenObject.className) ? childrenObject.className : null})`);
        logInfo(`${chalk.blueBright('children')}:type(${(childrenObject.type) ? childrenObject.type : null})`);
        logInfo(`${chalk.blueBright('children')}:contains(${(childrenObject.contains) ? childrenObject.contains : null})`);

        if (typeof(childrenObject.contains) === "object") {
            childrenObject.contains.map((item) => {
                item ? generateChildrenTree(item, (childrenObject.id ? childrenObject.id : "id-none")) : generateChildrenTree(null, 'id-none');
            })
        }
    }
}


documentObject.map((item) => {
    generateDocumentTree(item);
});