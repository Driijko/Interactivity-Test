import styled, {css} from "styled-components";

import positioning from "./helpers/positioning";
import direction from "./helpers/direction"

// HIGHLIGHT ///////////////////////////////////////////////////////

// const highlighted = `
//     color: white;
//     background-color: magenta;
//     border: 3px solid white;
// `;

// const notHighlighted = ``;

// function highlight(highlight) {
//     if (highlight === null) {
//         return ``;
//     }
//     else if (highlight) {return css`
//         animation: ${direction(notHighlighted, highlighted)} 2s ease-out forwards;
//     `}
//     else {return css`
//         animation: ${direction(highlighted, notHighlighted)} 2s ease-in forwards;
//     `};
// };

function transitions(interactivity) {
    if (interactivity === "able") {
        return `
            color: black;
            transition-duration: 5s;
        `;
    }
    else if (interactivity === "highlight") {
        return `
            color: white;
            transition-duration: 5s;
        `;
    }
    else if (interactivity === "selected") {
        return `
            color: magenta;
            transition-duration: 0s;
        `
    }
}

const StyledNavLink = styled("a")`${({
        spatial, width, interactivity,
    })=>css`
        ${positioning(spatial)}
        font-size: ${width / 8}px;
        text-align: center;
        cursor: pointer;
        box-sizing: border-box;
        border: 3px solid rgba(0, 0, 0, 0);
        transistion-property: color;
        ${transitions(interactivity)}
    `
}`;


// const StyledNavLink = styled.a`${props=>css`
//     ${positioning(props.spatial)}
//     font-size: ${props.width / 8}px;
//     text-align: center;
//     cursor: pointer;
//     box-sizing: border-box;
//     border: 3px solid rgba(0, 0, 0, 0);
//     color: darkOrange;
//     ${highlight(props.highlight)}
// `}`;

export default StyledNavLink;