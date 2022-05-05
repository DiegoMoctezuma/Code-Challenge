# Visual Thinking API

*Autor: @DiegoMoctezuma*

**App creada para LaunchX 2022 🇲🇽** 👨🏻‍🚀

## Dependencias 🛠️

- <a href="https://jestjs.io"><img src="https://img.shields.io/badge/Jest-Pruebas%20de%20unidad%20%E2%9C%94-green?style=for-the-badge"></a>
- <a href="https://eslint.org/"><img src="https://img.shields.io/badge/ESLint-Mejora%20y%20arreglo%20del%20formato%20%F0%9F%93%84-blue?style=for-the-badge"></a>
- <a href="https://expressjs.com/"><img src="https://img.shields.io/badge/Express-Creaci%C3%B3n%20del%20servidor%20%F0%9F%8C%90-green?style=for-the-badge"></a>

## Diseño ⚙

_Uso de `Reader` para leer en formato JSON:_

```javascript
class Reader {
    static readJsonFile(path) {
        const rawdata = fs.readFileSync(path);
        return JSON.parse(rawdata);
    }
}
```

_Uso de `EstudentsService` para filtrar la lista de estudiantes:_

```javascript
class EstudentsService {
    static getHaveCertification(students) {
        const haveCertication = students.filter(
            (student) => student.haveCertification === true
        );

        return haveCertication.map((student) => student.email);
    }
    static getCredits(students) {
        const haveCredits = students.filter((student) => student.credits >= 500);
        return haveCredits;
    }
}
```

_Uso de `StudentController` para unir los métodos de `Reader` y `EstudentsService`, utilizandolos en los endpoints:_

```javascript
class StudentController {
    static getStudents() {
        return Reader.readJsonFile("data.json");
    }
    static getEmailsCertification() {
        const students = Reader.readJsonFile("data.json");
        return EstudentsService.getHaveCertification(students);
    }
    static getCredits() {
        const students = Reader.readJsonFile("data.json");
        return EstudentsService.getCredits(students);
    }
}
```

_`Endpoints` usados en el server:_

```javascript
app.get("/", (require, response) => {
    response.send("Visual Thinking API");
});

app.get("/v1/students", (require, response) => {
    const students = StudentController.getStudents();
    response.json(students);
});

app.get("/v1/students/emails", (require, response) => {
    const students = StudentController.getEmailsCertification();
    response.json(students);
});

app.get("/v1/students/credits", (require, response) => {
    const students = StudentController.getCredits();
    response.json(students);
});
```

![image](https://lh6.googleusercontent.com/I94vz5_ixDJZQCtv75P7vD3_2hau7UhOE07wg8sXxQQamduzp7YCY5BEX_OSK3xGK2ezKC_3zl50opm9KRrt9GIcsJoWYYP6T8GndL_2iTiFL2odmjawed4hEnfEA6dMAw=w1280)

## ¿Cómo consultar la API?

- _Clone el repositorio_
- _Instale las dependencias con `npm install`_
- _Vaya a `http://localhost:3000/`:_

![image](https://lh4.googleusercontent.com/XafwmAYaWiQXgXUndC3EXDn5FeYealzxk_k9v4S2S9NxEVPUJNqBoS4_qM8TaTyd3uwj2TY_cBiFUWghmf2qtyR8OfRu9nIF4_usx0ayDoMaEt0qemd19xj90HdNENlj9Q=w1280)

- _Al consultar `http://localhost:3000/v1/students` le dará la lista de los estudiantes de Visual Partner-Ship:_

![image](https://lh4.googleusercontent.com/7nZCUcqsxb3rLgz_F6sQqroML38k91Lr6JepSDl91FFRt8m08636LjACr8uyhMdomSfcVqQiwftwxWH_wqanid5NSyHzyDOmSZ3fkGUkuTlUby97LfDIymEsDx0njG5g5g=w1280)

- _Al consultar `http://localhost:3000/v1/students/emails` le dará la lista de los estudiantes que esten certificados:_

![image](https://lh3.googleusercontent.com/wGGf0GiF_CHiDTQdyaFECLKxh-MXPuwcHICGut1k0eYLfkzJzIl06bV23pOYcgc98FZLeg_0cM3JK48Zb5YeGaxZfJDTlrsUkIC9CazVyw9JkZJIxewmejgaX12fx6dsYw=w1280)

- _Al consultar `http://localhost:3000/v1/students/credits` le dará la lista de los estudiantes que tengan más de 500 creditos:_

![image](https://lh6.googleusercontent.com/-3cdHMd3z1fb1LiCl8Ow1t_sieA1F-mruaNFg1DTTEWr8XW9yKcEtgGmOk3xTFPq3Jp3sBRlAhx8dpesxFnxhRXK9n9xrj64jRFSz_gD-OXDlUBcWZYE7lnDOd-pPTtYQw=w1280)
