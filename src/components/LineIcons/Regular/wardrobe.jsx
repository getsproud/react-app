import React from 'react';

function Wardrobe(props) {
	const title = props.title || "wardrobe";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.5 3.7h-49C4 3.7 1.2 6.5 1.2 10v48.5c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-9h54.5v9c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V10c-.1-3.4-3-6.3-6.4-6.3zm-49 3.5H37V26H4.8V10c0-1.5 1.2-2.8 2.7-2.8zM4.8 29.5h32.3V46H4.8V29.5zM40.6 46V7.2h15.9c1.5 0 2.8 1.3 2.8 2.8v36H40.6z"/>
		<path d="M51.1 25h-3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h3c1 0 1.8-.8 1.8-1.8S52 25 51.1 25z"/>
	</g>
</svg>
	);
};

export default Wardrobe;