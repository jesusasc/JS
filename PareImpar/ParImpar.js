function IsEven(value) {
    if (value%2==0) {
        alert("El numero introducido es par");

    } else {
        alert("El numero introducido es impar");
    }
}

function IsInteger(str) {
    bt_calculate.disabled = !(/^[0-9]{1,10}$/.test(str) && str <= Number.MAX_SAFE_INTEGER);
}