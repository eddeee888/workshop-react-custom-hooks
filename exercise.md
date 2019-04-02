## Exercise 1: Create a custom hook

Hook is a great way to reuse functionality. In our app, we can see that Login and Signup both have `State` and `{ email: '', password: ''}` declared, and they both return `[values, setValues]`.
We can create a hook called `useAuthenticationForm()` so we don't have to repeat the same thing in both files!

Once 'hooked' onto a component, the hooks will create seperated component states, making it possible to reuse its functionality different components.

How it should work:

`src/pages/Signup/Signup.example-1.tsx`

Exercise 1:

- Update `Login` form to use the same `useAuthenticationForm()`

`src/pages/Login/Login.tsx`

Answer:

`src/pages/Login/Login.answer-1.tsx`

## Exercise 2: Custom return value

Current we are returning an array where the first index is the value object, and the second index is `setValues` function. This function typing is hard to understand, and using it is pretty hard as well as we need to destructure the values object. We can create wrapper functions and return them instead of the generic `setValues` function.

How it should work:

`src/pages/Signup/Signup.example-2.tsx`

Exercise 2:

Update `useAuthenticationForm`: Update the return value to be an array where:

- Value of the first index is the state that comes from `useState`
- Value of the second index is an object where:
    - the keys are `email` and `object` 
    - the value of each key is an object containing `name`, `value` and `onChange` which can be passed into an input

To get started, copy the content of `src/common/hooks/useAuthenticationForm/useAuthenticationForm.exercise-2.ts` into `src/common/hooks/useAuthenticationForm/useAuthenticationForm.ts`

Once that is done, you can replace the content of `src/pages/Signup/Signup.tsx` with `src/pages/Signup/Signup-answer-2.tsx`, then replace `useAuthenticationForm.answer-2` with your hook and it should still work

Answer:

`src/common/hooks/useAuthenticationForm/useAuthenticationForm.answer-2.ts`

## Exercise 3: Create custom hook to handle form inputs

While `useAuthenticationForm` can be reused between `Login` and `Signup`, its reusability is limited to these 2 components. What if `Signup` has more fields such as first name and last name?

`Survey` page is a large form and the number of inputs increase but all inputs take very similar props: `name`, `value`, and a handle change function i.e. `onChange`. Let's create a component that prepares all the input props as part of the return values.

How it should work:

`src/pages/Survey/Survey.example-3.tsx`

Exercise 3:

Create `useForm` hook:

- should take an object containing input names with their initial values. (same as the `State` interface of `Survey`)
- should return an array where:
- Value of the first index is the form values
- Value of the second index of the array should contain an object where:
  - the keys are the the key of values i.e. `email`, `firstName`, `lastName`, `question1`, etc.
  - the values are objects containing `name`, `value`, `onChange` function (similar to exercise 2)

The useForm hook has been created and typed here: `src/common/hooks/useForm/useForm.ts`

If this is implemented correctly, you can replace the content of `src/pages/Survey/Survey.tsx` with `src/pages/Survey/Survey.example-3.tsx` then replace `useForm.answer-3` with your hook and it should still work.

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
