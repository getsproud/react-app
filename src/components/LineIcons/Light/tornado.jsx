import React from 'react';

function Tornado(props) {
	const title = props.title || "tornado";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.8 0H2.2C1.4 0 .7.7.7 1.5S1.4 3 2.2 3h59.5c.8 0 1.5-.7 1.5-1.5S62.6 0 61.8 0z"/>
		<path d="M57.4 12.2H11.7c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h45.7c.8 0 1.5-.7 1.5-1.5s-.6-1.5-1.5-1.5z"/>
		<path d="M54.3 24.4H20c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h34.3c.8 0 1.5-.7 1.5-1.5s-.6-1.5-1.5-1.5z"/>
		<path d="M43.4 36.6H15.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h27.9c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
		<path d="M41.1 50.3c0-.8-.7-1.5-1.5-1.5H19.2c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h20.5c.8 0 1.4-.7 1.4-1.5z"/>
		<path d="M42.5 61h-21c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h21.1c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.6-1.5z"/>
	</g>
</svg>
	);
};

export default Tornado;