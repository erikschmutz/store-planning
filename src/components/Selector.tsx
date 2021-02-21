import React, { ReactNode } from 'react';
import { classnames } from 'tailwindcss-classnames';
import { OnChangeProps } from './Props';

type OnChangeEvent = React.ChangeEvent<HTMLSelectElement>;

interface SelectorProps extends OnChangeProps<OnChangeEvent> {
    children: ReactNode;
    name?: string;
}

export default React.forwardRef<HTMLSelectElement, SelectorProps>(
    function Selector(props: SelectorProps, ref) {
        const { className, children, name } = props;

        const defaultClass: string = classnames(
            'focus:outline-none',
            'border',
            'p-1',
            'rounded',
            'w-full',
            'mt-2',
            'mb-2',
        );

        return (
            <select
                name={name}
                ref={ref}
                className={`${defaultClass} ${className}`}
            >
                {children}
            </select>
        );
    },
);

interface OptionProps {
    children: ReactNode;
    value: string;
}

function Option(props: OptionProps) {
    return <option {...props} className="bg-red-600" />;
}

export { Option };
