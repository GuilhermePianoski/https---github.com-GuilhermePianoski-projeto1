export default function tratarNumero(valor) {
    return Number(valor.replaceAll(',', '.'))
}