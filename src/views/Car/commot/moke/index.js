const Mock = require('mockjs');

const data = Mock.mock({
  code: 200,
  errMsg: '',
  'data|50': [
    {
      'id|+1': 1,
      goodsName: '@cname(5,6)',
      goodsDes: '@title(10,20)',
      'goodsPrice|100-900': 100,
      goodsPic: "@image('200x100', '#50B347', '#FFF', '1905')",
      tel: /^1(3|5|7|8|9)\d{9}$/,
      address: '@county(true)',
      evaluate: '@cparagraph(2)'
    }
  ]
});

Mock.mock(/\/goods\/getgoods/, 'get', options => {
  console.log(options);
  return data;
});

Mock.mock(/\/goods\/goodsDetails/, 'post', options => {
  return data;
});
