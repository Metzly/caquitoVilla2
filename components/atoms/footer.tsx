
"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";

export default function MyFooter() {
  return (
    <footer className="text-center">
      <div className="p-6 pt-0">
        <hr className="bg-myGreen h-0.5" />
        <div className="flex justify-evenly">
          <div className="my-6">
            <h5
              className="mb-2.5 font-bold uppercase">
              Síguenos
            </h5>

            <ul className="mb-0">
              <li className="space-x-1">
                <SocialIcon network="instagram" style={{width: 25, height: 25}} /><a href="https://instagram.com">Instagram</a>
              </li>
            </ul>
          </div>
          <div className="my-6">
            <h5
              className="mb-2.5 font-bold uppercase">
              Contáctanos
            </h5>

            <ul className="mb-0">
              <li className="space-x-1">
                <SocialIcon network="whatsapp" style={{width: 25, height: 25}} /><a href="https://wa.link/dc46i8">WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
