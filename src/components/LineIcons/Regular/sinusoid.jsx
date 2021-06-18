import React from 'react';

function Sinusoid(props) {
	const title = props.title || "sinusoid";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 30.2h-9.7c.4-6.3 2-18.6 6.4-22.3 1-.8 2-1.1 3.1-1 1 .1 1.8-.5 2-1.5.1-1-.5-1.8-1.5-2-2.2-.3-4.1.3-5.9 1.8-6 5.1-7.3 19.7-7.6 24.9H16.3c.6-10.1 3.1-23.4 7.2-23.5.8 0 1.5.3 2.2 1 3.4 3.4 4 13.7 3.9 17.4 0 1 .8 1.8 1.7 1.8.9 0 1.8-.8 1.8-1.7 0-1.5.1-14.9-4.9-19.9-1.3-1.3-2.9-2-4.6-2-8.4 0-10.3 19.8-10.7 27H3c-1 0-1.8.8-1.8 1.8S2 33.8 3 33.8h27.3c.3 7.1 2.1 27 10.9 27 1.8 0 3.5-.7 4.8-2.1 5-5.2 4.8-18.4 4.7-19.9 0-1-.8-1.7-1.8-1.7s-1.7.8-1.7 1.8c.1 3.6-.4 13.8-3.7 17.3-.7.7-1.4 1.1-2.3 1.1-4.3 0-6.8-13.4-7.3-23.5H61c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M14.4 37c-1 0-1.8.8-1.8 1.8 0 3.4-.9 13.1-5 16.8-1.3 1.1-2.8 1.6-4.5 1.4-1-.1-1.8.6-1.9 1.6-.1 1 .6 1.8 1.6 1.9.4 0 .8.1 1.1.1 2.3 0 4.4-.8 6.1-2.4 6.1-5.5 6.1-18.8 6.1-19.4.1-1-.7-1.8-1.7-1.8z"/>
	</g>
</svg>
	);
};

export default Sinusoid;