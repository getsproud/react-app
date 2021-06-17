import React from 'react';

function TextAlt(props) {
	const title = props.title || "text alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M52.8 1.3H11.2c-3.4 0-6.1 2.7-6.1 6V13c0 1 .8 1.8 1.8 1.8S8.7 14 8.7 13V7.3c0-1.4 1.1-2.6 2.6-2.6h13.5v54.5h-6.5c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H46c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-6.5V4.8H53c1.4 0 2.6 1.1 2.6 2.6v5.7c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V7.3c-.3-3.3-3-6-6.4-6zm-17 58h-7.6V4.8h7.6v54.5z"/>
	</g>
</svg>
	);
};

export default TextAlt;