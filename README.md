# 主任，您知道嗎！！

以班級為單位的學生意見、故事與提案網站。此版本可直接部署到 GitHub Pages，不需安裝套件或建置工具。

## 目前功能

- 日系自然圖鑑風昆蟲主視覺，以墨線、鉛筆排線、和紙與柔和粉彩呈現
- 十個班級及五種主題篩選
- 卡片式留言、認同按鈕、分批載入
- 投稿表單、字數提示、匿名或暱稱顯示
- 中文／英文介面切換
- 手機、平板、電腦響應式版面
- 投稿與認同狀態暫存於瀏覽器 `localStorage`

## GitHub Pages 部署

1. 在 GitHub 建立新的 public repository。
2. 將本資料夾內的所有檔案上傳到 repository 根目錄。
3. 開啟 `Settings → Pages`。
4. 在 `Build and deployment` 選擇 `Deploy from a branch`。
5. Branch 選 `main`、資料夾選 `/ (root)`，按下 `Save`。
6. 約一至三分鐘後，GitHub 會顯示網站網址。

## 上線前請修改

- `index.html` 頁尾的 `example@university.edu` 改為管理信箱。
- `app.js` 的 `seedVoices` 可替換成正式示範留言。
- 如需讓所有人共享投稿資料，請串接 Supabase 或 Firebase；目前的投稿只存在投稿者自己的瀏覽器。

## 正式資料庫建議

建立 `voices` 資料表，欄位可使用：`id`、`class_name`、`topic`、`title`、`content`、`author`、`is_anonymous`、`status`、`likes`、`created_at`。公開頁面只讀取 `status = approved` 的資料，並建立管理者審核流程，避免個資與不當內容直接公開。

## 檔案結構

```text
├── index.html
├── styles.css
├── app.js
├── favicon.svg
├── hero-japanese-insect-sketch.webp
├── hero-japanese-insect-sketch.png
└── README.md
```
