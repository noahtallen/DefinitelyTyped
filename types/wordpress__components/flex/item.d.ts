import { ComponentType, HTMLProps, CSSProperties } from 'react';

declare namespace FlexItem {
    interface FlexItemProps {
        /**
         * The (CSS) display of the `FlexItem`.
         */
        display?: CSSProperties[ 'display' ];
        /**
         * Determines if `FlexItem` should render as an adaptive full-width block.
         *
         * @default true
         */
        isBlock?: boolean;
    }

    interface Props extends FlexItemProps, HTMLProps<HTMLDivElement> {}
}

declare const FlexItem: ComponentType<FlexItem.Props>;

export default FlexItem;
