const infoProjects = {
	technicalSkills: ['javascript', 'react', 'sass', 'css3', 'html5', 'gulp'],
	scrumSkills: ['agile', ' scrum', 'git', 'github', 'trello', 'slack'],
	softwareSkills: [
		'visual studio code',
		'zeplin',
		'photoshop',
		'illustrator',
	],
	projects: [
		{
			id: 1,
			name: 'Eventos de Eventbrite con página detalle',
			description:
				'Creación de una interfaz con un listado de eventos que se realizan en Madrid más su vista detalle. El objetivo principal del proyecto es poder explotar la API pública de Eventbrite.',
			urlGithub:
				'https://github.com/irene-gomez/fairfax-m4-eventbrite-eventos',
			urlDemo:
				'http://libertadpozos.github.io/fairfax-m4-eventbrite-eventos/#/',
			image: require('../img/projects/04-eventbrite.png'),
		},
		{
			id: 2,
			name: 'Buscador de personajes de Harry Potter',
			description:
				'SPA creada con React que recoge los datos de una API pública. También se usa react-router-dom para implementar una página de detalle.',
			urlGithub:
				'https://github.com/irene-gomez/f-m3-evaluacion-final-irenegf83',
			urlDemo:
				'https://irene-gomez.github.io/f-m3-evaluacion-final-irenegf83/#/',
			image: require('../img/projects/05-harry-potter-character.png'),
		},
		{
			id: 3,
			name: 'Rock & code',
			description:
				'Proyecto de web responsive. Orientado únicamente a la maquetación con HTML, CSS y SCSS.',
			urlGithub: 'https://github.com/irene-gomez/f-m1-rock-code',
			urlDemo: 'https://irene-gomez.github.io/f-m1-rock-code/',
			image: require('../img/projects/01-rock-code.png'),
		},
		{
			id: 4,
			name: 'Awesome Profile Cards',
			description:
				'Web realizada con JavaScript en el que puedes generar tu tarjeta de visita.',
			urlGithub: 'https://github.com/irene-gomez/f-m2-disena-tu-aventura',
			urlDemo: 'https://beta.adalab.es/f-m2-disena-tu-aventura/',
			image: require('../img/projects/02-disena-tu-aventura_02.png'),
		},
		{
			id: 5,
			name: 'Awesome Profile Cards «proyecto heredado»',
			description:
				'Refactorización de código heredado y migración de JavaScript a React.',
			urlGithub:
				'https://github.com/irene-gomez/fairfax-m3-masters-of-react',
			urlDemo:
				'http://libertadpozos.github.io/fairfax-m3-masters-of-react/#/',
			image: require('../img/projects/03-codigo-heredado.png'),
		},
		{
			id: 6,
			name: 'Pokédex',
			description:
				'SPA que muestra un listado de pokémon, los cuales son recogidos de una API pública',
			urlGithub:
				'https://github.com/irene-gomez/f-online-pokemon-irene-gomez',
			urlDemo:
				'https://irene-gomez.github.io/f-online-pokemon-irene-gomez/#/',
			image: require('../img/projects/06-pokedex.png'),
		},
	],
};

export default infoProjects;
