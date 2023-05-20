import UserInfo from "./UserInfo"
import SearchBar from "./SearchBar"
import OnlineUser from "./OnlineUser"
import CollapseConversation from "./CollapseConversation"
import { useState } from "react"
import Friends from "./Friends"

const LeftBar = ({userInFoData, onlineFriends, listConversationData, currentConversationId, HandleOpenConversation}) =>{
    const [activeTab, setActiveTab] = useState('conversations');

    const HandleChangeTab = (type) =>{
        if(type !== activeTab){
            setActiveTab(type)
        }
    }

    return(
        <div className="flex flex-col h-screen w-full md:w-72 xl:w-96">
            <UserInfo data={userInFoData}/>
            {/* <SearchBar/> */}

            <div className="flex flex-row">
                <div className={`w-1/2 text-center p-1 cursor-pointer rounded-l-2xl ${activeTab === "conversations" ? "border-t-4 border-green-500 bg-white" : "bg-slate-100 hover:bg-white"}`}
                    onClick={()=>HandleChangeTab("conversations")}
                >
                    Conversations
                </div>
                <div className={`w-1/2 text-center p-1 cursor-pointer rounded-r-2xl ${activeTab === "friends" ? "border-t-4 border-green-500 bg-white" : "bg-slate-100 hover:bg-white"}`}
                    onClick={()=>HandleChangeTab("friends")}
                >
                    Friends
                </div>
            </div>

            {activeTab === 'conversations' && (
                <>
                    <div className="custom_scroll flex flex-row overflow-auto border-b-2">
                        {onlineFriends?.map((item, index)=>{
                            return(
                                <OnlineUser key={index} imgPath={item.profileImagePath} name={`${item.firstName} ${item.lastName}`}/>
                            )
                        })}
                    </div>
                    <SearchBar/>
                    <div className="custom_scroll bg-transparent flex-1 max-h-full flex flex-col overflow-y-scroll overflow-x-hidden">
                        {listConversationData?.map((x, index) =>{
                            return(
                                <CollapseConversation
                                    data={x}
                                    key={index}
                                    currentConversationId = {currentConversationId}
                                    clickState={HandleOpenConversation}
                                    isOnline={true}
                                />
                            )
                        })}
                    </div>
                </>
            )}

            {activeTab === 'friends' && <Friends/>}
        </div>
    )
}


export default LeftBar