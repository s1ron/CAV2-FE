import { CheckValidHttpUrl } from "../constant/CheckValidHttpUrl"

const OnlineUser = ({imgPath, name})=>{
    const imageAvartar = !imgPath ? "./img/no-avartar.jpg" : CheckValidHttpUrl(imgPath) ? imgPath : `${process.env.REACT_APP_BASEURL}${imgPath}`
    return(
        <div className="w-12 h-19 p-3 box-content">
            <div className="flex relative">
                <img className="w-12 rounded-full aspect-square border-2 border-slate-300" src={imageAvartar} alt="avartar" />
                <div className={`absolute bg-green-700 rounded-full w-3.5 h-3.5 border-2 border-white border-solid bottom-0 right-0`}></div>
            </div>
            <h4 className="text-xs text-ellipsis overflow-hidden whitespace-nowrap w-12" style={{paddingInlineStart: 0}}>{name}</h4>
        </div>
    )
}

export default OnlineUser