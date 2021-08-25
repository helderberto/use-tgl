<div align="center">
  <h1>🎩 use-tgl</h1>

  <p><strong>useTgl is a React Hook</strong> toggle component visibility.</p>

<!-- prettier-ignore-start -->
[![build][build-badge]][build]
[![version][version-badge]][package]
[![MIT License][license-badge]][license]
[![downloads][downloads-badge]][npmtrends]
<!-- prettier-ignore-end -->

</div>

---

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Motivation](#motivation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Bugs and Sugestions](#bugs-and-sugestions)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Motivation

- Simplify the toggle action for components like Modals, Dialogs, Checkbox;

## Usage

Install `use-tgl` in your project with the following:

`yarn add use-tgl` or `npm install use-tgl`

<details open>
<summary><strong>Simplify component toggle:</strong></summary>

```jsx
import useTgl from 'use-tgl';

export function App() {
  const { enabled, on, off, switch } = useTgl(true); // => Optional start value

  useEffect(() => {
    switch(); // => Disable toggle on render
  }, []);

  return enabled ? (
      <div>
        Enabled
        <button type="button" onClick={off}>Disable</button>
      </div>
    ) : (
      <div>
        Disabled
        <button type="button" onClick={on}>Enable</button>
      </div>
    );
}
```

</details>

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Bugs and Sugestions

Report bugs or do suggestions using the [issues](https://github.com/helderburato/use-tgl/issues).

## License

[MIT License](LICENSE) © [helderburato](https://helderburato.com)

<!-- prettier-ignore-start -->
[version-badge]: https://img.shields.io/npm/v/use-tgl.svg?style=flat-square
[package]: https://www.npmjs.com/package/use-tgl
[downloads-badge]: https://img.shields.io/npm/dm/use-tgl.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/use-tgl
[license-badge]: https://img.shields.io/npm/l/use-tgl.svg?style=flat-square
[license]: https://github.com/helderburato/use-tgl/blob/master/LICENSE
[build]: https://github.com/helderburato/use-tgl/actions
[build-badge]: https://github.com/helderburato/use-tgl/actions/workflows/ci.yml/badge.svg
<!-- prettier-ignore-end -->
