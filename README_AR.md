# مشروع Angular - أول مشروع تعليمي 🚀

مشروع شامل لتعليم مبادئ Angular الأساسية والمتقدمة

---

## 📋 محتويات المشروع

### 1️⃣ **المكونات الرئيسية (Components)**

#### 🏠 Header Component
- المكون العلوي للتطبيق
- **المسار:** `src/app/components/header/`
- يحتوي على التنقل الأساسي

#### 📍 Footer Component
- المكون السفلي للتطبيق
- **المسار:** `src/app/components/footer/`

#### 🎮 Playground Component
- منطقة تجريبية لاختبار مفاهيم Angular المختلفة
- **المسار:** `src/app/components/playground/`
- يحتوي على مكونات فرعية متعددة

#### ✅ Todo List Component
- نظام إدارة المهام الرئيسي
- **المسار:** `src/app/components/todo-list/`
- إضافة وحذف وتعديل المهام

---

### 2️⃣ **مكونات Playground الفرعية**

#### 📊 Counter Component
- عداد بسيط يزيد/ينقص
- يوضح مبادئ State Management الأساسية
- **المسار:** `src/app/components/playground/counter/`

#### 🔤 First & Second & Third Components
- مكونات توضيحية بسيطة
- تشرح أساسيات Data Binding و Template Syntax
- **المسار:** `src/app/components/playground/first/` إلخ

#### 🎯 Input-Output Component
- توضيح الـ **Parent-Child Communication**
- استخدام `@Input()` و `@Output()`
- **المسار:** `src/app/components/playground/input-output/`

#### 🔄 Life-Cycle Component
- شرح **Angular Component Lifecycle Hooks**
- مثل: `OnInit`, `OnDestroy`, `OnChanges`, إلخ
- **المسار:** `src/app/components/playground/life-cycle/`

#### 📌 Directive Component
- توضيح **Custom Directives** و **Built-in Directives**
- مثل: `*ngIf`, `*ngFor`, `*ngSwitch`
- **المسار:** `src/app/components/playground/directive/`

#### 🎭 Pipe Component
- شرح **Angular Pipes** (المرشحات)
- تحويل البيانات في الـ Template
- **المسار:** `src/app/components/playground/pipe/`

#### 🔗 RxJS Component
- توضيح **Reactive Programming** مع RxJS
- استخدام Observables و Subscriptions
- **المسار:** `src/app/components/playground/rxjs/`

#### 💾 Card Component
- عرض البيانات في شكل بطاقة
- **المسار:** `src/app/components/playground/card/`

#### 👁️ Preview-Counter Component
- عرض حالة العداد
- **المسار:** `src/app/components/playground/preview-counter/`

#### 📝 Todo-Form Component
- نموذج لإضافة مهام جديدة
- **المسار:** `src/app/components/todo-form/`

#### 📑 Todo-List-Item Component
- عرض عنصر واحد من قائمة المهام
- **المسار:** `src/app/components/todo-list/todo-list-item/`

---

### 3️⃣ **الخدمات (Services)**

#### 📋 TodoListService
- **الملف:** `src/app/services/todo-list.service.ts`
- **الوظائف:**
  - `getTodoList()` - جلب المهام من الـ API
  - `onAddNewItem()` - إضافة مهمة جديدة
  - `onDelete()` - حذف مهمة
  - `search()` - البحث عن المهام
  - `updateList()` - تحديث قائمة المهام

#### ⏱️ CounterService
- **الملف:** `src/app/services/counter.service.ts`
- إدارة حالة العداد

#### 🔄 RxJSService
- **الملف:** `src/app/services/rxjs.service.ts`
- توضيح استخدام RxJS في الخدمات

---

### 4️⃣ **المعالجات المخصصة (Directives)**

#### 🎨 Hilight Directive
- **الملف:** `src/app/directives/hilight.directive.ts`
- معالج مخصص لتغيير اللون (Highlight)
- مثال على **Custom Directives**

---

### 5️⃣ **الأنابيب المخصصة (Pipes)**

#### ✂️ Turncate Pipe
- **الملف:** `src/app/pipe/turncate.pipe.ts`
- أنبوب مخصص لقطع النصوص الطويلة
- مثال على **Custom Pipes**

---

### 6️⃣ **نماذج إعادة الاستخدام (Models)**

#### 📦 TodoItem Interface
- **الملف:** `src/app/model/todo-item.ts`
- تعريف بيانات المهمة:
  ```typescript
  {
    id: string,
    task: string,
    description: string,
    createdAt: Date,
    isChacked: boolean
  }
  ```

