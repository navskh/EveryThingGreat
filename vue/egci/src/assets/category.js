/**
  * 1. 묵상
    2. 기도
    3. 성경공부
    4. 메세지
    5. 간증
 */
const menuCategory = [
    {
        code: "1",
        name: "묵상",
        params: { nav: "meditate" },
        query: { page: 1 },
        path: "/meditate",
    },
    {
        code: "2",
        name: "기도",
        params: { nav: "prayer" },
        query: { page: 1 },
        path: "/prayer",
    },
    {
        code: "3",
        name: "성경공부",
        params: { nav: "study" },
        query: { page: 1 },
        path: "/study",
    },
    {
        code: "4",
        name: "메세지",
        params: { nav: "message" },
        query: { page: 1 },
        path: "/message",
    },
    {
        code: "5",
        name: "간증",
        params: { nav: "testimony" },
        query: { page: 1 },
        path: "/testimony",
    },
];

export default menuCategory;
