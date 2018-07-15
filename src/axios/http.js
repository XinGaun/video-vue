import axios from 'axios';
import { Toast } from 'vant';

let BASE_URL = '';
if (process.env.NODE_ENV == 'development') {
  BASE_URL ='http://127.0.0.1:2019/hangrano2o';
} else if (process.env.NODE_ENV == 'production') {
  BASE_URL ='http://127.0.0.1:2019/hangrano2o';
}

export {BASE_URL}

const URL = {
	"loginss":{
		url:"/Writer/loginss",
	}
}

//是否允许显示toast
let showToast = true;

//请求开始时，开启加载中动画，出错了提示并关闭动画
axios.interceptors.request.use(config => {
  if( showToast ){
    let message = '加载中...';
    if( config.url.indexOf('addOrderTab') > -1 ){
      message = '订单提交中...';
    }
    Toast.loading({
      message: message,
      duration:0
    });
  }
  return config
}, error => {
  Toast.fail({
    message: '网络错误，请重试！',
    duration:3000
  });
  return Promise.reject(error)
});

//请求完成时，关闭加载中动画，返回数据或错误信息
axios.interceptors.response.use(response => {
//console.log(response)
  Toast.clear();
  //一切正常，返回数据或空对象
  if (response.data.code === 200) {
    return response.data;
  } else if(response.data.message != null && response.data.message.length > 0 && showToast){
    Toast.fail({message: response.data.message,duration:3000});
  }
}, error => {
  Toast.clear();
  if (error.response) {
    // 请求已发出，但服务器响应的状态码不在 2xx 范围内，有错误信息则弹出错误信息
    console.log('response-error-data', error.response.data);
    if (error.response.data.path.indexOf('addOrderTab') > -1) {
      Toast.fail({message: '提交失败！',duration:3000});
    }
  } else {
    //什么数据都没有，直接出错了
    console.log('Error', error.message);
    Toast.fail('网络错误！');
  }
});

export default class $Api {
  static get = (apiName, isShow) => {
    if (isShow === false) {
      showToast = isShow;
    }

    return axios({
      method: 'get',
      url: `${BASE_URL}${URL[apiName].url}`,
      withCredentials: false,//表示跨域请求时是否需要使用凭证
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
    })
  };

  static post = (apiName, params, isShow) => {
    if (isShow === false) {
      showToast = isShow;
    }

    return axios({
      method: 'post',
      url: `${BASE_URL}${URL[apiName].url}`,
      data: params,
      withCredentials: false,//表示跨域请求时是否需要使用凭证
      // 发送请求前处理request的数据
      transformRequest: [
        function (data) {
          return JSON.stringify(data);
        }],
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
  };
};