const img1 = "./home/img1.jpg"
const img2 = "./home/img2.jpg"
const img3 = "./home/img3.jpg"
const img4 = "./home/img4.jpg"
const img5 = "./home/img5.jpg"
const vid1 = "./home/subhome-xmedia-43-2_0.mp4"
const man1 = "./home/man1.jpg"
const man2 = "./home/man2.jpg"
const kid1 = "./home/kids1.jpg"
const kid2 = "./home/kids2.jpg"
const kid3 = "./home/kids3.jpg"
const kidvid = "./home/kidvid.mp4"

export const woman = [{ item: img1, isvedio: false, isdark: true }, { item: img2, isvedio: false, isdark: false }, { item: img3, isvedio: false, isdark: true }, { item: img4, isvedio: false, isdark: false }, { item: img5, isvedio: false, isdark: false }];
export let man = [{ item: man1, isvedio: false, isdark: false }, { item: vid1, isvedio: true, isdark: true }, { item: man2, isvedio: false, isdark: true }, { item: img5, isvedio: false }];
export let kids = [{ item: kid1, isvedio: false, isdark: false }, { item: kidvid, isvedio: true, isdark: false }, { item: kid2, isvedio: false, isdark: false }, { item: kid3, isvedio: false, isdark: false }, { item: img5, isvedio: false, isdark: false }]
export let womanLinks = [{ text: "NEW", path: "/store?category=womens" }, { text: "BEST SELLERS", path: "/store?category=womens" }, { text: "PARTY", path: "/store?category=womens" }, { text: "SHOES", path: "/store?category=womens" }]
export let manLinks = [{ text: "NEW", path: "/store?category=mens" }, { text: "PARTY", path: "/store?category=mens" }, { text: "ZARA ATHLETICZ", path: "/store?category=mens" }, { text: "ZARA ORIGINS", path: "/store?category=mens" }]
export let kidLinks = [{ text: "GIRL", path: "/store?category=childs" }, { text: "BOY", path: "/store?category=childs" }, { text: "BABY GIRL", path: "/store?category=childs" }, { text: "BABY BOY", path: "/store?category=childs" }, { text: "MINI", path: "/store?category=childs" }]