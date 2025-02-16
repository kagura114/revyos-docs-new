import React from "react";

interface ImageLink {
  device: string;
  version: string;
  downloadLink: string;
  sdCardSupport?: boolean;
}

export const imageLinks: ImageLink[] = [
  {
    device: "Lichee Pi 4A",
    version: "20250123",
    downloadLink: "https://mirror.iscas.ac.cn/revyos/extra/images/lpi4a/20250123/",
    sdCardSupport: true,
  },
  {
    device: "Milk-V Meles",
    version: "20250123",
    downloadLink: "https://mirror.iscas.ac.cn/revyos/extra/images/meles/20250123/",
    sdCardSupport: true,
  },
  {
    device: "Milk-V Pioneer",
    version: "20241230",
    downloadLink: "https://mirror.iscas.ac.cn/revyos/extra/images/sg2042/20241230/",
    sdCardSupport: true,
  },
  {
    device: "Lichee Cluster 4A",
    version: "20240720",
    downloadLink: "https://mirror.iscas.ac.cn/revyos/extra/images/lpi4a/",
  },
  {
    device: "Lichee Console 4A",
    version: "20240720",
    downloadLink: "https://mirror.iscas.ac.cn/revyos/extra/images/lcon4a/20240720/",
  },
  {
    device: "Lichee Book 4A",
    version: "20240720",
    downloadLink: "https://mirror.iscas.ac.cn/revyos/extra/images/laptop4a/",
  },
  {
    device: "Beagle-Ahead",
    version: "20231210",
    downloadLink: "https://mirror.iscas.ac.cn/revyos/extra/images/beagle/20231210/",
  },
  {
    device: "Huiwei book",
    version: "20240617",
    downloadLink: "https://mirror.iscas.ac.cn/revyos/extra/images/huiwei/test/20240617/",
  },
];

export const DownloadLink: React.FC<{device: string}> = ({ device }) => {
  const link = imageLinks.find((item) => item.device === device);
  
  if (!link) return <span>暂无镜像</span>;

  return <a href={link.downloadLink}>{link.version}</a>;
};
