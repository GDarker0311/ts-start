# ts-start

ts起步，typescript。

## 安装

```npm install ？？？```

## 使用

### Axios

单独引用
```typescript
import { Axios } from "？？？"

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
import * as reactLibs from "？？？"

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