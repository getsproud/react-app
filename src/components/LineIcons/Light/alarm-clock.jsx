import React from 'react';

function AlarmClock(props) {
	const title = props.title || "alarm clock";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.7 22.1c1.7-1.8 2.7-4.2 2.7-6.7 0-5.4-4.4-9.8-9.8-9.8-3.3 0-6.3 1.6-8.1 4.3-2.2-.7-4.6-1.2-7-1.3V3h4c.9 0 1.5-.6 1.5-1.5S38.4 0 37.5 0h-11c-.9 0-1.5.7-1.5 1.5S25.6 3 26.5 3h4v5.6c-2.4.1-4.8.6-7 1.3-1.8-2.7-4.8-4.3-8.1-4.3-5.4 0-9.8 4.4-9.8 9.8 0 2.5 1 4.9 2.7 6.7-2.5 4.2-3.9 9-3.9 14.2C4.3 51.5 16.7 64 32 64s27.7-12.4 27.7-27.7c0-5.2-1.5-10.1-4-14.2zM48.6 8.6c3.8 0 6.8 3.1 6.8 6.8 0 1.5-.5 3-1.4 4.1-2.8-3.6-6.4-6.6-10.6-8.5 1.3-1.5 3.1-2.4 5.2-2.4zm-40 6.8c0-3.8 3.1-6.8 6.8-6.8 2.1 0 4 .9 5.2 2.5-4.2 1.9-7.9 4.8-10.6 8.5-.9-1.2-1.4-2.7-1.4-4.2zM32 61C18.4 61 7.3 49.9 7.3 36.3S18.4 11.6 32 11.6s24.7 11.1 24.7 24.7S45.6 61 32 61z"/>
		<path d="M43.1 36h-9.6V23.7c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V36h-1.3c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h1.3v1.3c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V39h9.6c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default AlarmClock;