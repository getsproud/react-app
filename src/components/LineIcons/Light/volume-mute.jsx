import React from 'react';

function VolumeMute(props) {
	const title = props.title || "volume mute";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<g className="st0" opacity="5.000000e-02">
			<path className="st1" d="M-18-18H82V82H-18z" fill="none" stroke="#000000"/>
			<circle className="st1" cx="32" cy="32" fill="none" r="50" stroke="#000000"/>
			<path className="st1" d="M-3.2-3.2h70.3v70.3H-3.2z" fill="none" stroke="#000000"/>
			<circle className="st1" cx="32" cy="32" fill="none" r="35.2" stroke="#000000"/>
			<path className="st1" d="M7.2 7.2h49.7v49.7H7.2z" fill="none" stroke="#000000"/>
			<circle className="st1" cx="32" cy="32" fill="none" r="24.8" stroke="#000000"/>
			<path className="st1" d="M-18-18L82 82" fill="none" stroke="#000000"/>
			<path className="st1" d="M82-18L-18 82" fill="none" stroke="#000000"/>
			<path className="st1" d="M32-18V82" fill="none" stroke="#000000"/>
			<path className="st1" d="M-18 32H82" fill="none" stroke="#000000"/>
		</g>
		<path d="M48.8 28.8c-.8 0-1.5.7-1.5 1.5v27.5c0 .7-.5 1-.7 1.1-.2.1-.7.3-1.3 0L28.7 48.5c-.7-.5-1.6-.2-2 .5-.4.7-.2 1.6.5 2.1l16.7 10.4c.7.4 1.5.7 2.3.7.7 0 1.4-.2 2.1-.5 1.4-.8 2.2-2.2 2.2-3.8V30.3c-.2-.8-.8-1.5-1.7-1.5z"/>
		<path d="M63.6 2.3c-.6-.6-1.5-.6-2.1 0L50.3 13.4V6.2c0-1.6-.9-3-2.3-3.8-1.4-.7-3.1-.7-4.4.2L25.9 14.4c-.4.3-.9.4-1.4.4H5.6c-3.1 0-5.6 2.5-5.6 5.6v25.3c0 3.1 2.5 5.6 5.6 5.6h6.9l-7.8 7.8c-.6.6-.6 1.5 0 2.1.3.3.7.4 1.1.4s.8-.1 1.1-.4L63.6 4.5c.5-.6.5-1.6 0-2.2zm-48.2 46H5.6c-1.4 0-2.6-1.1-2.6-2.6V20.4c0-1.4 1.1-2.6 2.6-2.6h18.9c1.1 0 2.2-.3 3.1-.9L45.4 5.2c.6-.4 1.1-.2 1.3-.1.2.1.7.4.7 1.1v10.2l-32 31.9c.1 0 0 0 0 0z"/>
	</g>
</svg>
	);
};

export default VolumeMute;