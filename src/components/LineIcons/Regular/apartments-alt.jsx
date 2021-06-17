import React from 'react';

function ApartmentsAlt(props) {
	const title = props.title || "apartments alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 20.8H40.1V7.2c0-3.2-2.6-5.7-5.7-5.7H7c-3.2 0-5.7 2.6-5.7 5.7v49.5c0 3.2 2.6 5.7 5.7 5.7h28.9c1 0 1.8-.8 1.8-1.8v-10c0-2.9 2.3-5.2 5.2-5.2 2.9 0 5.2 2.3 5.2 5.2v10.2c0 1 .8 1.8 1.8 1.8H57c3.2 0 5.7-2.6 5.7-5.7V26.5c.1-3.1-2.5-5.7-5.7-5.7zm-34 5.7V59H7c-1.2 0-2.2-1-2.2-2.2V7.2C4.8 6 5.8 5 7 5h27.4c1.2 0 2.2 1 2.2 2.2v13.5h-7.9c-3.1.1-5.7 2.7-5.7 5.8zm36.3 30.3c0 1.2-1 2.2-2.2 2.2h-5.4v-8.4c0-4.8-3.9-8.7-8.7-8.7s-8.7 3.9-8.7 8.7V59h-7.6V26.5c0-1.2 1-2.2 2.2-2.2H57c1.2 0 2.2 1 2.2 2.2v30.3z"/>
	</g>
</svg>
	);
};

export default ApartmentsAlt;