import React from 'react';

function Sick(props) {
	const title = props.title || "sick";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 1.3C15 1.3 1.3 15 1.3 32S15 62.8 32 62.8 62.8 49 62.8 32 49 1.3 32 1.3zm0 58C17 59.3 4.8 47 4.8 32S17 4.8 32 4.8 59.3 17 59.3 32 47 59.3 32 59.3z"/>
		<path d="M44.7 39c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8c-2.8 0-5.2 1.4-6.5 3.6-4.1-1.1-8.5-1.1-12.7 0-1.3-2.1-3.7-3.6-6.5-3.6-1 0-1.8.8-1.8 1.8S18 39 19 39c1.9 0 3.4 1.2 3.8 2.7v.1c.1.2.1.5.1.7 0 2-1.8 3.6-3.9 3.6-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8c4.1 0 7.4-3.2 7.4-7.1v-.1c3.5-1 7.3-1 10.7 0v.1c0 3.9 3.3 7.1 7.4 7.1 1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8c-2.2 0-3.9-1.6-3.9-3.6s1.9-3.5 4.1-3.5z"/>
		<circle cx="21.4" cy="22.8" r="3.5"/>
		<circle cx="42.6" cy="22.8" r="3.5"/>
	</g>
</svg>
	);
};

export default Sick;