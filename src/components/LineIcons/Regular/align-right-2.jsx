import React from 'react';

function AlignRight2(props) {
	const title = props.title || "align right 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M60 12.4c-1 0-1.8.8-1.8 1.8V50c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V14.1c0-.9-.8-1.7-1.8-1.7z"/>
		<path d="M43.1 13.1c-3.4 0-6.1 2.7-6.1 6.1v25.6c0 3.4 2.7 6.1 6.1 6.1H45c3.4 0 6.1-2.7 6.1-6.1V19.2c0-3.4-2.7-6.1-6.1-6.1h-1.9zm4.6 6.1v25.6c0 1.4-1.2 2.6-2.6 2.6h-1.9c-1.4 0-2.6-1.2-2.6-2.6V19.2c0-1.4 1.2-2.6 2.6-2.6H45c1.5 0 2.7 1.2 2.7 2.6z"/>
		<path d="M59.1 59.3H8.3c-1.4 0-2.6-1.2-2.6-2.6V7.4c0-1.4 1.2-2.6 2.6-2.6H59c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.7-1.7H8.3C5 1.3 2.2 4 2.2 7.4v49.3c0 3.4 2.7 6.1 6.1 6.1H59c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.7-1.7z"/>
	</g>
</svg>
	);
};

export default AlignRight2;