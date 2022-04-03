
// interface JSONDocumentObject {
    
// }

let documentObject = {
    id: 'parent',
    className: 'application-root',
    type: 'div',
    children: {
        id: 'profile-card',
        className: 'profile-card-wrapper w-fit h-auto shadow-md border border-slate-200 rounded-md p-3 hover:shadow-lg',
        type: 'div',
        contains: [
            {
                id: 'profile-title',
                className: 'leading-snug text-lg font-semibold text-slate-700',
                type: 'h1',
                contains: 'Yash Sehgal'
            },
            {
                id: 'profile-description',
                className: 'leading-snug text-sm text-slate-400',
                type: 'p',
                contains: 'product design. react. figma. code. food. music'
            },
            {
                id: 'profile-url',
                className: 'leading-snug px-4 py-1 bg-purple-600 text-white font-semibold uppercase text-center block mx-auto',
                type: 'button',
                contains: 'Check Profile'
            },
            {
                id: 'tags-layer',
                className: 'flex flex-row w-fit items-center justify-start gap-2 h-auto',
                type: 'div',
                contains: [
                    {
                        id: 'react-tag',
                        className: 'skill-tag px-2 py-0.5 bg-blue-600 text-white text-sm w-fit h-auto',
                        type: 'p',
                        contains: 'React'
                    },
                    {
                        id: 'html-tag',
                        className: 'skill-tag px-2 py-0.5 bg-orange-600 text-white text-sm w-fit h-auto',
                        type: 'p',
                        contains: 'HTML'
                    },
                    {
                        id: 'figma-tag',
                        className: 'skill-tag px-2 py-0.5 bg-pink-600 text-white text-sm w-fit h-auto',
                        type: 'p',
                        contains: 'Figma'
                    }
                ]
            }
        ]
    }
};

function generateDocumentTree(configurableDocumentObject) {
    
    if (configurableDocumentObject === {} || configurableDocumentObject === null || configurableDocumentObject === undefined) {
        configurableDocumentObject = { id: 'parent', contains: null, children: null };
    }

    if (!configurableDocumentObject.children) { 
        console.log('Invalid Object [id: ' + configurableDocumentObject.id + ']' );
        return ;
    }

    console.log('Valid Object: [id: ' + (configurableDocumentObject.id ? configurableDocumentObject.id : null) + '] ====> ' + configurableDocumentObject);
    console.log(configurableDocumentObject);

    // generating tree structure
    console.log('---PARENT BLOCK---');
    console.log(`parent:id<${configurableDocumentObject.id}>`);
    console.log(`parent:class<${(configurableDocumentObject.className) ? configurableDocumentObject.className : null}>`);
    console.log(`parent:type<${(configurableDocumentObject.type) ? configurableDocumentObject.type : null}>`);
    console.log(`parent:children<${(configurableDocumentObject.children) ? configurableDocumentObject.children : null}>`);

    (configurableDocumentObject.children ? generateChildrenTree(configurableDocumentObject.children) : generateChildrenTree(null));

    function generateChildrenTree(childrenObject) {
        if (!childrenObject) return;
        console.log('---CHILDREN---');
        console.log(`children:id<${childrenObject.id}>`);
        console.log(`children:class<${(childrenObject.className) ? childrenObject.className : null}>`);
        console.log(`children:type<${(childrenObject.type) ? childrenObject.type : null}>`);
        console.log(`children:contains<${(childrenObject.contains) ? childrenObject.contains : null}>`);

        if (typeof(childrenObject.contains) === "object") {
            // childrenObject.contains ? generateChildrenTree(childrenObject.contains) : generateChildrenTree(null);
            childrenObject.contains.map((item) => {
                item ? generateChildrenTree(item) : generateChildrenTree(null);
            })
        }
    }
}

generateDocumentTree(documentObject);