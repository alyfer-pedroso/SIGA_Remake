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
    constructor(fullname, email, phone, rm, ra, pass, course, profileIMG) {
        this.fullname;
        this.email;
        this.phone;
        this.rm;
        this.ra;
        this.pass;
        this.course;
        this.profileIMG;
    }
}

createProfileImage = (source) => {
    image = new Image();
    image.src = source;
    return image;
};

const alyferPicture = createProfileImage(alyfer3x4);
const emilyPicture = createProfileImage(emily3x4);
const erickPicture = createProfileImage(erick3x4);
const samuelPicture = createProfileImage(samuel3x4);
const pietraPicture = createProfileImage(pietra3x4);

const alyfer = new User({
    fullname: "Alyfer Leandro de Araujo Pedroso",
    email: "alyfer.pedroso@etec.sp.gov.br",
    phone: "15996414866",
    rm: "20212480114",
    ra: "000105954137-3/SP",
    pass: "123",
    course: courses.ADM_OLD,
    profileIMG: alyferPicture,
});

const emily = new User({
    fullname: "Emily Glinkovski",
    email: "emily.glinkovski@etec.sp.gov.br",
    phone: "15996259887",
    rm: "20212480080",
    ra: "000105072580-3/SP",
    pass: "123",
    course: courses.ADM_OLD,
    profileIMG: emilyPicture,
});

const erick = new User({
    fullname: "Erick Lopez de Queiroz",
    email: "erick.queiroz2@etec.sp.gov.br",
    phone: "15996947314",
    rm: "20212480044",
    ra: "000106727048-6/SP",
    pass: "123",
    course: courses.ADM_OLD,
    profileIMG: erickPicture,
});

const samuel = new User({
    fullname: "Samuel Antonio Paes Proença",
    email: "samuel.proenca3@etec.sp.gov.br",
    phone: "11997717108",
    rm: "20212480132",
    ra: "000108565771-1/SP",
    pass: "123",
    course: courses.ADM_OLD,
    profileIMG: samuelPicture,
});

const pietra = new User({
    fullname: "Pietra Rosa Baião",
    email: "pietra.baiao@etec.sp.gov.br",
    phone: "15991317691",
    rm: "20212480069",
    ra: "000105960617-3/SP",
    pass: "123",
    course: courses.ADM_OLD,
    profileIMG: pietraPicture,
});

//Verificando para login
const $login = document.querySelector(".login");

if ($login) {
    const $form = document.getElementById("loginForm");
    const $submitBTN = document.querySelector(".loginBTN");

    $form.addEventListener("submit", (e) => {
        e.preventDefault();

        let $user = document.getElementById("user");
        let $pass = document.getElementById("pass");

        if ($user.value == "1") {
            console.log(alyfer.rm);
            // open("../aluno.html");
        }
    });
}
