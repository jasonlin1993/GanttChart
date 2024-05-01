# GanttChart - 線上甘特圖工具
# 目錄
1. [專案展示](#專案展示)
2. [專案摘要](#專案摘要)
3. [開發介紹](#開發介紹)
   - [技術架構及摘要](#技術架構及摘要)
      - 前端開發
      - 後端開發
      - 開發工具
   - [目錄架構](#目錄架構)
   - [開發流程](#開發流程)
   - [程式設計摘要](#程式設計摘要)
4. [附錄](#附錄)
   - [技術介紹](#技術介紹)
   - [專案介紹](#專案介紹)
     - [新增、刪除任務](#新增刪除任務)
     - [任務顏色選擇](#任務顏色選擇)
     - [檔案輸出](#檔案輸出)
     - [歷史紀錄](#歷史紀錄)
     
## 專案展示
- 專案網址: https://gantt-chart-phi.vercel.app/
- 測試帳號: test@test.com   
- 測試密碼: 123456

## 專案摘要
「GanttChart」讓你能夠直觀地在線上創建和分享你的工程甘特圖。這個工具的設計旨在簡化專案管理流程，無論是專案經理還是團隊成員，都能迅速獲取專案進度的視覺化呈現。
 ![](https://raw.githubusercontent.com/jasonlin1993/GanttChart/main/public/images/ReadMeMainPage.png)

### 功能亮點
- 顏色自定義：為不同的任務選擇個性化的顏色標記
- 即時編輯：簡單的新增和刪除任務，方便調整專案任務
- PDF導出：一鍵將你的甘特圖轉換為PDF格式
- 歷史紀錄頁面：使用 Firebase Firestore 資料庫，儲存不同工程專案
- 會員登入系統：使用 Firebase Authentication 作為會員登入登出功能

## 開發介紹
### 技術架構及摘要
![](https://raw.githubusercontent.com/jasonlin1993/GanttChart/main/public/images/developmentArchitecture.png)

- 前端開發: 使用 React、Redux toolkit、styled-components，並實踐 RWD、reusable React componet
- 後端開發: 使用 Firebase 服務開發資料庫、會員系統等
- 開發工具: 使用 Git/GitHub 做版本控管
### 目錄架構
以 create-next-app 建立專案目錄基礎分立 src、public，其中 src 之中分立 components、hooks、lib、pages、redux、styles 等子目錄
- components: 包含所有 UI 組件，如表單、按鈕及其他元件
- hooks: 自定義 React hook，用於實現各種功能如會員認證或資料庫管理
- lib: 主要為 Firebase 的配置和初始化
- redux: 包含 Redux 動作，用於狀態管理
- styles: 儲存 Styled Components 的元件樣式，按組件分類

### 開發流程
### 程式設計摘要
## 附錄
### 技術介紹
#### 前端
#### 後端
#### 開發工具
### 專案介紹
- #### 新增刪除任務
- #### 任務顏色選擇
- #### 檔案輸出
- #### 歷史紀錄
