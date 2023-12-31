// Criando usuarios e seus dados
const courses = {
    ADM: "MTEC-PI-Administração",
    ADM_OLD: "ETIM-Administração",
    MODA: "MTEC-PI-Modelagem",
    BANCA: "ETEC-Professor",
    VISITANTE: "VISITANTE",
};

const alyfer3x4 = "../imgs/perfil/alyfer3x4.jpeg";
const emily3x4 = "../imgs/perfil/emily3x4.jpeg";
const erick3x4 = "../imgs/perfil/erick3x4.jpeg";
const samuel3x4 = "../imgs/perfil/samuel3x4.jpeg";
const pietra3x4 = "../imgs/perfil/pietra3x4.jpeg";

// Professores - Banca
const ricardo3x4 = "../imgs/perfil/ricardo3x4.jpeg";
const anacleto3x4 = "../imgs/perfil/anacleto3x4.jpeg";
const marilia3x4 = "../imgs/perfil/marilia3x4.jpeg";
const visitante3x4 = "../imgs/perfil/visitante3x4.jpeg";

// Usuarios fora do tcc
const luis_henrique3x4 = "../imgs/perfil/luishenrique3x4.jpeg";
const guilherme_bretas3x4 = "../imgs/perfil/guilhermeBretas3x4.jpeg";
const gustavo_campos3x4 = "../imgs/perfil/gustavoCampos3x4.jpeg";
const luisGDCM3x4 = "../imgs/perfil/luisGDCM3x4.jpeg";

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

// Usuarios do TCC
const alyfer = new User({
    fullname: "Alyfer Leandro de Araujo Pedroso",
    emailINST: "alyfer.pedroso@etec.sp.gov.br",
    email: "alyferleandroap178@gmail.com",
    phone: "(15)99641-4866",
    phoneT: "(Telefone Celular)",
    phone2: "(15)99689-1314",
    phoneT2: "(Telefone Celular)",
    rm: "20212480114",
    ra: "000105954137-3/SP",
    pass: "Alyfer17182424#",
    course: courses.ADM_OLD,
    profileIMG: alyfer3x4,
    street: "ANDORINHA, 203 - CASA",
    neighborhood: "NOVA CERQUILHO - Cerquilho/SP",
    cep: "18520-000",
});

const emily = new User({
    fullname: "Emily Glinkovski",
    emailINST: "emily.glinkovski@etec.sp.gov.br",
    email: "emilyglinkovski@gmail.com",
    phone: "(15)99625-9887",
    phoneT: "(Telefone Celular)",
    phone2: "(15)99761-7981",
    phoneT2: "(Telefone Celular)",
    rm: "20212480080",
    ra: "000105072580-3/SP",
    pass: "#Eg091005",
    course: courses.ADM_OLD,
    profileIMG: emily3x4,
    street: "23 DE MAIO, 285",
    neighborhood: "NOSSA SENHORA DE LOURDES - Cerquilho/SP",
    cep: "18520-000",
});

const erick = new User({
    fullname: "Erick Lopez de Queiroz",
    emailINST: "erick.queiroz2@etec.sp.gov.br",
    email: "cris.tapete@gmail.com",
    phone: "(15)99762-7269",
    phoneT: "(Telefone Celular)",
    phone2: "(15)99708-9114",
    phoneT2: "(Telefone Celular)",
    rm: "20212480044",
    ra: "000106727048-6/SP",
    pass: "W4bbaL4bba",
    course: courses.ADM_OLD,
    profileIMG: erick3x4,
    street: "PRACA LUIZ URSO, 253 - CASA",
    neighborhood: "JARDIM ALIANCA II - Cerquilho/SP",
    cep: "18520-000",
});

const samuel = new User({
    fullname: "Samuel Antonio Paes Proença",
    emailINST: "samuel.proenca3@etec.sp.gov.br",
    email: "samyuerupuroensa@hotmail.com",
    phone: "(11)99771-7108",
    phoneT: "(Telefone Celular)",
    phone2: "(15)99859-9224",
    phoneT2: "(Telefone Celular)",
    rm: "20212480132",
    ra: "000108565771-1/SP",
    pass: "Samu3110",
    course: courses.ADM_OLD,
    profileIMG: samuel3x4,
    street: "DA FAZENDINHA, 401",
    neighborhood: "CENTRO - Cerquilho/SP",
    cep: "18520-000",
});

