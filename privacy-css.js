// ==UserScript==
// @name        Privacy friendly CSS
// @namespace   lmao
// @version     1
// @description Hide CSS that compromise privacy
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAD/AAAcAAA1AABEAABVAAC3AADnAAD2AACFAAClAABlAAB3AADHAACVAADYAABCnXhrAAAD10lEQVRIx73TV4xMURgH8H/OnRmZWe3T7h2sOWaNXu7oJRg9UccuHgTRBatMtAgSg+gJu9q+kFmihcQoD8qLTkK0CIkoy0YJITsRD0rCKTHFrnkSv5e5c88/53znO+fiPwvsvrN038cPNqrG9pJmHkRVnPcpaTlHJY60cfPSpsrzl1LKihrmLvxhCM2i3OHvDx0d+H7e3F6JBv5iZMiJfhFTfPYDMHrMImpwimWWUdSgDQkbno7fFpUPVgh+pHFbZR4SovSctDCM9Hac9IKd9rO8EevtBCkXgY5IMmgquwypP7qqfcp/Tp4KLONDVsWh3RSBB2rnZfit69ocUdqLn2prrRZYM0Jg4JibamKsqe7gfEh5GOAfeYJjVHIPZvil97rcXkMog30byWRwXYRWoxHbzNFHJJpAarO8NdEBBsdCaP3WMJltTmQd4zlnekTq9Z5dgACwAlrpK4BxdV5mvLuspRgMSHbCIFF0iS8MZ5S8oYBYKY7rByC4dDM9uSIUmPOIwxgQBoYeF93auP4qFyPbIVXziWeGTH1EFM57kJo2hqQju6BwIyRf6RmCjdT4JOdiwNgiH/PPD3qoqlsNaXRd+fKtFfECxlZVNVF9SOsgTZEr2TUjJJbyeNX1IZrKIbyGlBABfpQPv2UDrly13LkJXDVhpQ5MhtGwcyF4HKjlU4E8xwB0AvDjd6AGmevZ87EcQRHgcO52e9uNsYELOrAa/Yh81YlmYLQJ5HWyq0+kzQ/DQKEusg6CRI27ryy8nReRS0wsoetkmRwogHSprliCckfEjXG9yAQc74J0WB99vu6DF3i3pMucsXM6tpBbxd2mVJAwXwGogNRBvGRA4jtHKTXkAIwLGCR/mT4Lh75oneQXXP9sAYfGRDCsnw7pX/jRZkU3M44kjw2l5zRIzb4CbZ8dULdL6wbNPZOpK0B6gN1UR1mdoxAaL/GrWiLPL3SEwW9YMTU/d64BtLahAVyucWhj9Mm8ign9IfQaBtd2/GbvCAEBpG5eMcrj2I0ktpKLeaqXQ3Pst42KGIshpdTmQLAeTgFGJ2wvh+tayMOR0n1RZ8B9z13vnOPBnsBq4E1ffgZpPFZHWVpO2cvhjYpOcbBd5TlhpDu5zq9mHGZcVi0y+VFkcFkDdyKJfTt99wEyHSEzDM90KH0nexpwZHJHKYYhjzlwGe0pP/IKfxociaEb7YDbi6KGJY1R2cR76E6NAtXqY4pPH3plLcl8LD7V+cOLUbUWRFZRPTAbVZO3mxK18Xc1ZaAiS8ARJXpZliXAomR94siiiMx8ZBOkXGTlnH0F/9ov1xPtWwEqP9wAAAAASUVORK5CYII=
// @author      Saint of Vice
// @license     MIT
// @include     *
// @grant       GM_addStyle
// @run-at      document-start
// ==/UserScript==
GM_addStyle(`
/* DuckDuckGo */
[data-layout="ad"] {
  display: none !important;
}
`);
