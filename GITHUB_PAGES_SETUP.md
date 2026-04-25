# 🚀 GitHub Pages Deployment Guide

## ✅ تم إنشاء Workflow تلقائي

تم إنشاء GitHub Actions Workflow الذي سيقوم تلقائياً بـ:
1. ✅ بناء (Build) المشروع عند push
2. ✅ نشر (Deploy) على GitHub Pages

---

## 📝 الخطوات المتبقية

### 1️⃣ تفعيل GitHub Actions Workflows
في repository على GitHub:
- اذهب إلى **Actions** 
- قد تجد انتظار الموافقة على استخدام GitHub Actions
- وافق على تشغيل الـ Workflows

### 2️⃣ تكوين GitHub Pages Settings

اتبع الخطوات:
1. اذهب إلى **Settings** في repository
2. اختر **Pages** من الـ sidebar الأيسر
3. تحت **Build and deployment**:
   - **Source**: اختر `Deploy from a branch`
   - **Branch**: اختر `gh-pages` و `/root` (الـ workflow سينشئها تلقائياً)
4. اضغط **Save**

### 3️⃣ Push التغييرات الجديدة

```bash
git add .
git commit -m "Add GitHub Pages workflow"
git push origin main
```

### 4️⃣ تابع الـ Workflow

1. اذهب إلى **Actions** في GitHub
2. ستشوف الـ workflow يعمل
3. انتظر حتى ينتهي (عادة 2-5 دقائق)
4. بعد النجاح، ستجد رسالة في **Deployments** أن التطبيق نُشر

### 5️⃣ فتح التطبيق

رابط التطبيق سيكون:
```
https://YOUR_GITHUB_USERNAME.github.io/first-angular-project/
```

---

## 📊 Workflow يعمل على:

✅ **على كل push لـ main branch**
- بناء المشروع
- نشره على GitHub Pages

✅ **على كل Pull Request**
- بناء المشروع (للتحقق من عدم وجود errors)
- لا ينشر على GitHub Pages

---

## ⚙️ تخصيص الـ Workflow

إذا كنت تستخدم **custom domain**:

1. عدّل `.github/workflows/deploy.yml`
2. استبدل السطر:
   ```yaml
   cname: # أضف اسم النطاق هنا إذا كان لديك
   ```
   بـ:
   ```yaml
   cname: mysite.com  # ضع اسم نطاقك
   ```
3. Push التغييرات

---

## 🐛 استكشاف الأخطاء

### ❌ الـ workflow فشل
- اذهب إلى **Actions** في GitHub
- اضغط على الـ workflow الذي فشل
- شوف الـ Error في الـ logs

### ❌ التطبيق لم ينشر
- تأكد من تفعيل GitHub Pages في Settings
- تأكد أن branch هو `gh-pages`

### ❌ البناء يفشل
- تأكد أن `npm run build` تعمل محلياً
- شوف الـ error في logs

---

## 📝 ملاحظات مهمة

1. **الـ workflow سينشئ branch جديد** يسمى `gh-pages` - لا تقلق، هذا طبيعي
2. **لا تعدّل `gh-pages` branch** - الـ workflow يديره تلقائياً
3. **كل push لـ main** ينشر تلقائياً - لا تحتاج تعمل أي شيء يدوي
4. **ركز على main branch** فقط عند التطوير

---

**تهانينا! 🎉 تطبيقك سينشر تلقائياً الآن!**