const pietra = new User({
    fullname: "Pietra Rosa Baião",
    emailINST: "pietra.baiao@etec.sp.gov.br",
    email: "piiiibaiao@gmail.com",
    phone: "(15)99131-7691",
    phoneT: "(Telefone Celular)",
    phone2: "(15)99138-5086",
    phoneT2: "(Telefone Residencial)",
    rm: "20212480069",
    ra: "000105960617-3/SP",
    pass: "Cerquilho10#",
    course: courses.ADM_OLD,
    profileIMG: pietra3x4,
    street: "Pedro Flora, 185 - CASA",
    neighborhood: "SÃO FRANCISCO - Cerquilho/SP",
    cep: "185270876",
});

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

const carlos_anacleto = new User({
    fullname: "Antônio Carlos Anacleto",
    emailINST: "antonio.anacleto@etec.sp.gov.br",
    email: "antonio.anacleto@gmail.com",
    phone: "(00)12345-6789",
    phoneT: "(Telefone Celular)",
    phone2: "(00)12345-6789",
    phoneT2: "(Telefone Residencial)",
    rm: "20212480001",
    ra: "010101010101-0/SP",
    pass: "123456",
    course: courses.BANCA,
    profileIMG: anacleto3x4,
    street: "RUA ETEC DE CERQUILHO, 123 - CASA",
    neighborhood: "ETEC DE CERQUILHO - Cerquilho/SP",
    cep: "18520-000",
});

const ricardo = new User({
    fullname: "Ricardo de Oliveira Faria",
    emailINST: "ricardo.faria16@etec.sp.gov.br",
    email: "ricardo.faria16@gmail.com",
    phone: "(00)12345-6789",
    phoneT: "(Telefone Celular)",
    phone2: "(00)12345-6789",
    phoneT2: "(Telefone Residencial)",
    rm: "20212480002",
    ra: "010101010101-0/SP",
    pass: "123456",
    course: courses.BANCA,
    profileIMG: ricardo3x4,
    street: "RUA ETEC DE CERQUILHO, 123 - CASA",
    neighborhood: "ETEC DE CERQUILHO - Cerquilho/SP",
    cep: "18520-000",
});

const marilia = new User({
    fullname: "Marília Fogaça Armbruster",
    emailINST: "marilia.fogaca01@etec.sp.gov.br",
    email: "marilia.fogaca01@gmail.com",
    phone: "(00)12345-6789",
    phoneT: "(Telefone Celular)",
    phone2: "(00)12345-6789",
    phoneT2: "(Telefone Residencial)",
    rm: "20212480003",
    ra: "010101010101-0/SP",
    pass: "123456",
    course: courses.BANCA,
    profileIMG: marilia3x4,
    street: "RUA ETEC DE CERQUILHO, 123 - CASA",
    neighborhood: "ETEC DE CERQUILHO - Cerquilho/SP",
    cep: "18520-000",
});

// Usuarios fora do TCC
const luis_henrique = new User({
    fullname: "Luis Henrique Santos de Jesus",
    emailINST: "luis.jesus18@etec.sp.gov.br",
    email: "luishenriquesantosdejesus02@gmail.com",
    phone: "(15)98807-0641",
    phoneT: "(Telefone Celular)",
    phone2: "(15)99790-8465",
    phoneT2: "(Telefone Celular)",
    rm: "20212480140",
    ra: "000106996518-2/SP",
    pass: "157155",
    course: courses.ADM_OLD,
    profileIMG: luis_henrique3x4,
    street: "GERALDO PIRES DA SILVA, 310 - PERTO DA LINHA DE TREM",
    neighborhood: "RESIDENCIAL ALIANCA - Cerquilho/SP",
    cep: "18520-000",
});

const guilherme_bretas = new User({
    fullname: "Guilherme Bretas Cardoso",
    emailINST: "guilherme.cardoso74@etec.sp.gov.br",
    email: "gui.bretas11@gmail.com",
    phone: "(15)99676-8982",
    phoneT: "(Telefone Celular)",
    phone2: "Nenhum",
    phoneT2: "---",
    rm: "20212480020",
    ra: "000107764039-0/SP",
    pass: "guilhermebretas",
    course: courses.ADM_OLD,
    profileIMG: guilherme_bretas3x4,
    street: "PARANA, 830 - CASA",
    neighborhood: "PARQUE ALVORADA - Cerquilho/SP",
    cep: "18520-000",
});

