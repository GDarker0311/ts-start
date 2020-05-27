import axios from "../axios/axios";
import tools from "../tools/tools";

interface LogTagsInterface {
  M?: string,
  K?: string,
  P?: string,
  B?: string
}

export default {
  logInfo: function(value, tags: LogTagsInterface) {
    logCatch(value, tags, 1);
  },
  logException: function(value, tags: LogTagsInterface) {
    logCatch(value, tags, 3);
  }
};

function logCatch(value, tags: LogTagsInterface, level) {
  tags.B = navigator.userAgent;
  let params = {
    value: JSON.stringify({ Msg: JSON.stringify(value) }),
    level: level,
    TagS: tagsSetting(tags)
  };
  //测试环境不是fat4, 不记录日志
  let fat = tools.environment();
  if (fat !== 0) {
    axios({ url: "/frontendPub/logServer"}, params);
  }
}

function tagsSetting(obj) {
  let tags = [];
  for (let key in obj) {
    tags.push(key + "|" + obj[key]);
  }
  if (tags.length === 0) return "";
  return tags.join(",");
}
