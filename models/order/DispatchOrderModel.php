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

namespace shopstar\models\order;

use shopstar\bases\model\BaseActiveRecord;


/**
 * This is the model class for table "{{%dispatch_order}}".
 *
 * @property int $id auto increment
 * @property int $type 配送方式1达达2码科
 * @property int $status 订单状态
 * @property int $order_id 订单表id
 * @property string $order_no 订单号
 * @property string $out_order_no 外部订单号
 * @property string $payed_time 待接单时间
 * @property string $accepted_time 待取件时间
 * @property string $delivery_time 配送中时间
 * @property string $gotoed_time 待评价时间
 * @property string $completed_time 已完成时间
 * @property string $cancel_time 已取消时间
 * @property string $created_at 创建时间
 * @property string $updated_at 更新时间
 */
class DispatchOrderModel extends BaseActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return '{{%dispatch_order}}';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['type', 'status', 'order_id'], 'integer'],
            [
                [
                    'payed_time',
                    'accepted_time',
                    'delivery_time',
                    'gotoed_time',
                    'completed_time',
                    'cancel_time',
                    'created_at',
                    'updated_at'
                ],
                'safe'
            ],
            [['order_no', 'out_order_no'], 'string', 'max' => 50],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'auto increment',
            'type' => '配送方式1达达2码科',
            'status' => '订单状态',
            'order_id' => '订单表id',
            'order_no' => '订单号',
            'out_order_no' => '外部订单号',
            'payed_time' => '待接单时间',
            'accepted_time' => '待取件时间',
            'delivery_time' => '配送中时间',
            'gotoed_time' => '待评价时间',
            'completed_time' => '已完成时间',
            'cancel_time' => '已取消时间',
            'created_at' => '创建时间',
            'updated_at' => '更新时间',
        ];
    }
}