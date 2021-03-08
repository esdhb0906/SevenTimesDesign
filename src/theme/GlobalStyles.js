import { createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font};
    transition: all 0.50s linear;
  }

	button {
		width: fit-content;
		height: fit-content;
		background: none;
    border-color: unset;
    border: unset;
	}

	button:focus {
		outline: unset;
	}

  a {
    color: ${({ theme }) => theme.colors.link.text};
    cursor: pointer;
  }
`;