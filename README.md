# **Brain Games**

Brain Games es una colección de juegos de consola desarrollados con Node.js y JavaScript.

El proyecto contiene cinco juegos basados en diferentes desafíos de lógica y matemáticas:

**Brain Even** — determinar si un número es par.
**Brain Calc** — resolver operaciones matemáticas.
**Brain GCD** — encontrar el máximo común divisor.
**Brain Progression** — encontrar el número que falta en una progresión.
**Brain Prime** — determinar si un número es primo.

# **Requisitos mínimos**

**Para ejecutar el proyecto necesitas:**

Node.js 20 o superior.
npm 10 o superior.
Git.

**Comprueba las versiones instaladas:**

node --version
npm --version

# **Instalación**

**Clona el repositorio:**

git clone https://github.com/onbeatone/brain-games.git

**Entra al directorio:**

cd brain-games

**Instala las dependencias:**

npm install

**Instalación mediante npm link para utilizar los juegos como comandos del sistema:**

npm link

**Después puedes comprobar que el ejecutable está disponible:**

which brain-gcd


# **Brain Even**

Ejecuta:

brain-even

El juego solicita el nombre del jugador y presenta números. Debes responder:

yes

si el número es par, o:

no

si es impar.

[Ver demostración de Brain Even en Asciinema](https://asciinema.org/a/79O0clU1HrsRYkZj)


# **Brain Calc**

Ejecuta:

brain-calc

Debes calcular el resultado de la expresión mostrada.

[Ver demostración de Brain Calc en Asciinema](https://asciinema.org/a/Cu3Hiqf3z9uzpzcN)

# **Brain GCD**

Ejecuta:

brain-gcd

Debes encontrar el máximo común divisor de los dos números mostrados.

Ejemplo:

Question: 81 57
Your answer: 3
Correct!

[Ver demostración de Brain GCD en Asciinema](https://asciinema.org/a/aZmnokbVVeleS7HB)

# **Brain Progression**

Ejecuta:

brain-progression

Debes encontrar el número que falta en la progresión aritmética.

Ejemplo:

Question: 5 8 11 .. 17 20 23 26 29 32
Your answer: 14
Correct!

[Ver demostración de Brain Progression en Asciinema](https://asciinema.org/a/zQORhDgopD9qi3BG)

# **Brain Prime**

Ejecuta:

brain-prime

Debes responder:

yes

si el número es primo, o:

no

si no es primo.

[Ver demostración de Brain Prime en Asciinema](https://asciinema.org/a/Mvf9p1iniiNuGBVb)


La demostración muestra el inicio del juego, una respuesta correcta y una respuesta incorrecta.

Final exitoso

Para completar correctamente una partida, debes responder las tres rondas de manera correcta.

El juego finalizará mostrando un mensaje de felicitación.

Ejemplo:

Correct!

Congratulations, Karlos!
Final fallido

Si proporcionas una respuesta incorrecta, el juego muestra la respuesta correcta y finaliza la partida.

Ejemplo:

'10' is wrong answer ;(. Correct answer was '25'.
Let's try again, Karlos!

# **Tecnologías utilizadas**

Node.js
JavaScript
ECMAScript Modules (ESM)
npm
ESLint
readline-sync
Asciinema

# **SonarCloud**

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=onbeatone_brain-games\&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=onbeatone_brain-games)

[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=onbeatone_brain-games\&metric=bugs)](https://sonarcloud.io/summary/new_code?id=onbeatone_brain-games)

[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=onbeatone_brain-games\&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=onbeatone_brain-games)
