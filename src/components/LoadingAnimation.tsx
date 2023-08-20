'use client';
import { FC, useState, useCallback, useEffect } from 'react';
import Image from 'next/image';

import avatar from '@/assets/images/avatar.png';
const LoadingAnimation: FC = () => {
	const [loadingValue, setLoadingValue] = useState<number>(0);

	const loadingProcess = useCallback(() => {
		if (loadingValue <= 50) {
			setTimeout(() => {
				setLoadingValue((prevLoadingValue) => prevLoadingValue + 1);
			}, 10);
		}

		if (loadingValue > 50 && loadingValue < 100) {
			setTimeout(() => {
				setLoadingValue((prevLoadingValue) => prevLoadingValue + 1);
			}, 15);
		}
	}, [loadingValue]);

	useEffect(() => {
		loadingProcess();
	}, [loadingProcess]);

	return (
		<div className='bg-light dark:bg-dark absolute h-screen w-full top-0 left-0 flex justify-center items-center animate-loading'>
			<div className='flex flex-col justify-center items-center relative'>
				<Image src={avatar} alt='' className='w-32 md:w-40 lg:w-48 mb-2' />
				<div className='bg-light-hover dark:bg-dark-hover absolute w-48 h-2 bottom-0 rounded-lg  overflow-hidden before:absolute before:bg-light-border dark:before:bg-dark-border before:h-2 before:animate-loading-bar'></div>
				<p>{loadingValue}%</p>
			</div>
		</div>
	);
};

export default LoadingAnimation;
