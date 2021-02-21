import Badge from './Badge';
import { BaseProps } from './Props';

interface CardInput extends BaseProps {
    children: React.ReactNode;
    onClose?: () => void;
}

export default function Card(props: CardInput) {
    const { children, className, onClose } = props;

    return (
        <div className={`shadow-md p-10 bg-white rounded ${className}`}>
            {onClose && <Badge onClick={onClose}>x</Badge>}
            {children}
        </div>
    );
}
