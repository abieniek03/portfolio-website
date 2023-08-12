import { FC } from 'react';
import ProjectTechnologyIcon from './ProjectTechnologyIcon';

export interface IProjectItem {
	link: string;
	title: string;
	description: string;
	technologies: string[];
}

const ProjectItem: FC<IProjectItem> = ({ link, title, description, technologies }) => {
	return (
		<a
			href={link}
			target='_blank'
			className='block mt-2 mb-4 p-4 bg-light hover:bg-light-hover border-light-border  dark:bg-dark dark:hover:bg-dark-hover dark:border-dark-border border-2 focus:outline-none focus:bg-light-hover dark:focus:outline-none dark:focus:bg-dark-hover'
		>
			<h4 className='font-extrabold text-xl'>{title}</h4>
			<p className='text-sm'>{description}</p>

			<div className='flex flex-wrap gap-4'>
				{technologies.map((el, index) => (
					<ProjectTechnologyIcon technology={el} key={index} />
				))}
			</div>
		</a>
	);
};

export default ProjectItem;
