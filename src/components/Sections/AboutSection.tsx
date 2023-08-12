import { FC } from 'react';

import SectionTitle from './Elements/SectionTitle';
import SectionSubtitle from './Elements/SectionSubtitle ';

import { BiLogoJavascript, BiLogoTypescript, BiLogoVuejs, BiLogoPostgresql, BiLogoMongodb } from 'react-icons/bi';
import { FaHtml5, FaCss3Alt, FaSass, FaNpm, FaReact, FaNode } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

const AboutSection: FC = () => {
	const techLogoStylesSmall: string = 'w-full text-5xl';
	const techLogoStyles: string = 'w-full text-6xl';

	const otherTechnologies: string[] = [
		'GIT & GitHub',
		'Gulp',
		'Vite',
		'Pinia',
		'Redux',
		'Bootstrap',
		'TailwindCSS',
		'styled-components',
		'MySQL',
	];
	return (
		<section className='mb-16'>
			<p>
				Jestem tegorocznym absolwentem technikum informatycznego, które ukończyłem zyskując tytuł zawodowy{' '}
				<span className='font-bold'>technika informatyka.</span> Szeroko pojętą informatyką interesuję się od wielu lat.
				Zaczynałem w 2015 roku od grafiki komputerowej, było to moje hobby. Głównie zajmowałem się tworzeniem logotypów,
				banerów oraz plakatów. W 2018 roku zaznajomiłem się z tworzeniem stron internetowych. Od tego czasu równolegle
				zajmowałem się zarówno grafiką, jak i tworzeniem stron, które tworzyłem używając{' '}
				<span className='font-medium italic'>HTML, CSS (SCSS/SASS) oraz JavaScript.</span> Był też okres, w którym
				projektowałem designy stron internetowych. W wakacje przed ostatnią klasą technikum podjąłem ważną decyzję
				dotyczącą tego, czym chcę zająć się zawodowo. Postawiłem na{' '}
				<span className='font-bold'>programowanie webowe.</span>
			</p>
			<p>
				Do tej pory interesowałem się tylko <span className='font-bold'>frontendem.</span> Chcąc tworzyć bardziej
				sensowne i zaawansowane strony i aplikacje internetowe postanowiłem nauczyć się{' '}
				<span className='font-bold'>technologi backendowych:</span>Node.js oraz baz danych. Wykonywałem projekty w
				różnych technologiach:{' '}
				<span className='font-medium italic'>
					Vue.js, Node.js (Express), React(Next.js), MySQL, PostgreSQL, MongoDB.
				</span>{' '}
				Używałem też bibliotek służących do stylowania wyglądu międzyinnymi
				<span className='font-medium italic'> Bootstrap, TailwindCSS, styled-components.</span> Cały czas staram się
				rozwijać i chcę nabierać doświadczenia.
			</p>

			<div className='mt-10' id='technology'>
				<div className='my-5'>
					<SectionTitle label='Narzędzia i technologie' />
					<div className='grid grid-cols-2 gap-10 my-5 mb-10 sm:grid-cols-6'>
						<FaHtml5 className={techLogoStylesSmall} title='HTML5' />
						<FaCss3Alt className={techLogoStylesSmall} title='CSS3' />
						<FaSass className={techLogoStyles} title='Sass(scss)' />
						<FaNpm className={techLogoStyles} title='npmjs' />
						<BiLogoJavascript className={techLogoStyles} title='JavaScript' />
						<BiLogoTypescript className={techLogoStyles} title='TypeScript' />
						<FaNode className='w-full text-7xl' title='Node.js' />
						<BiLogoVuejs className={techLogoStyles} title='Vue' />
						<FaReact className={techLogoStyles} title='React' />
						<SiNextdotjs className={techLogoStyles} title='Next.js' />
						<BiLogoPostgresql className={techLogoStyles} title='PostgreSQL' />
						<BiLogoMongodb className={techLogoStyles} title='MongoDB' />
					</div>
				</div>
				<div className='my-5'>
					<SectionSubtitle label='Pozostałe' />
					<ol className='list-disc ml-5'>
						{otherTechnologies.map((el, index) => (
							<li key={index} className='font-semibold'>
								{el}
							</li>
						))}
					</ol>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
