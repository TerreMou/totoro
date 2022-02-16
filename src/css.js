const string = `
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