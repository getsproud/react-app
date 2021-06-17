import React from 'react';

function Drumstick(props) {
	const title = props.title || "drumstick";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.7 6.1C52.9 2.2 47.9 0 42.6 0c-5.7 0-11.2 2.4-15.5 6.9-7.6 7.7-7.4 30.7-7.4 34.9L8.8 53.1l-.6.3-6.6.1c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5l6-.1v6c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-6.6c.1-.2.3-.4.3-.6l10.9-11.3h1.7c7 0 26.9-.6 33.9-7.5 8.8-8.7 8.5-20.9-.7-30.3zm-1.3 28.2c-6.4 6.3-27 6.7-32.6 6.6 0-5.5.2-25.5 6.5-31.9 3.7-3.9 8.5-6 13.3-6 4.5 0 8.6 1.8 11.9 5.2 6.7 6.8 9.5 17.5.9 26.1z"/>
	</g>
</svg>
	);
};

export default Drumstick;