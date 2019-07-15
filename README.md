# <RadioWidget /> Component API

| Prop | Type | Default |
|---|---|---|
|  stations | `Array<Station>`| - |
|  onSelect| `Function` | `item => console.info('RadioWidget. [onSelect] ', item) `|
|  onDecrease| `Function` | `item => console.info('RadioWidget. [onDecrease] ', item)`|
|  onIncrease|`Function` | `item => console.info('RadioWidget. [onIncrease] ', item)`|
|  onSwitch|`Function` | `() => console.info('RadioWidget. [onSwitch]')` | 
|  onBack|`Function` | `() => console.info('RadioWidget. [onBack]')` | 
|  emptyListPlaceholder| `String` | No stations are available :(|
|  headerTitle|`String` | STATIONS |
|  footerTitle| `String` | Currently playing |
|  keepAspectRatio| `Boolean` | false |

### Station object shape
```
type Station {
    uuid: String,
    name: String,
    image: String(URL/PATH),
    mhz: String,
} 
```


### Examples

```jsx
  <View style={{flex: 1, justifyContent: 'center'}}>
      <View style={{flexDirection: 'row', flex: 1}}>
        <RadioWidget stations={mockData} />
        <RadioWidget />
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <RadioWidget keepAspectRatio stations={mockData} />
      </View>
    </View>
```

```jsx
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View style={{flexDirection: 'row', flex: 1}}>
        <RadioWidget stations={mockData} />
        <RadioWidget />
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <RadioWidget stations={mockData} />
      </View>
    </View>
```

```jsx
    <RadioWidget stations={mockData} />
```

# ScreenShots!

![ex1](https://raw.githubusercontent.com/bdomantas/RadioWidget/master/git/git.png)
![ex2](https://raw.githubusercontent.com/bdomantas/RadioWidget/master/git/git1.png)
![ex3](https://raw.githubusercontent.com/bdomantas/RadioWidget/master/git/git2.png)
![ex4](https://raw.githubusercontent.com/bdomantas/RadioWidget/master/git/git3.png)
