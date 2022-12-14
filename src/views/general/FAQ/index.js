import React from "react"
import { Row, Collapse } from "antd"
import { CaretRightOutlined } from '@ant-design/icons';
const { Panel } = Collapse;
const text = `
        A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.`;

const Faq = () => {

    return (
        <>
            <div className="container mx-auto">
                <Row>
                    <div className="w-full">
                        <Collapse
                            bordered={false}
                            defaultActiveKey={['1']}
                            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                            className="site-collapse-custom-collapse"
                        >
                            <Panel header="This is panel header 1" key="1" className="site-collapse-custom-panel">
                                <p>{text}</p>
                            </Panel>
                            <Panel header="This is panel header 2" key="2" className="site-collapse-custom-panel">
                                <p>{text}</p>
                            </Panel>
                            <Panel header="This is panel header 3" key="3" className="site-collapse-custom-panel">
                                <p>{text}</p>
                            </Panel>
                        </Collapse>
                    </div>
                </Row>
            </div>
        </>
    )
}

export default Faq