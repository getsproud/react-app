import React from 'react';

function CourtAlt(props) {
	const title = props.title || "court alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.6 18.6L35.2 2.3c-1.9-1.3-4.5-1.3-6.4 0L5.4 18.6c-.6.4-.9 1.2-.7 2 .2.7.9 1.2 1.7 1.2h5.5v37.4H10c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h44c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7h-1.7V21.8h5.2c.8 0 1.4-.5 1.7-1.2.2-.7 0-1.5-.6-2zM30.8 5.1c.7-.5 1.7-.5 2.4 0L52 18.3H12L30.8 5.1zm3.8 54.2h-7.1V21.8h9.3v37.4h-2.2zM15.4 21.8H24v37.4h-8.6V21.8zm33.4 37.5h-8.6V21.8h8.6v37.5z"/>
	</g>
</svg>
	);
};

export default CourtAlt;