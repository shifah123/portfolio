import React from 'react';
import {useNavigation} from './Context/Navigation';
import './Styles/main.scss';

// Sections
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

// Icons and Components
import Logo from './Assets/Images/components/Logo';
import BurgerButton from './Components/BurgerButton';

export default function App() {
	const {goTo} = useNavigation();

	return (
		<>
			<Header />
			<div className='sections'>
				<Home />
				<About />
				<Skills />
				<Experience />
				<Projects />
				<Contact />
				<Footer />
			</div>
			<div className='mobile-header'>
				<Logo className='logo' onClick={() => goTo('home')} />
				<BurgerButton />
			</div>
		</>
	);
}
