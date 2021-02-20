import style from './StoreMapUtils.module.scss';

export class StoreMapUtils {
    static HOVERABLE_ITEM = style['hoverable-item'];
    static MARKED_ITEM = style['marked-item'];

    static recursiveForEach(
        element: SVGElement,
        fn: (el: SVGElement) => void,
    ): void {
        for (const child of [].slice.call(element.children)) {
            StoreMapUtils.recursiveForEach(child as SVGElement, fn);
        }

        fn(element);
    }

    static getId(element: SVGElement): string | undefined {
        const attributes = element.attributes;
        const id = attributes.getNamedItem('id')?.value;

        if (!id) {
            return undefined;
        }

        return id;
    }
}
