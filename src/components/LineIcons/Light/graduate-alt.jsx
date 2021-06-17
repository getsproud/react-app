import React from 'react';

function GraduateAlt(props) {
	const title = props.title || "graduate alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63 21.4l-30.5-11c-.3-.1-.7-.1-1 0L1 21.4c-.6.2-1 .8-1 1.4s.4 1.2 1 1.4l12.4 4.5V35c0 10.2 8.3 18.5 18.5 18.5S50.4 45.2 50.4 35v-6.3l8.3-3v12.9c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-14l1.2-.4c.6-.2 1-.8 1-1.4s-.3-1.1-.9-1.4zM47.5 35.1c0 8.6-7 15.5-15.5 15.5s-15.5-7-15.5-15.5v-5.3l15 5.4c.2.1.3.1.5.1s.3 0 .5-.1l15-5.4v5.3zm1-8.8l-16.5 6-16.4-5.9h-.1L6 23l26-9.5 26.1 9.4-9.6 3.4z"/>
	</g>
</svg>
	);
};

export default GraduateAlt;