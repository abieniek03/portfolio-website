'use client';
import { FC, useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import { FaSun, FaMoon } from 'react-icons/fa';

const SwitchThemeButton: FC = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState<boolean>(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	let currentTheme = theme === 'system' ? systemTheme : theme;

	const switchTheme = () => {
		currentTheme === 'dark' ? setTheme('light') : setTheme('dark');
	};

	return (
		<button onClick={switchTheme} className={`p-2 text-lg font-extrabold`}>
			{currentTheme === 'dark' ? <FaSun /> : <FaMoon />}
		</button>
	);
};

export default SwitchThemeButton;
