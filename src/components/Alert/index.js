
import React from "react"

export const Error = (props) => {
    return (
        <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-500">
            <span className="text-xl inline-block mr-5 align-middle">
                <i className="fas fa-bell"></i>
            </span>
            <span className="inline-block align-middle mr-8">
                <b className="capitalize">{props.title}</b> {props.content}
            </span>
            <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
                <span>×</span>
            </button>
        </div>
    )
}

export const Success = (props) => {
    return (
        <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-emerald-500">
            <span className="text-xl inline-block mr-5 align-middle">
                <i className="fas fa-bell"></i>
            </span>
            <span className="inline-block align-middle mr-8">
                <b className="capitalize">{props.title}</b> {props.content}
            </span>
            <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
                <span>×</span>
            </button>
        </div>
    )
}
