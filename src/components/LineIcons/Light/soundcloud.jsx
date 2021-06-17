import React from 'react';

function Soundcloud(props) {
	const title = props.title || "soundcloud";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M60.2 25.4c-.1-.1-.2-.2-.3-.2-2-2.2-4.8-3.6-7.8-4.1-1.7-2.6-4.3-4.6-7.3-5.7-1.6-.5-3.1-.7-4.3-.7h-.7c-1.2 0-2.2 1-2.2 2.2v30.2c0 1.3 1 2.2 2.2 2.2h9.8c8 0 14.4-6.3 14.4-14.2 0-3.7-1.4-7.2-3.8-9.7zM49.7 46.3h-9V17.7c.9 0 2 .2 3.2.6 2.5.9 4.6 2.6 6 5l.4.6.7.1c2.8.3 5.2 1.6 6.9 3.5l.3.3c1.7 2 2.7 4.5 2.7 7.3.1 6.2-4.9 11.2-11.2 11.2z"/>
		<path d="M26 16.2c-.8 0-1.5.7-1.5 1.5v28.7c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V17.7c0-.9-.7-1.5-1.5-1.5z"/>
		<path d="M13.3 17.9c-.8 0-1.5.7-1.5 1.5v25.2c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V19.4c0-.8-.7-1.5-1.5-1.5z"/>
		<path d="M1.5 21.6c-.8 0-1.5.7-1.5 1.5v17.8c0 .8.7 1.5 1.5 1.5S3 41.7 3 40.9V23.1c0-.8-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default Soundcloud;