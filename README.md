# react-libs

商旅前端公共方法库，typescript。

## 安装

使用npm ```npm install @ctrip/react-libs```

使用yarn ```yarn add @ctrip/react-libs```

## 使用

### Axios

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

### Trace
```typescript
import { Trace } from "@ctrip/react-libs"

Trace.trackMetric({ value: "test" });

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
