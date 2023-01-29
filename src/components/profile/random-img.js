import bg_photo_1 from "../../assets/images/pexels-1.jpg"
import bg_photo_2 from "../../assets/images/pexels-2.jpg"
import bg_photo_3 from "../../assets/images/pexels-3.jpg"
import bg_photo_4 from "../../assets/images/pexels-4.jpg"
import bg_photo_5 from "../../assets/images/pexels-5.jpg"
import bg_photo_6 from "../../assets/images/pexels-6.jpg"
import bg_photo_7 from "../../assets/images/pexels-7.jpg"
import bg_photo_8 from "../../assets/images/pexels-8.jpg"
import bg_photo_9 from "../../assets/images/pexels-9.jpg"
import bg_photo_10 from "../../assets/images/pexels-10.jpg"
import bg_photo_11 from "../../assets/images/pexels-11.jpg"
import bg_photo_12 from "../../assets/images/pexels-12.jpg"
import bg_photo_13 from "../../assets/images/pexels-13.jpg"
import bg_photo_14 from "../../assets/images/pexels-14.jpg"
import bg_photo_15 from "../../assets/images/pexels-15.jpg"
import bg_photo_16 from "../../assets/images/pexels-16.jpg"
import bg_photo_17 from "../../assets/images/pexels-17.jpg"
import bg_photo_18 from "../../assets/images/pexels-18.jpg"
import bg_photo_19 from "../../assets/images/pexels-19.jpg"
import bg_photo_20 from "../../assets/images/pexels-20.jpg"
import bg_photo_21 from "../../assets/images/pexels-21.jpg"
import bg_photo_22 from "../../assets/images/pexels-22.jpg"
import bg_photo_23 from "../../assets/images/pexels-23.jpg"
import bg_photo_24 from "../../assets/images/pexels-24.jpg"
import bg_photo_25 from "../../assets/images/pexels-25.jpg"
import bg_photo_26 from "../../assets/images/pexels-26.jpg"
import bg_photo_27 from "../../assets/images/pexels-27.jpg"
import bg_photo_28 from "../../assets/images/pexels-28.jpg"
import bg_photo_29 from "../../assets/images/pexels-29.jpg"
import bg_photo_30 from "../../assets/images/pexels-30.jpg"
import bg_photo_31 from "../../assets/images/pexels-31.jpg"
import bg_photo_32 from "../../assets/images/pexels-32.jpg"
import bg_photo_33 from "../../assets/images/pexels-33.jpg"
import bg_photo_34 from "../../assets/images/pexels-34.jpg"
import bg_photo_35 from "../../assets/images/pexels-35.jpg"
import bg_photo_36 from "../../assets/images/pexels-36.jpg"
import bg_photo_37 from "../../assets/images/pexels-37.jpg"
import bg_photo_38 from "../../assets/images/pexels-38.jpg"
import bg_photo_39 from "../../assets/images/pexels-39.jpg"
import bg_photo_40 from "../../assets/images/pexels-40.jpg"
import bg_photo_41 from "../../assets/images/pexels-41.jpg"

let arr_img = [
    bg_photo_1, bg_photo_2, bg_photo_3, bg_photo_4, bg_photo_5, bg_photo_6, bg_photo_7, bg_photo_8, bg_photo_9, bg_photo_10
    , bg_photo_11, bg_photo_12, bg_photo_13, bg_photo_14, bg_photo_15, bg_photo_16, bg_photo_17, bg_photo_18, bg_photo_19, bg_photo_20
    , bg_photo_21, bg_photo_22, bg_photo_23, bg_photo_24, bg_photo_25, bg_photo_26, bg_photo_27, bg_photo_28, bg_photo_29, bg_photo_30
    , bg_photo_31, bg_photo_32, bg_photo_33, bg_photo_34, bg_photo_35, bg_photo_36, bg_photo_37, bg_photo_38, bg_photo_39, bg_photo_40
    , bg_photo_41
]

console.log(arr_img)
export function get_random_img() {
    const randomImgIndex = Math.floor(Math.random() * 41)
    return arr_img[randomImgIndex]
}
