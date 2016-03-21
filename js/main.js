require('./css/main.css');

console.log('coucou');
console.log(module, module.hot);
if (module.hot) {
    console.log('ok');
    module.hot.accept();
}