# lug
A powerful and ease to use schema validator library

### to install

```bash
npm install lug
```

### to define schemas

```javascript
import { lug, string } from 'lug';

const schema = lug({
  name:  string().required(),
  age: number().required(),
  isOfLegalAge: boolean().required(),
});
```

### to validade

```javascript
const validation = schema.validate({
  name: 'Mark One',
  age: 32,
  isOfLegalAge: true,
});
```

### if has errors

```javascript
const validation = schema.validate({
  name: undefined,
  age: '32',
  isOfLegalAge: 'yes',
});

if (validation.isLeft()) {
  handleErrors(validation.value);
}
```

`validation.value` for errors return a array with the field and message.

```
[
  {
    name: 'name',
    message: 'This field is required'
  },
  {
    name: 'name',
    message: 'This field must be a number'
  },
  {
    name: 'name',
    message: 'This field must be a boolean'
  }
]
```

### if is valid

```javascript
const validation = schema.validate();

if (validation.isRight()) {
  sendToServer(validation.value);
}
```

validation.value when is valid return all the values.

### to validateOne

```javascript
const validation = schema.validateOne({
  name: 'Mark One',
});
```

And you got just the field validated, totally separate from anothers.
