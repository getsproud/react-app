import React from 'react';

function SproutAlt(props) {
	const title = props.title || "sprout alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.3 1.5c0-.8-.7-1.5-1.5-1.5-.6 0-14.7-.1-21.1 6.1-2.4 2.3-3.9 5.7-4.8 9.1-.9-3.4-2.4-6.8-4.8-9.1C20.9 0 6.8.1 6.2.1c-.8 0-1.5.7-1.5 1.5 0 .5-.1 14.4 6.3 20.6 5.2 5.1 15.6 6 19.5 6.1v34.1c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V28.3c3.9-.1 14.3-1 19.5-6.1 6.4-6.2 6.3-20.1 6.3-20.7zM13.1 20.1c-4.3-4.2-5.2-13.4-5.3-17 3.7.2 13.1 1 17.4 5.2 4.3 4.2 5.2 13.4 5.3 17-3.7-.1-13.1-1-17.4-5.2zm20.4 5.2c.2-3.6 1-12.7 5.3-17C43.1 4 52.5 3.2 56.2 3.1c-.2 3.6-1 12.8-5.3 17-4.3 4.2-13.7 5.1-17.4 5.2z"/>
	</g>
</svg>
	);
};

export default SproutAlt;