This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## setup

### node

```sh
nvm install v22.14.0
nvm use v22.14.0
```

もしくは下記を`~/.zshrc`に追加。<br>
ディレクトリ移動を行うと`.nvmrc`を読み込んでnodeのバージョンを自動で切り替え可能になる。

```sh
enter_directory() {
	if [[ $PWD == $PREV_PWD ]]; then
		return
	fi
	PREV_PWD=$PWD
	if [[ -f ".nvmrc" ]]; then
		current_node_ver=`cat .nvmrc`
		if ! nvm use $current_node_ver 2>/dev/null; then
			echo "Installing node version $current_node_ver..."
			nvm install $current_node_ver
			nvm use $current_node_ver
		fi
	fi
}
```

### husky

`git push`時に[husky](https://typicode.github.io/husky/)が動作します。<br>
`@/.husky/pre-push`が実行され、lint, type-checkを行い、エラーがなければpushされます。<br>
エラー解消後再度`commit`と`push`をお願いします。

### must install vscode plugins

- [Prettier - Code formatter](https://marketplace.cursorapi.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.cursorapi.com/items?itemName=dbaeumer.vscode-eslint)
- [EditorConfig for VS Code](https://marketplace.cursorapi.com/items?itemName=EditorConfig.EditorConfig)
- [Tailwind CSS IntelliSense](https://marketplace.cursorapi.com/items?itemName=bradlc.vscode-tailwindcss)
- [Stylelint](https://marketplace.cursorapi.com/items?itemName=stylelint.vscode-stylelint)

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## ディレクトリ構造
````
.
├── .husky - husky設定
├── .vscode - vscode設定
├── app
│   ├── api - nextjs server api route
│   ├── [path] - ページファイル
│   ├── layout.tsx 全ページ共通layout
│   └── page.tsx TOPページ
├── public - 画像ファイル管理
├── src
│   ├── components
│   │   ├── common - 共通コンポーネント
│   │   ├── forms - form用コンポーネント
│   │   ├── features - 機能単位コンポーネント
│   │   └── pages - ページ固有コンポーネント
│   │       └── [path] - ページ毎のコンポーネント
│   │           └── server - サーバー側コンポーネント(rsc)
│   │           └── client - クライアント側コンポーネント(rcc) rscから呼び出される hookはclientから呼び出す
│   │               └── [コンポーネント名].tsx
│   │                   └── parts - コンポーネントの部品　複数ある場合は同一ファイルで管理
│   ├── constants - 変数管理
│   ├── hooks - カスタムフック管理
│   │   ├── api - api用フック
│   │   └── pages
│   │       └── [path].ts - ページ毎のフック
│   ├── libs - パッケージ管理
│   ├── mocks - APIのモックデータ管理
│   ├── provider
│   ├── stores - ストア管理
│   ├── types - 型定義
│   │   ├── api - APIのレスポンス、リクエスト、クエリなどの型を定義
│   │   ├── components - コンポーネントのPropsの型を定義
│   │   │   ├── common - 共通コンポーネント
│   │   │   ├── forms - form用コンポーネント
│   │   │   ├── features - 機能単位コンポーネント
│   │   │   └── pages - ページ毎のpropsの型を定義
│   │   ├── hooks - カスタムフックの型を定義
│   │   │   └── pages - ページ毎のフックの型を定義
│   │   └── stores - ストアの型を定義
│   └── utils - 共通関数管理
│       └── api - api用関数
├── styles - 共通css,scss
├── .env.sample
└── .nvmrc - nodeバージョン管理
````

## 命名規則

### ディレクトリ名
- すべて小文字で記述
- 複数の単語はハイフン（`-`）で区切る
- 例: `user-profile`, `data-management`

### コンポーネントファイル
- パスカルケース（PascalCase）で記述
- 役割を明確にする接尾辞を付ける
  - サーバーコンポーネント: `ComponentNamePageServer.tsx`
  - クライアントコンポーネント(root）: `ComponentNamePageClient.tsx`
    - クライアントコンポーネント（unit）: `ComponentNameClient.tsx`
      - クライアントコンポーネント（parts）: `ComponentNameClientParts.tsx`
- 例: `UserProfilePageServer.tsx`, `UserProfilePageClient.tsx`, `UserProfileClient.tsx`, `UserProfileClientParts.tsx`

### フックファイル
- キャメルケース（camelCase）で記述
- `use`で始める
- 例: `useUserProfile.ts`, `useDataFetching.ts`

### 型定義ファイル
- キャメルケース（camelCase）で記述
- 型の種類を明確にする接尾辞を付ける
  - インターフェース: `ComponentNameProps.ts`
  - 型エイリアス: `ComponentNameType.ts`
- 例: `UserProfileProps.ts`, `UserProfileType.ts`

### ユーティリティファイル
- キャメルケース（camelCase）で記述
- 機能を明確にする名前を付ける
- 例: `formatDate.ts`, `validateEmail.ts`

### スタイルファイル
- コンポーネント名に合わせてパスカルケース（PascalCase）で記述
- `.module.scss`または`.module.css`の拡張子を使用
- 例: `UserProfile.module.scss`



## 状態管理
https://zustand.docs.pmnd.rs/getting-started/introduction