import { find } from "lodash"
export default {
  /**
   * 返回当前环境
   * -1： 本地环境
   * 0： 线上环境
   * 其他
   */
  environment: () => {
    var hostsSplit = location.host.split(".");
    var fatSplit = find(hostsSplit, element => {
      return element.indexOf("fat") > -1;
    });
    if (fatSplit) {
      return Number(fatSplit.replace("fat", ""));
    }else if (location.host.indexOf("172") > -1 || location.host.indexOf("localhost") > -1) {
      return -1;
    }else {
      return 0;
    }
  }
}