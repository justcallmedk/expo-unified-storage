# expo-unified-storage
Storage Expo module compatible with iOS/Android/Web

# usage
```javascript
import Storage from './components/storage/'
Storage.hello(); // 'ios/android || web hello storage!'
await Storage.set('foo','bar');
const myFoo = await Storage.get('foo');
console.info(myFoo); // bar
await Storage.delete('foo');
```
