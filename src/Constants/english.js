import CV_EN from '../Assets/Documents/Shifa-Hussain-CV.pdf';

export const contentEN = {
	header: {
		about: 'About',
		skills: 'Skills',
		experience: 'Experience',
		projects: 'Projects',
		contact: 'Contact',
		language: 'English',
	},
	home: {
		hi: "Hi, I'm",
		job: 'Web Developer',
		button: 'Contact me',
	},
	about: {
		title: 'About',
		paragraph1: (
			<>
				Hi! I'm Shifa, a Web Developer passionate about turning ideas into{' '}
				<span className='hightlight'>interactive realities </span>. With a focus on
				user-centric design and clean code, I strive to create exceptional digital
				experiences.
			</>
		),
		paragraph2: (
			<>
				My approach is based on the constant search for challenges that drive my{' '}
				<span className='hightlight'>professional growth</span> and the delivery of
				solutions that combine efficiency and elegance. I'm committed to{' '}
				<span className='hightlight'>continuous improvement</span>, effective collaboration
				and creating digital experiences that are useful to people. I'm excited to continue
				to expand my skills and contribute to the world of web development.
			</>
		),
		cvTitle: 'Download CV',
		cvFile: CV_EN,
	},
	skills: {
		title: 'Skills',
		languages: 'Languages',
		libraries: 'Libraries & Frameworks',
		tools: 'Tools & Platforms',
	},
	experience: {
		title: 'Experience',
		language: 'en',
	},
	projects: {
		title: 'Projects',
		language: 'en',
		frontendMentor: 'More on Frontend Mentor',
	},
	contact: {
		title: 'Contact',
		paragraph:
			"I'm looking for new opportunities to contribute to the industry and grow as a developer. If you have a project you want me to participate in or if you have any questions let me know! I'll do my best to answer you.",
		button: 'Say hello',
	},
};
