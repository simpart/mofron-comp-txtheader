#  mofron-comp-txtheader
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

text header component

text in this component is positioned centrally in vertical in automatically. 


# Install
```
npm install mofron  mofron-comp-txtheader
```

# Sample
```html
<require>
    <tag module="mofron-comp-txtheader">TxtHeader</tag>
</require>

<Header txtpos=(0.3rem,-0.2rem)>Text Header</Header>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| ◯  | text | mixed | string: text contents |
| | | | mofron-comp-text: update text component |
| | | string (size) | margin-left value |
| | txtpos | string (size) | left offset position |
| | | string (size) | height offset position |
| | | |  |

