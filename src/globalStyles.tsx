import { css, Global } from '@emotion/react';

const globalStyles = css`
  /* Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property */
  *:where(
      :not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)
    ) {
    all: unset;
    display: revert;
  }

  /* Preferred box-sizing value */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Fix mobile Safari increase font-size on landscape mode */
  html {
    -moz-text-size-adjust: none;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: never;
  }

  /* Reapply the pointer cursor for anchor tags */
  a,
  button {
    cursor: pointer;
  }

  /* Remove list styles (bullets/numbers) */
  ol,
  ul,
  menu,
  summary {
    list-style: none;
  }

  /* For images to not be able to exceed their container */
  img {
    max-inline-size: 100%;
    max-block-size: 100%;
  }

  /* Removes spacing between cells in tables */
  table {
    border-collapse: collapse;
  }

  /* Safari - solving issue when using user-select:none on the <body> text input doesn't work */
  input,
  textarea {
    -webkit-user-select: auto;
  }

  /* Revert the 'white-space' property for textarea elements on Safari */
  textarea {
    white-space: revert;
  }

  /* Minimum style to allow to style meter element */
  meter {
    -webkit-appearance: revert;
    appearance: revert;
  }

  /* Preformatted text - use only for this feature */
  :where(pre) {
    all: revert;
    box-sizing: border-box;
  }

  /* Reset default text opacity of input placeholder */
  ::placeholder {
    color: unset;
  }

  /* Remove default dot (•) sign */
  ::marker {
    content: initial;
  }

  /* Fix the feature of 'hidden' attribute. display:revert; revert to element instead of attribute */
  :where([hidden]) {
    display: none;
  }

  /* Revert for bug in Chromium browsers */
  :where([contenteditable]:not([contenteditable='false'])) {
    -moz-user-modify: read-write;
    -webkit-user-modify: read-write;
    overflow-wrap: break-word;
    /* @ts-expect-error: -webkit-line-break is a non-standard property */
    -webkit-line-break: after-white-space;
    -webkit-user-select: auto;
  }

  /* Apply back the draggable feature - exist only in Chromium and Safari */
  :where([draggable='true']) {
    /* @ts-expect-error: -webkit-user-drag is a non-standard property */
    -webkit-user-drag: element;
  }

  /* Revert Modal native behavior */
  :where(dialog:modal) {
    all: revert;
    box-sizing: border-box;
  }
`;

const GlobalStyles = () => {
  return <Global styles={globalStyles} />;
};

export default GlobalStyles;
