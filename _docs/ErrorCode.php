<?php

/**
 * 开店星新零售管理系统
 * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开
 * @author 青岛开店星信息技术有限公司
 * @link https://www.kaidianxing.com
 * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.
 * @copyright 版权归青岛开店星信息技术有限公司所有
 * @warning Unauthorized deletion of copyright information is prohibited.
 * @warning 未经许可禁止私自删除版权信息
 */


/** 异常错误码解析 ******************************
 *
 * 错误码格式：AA-BB-CC
 *
 * AA：前两位为系统大功能模块编号
 * BB：功能模块对应小项功能的编号
 * CC：逻辑错误码
 *
 *  举例1：
 *  错误码：200001
 * AA：20 商品
 * BB：00 后台商品列表
 * CC：01 XXX错误
 *
 *  举例2：
 *  错误码：200101
 * AA：20 商品
 * BB：01 后台商品分组
 * CC：01 XXX错误
 *
 */

/** 异常错误码定义 *******************************
 *
 * 10 系统预留 (系统底层、更新、授权)
 * 11 系统用户 (独立用户体系)
 * 12 店铺相关 (独立店铺体系)
 * 13 店铺设置 (店铺的所有设置)
 * 14 应用渠道 (应用、渠道列表、管理、购买等)  渠道147  字节跳动小程序 148
 * 20 商品
 * 21 会员
 * 22 订单
 * 23 订单创建流程
 * 24 营销
 * 25 数据
 * 26 财务
 *
 * 应用开始 ***************************************
 * 32 装修
 * 33 分销
 * 34 消息通知 (3401)短信设置  (3410)公众号消息设置  (3420)小程序消息设置 (3420)短信
 * 35 渠道
 * 36 商品助手
 * 37 新人送礼
 * 38 消费奖励
 * 39 充值奖励
 * 40 购物奖励
 * 41 商品预售
 * 42 系统表单
 * 43 超级海报
 * 44 小程序直播
 * 45 自定义表单
 * 46 秒杀
 */
