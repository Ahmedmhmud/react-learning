# Notes on React

## JSX

Normal pure DOM manipulation requires so much code and hard to read, So JSX is the solution as it allows to writenested  HTML tags, but it is not HTML, React converts this JSX into JavaScript and updates the DOM.

---

### Rules of JSX

As we mentioned, JSX is not HTML and has rules that makes it even more powerful

#### You can't return multiple elements sitting side by side as they need to wrapped in one parent container.
- This rule comes from JS rule which is you can't return 2 objects from the same function unless you wrap them in an array
- If you don't like to wrap them in a normal HTML tag, there is a component that React offers which is `React.Fragment` and can be shortened into `<>`.

#### Every tag in JSX must be closed properly, even tags that don't need to be closed in HTML like `<br>`
- You can close tags like `<br>` by adding `/` before `>` like `<br />`.

#### Attribute names must be written in camelCase
- HTML attributes sometimes conflict with JS reserved keywords like `for`.
- `for`   ===> `htmlFor`.
- `class` ===> `className`.
- When this conflict happens, React suggests the correct attribute name in the dev console.

#### You can embed JS expressions directly into markup using curly braces.
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

---

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

---

### Props patterns

#### Default props
- You can use default props, it will be used when the passing values is missing or `undefined`.
- If you pass `null` or 0, it will not be used.
```jsx
export const Greeting = ({ name = "Ahmed", message = "Hello" }) => {
    return (
        <h1>{message}, {name}!</h1>
    )
}
```

And that is how JS default params work, this ensures the point of JSX converted at the end to JS.

#### Forwarding props with spread operator
- Instead of destructing the props and passing it individually to the component we can do this:
```jsx
import { Greeting } from './Greeting'

export const UserProfile = ({ id, ...rest }) => {
    return (
        <>
            <Greeting  {...rest} />
            <p>Displaying profile for user {id}...</p>
        </>
    )
}
```

#### Passing JSX as children
- As HTML, we can nest components inside each other.

In `ProfileWrapper.jsx`
```jsx
export const ProfileWrapper = ({ title, childeren }) => {
    return (
        <>
            <div>
                <h1>{title}</h1>
                {children}
            </div>
        </>
    )
}
```

In `App.jsx`
```jsx
import { UserProfile } from './UserProfile'
import { ProfileWrapper } from './ProfileWrapper'

function App () {
    return (
        <ProfileWrapper title="Facebook">
            <UserProfile {...info} />
            <button>Post</button>
        </ProfileWrapper>
    )
}

export default App
```

---

### Conditional rendering

- **If statement**: The simplest way, but usually causes a lot of duplication.
- **Ternary operator**: Allows to conditionally render parts of the component.
- **AND operator**: All or nothing.
```jsx
<h3>{name} { isPremium && <span> $</span>}</h3>
```
- **Variables**: you can prepare the JSX in variables to avoid messy components.

---

### Rendering lists

If you have a list of items like comments on a post and want to render them, it is not practical to write a div for each comment.

We can instead use `map()` function to map each comment to it's code.

```jsx
const productElements = products.map((product) => {
        return (
            <div>
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
            </div>
        )
    })
```

Yocan even filter them according to a specific condition by `filter()`, This is the power of JSX.

---

### Keys and how React use them in rendering lists

When React needs to render a list with a new version, it compares it to the old version and see if there any item that needs to be added or omitted to increase efficiency and prevent rendering the whole list again.

React does this by keys.

- You need to add a key for the list in the outer (parent) tag.
- The key should be unique:
    - if the data comes from database, use the primary keys of the items.
    - if it is generated in the runtime you might consider `uuid` package.

So to correct the last code snippet, we need to add a key for React, it can be the id in the product object:

```jsx
const productElements = products.map((product) => {
        // Now we will add key attribute in the div tag
        return (
            <div key={product.id}>
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
            </div>
        )
    })
```

#### Using array index for keys

There is a common approach for keys selection which is array index, this approach is simple and `map()` function provides `index` as a second arguement, but before using it you must be sure about those things:
- **There isn't a unique key**: There is no need for using index kinstead of a unique key that already exists.
- **List is completely static**: You must be sure there are no items being added or deleted.
- **List is never reordered or filtered**: This is because of the way React render lists as mentioned in the previous section.

Examples for lists that satisfy those conditions: **Navigation menu**.

---

### 