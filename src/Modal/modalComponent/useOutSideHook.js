import { useEffect, useRef } from "react";

export function useClickOutside(callbeck) {

    const ref = useRef(null)

    useEffect(() => {

        const handleClickOutSide = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                callbeck()
            }
        }
        document.addEventListener("mousedown", handleClickOutSide)
        return () => document.removeEventListener("mousedown", handleClickOutSide)

    }, [ref])

    return [ref]
}