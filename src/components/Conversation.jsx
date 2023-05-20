import MessageBar from "./MessageBar";
import TextMessage from "./TextMessage";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState, useContext, useRef, useLayoutEffect } from "react";
import FileMessage from "./FileMessage";
import ImageMessage from "./ImageMessage";
import StickerMessage from "./StickerMessage";
import GifMessage from "./GifMessage";
import MessageTypeEnum from "../enumerable/MessageTypeEnum";
import { AuthContext } from "../context/AuthContext";

const Conversation = ({isMobileCOnversationOpen, state, firstMessageData, currentConversationId, submitTextAndQuickMessage})=>{
    const { userId } = useContext(AuthContext);
    //const [hasMoreMessage, SetHasMoreMessage] = useState(true)
    const messageRef = useRef();
    const messConRef = useRef();

    console.log(firstMessageData);

    useEffect(()=>{
        if(messageRef.current.firstChild.clientHeight !== 0 
            && messageRef.current.firstChild.clientHeight < messConRef.current?.clientHeight ){
            getMoreMessage();
        }
    }, [messageRef.current?.firstChild.clientHeight])    


    const getMoreMessage = ()=>{
        console.log("fetch more", currentConversationId);
        // setTimeout(()=>{
        //     fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(json => setItems((pre)=> [...pre, ...json]))
        // }, 200)
    }



    return(
        <div className={`${isMobileCOnversationOpen ? "fixed inset-0 rounded-none z-10 md:relative" : "hidden md:flex"} bg-white h-full md:w-full md:rounded-2xl box-border flex flex-col custom_box_shadow`}>
            <div className="flex flex-row border-b-2 p-3">
                <div className="w-9 aspect-square opacity-50 hover:bg-slate-300 rounded-full mr-2 md:hidden"
                    onClick={()=>{state(false)}}>
                    <svg className="w-6 h-6 m-1.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </div>
                <div className="flex-1 flex flex-row">
                    <img className="w-9 h-9 aspect-square rounded-full" src="./img/me.jpg" alt="da"/>
                    <div className="flex flex-col h-9 pl-3">
                        <p className="leading-5">Anh Vu</p>
                        <p className="text-xs opacity-50">anhvu03</p>
                    </div>
                </div>
                <div className="w-9 aspect-square opacity-50 hover:bg-slate-300 rounded-full">
                    <svg className="w-6 h-6 m-1.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                    </svg>
                </div>
            </div>
            <div className="flex-1 custom_scroll overflow-auto flex flex-col max-h-full" ref={messConRef}>
                <div id="scrollableDiv" className="flex-1" 
                    style={{
                        overflow: "auto",
                        display: "flex",
                        flexDirection: "column-reverse"
                    }}
                    ref={messageRef}
                >
                    <InfiniteScroll
                        style={{ display: "flex", flexDirection: "column-reverse" }}
                        inverse={true}
                        next={getMoreMessage}
                        dataLength={firstMessageData?.messages.length}
                        hasMore={false}
                        scrollableTarget="scrollableDiv"
                        endMessage={
                            <p style={{ textAlign: 'center' }}>
                                <b>Yay! You have seen it all</b>
                            </p>
                        }
                        className="gap-3"
                    >
                        {firstMessageData?.messages.map((message, index)=>{
                            //console.log(message);
                            switch(message.messageType){
                                case "TEXT":
                                    return(
                                        <TextMessage
                                            own={userId === message.senderId}
                                            key={index}
                                            text={message.content}
                                        />
                                    )
                                case "IMAGE":
                                    break;
                                default:
                                    return(
                                        <TextMessage
                                            own={true}
                                            key={index}
                                            text={message.name}
                                        />
                                    )
                                
                            }
                        })}
                    </InfiniteScroll>
                </div>
                
            </div>
            <div className="p-3">
                <MessageBar
                    submitTextAndQuickMessage = {submitTextAndQuickMessage}
                />
            </div>
        </div>
    )
}

export default Conversation;