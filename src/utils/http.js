const pre = 'http://www.pudge.wang:3002'
const http = {
  get(url,params) {
    let str = '';
    if(params) {
      let arr = Object.entries(params);
      arr.forEach(item => {
        str += item.join('=') + '&'
      })
      str = '?'+str.slice(0,-1)
    }
    return fetch(pre+url+str).then(res => res.json());
  },
  post(url,params) {
    let formdata = new FormData();
    if(params) {
      for(let i in params) {
        formdata.append(i,params[i]);
      }
    }
    return fetch(pre+url,{
      method:'POST',
      body:formdata
    }).then(res => res.json());
  }
}

export {http};