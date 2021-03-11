import LaunchIcon from '@material-ui/icons/Launch';

export const Descriptions = [
	// {
	// 	id: "sweet",
	// 	date: "Feb 2020",
	// 	service: "Brand Strategy | Personal Project",
	// 	desc: "Coming Soon"
	// },
	{
		id: "maps",
		date: <span>Nov 2018 <a href="https://neighborhood-map-eprishb.herokuapp.com/" target="_blank"><LaunchIcon/></a></span>,
		service: " ReactJS | Personal Project",
		desc: "Maps is a smoothie locator with a predetermined list of smoothie shop locations in certain cities. This intermediate project teaches the ins and outs of React and how to use APIs. The planning of the project required a layout of the components and knowing which components rely on one another. The next problem was connecting the API to the map and getting the location pointers to match the geographical location.",
		src: require("../../../assets/img/neighborhood-maps.png").default
	},
	{
		id: "reads",
		date: <span>Sep 2018 <a href="https://my-reads-eprishb.herokuapp.com/" target="_blank"><LaunchIcon/></a></span>,
		service: "ReactJS | Personal Project",
		desc: "My Reads allows a user to browse a digital library and add different books to their lists. The primary challenge was dynamically rendering content and working with query inputs.",
		src: require('../../../assets/img/my-reads.png').default
	},
	{
		id: "mem",
		date: <span>Aug 2018 <a href="https://esdhb0906.github.io/Project-Memory_Game/" target="_blank"><LaunchIcon/></a></span>,
		service: "Vanilla JS | Personal Project",
		desc: "We all scream for better memory. No one likes to experience brain fog. Have fun with this mentally stimulating and sweet memory game.",
		src: require('../../../assets/img/memory-game.png').default
	},
	{
		id: "gm305",
		date: "Sep 2013",
		service: "After Effects | General Motors Powertrain | Continental Services",
		desc: "Nothing beats having a cafe inside the workplace. Digital menus are a great way to display regular prices and great deals at the same time. This digital menu was created as a way to increase sales by offering the best deals up front.",
		src: require('./../../../assets/img/projects/GMGreeter_1.mp4').default,
	},
	{
		id: "bala305",
		date: "Nov 2013",
		service: "Continental Services",
		desc: "",
		src: require('./../../../assets/img/projects/Balaboosta.png').default,
	},
	{
		id: "ed305",
		date: "Sep 2013",
		service: "Educational Dining | Continental Services",
		desc: "Branded collateral pieces",
		src: [
			{
				id: 'ebroch',
				img: require('./../../../assets/img/projects/ed-dining-brochure.png').default,
			},
			{
				id: 'efold',
				img: require('./../../../assets/img/projects/ed-dining-pos.png').default,
			},
			{
				id: 'epos',
				img: require('./../../../assets/img/projects/ed-dining-pos.png').default,
			}
		]
	},
	{
		id: "cont305",
		date: <span>Feb 2014 <a href="https://www.youtube.com/watch?v=aVkRW2K-fRo&feature=youtu.be" target="_blank"><LaunchIcon/></a></span>,
		service: "Brand Showcase | Continental Serivces",
		desc: "",
		src: require('../../../assets/img/Cont-Client-305x320.png').default
	},
	{
		id: "luc305",
		date: "Jan 2014",
		service: "Digital Menu Board | Continental Services",
		desc: "",
		src: require('./../../../assets/img/projects/Lucca.mp4').default,
	},
	{
		id: "rof305",
		date: "Oct 2013",
		service: "Point of Sales | Continental Services",
		desc: "",
		src: require('./../../../assets/img/projects/rise-of-fall.png').default,
	},
	{
		id: "ap305",
		date: "May 2013",
		service: "Portfolio Magazine | Andre Morton | I AM Creative LLC",
		desc: "Ad a part of portfolio show, students have to showcase their work. With aspirations of being a creative director, I had the opportunity to be under his direction. I was given an idea of what the content and topics would be and we went out and took photos based off of those concepts. After that, we began strategizing the order and layout of the piece.",
		src: [
			{
				id: 'ap04',
				img: require('./../../../assets/img/projects/AP_04.jpg').default,
			},
			{
				id: 'ap05',
				img: require('./../../../assets/img/projects/AP_05.jpg').default,
			},
			{
				id: 'ap07',
				img: require('./../../../assets/img/projects/AP_07.jpg').default,
			},
			{
				id: 'ap08',
				img: require('./../../../assets/img/projects/AP_08.jpg').default,
			},
			{
				id: 'ap10',
				img: require('./../../../assets/img/projects/AP_10.jpg').default,
			},
			{
				id: 'ap11',
				img: require('./../../../assets/img/projects/AP_11.jpg').default,
			}
		]
	}
]