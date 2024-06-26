# FCC Homework App README

Welcome to FCC Homework application. This README will guide you through the steps to set up and run the application locally.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have Node.js and npm installed on your machine. You can download them from [Node.js](https://nodejs.org/).

### Installation

1. **Clone the repository**:

    ```sh
    git clone https://github.com/vuk00733/fat-cat-coders.git
    cd fat-cat-coders

    ```

2. **Install the dependencies**:

    ```sh
    npm install

    ```

3. **Run the server**:
    ```sh
    npm run dev
    ```

The server will be availble on http://localhost:3000.

### Using the application

When the app is opened the user will see a landing page with 4 tabs to be selected at the top of the screen.

The first tab is a landing page provided by the FCC Homework App creators.

![landing](https://github.com/vuk00733/fat-cat-coders/assets/60270183/6bb503a2-d703-4370-be4d-ce3b30fb5eba)

The second tab will represnt the first assigmnet of the app "UsersList" component.

![users](https://github.com/vuk00733/fat-cat-coders/assets/60270183/e265b103-14ce-4ed7-9407-370341c50e22)

The third tab will be the "ThePostGenerator" component. This component has customizable features in the application code. For starters the forms validation is set to:

```ts
export const schema = z.object({
    title: z
        .string()
        .min(1, { message: 'Title is required' })
        .max(5, { message: 'Title should not exceed 5 characters' }),
    body: z
        .string()
        .min(1, { message: 'Body is required' })
        .max(20, { message: 'Body should not exceed 20 characters' }),
});
```

This example does the validation in the form of min and max characters. The user can customize this object in the validationSchema.ts file to change the required validation.

![posts](https://github.com/vuk00733/fat-cat-coders/assets/60270183/cf78c511-25a2-46a3-aedf-43296c44c015)

The fourth tab will be the "DynamicPageGenerator" component. This component also has customizable features in the code. The entry point of the component is PageGenerator.tsx file. In this file the user can change the data object to customize the created web page by the component.

```ts
const data = [
    {
        type: 'layoutSection',
        props: { background: 'mainRed' },
        components: [
            {
                type: 'componentButton',
                props: {
                    children: 'Click Me',
                    onClick: () => {
                        alert('Button clicked!');
                    },
                },
            },
            {
                type: 'componentTrustBar',
                props: {
                    images: [
                        'https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    ],
                },
            },
        ],
    },

    {
        type: 'componentHero',
        props: {
            title: 'Hero title',
            image: [
                'https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            ],
        },
    },
];

const data = [
    {
        type: 'componentItemsShowcase',
        props: {
            items: [
                {
                    title: 'ItemsShowcase Title',
                    description: 'ItemsShowcase Description',
                },
            ],
        },
    },
];

const data = [
    {
        type: 'componentHero',
        props: {
            title: 'Hero title',
            image: [
                'https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            ],
        },
    },
];
```

The supported types of ui elements are : provided /type/dynamicForm.ts and are the following :

```ts
export type ComponentType =
    | 'layoutSection'
    | 'componentButton'
    | 'componentHero'
    | 'componentCards'
    | 'componentItemsShowcase'
    | 'componentPanelShowcase'
    | 'componentTrustBar'
    | 'componentUserList';
```

Each of the components accepts a specific prop object which is defined in each component respecitvely in the src/component/baseComponets folder.

![pages](https://github.com/vuk00733/fat-cat-coders/assets/60270183/d80a9a67-2ef4-4939-912c-b7161b03bc4c)

Important note here is that only 'layoutSection' component type can accept multiple components in the components field of the main object. This is the only supported recursive component renderer availble.
