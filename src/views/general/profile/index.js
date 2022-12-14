import React from "react";
import { Tabs } from "antd"
import Account from "./account/index"
import Password from "./password"

export default function Profile() {
    return (
        <>
            {/* <Navbar transparent /> */}
            <div className="container mx-auto">
                <main className="profile-page">
                    <div className="container mx-auto p-5">
                        <div className="">
                            <div className="p-6">
                                <Tabs defaultActiveKey="1" tabPosition="left">
                                    <Tabs.TabPane tab="Account" key="1">
                                        <Account />
                                    </Tabs.TabPane>
                                    <Tabs.TabPane tab="Password" key="2">
                                        <Password />
                                    </Tabs.TabPane>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
