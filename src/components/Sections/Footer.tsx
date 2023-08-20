import { FC } from 'react';

const Footer: FC = () => {
	const year = new Date().getFullYear();

	return (
		<footer className='border-t border-dark dark:border-light pt-16 pb-8'>
			<p className='text-center'>&copy; {year}</p>
		</footer>
	);
};

export default Footer;
