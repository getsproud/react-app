import React from 'react';

function Rupee(props) {
	const title = props.title || "rupee";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M54.2 16.6H39c-.4-5.3-2.6-10.5-6.5-13.6h21.7c.8 0 1.5-.7 1.5-1.5S55 0 54.2 0H9.8C9 0 8.3.7 8.3 1.5S9 3 9.8 3h13.9C31.3 3 35.5 9.6 36 16.6H9.8c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h26.1C34.5 26.8 23.5 32 16.2 32c-.6 0-1.1.3-1.4.9-.2.5-.2 1.2.2 1.6l24.2 28.9c.3.4.7.5 1.2.5.3 0 .7-.1 1-.3.6-.5.7-1.5.2-2.1L19.2 34.9c8.4-1.2 18.6-7.2 19.8-15.2h15.2c.8 0 1.5-.7 1.5-1.5 0-.9-.7-1.6-1.5-1.6z"/>
	</g>
</svg>
	);
};

export default Rupee;