import React from 'react';

function Underwear(props) {
	const title = props.title || "underwear";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.1 1.3H7.9C4.4 1.3 1.6 4 1.6 7.5v49.1c0 3.4 2.8 6.2 6.2 6.2h15.7c3 0 5.6-2.2 6.1-5.2L32 43.7l2.3 13.9c.5 3 3.1 5.2 6.1 5.2h15.7c3.4 0 6.2-2.8 6.2-6.2V7.5c.1-3.5-2.7-6.2-6.2-6.2zM7.9 4.8h48.3c1.5 0 2.7 1.2 2.7 2.7V14H5.1V7.5c0-1.5 1.3-2.7 2.8-2.7zm48.2 54.5H40.5c-1.3 0-2.5-1-2.7-2.3l-4.1-24.1c-.1-.8-.9-1.5-1.7-1.5-.9 0-1.6.6-1.7 1.5L26.2 57c-.2 1.3-1.3 2.3-2.7 2.3H7.9c-1.5 0-2.7-1.2-2.7-2.7V17.5h53.7v39.1c0 1.4-1.3 2.7-2.8 2.7z"/>
	</g>
</svg>
	);
};

export default Underwear;