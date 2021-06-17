import React from 'react';

function FileProtection(props) {
	const title = props.title || "file protection";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 12.2H32.7L28.8 1c-.2-.6-.8-1-1.4-1H1.5C.7 0 0 .7 0 1.5v61c0 .8.7 1.5 1.5 1.5h61c.8 0 1.5-.7 1.5-1.5V13.7c0-.8-.7-1.5-1.5-1.5zM61 61H3V3h23.4l3.9 11.2c.2.6.8 1 1.4 1H61V61z"/>
		<path d="M20.2 27.2c-.5.3-.8.8-.8 1.3v6.3c0 7.3 3.5 14.1 9.4 18.2l2.3 1.6c.3.2.6.3.9.3s.6-.1.9-.3l2.3-1.6c5.9-4.1 9.4-10.8 9.4-18.2v-6.3c0-.6-.3-1.1-.8-1.3l-11.1-5.7c-.4-.2-.9-.2-1.4 0l-11.1 5.7zm21.4 2.3v5.4c0 6.3-3 12.2-8.1 15.7l-1.5 1-1.5-1c-5.1-3.5-8.1-9.4-8.1-15.7v-5.4l9.6-5 9.6 5z"/>
	</g>
</svg>
	);
};

export default FileProtection;