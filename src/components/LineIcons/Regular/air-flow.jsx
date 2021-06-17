import React from 'react';

function AirFlow(props) {
	const title = props.title || "air flow";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.9 52.4L56.3 49c-3.1-1.9-6.9-1.9-10 0l-1.5.9c-2 1.2-4.4 1.2-6.4 0L37 49c-3.1-1.9-6.9-1.9-10 0l-1.5.9c-2 1.2-4.4 1.2-6.4 0l-1.4-.9c-3.1-1.9-6.9-1.9-10 0l-5.6 3.4c-.8.5-1.1 1.6-.6 2.4.3.5.9.8 1.5.8.3 0 .6-.1.9-.3L9.5 52c2-1.2 4.4-1.2 6.4 0l1.5.9c3.1 1.9 6.9 1.9 10 0l1.5-.9c2-1.2 4.4-1.2 6.4 0l1.5.9c3.1 1.9 6.9 1.9 10 0l1.5-.9c2-1.2 4.4-1.2 6.4 0l5.6 3.4c.8.5 1.9.2 2.4-.6.3-.8 0-1.9-.8-2.4z"/>
		<path d="M61.9 32.8l-5.6-3.4c-3.1-1.9-6.9-1.9-10 0l-1.5.9c-2 1.2-4.4 1.2-6.4 0l-1.4-.9c-3.1-1.9-6.9-1.9-10 0l-1.5.9c-2 1.2-4.4 1.2-6.4 0l-1.5-.9c-3.1-1.9-6.9-1.9-10 0L2 32.8c-.8.5-1.1 1.6-.6 2.4.6.8 1.7 1.1 2.5.6l5.6-3.4c2-1.2 4.4-1.2 6.4 0l1.5.9c3.1 1.9 6.9 1.9 10 0l1.5-.9c2-1.2 4.4-1.2 6.4 0l1.5.9c3.1 1.9 6.9 1.9 10 0l1.5-.9c2-1.2 4.4-1.2 6.4 0l5.6 3.4c.3.2.6.3.9.3.6 0 1.2-.3 1.5-.8.3-.9 0-2-.8-2.5z"/>
		<path d="M3.9 16.1l5.6-3.4c2-1.2 4.4-1.2 6.4 0l1.5.9c3.1 1.9 6.9 1.9 10 0l1.5-.9c2-1.2 4.4-1.2 6.4 0l1.5.9c3.1 1.9 6.9 1.9 10 0l1.5-.9c2-1.2 4.4-1.2 6.4 0l5.6 3.4c.3.2.6.3.9.3.6 0 1.2-.3 1.5-.8.5-.8.2-1.9-.6-2.4l-5.6-3.4c-3.1-1.9-6.9-1.9-10 0l-1.5.9c-2 1.2-4.4 1.2-6.4 0l-1.6-1c-3.1-1.9-6.9-1.9-10 0l-1.5.9c-2 1.2-4.4 1.2-6.4 0l-1.5-.9c-3.1-1.9-6.9-1.9-10 0L2 13.1c-.8.5-1.1 1.6-.6 2.4s1.7 1.1 2.5.6z"/>
	</g>
</svg>
	);
};

export default AirFlow;