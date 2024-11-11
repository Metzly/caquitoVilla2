"use client";
import MenuList from "../atoms/menuList";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function NavBar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        if (typeof window !== "undefined") {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, [lastScrollY]);

    return (
        <div>
            <nav
                className={`fixed z-20 w-svw bg-white mx-auto border-b-4 border-b-myGreen px-8 transition-transform duration-300 ${
                    isVisible ? "transform translate-y-0" : "transform -translate-y-full"
                }`}
                style={{ scrollBehavior: "smooth" }}
            >
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Image src="/CaquitoLogoSinFondo.png" width={100} height={50} alt="logo" />
                        </div>
                    </div>
                    <div className="md:block">
                        <div className="ml-4 flex items-center space-x-4">
                            <MenuList link="/#info" text="INFORMACIÓN" />
                            <MenuList link="/#prices" text="PRECIOS" />
                            <MenuList link="/#rules" text="REGLAS" />
                            <MenuList link="/calendar" text="FECHAS DISPONIBLES" />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
