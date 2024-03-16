<!-- prettier-ignore-start -->
# CPF and CNPJ validator

### Installation
```
npm install br-docs-validator
```

### Usage
```js
import { cpf, cnpj, generic } from "br-docs-validator";

// validates a cpf (with or without punctuation)
const cpfIsValid = cpf.isValid("438.592.280-21");
// #=> true

// validates a cnpj (with or without punctuation)
const cnpjIsValid = cnpj.isValid("79.402.591/0001-83");
// #=> true

// validates the cpf or cnpj depending on the length of the string (can be with or without punctuation)
const cnpjOrCpfIsValid = generic.isValid("79.402.591/0001-83");
// #=> true
```

## License
[MIT](https://opensource.org/license/MIT)

Copyright (c) 2024
<!-- prettier-ignore-end -->
