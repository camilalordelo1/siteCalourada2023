var cardObject = [
    {
        title: 'CDI - Comissão Discente de Informática',
        image: "../img/cdi.png",
        describe: "A CDI é a comissão responsável por integrar, incentivar, dar apoio e suporte aos alunos de T.A.D.S e S.I. Buscamos construir um canal de comunicação permanente entre alunos e professores, de forma que você possa ter suas demandas ouvidas pela Faculdade. Também, organizamos uma série de eventos, tendo vínculos com empresas e a comunidade de tecnologia.",
        site: "https://linktr.ee/cdiunicamp",
        instagram: "https://linktr.ee/cdiunicamp",
        facebook: "https://linktr.ee/cdiunicamp",
        email: "https://linktr.ee/cdiunicamp",
    },
    {
        title: 'CDI - Comissão Discente de Informática',
        image: "../img/cdi.png",
        describe: "A CDI é a comissão responsável por integrar, incentivar, dar apoio e suporte aos alunos de T.A.D.S e S.I. Buscamos construir um canal de comunicação permanente entre alunos e professores, de forma que você possa ter suas demandas ouvidas pela Faculdade. Também, organizamos uma série de eventos, tendo vínculos com empresas e a comunidade de tecnologia.A CDI é a comissão responsável por integrar, incentivar, dar apoio e suporte aos alunos de T.A.D.S e S.I. Buscamos construir um canal de comunicação permanente entre alunos e professores, de forma que você possa ter suas demandas ouvidas pela Faculdade. Também, organizamos uma série de eventos, tendo vínculos com empresas e a comunidade de tecnologia.A CDI é a comissão responsável por integrar, incentivar, dar apoio e suporte aos alunos de T.A.D.S e S.I. Buscamos construir um canal de comunicação permanente entre alunos e professores, de forma que você possa ter suas demandas ouvidas pela Faculdade. Também, organizamos uma série de eventos, tendo vínculos com empresas e a comunidade de tecnologia.A CDI é a comissão responsável por integrar, incentivar, dar apoio e suporte aos alunos de T.A.D.S e S.I. Buscamos construir um canal de comunicação permanente entre alunos e professores, de forma que você possa ter suas demandas ouvidas pela Faculdade. Também, organizamos uma série de eventos, tendo vínculos com empresas e a comunidade de tecnologia.A CDI é a comissão responsável por integrar, incentivar, dar apoio e suporte aos alunos de T.A.D.S e S.I. Buscamos construir um canal de comunicação permanente entre alunos e professores, de forma que você possa ter suas demandas ouvidas pela Faculdade. Também, organizamos uma série de eventos, tendo vínculos com empresas e a comunidade de tecnologia.",
        site: "https://linktr.ee/cdiunicamp",
        instagram: "https://linktr.ee/cdiunicamp",
        facebook: "https://linktr.ee/cdiunicamp",
        email: "https://linktr.ee/cdiunicamp",
    },
]

var card = document.getElementById("cardOrgs");

// CARDS
for (var i = 0; i <= cardObject.length; i++) {
    card.innerHTML += 
    `<div class="card mx-auto mt-5 cardStyle" style="width: 18rem; ">
        <div class="column-img-social">
            <div>
                <img src=${cardObject[i].image} class="mt-3 card-img-top" alt="..." />
            </div>
            <div class="buttons-card"> 
                <button style="width: auto;" type="button" class="btn-card btn mx-auto mt-1"> <a href="${cardObject[i].site}" target="_blank" style="text-decoration: none; color: white;"> <i class="fa-solid fa-globe"></i> </a></button>

                <button style="width: auto;" type="button" class="btn-card btn mx-auto mt-1"> <a href="${cardObject[i].site}" target="_blank" style="text-decoration: none; color: white;"> <i class="fa-brands fa-square-facebook"></i></a></button>

                <button style="width: auto;" type="button" class="btn-card btn mx-auto mt-1"> <a href="${cardObject[i].site}" target="_blank" style="text-decoration: none; color: white;"><i class="fa-solid fa-envelope"></i></a></button>

                <button style="width: auto;" type="button" class="btn-card btn mx-auto mt-1"> <a href="${cardObject[i].site}" target="_blank" style="text-decoration: none; color: white;"><i class="fa-brands fa-instagram"></i></a></button>
            </div>   
        </div>
        
        <div class="card-body">
            <h3 class="card-title text-center"> ${cardObject[i].title} </h3>
            <p class="card-text text-center"> ${cardObject[i].describe}</p>
        </div>

    </div>
    `
};