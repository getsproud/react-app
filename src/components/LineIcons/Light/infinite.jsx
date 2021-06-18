import React from 'react';

function Infinite(props) {
	const title = props.title || "infinite";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M50 18c-4.9 0-9.7 4.9-12.9 8.1l-5.2 5.2c-1-1-2-2.1-3-3.1-1.4-1.4-2.8-2.9-4.2-4.3l-.7-.7c-2.5-2.5-5.2-5.2-10-5.2-7.7 0-14 6.3-14 14s6.3 14 14 14c2.2 0 4.5-.5 6.4-1.6 2-1 7-4.4 9.9-7.2l1.6-1.6c.9.9 1.8 1.8 2.8 2.6.6.6 1.3 1.2 2 1.8 3.4 3 7.7 6 13.4 6 7.7 0 14-6.3 14-14S57.7 18 50 18zM28.2 35.1c-2.6 2.6-7.3 5.7-9.1 6.7-1.6.8-3.4 1.2-5.1 1.2-6.1 0-11-4.9-11-11s4.9-11 11-11c3.6 0 5.5 2 8 4.4l.7.7c1.4 1.4 2.8 2.8 4.1 4.2 1 1 2 2.1 3 3.1l-1.6 1.7zM50 43c-4.7 0-8.4-2.7-11.4-5.3-.6-.6-1.3-1.1-1.9-1.7-.9-.8-1.8-1.7-2.7-2.6l5.3-5.3C41.9 25.5 46.4 21 50 21c6.1 0 11 4.9 11 11s-4.9 11-11 11z"/>
	</g>
</svg>
	);
};

export default Infinite;