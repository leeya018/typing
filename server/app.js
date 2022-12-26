var execProcess = require("./exec_process.js");
execProcess.result("sh temp.sh", function (err, response) {
  if (!err) {
    console.log(response);
    getArr(response))
  } else {
    console.log(err);
  }
});


const getArr  = (str)=>{
  let splited = str.split('\n')

let op = splited.map(inp=>{
  let alt = "" 
  inp = inp.replace(/^\W+/,(match)=>{alt=match; return ''})
  
  let commitHash = ''
  inp = inp.replace(/\s*(\w+)\s*/,(match,g1)=>{commitHash = g1;return ''})
  let branches = ''
  inp = inp.replace(/^\s*(\(.*?\))/,(match,g1)=>{branches = g1; return ''})
  branches = branches ? branches.replace(/^\s*\(HEAD\s*->\s*|[)(]/g,'').split(/\s*,\s*/) : []
  let commit = inp.trim()
  return {alt,commitHash,branches,commit}
})

console.log(op)
}
