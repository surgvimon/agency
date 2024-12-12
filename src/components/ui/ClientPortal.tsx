import React from 'react'
import { createPortal } from 'react-dom';

interface ClientPortalProps {
    children: React.ReactNode;
    show?: boolean;
    onClose?: () => void;
    selector: string;
}

const ClientPortal:React.FC<ClientPortalProps> = ({ children, selector, show }) => {
    const ref = React.useRef<Element | null>(null);
    React.useEffect(() => {
      ref.current = document.getElementById(selector);
    }, [selector]);
    return show && ref.current ? createPortal(children, ref.current) : null;
}

export default ClientPortal;
