const styles = `
:root {
    --heading-font-family: "Inter", Helvetica;
    --heading-font-weight: 600;
    --heading-font-size: 40px;
    --heading-letter-spacing: 0px;
    --heading-line-height: 110%;
    --subheading-font-family: "Inter", Helvetica;
    --subheading-font-weight: 400;
    --subheading-font-size: 24px;
    --subheading-letter-spacing: 0px;
    --subheading-line-height: 150%;
    --body-text-font-family: "Inter", Helvetica;
    --body-text-font-weight: 500;
    --body-text-font-size: 20px;
    --body-text-letter-spacing: 0px;
    --body-text-line-height: 150%;
    --small-text-font-family: "Inter", Helvetica;
    --small-text-font-weight: 500;
    --small-text-font-size: 16px;
    --small-text-letter-spacing: 0px;
    --small-text-line-height: 150%;
    --button-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
    --variable-collection-spacing-XS: 8px;
    --variable-collection-spacing-s: 24px;
    --variable-collection-spacing-m: 48px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.screen {
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    width: 100%;
}

a {
    text-decoration: none;
    color: inherit;
    display: inline-block;
}

.screen .div {
    width: 1920px;
    height: 2827px;
    position: relative;
}

.screen .overlap-group {
    position: absolute;
    width: 1920px;
    height: 2724px;
    top: 100px;
}

.screen .view {
    height: 2533px;
    position: absolute;
    width: 1920px;
    background-color: #ffffff;
}

.screen .header {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--variable-collection-spacing-s);
    top: 120px;
    left: 340px;
}

.screen .text-wrapper {
    font-family: "Inter-SemiBold", Helvetica;
    font-weight: 600;
    color: #000000;
    font-size: 40px;
    text-align: center;
    line-height: 44px;
}

.screen .p {
    font-family: "Inter-Regular", Helvetica;
    font-weight: 400;
    color: #828282;
    font-size: 24px;
    text-align: center;
    line-height: 36px;
}

.screen .button {
    all: unset;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 14px 24px;
    background-color: #000000;
    border-radius: 8px;
    box-shadow: var(--button-shadow);
}

.screen .text-wrapper-2 {
    width: fit-content;
    font-family: "Inter-SemiBold", Helvetica;
    font-weight: 600;
    color: #ffffff;
    font-size: 16px;
    line-height: 28px;
    white-space: nowrap;
}

.screen .list, .screen .list-2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--variable-collection-spacing-m);
    position: absolute;
    width: 496px;
}

.screen .copy-3, .screen .copy-4 {
    gap: var(--variable-collection-spacing-s);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}

.screen .text-wrapper-3, .screen .text-wrapper-4 {
    font-family: "Inter-Regular", Helvetica;
    font-weight: 400;
    color: #000000;
    font-size: 24px;
    line-height: 36px;
}

.screen .img {
    width: 32px;
    height: 32px;
}

.screen .element, .screen .element-2 {
    width: 625px;
    height: 400px;
    object-fit: cover;
}

.screen .navigation-footer-wrapper {
    position: absolute;
    width: 1920px;
    height: 261px;
    top: 2463px;
    background-color: #ffffff;
}

.screen .navbar {
    position: fixed;
    width: 100%;
    height: 75px;
    top: 0;
    left: 0;
    background-color: #ffffff;
    box-shadow: 0 0 4px #00000040;
}

.screen .text-wrapper-14,
.screen .text-wrapper-15,
.screen .text-wrapper-16,
.screen .text-wrapper-17,
.screen .text-wrapper-18 {
    position: absolute;
    font-family: "NEXON Lv1 Gothic-Light", Helvetica;
    font-weight: 300;
    color: #000000;
    font-size: 16px;
    white-space: nowrap;
}
`;

// Create style tag
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
