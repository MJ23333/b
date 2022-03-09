// console.save(array,'filename') 
// 从console保存json
(function (console) {
  console.save = function (data, filename) {
    if (!data) {
      console.error("Console.save: No data");

      return;
    }

    if (!filename) filename = "console.json";

    if (typeof data === "object") {
      data = JSON.stringify(data, undefined, 4);
    }

    var blob = new Blob([data], { type: "text/json" }),
      e = document.createEvent("MouseEvents"),
      a = document.createElement("a");

    a.download = filename;

    a.href = window.URL.createObjectURL(blob);

    a.dataset.downloadurl = ["text/json", a.download, a.href].join(":");

    e.initMouseEvent(
      "click",
      true,
      false,
      window,
      0,
      0,
      0,
      0,
      0,
      false,
      false,
      false,
      false,
      0,
      null
    );

    a.dispatchEvent(e);
  };
})(console);

//从歌单网页提取相关信息
(function () {
  $$(".soil").map((x) => (x.innerText = "")); // 干死所有干扰项
  let result = $$(".m-table tr")
    .map((x) =>
      $$("td", x).map((x) => [
        x.textContent,
        x.querySelector("a") ? x.querySelector("a").href : null,
      ])
    )
    .map((x) =>
      x.length > 0 ? [x[3][0], x[1][0].replace(/-.*|MV$/, ""), x[1][1]] : null
    );//依次是歌手-歌曲名-链接
  console.save(result, "songs.json");
})();
