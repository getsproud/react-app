import React from 'react';

function TrendingDown(props) {
	const title = props.title || "trending down";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M60.5 21.9c-1 0-1.8.8-1.8 1.8v12.6l-.1-.1L43 25.7c-1.9-1.3-4.4-1.3-6.4 0L23 34.9c-.8.5-1.7.5-2.5 0l-16-10.7c-.8-.5-1.9-.3-2.4.5s-.3 1.9.5 2.4l16 10.7c1.9 1.3 4.4 1.3 6.4 0l13.7-9.1c.8-.5 1.7-.5 2.5 0L56 38.6H43.8c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h13.3c2.8 0 5.2-2.3 5.2-5.2V23.6c0-.9-.8-1.7-1.8-1.7z"/>
	</g>
</svg>
	);
};

export default TrendingDown;