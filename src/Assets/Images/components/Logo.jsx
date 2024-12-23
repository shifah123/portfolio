import React from 'react';

export default function Logo(props?: SVGProps) {
	return (
		<svg viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='M15 25C20.5228 25 25 20.5228 25 15C25 9.47715 20.5228 5 15 5C9.47715 5 5 9.47715 5 15C5 20.5228 9.47715 25 15 25Z'
				className='theme-stroke'
				strokeWidth='1.875'
			/>
			<path
				d='M21.8741 7.93545C24.7466 7.2621 26.8056 7.34011 27.2967 8.32503C28.2104 10.1577 23.3493 14.4364 16.4391 17.8816C9.52879 21.327 3.1862 22.6343 2.27246 20.8016C1.78257 19.8191 2.95262 18.1334 5.20846 16.2501'
				className='theme-stroke'
				strokeWidth='1.875'
			/>
		</svg>
	);
}
