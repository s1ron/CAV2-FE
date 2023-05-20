import { useState } from "react"
import SearchBar from "./SearchBar"
import { GetFriendsGQl } from "../constant/GraphQLGQLQuery"
import { useLazyQuery } from "@apollo/client"

const Friends = () => {
    const [typeFriendsTab, SetTypeFriendsTab] = useState("friend")
    const HandleChooseType = (type) => {
        if(typeFriendsTab !== type){
            SetTypeFriendsTab(type)
        }
    }

    const [ GetFirstMessage ] = useLazyQuery(GetFriendsGQl);

    var isCurrent = false

    return(
        <div className="mt-3">
            <div className="flex flex-row justify-center mb-3">
                <div className="flex flex-row border-2 border-white rounded-xl">
                    <div className={`cursor-pointer w-10 flex items-center justify-center m-0.5 rounded-lg ${typeFriendsTab === 'friend' ? "bg-white" : ""}`}
                        onClick={()=>HandleChooseType('friend')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                        </svg>
                    </div>
                    <div className={`cursor-pointer w-10 flex items-center justify-center m-0.5 rounded-lg ${typeFriendsTab === 'findfriend' ? "bg-white" : ""}`}
                        onClick={()=>HandleChooseType('findfriend')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                        </svg>
                    </div>
                </div>
            </div>
            <SearchBar/>
            {typeFriendsTab === 'friend' && (
                <div className={`${isCurrent?"md:bg-white ":""}flex flex-row items-center p-2 m-1 box-content h-10 bg-transparhent hover:bg-white rounded-3xl hover:cursor-pointer`}
                    onClick={() => {
                        console.log("info");
                    }}
                >
                    <div className="flex relative">
                        <img className="w-10 rounded-full aspect-square border-2 border-slate-300" src={'https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-1/347265575_3397975033850443_4852251705846099502_n.jpg?stp=dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=VXKUnF2OACcAX_CqRb6&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfDA55duucGDpxDB0NAe269PYdePjVFr7ByUmfnMusYsbw&oe=646C81F6'} alt="avartar" />
                    </div>
                    <div className="w-10 grow flex flex-col opacity-70 pl-3">
                        <h4 className="leading-4 font-bold whitespace-nowrap text-ellipsis overflow-hidden">{"Anh Vũ"}</h4>
                    </div>
                    <div className="pr-1 opacity-70 hover:bg-slate-300 p-1 rounded-full"
                        onClick={(e)=>{
                            e.stopPropagation();
                            console.log("chat"); 
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                        </svg>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Friends