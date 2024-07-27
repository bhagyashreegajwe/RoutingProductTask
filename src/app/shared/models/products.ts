export interface Iproducts{
    pname : string
    pdescription : string
    pstatus : Ipstatus
    pprice : string
    pid: string
    pimgurl:string
} 

export enum Ipstatus {
    InProgress = 'In Progress',
    Dispatched = 'Dispatched',
    Delivered = 'Delivered'
}