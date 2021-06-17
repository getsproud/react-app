import React from 'react';

function Bowl(props) {
	const title = props.title || "bowl";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.4 14.9H1.6c-.8 0-1.5.7-1.5 1.5 0 11 5.8 21.1 15.3 26.6v4.6c0 .8.7 1.5 1.5 1.5h30.3c.8 0 1.5-.7 1.5-1.5V43c2.3-1.3 4.4-2.9 6.2-4.8 5.8-5.8 9-13.6 9-21.8 0-.8-.7-1.5-1.5-1.5zm-1.5 3c-.1 2.7-.7 5.3-1.5 7.7H4.7c-.9-2.5-1.4-5.1-1.5-7.7h57.7zm-8.2 18.2c-1.9 1.9-4 3.5-6.3 4.7-.5.3-.8.8-.8 1.3v4H18.4v-4c0-.5-.3-1.1-.8-1.3-5.2-2.8-9.2-7.1-11.7-12.2h52.2c-1.3 2.7-3.1 5.3-5.4 7.5z"/>
	</g>
</svg>
	);
};

export default Bowl;