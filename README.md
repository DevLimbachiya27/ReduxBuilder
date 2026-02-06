📌 Redux Builder – Task Management Application
📖 Project Description

Redux Builder ek lightweight Task Management Application hai jo React.js aur Redux Toolkit ka use karke develop ki gayi hai. Is project ka main focus Redux Toolkit ke through global state management ko samajhna aur builder pattern ka clean implementation dikhana hai.

Application users ko ye functionalities provide karti hai:

New tasks add karna

Existing tasks ko list mein dekhna

Tasks delete karna

Saara task-related data centrally Redux Store mein manage hota hai, jisse state predictable, scalable aur easy-to-debug rehti hai.

🎯 Project Goals

Is project ke key goals hain:

Redux architecture aur unka data flow clearly samajhna

React applications mein global state ko efficiently manage karna

Redux Toolkit ke builder pattern ka practical use implement karna

UI logic aur business logic ko properly separate karna

🛠️ Tech Stack

React.js

Redux Toolkit

React Redux

JavaScript (ES6)

HTML

CSS

🏗️ Application Architecture

Redux Builder application following core components pe based hai:

UI Components – User interactions handle karte hain

Redux Store – Global application state ko store karta hai

Actions – State changes ko define karte hain

Reducers – Actions ke basis par state update karte hain

🔄 Application Data Flow

Application ka flow Redux ke standard pattern ko follow karta hai:

User UI ke through action perform karta hai (Add / Delete Task)
→ UI action dispatch karti hai
→ Reducer builder pattern ke through state update karta hai
→ Redux Store update hota hai
→ UI automatically re-render hoti hai

Flow Summary:
UI → Dispatch Action → Reducer → Store Update → UI Refresh

📂 Project Folder Structure
src/
│── app/
│   └── store.js
│── features/
│   └── tasks/
│       └── taskSlice.js
│── components/
│   └── TaskList.jsx
│── App.jsx
│── main.jsx
└── index.css

⚙️ Redux Store Setup

Redux store ko configureStore() ke through setup kiya gaya hai, jisme tasks ka reducer register hota hai:

configureStore({
  reducer: {
    tasks: taskReducer
  }
})

🧩 Redux Slice Implementation

createSlice() ka use karke reducers aur actions create kiye gaye hain

Builder pattern reducer logic ko readable aur maintainable banata hai

Available actions:

addTask

deleteTask

🖥️ UI & Redux Integration

useDispatch() → Redux actions dispatch karne ke liye

useSelector() → Redux store se data read karne ke liye

State change hote hi UI automatically update ho jaati hai

✨ Key Features

Task add karne ki functionality

Task list view

Task delete option

Redux Toolkit ke through centralized state management

Clean aur professional red-themed UI

<img width="1920" height="1080" alt="Screenshot 2026-02-04 121017" src="https://github.com/user-attachments/assets/5004952a-a78b-4bbb-9763-6217e72b07b9" />

