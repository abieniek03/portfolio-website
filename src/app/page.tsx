import { FC } from 'react';

import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import AboutSection from '@/components/Sections/AboutSection';
import ContactSection from '@/components/Sections/ContactSection';
import ProjectsSection from '@/components/Sections/Projects/ProjectsSection';
import Footer from '@/components/Sections/Footer';

const MainPage: FC = () => {
	return (
		<>
			<Navbar />
			<div className='max-w-screen-md mx-auto'>
				<Header />
				<AboutSection />
				<ProjectsSection />
				<ContactSection />
				<Footer />
			</div>
		</>
	);
};

export default MainPage;
