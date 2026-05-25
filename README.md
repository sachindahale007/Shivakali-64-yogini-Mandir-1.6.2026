# Shivakali 64 Yogini Native Android App

Ye folder clean native Android app export hai.

## Android Studio me kya open karna hai

Android Studio me ye folder open karein:

```text
C:\Users\sachi\Documents\Codex\2026-04-30\kya-tum-mujhe-pahchante-ho\Shivakali64Yogini-NativeApp\android
```

## App run karne ka tarika

1. Phone se purani Shivakali app uninstall karein.
2. Android Studio me upar wala `android` folder open karein.
3. `File > Sync Project with Gradle Files` karein.
4. Phone select karein.
5. Green Run button dabayein.

## Source files

Main app content yahan hai:

```text
web-source\index.html
web-source\app.js
web-source\styles.css
web-source\assets\
```

Native Android me packaged web files yahan hain:

```text
www\
android\app\src\main\assets\public\
```

## Latest included changes

- Last tile ka naam `गैलरी`
- Search Hindi aur English/Hinglish keywords se
- Better content mapping: `उपासना`, `ज्ञान`, `सेवा`
- Updated professional devotional color styling
- App version: `1.1`

## Manual edit ke baad copy rule

Content/design edit karne ke liye pehle `web-source` me files edit karein. Phir same files ko in dono jagah copy karein:

```text
www\
android\app\src\main\assets\public\
```

Example: `web-source\app.js` edit karne ke baad usko `www\app.js` aur `android\app\src\main\assets\public\app.js` me copy karein.

## Agar update na dikhe

Phone se app uninstall karke dobara Run karein. Android Studio me galti se purana folder open na ho; hamesha is export folder ke andar wala `android` folder open karein.
