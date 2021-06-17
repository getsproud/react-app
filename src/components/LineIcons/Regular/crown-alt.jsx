import React from 'react';

function CrownAlt(props) {
	const title = props.title || "crown alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M49.1 53H14.9c-3.3 0-6.2-2.1-7.1-5.3L1.4 26.9c-.4-1.2 0-2.5 1-3.3 1-.8 2.3-1 3.5-.4l9.1 4.4c.5.2 1.1.1 1.4-.3L29.6 12c.6-.7 1.5-1.1 2.4-1.1.9 0 1.8.4 2.4 1.1l13.3 15.2c.4.4.9.5 1.4.3l9.1-4.4c1.1-.6 2.5-.4 3.5.4s1.3 2.1 1 3.3l-6.4 20.9a7.5 7.5 0 0 1-7.2 5.3zM5 26.6l6.2 20.1c.5 1.7 2 2.8 3.8 2.8h34.2c1.8 0 3.3-1.1 3.8-2.8l6-20.1-8.4 4.1c-1.9.9-4.2.5-5.6-1.1l-13-15-13 14.9c-1.4 1.6-3.7 2.1-5.6 1.1l-8.4-4z"/>
	</g>
</svg>
	);
};

export default CrownAlt;