import React from 'react';

function HeadphoneAlt(props) {
	const title = props.title || "headphone alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M64 33.3c-.1-8.1-3.3-15.7-9.2-21.4-6.2-6.1-14.5-9.4-23.4-9.2C14.4 3 .4 16.6 0 33.3V47.7c0 .9.5 1.7 1.2 2.1 0 0 .1 0 .1.1h.1c.1.1.1.1.2.1l24.1 11.3H32c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-5.7L9 50.2c1.3-.1 2.3-1.2 2.3-2.5V35.8c0-1.4-1.1-2.5-2.5-2.5H3c.4-15 13-27.4 28.5-27.6 8-.1 15.6 2.8 21.2 8.4 5.3 5.2 8.2 12 8.3 19.3h-5.8c-1.4 0-2.5 1.1-2.5 2.5v11.9c0 1.4 1.1 2.5 2.5 2.5h6.3c1.4 0 2.5-1.1 2.5-2.5V33.3zM8.3 47.2H3V36.4h5.3v10.8zm52.7 0h-5.3V36.3H61v10.9z"/>
	</g>
</svg>
	);
};

export default HeadphoneAlt;