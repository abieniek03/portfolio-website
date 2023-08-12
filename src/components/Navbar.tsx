import { FC } from 'react';
import SwitchThemeButton from './SwitchThemeButton';

const navItems: { label: string; path: string }[] = [
	{
		label: 'O mnie',
		path: '#about',
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
				<div className='flex text-sm space-x-6 md:text-base md:space-x-16'>
					{navItems.map((el, index) => (
						<a
							href={el.path}
							key={index}
							className='pointer py-2.5 uppercase font-extrabold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition duration-300'
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
