import React from 'react';

function MobileAltRounded(props) {
	const title = props.title || "mobile alt rounded";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M43.7 1.3H20.3c-3.9 0-7.1 3.3-7.1 7.3v46.8c0 4 3.2 7.3 7.1 7.3h23.4c3.9 0 7.1-3.3 7.1-7.3V8.6c0-4.1-3.2-7.3-7.1-7.3zm-27 17.6h30.5v30H16.7v-30zm3.6-14.1h23.4c2 0 3.6 1.7 3.6 3.8v6.9H16.7V8.6c0-2.1 1.7-3.8 3.6-3.8zm23.4 54.5H20.3c-2 0-3.6-1.7-3.6-3.8v-2.9h30.5v2.9c.1 2-1.6 3.8-3.5 3.8z"/>
		<path d="M30.2 12.1H34c1 0 1.8-.8 1.8-1.8S35 8.6 34 8.6h-3.8c-1 0-1.8.8-1.8 1.8s.9 1.7 1.8 1.7z"/>
	</g>
</svg>
	);
};

export default MobileAltRounded;