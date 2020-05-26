import log from "./log"

export default {
  /**
   * UBT打点组件-点击点
   */
  trackMetric: function(params) {
    try {
      window["__bfi"].push([
        "_trackMetric",
        {
          name: params.trackKey,
          value: params.trackValue || 1,
          tag: {
            eventType: params.trackTagType || "click"
          }
        }
      ]);
    } catch (e) {
      // 异常日志
      log.logException(params.logValue, { K: params.logTag });
    }
  },

  /**
   * UBT打点组件-页面打点
   */
  trackPage: function(params) {
    try {
      if (typeof window["__bfi"] == "undefined") window["__bfi"] = [];
      window["__bfi"].push([
        "_asynRefresh",
        {
          page_id: params.pageId,
          loginName: params.member
        }
      ]);
    } catch (e) {
      // 异常日志
      log.logException(params.logValue, { K: params.logTag });
    }
  },

  /**
   * UBT打点组件-trackLog打点
   */
  trackLog: function(params) {
    try {
      window["__bfi"].push(["_tracklog", params.key, params.trackLogParams]);
    } catch (e) {
      // 异常日志
      log.logException(params.logValue, { K: params.logTag });
    }
  }
}