import React from 'react';

function MicrophoneAlt(props) {
	const title = props.title || "microphone alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M31.6 34.7h.7c6.6 0 12-5.4 12-12V12.1c0-6.6-5.4-12-12-12h-.7c-6.6 0-12 5.4-12 12v10.6c0 6.6 5.4 12 12 12zm-9-22.6c0-5 4.1-9 9-9h.7c5 0 9 4.1 9 9v10.6c0 5-4.1 9-9 9h-.7c-5 0-9-4.1-9-9V12.1z"/>
		<path d="M53.6 22.9c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5c0 10.2-8.4 18.5-18.6 18.5-10.3 0-18.6-8.3-18.6-18.5 0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5c0 11.3 8.9 20.6 20.1 21.4v18.2c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V44.3c11.2-.7 20.1-10 20.1-21.4z"/>
	</g>
</svg>
	);
};

export default MicrophoneAlt;