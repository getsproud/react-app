import React from 'react';

function Dropper(props) {
	const title = props.title || "dropper";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M43.4 14.5h-4.2V7.2C39.2 3.2 36 0 32 0s-7.2 3.2-7.2 7.2v7.3h-4.2c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h4.2v26.2c0 .3.1.6.3.8l5.4 8.2v9.8c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-9.8l5.4-8.2c.2-.2.3-.5.3-.8V17.5h4.2c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5zM27.8 7.2C27.8 4.9 29.7 3 32 3s4.2 1.9 4.2 4.2v7.3h-8.4V7.2zm8.4 36L32 49.5l-4.2-6.3V17.5h8.4v25.7z"/>
	</g>
</svg>
	);
};

export default Dropper;