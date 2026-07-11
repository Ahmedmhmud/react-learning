# Notes on React

## JSX

Normal pure DOM manipulation requires so much code and hard to read, So JSX is the solution as it allows to writenested  HTML tags, but it is not HTML, React converts this JSX into JavaScript and updates the DOM.

### Rules of JSX

As we mentioned, JSX is not HTML and has rules that makes it even more powerful

- You can't return multiple elements sitting side by side as they need to wrapped in one parent container.
    - This rule comes from JS rule which is you can't return 2 objects from the same function unless you wrap them in an array
    - If you don't like to wrap them in a normal HTML tag, there is a component that React offers which is `React.Fragment` and can be shortened into `<>`.

- Every tag in JSX must be closed properly, even tags that don't need to be closed in HTML like `<br>`
    - You can close tags like `<br>` by adding `/` before `>` like `<br />`

- Attribute names must be written in camelCase
    - HTML attributes sometimes conflict with JS reserved keywords like `for`.
    - `for`   ===> `htmlFor`.
    - `class` ===> `className`.
    - When this conflict happens, React suggests the correct attribute name in the dev console.

- You can embed JS expressions directly into markup using curly braces.
```jsx
export const Welcome = () => {
    const name = Ahmed Mahmoud;
    const age = 21;

    return (
        <>
            <h1>Welcome, {name}</h1>
            <p>You are born in {new Date().getFullYear() - age}</p>
        </>
    )
}
```

### props

props in JSX are like arguements in JS.

- In `app.jsx`
```jsx
function App() {
    return (
        <>
            <Welcome name="Ahmed" />
        </>
    )
}

```

- In `Welcome.jsx`
```jsx
export const Welcome = (props) => {
    return (
        <h1>Welcome {props.name}!</h1>
    )
}
```

- You can destruct the props object.
- Strings are passed to the component in double quotes, everything else is in curly braces.

