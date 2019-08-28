import marked from 'marked';
const rust = import("../pkg/index.js");
const content = `#Heading`;

const startJs = performance.now();
console.log(marked(content));
const endJs = performance.now();

console.log(`It took ${endJs - startJs} to do this in JavaScript`);

rust.then(module => {
    const startWasm = performance.now();
    console.log(module.parse(content));
    const endWasm = performance.now();
    console.log(`It took ${endWasm - startWasm} to do this in WebAssembly`);
});