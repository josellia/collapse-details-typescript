# summary-details

React component for extra content

![npm](https://img.shields.io/npm/v/summary-details)
![NPM](https://img.shields.io/npm/l/summary-details)

https://user-images.githubusercontent.com/33287490/138172984-83e1c7bc-717c-490a-a713-a1e7903451ad.mp4

## How to install

Below are ways to install the library using npm or yarn:

```
npm i summary-details
# ou
yarn add summary-details
```

## How to use default component

```jsx
import DetailsCollapse from "summary-details";

<DetailsCollapse summary="Lorem ipsum dolor sit">
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima voluptates
    obcaecati
  </p>
</DetailsCollapse>;
```

## How to use custom props component

```jsx
import DetailsCollapse from "react-collapse-details";

<DetailsCollapse
  summary="Lorem ipsum dolor sit"
  width="60rem"
  bgColor="red"
  bgHover="blue"
  color="yellow"
  colorHover="pink"
  borderRadius="1em"
>
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima voluptates
    obcaecati
  </p>
</DetailsCollapse>;
```

## Properties

This component is an abstraction of a collapse, but using native HTML properties.

| Props               | type    | required | Description                       |
| ------------------- | ------- | -------- | --------------------------------- |
| width               | string  |          |                                   |
| summary             | string  | X        |                                   |
| children            | element | X        |                                   |
| bgColor             | string  |          | Background color of summary       |
| bgHover             | string  |          | Background color hover of summary |
| color               | string  |          | Color of summary                  |
| colorHover          | string  |          | Color hover of summary            |
| borderRadius        | string  |          | Border radius of summary          |
| styleDetailsContent | string  |          | Class to style the content        |
