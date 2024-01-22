# Reconciliation

This mini Project will help to understand how react works under the hood.

## What this project explains

- How reconcilition works 
- How the state of the ui is changed with re-rendering the whole page again.
- Making a reconciler of our own not as complex as the actual one but similar enough to understand what goes under the hood when reconcilition happens.
[There are three versions of reconciler with increasing complexity ]


## What is Reconciliation?


"The “reconciliation” algorithm in React is how the decision to re-render the component is made."

What makes react so popular is its Reconciliation algorithm .In browser DOM (Document Object Model) manipulation is time consuming and expensive.

In reconcilition whole page does not get updated only parts which are changed get updated .This makes process fast and less expensive.

To understand Reconciliation fully we need we need to understand
- What is DOM (Document Object Model) (How websites used to render before reconcilition as a concept was introduced.)


## What is DOM(Document Object Model)?

DOM in simple words is a TREE like structure in which  the logical structure of documents and the way a document is accessed and manipulated is defined.
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/1200px-DOM-model.svg.png" width=50% height=50%>

From the above image we can see there is a structure in which the browser gets access to the element and  while writing code you also have to maintain this hierarchy.

### How websites used to render before reconcilition as a concept was introduced?

Before reconcilition as a concept was introduced, website used to make changes directly to the DOM content which means there was only main DOM and even when minor changes were made the whole DOM was to be re-rendered.

However, this approach had some drawbacks. As websites became more complex and dynamic, directly manipulating the DOM  became inefficient and error-prone. For example, making multiple changes to the DOM in rapid succession could lead to performance issues, and keeping track of all the changes could be challenging.

So to tackle with this issue virtual DOM and Reconciliation was introduced.


## What is virtual DOM?

To tackle this issue of re-rendering and updating main DOM ,concept of virtual DOM was introduced.

In this approach, a virtual representation of the DOM is created and stored in memory. This virtual DOM is a lightweight copy of the actual DOM, maintained by the framework or library being used (such as React).

When changes occur in the application, instead of directly updating the actual DOM, the changes are made to the virtual DOM.

After the changes are made to the virtual DOM, a process called "Diffing" takes place. The virtual DOM is compared to the previous version of the virtual DOM or the actual DOM to determine the differences or changes that need to be applied.

Once the differences are identified, only the specific parts of the actual DOM that are modified gets re-rendered, rather than re-rendering the entire page. This targeted update reduces the computational cost and improves performance.

![vDOM](https://miro.medium.com/v2/resize:fit:800/0*6lxkY72mrFcroWHi.png)

#### Now lets understand the project

## Run Locally

Clone the project

```bash
  git clone https://github.com/Ut-the-pro/Reconsiler.git
```

Go to the project directory to see the code

```bash
  cd src/script3.ts
```

Install dependencies (node_modules, typescript compiler)

```bash
  npm install
```
```bash
  npm install typescript
```
in `tsconfig.json` set `"outDir"` to `"./dist"`
```bash
  tsc -b
```

Open the `index.html` file

### After setting up the project locally

If you are running the project locally and adding todos, open chrome dev tool (right click -> Inspect or Ctrl + Shift + C) and look at the element area changing scripts to `script1.js` , `script2.js` and `script3.js` in `index.html`.
