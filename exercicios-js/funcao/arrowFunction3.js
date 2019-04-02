let comparaComThis = function(param) {
    console.log(this === param);
}

comparaComThis(global); // o objeto global é global no contexto do Node
// o objeto windows no navegador é o global
const obj = {};
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);

let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global);
comparaComThisArrow(module.exports);