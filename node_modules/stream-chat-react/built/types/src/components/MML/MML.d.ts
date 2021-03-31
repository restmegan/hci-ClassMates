import React from 'react';
import type { ActionHandlerReturnType } from '../Message/hooks/useActionHandler';
export declare type MMLProps = {
    /** mml source string */
    source: string;
    /** submit handler for mml actions */
    actionHandler?: ActionHandlerReturnType;
    /** align mml components to left/right
     * @default right
     */
    align?: 'left' | 'right';
};
/**
 * MML - A wrapper component around MML-React library
 */
export declare const MML: React.FC<MMLProps>;
//# sourceMappingURL=MML.d.ts.map