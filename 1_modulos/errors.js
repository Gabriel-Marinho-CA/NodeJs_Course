const x = 10;

if (!Number.isInteger(x)) {
    throw new Error("O valor de x não e um numero inteiro");
}


try {
    x = 2;

} catch (e) {
    console.log(`Erro: ${e}`);
}

console.log("continuando o código");