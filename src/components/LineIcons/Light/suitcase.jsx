import React from 'react';

function Suitcase(props) {
	const title = props.title || "suitcase";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M60.5 16.6H45.2C44.9 10.5 40 5.5 34 5.5h-4c-6 0-10.9 4.9-11.2 11.1H3.5c-1.9 0-3.5 1.6-3.5 3.5V55c0 1.9 1.6 3.5 3.5 3.5h57c1.9 0 3.5-1.6 3.5-3.5V20.1c0-1.9-1.6-3.5-3.5-3.5zm-41.1 3v35.8h-5.3V19.6h5.3zm3 0h19.2v35.8H22.4V19.6zm22.2 0h5.3v35.8h-5.3V19.6zM30 8.5h4c4.3 0 7.9 3.6 8.2 8.1H21.8c.3-4.5 3.9-8.1 8.2-8.1zM3 55V20.1c0-.3.2-.5.5-.5h7.6v35.8H3.5c-.3.1-.5-.2-.5-.4zm58 0c0 .3-.2.5-.5.5h-7.6V19.6h7.6c.3 0 .5.2.5.5V55z"/>
	</g>
</svg>
	);
};

export default Suitcase;