// Criando usuarios e seus dados
const courses = {
    ADM: "MTEC-PI-Administração",
    ADM_OLD: "ETIM-Administração",
    MODA: "MTEC-PI-Modelagem",
    BANCA: "ETEC-Professor",
    VISITANTE: "VISITANTE",
};

class User {
    constructor({
        fullname,
        emailINST,
        email,
        phone,
        phoneT,
        phone2,
        phoneT2,
        rm,
        ra,
        pass,
        course,
        profileIMG,
        street,
        neighborhood,
        cep,
    }) {
        this.fullname = fullname;
        this.emailINST = emailINST;
        this.email = email;
        this.phoneNumber = {
            phoneN: phone,
            phoneType: phoneT,
        };
        this.phoneNumber2 = {
            phoneN: phone2,
            phoneType: phoneT2,
        };
        this.rm = rm;
        this.ra = ra;
        this.pass = pass;
        this.course = course;
        this.profileIMG = profileIMG;
        this.street = street;
        this.neighborhood = neighborhood;
        this.cep = cep;
    }
}

// Usuarios da Banca
const visitante = new User({
    fullname: "Visitante",
    emailINST: "visitante@etec.sp.gov.br",
    email: "visitante@gmail.com",
    phone: "(00)12345-6789",
    phoneT: "(Telefone Celular)",
    phone2: "(00)12345-6789",
    phoneT2: "(Telefone Residencial)",
    rm: "20212480000",
    ra: "010101010101-0/SP",
    pass: "123456",
    course: courses.VISITANTE,
    profileIMG: visitante3x4,
    street: "RUA ETEC DE CERQUILHO, 123 - CASA",
    neighborhood: "ETEC DE CERQUILHO - Cerquilho/SP",
    cep: "18520-000",
});

//Verificando para login
const $loginDisplay = document.getElementById("loginBody");
const $alunoDisplay = document.getElementById("alunoBody");

if ($loginDisplay) {
    const $form = document.getElementById("loginForm");
    let $checkRemember = document.getElementById("remember");
    let $user = document.getElementById("user");
    let $pass = document.getElementById("pass");

    if (localStorage.remember == "true") {
        open("../aluno.html", "_self");
    }

    function areUser(e) {
        e.preventDefault();
        switch ($user.value) {
            // Usuarios da Banca
            case visitante.rm: {
                if ($pass.value === visitante.pass) {
                    if (localStorage.user) {
                        localStorage.clear();
                    }
                    localStorage.setItem("User", "visitante");
                    if ($checkRemember.checked == true) {
                        localStorage.setItem("remember", "true");
                    } else {
                        localStorage.setItem("remember", "false");
                    }
                    open("../aluno.html", "_self");
                } else {
                    alert("Senha incorreta!");
                    $pass.value = "";
                }
                break;
            }

            default: {
                alert("Usuario não encontrado!");
                $user.value = "";
                $pass.value = "";
                break;
            }
        }
    }

    $form.addEventListener("submit", areUser);
}

// Verificando qual usuário foi logado
const whichUser = setInterval(() => {
    if ($alunoDisplay) {
        const $perfilIMG = document.querySelectorAll(".dados__img img");
        const $perfilNAME = document.querySelectorAll(".dados__p .fullname");
        const $perfilRM = document.querySelectorAll(".dados__p .rm");
        const $perfilRA = document.querySelectorAll(".dados__p .ra");
        const $emailINST = document.querySelectorAll(".emailINST");
        const $emailM = document.querySelectorAll(".emailM");
        const $perfilRua = document.querySelectorAll(".rua");
        const $perfilBairro = document.querySelectorAll(".bairro");
        const $perfilCep = document.querySelectorAll(".cep");
        const $telefone1 = document.querySelectorAll(".telefone1");
        const $telefone2 = document.querySelectorAll(".telefone2");
        const $teleTipo1 = document.querySelectorAll(".tipoTelefone1");
        const $teleTipo2 = document.querySelectorAll(".tipoTelefone2");
        const $courses = document.querySelectorAll(".perfil_cursos");

        // Usuarios do TCC
        switch (localStorage.getItem("User")) {
            // Usuarios da Banca
            case "visitante": {
                $perfilIMG.forEach((el) => {
                    el.src = visitante.profileIMG;
                });
                $perfilNAME.forEach((el) => {
                    el.innerHTML = visitante.fullname;
                });
                $perfilRM.forEach((el) => {
                    el.innerHTML = visitante.rm;
                });
                $perfilRA.forEach((el) => {
                    el.innerHTML = visitante.ra;
                });
                $emailINST.forEach((el) => {
                    el.innerHTML = visitante.emailINST;
                });
                $emailM.forEach((el) => {
                    el.innerHTML = visitante.email;
                });
                $perfilRua.forEach((el) => {
                    el.innerHTML = visitante.street;
                });
                $perfilBairro.forEach((el) => {
                    el.innerHTML = visitante.neighborhood;
                });
                $perfilCep.forEach((el) => {
                    el.innerHTML = visitante.cep;
                });
                $telefone1.forEach((el) => {
                    el.innerHTML = visitante.phoneNumber.phoneN;
                });
                $telefone2.forEach((el) => {
                    el.innerHTML = visitante.phoneNumber2.phoneN;
                });
                $teleTipo1.forEach((el) => {
                    el.innerHTML = visitante.phoneNumber.phoneType;
                });
                $teleTipo2.forEach((el) => {
                    el.innerHTML = visitante.phoneNumber2.phoneType;
                });
                $courses.forEach((el) => {
                    el.options[1].innerHTML = visitante.course;
                });
                clearInterval(whichUser);
                break;
            }

            default: {
                localStorage.clear();
                open("../index.html", "_self");
            }
        }
    } else {
        return;
    }
});
