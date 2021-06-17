import React from 'react';

function Graduation(props) {
	const title = props.title || "graduation";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.8 36.3l-4-4.1v-7.1l.6-.3c1.1-.5 1.8-1.6 1.8-2.9 0-1.3-.7-2.4-1.9-2.9L32.5 6.4c-.8-.4-1.7-.4-2.5 0L1.9 18.8C.7 19.3 0 20.5 0 21.7c0 1.3.7 2.4 1.9 2.9l9 4v15.1c0 7.7 6.2 14 13.9 14h10.3c7.7 0 13.9-6.3 13.9-14V30l7.3-3.3.5-.2v5.9L53 36.3c-.2.2-.2.6 0 .9l5 5.1c.2.2.6.2.9 0l5-5.1c.2-.2.2-.6-.1-.9zM46 43.8c0 6.1-4.9 11-10.9 11H24.8c-6 0-10.9-4.9-10.9-11V30.1l16.3 7.3c.4.2.8.3 1.3.3.4 0 .9-.1 1.3-.3l13.3-6v12.4zM55.1 24L31.4 34.6 3.1 21.9s-.1 0-.1-.2c0-.1.1-.2.1-.2L31.3 9.2l27.9 12.6s.1 0 .1.2c0 .1-.1.2-.1.2L55.1 24z"/>
	</g>
</svg>
	);
};

export default Graduation;