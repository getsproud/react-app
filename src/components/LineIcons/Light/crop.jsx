import React from 'react';

function Crop(props) {
	const title = props.title || "crop";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.8 55.5h-4.1V8.3l5.2-5.8c.6-.6.5-1.6-.1-2.1-.6-.6-1.6-.5-2.1.1l-4.5 5H11.3v-4c0-.8-.7-1.5-1.5-1.5S8.3.7 8.3 1.5v4H4.2c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h4.1v46.9H4.2c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h4.1v4c0 .9.7 1.6 1.5 1.6s1.5-.7 1.5-1.5v-4h41.4v4c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-4h4.1c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5zm-48.5-47h40.1L11.3 53.4V8.5zm2.2 47l39.2-43.8v43.8H13.5z"/>
	</g>
</svg>
	);
};

export default Crop;