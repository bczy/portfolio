import React, { useRef, useEffect } from 'react';
import i18n from '../i18n';

import styled, {keyframes} from 'styled-components'

function Marquee(props){
		const box = useRef(null);
		useEffect(() => {
			box.current.style.opacity = props.scroll;
		});

    return (
				<Box ref={box}>
						<div className="inner">
							<span>{i18n.t(props.message)}</span>
						</div>
						<div className="inner">
							<span>{i18n.t(props.message)}</span>
						</div>
				</Box>
    );
}

// Create the keyframes
const marquee = keyframes`
 {
	from {
		left: 100%;
	}

	to {
		left: -100%;
	}
}
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Box = styled.div`  
	{
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 25% 0;
		align:center;
		width:100%;
		font-size: 4.25em;
		font-family: 'Muli',sans-serif;
		color: #fff;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-shadow:   0px -0px,  
                 0px -0px,
                 0px  3px 0 #212121,
                 0px  3px 0 #212121,
                -3px  0px 0 #212121,  
                 3px  0px 0 #212121,
                -3px  0px 0 #212121,
                 3px  0px 0 #212121,
                -3px -3px 0 #212121,  
                 3px -3px 0 #212121,
                -3px  3px 0 #212121,
                 3px  3px 0 #212121,
                -3px  9px 0 #212121,
                 0px  9px 0 #212121,
                 6px  2px 0 #212121,
                 0 9px 1px rgba(0,0,0,.1),
                 0 0 3px rgba(0,0,0,.1),
                 0 3px 1px rgba(0,0,0,.3),
                 0 6px 3px rgba(0,0,0,.2),
                 0 9px 9px rgba(0,0,0,.25),
                 0 12px 12px rgba(0,0,0,.2),
                 0 18px 18px rgba(0,0,0,.15);
	}

.inner {
	width: 400px;
	height: 200px;
	line-height: 200px;
	font-family: sans-serif;
	font-weight: bold;
	white-space: nowrap;
	overflow: hidden;
	padding-right:0%
}

.inner:first-child {
	background-color: burlywood;
	color: rgb(212, 202, 189);
	transform-origin: right;
	transform: perspective(2.5em) rotateY(-15deg);
}

.inner:last-child {
	background-color: rgb(228, 206, 177);
	color: antiquewhite;
	transform-origin: left;
	transform: perspective(2.5em) rotateY(15deg);
}

.inner span {
	position: absolute;
	animation: ${marquee} 5s linear infinite;
}

.inner:first-child span {
	animation-delay: 2.5s;
	left: -100%;
}
`;

export default Marquee;
