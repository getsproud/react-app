import React from 'react';

function ApartmentsAlt3(props) {
	const title = props.title || "apartments alt 3";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.9 2H32.3c-3.2 0-5.9 2.6-5.9 5.9v11.2l-15.1 3.8c-2.6.7-4.4 3-4.4 5.7v29.9H3c-1 0-1.8.8-1.8 1.8S2 62 3 62H56.9c3.2 0 5.9-2.6 5.9-5.9V7.9c0-3.3-2.7-5.9-5.9-5.9zM25.7 58.5h-6.9V49c0-.7.6-1.3 1.3-1.3h4.4c.7 0 1.3.6 1.3 1.3v9.5zm3.5 0V49c0-2.6-2.1-4.8-4.8-4.8H20c-2.6 0-4.8 2.1-4.8 4.8v9.5h-4.8V28.6c0-1.1.7-2 1.8-2.3L31 21.5c.7-.2 1.5 0 2 .4.6.5.9 1.1.9 1.9v34.7h-4.7zm30.1-2.4c0 1.3-1.1 2.4-2.4 2.4H41.1h-3.6V23.8c0-1.8-.8-3.5-2.3-4.6s-3.3-1.5-5.1-1.1l-.1.1V7.9c0-1.3 1.1-2.4 2.4-2.4h24.5c1.3 0 2.4 1.1 2.4 2.4v48.2z"/>
	</g>
</svg>
	);
};

export default ApartmentsAlt3;