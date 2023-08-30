// Criando usuarios e seus dados
const courses = {
    ADM: "MTEC-PI-Administração",
    ADM_OLD: "ETIM-Administração",
    MODA: "MTEC-PI-Modelagem",
};

const alyfer3x4 = "../imgs/perfil/alyfer3x4.jpeg";
const emily3x4 = "../imgs/perfil/emily3x4.jpeg";
const erick3x4 = "../imgs/perfil/erick3x4.jpeg";
const samuel3x4 = "../imgs/perfil/samuel3x4.jpeg";
const pietra3x4 = "../imgs/perfil/pietra3x4.jpeg";

class User {
    constructor({ fullname, email, phone, rm, ra, pass, course, profileIMG }) {
        this.fullname = fullname;
        this.email = email;
        this.phone = phone;
        this.rm = rm;
        this.ra = ra;
        this.pass = pass;
        this.course = course;
        this.profileIMG = profileIMG;
    }
}

let alyfer = new User({
    fullname: "Alyfer Leandro de Araujo Pedroso",
    email: "alyfer.pedroso@etec.sp.gov.br",
    phone: "15996414866",
    rm: "20212480114",
    ra: "000105954137-3/SP",
    pass: "123",
    course: courses.ADM_OLD,
    profileIMG: alyfer3x4,
});

let emily = new User({
    fullname: "Emily Glinkovski",
    email: "emily.glinkovski@etec.sp.gov.br",
    phone: "15996259887",
    rm: "20212480080",
    ra: "000105072580-3/SP",
    pass: "123",
    course: courses.ADM_OLD,
    profileIMG: emily3x4,
});

let erick = new User({
    fullname: "Erick Lopez de Queiroz",
    email: "erick.queiroz2@etec.sp.gov.br",
    phone: "15996947314",
    rm: "20212480044",
    ra: "000106727048-6/SP",
    pass: "123",
    course: courses.ADM_OLD,
    profileIMG: erick3x4,
});

let samuel = new User({
    fullname: "Samuel Antonio Paes Proença",
    email: "samuel.proenca3@etec.sp.gov.br",
    phone: "11997717108",
    rm: "20212480132",
    ra: "000108565771-1/SP",
    pass: "123",
    course: courses.ADM_OLD,
    profileIMG: samuel3x4,
});

let pietra = new User({
    fullname: "Pietra Rosa Baião",
    email: "pietra.baiao@etec.sp.gov.br",
    phone: "15991317691",
    rm: "20212480069",
    ra: "000105960617-3/SP",
    pass: "123",
    course: courses.ADM_OLD,
    profileIMG: pietra3x4,
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
            case alyfer.rm: {
                if ($pass.value === alyfer.pass) {
                    if (localStorage.user) {
                        localStorage.clear();
                    }
                    localStorage.setItem("User", "alyfer");
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

            case emily.rm: {
                if ($pass.value === emily.pass) {
                    if (localStorage.user) {
                        localStorage.clear();
                    }
                    localStorage.setItem("User", "emily");
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

            case erick.rm: {
                if ($pass.value === erick.pass) {
                    if (localStorage.user) {
                        localStorage.clear();
                    }
                    localStorage.setItem("User", "erick");
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

            case samuel.rm: {
                if ($pass.value === samuel.pass) {
                    if (localStorage.user) {
                        localStorage.clear();
                    }
                    localStorage.setItem("User", "samuel");
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

            case pietra.rm: {
                if ($pass.value === pietra.pass) {
                    if (localStorage.user) {
                        localStorage.clear();
                    }
                    localStorage.setItem("User", "pietra");
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
                break;
            }
        }
    }

    $form.addEventListener("submit", areUser);
}

// Verificando qual usuário foi logado
const whichUser = setInterval(() => {
    if ($alunoDisplay) {
        let $perfilIMG = document.querySelector(".dados__img img");
        let $perfilNAME = document.querySelector(".dados__p #fullname");
        let $perfilRM = document.querySelector(".dados__p #rm");
        let $perfilRA = document.querySelector(".dados__p #ra");

        switch (localStorage.getItem("User")) {
            case "alyfer": {
                $perfilIMG.src = alyfer.profileIMG;
                $perfilNAME.innerHTML = alyfer.fullname;
                $perfilRM.innerHTML = alyfer.rm;
                $perfilRA.innerHTML = alyfer.ra;
                clearInterval(whichUser);
                break;
            }

            case "emily": {
                $perfilIMG.src = emily.profileIMG;
                $perfilNAME.innerHTML = emily.fullname;
                $perfilRM.innerHTML = emily.rm;
                $perfilRA.innerHTML = emily.ra;
                clearInterval(whichUser);
                break;
            }

            case "erick": {
                $perfilIMG.src = erick.profileIMG;
                $perfilNAME.innerHTML = erick.fullname;
                $perfilRM.innerHTML = erick.rm;
                $perfilRA.innerHTML = erick.ra;
                clearInterval(whichUser);
                break;
            }

            case "samuel": {
                $perfilIMG.src = samuel.profileIMG;
                $perfilNAME.innerHTML = samuel.fullname;
                $perfilRM.innerHTML = samuel.rm;
                $perfilRA.innerHTML = samuel.ra;
                clearInterval(whichUser);
                break;
            }

            case "pietra": {
                $perfilIMG.src = pietra.profileIMG;
                $perfilNAME.innerHTML = pietra.fullname;
                $perfilRM.innerHTML = pietra.rm;
                $perfilRA.innerHTML = pietra.ra;
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
