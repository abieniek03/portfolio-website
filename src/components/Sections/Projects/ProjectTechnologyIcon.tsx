import { FC } from 'react';

import { BiLogoVuejs, BiLogoTailwindCss } from 'react-icons/bi';
import { FaNodeJs, FaBootstrap } from 'react-icons/fa';
import { SiNextdotjs, SiStyledcomponents } from 'react-icons/si';

const ProjectTechnologyIcon: FC<{ technology: string }> = ({ technology }) => {
	const styles: string = 'flex justify-center items-center h-7 px-2 py-0.5 text-white text-xs border-2 rounded-lg';
	return (
		<div
			className={`${styles} ${technology === 'Vue' && 'bg-green-600 border-green-800 dark:bg-green-950'}
      ${technology === 'Next.js' && 'bg-black border-neutral-900'}
      ${technology === 'Node.js' && 'bg-lime-700 border-lime-600'} ${
				technology === 'Bootstrap' && 'bg-violet-500 border-violet-700'
			}
      ${technology === 'tailwindcss' && 'bg-sky-400 border-sky-500'}
      ${technology === 'styled-components' && 'bg-pink-400 border-pink-300'}`}
		>
			<span className='mr-2'>
				{technology === 'Vue' && <BiLogoVuejs className='text-lg' />}
				{technology === 'Next.js' && <SiNextdotjs />}
				{technology === 'Node.js' && <FaNodeJs className='text-lg' />}
				{technology === 'Bootstrap' && <FaBootstrap className='text-lg' />}
				{technology === 'tailwindcss' && <BiLogoTailwindCss />}
				{technology === 'styled-components' && <SiStyledcomponents className='text-xl' />}
			</span>
			{technology}
		</div>
	);
};

export default ProjectTechnologyIcon;
