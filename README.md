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
├── app - nextjs ページファイル
│   ├── api - nextjs server api route
│   ├── samples - サンプルページ ※削除してください
│   │   ├── page.tsx - ページルートファイル queryなど取得する containerを呼び出す
│   │   ├── [name]-container.tsx - ロジックを管理するファイル presenterを呼び出す
│   │   ├── [name]-presenter.tsx - デザインを管理するファイル ロジックはcontainerで管理
│   │   ├── layout.tsx - ページ個別レイアウト
│   │   └── [name].module.scss
│   ├── layout.tsx 全ページ
│   ├── page.tsx TOPページ
│   ├── index-container.tsx
│   ├── index-presenter.tsx
│   └── public 画像ファイル管理
├── src
│   ├── components
│   │   ├── common - 共通コンポーネント
│   │   ├── forms - form用コンポーネント
│   │   ├── features - 機能単位コンポーネント
│   │   └── pages - ページ固有コンポーネント
│   ├── constants - 変数管理
│   ├── hooks - カスタムフック管理
│   ├── libs - パッケージ管理
│   ├── mocks - APIのモックデータ管理
│   ├── provider
│   ├── types - 型定義
│   │   ├── api - APIのレスポンス、リクエスト、クエリなどの型を定義
│   │   ├── components - コンポーネントのPropsの型を定義
│   │   └── pages - ページ毎のpropsの型を定義
│   └── utils
├── style - 共通css,scss
├── .env.sample
└── .nvmrc - nodeバージョン管理
````

### container/presenter
https://zenn.dev/buyselltech/articles/9460c75b7cd8d1

#### container
データ取得やロジック、状態を管理。<br>
取得したデータなどをpresenterに渡す。<br>
#### presenter
データを受け取り、表示する。
