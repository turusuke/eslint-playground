/**
 * 正規表現をシンプルな形に書き換える
 * better-regex
 * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/better-regex.md
 */

/* eslint-disable unicorn/better-regex */
const regex1 = /[0-9]/;
const regex2 = /[^0-9]/;
const regex3 = /[a-zA-Z0-9_]/;
const regex4 = /[a-z0-9_]/i;
const regex5 = /[^a-zA-Z0-9_]/;
const regex6 = /[^a-z0-9_]/i;
const regex7 = /[0-9]\.[a-zA-Z0-9_]\-[^0-9]/i;

/**
 * catch句の引数名を error に強制する
 * catch-error-name
 * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/catch-error-name.md
 */

/* eslint-disable unicorn/catch-error-name */
try {
  console.log("Hello");
} catch (_) {
  console.log(_);
}

new Promise.catch((foo) => {
  console.log(foo);
});

/**
 * Errorのメッセージ追加必須
 * error-message
 * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/error-message.md
 */

// eslint-disable-next-line unicorn/error-message
throw new Error("");

/**
 * TODOコメントに設定した期日が過ぎたり、パッケージのバージョンが古くなったらエラーにできる
 * expiring-todo-comments
 * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/expiring-todo-comments.md
 */
// TODO: [2021-12-01]: 去年の私が直してくれる
// TODO [+React]: いつか React を追加した時にこの処理を直すよ
// TODO [-Vue]: Vue が消えた時にこの対応をしてください

/**
 * lengthが0かどうかの判定を統一させる
 * explicit-length-check
 * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/explicit-length-check.md
 */
/* eslint-disable unicorn/explicit-length-check */
const isEmpty1 = !foo.length;
const isEmpty2 = foo.length == 0;
const isEmpty3 = foo.length < 1;
const isEmpty4 = 0 === foo.length;
const isEmpty5 = 0 == foo.length;
const isEmpty6 = 1 > foo.length;
const isEmpty7 = !(foo.length > 0);

/**
 * eslint-disable(全ルール無効化)を禁止する
 * no-abusive-eslint-disable
 * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-abusive-eslint-disable.md
 */
console.log(message);

/**
 * forEach を for-of に直す
 * no-array-for-each
 * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-for-each.md
 */
/* eslint-disable unicorn/no-array-for-each */
const array = [1, 2, 3, 4, 5];
array.forEach((element) => {
  console.log(element);
});

/**
 * 配列のメソッドの第2引数の利用禁止
 * no-array-method-this-argument
 * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-method-this-argument.md
 */
/* eslint-disable unicorn/no-array-method-this-argument */
const arrayTest = [1, 2, 3];
const foo = arrayTest.map((element) => {
  return this;
}, arrayTest);

/**
 * removeEventListener でインライン関数を渡すとコールバック関数が消えないことがあるので、関数参照で渡しましょうのルール
 * no-invalid-remove-event-listener
 * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-remove-event-listener.md
 */
window.removeEventListener("click", fn.bind(window));
window.removeEventListener("click", () => {});
window.removeEventListener("click", function () {});

window.removeEventListener("click", listener);
window.removeEventListener("click", getListener());

/**
 * for を禁止する
 * no-for-loop
 * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-for-loop.md
 */
/* eslint-disable unicorn/no-for-loop */
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(index, element);
}

/**
 * if句の結合
 * no-lonely-if
 * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-lonely-if.md
 */
/* eslint-disable unicorn/no-lonely-if */
if (foo) {
  if (bar) {
    //
  }
}

/**
 * デフォルトパラメータの禁止
 * no-object-as-default-parameter
 * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-object-as-default-parameter.md
 */
const abc_1 = (foo = { a: false }) => {};
function foo_1({ a } = { a: false }) {}
const abc_2 = (foo = { a: false, b: 123 }) => {};

const abc_3 = (foo = {}) => {};
function foo_2(options) {
  const { a } = { a: false, ...options };
}
const abc = (foo = false) => {};

/**
 * new Date().getTime() の禁止
 * prefer-date-now
 * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-date-now.md
 */
/* eslint-disable unicorn/prefer-date-now */
const time1 = new Date().getTime();
const time2 = new Date().valueOf();
const time3 = +new Date();
const time4 = Number(new Date());
const time5 = new Date() * 2;

function preferDefaultParameters1(foo) {
  foo = foo || "bar";
}
function preferDefaultParameters2(foo) {
  const bar = foo || "bar";
}

/**
 * 同じ値に対しての if-else を switch に書き換える
 * prefer-date-now
 * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-date-now.md
 */
/* eslint-disable unicorn/prefer-switch */
if (foo === 1) {
  // 1
} else if (foo === 2) {
  // 2
} else if (foo === 3) {
  // 3
} else {
  // default
}

/**
 * テンプレートリテラルで書いた文字列のインデントをいい感じに調整してくれる
 * template-indent.
 * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/template-indent.md
 */
/* eslint-disable unicorn/template-indent */
function templateIndent() {
  const sqlQuery = sql`
select *
from students
where first_name = ${x}
and last_name = ${y}
	`;
}
