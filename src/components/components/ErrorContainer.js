import React from 'react';
import { css } from '@emotion/react';

function ErrorContainer({ children }) {
    const error = css`
        padding: 10px;
        background-color: #ff7c7c;
        color: #fff;
    `
    return <div className="error-container" css={error}>{children}</div>
}

export default ErrorContainer;