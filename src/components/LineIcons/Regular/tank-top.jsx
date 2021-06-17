import React from 'react';

function TankTop(props) {
	const title = props.title || "tank top";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.7 36.1L47.9 17V3c0-1-.8-1.8-1.8-1.8S44.4 2 44.4 3v13.8L32 34.1 19.6 16.8V3c0-1-.8-1.8-1.8-1.8S16.1 2 16.1 3v14L2.3 36.1c-.2.3-.3.7-.3 1v20c0 3.1 2.5 5.7 5.7 5.7h48.7c3.1 0 5.7-2.5 5.7-5.7v-20c-.1-.4-.2-.7-.4-1zM17.9 20.4l12.7 17.7c.7.9 2.2.9 2.8 0l12.7-17.7 12.4 17.2v11.1h-53v-11l12.4-17.3zm38.4 38.9H7.7c-1.2 0-2.2-1-2.2-2.2v-4.8h53v4.8c0 1.2-1 2.2-2.2 2.2z"/>
	</g>
</svg>
	);
};

export default TankTop;