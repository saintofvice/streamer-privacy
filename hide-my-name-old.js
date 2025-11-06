// ==UserScript==
// @name       Hide My Name
// @description  Replace <WORD> with <ANOTHERWORD>, for example to hide your real name. Dont forget to edit this with your name and DONT show this file on streams.
// @author     Saint of Vice
// @include *
// @run-at     document-end
// ==/UserScript==
window.addEventListener('load', function () {
    // Prevent the script from running more than once
    if (window.__textReplacementDone__) return;
    window.__textReplacementDone__ = true;

    (function () {
        // Declare variables
        var replacements, regex, key, textnodes, node, s;

        // Use XPath to find all text nodes under <body>
        textnodes = document.evaluate(
            "//body//text()",                 // XPath expression: select all text nodes under body
            document,                         // context node: the document itself
            null,                             // no namespace resolver
            XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, // return all matches in a snapshot list
            null                              // no existing result reuse
        );

        // Loop through each matched text node
        for (var i = 0; i < textnodes.snapshotLength; i++) {
            node = textnodes.snapshotItem(i); // Get the i-th text node from the snapshot

            // Ensure the node exists, is a text node, and contains more than just whitespace
            if (node != null && node.nodeName == '#text' && /\S/.test(node.nodeValue)) {

                s = node.data; // Get the text content of the node

                // Perform a series of case-sensitive, word-boundary replacements
                s = s.replace(/\bwilliam\b/g, "saint");           // "william" → "saint"
                s = s.replace(/\bWilliam\b/g, "Saint");           // "William" → "Saint"
                s = s.replace(/\bwilliamriker\b/g, "saintofvice");// "williamriker" → "saintofvice"
                s = s.replace(/\bWilliamRiker\b/g, "SaintOfVice");// "WilliamRiker" → "SaintOfVice"
                s = s.replace(/\briker\b/g, "vice");              // "riker" → "vice"
                s = s.replace(/\bRiker\b/g, "Vice");              // "Riker" → "Vice"

                node.data = s; // Update the node's text with the replaced content
            }
        }
    })();

});
