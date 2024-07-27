import { Iproducts, Ipstatus } from "../models/products";

export const Products: Array<Iproducts> = [
    {
        pname: "Apple iPhone 15 Pro Max (256 GB) - Black Titanium",
        pdescription: `iPhone 15 Pro Max has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that’s tougher than any smartphone glass. And it’s splash, water, and dust resistant.`,
        pstatus: Ipstatus.InProgress,
        pprice: "1,51,700",
        pid:'1245',
        pimgurl: 'https://m.media-amazon.com/images/I/41zb7hwFUmL._SY445_SX342_QL70_FMwebp_.jpg'
    },
    {
        pname: "Redmi 13 5g Black Diamond 6GB 128GB",
        pdescription: `Display: Large 17.24cm FHD+ 120Hz AdaptiveSync display with Corning Gorilla Glass 3 Protection, TÜV Rheinland low blue light, TÜV flicker-free, TÜV Circadian Friendly, Wet finger touch displa Processor: Qualcomm Snapdragon 4 Gen2 Accelerated Edition Octa-core processor for high performance ; Up to 2.3GHz; Android 14 with Xiaomi HyperOS, Upto 12GB RAM including 6GB Virtual RAM Camera: 108MP f/1.75 Dual camera with 3X In-Sensor Zoom, classic film filters, Portrait, Night Mode,HDR, 10`,
        pstatus: Ipstatus.Dispatched,
        pprice: "17,999",
        pid:'2454',
        pimgurl: 'https://m.media-amazon.com/images/I/81ndCd07RuL._SX569_.jpg'
    },
    {
        pname: "Oneplus Nord CE4 (Dark Chrome, 8GB RAM, 128GB Storage)",
        pdescription: ` OnePlus Nord CE4 comes in 2 colorways - Celadon Marble, a first for Nord and Dark Chrome, our signature variant. Oh, and it’s mega-durable… This phone’s bezel material is so tough, it’s thinking of taking up cage fighting. Seriously, we dropped it 1.5 meters onto marble, and it survived2. That’s tough as nails!`,
        pstatus: Ipstatus.Delivered,
        pprice: "24,998",
        pid:'4512',
        pimgurl: 'https://m.media-amazon.com/images/I/41bkMtA7usL._SX300_SY300_QL70_FMwebp_.jpg'
    },
    {
        pname: "Nokia G42 5G | Snapdragon® 480+ 5G | 50MP Triple AI Camera | 11GB RAM (6GB RAM + 5GB Virtual RAM)",
        pdescription: `With 5G connectivity you get where you want to go, fast. Very fast. Powered by none other than the Snapdragon 480 Plus 5G. Nokia G42 5G comes with 11GB RAM (6GB RAM + 5GB Virtual RAM) ensuring smooth multitasking and performance.`,
        pstatus: Ipstatus.Dispatched,
        pprice: "16,999",
        pid:'5124',
        pimgurl: 'https://m.media-amazon.com/images/I/41Mje26R9-L._SX300_SY300_QL70_FMwebp_.jpg'
    }
]