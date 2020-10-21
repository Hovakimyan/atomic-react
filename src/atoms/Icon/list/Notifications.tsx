import React, { ReactElement } from 'react'

const Notifications = (props: any): ReactElement => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            {...props}
        >
            <defs>
                <path id="a" d="M0 0h48v48H0z" />
            </defs>
            <clipPath id="b">
                <use overflow="visible" />
            </clipPath>
            <path
                clipPath="url(#b)"
                fill="#010101"
                d="M24 44c2.21 0 4-1.79 4-4h-8c0 2.21 1.79 4 4 4zm12-12V22c0-6.15-3.27-11.28-9-12.64V8c0-1.66-1.34-3-3-3s-3 1.34-3 3v1.36c-5.73 1.36-9 6.49-9 12.64v10l-4 4v2h32v-2l-4-4z"
            />
        </svg>
    )
}
export default Notifications
