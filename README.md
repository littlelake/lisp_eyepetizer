# react-native-eyepetizer
> react native 仿开眼

## 主要功能
- CodePush 热更新
- 一键登录（未完成）
- 视频组件封装
- 启动页（ios还未完成）
- 夜间模式（底部栏还有些问题）
- mobx状态管理
- 视频缓存/清除缓存
- 广告页（未完成）
- 根据不同平台统计需要进行单独打包（未完成）
- 垃圾文件回收（未完成）
- 流传播/断点续传（未完成）

## CodePush 热更新

### 生成bundle
```
react-native bundle --entry-file index.js --bundle-output ./bundle/android/main.jsbundle --platform android --assets-dest ./bundle/android --dev false

react-native bundle --entry-file index.js --bundle-output ./bundle/ios/main.jsbundle --platform ios --assets-dest ./bundle/ios --dev false
```

### 安卓 热更新 测试
```
code-push release-react lisp_eyepetizer android --t 1.0.0 --dev false --d Staging --des "优化" --m true
```

### 安卓 热更新 线上
```
code-push release-react lisp_eyepetizer android  --t 1.0.0 --dev false --d Production  --des "有新的更新" --m true
```

### IOS 热更新 测试
```
code-push release-react lisp_eyepetizer ios --t 1.0.1 --dev false --d Staging --des "优化" --m true
```

### IOS 热更新 线上
```
code-push release-react lisp_eyepetizer ios  --t 1.0.0 --dev false --d Production  --des "有新的更新" --m true
```

## 注意
> react-native-cached-image

由于RN0.61中NetInfo和AsyncStorage已经被react-native的中心库移除出来了，所以需要将其替换成```@react-native-community/async-storage```和```@react-native-community/netinfo```，不然会报错
