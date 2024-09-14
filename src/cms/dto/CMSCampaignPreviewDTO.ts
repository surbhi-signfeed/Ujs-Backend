import {IsNotEmpty} from "class-validator";

export class CMSCampaignPreviewDTO{
    CampaignID:number
    name:string
    layout: layout[]
}

export class layout{
    layoutID:number
    layout:string
    userID:number
    createdDT:Date
    modifiedDT:Date
    description:string
    tags:string
    retired:number
    duration:number
    backgroundImageId:number
    status:number
    width:number
    height:number
    backgroundColor:number
    backgroundzIndex:number
    schemaVersion:number
    statusMessage:string
    region: layoutregion[]

}

export class layoutregion{
    regionId:number
    layoutId:number
    ownerId:number
    name:string
    width:number
    height:number
    top:number
    left:number
    zIndex:number
    duration:number
    playlist: regionplaylist[]
}

export class regionplaylist{
    playlistId:number
    name:string
    ownerId:number
    widget: widget[]
}

export class widget{
    widgetId:number
    ownerId:number
    type:string
    duration:number
    displayOrder:number
    useDuration:number
    calculatedDuration:number
    createdDt:Date
    modifiedDt:Date
    media: media[]
}
export class media{
    mediaID:number
    name:string
    type:string
    duration:number
    originalFilename:string
    storedAs:string
    FileSize:number
    valid:number
}
