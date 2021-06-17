import React from 'react';

function FlaskAlt(props) {
	const title = props.title || "flask alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.7 61.7L41.2 28V3.1h4.2c.8 0 1.5-.7 1.5-1.5S46.2.1 45.4.1H19.7c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h3.1V28L2.3 61.7c-.3.5-.3 1 0 1.5s.8.8 1.3.8h56.8c.5 0 1-.3 1.3-.8s.2-1.1 0-1.5zm-55.4-.8l19.3-31.8c.1-.2.2-.5.2-.8V3.1h12.5v4.2h-3.7c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h3.7V15h-4.7c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h4.7v4.7h-3.7c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h3.7v2.6c0 .3.1.5.2.8l19.3 31.8H6.3z"/>
	</g>
</svg>
	);
};

export default FlaskAlt;