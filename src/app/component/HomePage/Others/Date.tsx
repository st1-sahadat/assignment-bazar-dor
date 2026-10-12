'use client';

import { useContext, useEffect } from "react";
import { bazarContext } from "../../../context/bazarContext";

export default function BanglaDate() {
    const { banglaDate, setBanglaDate } = useContext(bazarContext);

    useEffect(() => {
        const options: Intl.DateTimeFormatOptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'Asia/Dhaka',
        };
        setBanglaDate (new Intl.DateTimeFormat('bn-BD', options).format(new Date()));
    }, [setBanglaDate]);

    // Render a placeholder until hydrated so layout doesn't jump
    return <span suppressHydrationWarning>{banglaDate || '\u00A0'}</span>;
}