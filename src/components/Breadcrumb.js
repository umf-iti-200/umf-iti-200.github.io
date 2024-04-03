import Link from "next/link";

function Breadcrumb({ children }) {

    return (
        <nav>
            <ol className="breadcrumb breadcrumb-chevron bgs-body-tertiary rounded-3 sp-3">
                <li className="breadcrumb-item">
                    <Link href="/">
                        <i className="bi bi-house-door-fill"></i>
                        <span className="visually-hidden">Home</span>
                    </Link>
                </li>
                {children}
            </ol>
        </nav>
    );
}

Breadcrumb.Item = function ({ children, href }) {

    if (href) {
        return (
            <li className="breadcrumb-item">
                <Link href={href} className="text-decoration-none">
                    {children}
                </Link>
            </li>
        );
    } else {
        return (
            <li className="breadcrumb-item active">
                {children}
            </li>
        );
    }
};

export default Breadcrumb;
