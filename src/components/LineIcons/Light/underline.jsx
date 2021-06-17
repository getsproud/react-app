import React from 'react';

function Underline(props) {
	const title = props.title || "underline";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 50.1c12.3 0 22.3-9.8 22.3-21.8V1.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v26.8c0 10.4-8.7 18.8-19.3 18.8s-19.3-8.4-19.3-18.8V1.5C12.7.7 12 0 11.2 0S9.7.7 9.7 1.5v26.8c0 12.1 10 21.8 22.3 21.8z"/>
		<path d="M58.4 61H5.6c-.8 0-1.5.7-1.5 1.5S4.8 64 5.6 64h52.7c.8 0 1.5-.7 1.5-1.5s-.6-1.5-1.4-1.5z"/>
	</g>
</svg>
	);
};

export default Underline;