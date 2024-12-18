import React from 'react';
import ProjectCard from './ProjectCard';
import {PROJECTS} from '../Constants/projects';
import {useLanguage} from '../Context/Language';
import {useNavigation} from '../Context/Navigation';

export default function Projects() {
	const {content} = useLanguage();
	const {references} = useNavigation();
	const {language} = content.projects;

	return (
		<section className='section-container projects-section' ref={references.projects}>
			<h2 className='section-title'>{content.projects.title}</h2>
			<ul className='projects-container'>
				{PROJECTS.map((p) => (
					<ProjectCard
						key={p.name}
						name={p.name}
						description={language === 'es' ? p.descriptionES : p.descriptionEN}
						tools={p.tools}
						website={p.website}
						github={p.github}
						img={p.img}
					/>
				))}
			</ul>
		</section>
	);
}
