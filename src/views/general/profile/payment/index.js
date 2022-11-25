import React from "react"
import { Col, Input, Button } from 'antd'

export default function account() {
    return (
        <div className="container">
            <div className="bg-white p-10" >
                <div className="font-bold border-b-black-500 text-2xl mb-5"> Payment Settings </div>
                <div className="form-group pb-5">
                    <label>Profile image</label>
                    <Input className="mt-2" placeholder="Basic usage" />
                </div>
                <div className="form-group pb-5">
                    <label>First name</label>
                    <Input className="mt-2" placeholder="First name" />
                </div>
                <div className="form-group pb-5">
                    <label >Last name</label>
                    <Input className="mt-2" placeholder="Last name" />
                </div>
                <div className="form-group pb-5">
                    <label >Phone number</label>
                    <Input className="mt-2" placeholder="Phone number" />
                </div>
                <Button type="primary">Save Settings</Button>
            </div>
        </div>
    )
}