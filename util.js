const basicUrl =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_BASIC_URL
    : process.env.NEXT_PUBLIC_BASIC_REMOTE_URL;

const methods = {
  DELETE: "delete",
  GET: "get",
  PUT: "put",
  POST: "post",
};
export { basicUrl, methods };

// fast 10 figers code to get the text
// let html_arr = document.getElementById("row1").children
// let str_arr = Array.from(html_arr).map(el=>el.innerText)
// str_arr.join(" ")
