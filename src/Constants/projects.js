import CalculatorAppPhoto from '../Assets/Images/projects/calculator-app.png';
import SunnysideAgencyPhoto from '../Assets/Images/projects/sunnyside-agency.png';
import CardDetailsPhoto from '../Assets/Images/projects/card-details.png';
import AdviceGeneratorAppPhoto from '../Assets/Images/projects/advice-generator-app.png';
import PurpleCalendarPhoto from '../Assets/Images/projects/purple-calendar.png';
import TomatoTimePhoto from '../Assets/Images/projects/tomato-time.png';

export const PROJECTS = [
	{
		name: 'Calculator App',
		descriptionEN:
			'This is a calculator application, where you can perform basic operations. Also, you can change between three different themes.',
		descriptionES:
			'Esta es una aplicación de calculadora, donde puedes realizar operaciones básicas. Además, puedes cambiar entre tres aspectos diferentes.',
		tools: ['React', 'TypeScript', 'SCSS'],
		website: 'https://calculator-themes.vercel.app/',
		github: 'https://github.com/shifah123/calculator',
		img: CalculatorAppPhoto,
	},
	{
		name: 'Expense Tracker',
		descriptionEN:
			'This is a website for tracking expenses, where you can see and manage your spendings easily.',
		descriptionES:
			'Este es un sitio web para una agencia ficticia, donde puedes ver los servicios que ofrecen y su portafolio.',
		tools: ['React', 'TypeScript', 'SCSS'],
		website: 'https://expenses-beta.vercel.app/',
		github: 'https://github.com/shifah123/expenses',
		img: SunnysideAgencyPhoto,
	},
	{
		name: 'Chess',
		descriptionEN:
			'This is a chess app made using python and its library pygame with stockfish chess engine intergration.',
		descriptionES:
			'Este es un formulario de detalles de tarjeta, donde puedes ingresar tu información de tarjeta (no se guarda, solo se valida).',
		tools: ['Python', 'Pygame'],
		img: CardDetailsPhoto,
	},
	{
		name: 'Advice Generator App',
		descriptionEN: 'This application shows you random advices.',
		descriptionES: 'Esta aplicación te muestra consejos aleatorios.',
		tools: ['React', 'TypeScript', 'CSS'],
		website: 'https://advice-generator-random.vercel.app/',
		github: 'https://github.com/shifah123/advice-generator',
		img: AdviceGeneratorAppPhoto,
	},
	{
		name: 'Purple Calendar',
		descriptionEN:
			'This is a simple monthly calendar that allows you to navigate between months. Here you can also go to a specific month and year.',
		descriptionES:
			'Este es un simple calendario mensual que te permite navegar entre los meses. Aquí también puedes ir a un mes y año específico.',
		tools: ['HTML', 'CSS', 'JavaScript'],
		website: 'https://calander-purp.vercel.app/',
		github: 'https://github.com/shifah123/calander',
		img: PurpleCalendarPhoto,
	},
	{
		name: 'Tomato Time',
		descriptionEN:
			'With this application you can track your concentration time, using the Pomodoro technique, which can be customized to your needs.',
		descriptionES:
			'Con esta aplicación puedes hacer un seguimiento de tu tiempo de concentración, utilizando la técnica Pomodoro, que se puede personalizar según tus necesidades.',
		tools: ['HTML', 'CSS', 'JavaScript'],
		website: 'https://timer-app-tomato.vercel.app/',
		github: 'https://github.com/shifah123/timerApp',
		img: TomatoTimePhoto,
	},
];
