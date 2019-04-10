import React from 'react';
import i18n from '../i18n';

import styled, {keyframes} from 'styled-components'

function Marquee(props){
    return (
      <Box>
          <div class="inner">
						<span>{i18n.t(props.message)}</span>
          </div>
          <div class="inner">
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
		margin-top: 1em;
		align:center;
		width:100%;
	}

.inner {
	width: 400px;
	height: 200px;
	line-height: 200px;
	font-size: 4em;
	font-family: sans-serif;
	font-weight: bold;
	white-space: nowrap;
	overflow: hidden;
}

.inner:first-child {
	background-color: indianred;
	color: darkred;
	transform-origin: right;
	transform: perspective(175px) rotateY(-15deg);
}

.inner:last-child {
	background-color: lightcoral;
	color: antiquewhite;
	transform-origin: left;
	transform: perspective(175px) rotateY(15deg);
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
