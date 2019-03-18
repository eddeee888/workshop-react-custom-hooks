## Exercise 1: Create wrapper functions from `useState` updater

With traditional `setState` function, we have to pass an object containing the value that needs to be updated. For signup form, if we use traditional `setState`, we would have to call `setState({email})` or `setState({password})`.

However, with the updater function we get from `useState`, we have to pass a complete object that matches intial shape which involves spreading existing values into the object. i.e. `setValues({...values, email})` or `setValues({...values, password})`

We can create wrapper functions to make them a bit easier to use (and type)

How it works:

`src/pages/Signup/Signup.example-1.tsx`

Exercise 1:

- Create `setEmail` and `setPassword` functions and use them for the `Login` page email and password inputs.

`src/pages/Login/Login.tsx`

Answer:

`src/pages/Login/Login.answer-1.tsx`

## Exercise 2: Create a custom hook to share common logic

Hook is a great way to re-use functionalities. Two components using the same hooks will benefit from having the same behaviour. For example, `useState` allows us the track and update the state of the component using it (but not the actual state value).

In our application, `Login` and `Signup` do have very similar behaviour: we need to track and update values of `email` and `password`. We can create a custom hook in this case to extract this behaviour. Let's call that hook `useAuthenticationForm` (note that all of our hooks should have `use` prefix). When we create our own hook, we are free to choose what we return.

How it works:

`src/pages/Signup/Signup.example-2a`

Exercise 2:

- Bring `setEmail` and `setPassword` into `useAuthenticationForm`
- Change the return value of `useAuthenticationForm`. Instead of returning `setValues`, return an object that contains `setEmail` and `setPassword` (check how we can use it in `src/pages/Signup/Signup.example-2a`)

`src/common/hooks/useAuthenticationForm/useAuthenticationForm.ts`

Answer:

`src/pages/Login/Login.answer-2b.tsx`

## Exercise 3: Create custom hook to handle form inputs

While `useAuthenticationForm` can be reused between `Login` and `Signup`, its reusability is limited to these 2 components. What if `Signup` has more fields such as first name and last name?

`Survey` page is a large form and the number of inputs increase but all inputs take very similar props: `name`, `value`, and a handle change function i.e. `onChange`. Let's create a component that prepares all the input props as part of the return values.

How it should work:

`src/pages/Survey/Survey.example-3.tsx`

Exercise 3:

`useForm` hook:

- should take an object containing input names with their initial values. (same as the `State` interface of `Survey`)
- should return an array where the value at first index is the form values
- The second index of the array should contain an object that contains 3 properties: `name`, `value`, `onChange` that can be spread into inputs.

`src/common/hooks/useForm/useForm.ts`

Answer:

`src/common/hooks/useForm/useForm.answer-3.ts`

Hint:

1. If the intial state that we passed in is:

```
useState({
    email: '',
    password: ''
})
```

Then the result should be:

```
[
  {
    email: 'value of email',
    password: 'value of password'
  },
  {
    email: {
        name: 'email',
        value: 'value of email',
        onChange: () => {} // function to update email
    },
    password: {
        name: 'password',
        value: 'value of password',
        onChange: () => {} // function to update password
    }
  }
]
```

2. To loop through the keys of an object:

```
(Object.keys(values) as Array<keyof Inputs<S>>).forEach(key => {});
```

3. Final typing may look like this:

```
interface State {
  [key: string]: any;
}

interface InputProps {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

type Inputs<S> = { [key in keyof S]?: InputProps };

function useForm<S extends State>(initialValues: S): [S, Inputs<S>] {

}
```
