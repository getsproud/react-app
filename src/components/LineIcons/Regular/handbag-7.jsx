import React from 'react';

function Handbag7(props) {
	const title = props.title || "handbag 7";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59 46.2L48.3 27.7c-.5-.8-1.4-1.4-2.4-1.4h-5.2c-.3-10-2.4-25-8.7-25-6.3 0-8.4 15-8.7 25.1h-5.2c-1 0-1.9.5-2.4 1.4L5 46.2c-.6 1-.5 2.3.3 3.2l10.6 12.4c.5.6 1.3 1 2.1 1h28c.8 0 1.6-.4 2.1-1l10.6-12.4c.7-.9.9-2.2.3-3.2zM32 4.8c1.4 0 4.8 7.4 5.2 21.6H26.8c.4-14.3 3.7-21.6 5.2-21.6zm13.7 54.4H18.3l-10-11.7 10.2-17.7h27l10.2 17.7-10 11.7z"/>
	</g>
</svg>
	);
};

export default Handbag7;