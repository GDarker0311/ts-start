# react-libs

商旅前端公共方法库，typescript。

## 安装

```npm install @ctrip/react-libs```

## 使用

### Axios

单独引用
```typescript
import { Axios } from "@ctrip/react-libs"

const TEST = {
  baseURL: 'http://localhost:3000',
  url: '/test',
  method: 'get'
}

const clickHandle = async () => {
  // 请求TEST接口
  const [response, error] = await Axios(TEST, {});
  if (response) {
    console.log(response.data);
  }else {
    console.log(JSON.stringify(error));
  }
}

```

整体引用
```typescript
import * as reactLibs from "@ctrip/react-libs"

const TEST = {
  baseURL: 'http://localhost:3000',
  url: '/test',
  method: 'get'
}

const clickHandle = async () => {
  // 请求TEST接口
  const [response, error] = await reactLibs.Axios(TEST, {});
  if (response) {
    console.log(response.data);
  }else {
    console.log(JSON.stringify(error));
  }
}
```

### Log

```typescript
import { Log } from "@ctrip/react-libs"

Log.logInfo({ value: logInfo_test }, {
  M: "2111122220",
  K: "logInfo_test",
  P: "logInfo_test_page"
});

Log.logException({ value: logException_test }, {
  M: "2111122220",
  K: "logException_test",
  P: "logException_test_page"
});

```

整体引用参考Axios

### Trace
```typescript
import { Trace } from "@ctrip/react-libs"

let params = {
  trackKey: "12345",
  trackValue: 1,
  trackTagType: "click"
}
Trace.trackMetric(params);

Trace.trackPage({
  pageId: "10650036267",
  logValue: "海外-填写页page打点",
  logTag: "orderInputIntl"
});

let trackLogParams = {
  UID: this.$store.state.member,
  corprationId: this.$store.state.corpId,
  postParams: data
};
let param = {
  key: this.$store.state.isOverSea ? "123903" : "123901",
  trackLogParams: JSON.stringify(trackLogParams)
};
Trace.trackLog(param);
```

整体引用参考Axios
