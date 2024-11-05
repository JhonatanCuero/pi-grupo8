import React from 'react';
import styled from 'styled-components';

const Button_Home = ({ text }) => {
    return (
        <StyledWrapper>
            <button className="button">
                <p>{text}</p>
            </button>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .button {
    all: unset;
    display: flex;
    align-items: center;
    position: relative;
    padding: 0.2em 1.5em; /* Reduce el padding para menor altura */
    height: 35px; /* Establece una altura fija */
    border: mediumspringgreen solid 0.15em;
    border-radius: 0.25em;
    color: mediumspringgreen;
    font-size: 1em; /* Ajusta el tamaño de la fuente */
    font-weight: 600;
    cursor: pointer;
    overflow: hidden;
    transition: border 300ms, color 300ms;
    user-select: none;
  }

  .button p {
    z-index: 1;
  }

  .button:hover {
    color: #212121;
  }

  .button:active {
    border-color: teal;
  }

  .button::after, .button::before {
    content: "";
    position: absolute;
    width: 6em; /* Ajusta el tamaño del efecto circular */
    aspect-ratio: 1;
    background: mediumspringgreen;
    opacity: 50%;
    border-radius: 50%;
    transition: transform 500ms, background 300ms;
  }

  .button::before {
    left: 0;
    transform: translateX(-5em);
  }

  .button::after {
    right: 0;
    transform: translateX(5em);
  }

  .button:hover:before {
    transform: translateX(-1em);
  }

  .button:hover:after {
    transform: translateX(1em);
  }

  .button:active:before,
  .button:active:after {
    background: teal;
  }
`;

export default Button_Home;
