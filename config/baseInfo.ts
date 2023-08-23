interface IBaseInfo {
  // 网站名称
  website: {
    name: string;
    logo: string;
    logoSize: string;
  };
  // 社交方式
  social?: {
    github?: string;
  };
}

const baseInfo: IBaseInfo = {
  website: {
    name: "PoccurNotes",
    logo: "💻",
    logoSize: '26',
  },
  social: {
    github: "https://github.com/JingpengZhang",
  },
};

export default baseInfo;
