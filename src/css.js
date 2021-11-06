const string = `
body {
    background-color: #e1e7d3;
}
.wrap {
    position: relative;
    margin-top: 20px;
}
.base {
    position: absolute;
    background: #a4978e;
}
.nameWrapper {
    position: relative;
}
.to {
    position: absolute;
    background: #5f5852;
    width: 18px;
    height: 66px;
    z-index: 6;
    top: 420px;
    left: 50%;
    margin-left: -9px;
    border-radius: 50% / 60% 60% 40% 40%;
}
.to::before {
    content: "";
    position: absolute;
    width: 18px;
    height: 33px;
    background: #5f5852;
    transform: rotate(90deg);
    border-radius: 50% / 60% 60% 40% 40%;
    margin-left: 10px;
    margin-top: 22px;
}
.nameWrapper > .char1 {
    transform: translateX(-40px) skewX(-5deg);
    animation: wave1 6s alternate linear infinite;
}
.nameWrapper > .char2 {
    transform: translateX(0) skewX(-5deg);
    animation: wave2 6s alternate linear infinite;
}
.nameWrapper > .ro {
    position: absolute;
    background: #5f5852;
    width: 43px;
    height: 43px;
    z-index: 6;
    border-radius: 12px;
    top: 440px;
    left: 50%;
    margin-left: 36px;
    transform: skewX(-5deg);
    animation: wave3 6s alternate linear infinite;
}
.nameWrapper > .ro::after {
    content: "";
    position: absolute;
    width: 22px;
    height: 17px;
    background: #e1e7d3;
    border-radius: 5px;
    top: 13px;
    left: 50%;
    margin-left: -11px;
    transform: skewX(-5deg);
}

.head {
    z-index: 1;
    width: 126px;
    height: 75px;
    left: 50%;
    top: 59px;
    margin-left: -63px;
    border-radius: 100px / 60px;
}
.bodyFillingUp {
    width: 130px;
    height: 56px;
    left: 50%;
    top: 107px;
    margin-left: -65px;
}
.bodyFillingMiddle {
    width: 194px;
    height: 63px;
    left: 50%;
    top: 163px;
    margin-left: -97px;
}
.bodyMain {
    width: 220px;
    height: 225px;
    top: 172px;
    left: 50%;
    margin-left: -110px;
    border-radius: 110px;
}
.belly {
    position: absolute;
    background: #efdccb;
    width: 200px;
    height: 214px;
    left: 50%;
    top: 157px;
    margin-left: -100px;
    border-radius: 100px / 107px;
    z-index: 5;
}
.upperArm {
    width: 35px;
    height: 131px;
    top: 83px;
}
.upperArm.left {
    left: 50%;
    margin-left: -90.4px;
    transform: rotate(27deg);
}
.upperArm.right {
    right: 50%;
    margin-right: -90.4px;
    transform: rotate(-27deg);
}
.foreArm {
    width: 38px;
    height: 104px;
    top: 192px;
    border-radius: 40px / 100px;
}
.foreArm.left {
    left: 50%;
    margin-left: -127.6px;
}
.foreArm.right {
    right: 50%;
    margin-right: -127.6px;
}
.feet {
    position: absolute;
    background: #e1e7d3;
    width: 124px;
    height: 20px;
    top: 381px;
    left: 50%;
    margin-left: -62px;
    z-index: 5;
}
.feet::after {
    content: "";
    display: block;
    position: absolute;
    border: 5px solid;
    border-color: transparent transparent #e1e7d3;
    border-top: none;
    left: 50%;
    margin-left: -5px;
    bottom: 20px;
    z-index: 6;
}
.ear {
    width: 12px;
    height: 25px;
    top: -10px;
    left: 50%;
    margin-left: -6px;
}
.ear.left {
    transform: translateX(-36px) rotate(-6deg);
}
.ear.right {
    transform: translateX(36px) rotate(6deg);
}
.ear::before {
    content: "";
    position: absolute;
    display: block;
    border: 15px solid;
    border-color: #a4978e transparent transparent;
    border-bottom: none;
    left: -8px;
    top: -2px;
}
.ear::after {
    content: "";
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-bottom: #a4978e 45px solid;
    border-left: transparent 15px solid;
    border-right: transparent 15px solid;
    left: -8px;
    top: -46px;
}
.eye {
    position: absolute;
    background: #fcfcfc;
    width: 24px;
    height: 24px;
    z-index: 5;
    left: 50%;
    top: 30px;
    margin-left: -12px;
    border-radius: 50%;
}
.eye::after {
    content: "";
    display: block;
    position: absolute;
    width: 10px;
    height: 10px;
    background: #5a534e;
    left: 50%;
    margin-left: -5px;
    top: 8px;
    border-radius: 50%;
    animation: pupil 5s ease 2s infinite;
}
.eye.left {
    transform: translateX(-38px);
}
.eye.right {
    transform: translateX(38px);
}
.nose {
    position: absolute;
    background: #5f5852;
    width: 30px;
    height: 10px;
    top: 40px;
    left: 50%;
    margin-left: -15px;
    border-radius: 20px / 7px;
}
.belly > .marking {
    position: absolute;
    width: 30px;
    height: 14px;
    background: #89775a;
    left: 50%;
    top: 22px;
    margin-left: -15px;
    border-radius: 100px / 50px;
}
.belly > .marking::before {
    content: "";
    position: absolute;
    background: #efdccb;
    width: 44px;
    height: 30px;
    left: 50%;
    top: 4px;
    margin-left: -22px;
    border-radius: 100px / 80px;
}
.belly > .mark1 {
    transform: translate(-40px, 5px) rotate(-10deg);
}
.belly > .mark2 {
    transform: translate(0) rotate(0);
}
.belly > .mark3 {
    transform: translate(40px, 5px) rotate(10deg);
}
.belly > .mark4 {
    transform: translate(-60px, 34px) rotate(-15deg);
}
.belly > .mark5 {
    transform: translate(60px, 34px) rotate(15deg);
}
.belly > .mark6 {
    transform: translate(-20px, 28px);
    z-index: 10;
}
.belly > .mark7 {
    transform: translate(20px, 28px);
    z-index: 10;
}`
export default string