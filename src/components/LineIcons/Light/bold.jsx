import React from 'react';

function Bold(props) {
	const title = props.title || "bold";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M43.2 29.2c5.1-1.8 8.1-6.5 8.1-12.7 0-4.7-1.5-8.8-5.1-11.7C42.9 1.5 38.5 0 33.3 0H10.7C9.2 0 8 1.2 8 2.7v58.6c0 1.5 1.2 2.7 2.7 2.7h25.8c5.6 0 10.3-1.8 13.9-5.6 3.6-3.6 5.6-8 5.6-13.6-.1-7.9-4.8-14.1-12.8-15.6zM21.9 12.3H31c4.1 0 7 2.9 7 6.5s-3 6.7-7 6.7h-9.1V12.3zM34 51.5H22v-15h12c4.7 0 8.4 2.9 8.4 7.3s-3.6 7.7-8.4 7.7z"/>
	</g>
</svg>
	);
};

export default Bold;