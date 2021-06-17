import React from 'react';

function SuitcaseMedical(props) {
	const title = props.title || "suitcase medical";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M54.5 13.9H43.4v-3c0-3-2.4-5.4-5.4-5.4H26c-3 0-5.4 2.4-5.4 5.4v3H9.5c-4.6 0-8.3 3.7-8.3 8.3v28c0 4.6 3.7 8.3 8.3 8.3h45c4.6 0 8.3-3.7 8.3-8.3v-28c0-4.6-3.8-8.3-8.3-8.3zm-30.4-3C24.1 9.8 25 9 26 9h12c1.1 0 1.9.9 1.9 1.9v3H24.1v-3zm35.2 39.3c0 2.6-2.1 4.8-4.8 4.8h-45c-2.6 0-4.8-2.1-4.8-4.8v-28c0-2.6 2.1-4.8 4.8-4.8h45c2.6 0 4.8 2.1 4.8 4.8v28z"/>
		<path d="M46.9 40.4h-5.8L35 28.3c-.4-.8-1.1-1.2-2-1.2-.8 0-1.6.5-1.9 1.3l-5.4 12-3.2-6.4h-8.1c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h5.9l3.5 7c.4.7 1.1 1.2 1.9 1.2.8 0 1.6-.5 1.9-1.3l5.5-12.1L39 43.9h7.9c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7z"/>
	</g>
</svg>
	);
};

export default SuitcaseMedical;