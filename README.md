# expo-unified-storage
Storage Expo module compatible with iOS/Android/Web

# usage
```javascript
//package.json
...
"dependencies": {
  "expo-unified-storage": "github:justcallmedk/expo-unified-storage#master"
}
...
```

```javascript
import Storage from 'expo-unified-storage'
Storage.hello(); // 'ios/android || web hello storage!'
await Storage.set('foo','bar');
const myFoo = await Storage.get('foo');
console.info(myFoo); // bar
await Storage.delete('foo');
```
