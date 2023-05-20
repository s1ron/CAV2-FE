import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const RightBar = ({data})=>{
    const { userId } = useContext(AuthContext);
    let ConvsersationInFo;
    if(data?.isGroup){
        ConvsersationInFo = {
            isGroup : true,
            isMessageRequest : data.isMessageRequest,
            conversationName : data.conversationName,
            conversationImage : data.conversationImagePath,
            isBlock : data.isBlock,
            blockBy : data.blockBy,
            userName : ""
        }
    }
    else{
        const par = data.participants?.find(x=> x.userId !== userId);
        ConvsersationInFo = {
            isGroup : false,
            isMessageRequest : data.isMessageRequest,
            conversationName : par.firstName + ' ' + par.lastName,
            conversationImage : par.profileImagePath,
            isBlock : data.isBlock,
            blockBy : data.blockBy,
            userName : par.userName
        }
    }

    return(
        <div className="hidden xl:flex flex-col w-80 h-full">
            <div className="relative bg-[url('../public/img/bg-gradient.jpg')] bg-no-repeat bg-cover w-full h-28 rounded-t-xl">
                <div className="absolute bottom-[-64px] left-8 w-24 box-content rounded-full border-4 border-white border-solid">
                    <img className="w-24 h-24 rounded-full border-2 border-slate-300" src={ConvsersationInFo.conversationImage} alt="" />
                </div>
            </div>
            <div className="bg-white flex-1 rounded-b-xl">
                <h4 className="mt-16 ml-8 text-xl font-bold w-fit">{ConvsersationInFo.conversationName}</h4>
                <p className="ml-12 text-xs opacity-70">{ConvsersationInFo.userName}</p>
            </div>
        </div>
    )
}


export default RightBar