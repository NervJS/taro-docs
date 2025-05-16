---
title: 常见问题
---

### **ERROR: Failed to get ModuleInfo properties 'meta.pkgPath'**

本地可能存在部分混淆导致 IDE 无法正确解析依赖，需要检查 `build-profile.json5`、`obfuscation-rules.txt` 等文件中是否开启混淆配置，需要关闭后清理 IDE 缓存重新编译。

```diff
- -enable-property-obfuscation
- -enable-toplevel-obfuscation
- -enable-filename-obfuscation
- -enable-export-obfuscation
```

### **ERROR: Cannot resolved import statement**

本地执行 library 编译时，启用 `useNormalizedOHMUrl` 配置会导致外部依赖无法解析，建议在 library 模块中使用 `useNormalizedOHMUrl: false` 或者移除该配置。

### **ERROR: Duplicated files found in module default**

不使用核心库切换到使用核心库时可能会出现该问题，需要清理 build-profile.json5 文件中关于 so 包的配置项。

```diff
{
  "apiType": "stageMode",
  "buildOption": {
-    "externalNativeOptions": {
-      "path": "./src/main/cpp/CMakeLists.txt",
-      "arguments": "-DCMAKE_JOB_POOL_COMPILE:STRING=compile -DCMAKE_JOB_POOL_LINK:STRING=link -DCMAKE_JOB_POOLS:STRING=compile=8;link=8",
-      "cppFlags": "",
-      "abiFilters": [
-        "arm64-v8a"
-      ]
-    }
  },
  ...
}
```
