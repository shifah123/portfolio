import React, {useState} from 'react';
import Logo from '../Assets/Images/components/Logo';
import SocialGitHub from '../Assets/Images/social/github.svg';
import SocialLinkedIn from '../Assets/Images/social/linkedin.svg';
import {useLanguage} from '../Context/Language';
import {useNavigation} from '../Context/Navigation';

export default function Header() {
	const [displaySelector, setDisplaySelector] = useState('none');
	const {content, switchToLanguage} = useLanguage();
	const {showHeader, closeHeader, goTo} = useNavigation();

	// Displays the language selector
	const showSelector = () => setDisplaySelector('flex');

	// Hides the language selector
	const hideSelector = () => setDisplaySelector('none');

	// Changes the language
	const setLanguage = (language) => {
		switchToLanguage(language);
		hideSelector();
		closeHeader();
	};

	const sections = ['about', 'skills', 'experience', 'projects', 'contact'];

	return (
		<header className={showHeader ? 'showed-header' : 'hidden-header'}>
			<Logo className='header-logo' onClick={() => goTo('home')} />
			<nav className='header-sections'>
				{sections.map((sectionName) => (
					<p key={sectionName} onClick={() => goTo(sectionName)}>
						{content.header[sectionName]}
					</p>
				))}
				{/* <div
					className='choose-language'
					onMouseEnter={showSelector}
					onMouseLeave={hideSelector}>
					<button>
						<p>{content.header.language}</p>
					</button>
					<div className='language-selector' style={{display: displaySelector}}>
						<button onClick={() => setLanguage('en')}>
							<p>English</p>
						</button>
						<button onClick={() => setLanguage('es')}>
							<p>Español</p>
						</button>
					</div>
				</div> */}
			</nav>
			<nav className='social-links'>
				<a href='https://github.com/shifah123' target='_blank' rel='noreferrer'>
					<img alt='Link to GitHub profile' src={SocialGitHub} />
				</a>
				<a
					href='https://www.linkedin.com/in/shifa-hussain-5a19b3267/'
					target='_blank'
					rel='noreferrer'>
					<img alt='Link to LinkedIn profile' src={SocialLinkedIn} />
				</a>
			</nav>
		</header>
	);
}
