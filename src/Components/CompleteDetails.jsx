import PhilsanLogo from "../assets/philsan-38th.png"
import PhilsanTheme from "../assets/philsan-38th-theme.png"
import { textRegfields, membersRadio, souvenirRadio, certRadio  } from "../Config/completeRegfields";
import React, { useRef } from "react";

const CompleteDetails = () => {

    const fileInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current.click(); // programmatically open file picker
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && onUpload) {
        onUpload(file); // pass file to parent handler
        }
    };
    
    return (
        <div className="relative pt-[50px] px-[50px] pb-[50px] shadow-xl overflow-hidden rounded-2xl bg-[linear-gradient(to_bottom,#ffffff_0%,#ffffff_60%,#CBF9B6_100%)]">
            <div className="flex justify-between items-center">
                <div className="w-[200px]">
                    <img src={PhilsanLogo} alt="" />
                </div>
                <h6 className="font-[Fraunces] text-[32px] text-[#1f783b] font-[700]">Register</h6>
            </div>
            <div className="relative flex pt-[50px] gap-[50px] z-[1]">
                <div className="w-[50%]">
                    {
                        textRegfields.map((item, index) => {
                            return (
                                <div key={"textfield"+index} className="pb-[10px]">
                                    <p>{item.placeHolder}</p>
                                    <input className="border-[#339544] border-[1px] bg-[#eaeeeb] p-[10px] rounded-md w-[100%]" type={item.type} />
                                </div>
                            )
                        })
                    }
                </div>

                <div className="w-[50%]">
                     {/* PHILSAN Member --> */}
                    <div className="flex flex-col pt-[10px]">
                        <p className="font-[700] text-[#1f783b]">Are you a PHILSAN Member?</p>
                        <div className="flex gap-[20px]">
                            {membersRadio.map((i, index) => {
                                return (
                                    <div key={"member"+index} className="flex gap-[5px]">
                                        <input type="radio" name="membership" value={i} onChange={(e) => handleChange(e)}/>
                                        <p>{i}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Souvenir Program --> */}
                    {/* <div className="flex flex-col pt-[10px]">
                        <p className="font-[700] text-[#1f783b]">Souvenir Program</p>
                        <div className="flex gap-[20px]">
                            {souvenirRadio.map((i, index) => {
                                return (
                                    <div key={"souvenir"+index} className="flex gap-[5px]">
                                        <input type="radio" name="souvenir" value={i} onChange={(e) => handleChange(e)}/>
                                        <p>{i}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div> */}

                    {/* Certificate of Attendance --> */}
                    <div className="flex flex-col pt-[10px]">
                        <p className="font-[700] text-[#1f783b]">Do you need a Certificate of Attendance?</p>
                        <div className="flex gap-[20px]">
                            {certRadio.map((i, index) => {
                                return (
                                    <div key={"cert"+index} className="flex gap-[5px]">
                                        <input type="radio" name="certificate_needed" value={i} onChange={(e) => handleChange(e)}/>
                                        <p>{i}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div>
                        {/* Hidden input */}
                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            style={{ display: "none" }}
                            onChange={handleFileChange}
                        />

                        {/* Custom button */}
                        <button
                            onClick={handleClick}
                            className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
                        >
                            Upload Image
                        </button>
                    </div>
                    

                    <button className="mt-[20px] py-[10px] w-[100%] bg-[#339544] flex justify-center items-center rounded-lg text-[#ffffff] cursor-pointer">Proceed</button>
                </div>
            </div>
            <img className="absolute bottom-[-50px] left-[0px] opacity-[.1]" src={PhilsanTheme} alt="" />
        </div>
    )
}

export default CompleteDetails;