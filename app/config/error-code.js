'use strict'
module.exports = {
  USER_HAS_EXITS: {
    errorCode: 10000,
    errorMsg: '该用户已经存在'
  },
  USER_NOT_EXITS: {
    errorCode: 10001,
    errorMsg: '该用户不存在'
  },
  USER_QUERY_FAILED: {
    errorCode: 10002,
    errorMsg: '用户查询失败'
  },
  USER_UPDATE_FAILED: {
    errorCode: 10003,
    errorMsg: '用户更新失败'
  },
  USER_DELETE_FAILED: {
    errorCode: 10004,
    errorMsg: '用户删除失败'
  },
  USER_PASSWORD_WRONG: {
    errorCode: 10005,
    errorMsg: '用户密码错误'
  },
  USER_LOGIN_FAILED: {
    errorCode: 10006,
    errorMsg: '用户登录失败'
  },
  LIST_QUERY_FAILDE: {
    errorCode: 20000,
    errorMsg: '列表查询失败'
  }
}