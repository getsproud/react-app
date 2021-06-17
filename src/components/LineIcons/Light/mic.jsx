import React from 'react';

function Mic(props) {
	const title = props.title || "mic";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 44c3.3 0 6.3-1.3 8.6-3.6 2.2-2.3 3.5-5.3 3.4-8.4V12c0-6.6-5.4-12-12-12S20 5.4 20 12v20c0 6.6 5.4 12 12 12zm-9-32c0-5 4-9 9-9s9 4 9 9v20.1c0 2.4-.9 4.6-2.5 6.3-1.7 1.7-4 2.7-6.4 2.7-5 0-9-4-9-9V12z"/>
		<path d="M53.5 31.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5C50.5 41.7 42.2 50 32 50s-18.4-8.3-18.4-18.4c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5c0 11.3 8.8 20.6 19.9 21.3V61h-7.7c-.8 0-1.5.7-1.5 1.5S22 64 22.8 64h18.4c.8 0 1.5-.7 1.5-1.5S42 61 41.2 61h-7.7v-8.1c11.1-.8 20-10.1 20-21.4z"/>
	</g>
</svg>
	);
};

export default Mic;