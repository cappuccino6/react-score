# react-score ✨✨✨✨✨
### A react score component for rating

### Get started quickly

###### Install react-stars package with NPM:
`npm install react-stars --save`

Then in your project include the component:

```javascript
import React from 'react'
import ReactScore from 'react-score'

const Score = () => {
  return (
    <ReactScore />
  )
}
```
### API
props list:

| Property | Description | Default value | type |
| -------- | ----------- | ------------- | ---- |
| `className`  | Name of parent class | `null` | string |
| `count`  | How many total stars you want  | 5 | number |
| `value`  | Default value prop | 0 | number |
| `char` | Use your own character, including svg | ★ | string |
| `color1` | Color of inactive character | `rgba(253, 84, 9, 0.2)` | string |
| `color2` | Color of selected or active star | `rgb(253, 84, 9)` | string |
| `size` | Size of stars (in px) | `30` | string |
| `spacing` | Letter spacing of stars (in px) | `10` | string |
| `edit` | Should you be able to select rating or just see rating (for reusability) | `true` | boolean |
| `half` | Should component use half stars, if not the decimal part will be dropped otherwise normal algebra rools will apply to round to half stars | `true` | boolean
| `onChange` | Will be invoked any time the rating is changed | `function() {}` | function |

### Help improve the component
###### Build on your machine:
```bash
# Clone the repo
https://github.com/cappuccino6/react-score.git
# Go into project folder
cd react-score
# Install dependancies
npm i
```
Build the component:
```bash
npm run build
```
Run the examples (dev):
```bash
npm run dev
```
Then in your browser go to: [http://127.0.0.1:8080/example](http://127.0.0.1:8080/example)
