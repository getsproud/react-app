import React from 'react';

function SunriseAlt1(props) {
	const title = props.title || "sunrise alt 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 26.4c1 0 1.8-.8 1.8-1.8V13.8c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v10.9c0 .9.8 1.7 1.8 1.7z"/>
		<path d="M50.1 33.9c.4 0 .9-.2 1.2-.5l3.7-3.7c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0l-3.7 3.7c-.7.7-.7 1.8 0 2.5.4.3.8.5 1.3.5z"/>
		<path d="M61 48.5H48.4c-.9-8.3-7.9-14.7-16.4-14.7-8.5 0-15.5 6.5-16.4 14.7H3c-1 0-1.8.8-1.8 1.8S2 52 3 52h58c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7zM32 37.2c6.6 0 12 4.9 12.9 11.2H19.1c.9-6.3 6.3-11.2 12.9-11.2z"/>
		<path d="M12.7 33.4c.3.3.8.5 1.2.5s.9-.2 1.2-.5c.7-.7.7-1.8 0-2.5l-3.7-3.7c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l3.8 3.7z"/>
	</g>
</svg>
	);
};

export default SunriseAlt1;