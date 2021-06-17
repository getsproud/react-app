import React from 'react';

function FarenheitAlt(props) {
	const title = props.title || "farenheit alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 1.3C15 1.3 1.3 15 1.3 32S15 62.8 32 62.8 62.8 49 62.8 32 49 1.3 32 1.3zm0 58C17 59.3 4.8 47 4.8 32S17 4.8 32 4.8 59.3 17 59.3 32 47 59.3 32 59.3z"/>
		<path d="M24.6 16.8c-3.3 0-6.1 2.7-6.1 6.1s2.7 6.1 6.1 6.1 6.1-2.7 6.1-6.1-2.8-6.1-6.1-6.1zm0 8.6c-1.4 0-2.6-1.2-2.6-2.6s1.2-2.6 2.6-2.6c1.4 0 2.6 1.2 2.6 2.6s-1.2 2.6-2.6 2.6z"/>
		<path d="M43.1 30.3h-9.8c-1 0-1.8.8-1.8 1.8v16c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V42h5.2c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-5.2v-4.8h8c1 0 1.8-.8 1.8-1.8 0-.8-.8-1.5-1.8-1.5z"/>
	</g>
</svg>
	);
};

export default FarenheitAlt;