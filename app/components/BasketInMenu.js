import React from "react";
import Link from "next/link";

const BasketInMenu = () => {
  return (
    <div>
      <ul>
        <li>Coșul este gol</li>
      </ul>
      <div className="px-2">
        <Link href={"../basket"} className="btn go-to-basket">
          Vezi detalii coș
        </Link>
      </div>
    </div>
  );
};

export default BasketInMenu;
