import React from 'react';

function Lolypop(props) {
	const title = props.title || "lolypop";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M49.1 18.1C49.1 8.1 41 0 31 0 21 0 12.9 8.1 12.9 18.1c0 9.5 7.3 17.3 16.6 18.1v26.3c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V36.2c9.3-.8 16.6-8.6 16.6-18.1zm-7-10.2L18.1 26c-.8-1.4-1.5-2.9-1.8-4.6l22-16.5c1.4.8 2.7 1.8 3.8 3zM31 3c1.4 0 2.7.2 4 .6L15.9 17.9C16 9.7 22.7 3 31 3zM19.9 28.4l24-18c.8 1.4 1.5 2.9 1.8 4.6L24 31.3c-.1 0-.1.1-.1.1-1.6-.8-2.9-1.8-4-3zM31 33.3a16 16 0 0 1-3.9-.5l19.1-14.3C46 26.6 39.3 33.3 31 33.3z"/>
	</g>
</svg>
	);
};

export default Lolypop;