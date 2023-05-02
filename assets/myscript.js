/*
Utilizziamo i dati forniti per creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
*/

/*
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
*/ 

const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        img: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg'
    }
];

// Seleziono gli elementi nel DOM
const eleList = document.querySelector('.container');

/*
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto.
*/
/*
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
*/

for(let i = 0; i < team.length; i++){
    let member = team[i];
    console.log(`${i}. ${member.name}, ${member.role}, ${member.img}`);
    const stringMember = `${member.name}, ${member.role}, ${member.img}`;
    eleList.innerHTML += renderCard(member)


    // console.log('Membro ' + i);
    // let stringMember = '';
    // for(let key in member){
    //     stringMember += member[key] + ' - ';
    // }if(stringMember){
    //     stringMember = stringMember.slice(0, -3);
    // }
    // console.log(stringMember); 
    // Questo modo è per iterare con il ciclo FOR IN
};
		
function renderCard(member) {
	return `
    	<div class="card">
			<img src="img/${member.img}" alt="${member.name}">
			<div class="contents">
				<h2>${member.name}</h2>
				<p>${member.role}</p>
			</div>
		</div>`;
}

		
		