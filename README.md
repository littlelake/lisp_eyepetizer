# react-native-eyepetizer
react native 仿开眼

## CodePush 热更新

### 生成bundle
react-native bundle --entry-file index.js --bundle-output ./bundle/android/main.jsbundle --platform android --assets-dest ./bundle/android --dev false

### 安卓  热更新测试
code-push release-react lisp_eyepetizer android --t 1.0.0 --dev false --d Staging --des "优化" --m true

### 安卓  热更新线上
code-push release-react lisp_eyepetizer android  --t 1.0.0 --dev false --d Production  --des "有新的更新" --m true
