function demostracionIf(valor, control) {
    if (valor < control) {
        console.log("IF: valor es menor que control")
    }
    
    if (valor > control) {
        console.log("IF: valor es mayor que control")
    }
    
    if (control < valor) {
        console.log("IF: control es menor que valor")
    }
    
    if (control > valor) {
        console.log("IF: control es mayor que valor")
    }
}

function demostracionElseIf(valor, control) {
    if (valor < control) {
        console.log("ELSEIF: valor es menor que control")
    } else {
        console.log("ELSEIF: control es mayor O IGUAL que valor")
    }

    if (valor <= control) {
        console.log("ELSEIF: valor es menor O IGUAL que control")
    } else {
        console.log("ELSEIF: control es mayor que valor")
    }
}

var valor = 5
var control = 10

demostracionIf(valor, control)
demostracionElseIf(valor, control)
