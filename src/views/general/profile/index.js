import React from "react";
import { Tabs } from "antd"
import Account from "./account/index"
import Payment from "./payment/index"
import Password from "./password"

export default function Profile() {
    return (
        <>
            {/* <Navbar transparent /> */}
            <main className="profile-page">
                <section className="relative block h-500-px">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
                        }}
                    >
                        <span
                            id="blackOverlay"
                            className="w-full h-full absolute opacity-50 bg-black"
                        ></span>
                    </div>
                </section>
                <section className="relative py-16">
                    <div className="container mx-auto p-5">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                            <div className="p-6">
                                <Tabs defaultActiveKey="1" tabPosition="left">
                                    <Tabs.TabPane tab="Account" key="1">
                                        <Account />
                                    </Tabs.TabPane>
                                    <Tabs.TabPane tab="Payment" key="2">
                                        <Payment />
                                    </Tabs.TabPane>
                                    <Tabs.TabPane tab="Password" key="3">
                                        <Password />
                                    </Tabs.TabPane>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
