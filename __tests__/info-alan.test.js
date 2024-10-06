const path = require('path');
const fs = require('fs');

// Ruta a la carpeta 'data'
const infoJsonPath = path.join(__dirname, '../public/data/2042836/info.json');

describe('Verificación del archivo info.json en la carpeta 2042836', () => {
    it('debe existir el archivo info.json', () => {
        // Verifica si el archivo info.json existe
        expect(fs.existsSync(infoJsonPath)).toBe(true);
    });
});


describe('Validación de la estructura de info.json en la carpeta 2042836 - Estudiante: Alan Valderrama', () => {
    it('el archivo info.json debe tener la estructura correcta', () => {
        // Verifica si el archivo info.json existe antes de intentar leerlo
        if (fs.existsSync(infoJsonPath)) {
            const data = JSON.parse(fs.readFileSync(infoJsonPath, 'utf-8'));

            // Validaciones de la estructura
            expect(data).toHaveProperty('nombre');
            expect(data).toHaveProperty('edad');
            expect(data).toHaveProperty('carrera');
            expect(data).toHaveProperty('semestre');
            expect(data).toHaveProperty('gustos');
            expect(data).toHaveProperty('noGustos');
            expect(data).toHaveProperty('redesSociales');
            expect(data).toHaveProperty('foto');

            // Validaciones adicionales para asegurarse de que los valores sean del tipo esperado
            expect(typeof data.nombre).toBe('string');
            expect(typeof data.edad).toBe('number');
            expect(typeof data.carrera).toBe('string');
            expect(typeof data.semestre).toBe('number');
            expect(Array.isArray(data.gustos)).toBe(true);
            expect(Array.isArray(data.noGustos)).toBe(true);
            expect(Array.isArray(data.redesSociales)).toBe(true);
            expect(typeof data.foto).toBe('string');
        } else {
            throw new Error('El archivo info.json no existe en la ruta especificada');
        }
    });
});
