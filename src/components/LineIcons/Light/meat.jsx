import React from 'react';

function Meat(props) {
	const title = props.title || "meat";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M42.5 11.6c-5.5 0-9.9 4.4-9.9 9.9s4.4 9.9 9.9 9.9 9.9-4.4 9.9-9.9-4.5-9.9-9.9-9.9zm0 16.8c-3.8 0-6.9-3.1-6.9-6.9s3.1-6.9 6.9-6.9c3.8 0 6.9 3.1 6.9 6.9s-3.1 6.9-6.9 6.9z"/>
		<path d="M42.5 0c-.6 0-1.1 0-1.7.1-11.4.7-22.1 7.6-30 19.3C4.1 29.2 0 41.8 0 52.1 0 58.6 5.4 64 11.9 64c5 0 9.6-3.2 11.2-8 1.4-3.7 4.1-6.9 8-9.2 3.7-2.2 8.5-3.5 13.8-3.9 10.3-.8 19-10.6 19-21.4C64 9.7 54.3 0 42.5 0zm2.2 39.9c-5.7.5-10.9 2-15 4.3-4.5 2.6-7.8 6.3-9.4 10.7v.1c-1.3 3.6-4.6 6-8.4 6C7 61 3 57 3 52.1c0-9.7 3.9-21.6 10.3-31 7.3-11 17.2-17.4 27.7-18 .5-.1 1-.1 1.5-.1C52.7 3 61 11.3 61 21.5c0 9.3-7.5 17.7-16.3 18.4z"/>
	</g>
</svg>
	);
};

export default Meat;