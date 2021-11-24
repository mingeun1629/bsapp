# 번들 apk 생성 방법

1.  android/app/src/main/assets 폴더 생성
2.  react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle
3.  react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
4.  android studio에서 프로젝트 빌드 - build > build apk 실행

#
