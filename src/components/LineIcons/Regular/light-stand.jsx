import React from 'react';

function LightStand(props) {
	const title = props.title || "light stand";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M44.6 16.4L42.1 6.3c-.7-3-3.4-5.1-6.5-5.1h-7.2c-3.1 0-5.7 2.1-6.5 5.1l-2.5 10.1c-.5 2-.1 4.1 1.2 5.7s3.2 2.6 5.3 2.6h4.4v34.5h-3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h9.4c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-3V24.7h4.4c2.1 0 4-.9 5.3-2.6 1.3-1.6 1.7-3.7 1.2-5.7zm-4 3.6c-.6.8-1.5 1.2-2.5 1.2H25.9c-1 0-1.9-.4-2.5-1.2-.6-.8-.8-1.8-.6-2.7l2.5-10.1c.4-1.4 1.6-2.4 3.1-2.4h7.2c1.5 0 2.7 1 3.1 2.4l2.5 10.1c.3.9 0 1.9-.6 2.7z"/>
	</g>
</svg>
	);
};

export default LightStand;