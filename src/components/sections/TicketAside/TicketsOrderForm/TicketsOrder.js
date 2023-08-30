import React from "react";
import {IconMinus, IconPlus} from "../../../../assets/imgComponents/iconsCommon";
import './order-form.scss'
import ButtonOrder from "../../../buttons/btnOrder";
import ButtonDefault from "../../../buttons/btnDefault";

const TicketsOrderForm = () => {

    return <>
        <div className="tickets-footer-order tickets-order">
            <div className="tickets-order-inputs stake">
                <ButtonOrder
                    customClass={'btn-order'}
                    icon={<IconMinus/>}
                    value={''}
                />
                <label>
                    <span>Stake</span>
                    <input
                        type="text"
                        placeholder="500"
                    />
                    <span>EUR</span>
                </label>
                <ButtonOrder
                    customClass={'btn-order'}
                    icon={<IconPlus />}
                    value={''}
                />
            </div>
            <div className="tickets-order-inputs quick-add">
                <ButtonOrder
                    customClass={'btn-order'}
                    icon={''}
                    value={'500'}
                />
                <ButtonOrder
                    customClass={'btn-order'}
                    icon={''}
                    value={'1.000'}
                />
                <ButtonOrder
                    customClass={'btn-order'}
                    icon={''}
                    value={'5.000'}
                />
                <ButtonOrder
                    customClass={'btn-order'}
                    icon={''}
                    value={'10.000'}
                />
            </div>
            <ButtonDefault
                customClass={'btn-green'}
                text={'PLACE 500 EUR'}
            />
        </div>
    </>
}

export default TicketsOrderForm