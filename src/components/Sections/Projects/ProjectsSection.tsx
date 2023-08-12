import { FC } from 'react';
import SectionTitle from '../Elements/SectionTitle';
import ProjectItem from './ProjectItem';

import { IProjectItem } from './ProjectItem';

const ProjectsSection: FC = () => {
	const projects: IProjectItem[] = [
		{
			link: 'https://github.com/abieniek03/language-school',
			title: 'Szkoła Języków Obcych',
			description: 'Strona internetowa pozwalająca zapisać się do szkoły językowej przez formularz.',
			technologies: ['Vue', 'Node.js', 'Bootstrap'],
		},
		{
			link: 'https://github.com/abieniek03/go-form',
			title: 'Go Form',
			description:
				'Landing page zachęcający do aktywności fizycznej. Po wypełnieniu formularza użytkownik otrzymuje wynik swojego BMI, a także przykładowy plan treningowy z możliwością pobrania w formacie PDF.',
			technologies: ['Vue', 'Node.js', 'tailwindcss'],
		},
		{
			link: 'https://github.com/abieniek03/better-performance',
			title: 'Better Performance',
			description: 'Landing page zachęcający do współpracy z zespołem trenerskim. Możliwość kontaktu przez formularz.',
			technologies: ['Next.js', 'styled-components'],
		},
		{
			link: 'https://github.com/abieniek03/barbershop-portal',
			title: 'Barbershop Portal',
			description: 'Portal pozwalający zapisać się na wizytę do barbera.',
			technologies: ['Next.js', 'tailwindcss'],
		},
	];

	return (
		<section>
			<SectionTitle label='Projekty' />
			<div className='mt-4'>
				{projects.map((el, index) => (
					<ProjectItem
						key={index}
						link={el.link}
						title={el.title}
						description={el.description}
						technologies={el.technologies}
					/>
				))}
			</div>
		</section>
	);
};

export default ProjectsSection;
