import { FC } from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import avatar from '@/assets/images/avatar.png';

const socialLinkButtonStyles: string = 'mb-1 px-2 py-1 text-lg last:mb-0';

const Header: FC = () => {
	return (
		<header className='mb-5'>
			<div className='flex justify-between items-start pb-5'>
				<div className='flex items-end'>
					<Image src={avatar} alt='' className='w-24 lg:w-32 -ml-3.5' />
					<div>
						<h1 className='font-bold text-xl md:text-2xl lg:text-3xl'>Adrian Bieniek</h1>
						<p className='uppercase text-xs font-bold md:text-sm lg:text-base'>Full stack web developer</p>
					</div>
				</div>
				<div className='mt-5 flex flex-col'>
					<a href='https://github.com/abieniek03' target='_blank' className={socialLinkButtonStyles}>
						<FaGithub />
					</a>
					<a
						href='https://www.linkedin.com/in/adrian-bieniek-b11555267/'
						target='_blank'
						className={socialLinkButtonStyles}
					>
						<FaLinkedinIn />
					</a>
				</div>
			</div>
			<hr />
		</header>
	);
};

export default Header;
