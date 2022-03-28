const nivelActual = getLevelingLevel(Usuario)
var rango = 'Aspirante'

if (nivelActual == 10) {
    rango = '*Aprendiz*'

} else if (nivelActual == 20) {
    rango = '*Novato*'

} else if (nivelActual == 30) {
    rango = '*Promesa*'
    
} else if (nivelActual == 30) {
    rango = '*Profesional*'
} else if (nivelActual == 100) {
    rango = '*Veterano*'
} else if (nivelActual == 150) {
    rango = '*Elite*'
} else if (nivelActual > 200) {
    rango = '*Elite Global🗡*'
}
