
const documentObject = {
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
}

generateDocumentTree();
generateDocumentTree(documentObject);