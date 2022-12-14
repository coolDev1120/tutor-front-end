import React from "react"
import { useParams } from "react-router-dom";

const Report = () => {
    const { id } = useParams();

    return (
        <>
            <div className="container mx-auto">
                <div className="p-4 border rounded-lg px-8 my-5">
                    <div className="flex flex-1">
                        <div>
                            <img
                                className="w-12 rounded-full max-w-lg mx-auto mr-3"
                                src={require("assets/img/team-4-470x470.png").default}
                                alt="..."
                            />
                        </div>
                        <div className="flex items-center font-bold flex-1">
                            <div>Gregory Jones</div>
                        </div>
                        <div className="pt-3">Nov 10, 2022</div>
                    </div>
                    <p className="pt-3 text-base"> Report title </p>
                    <p className="discription"> report content The new version of @moqups is really fantastic. My favourite wireframing tool; especially with its excellent collaboration features. </p>
                </div>

                <div className="p-4 border rounded-lg px-8 my-5">
                    <div className="flex flex-1">
                        <div>
                            <img
                                className="w-12 rounded-full max-w-lg mx-auto mr-3"
                                src={require("assets/img/team-4-470x470.png").default}
                                alt="..."
                            />
                        </div>
                        <div className="flex items-center font-bold flex-1">
                            <div>Gregory Jones</div>
                        </div>
                        <div className="pt-3">Nov 10, 2022</div>
                    </div>
                    <p className="pt-3 text-base"> Report title </p>
                    <p className="discription"> report content The new version of @moqups is really fantastic. My favourite wireframing tool; especially with its excellent collaboration features. </p>
                </div>

                <div className="p-4 border rounded-lg px-8 my-5">
                    <div className="flex flex-1">
                        <div>
                            <img
                                className="w-12 rounded-full max-w-lg mx-auto mr-3"
                                src={require("assets/img/team-4-470x470.png").default}
                                alt="..."
                            />
                        </div>
                        <div className="flex items-center font-bold flex-1">
                            <div>Gregory Jones</div>
                        </div>
                        <div className="pt-3">Nov 10, 2022</div>
                    </div>
                    <p className="pt-3 text-base"> Report title </p>
                    <p className="discription"> report content The new version of @moqups is really fantastic. My favourite wireframing tool; especially with its excellent collaboration features. </p>
                </div>
               
            </div>
        </>
    )
}

export default Report