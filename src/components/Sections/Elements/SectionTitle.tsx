import { FC } from 'react';

const SectionTitle: FC<{ label: string }> = ({ label }) => {
	return <h2 className='uppercase text-2xl font-extrabold lg:mb-5'>{label}</h2>;
};

export default SectionTitle;
