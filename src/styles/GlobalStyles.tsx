import { Global, css } from '@emotion/react'

const globalStyles = css`
@import url(https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap);

  * {
    box-sizing: border-box;
  }

  body,
  html {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    justify-content: center;
    align-items: center;
  }
`

function GlobalStyles() {
    return <Global styles = {globalStyles} />
}

export default GlobalStyles