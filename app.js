console.log("=======================");
console.log("現在持っているタスク一覧");
console.log("=======================");
const housework = ['掃除','買い物','散歩'];
housework.forEach((task, index) => {
    console.log(`${index} : ${task}`);
});
const taskadd = prompt("タスクを入力してください");
alert("新しいタスクが入力されました");
console.log("=======================");
console.log("現在持っているタスク一覧");
console.log("=======================");
housework.push(taskadd)
housework.forEach((task, index) => {
    console.log(`${index} : ${task}`);
});
prompt('「確認　追加　削除　終了」の4ついづれかを入力してください');