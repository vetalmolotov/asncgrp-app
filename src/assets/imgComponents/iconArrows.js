import React from "react";

const IconDropdown = ({className}) => {
    return <>
        <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_414_271)">
                <path d="M5.41335 9.80668L8.00001 7.22001L10.5867 9.80668C10.8467 10.0667 11.2667 10.0667 11.5267 9.80668C11.7867 9.54668 11.7867 9.12668 11.5267 8.86668L8.46668 5.80668C8.20668 5.54668 7.78668 5.54668 7.52668 5.80668L4.46668 8.86668C4.20668 9.12668 4.20668 9.54668 4.46668 9.80668C4.72668 10.06 5.15335 10.0667 5.41335 9.80668Z" fill="white"/>
            </g>
            <defs>
                <clipPath id="clip0_414_271">
                    <rect width="16" height="16" fill="white" transform="matrix(-1 0 0 -1 16 16)"/>
                </clipPath>
            </defs>
        </svg>
    </>
}

const IconDropdownFilled = ({className}) => {
    return <>
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0.5C8 0.632812 7.94531 0.757812 7.85156 0.851562L4.35156 4.35156C4.25781 4.44531 4.13281 4.5 4 4.5C3.86719 4.5 3.74219 4.44531 3.64844 4.35156L0.148438 0.851562C0.0546875 0.757812 0 0.632812 0 0.5C0 0.226562 0.226562 0 0.5 0H7.5C7.77344 0 8 0.226562 8 0.5Z" fill="#ABB2BA"/>
        </svg>
    </>
}

const IconArrowStatus = () => {
    return <>
        <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-9.13085e-07 3.89286C-9.02304e-07 3.76953 0.0478507 3.65346 0.129882 3.56641L3.19238 0.31641C3.27441 0.229357 3.38379 0.178576 3.5 0.178576C3.61621 0.178576 3.72559 0.229357 3.80762 0.31641L6.87012 3.56641C6.95215 3.65346 7 3.76954 7 3.89286C7 4.14677 6.80176 4.35715 6.5625 4.35715L0.437499 4.35715C0.198241 4.35715 -9.35282e-07 4.14677 -9.13085e-07 3.89286Z" fill="white"/>
        </svg>
    </>
}

export {IconDropdown, IconDropdownFilled, IconArrowStatus}