import React from 'react';

function Silverware(props) {
	const title = props.title || "silverware";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M15.9 1.3c-7 0-12.2 10-12.2 19 0 4.4 3.8 7.9 8.3 7.9h2.4V61c0 1 .8 1.8 1.8 1.8S18 62 18 61V28.1h1.8c4.6 0 8.3-3.5 8.3-8 0-8.9-5.2-18.8-12.2-18.8zm3.8 23.3H12c-2.7 0-4.8-2-4.8-4.5 0-7.6 4.4-15.4 8.7-15.4 4.3 0 8.7 7.8 8.7 15.5 0 2.5-2.2 4.4-4.9 4.4z"/>
		<path d="M58.5 2c-1 0-1.8.8-1.8 1.8v15.5c0 3.3-2.7 6.1-6.1 6.3V3.7c0-1-.8-1.8-1.8-1.8S47 2.7 47 3.7v21.9c-3.4-.3-6.1-3-6.1-6.3V3.7c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v15.5c0 5.3 4.3 9.6 9.6 9.8v32c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V29.1c5.3-.3 9.6-4.6 9.6-9.8V3.7c.2-1-.6-1.7-1.6-1.7z"/>
	</g>
</svg>
	);
};

export default Silverware;