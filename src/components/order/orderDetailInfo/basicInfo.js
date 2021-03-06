// @flow
import React, { Component } from "react";

import styles from "./index.css";
import { View } from "react-web-dom";
import InfoRow from "../../public/info/infoRow";
import moment from 'moment'

type Props = {
    sn: string,
    reciver_name: string,
    create_time: number,
    trade_no:string,
    state: number
}
type State = {}
export default class OrderDetailBasicInfo extends Component<Props, State> {
    render() {
        const { sn, create_time, state,trade_no } = this.props
        return (
            <View className={styles.infoWarp}>
                <p className={styles.infoTitle}>基本信息</p>
                <InfoRow
                    infoList={[
                        {
                            title: '订单号',
                            info: sn,
                        }
                        // , {
                        //     title: '下单人',
                        //     info: reciver_name,
                        //     // typeLink: 1,
                        // }
                        , {
                            title: '下单时间',
                            info: moment(create_time, 'X').format('YYYY-MM-DD HH:mm:ss'),
                        }, {
                            title: '订单状态',
                            info: this.returnOrderState(state),
                        },
                        {
                            title: '支付平台交易号',
                            info: trade_no,
                        }
                    ]}
                />
            </View>
        );
    }

    returnOrderState(state: number) {
        switch (state) {
            case 0:
                return '已取消'
            case 10:
                return '待支付'
            case 20:
                return '待发货'
            case 30:
                return '待收货'
            case 40:
                return '已完成'
            default:
                return ''
        }
    }
}
