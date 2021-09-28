import { ComponentType, HTMLProps, CSSProperties } from 'react';

declare namespace FlexBlock {
    interface FlexBlockProps {
        /**
         * The (CSS) display of the `FlexItem`.
         */
        display?: CSSProperties[ 'display' ];
    }
    interface Props extends FlexBlockProps, HTMLProps<HTMLDivElement> {}
}

declare const FlexBlock: ComponentType<FlexBlock.Props>;

export default FlexBlock;
