import React from 'react';

function Moon(props) {
	const title = props.title || "moon";

	return (
		<svg height="64" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path id="Layer_2" d="M60.9 48.1c-.5-.9-1.5-1.4-2.5-1.3-12.6 1.2-24.1-7.1-26.8-19.5-1.8-8.3.7-16.9 6.7-22.9.7-.7 1-1.8.6-2.7C38.5.8 37.7.1 36.7.1c-6.5-.4-12.8 1.1-18.5 4.6-10 6-16 17.3-15.4 28.8.5 9.5 5.1 18.3 12.6 24C21 61.7 27.8 64 34.8 64c2.3 0 4.6-.2 6.9-.7 7.7-1.7 14.5-6.1 19.1-12.5.6-.9.6-1.9.1-2.7zM41 60.3c-8.3 1.8-17-.1-23.8-5.3-6.8-5.1-11-13.1-11.4-21.7-.6-10.4 4.9-20.7 14-26.1C24.4 4.4 29.4 3 34.7 3h.8c-6.2 6.7-8.8 16-6.8 24.9 3 13.5 15.3 22.8 29 21.9-4.2 5.4-10 9.1-16.7 10.5z"/>
	</g>
</svg>
	);
};

export default Moon;