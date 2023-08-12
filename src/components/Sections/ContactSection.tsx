import { FC } from 'react';
import SectionTitle from './Elements/SectionTitle';

interface IContactFormField {
	type?: string;
	id: string;
	label: string;
}

const ContactSection: FC = () => {
	const contactFormField: IContactFormField[] = [
		{
			id: 'name',
			label: 'Imię',
		},
		{
			type: 'email',
			id: 'email',
			label: 'Adres mailowy',
		},
		{
			id: 'temat',
			label: 'Temat',
		},
	];

	const formFieldStyles: string =
		'shadow-sm relative block w-full p-2.5 text-sm bg-light-hover dark:bg-dark-hover text-light-content dark:text-dark-content outline-none border-b-2 border-transparent focus:border-light-border dark:focus:border-dark-border';

	return (
		<section className='my-16'>
			<SectionTitle label='Skontaktuj się ze mną' />
			<p className='mb-4'>
				Wypełnij formularz, wiadomość zostanie wysłana na mój adres mailowy. Odpowiem na nią w ciągu 24h.
			</p>
			<form className='my-5'>
				{contactFormField.map((el, index) => (
					<div className='mb-4' key={index}>
						<label htmlFor='email' className='block mb-2 text-sm font-bold text-light-content dark:text-dark-content'>
							{el.label}
							<span className='text-red-600 font-extrabold'>*</span>
						</label>
						<input type='email' id='email' className={formFieldStyles} placeholder='' required />
					</div>
				))}
				<div className='mb-4'>
					<label htmlFor='message' className='block mb-2 text-sm font-bold text-light-content dark:text-dark-content'>
						Wiadomość
						<span className='text-red-600 font-extrabold'>*</span>
					</label>
					<textarea id='message' rows={5} className={formFieldStyles} />
				</div>
				<button className='relative font-extrabold text-dark px-5 py-2.5 before:absolute before:h-full before:w-[200%] before:top-0 before:left-0 before:bg-gradient-to-r from-primary via-secondary to-primary overflow-hidden z-0 before:-z-10 hover:before:-left-[100%] before:transition-left before:duration-150'>
					Wyślij wiadomość
				</button>
			</form>
		</section>
	);
};

export default ContactSection;
