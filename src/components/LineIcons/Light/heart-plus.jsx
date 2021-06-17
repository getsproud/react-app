import React from 'react';

function HeartPlus(props) {
	const title = props.title || "heart plus";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.7 9.3c-3.4-3.7-8.2-5.7-13.3-5.7-3.9 0-7.4 1.2-10.5 3.6-1.1.8-2 1.7-3 2.8-.9-1-1.9-2-3-2.8-3.1-2.4-6.6-3.6-10.5-3.6-5.1 0-9.8 2-13.3 5.7C1.9 13 0 17.9 0 23.3 0 28.8 2 33.8 6.4 39c3.8 4.5 9.1 9 15.3 14.3 2.1 1.8 4.5 3.8 6.9 5.9.9.8 2.1 1.2 3.3 1.2 1.2 0 2.4-.4 3.3-1.2 2.5-2.1 4.8-4.1 7-5.9C48.5 48 53.8 43.5 57.6 39 62 33.8 64 28.8 64 23.3c0-5.4-1.9-10.3-5.3-14zM55.3 37c-3.6 4.3-8.8 8.7-14.9 13.9-2.1 1.8-4.5 3.8-7 5.9-.8.7-2 .7-2.7 0-2.5-2.1-4.8-4.2-7-5.9-6.1-5.1-11.4-9.5-15-13.9C4.8 32.4 3 28 3 23.3c0-4.6 1.6-8.8 4.4-11.9 2.9-3.1 6.8-4.8 11.1-4.8 3.2 0 6.1 1 8.7 3 1 .8 2 1.7 2.8 2.8 1 1.2 2.9 1.2 3.9 0 .9-1.1 1.8-2 2.8-2.8 2.6-2 5.5-3 8.7-3 4.3 0 8.2 1.7 11.1 4.8 2.9 3.1 4.4 7.3 4.4 11.9.1 4.7-1.7 9.1-5.6 13.7z"/>
		<path d="M41.1 30.5h-7.6v-7.6c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v7.6h-7.6c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h7.6v7.6c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-7.6h7.6c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default HeartPlus;