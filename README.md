# Angular Learning Project 🚀

A comprehensive project for learning Angular fundamentals and advanced concepts.

---

## 📋 Project Contents

### 1️⃣ **Main Components**

#### 🏠 Header Component
- Top navigation component
- **Path:** `src/app/components/header/`
- Displays main navigation

#### 📍 Footer Component
- Bottom section component
- **Path:** `src/app/components/footer/`

#### 🎮 Playground Component
- Experimental area for testing Angular concepts
- **Path:** `src/app/components/playground/`
- Contains multiple sub-components

#### ✅ Todo List Component
- Main task management system
- **Path:** `src/app/components/todo-list/`
- Add, delete, and modify tasks

---

### 2️⃣ **Playground Sub-Components**

#### 📊 Counter Component
- Simple counter that increases/decreases
- Demonstrates basic State Management principles
- **Path:** `src/app/components/playground/counter/`

#### 🔤 First, Second, Third Components
- Simple demonstration components
- Explain Data Binding and Template Syntax basics
- **Path:** `src/app/components/playground/first/` etc.

#### 🎯 Input-Output Component
- Demonstrates **Parent-Child Communication**
- Usage of `@Input()` and `@Output()`
- **Path:** `src/app/components/playground/input-output/`

#### 🔄 Life-Cycle Component
- Explains **Angular Component Lifecycle Hooks**
- Examples: `OnInit`, `OnDestroy`, `OnChanges`, etc.
- **Path:** `src/app/components/playground/life-cycle/`

#### 📌 Directive Component
- Demonstrates **Custom Directives** and **Built-in Directives**
- Examples: `*ngIf`, `*ngFor`, `*ngSwitch`
- **Path:** `src/app/components/playground/directive/`

#### 🎭 Pipe Component
- Explains **Angular Pipes** (filters)
- Data transformation in Templates
- **Path:** `src/app/components/playground/pipe/`

#### 🔗 RxJS Component
- Demonstrates **Reactive Programming** with RxJS
- Observables and Subscriptions usage
- **Path:** `src/app/components/playground/rxjs/`

#### 💾 Card Component
- Displays data in card format
- **Path:** `src/app/components/playground/card/`

#### 👁️ Preview-Counter Component
- Displays counter state
- **Path:** `src/app/components/playground/preview-counter/`

#### 📝 Todo-Form Component
- Form for adding new tasks
- **Path:** `src/app/components/todo-form/`

#### 📑 Todo-List-Item Component
- Displays a single task item
- **Path:** `src/app/components/todo-list/todo-list-item/`

---

### 3️⃣ **Services**

#### 📋 TodoListService
- **File:** `src/app/services/todo-list.service.ts`
- **Functions:**
  - `getTodoList()` - Fetch tasks from API
  - `onAddNewItem()` - Add new task with proper ID sync
  - `onDelete()` - Delete task safely
  - `search()` - Search tasks
  - `updateList()` - Update task list

#### ⏱️ CounterService
- **File:** `src/app/services/counter.service.ts`
- Manages counter state

#### 🔄 RxJSService
- **File:** `src/app/services/rxjs.service.ts`
- Demonstrates RxJS usage in services

---

### 4️⃣ **Custom Directives**

#### 🎨 Hilight Directive
- **File:** `src/app/directives/hilight.directive.ts`
- Custom directive for highlighting elements
- Example of **Custom Directives**

---

### 5️⃣ **Custom Pipes**

#### ✂️ Turncate Pipe
- **File:** `src/app/pipe/turncate.pipe.ts`
- Custom pipe for truncating long text
- Example of **Custom Pipes**

---

### 6️⃣ **Models**

#### 📦 TodoItem Interface
- **File:** `src/app/model/todo-item.ts`
- Defines task data structure:
  ```typescript
  interface TodoItem {
    id: string,
    task: string,
    description: string,
    createdAt: Date,
    isChacked: boolean
  }
  ```

---

### 7️⃣ **Modules**

#### 🔌 Module-One & Module-Two
- **Path:** `src/app/modules/`
- Examples of code organization using Modules
- Each module contains its own components and services

---

### 8️⃣ **Database**

#### 📊 db.json
- **File:** `db.json`
- Local database used with `json-server`
- Contains tasks list

