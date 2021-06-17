import React from 'react';

function Taka(props) {
	const title = props.title || "taka";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M51.5 17.4H22.3V1.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v15.9h-6.9c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h6.9v28.3c0 8.4 6.9 15.3 15.4 15.3s15.4-6.9 15.4-15.3c0-6.2-3.7-11.7-9.4-14.1-.8-.3-1.6 0-2 .8-.3.8 0 1.6.8 2 4.6 1.9 7.6 6.4 7.6 11.3 0 6.8-5.6 12.3-12.4 12.3-6.9 0-12.4-5.5-12.4-12.3V20.4h29.2c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default Taka;