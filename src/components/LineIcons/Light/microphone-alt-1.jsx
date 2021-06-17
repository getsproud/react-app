import React from 'react';

function MicrophoneAlt1(props) {
	const title = props.title || "microphone alt 1";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M31.6 34.7h.7c6.6 0 12-5.4 12-12V12.1c0-6.6-5.4-12-12-12h-.7c-6.6 0-12 5.4-12 12v10.6c0 6.6 5.4 12 12 12zm0-31.7h.7c5 0 9 4.1 9 9v.5h-3.1c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h3.1v5.3h-3.1c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h3c-.6 4.4-4.4 7.9-9 7.9h-.7c-4.6 0-8.4-3.4-9-7.9h3c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-3.1v-5.3h3.1c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-3.1V12c.2-4.9 4.3-9 9.2-9z"/>
		<path d="M53.6 22.9c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5c0 10.2-8.3 18.4-18.6 18.4S13.4 33 13.4 22.9c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5c0 11.3 8.9 20.6 20.1 21.4v18.1c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V44.3c11.2-.7 20.1-10 20.1-21.4z"/>
	</g>
</svg>
	);
};

export default MicrophoneAlt1;