//==========DECLARACION DE VARIABLES Y CONSTANTES===========
let sumaPrecios = 0
let seleccionJuego = 0
let continuarCompra = 0
const JUEGO_1 = 40990
const JUEGO_2 = 40990
const JUEGO_3 = 42990
const JUEGO_4 = 43990
const JUEGO_5 = 43990
const IVA = 0.19
const DESCUENTO = 0.10

//===============FUNCIONES======================
// se utilizaron funciones normales y de flecha para abarcar todo lo aprendido

const calcularIva = (subtotal) => subtotal * IVA;
const mostrarPrecioFinal = (precio) => alert("VALOR TOTAL DE SU COMPRA: " + precio);
const calculaDescuento = (subtotal) => subtotal * DESCUENTO;
const resta = (valorUno, valorDos) => valorUno - valorDos;

function sumarPrecios(valorUno, ValorDos) {
    let subTotal = valorUno + ValorDos;
    return subTotal
}


function carritoDecompra() {
    while (seleccionJuego != 6 || continuarCompra < 2) {
        if (seleccionJuego === 0) {

            seleccionJuego = parseInt(
                prompt(
                    "Aproveche la oferta 10% de descuento en todos los juegos, el descuento se aplica al final de la compra. \n\n Que juego desea comprar: \n 1.Mario Party $40,990 \n 2.Pokemon Leyendas: Arceus $40,990 \n 3.Super Smash Bros Ultimate $42,990 \n 4.Mario Kart 8 Deluxe $43,990\n 5.Mario Tennis Aces $43,990 \n 6.Salir "
                )
            );
            switch (seleccionJuego) {
                case 1:
                    sumaPrecios = sumarPrecios(sumaPrecios, JUEGO_1);
                    break;
                case 2:
                    sumaPrecios = sumarPrecios(sumaPrecios, JUEGO_2);
                    break;
                case 3:
                    sumaPrecios = sumarPrecios(sumaPrecios, JUEGO_3);
                    break;
                case 4:
                    sumaPrecios = sumarPrecios(sumaPrecios, JUEGO_4);
                    break;
                case 5:
                    sumaPrecios = sumarPrecios(sumaPrecios, JUEGO_5);
                    break;
            }


        } else if (seleccionJuego > 0 && seleccionJuego != 6) {
            continuarCompra = parseInt(
                prompt(
                    "deseas agregar otro juego: \n 1.SI \n 2.NO"
                )
            );

        }

        if (continuarCompra === 1) {

            seleccionJuego = parseInt(
                prompt(
                    "Aproveche la oferta 10% de descuento en todos los juegos, el descuento se aplica al final. \n\n Agregue otro juego: \n 1.Mario Party $40,990 \n 2.Pokemon Leyendas: Arceus $40,990 \n 3.Super Smash Bros Ultimate $42,990 \n 4.Mario Kart 8 Deluxe $43,990\n 5.Mario Tennis Aces $43,990 \n 6.Salir "
                )
            );
            switch (seleccionJuego) {
                case 1:
                    sumaPrecios = sumarPrecios(sumaPrecios, JUEGO_1);
                    break;
                case 2:
                    sumaPrecios = sumarPrecios(sumaPrecios, JUEGO_2);
                    break;
                case 3:
                    sumaPrecios = sumarPrecios(sumaPrecios, JUEGO_3);
                    break;
                case 4:
                    sumaPrecios = sumarPrecios(sumaPrecios, JUEGO_4);
                    break;
                case 5:
                    sumaPrecios = sumarPrecios(sumaPrecios, JUEGO_5);
                    break;

            }
            continuarCompra = 0
        } else if (continuarCompra === 2) {
            seleccionJuego = 6
        }
    }

}

carritoDecompra();


const VALOR_IVA = calcularIva(sumaPrecios); // toma el valor neto de la sumatoria de los juegos y calcula el iva
const PRECIO_CON_IVA = sumarPrecios(sumaPrecios, VALOR_IVA); // le suma el valor del iva al valor neto de los juegos
let descuento = calculaDescuento(PRECIO_CON_IVA); // calcula el descuento equivalente al 10% del valor neto mas el iva
const PRECIO_FINAL = resta(PRECIO_CON_IVA, descuento); // realiza un descuento del 10% sobre el valor del precio mas iva


mostrarPrecioFinal(PRECIO_FINAL); //muestra el valor total a pagar



