import { FC } from 'react';

const SectionSubtitle: FC<{ label: string }> = ({ label }) => {
	return <h3 className='uppercase font-extrabold mb-2.5'>{label}</h3>;
};

export default SectionSubtitle;