---

### 7️⃣ **الوحدات (Modules)**

#### 🔌 Module-One & Module-Two
- **المسار:** `src/app/modules/`
- أمثلة على تنظيم الكود باستخدام الـ Modules
- كل وحدة تحتوي على مكونات وخدمات خاصة بها

---

### 8️⃣ **قاعدة البيانات (Database)**

#### 📊 db.json
- **ملف:** `db.json`
- قاعدة بيانات محلية تستخدم مع `json-server`
- تحتوي على قائمة المهام

---

## 🚀 كيفية البدء

### التثبيت
```bash
npm install
```

### تشغيل التطبيق
```bash
npm start
```
التطبيق سيعمل على: `http://localhost:4200`

### تشغيل خادم قاعدة البيانات
```bash
json-server --watch db.json
```
الخادم سيعمل على: `http://localhost:3000`

### تشغيل الاختبارات
```bash
npm test
```

### البناء للإنتاج
```bash
npm run build
```

---

## 📦 المكتبات المستخدمة

| المكتبة | الإصدار | الغرض |
|--------|--------|-------|
| Angular | ^21.2.0 | إطار العمل الرئيسي |
| Bootstrap | ^5.3.8 | تصميم الـ UI |
| Bootstrap Icons | ^1.13.1 | الأيقونات |
| ngx-toastr | ^20.0.5 | إشعارات التنبيهات |
| RxJS | ~7.8.0 | البرمجة الفعّالة |
| TypeScript | ~5.9.2 | لغة البرمجة |

---

## 🎓 المفاهيم المغطاة

### ✅ مفاهيم أساسية
- ✔️ Component Creation
- ✔️ Template Syntax
- ✔️ Data Binding (Two-way, Property, Event)
- ✔️ Directives (*ngIf, *ngFor, *ngSwitch)
- ✔️ Pipes (Built-in و Custom)

### ✅ مفاهيم متقدمة
- ✔️ Services و Dependency Injection
- ✔️ Component Communication (@Input, @Output)
- ✔️ Lifecycle Hooks
- ✔️ Custom Directives
- ✔️ Custom Pipes
- ✔️ HTTP Client و API Requests
- ✔️ RxJS و Observables
- ✔️ Module Organization

### ✅ مفاهيم معمارية
- ✔️ SOLID Principles (موجود في `DI/solid.ts`)
- ✔️ Service-Based Architecture
- ✔️ Component Hierarchy
- ✔️ Reactive Programming

---

## 🐛 حل مشاكل شائعة

### مشكلة: 404 عند حذف مهمة
**الحل:** يتم تحديث ID من الـ server بعد إضافة المهمة
- **المكان:** `src/app/services/todo-list.service.ts` - `onAddNewItem()`
- يتم استبدال الـ ID المؤقت بـ ID الفعلي من قاعدة البيانات

### مشكلة: رسائل خطأ مختلطة
**الحل:** استخدام `next()` بدلاً من `complete()` في الـ subscribe
- **المكان:** `src/app/services/todo-list.service.ts` - `onDelete()`

---

## 📁 هيكل المشروع

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
│   │   │   ├── todo-form/
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
│   │   ├── modules/
│   │   │   ├── module-one/
│   │   │   └── module-two/
│   │   └── app.component.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── DI/
│   └── solid.ts (مبادئ SOLID)
├── angular.json
├── package.json
├── db.json
└── README_AR.md (هذا الملف)
```

---

## 👨‍💻 كاتب المشروع

**مشروع تعليمي** من برنامج Angular في ITI

---

## 📝 ملاحظات

- هذا المشروع يغطي **جميع المفاهيم الأساسية والمتقدمة** في Angular
- يمكن استخدامه كمرجع للتعلم أو كنقطة انطلاق لمشاريع أكبر
- كل مكون يحتوي على تعليقات توضيحية لفهم أفضل

---

## 🎯 الأهداف التعليمية

بعد فهم هذا المشروع بالكامل، ستكون قادراً على:

1. ✅ بناء مكونات Angular معقدة
2. ✅ التعامل مع البيانات والحالة بفعالية
3. ✅ استخدام الخدمات و Dependency Injection
4. ✅ التعامل مع APIs باستخدام HttpClient
5. ✅ فهم Reactive Programming مع RxJS
6. ✅ تنظيم الكود الكبير باستخدام Modules
7. ✅ إنشاء Directives و Pipes مخصصة
8. ✅ بناء تطبيقات Angular احترافية

---

**آخر تحديث:** أبريل 2026 ✨
