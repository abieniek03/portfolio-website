'use client';

import { FC } from 'react';
import SectionTitle from './Elements/SectionTitle';

const ContactSection: FC = () => {
	return (
		<section className='my-16' id='kontakt'>
			<SectionTitle label='Skontaktuj się ze mną' />
			<p>Niedługo pojawi się opcja kontaktu przez formularz. Obecne możliwości kontaktu:</p>
			<ul className='ml-4 list-disc'>
				<li>
					Wiadomość prywatna na{' '}
					<a href='https://www.linkedin.com/in/adrian-bieniek-b11555267/' className='underline'>
						Linkedin
					</a>
				</li>
				<li>
					Wiadomość na adres mailowy -{' '}
					<a href='mailto:kontakt@abieniek.dev' className='underline'>
						kontakt@abieniek.dev
					</a>
				</li>
			</ul>
		</section>
	);
};

export default ContactSection;
