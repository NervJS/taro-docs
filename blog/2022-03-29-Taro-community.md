---
title: 成为 Taro 社区的一员 - 贡献者晋级指南
authors: [Bin, honlyHuang, TJ]
tags: [v3]
description: ''
---

为了建立更加完善、更加可持续的 Taro 开源生态，突出贡献者价值，我们参照成熟开源社区运行机制制定了《 Taro 贡献者晋级制度》，为热爱和喜欢 Taro 技术的开发者和贡献者提供更清晰的参与机制和荣誉激励机制。

## 晋升角色

![晋升角色路线图](https://storage.360buyimg.com/aotu-team/zakary-blog/2022-03-29-Taro-community/RoadMap.png)

如图包含4个晋升角色：个人贡献者&生态个人贡献者、助手、合作者&生态合作者、技术委员会委员，晋升机制通过提名+投票的方式进行共识决策，晋升路径如下：

- 个人贡献者 → 助手 → 合作者 → 技术委员会委员
- 个人贡献者 → 合作者 → 技术委员会委员
- 生态个人贡献者 → 生态合作者 → 技术委员会委员

对于一年内不活跃者，会进行自动进行降级，贡献突出者可申请荣休。

### 个人贡献者&生态个人贡献者（Individual Committer）

任何同意《 Taro 行为准则》的个人开发者，都可以基于[《贡献者指南》](https://github.com/NervJS/taro/blob/next/CONTRIBUTING.md)进行 pull request 提交， bug 反馈&修复、新特性提议或 PR 均可，会在 [Taro 官方文档](https://taro.zone/)中列为个人贡献者。当贡献者的有价值工作被其他合作者注意到后，可以被提名为合作者。

任何基于或围绕 Taro 生态进行的工具、插件、培训、教程等个人都会在 [Taro 官方文档](/docs/team/)中列为生态个人贡献者。

### 助手（Triage）

负责 [NervJS/taro](https://github.com/NervJS/taro)、[NervJS/taro-ui](https://github.com/NervJS/taro-ui) 仓库新 issues 的维护，负责给 issues 或 pull requests 打标签，以及负责评论、关闭和重新开启 issue 或 pull request，负责将 bug 或 feature 分流给具体工作组。

- 目的

    旨在减少 issue 列表，保持 issue 及时跟踪，促进新人参与及贡献 pull request。

- 权益

    Github NervJS 组 Member 权限，相关项目 Triage 权限，可以管理 issues 和 pull requests（没有写权限）。

- 申请方法

    对 Taro 项目有全面了解和深度开发经验的任何人，可以在 NervJS/taro README.md 中提交一个 pull request，说明申请成为助手的动机并同意本项目的行为守则，经 2 名合作者同意即可通过。

    申请 pull request 参考模版如下：

    ![PR 模板](https://storage.360buyimg.com/aotu-team/zakary-blog/2022-03-29-Taro-community/PR-Triage.png)

- 退出机制

    对 6 个月不活跃的小助手进行定期移除。

### 合作者 & 生态合作者（Collaborator）

负责维护 [NervJS/taro](https://github.com/NervJS/taro)、[NervJS/taro-ui](https://github.com/NervJS/taro-ui) 仓库，帮助用户和初级贡献者，参加具体工作组为当前项目贡献代码和文档，评审和评论 issues 和 pull requests。

- 目的

    旨在不断丰富 Taro 特性、性能、安全等。

- 权益

    Github NervJS 组 Member 权限，Github Write 权限，可以提交 commit 到 [NervJS/taro](https://github.com/NervJS/taro) 仓库，可以配置持续集成任务，负责 pull request 评审及合并，1个 PR 合并需至少2名合作者或1名技术委员会成员同意即可进入观察期，观察期3个月即可正式成为合作者。

- 申请方法

    合作者提名有突出贡献的个人贡献者，通过投票机制决定是否可以成为合作者。一名合格的合作者需具备：技术精进，业务精湛；沟通无障碍，至少读写无阻碍；人品优良，能钻研，不轻易半途而废；态度谦逊，能接受他人意见；Owner 心态，积极主动。

    申请 pull request 参考模版如下：

    ![PR 模板](https://storage.360buyimg.com/aotu-team/zakary-blog/2022-03-29-Taro-community/PR-Collaborator.png)

- 退出机制

    对不活跃的合作者，技术委员会有权进行移除或设置为荣休状态，荣休成员可以重新向技术委员会申请为活跃状态。如果一个合作者超过6个月无任何贡献，会自动设置成荣休状态。

### 技术委员会成员（Technical Steering Committee）

负责技术方向、项目管理、项目发布、贡献政策、仓库托管、行为准则、维护合作者列表，定期参加 TSC 活动，主席（主持人）会在线上主持活动，并做好活动记录并公布。

- 目的

    解决难以达成共识的技术难题、新方向等。

- 权益

    Github NervJS 组 Owner 权限。

- 申请方法

    新增 TSC 成员需要由其他 TSC 成员提名并讨论投票。

    申请 pull request 参考模版如下：

    ![PR 模板](https://storage.360buyimg.com/aotu-team/zakary-blog/2022-03-29-Taro-community/PR-Committee.png)

- 退出机制

    在一季度内，缺席75%的活动，且未参与任何一次投票，自动除名。成员可提出暂时”荣休“。

## 运行机制

![技术委员会组成](https://storage.360buyimg.com/aotu-team/zakary-blog/2022-03-29-Taro-community/structure.png)

如图运行机制包含技术委员会以及下设的 5 个团队（Core 团队、Plugins 团队、Platform 团队、**创新团队**、社区团队）。技术委员会由技术委员会委员组成，负责技术方向、项目管理、贡献政策、仓库托管、行为准则、维护合作者列表等，技术委员会主席负责定期组织会议。工作组由合作者成员组成，每个方向有一个 Owner，负责相关工作组的开发进展。

### 团队

- Core 团队
  - Cli 工作组

        主要负责 Taro 命令行工具的开发和维护工作。

  - Compile 工作组

        负责维护、优化小程序和 H5 的编译系统。

  - Runtime 工作组

        负责维护小程序运行时系统。

- **Plugin** 团队

    负责维护各 Taro 插件，包括端平台插件，React、Vue DevTools 等。

  - 端平台插件工作组

        负责维护各端平台插件，包括对微信、支付宝、百度、字节跳动、QQ、京东、企业微信、飞书、快手、钉钉、小红书等厂商小程序的适配等。

  - 混合开发组

        负责维护 Taro 与原生小程序的相互调用功能、Taro 开发原生插件等。

- Platform 团队

    负责 App、Web、Open Harmony 等跨平台开发。

  - H5 工作组

        负责维护 H5 的各模块，包括路由、组件库、API 库等。

  - React Native 工作组

        负责React Native适配核心、组件库、API 库等部分的开发。

  - Open Harmony 工作组

        负责鸿蒙适配核心、组件库、API 库等部分的开发。

  - 快应用工作组
- **创新团队**

    Taro 创新特新、新方向探索，如 wasm、rust、vite、flutter、electron 等。

  - UI 框架兴趣组

        TaroUI、NutUI 等 UI 库和其他类型生态工具的研发与管理。

- 社区团队

    负责 Taro 生态与运营，和 Taro 社区的运营推广工作。

### 技术委员会双周会

- 时间：每双周周四前，在 TSC issue 中预告下次会议的内容和日期。
- 议题：来自 Taro 下各项目中标注了 tsc-agenda 标签的事宜。会议结束后提交会议纪要 pull request。每次会议可邀请非委会参加，但无投票权。

### 基于共识决策的投票机制

各个晋升投票环节，基于共识决策原则，原则上达成多数一致。

- 待投票的议题需要在会议前周知各成员，给予成员足够调研思考时间
- 议题在即将达成一致时，在结题前必须询问“有人反对吗？”，以周知最后反对的机会
- 议题无法达成一致时，可以投票多数支持是否延期到下一个会议，否则必须继续讨论
- 议题满足“多数胜利”后即可通过，成员可以弃票

### 引导 / 培训机制

助手、合作者和技术委员会成员每个阶段，均提供相应的引导和培训，让新晋升者可以快速开展工作。
