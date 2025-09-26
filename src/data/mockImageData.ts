export const mockImageData = [
    {
        id: 1,
        title: "山脉日出",
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
        description: "壮观的山脉景色，金色的阳光洒在雪峰之上，展现大自然的宏伟与美丽。",
        category: "自然风光",
        photographer: "张明",
        date: "2024-01-15",
        location: "喜马拉雅山脉",
        camera: "Canon EOS R5",
        details: "这张照片拍摄于清晨5点，当第一缕阳光照射在雪山之巅时，整个山脉被染成了金黄色。经过长时间的等待和准备，终于捕捉到了这个完美的瞬间。"
    },
    {
        id: 2,
        title: "城市夜景",
        imageUrl: "https://images.unsplash.com/photo-1514565131-fce0801e5785",
        description: "繁华都市的夜晚，灯火辉煌，高楼大厦在夜色中闪闪发光。",
        category: "城市建筑",
        photographer: "李华",
        date: "2024-02-20",
        location: "上海外滩",
        camera: "Sony A7R IV",
        details: "站在外滩的观景台上，俯瞰整个陆家嘴金融区。霓虹灯光与建筑轮廓交相辉映，展现了现代都市的繁华与活力。"
    },
    {
        id: 3,
        title: "海岸线",
        imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        description: "蔚蓝的海水拍打着金色的沙滩，椰子树在海风中摇曳。",
        category: "海洋风景",
        photographer: "王涛",
        date: "2024-03-10",
        location: "马尔代夫",
        camera: "Nikon Z9",
        details: "马尔代夫的海水清澈见底，沙滩洁白如雪。这里是度假的天堂，每一处风景都如画般美丽。"
    },
    {
        id: 4,
        title: "森林小径",
        imageUrl: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6",
        description: "幽静的森林小路，阳光透过树叶的缝隙洒下斑驳的光影。",
        category: "自然风光",
        photographer: "赵丽",
        date: "2024-04-05",
        location: "黑龙江大兴安岭",
        camera: "Fujifilm X-T5",
        details: "漫步在原始森林中，呼吸着新鲜的空气，聆听鸟儿的歌唱。这条小径通向森林深处，充满了神秘与宁静。"
    },
    {
        id: 5,
        title: "现代建筑",
        imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
        description: "独特的现代建筑设计，展现了建筑艺术与科技的完美结合。",
        category: "城市建筑",
        photographer: "陈建国",
        date: "2024-05-12",
        location: "北京CBD",
        camera: "Canon EOS R6",
        details: "这座建筑采用了最新的环保材料和节能技术，流线型的外观设计不仅美观，还能有效减少风阻。"
    },
    {
        id: 6,
        title: "沙漠落日",
        imageUrl: "https://images.unsplash.com/photo-1509316785289-025f5b846b35",
        description: "广袤的沙漠中，夕阳西下，金色的沙丘在余晖中显得格外迷人。",
        category: "自然风光",
        photographer: "刘强",
        date: "2024-06-18",
        location: "内蒙古库布齐沙漠",
        camera: "Sony A1",
        details: "沙漠的落日是最壮观的自然景象之一。当太阳缓缓沉入地平线，整个沙漠都被染成了橙红色，沙丘的曲线在光影中更加柔美。"
    }
];

export const getImageById = (id: number) => {
    return mockImageData.find(image => image.id === id);
};