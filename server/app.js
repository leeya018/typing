// this code is helping your get all the commits you have done on that same day .
// it orgenize the info per project that you are working on
var execProcess = require("./exec_process.js");

const getData = (command) => {
  return new Promise((resolve, reject) => {
    execProcess.result(command, function (err, response) {
      if (!err) {
        resolve(response);
      } else {
        console.log(err);
        reject(err);
      }
    });
  });
};

const getLogs = () => {
  return getData("sh logs.sh").then((res) => {
    const arr = getArr(res);
    const commits = getCommitArr(arr);
    return commits;
  });
};

const getUrl = () => {
  return getData("sh url.sh").then((res) => {
    const name = getProjectName(res);
    return name;
  });
};

const main = () => {
  Promise.all([getLogs(), getUrl()])
    .then((values) => {
      return values;
    })
    .then((values) => {
      sendToFile(values);
    });
};

const sendToFile = (values) => {
  var fs = require("fs");
  var logger = fs.createWriteStream("Output.txt", {});
  const [logs, projectName] = values;

  logger.write(`Project: ${projectName}  ===>`); // append string to your file
  for (const log of logs) {
    logger.write(`\n - ${log} => done`); // append string to your file
  }
};
main();

const getProjectName = (url) => {
  const list = url.split("/");
  const last = list[list.length - 1];
  return last.split(".")[0];
};

const getCommitArr = (arr) => {
  const tmpArr = arr.map((c) => c.commit);
  return tmpArr.slice(1, tmpArr.length - 1);
};

const getArr = (str) => {
  let splited = str.split("\n");

  let op = splited.map((inp) => {
    let alt = "";
    inp = inp.replace(/^\W+/, (match) => {
      alt = match;
      return "";
    });

    let commitHash = "";
    inp = inp.replace(/\s*(\w+)\s*/, (match, g1) => {
      commitHash = g1;
      return "";
    });
    let branches = "";
    inp = inp.replace(/^\s*(\(.*?\))/, (match, g1) => {
      branches = g1;
      return "";
    });
    branches = branches
      ? branches.replace(/^\s*\(HEAD\s*->\s*|[)(]/g, "").split(/\s*,\s*/)
      : [];
    let commit = inp.trim();
    return { alt, commitHash, branches, commit };
  });
  return op;
};