const gustavo_campos = new User({
    fullname: "Gustavo da Silva Campos",
    emailINST: "gustavo.campos54@etec.sp.gov.br",
    email: "gustacampos14@gmail.com",
    phone: "(15)3384-2444",
    phoneT: "(Telefone Residencial)",
    phone2: "(15)98138-0516",
    phoneT2: "(Telefone Residencial)",
    rm: "20212480076",
    ra: "000106771476-5/SP",
    pass: "cinema250",
    course: courses.ADM_OLD,
    profileIMG: gustavo_campos3x4,
    street: "PARAIBA, 15 - A",
    neighborhood: "PARQUE ALVORADA - Cerquilho/SP",
    cep: "18520-000",
});

const luisGDCM = new User({
    fullname: "Luis Gustavo da Cruz Medeiros",
    emailINST: "luiz.medeiros14@etec.sp.gov.br",
    email: "gustavo200545@gmail.com",
    phone: "(15)98830-6304",
    phoneT: "(Telefone Celular)",
    phone2: "(15)99638-0494",
    phoneT2: "(Telefone Celular)",
    rm: "20212480051",
    ra: "000109650165-X/SP",
    pass: "Lgdcm450SIGA",
    course: courses.ADM_OLD,
    profileIMG: luisGDCM3x4,
    street: "ANTONIO BET., 29 - CASA",
    neighborhood: "SAO FRANCISCO 2 - Cerquilho/SP",
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

            case carlos_anacleto.rm: {
                if ($pass.value === carlos_anacleto.pass) {
                    if (localStorage.user) {
                        localStorage.clear();
                    }
                    localStorage.setItem("User", "carlos_anacleto");
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

            case ricardo.rm: {
                if ($pass.value === ricardo.pass) {
                    if (localStorage.user) {
                        localStorage.clear();
                    }
                    localStorage.setItem("User", "ricardo");
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

            case marilia.rm: {
                if ($pass.value === marilia.pass) {
                    if (localStorage.user) {
                        localStorage.clear();
                    }
                    localStorage.setItem("User", "marilia");
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

            case guilherme_bretas.rm: {
                if ($pass.value === guilherme_bretas.pass) {
                    if (localStorage.user) {
                        localStorage.clear();
                    }
                    localStorage.setItem("User", "guilherme_bretas");
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

            case gustavo_campos.rm: {
                if ($pass.value === gustavo_campos.pass) {
                    if (localStorage.user) {
                        localStorage.clear();
                    }
                    localStorage.setItem("User", "gustavo_campos");
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

            case luisGDCM.rm: {
                if ($pass.value === luisGDCM.pass) {
                    if (localStorage.user) {
                        localStorage.clear();
                    }
                    localStorage.setItem("User", "luisGDCM");
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
            case "alyfer": {
                $perfilIMG.forEach((el) => {
                    el.src = alyfer.profileIMG;
                });
                $perfilNAME.forEach((el) => {
                    el.innerHTML = alyfer.fullname;
                });
                $perfilRM.forEach((el) => {
                    el.innerHTML = alyfer.rm;
                });
                $perfilRA.forEach((el) => {
                    el.innerHTML = alyfer.ra;
                });
                $emailINST.forEach((el) => {
                    el.innerHTML = alyfer.emailINST;
                });
                $emailM.forEach((el) => {
                    el.innerHTML = alyfer.email;
                });
                $perfilRua.forEach((el) => {
                    el.innerHTML = alyfer.street;
                });
                $perfilBairro.forEach((el) => {
                    el.innerHTML = alyfer.neighborhood;
                });
                $perfilCep.forEach((el) => {
                    el.innerHTML = alyfer.cep;
                });
                $telefone1.forEach((el) => {
                    el.innerHTML = alyfer.phoneNumber.phoneN;
                });
                $telefone2.forEach((el) => {
                    el.innerHTML = alyfer.phoneNumber2.phoneN;
                });
                $teleTipo1.forEach((el) => {
                    el.innerHTML = alyfer.phoneNumber.phoneType;
                });
                $teleTipo2.forEach((el) => {
                    el.innerHTML = alyfer.phoneNumber2.phoneType;
                });
                clearInterval(whichUser);
                break;
            }

            case "emily": {
                $perfilIMG.forEach((el) => {
                    el.src = emily.profileIMG;
                });
                $perfilNAME.forEach((el) => {
                    el.innerHTML = emily.fullname;
                });
                $perfilRM.forEach((el) => {
                    el.innerHTML = emily.rm;
                });
                $perfilRA.forEach((el) => {
                    el.innerHTML = emily.ra;
                });
                $emailINST.forEach((el) => {
                    el.innerHTML = emily.emailINST;
                });
                $emailM.forEach((el) => {
                    el.innerHTML = emily.email;
                });
                $perfilRua.forEach((el) => {
                    el.innerHTML = emily.street;
                });
                $perfilBairro.forEach((el) => {
                    el.innerHTML = emily.neighborhood;
                });
                $perfilCep.forEach((el) => {
                    el.innerHTML = emily.cep;
                });
                $telefone1.forEach((el) => {
                    el.innerHTML = emily.phoneNumber.phoneN;
                });
                $telefone2.forEach((el) => {
                    el.innerHTML = emily.phoneNumber2.phoneN;
                });
                $teleTipo1.forEach((el) => {
                    el.innerHTML = emily.phoneNumber.phoneType;
                });
                $teleTipo2.forEach((el) => {
                    el.innerHTML = emily.phoneNumber2.phoneType;
                });
                clearInterval(whichUser);
                break;
            }

            case "erick": {
                $perfilIMG.forEach((el) => {
                    el.src = erick.profileIMG;
                });
                $perfilNAME.forEach((el) => {
                    el.innerHTML = erick.fullname;
                });
                $perfilRM.forEach((el) => {
                    el.innerHTML = erick.rm;
                });
                $perfilRA.forEach((el) => {
                    el.innerHTML = erick.ra;
                });
                $emailINST.forEach((el) => {
                    el.innerHTML = erick.emailINST;
                });
                $emailM.forEach((el) => {
                    el.innerHTML = erick.email;
                });
                $perfilRua.forEach((el) => {
                    el.innerHTML = erick.street;
                });
                $perfilBairro.forEach((el) => {
                    el.innerHTML = erick.neighborhood;
                });
                $perfilCep.forEach((el) => {
                    el.innerHTML = erick.cep;
                });
                $telefone1.forEach((el) => {
                    el.innerHTML = erick.phoneNumber.phoneN;
                });
                $telefone2.forEach((el) => {
                    el.innerHTML = erick.phoneNumber2.phoneN;
                });
                $teleTipo1.forEach((el) => {
                    el.innerHTML = erick.phoneNumber.phoneType;
                });
                $teleTipo2.forEach((el) => {
                    el.innerHTML = erick.phoneNumber2.phoneType;
                });
                clearInterval(whichUser);
                break;
            }

            case "samuel": {
                $perfilIMG.forEach((el) => {
                    el.src = samuel.profileIMG;
                });
                $perfilNAME.forEach((el) => {
                    el.innerHTML = samuel.fullname;
                });
                $perfilRM.forEach((el) => {
                    el.innerHTML = samuel.rm;
                });
                $perfilRA.forEach((el) => {
                    el.innerHTML = samuel.ra;
                });
                $emailINST.forEach((el) => {
                    el.innerHTML = samuel.emailINST;
                });
                $emailM.forEach((el) => {
                    el.innerHTML = samuel.email;
                });
                $perfilRua.forEach((el) => {
                    el.innerHTML = samuel.street;
                });
                $perfilBairro.forEach((el) => {
                    el.innerHTML = samuel.neighborhood;
                });
                $perfilCep.forEach((el) => {
                    el.innerHTML = samuel.cep;
                });
                $telefone1.forEach((el) => {
                    el.innerHTML = samuel.phoneNumber.phoneN;
                });
                $telefone2.forEach((el) => {
                    el.innerHTML = samuel.phoneNumber2.phoneN;
                });
                $teleTipo1.forEach((el) => {
                    el.innerHTML = samuel.phoneNumber.phoneType;
                });
                $teleTipo2.forEach((el) => {
                    el.innerHTML = samuel.phoneNumber2.phoneType;
                });
                clearInterval(whichUser);
                break;
            }

            case "pietra": {
                $perfilIMG.forEach((el) => {
                    el.src = pietra.profileIMG;
                });
                $perfilNAME.forEach((el) => {
                    el.innerHTML = pietra.fullname;
                });
                $perfilRM.forEach((el) => {
                    el.innerHTML = pietra.rm;
                });
                $perfilRA.forEach((el) => {
                    el.innerHTML = pietra.ra;
                });
                $emailINST.forEach((el) => {
                    el.innerHTML = pietra.emailINST;
                });
                $emailM.forEach((el) => {
                    el.innerHTML = pietra.email;
                });
                $perfilRua.forEach((el) => {
                    el.innerHTML = pietra.street;
                });
                $perfilBairro.forEach((el) => {
                    el.innerHTML = pietra.neighborhood;
                });
                $perfilCep.forEach((el) => {
                    el.innerHTML = pietra.cep;
                });
                $telefone1.forEach((el) => {
                    el.innerHTML = pietra.phoneNumber.phoneN;
                });
                $telefone2.forEach((el) => {
                    el.innerHTML = pietra.phoneNumber2.phoneN;
                });
                $teleTipo1.forEach((el) => {
                    el.innerHTML = pietra.phoneNumber.phoneType;
                });
                $teleTipo2.forEach((el) => {
                    el.innerHTML = pietra.phoneNumber2.phoneType;
                });
                clearInterval(whichUser);
                break;
            }

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

            case "carlos_anacleto": {
                $perfilIMG.forEach((el) => {
                    el.src = carlos_anacleto.profileIMG;
                });
                $perfilNAME.forEach((el) => {
                    el.innerHTML = carlos_anacleto.fullname;
                });
                $perfilRM.forEach((el) => {
                    el.innerHTML = carlos_anacleto.rm;
                });
                $perfilRA.forEach((el) => {
                    el.innerHTML = carlos_anacleto.ra;
                });
                $emailINST.forEach((el) => {
                    el.innerHTML = carlos_anacleto.emailINST;
                });
                $emailM.forEach((el) => {
                    el.innerHTML = carlos_anacleto.email;
                });
                $perfilRua.forEach((el) => {
                    el.innerHTML = carlos_anacleto.street;
                });
                $perfilBairro.forEach((el) => {
                    el.innerHTML = carlos_anacleto.neighborhood;
                });
                $perfilCep.forEach((el) => {
                    el.innerHTML = carlos_anacleto.cep;
                });
                $telefone1.forEach((el) => {
                    el.innerHTML = carlos_anacleto.phoneNumber.phoneN;
                });
                $telefone2.forEach((el) => {
                    el.innerHTML = carlos_anacleto.phoneNumber2.phoneN;
                });
                $teleTipo1.forEach((el) => {
                    el.innerHTML = carlos_anacleto.phoneNumber.phoneType;
                });
                $teleTipo2.forEach((el) => {
                    el.innerHTML = carlos_anacleto.phoneNumber2.phoneType;
                });
                $courses.forEach((el) => {
                    el.options[1].innerHTML = carlos_anacleto.course;
                });
                clearInterval(whichUser);
                break;
            }

            case "ricardo": {
                $perfilIMG.forEach((el) => {
                    el.src = ricardo.profileIMG;
                });
                $perfilNAME.forEach((el) => {
                    el.innerHTML = ricardo.fullname;
                });
                $perfilRM.forEach((el) => {
                    el.innerHTML = ricardo.rm;
                });
                $perfilRA.forEach((el) => {
                    el.innerHTML = ricardo.ra;
                });
                $emailINST.forEach((el) => {
                    el.innerHTML = ricardo.emailINST;
                });
                $emailM.forEach((el) => {
                    el.innerHTML = ricardo.email;
                });
                $perfilRua.forEach((el) => {
                    el.innerHTML = ricardo.street;
                });
                $perfilBairro.forEach((el) => {
                    el.innerHTML = ricardo.neighborhood;
                });
                $perfilCep.forEach((el) => {
                    el.innerHTML = ricardo.cep;
                });
                $telefone1.forEach((el) => {
                    el.innerHTML = ricardo.phoneNumber.phoneN;
                });
                $telefone2.forEach((el) => {
                    el.innerHTML = ricardo.phoneNumber2.phoneN;
                });
                $teleTipo1.forEach((el) => {
                    el.innerHTML = ricardo.phoneNumber.phoneType;
                });
                $teleTipo2.forEach((el) => {
                    el.innerHTML = ricardo.phoneNumber2.phoneType;
                });
                $courses.forEach((el) => {
                    el.options[1].innerHTML = ricardo.course;
                });
                clearInterval(whichUser);
                break;
            }

            case "marilia": {
                $perfilIMG.forEach((el) => {
                    el.src = marilia.profileIMG;
                });
                $perfilNAME.forEach((el) => {
                    el.innerHTML = marilia.fullname;
                });
                $perfilRM.forEach((el) => {
                    el.innerHTML = marilia.rm;
                });
                $perfilRA.forEach((el) => {
                    el.innerHTML = marilia.ra;
                });
                $emailINST.forEach((el) => {
                    el.innerHTML = marilia.emailINST;
                });
                $emailM.forEach((el) => {
                    el.innerHTML = marilia.email;
                });
                $perfilRua.forEach((el) => {
                    el.innerHTML = marilia.street;
                });
                $perfilBairro.forEach((el) => {
                    el.innerHTML = marilia.neighborhood;
                });
                $perfilCep.forEach((el) => {
                    el.innerHTML = marilia.cep;
                });
                $telefone1.forEach((el) => {
                    el.innerHTML = marilia.phoneNumber.phoneN;
                });
                $telefone2.forEach((el) => {
                    el.innerHTML = marilia.phoneNumber2.phoneN;
                });
                $teleTipo1.forEach((el) => {
                    el.innerHTML = marilia.phoneNumber.phoneType;
                });
                $teleTipo2.forEach((el) => {
                    el.innerHTML = marilia.phoneNumber2.phoneType;
                });
                $courses.forEach((el) => {
                    el.options[1].innerHTML = marilia.course;
                });
                clearInterval(whichUser);
                break;
            }

            // Usuarios do fora do TCC
            case "luis_henrique": {
                $perfilIMG.forEach((el) => {
                    el.src = luis_henrique.profileIMG;
                });
                $perfilNAME.forEach((el) => {
                    el.innerHTML = luis_henrique.fullname;
                });
                $perfilRM.forEach((el) => {
                    el.innerHTML = luis_henrique.rm;
                });
                $perfilRA.forEach((el) => {
                    el.innerHTML = luis_henrique.ra;
                });
                $emailINST.forEach((el) => {
                    el.innerHTML = luis_henrique.emailINST;
                });
                $emailM.forEach((el) => {
                    el.innerHTML = luis_henrique.email;
                });
                $perfilRua.forEach((el) => {
                    el.innerHTML = luis_henrique.street;
                });
                $perfilBairro.forEach((el) => {
                    el.innerHTML = luis_henrique.neighborhood;
                });
                $perfilCep.forEach((el) => {
                    el.innerHTML = luis_henrique.cep;
                });
                $telefone1.forEach((el) => {
                    el.innerHTML = luis_henrique.phoneNumber.phoneN;
                });
                $telefone2.forEach((el) => {
                    el.innerHTML = luis_henrique.phoneNumber2.phoneN;
                });
                $teleTipo1.forEach((el) => {
                    el.innerHTML = luis_henrique.phoneNumber.phoneType;
                });
                $teleTipo2.forEach((el) => {
                    el.innerHTML = luis_henrique.phoneNumber2.phoneType;
                });
                clearInterval(whichUser);
                break;
            }

            case "guilherme_bretas": {
                $perfilIMG.forEach((el) => {
                    el.src = guilherme_bretas.profileIMG;
                });
                $perfilNAME.forEach((el) => {
                    el.innerHTML = guilherme_bretas.fullname;
                });
                $perfilRM.forEach((el) => {
                    el.innerHTML = guilherme_bretas.rm;
                });
                $perfilRA.forEach((el) => {
                    el.innerHTML = guilherme_bretas.ra;
                });
                $emailINST.forEach((el) => {
                    el.innerHTML = guilherme_bretas.emailINST;
                });
                $emailM.forEach((el) => {
                    el.innerHTML = guilherme_bretas.email;
                });
                $perfilRua.forEach((el) => {
                    el.innerHTML = guilherme_bretas.street;
                });
                $perfilBairro.forEach((el) => {
                    el.innerHTML = guilherme_bretas.neighborhood;
                });
                $perfilCep.forEach((el) => {
                    el.innerHTML = guilherme_bretas.cep;
                });
                $telefone1.forEach((el) => {
                    el.innerHTML = guilherme_bretas.phoneNumber.phoneN;
                });
                $telefone2.forEach((el) => {
                    el.innerHTML = guilherme_bretas.phoneNumber2.phoneN;
                });
                $teleTipo1.forEach((el) => {
                    el.innerHTML = guilherme_bretas.phoneNumber.phoneType;
                });
                $teleTipo2.forEach((el) => {
                    el.innerHTML = guilherme_bretas.phoneNumber2.phoneType;
                });
                clearInterval(whichUser);
                break;
            }

            case "gustavo_campos": {
                $perfilIMG.forEach((el) => {
                    el.src = gustavo_campos.profileIMG;
                });
                $perfilNAME.forEach((el) => {
                    el.innerHTML = gustavo_campos.fullname;
                });
                $perfilRM.forEach((el) => {
                    el.innerHTML = gustavo_campos.rm;
                });
                $perfilRA.forEach((el) => {
                    el.innerHTML = gustavo_campos.ra;
                });
                $emailINST.forEach((el) => {
                    el.innerHTML = gustavo_campos.emailINST;
                });
                $emailM.forEach((el) => {
                    el.innerHTML = gustavo_campos.email;
                });
                $perfilRua.forEach((el) => {
                    el.innerHTML = gustavo_campos.street;
                });
                $perfilBairro.forEach((el) => {
                    el.innerHTML = gustavo_campos.neighborhood;
                });
                $perfilCep.forEach((el) => {
                    el.innerHTML = gustavo_campos.cep;
                });
                $telefone1.forEach((el) => {
                    el.innerHTML = gustavo_campos.phoneNumber.phoneN;
                });
                $telefone2.forEach((el) => {
                    el.innerHTML = gustavo_campos.phoneNumber2.phoneN;
                });
                $teleTipo1.forEach((el) => {
                    el.innerHTML = gustavo_campos.phoneNumber.phoneType;
                });
                $teleTipo2.forEach((el) => {
                    el.innerHTML = gustavo_campos.phoneNumber2.phoneType;
                });
                clearInterval(whichUser);
                break;
            }

            case "luisGDCM": {
                $perfilIMG.forEach((el) => {
                    el.src = luisGDCM.profileIMG;
                });
                $perfilNAME.forEach((el) => {
                    el.innerHTML = luisGDCM.fullname;
                });
                $perfilRM.forEach((el) => {
                    el.innerHTML = luisGDCM.rm;
                });
                $perfilRA.forEach((el) => {
                    el.innerHTML = luisGDCM.ra;
                });
                $emailINST.forEach((el) => {
                    el.innerHTML = luisGDCM.emailINST;
                });
                $emailM.forEach((el) => {
                    el.innerHTML = luisGDCM.email;
                });
                $perfilRua.forEach((el) => {
                    el.innerHTML = luisGDCM.street;
                });
                $perfilBairro.forEach((el) => {
                    el.innerHTML = luisGDCM.neighborhood;
                });
                $perfilCep.forEach((el) => {
                    el.innerHTML = luisGDCM.cep;
                });
                $telefone1.forEach((el) => {
                    el.innerHTML = luisGDCM.phoneNumber.phoneN;
                });
                $telefone2.forEach((el) => {
                    el.innerHTML = luisGDCM.phoneNumber2.phoneN;
                });
                $teleTipo1.forEach((el) => {
                    el.innerHTML = luisGDCM.phoneNumber.phoneType;
                });
                $teleTipo2.forEach((el) => {
                    el.innerHTML = luisGDCM.phoneNumber2.phoneType;
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
