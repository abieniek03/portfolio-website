import { FC } from 'react';
import SwitchThemeButton from './SwitchThemeButton';

import { FaHome } from 'react-icons/fa';

const navItems: { label: string; path: string }[] = [
	{
		label: 'O mnie',
		path: '#',
	},
	{
		label: 'Projekty',
		path: '#projekty',
	},
	{
		label: 'Kontakt',
		path: '#kontakt',
	},
];

const Navbar: FC = () => {
	return (
		<nav className='w-full my-10 flex justify-between items-center sticky top-0 left-0 py-4 bg-light dark:bg-dark'>
			<div className='w-full max-w-screen-md flex justify-between items-center mx-auto'>
				<div className='flex items-center text-xm space-x-4 md:text-base md:space-x-16'>
					{navItems.map((el, index) => (
						<a
							href={el.path}
							key={index}
							className='relative pointer py-2.5 uppercase font-extrabold before:absolute before:w-full before:h-0.5 before:bottom-1.5 before:left-0 before:bg-transparent hover:before:bg-dark dark:hover:before:bg-light '
						>
							{el.label}
						</a>
					))}
				</div>
				<SwitchThemeButton />
			</div>
		</nav>
	);
};

export default Navbar;
