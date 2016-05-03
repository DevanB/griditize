# Griditize
## A small set of semantic React components that build grids

### Table of Contents
1. Overview
2. `Grid`
3. `Row`
4. `Column`
5. Usage
6. Contributing
7. License

### Overview
Griditize is a set of React components used to build semantic grids. At the heart, Griditize wraps [Flexbox grid](http://www.flexboxgrid.com), and exposes all of its API through props on the three components. Below you will find documentation on the three components and each prop you can pass in that component, as well as explanation of what prop does. Below are the four breakpoints that Flexbox grid uses:

xsmall < 48rem
small >= 48rem
medium >= 64rem
large >= 75rem

### `Grid`
`Grid` is the outermost component, used to denote where the grid container begins and ends. `Grid` accepts two props:

- `fluid`: (bool) Used to denote whether the container has a left and right auto margin or is a fluid container. A fluid container expands to the full width of the viewport with minimal padding (2rem) on either side for aesthetics.

- `tagName`: (string) HTML element that grid compiles into. Defaults to `div`.

### `Row`
`Row` is an organizaitonal component, used to denote the vertical flow of columns in the grid. `Row` accepts several props:

- `reverse`: (bool) Reverses the direction of the elements in the row.

- `start`: (`oneOf(['xsmall', 'small', 'medium', 'large'])`) Changes the horizontal alignment of elements to the start of the row at the viewport specified.

- `center`: (`oneOf(['xsmall', 'small', 'medium', 'large'])`) Changes the horizontal alignment of elements to the center of the row at the viewport specified.

- `end`: (`oneOf(['xsmall', 'small', 'medium', 'large'])`) Changes the horizontal alignment of elements to the end of the row at the viewport specified.

- `top`: (`oneOf(['xsmall', 'small', 'medium', 'large'])`) Changes the vertical alignment of elements to the top of the row at the viewport specified.

- `middle`: (`oneOf(['xsmall', 'small', 'medium', 'large'])`) Changes the vertical alignment of elements to the middle of the row at the viewport specified.

- `bottom`: (`oneOf(['xsmall', 'small', 'medium', 'large'])`) Changes the vertical alignment of elements to the bottom of the row at the viewport specified.

- `around`: (`oneOf(['xsmall', 'small', 'medium', 'large'])`) Distributes the contents of the row to have equal spacing around each column at the viewport specified.

- `between`: (`oneOf(['xsmall', 'small', 'medium', 'large'])`) Distributes the contents of the row to have equal space between each column at the viewport specified.

- `first`: (`oneOf(['xsmall', 'small', 'medium', 'large'])`) Reorders to be the first element at the viewport specified.

- `last`: (`oneOf(['xsmall', 'small', 'medium', 'large'])`) Reorders to be the first element at the viewport specified.

- `tagName`: (string) HTML element that row compiles into. Defaults to `div`.

### `Column`
`Column` is the component used to denote how wide you want a column to be in a row, how offset that column should be in that row, and the direction in which the content flows in the column. `Column` accepts several props:

- `xsmall`: (`oneOf([number, bool])`) The number of columns wide at the xsmall viewport, or a boolean to tell the column to auto size it's width at the xsmall viewport.

- `small`: (`oneOf([number, bool])`) The number of columns wide at the small viewport, or a boolean to tell the column to auto size it's width at the small viewport.

- `medium`: (`oneOf([number, bool])`) The number of columns wide at the medium viewport, or a boolean to tell the column to auto size it's width at the medium viewport.

- `large`: (`oneOf([number, bool])`) The number of columns wide at the large viewport, or a boolean to tell the column to auto size it's width at the large viewport.

- `xsmallOffset`: (number) The number of columns to offset on a xsmall viewport.

- `smallOffset`: (number) The number of columns to offset on a small viewport.

- `mediumOffset`: (number) The number of columns to offset on a medium viewport.

- `largeOffset`: (number) The number of columns to offset on a large viewport.

- `reverse`: (bool) Reverses the direction of the elements in the column.

- `tagName`: (string) HTML element that col compiles into. Defaults to `div`.

### Usage

#### Standard Grid
```
<Grid>
	<Row>
	  <Column xsmall={12} small={8} medium={6} large={4}>
      <span>Content</span>
    </Column>
	</Row>
</Grid>
```

#### Offset Column
```
<Grid>
	<Row>
    <Column xsmall={9} xsmallOffset={3}>
      <span>offset</span>
    </Column>
  </Row>
</Grid>
```

#### Auto Width Column
```
<Grid>
	<Row>
    <Column xsmall small>
      <span>Auto sized at xsmall and small viewports</span>
    </Column>
  </Row>
</Grid>
```

#### Nested Grids
```
<Grid>
	<Row>
    <Column xsmall>
      <span>Auto sized</span>
      <Row>
				<Column xsmall>
					<span>Auto sized and nested</span>
				</Column>
      </Row>
    </Column>
  </Row>
</Grid>
```

#### Alignment
```
<Grid>
	<Row start="large" center="xsmall" end="small">
    <Column xsmall={6}>
      <span>Starts at large, center at xsmall, ends at small viewport</span>
    </Column>
  </Row>
</Grid>
```

```
<Grid>
	<Row middle="xsmall">
    <Column xsmall={6}>
      <span>Centered in middle of row on xsmall viewports</span>
    </Column>
  </Row>
</Grid>
```

#### Distribution
```
<Grid>
	<Row around="xsmall">
    <Column xsmall={2}>
      <span>Equal</span>
    </Column>
    <Column xsmall={2}>
      <span>Padding</span>
    </Column>
    <Column xsmall={2}>
      <span>Around</span>
    </Column>
  </Row>
</Grid>
```

```
<Grid>
	<Row between="xsmall">
    <Column xsmall={2}>
      <span>Equal</span>
    </Column>
    <Column xsmall={2}>
      <span>Padding</span>
    </Column>
    <Column xsmall={2}>
      <span>Between</span>
    </Column>
  </Row>
</Grid>
```

#### Reversing
```
<Grid>
	<Row reverse>
    <Column xsmall={4}>
      <span>1</span>
    </Column>
    <Column xsmall={4}>
      <span>2</span>
    </Column>
    <Column xsmall={4}>
      <span>3</span>
    </Column>
  </Row>
</Grid>
```

### Contributing

### License
The MIT License (MIT)
Copyright (c) 2016 Devan Beitel. <devanb.us>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

