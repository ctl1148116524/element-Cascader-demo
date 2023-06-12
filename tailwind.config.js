/*
 * @Author: chengtianlei
 * @Date: 2021-09-06 08:50:26
 * @LastEditors: chengtianlei
 * @LastEditTime: 2023-06-08 11:09:52
 * @FilePath: \base_background_system_v3\tailwind.config.js
 */

let unit = "px";
module.exports = {
  important: "#body",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    //容器默认居中
    container: {
      center: true,
      // padding: '2rem',默认水平填充 padding
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    borderWidth: {
      default: "1" + unit,
      0: "0",
      2: "2" + unit,
      4: "4" + unit,
    },
    extend: {
      colors: {
        blue: "#192f60",
        blue2: "#3e62ad",
        red: "#c9171e",
        green: "#028760",
        green2: "#7ebeab",
        yellow: "#ec6800",
        yellow2: "#f8b862",
        title: "#17233d",
        content: "#515a6e",
        grey: "#717888",
        grey2: "#808695",
        border: "#dcdee2",
      },
      zIndex: {
        99: "99",
        101: "101",
        999: "999",
        1001: "1001",
      },
      padding: {
        20: "20" + unit,
        10: "10" + unit,
        5: "5" + unit,
      },
      margin: {
        20: "20" + unit,
        10: "10" + unit,
        5: "5" + unit,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
