import React from 'react';

function TakaCoin(props) {
	const title = props.title || "taka coin";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32 32-14.3 32-32S49.7 0 32 0zm0 61C16 61 3 48 3 32S16 3 32 3s29 13 29 29-13 29-29 29z"/>
		<path d="M42.5 23.5h-15v-7.9c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v7.9h-3c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h3V41c0 4.9 4 8.9 9 8.9s9-4 9-8.9c0-3.6-2.2-6.8-5.5-8.2-.8-.3-1.6 0-2 .8-.3.8 0 1.6.8 2 2.2.9 3.7 3.1 3.7 5.5 0 3.3-2.7 5.9-6 5.9s-6-2.7-6-5.9V26.5h15c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default TakaCoin;