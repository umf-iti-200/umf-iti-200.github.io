import Link from "next/link";

import Settings from "../../data/settings.json";

function PreviousButton({ href, disabled = false }) {

    return (
        <li className={`page-item ${disabled ? "disabled" : ""}`}>
            <Link class="page-link" href={disabled ? "#" : href}>&#8592; Previous</Link>
        </li>
    );
}

function NextButton({ href, disabled = false }) {

    return (
        <li className={`page-item ${disabled ? "disabled" : ""}`}>
            <Link class="page-link" href={disabled ? "#" : href}>Next &#8594;</Link>
        </li>
    );
}

export default function Pagination({ href, pageNumber, maxPages }) {

    const prevHref = href.replace("$1", pageNumber - 1);
    const nextHref = href.replace("$1", pageNumber + 1);

    return (
        <nav className="mt-3">
            <ul className="pagination justify-content-center">
                <PreviousButton href={prevHref} disabled={pageNumber == 1} />
                <NextButton href={nextHref} disabled={pageNumber == maxPages} />
            </ul>
        </nav>
    );
}
