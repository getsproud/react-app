import React from 'react';

function ElegantTable1(props) {
	const title = props.title || "elegant table 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M23.5 24.7h17c.5 0 1-.2 1.4-.7.3-.4.5-1 .3-1.5-1-4.2-4.3-7.1-8.5-7.8V3c0-1-.8-1.8-1.8-1.8S30.1 2 30.1 3v11.8c-4.2.6-7.5 3.6-8.5 7.8-.1.5 0 1.1.3 1.5.6.3 1.1.6 1.6.6zm8.5-6.6c2.6 0 4.7 1.1 5.9 3.1H26.1c1.2-1.9 3.3-3.1 5.9-3.1z"/>
		<path d="M58.5 32.1h-53c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h4.6V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V35.6h4.1v15.3c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V35.6h21.7v15.3c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V35.6h4.1V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V35.6H59c1 0 1.8-.8 1.8-1.8s-1.4-1.7-2.3-1.7z"/>
	</g>
</svg>
	);
};

export default ElegantTable1;