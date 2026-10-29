import Link from "next/link";
import { ReactNode } from "react";

export default function Header(): ReactNode {
  return (
    <header>
      <div>
        {/* logo */}
        <div></div>

        {/* navs */}
        <nav>
          <ul>
            <li>
              <Link href="/"></Link>
            </li>
          </ul>
        </nav>

        {/* buttons */}
        <div>
          <button></button>
          <button></button>
        </div>
      </div>
    </header>
  );
}
``;
