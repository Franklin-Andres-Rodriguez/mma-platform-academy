// 🥊 MMA Platform Academy - Mi Primera Aplicación
// Desarrollador: Franklin Rodriguez
// Fecha: 2025-07-06

console.log('🔥 ¡Bienvenido a MMA Platform Academy!');
console.log('👨‍💻 Desarrollador: Franklin Rodriguez');
console.log('🥋 Mi peleador favorito: Jon Jones');
console.log('📅 Inicio del viaje Full-Stack:', new Date().toLocaleDateString());
console.log('🎯 Meta: Convertirme en desarrollador Full-Stack élite');

// Tu primera función MMA
function calcularBMI(peso, altura) {
    const bmi = peso / (altura * altura);
    return Math.round(bmi * 100) / 100;
}

// Test con un peleador ejemplo
const connor = {
    nombre: 'Conor McGregor',
    peso: 70, // kg
    altura: 1.75 // metros
};

console.log(`BMI de ${connor.nombre}: ${calcularBMI(connor.peso, connor.altura)}`);
console.log('🚀 ¡Tu viaje hacia el Cinturón Negro Full-Stack ha comenzado!');
