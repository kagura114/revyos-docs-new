---
title: OpenTTD 游戏
sidebar_position: 1
---

# OpenTTD

状态：
可以运行，软解图形

资料：
https://github.com/OpenTTD/OpenTTD/blob/master/COMPILING.md
https://salsa.debian.org/openttd-team/openttd/-/blob/master/debian/control

### 步骤
```
# 安装依赖
sudo apt install libsdl2-dev zlib1g-dev libpng-dev libfreetype-dev libfontconfig-dev libicu-dev liblzo2-dev liblzma-dev libfluidsynth-dev libopengl-dev grfcodec openttd-opengfx cmake

# 下载代码&编译
git clone https://github.com/OpenTTD/OpenTTD.git
cd OpenTTD
mkdir build
cd build
cmake ..
make

# 运行
./openttd
```

图形和音频资源文件通过游戏内功能下载，支持中文

![](images/openttd_1.png)