---

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Run Application
```bash
npm start
```
Application runs on: `http://localhost:4200`

### Run Database Server
```bash
json-server --watch db.json
```
Server runs on: `http://localhost:3000`

### Run Tests
```bash
npm test
```

### Build for Production
```bash
npm run build
```

---

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| Angular | ^21.2.0 | Main framework |
| Bootstrap | ^5.3.8 | UI Design |
| Bootstrap Icons | ^1.13.1 | Icons |
| ngx-toastr | ^20.0.5 | Notifications |
| RxJS | ~7.8.0 | Reactive Programming |
| TypeScript | ~5.9.2 | Programming Language |

---

## 🎓 Concepts Covered

### ✅ Basic Concepts
- ✔️ Component Creation
- ✔️ Template Syntax
- ✔️ Data Binding (Two-way, Property, Event)
- ✔️ Directives (*ngIf, *ngFor, *ngSwitch)
- ✔️ Pipes (Built-in and Custom)

### ✅ Advanced Concepts
- ✔️ Services and Dependency Injection
- ✔️ Component Communication (@Input, @Output)
- ✔️ Lifecycle Hooks
- ✔️ Custom Directives
- ✔️ Custom Pipes
- ✔️ HTTP Client and API Requests
- ✔️ RxJS and Observables
- ✔️ Module Organization

### ✅ Architecture Concepts
- ✔️ SOLID Principles (in `DI/solid.ts`)
- ✔️ Service-Based Architecture
- ✔️ Component Hierarchy
- ✔️ Reactive Programming

---

## 🐛 Bug Fixes & Solutions

### Issue: 404 Error When Deleting Task ❌➡️✅
**Problem:** Task ID from frontend doesn't match database ID
**Solution:** Update ID from server response after adding task
- **Location:** `src/app/services/todo-list.service.ts` - `onAddNewItem()`
- Temporary ID is replaced with actual database ID
- Now delete operations use correct ID from database

### Issue: Mixed Success/Error Messages ❌➡️✅
**Problem:** `complete()` callback was always called, even on errors
**Solution:** Use `next()` instead of `complete()` in subscribe
- **Location:** `src/app/services/todo-list.service.ts` - `onDelete()`
- Success message only shows when delete actually succeeds

---

## 📁 Project Structure

```
first-angular-project/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/
│   │   │   ├── footer/
│   │   │   ├── playground/
│   │   │   │   ├── counter/
│   │   │   │   ├── first/
│   │   │   │   ├── second/
│   │   │   │   ├── third/
│   │   │   │   ├── card/
│   │   │   │   ├── input-output/
│   │   │   │   ├── life-cycle/
│   │   │   │   ├── directive/
│   │   │   │   ├── pipe/
│   │   │   │   ├── rxjs/
│   │   │   │   └── preview-counter/
│   │   │   ├── todo-list/
│   │   │   │   └── todo-list-item/
│   │   │   └── todo-form/
│   │   ├── services/
│   │   │   ├── counter.service.ts
│   │   │   ├── rxjs.service.ts
│   │   │   └── todo-list.service.ts
│   │   ├── directives/
│   │   │   └── hilight.directive.ts
│   │   ├── pipe/
│   │   │   └── turncate.pipe.ts
│   │   ├── model/
│   │   │   └── todo-item.ts
│   │   └── modules/
│   │       ├── module-one/
│   │       └── module-two/
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── DI/
│   └── solid.ts (SOLID Principles)
├── angular.json
├── package.json
├── db.json
└── README.md (this file)
```

---

## 👨‍💻 Project Author

**Educational Project** from Angular ITI Program

---

## 📝 Notes

- This project covers **all basic and advanced Angular concepts**
- Can be used as a reference for learning or as a starting point for larger projects
- Each component includes explanatory comments for better understanding

---

## 🎯 Learning Objectives

After understanding this project completely, you will be able to:

1. ✅ Build complex Angular components
2. ✅ Handle data and state efficiently
3. ✅ Use Services and Dependency Injection
4. ✅ Work with APIs using HttpClient
5. ✅ Understand Reactive Programming with RxJS
6. ✅ Organize large code using Modules
7. ✅ Create custom Directives and Pipes
8. ✅ Build professional Angular applications

---

**Last Updated:** April 2026 ✨


```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
