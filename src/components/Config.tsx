'use client';
import { FC, ReactNode, useState, useCallback, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';

const Config: FC<{ children: ReactNode }> = ({ children }) => {
	const [seconds, setSeconds] = useState<number>(2);

	const loadingProcess = useCallback(() => {
		if (seconds > 0) {
			setTimeout(() => {
				setSeconds((prevSeconds) => prevSeconds - 1);
			}, 1000);
		}
	}, [seconds]);

	useEffect(() => {
		loadingProcess();
	}, [loadingProcess]);

	return (
		<ThemeProvider enableSystem={true} attribute='class'>
			<div className='px-10 md:px-16'>{seconds === 0 && children}</div>
		</ThemeProvider>
	);
};

export default Config;
