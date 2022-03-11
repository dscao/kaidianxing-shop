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

namespace shopstar\constants\consumeReward;

use shopstar\bases\constant\BaseConstant;

class ConsumeRewardLogConstant extends BaseConstant
{
    /**
     * @Text("消费奖励-活动-新增")
     */
    public const CONSUME_REWARD_ADD = 380100;
    
    /**
     * @Text("消费奖励-活动-修改")
     */
    public const CONSUME_REWARD_EDIT = 380101;
    
    /**
     * @Text("消费奖励-活动-手动停止")
     */
    public const CONSUME_REWARD_MANUAL_STOP = 380102;
    
    /**
     * @Text("消费奖励-活动-删除")
     */
    public const CONSUME_REWARD_DELETE = 380103;
}