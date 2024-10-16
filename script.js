/*
-Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla 
    las propiedades de la persona.
-Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), 
    que muestre por pantalla el resultado.
-Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), 
    que muestre por pantalla el resultado.
-Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía de clases.
*/ 

class Persona {
    constructor(nombre, edad, genero){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    obtDetalles(){
        console.log(`Nombre: ${this.nombre},Edad: ${this.edad},Genero: ${this.genero}`)
    }
}

class Estudiante extends Persona {
    constructor(curso, grupo){
        this.curso = curso;
        this.grupo = grupo;
    }
    registrar(){
        console.log(`Curso: ${this.curso},Grupo: ${this.grupo}`)
    }

}

class Profesor extends Persona {
    constructor(asignatura, nivel){
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    asignar(){
        console.log(`Asignatura: ${this.asignatura},Nivel: ${this.nivel}`)

    }
}



// ejercicio azteca/maya
class Warrior{
    constructor(life,power){
        this.life = life;
        this.power = power;
    }
}
class Atack extends Warrior{

}