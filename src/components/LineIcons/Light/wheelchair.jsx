import React from 'react';

function Wheelchair(props) {
	const title = props.title || "wheelchair";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M41.6 54.8c-3.6 4-8.7 6.2-14.1 6.2C17 61 8.4 52.4 8.4 41.9c0-6.2 2.8-11.8 7.8-15.4.7-.5.8-1.4.3-2.1-.5-.7-1.4-.8-2.1-.3-5.7 4.2-9 10.7-9 17.8C5.4 54.1 15.3 64 27.5 64c6.3 0 12.2-2.6 16.4-7.2.6-.6.5-1.6-.1-2.1-.7-.6-1.6-.5-2.2.1z"/>
		<path d="M57 51.4l-5.3.4-1.4-16.5c0-1.1-1-2.1-2.2-2.1H25.5l-.6-10.9h15.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H24.6l-.3-4.9c3.9-.1 7-3.3 7-7.2 0-4-3.2-7.2-7.2-7.2s-7.2 3.2-7.2 7.2c0 3 1.8 5.6 4.5 6.7l1.2 20.2c0 1.2 1 2.1 2.2 2.1h22.6l1.4 16.6v.2c.2 1 1.2 1.8 2.2 1.8h.1l6.1-.5c.8-.1 1.4-.8 1.4-1.6-.1-.8-.8-1.4-1.6-1.3zM19.9 7.2c0-2.3 1.9-4.2 4.2-4.2s4.2 1.9 4.2 4.2-1.9 4.2-4.2 4.2-4.2-1.8-4.2-4.2z"/>
	</g>
</svg>
	);
};

export default Wheelchair;