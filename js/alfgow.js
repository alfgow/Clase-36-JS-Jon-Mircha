console.warn(`Ejercicios de la clase 36`);

// Programa una función que obtenga un numero aleatorio entre 501 y 600

console.log(
	`%c Programa una función que obtenga un numero aleatorio entre 501 y 600, haremos la siguiente funcion:
  
  
  `,
	"color:pink"
);

const aleatorio = () => console.log(Math.round(Math.random() * 100) + 500);

aleatorio();

//Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro
const capicua = (num = 0) => {
	if (!num) return console.warn(`No Ingresaste un numero`);
	if (typeof num !== "number")
		return console.error(`El dato ${num} no es de tipo numero`);
	num = num.toString();
	let volteado = num.split("").reverse().join("");
	return num === volteado
		? console.info(`${num} si es capicua`)
		: console.info(`${num} no es capicua`);
};

capicua(222);

// Programar una funcion que calcule el factorial
const factorial = (num = undefined) => {
	if (!num === undefined)
		return console.warn(`No se ingreso ningun numero`);
	if (typeof num !== "number")
		return console.error(`El dato ${num} no es de tipo numero`);
	if (num === 0) return console.error(`El dato no puede ser cero`);
	if (num < 0) return console.error(`El dato no puede ser negativo`);

	let factorial = 1;
	for (let i = num; i > 1; i--) {
		factorial *= i;
	}

	return console.log(
		`%c El factorial de ${num} es ${factorial}`,
		"color:green"
	);
};

factorial(10);
