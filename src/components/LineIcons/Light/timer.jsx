import React from 'react';

function Timer(props) {
	const title = props.title || "timer";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M33.5 11.1V3h6.8c.8 0 1.5-.7 1.5-1.5S41.1 0 40.3 0H23.7c-.8 0-1.5.7-1.5 1.5S22.9 3 23.7 3h6.8v8.1c-13.9.8-25 12.3-25 26.4C5.5 52.1 17.4 64 32 64s26.5-11.9 26.5-26.5c0-14-11.1-25.6-25-26.4zM32 61C19.1 61 8.5 50.5 8.5 37.5 8.5 24.6 19 14 32 14c12.9 0 23.5 10.5 23.5 23.5S44.9 61 32 61z"/>
		<path d="M45.9 36H33.5V23.7c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V36h-4c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h4v4c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-4h12.4c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default Timer;