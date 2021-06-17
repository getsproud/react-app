import React from 'react';

function Microphone(props) {
	const title = props.title || "microphone";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M45.3 0C34.9 0 26.5 8.4 26.5 18.7c0 2 .3 3.9.9 5.7l-24.9 25C.9 51 0 53.1 0 55.4s.9 4.5 2.5 6.1C4.2 63.2 6.4 64 8.6 64c2.2 0 4.4-.8 6.1-2.5l24.9-24.9c1.8.6 3.7.9 5.7.9 10.3 0 18.7-8.4 18.7-18.7S55.6 0 45.3 0zM4.6 59.4c-1-1-1.6-2.4-1.6-3.9s.6-2.9 1.6-3.9l1-1 7.9 7.9-.9.9c-2.2 2.1-5.8 2.1-8 0zm11-3l-7.9-7.9 21-21c1.8 3.4 4.5 6.1 7.9 7.9l-21 21zm13.9-37.7c0-1.9.4-3.8 1-5.5l20.1 20.2c-1.7.6-3.5 1-5.4 1-8.6.1-15.7-7-15.7-15.7zm24 13.4L31.9 10.4C34.7 6 39.6 3 45.3 3 53.9 3 61 10.1 61 18.7c0 5.7-3 10.7-7.5 13.4z"/>
	</g>
</svg>
	);
};

export default Microphone;