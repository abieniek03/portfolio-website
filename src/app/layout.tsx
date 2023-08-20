import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Config from '@/components/Config';
import LoadingAnimation from '@/components/LoadingAnimation';

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Adrian Bieniek - Full Stack Web Developer',
	description:
		'Jestem full stack web developerem. Programowanie webowe to moja pasja. Miałem okazje tworzyć projekty w wielu techcnologiach m.in. Node.js,Vue, React, Next.js.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='pl' className='scroll-smooth'>
			<body className={`${font.className} bg-light text-light-content dark:bg-dark dark:text-dark-content `}>
				<LoadingAnimation />
				<Config>{children}</Config>
			</body>
		</html>
	);
}
