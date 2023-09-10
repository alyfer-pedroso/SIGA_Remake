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

// Usuarios fora do tcc
const luis_henrique3x4 = "../imgs/perfil/luishenrique3x4.jpeg";

class User {
    constructor({ fullname, emailINST, email, phone, rm, ra, pass, course, profileIMG }) {
        this.fullname = fullname;
        this.emailINST = emailINST;
        this.email = email;
        this.phone = phone;
        this.rm = rm;
        this.ra = ra;
        this.pass = pass;
        this.course = course;
        this.profileIMG = profileIMG;
    }
}

// Usuarios do TCC
let alyfer = new User({
    fullname: "Alyfer Leandro de Araujo Pedroso",
    emailINST: "alyfer.pedroso@etec.sp.gov.br",
    email: "alyferleandroap178@gmail.com",
    phone: "15996414866",
    rm: "20212480114",
    ra: "000105954137-3/SP",
    pass: "123",
    course: courses.ADM_OLD,
    profileIMG: alyfer3x4,
});

let emily = new User({
    fullname: "Emily Glinkovski",
    emailINST: "emily.glinkovski@etec.sp.gov.br",
    email: "emilyglinkovski@gmail.com",
    phone: "15996259887",
    rm: "20212480080",
    ra: "000105072580-3/SP",
    pass: "123",
    course: courses.ADM_OLD,
    profileIMG: emily3x4,
});

let erick = new User({
    fullname: "Erick Lopez de Queiroz",
    emailINST: "erick.queiroz2@etec.sp.gov.br",
    email: "erickqueiroz@gmail.com",
    phone: "15996947314",
    rm: "20212480044",
    ra: "000106727048-6/SP",
    pass: "123",
    course: courses.ADM_OLD,
    profileIMG: erick3x4,
});

let samuel = new User({
    fullname: "Samuel Antonio Paes Proença",
    emailINST: "samuel.proenca3@etec.sp.gov.br",
    email: "samuelproenca@gmail.com",
    phone: "11997717108",
    rm: "20212480132",
    ra: "000108565771-1/SP",
    pass: "123",
    course: courses.ADM_OLD,
    profileIMG: samuel3x4,
});

let pietra = new User({
    fullname: "Pietra Rosa Baião",
    emailINST: "pietra.baiao@etec.sp.gov.br",
    email: "piiiibaiao@gmail.com",
    phone: "15991317691",
    rm: "20212480069",
    ra: "000105960617-3/SP",
    pass: "123",
    course: courses.ADM_OLD,
    profileIMG: pietra3x4,
});

// Usuarios fora do TCC
let luis_henrique = new User({
    fullname: "Luis Henrique Santos de Jesus",
    emailINST: "luis.jesus18@etec.sp.gov.br",
    email: "luishenrique@gmail.com",
    phone: "15988070641",
    rm: "20212480140",
    ra: "000106996518-2/SP",
    pass: "157155",
    course: courses.ADM_OLD,
    profileIMG: luis_henrique3x4,
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
            // Usuarios do TCC
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

            // Usuarios fora do TCC
            case luis_henrique.rm: {
                if ($pass.value === luis_henrique.pass) {
                    if (localStorage.user) {
                        localStorage.clear();
                    }
                    localStorage.setItem("User", "luis_henrique");
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
        let $perfilIMG = document.querySelector(".dados__img img");
        let $perfilNAME = document.querySelector(".dados__p #fullname");
        let $perfilRM = document.querySelector(".dados__p #rm");
        let $perfilRA = document.querySelector(".dados__p #ra");
        let $emailINST = document.querySelector(".emailINST");
        let $emailM = document.querySelectorAll(".emailM");

        // Usuarios do TCC
        switch (localStorage.getItem("User")) {
            case "alyfer": {
                $perfilIMG.src = alyfer.profileIMG;
                $perfilNAME.innerHTML = alyfer.fullname;
                $perfilRM.innerHTML = alyfer.rm;
                $perfilRA.innerHTML = alyfer.ra;
                $emailINST.innerHTML = alyfer.emailINST;
                $emailM.forEach((el) => {
                    el.innerHTML = alyfer.email;
                });
                clearInterval(whichUser);
                break;
            }

            case "emily": {
                $perfilIMG.src = emily.profileIMG;
                $perfilNAME.innerHTML = emily.fullname;
                $perfilRM.innerHTML = emily.rm;
                $perfilRA.innerHTML = emily.ra;
                $emailINST.innerHTML = pietra.emailINST;
                $emailM.forEach((el) => {
                    el.innerHTML = emily.email;
                });
                clearInterval(whichUser);
                break;
            }

            case "erick": {
                $perfilIMG.src = erick.profileIMG;
                $perfilNAME.innerHTML = erick.fullname;
                $perfilRM.innerHTML = erick.rm;
                $perfilRA.innerHTML = erick.ra;
                $emailINST.innerHTML = erick.emailINST;
                $emailM.forEach((el) => {
                    el.innerHTML = erick.email;
                });
                clearInterval(whichUser);
                break;
            }

            case "samuel": {
                $perfilIMG.src = samuel.profileIMG;
                $perfilNAME.innerHTML = samuel.fullname;
                $perfilRM.innerHTML = samuel.rm;
                $perfilRA.innerHTML = samuel.ra;
                $emailINST.innerHTML = samuel.emailINST;
                $emailM.forEach((el) => {
                    el.innerHTML = samuel.email;
                });
                clearInterval(whichUser);
                break;
            }

            case "pietra": {
                $perfilIMG.src = pietra.profileIMG;
                $perfilNAME.innerHTML = pietra.fullname;
                $perfilRM.innerHTML = pietra.rm;
                $perfilRA.innerHTML = pietra.ra;
                $emailINST.innerHTML = pietra.emailINST;
                $emailM.forEach((el) => {
                    el.innerHTML = pietra.email;
                });
                clearInterval(whichUser);
                break;
            }

            // Usuarios do fora do TCC
            case "luis_henrique": {
                $perfilIMG.src = luis_henrique.profileIMG;
                $perfilNAME.innerHTML = luis_henrique.fullname;
                $perfilRM.innerHTML = luis_henrique.rm;
                $perfilRA.innerHTML = luis_henrique.ra;
                $emailINST.innerHTML = luis_henrique.emailINST;
                $emailM.forEach((el) => {
                    el.innerHTML = luis_henrique.email;
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
