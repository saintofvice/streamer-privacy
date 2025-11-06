// ==UserScript==
// @name       Hide My Name (mutation observer, may break writing)
// @description  Replace <WORD> with <ANOTHERWORD>, for example to hide your real name. (This version may break stuff). Dont forget to edit this with your name and DONT show this file on streams.
// @version    0.2
// @icon       data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAD/AAAcAAA1AABEAABVAAC3AADnAAD2AACFAAClAABlAAB3AADHAACVAADYAABCnXhrAAAD10lEQVRIx73TV4xMURgH8H/OnRmZWe3T7h2sOWaNXu7oJRg9UccuHgTRBatMtAgSg+gJu9q+kFmihcQoD8qLTkK0CIkoy0YJITsRD0rCKTHFrnkSv5e5c88/53znO+fiPwvsvrN038cPNqrG9pJmHkRVnPcpaTlHJY60cfPSpsrzl1LKihrmLvxhCM2i3OHvDx0d+H7e3F6JBv5iZMiJfhFTfPYDMHrMImpwimWWUdSgDQkbno7fFpUPVgh+pHFbZR4SovSctDCM9Hac9IKd9rO8EevtBCkXgY5IMmgquwypP7qqfcp/Tp4KLONDVsWh3RSBB2rnZfit69ocUdqLn2prrRZYM0Jg4JibamKsqe7gfEh5GOAfeYJjVHIPZvil97rcXkMog30byWRwXYRWoxHbzNFHJJpAarO8NdEBBsdCaP3WMJltTmQd4zlnekTq9Z5dgACwAlrpK4BxdV5mvLuspRgMSHbCIFF0iS8MZ5S8oYBYKY7rByC4dDM9uSIUmPOIwxgQBoYeF93auP4qFyPbIVXziWeGTH1EFM57kJo2hqQju6BwIyRf6RmCjdT4JOdiwNgiH/PPD3qoqlsNaXRd+fKtFfECxlZVNVF9SOsgTZEr2TUjJJbyeNX1IZrKIbyGlBABfpQPv2UDrly13LkJXDVhpQ5MhtGwcyF4HKjlU4E8xwB0AvDjd6AGmevZ87EcQRHgcO52e9uNsYELOrAa/Yh81YlmYLQJ5HWyq0+kzQ/DQKEusg6CRI27ryy8nReRS0wsoetkmRwogHSprliCckfEjXG9yAQc74J0WB99vu6DF3i3pMucsXM6tpBbxd2mVJAwXwGogNRBvGRA4jtHKTXkAIwLGCR/mT4Lh75oneQXXP9sAYfGRDCsnw7pX/jRZkU3M44kjw2l5zRIzb4CbZ8dULdL6wbNPZOpK0B6gN1UR1mdoxAaL/GrWiLPL3SEwW9YMTU/d64BtLahAVyucWhj9Mm8ign9IfQaBtd2/GbvCAEBpG5eMcrj2I0ktpKLeaqXQ3Pst42KGIshpdTmQLAeTgFGJ2wvh+tayMOR0n1RZ8B9z13vnOPBnsBq4E1ffgZpPFZHWVpO2cvhjYpOcbBd5TlhpDu5zq9mHGZcVi0y+VFkcFkDdyKJfTt99wEyHSEzDM90KH0nexpwZHJHKYYhjzlwGe0pP/IKfxociaEb7YDbi6KGJY1R2cR76E6NAtXqY4pPH3plLcl8LD7V+cOLUbUWRFZRPTAbVZO3mxK18Xc1ZaAiS8ARJXpZliXAomR94siiiMx8ZBOkXGTlnH0F/9ov1xPtWwEqP9wAAAAASUVORK5CYII=
// @author     Saint of Vice
// @include    *
// @grant      none
// ==/UserScript==
(function () {
    'use strict'; // Enforces stricter parsing and error handling in JavaScript

    // Create a map of text replacements: keys are words to find, values are what to replace them with (lowercase keys for matching)
    const replacements = new Map([
        ['williamriker', 'saintofvice'],
        ['william riker', 'saint of vice'],
        ['riker', 'vice'],
    ]);

    // This function recursively replaces text in the DOM
    function replaceText(node) {
        // If the node is a text node (e.g., actual visible text)
        if (node.nodeType === Node.TEXT_NODE) {
            let text = node.nodeValue;

            // Loop through all replacements
            replacements.forEach((value, key) => {
                const regex = new RegExp(key, 'gi'); // 'g' = global, 'i' = case-insensitive
                // Replace all instances of the key with the corresponding value
                text = text.replace(regex, value);
            });

            // Update the text in the DOM
            node.nodeValue = text;
        } else {
            // If it's not a text node, recursively call replaceText on all its children
            node.childNodes.forEach(replaceText);
        }
    }

    // Start by replacing text in the current document body
    replaceText(document.body);

    // Create a MutationObserver to monitor the DOM for changes (e.g., new content added dynamically)
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            // For each newly added node, run the text replacement function
            mutation.addedNodes.forEach(node => {
                replaceText(node);
            });
        });
    });

    // Start observing the document body for changes to its child nodes and subtrees
    observer.observe(document.body, {
        childList: true, // Watch for the addition or removal of child elements
        subtree: true    // Watch the entire subtree, not just immediate children
    });
})();
