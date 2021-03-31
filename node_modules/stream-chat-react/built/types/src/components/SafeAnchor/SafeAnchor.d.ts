import React from 'react';
/**
 * SafeAnchor - In all ways similar to a regular anchor tag.
 * The difference is that it sanitizes the href value and prevents XSS
 */
export declare type SafeAnchorProps = {
    /** Set the className for the anchor tag element */
    className?: string;
    /** Specifies that the target (href attribute) will be downloaded instead of navigating to a file */
    download?: boolean;
    /** Set the href attribute for the anchor tag element */
    href?: string;
    /** Set the rel attribute for the anchor tag element */
    rel?: string;
    /** Set the target attribute for the anchor tag element */
    target?: string;
};
export declare const SafeAnchor: React.FC<SafeAnchorProps>;
//# sourceMappingURL=SafeAnchor.d.ts.map