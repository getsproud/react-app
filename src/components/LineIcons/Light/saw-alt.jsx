import React from 'react';

function SawAlt(props) {
	const title = props.title || "saw alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.6 27.9H27.9v-4c0-2.3-1.9-4.2-4.3-4.2h-11c-2.4 0-4.3 1.9-4.3 4.2 0 2.2-1.8 4-4 4H1.5c-.8 0-1.5.7-1.5 1.5v13.7c0 .8.7 1.5 1.5 1.5h54.2c4.6 0 8.4-3.8 8.4-8.4s-3.9-8.3-8.5-8.3zM3 30.9h1.3c3.9 0 7-3.1 7-7 0-.7.6-1.2 1.3-1.2h11.1c.7 0 1.3.6 1.3 1.2v17.7H3V30.9zm52.6 10.7H27.9V30.9h27.7c3 0 5.4 2.4 5.4 5.4 0 2.9-2.4 5.3-5.4 5.3z"/>
	</g>
</svg>
	);
};

export default SawAlt;