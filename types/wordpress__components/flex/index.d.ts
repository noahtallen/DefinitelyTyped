import { ComponentType, HTMLProps, CSSProperties } from 'react';

declare namespace Flex {
    interface FlexProps {
        /**
         * Aligns children using CSS Flexbox `align-items`. Vertically aligns content if the `direction` is `row`, or horizontally aligns content if the `direction` is `column`.
         *
         * In the example below, `flex-start` will align the children content to the top.
         *
         * @default 'center'
         */
        align?: CSSProperties[ 'alignItems' ];
        /**
         * The direction flow of the children content can be adjusted with `direction`. `column` will align children vertically and `row` will align children horizontally.
         *
         * @default 'row'
         */
        direction?: Array< CSSProperties[ 'flexDirection' ] | undefined >| CSSProperties[ 'flexDirection' ];
        /**
         * Expands to the maximum available width (if horizontal) or height (if vertical).
         *
         * @default true
         */
        expanded?: boolean;
        /**
         * Spacing in between each child can be adjusted by using `gap`. The value of `gap` works as a multiplier to the library's grid system (base of `4px`).
         *
         * @default 2
         */
        gap?: number | string;
        /**
         * Horizontally aligns content if the `direction` is `row`, or vertically aligns content if the `direction` is `column`.
         *
         * @default 'space-between'
         */
        justify?: CSSProperties[ 'justifyContent' ];
        /**
         * Determines if children should wrap.
         *
         * @default false
         */
        wrap?: boolean;
        /**
         * @deprecated
         */
        isReversed?: boolean;
    }

    interface Props extends FlexProps, Omit<HTMLProps<HTMLDivElement>, 'wrap'> {}
}

declare const Flex: ComponentType<Flex.Props>;

export default Flex;
