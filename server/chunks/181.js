"use strict";
exports.id = 181;
exports.ids = [181];
exports.modules = {

/***/ 9487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ config)
/* harmony export */ });
const devMode = true;
const config = {
  baseUrl: devMode ? "http://localhost:4040" : "https://zombi-news.herokuapp.com"
};

/***/ }),

/***/ 2341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "y": () => (/* reexport */ PostBody),
  "C": () => (/* reexport */ PostCard)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Post/PostCardStyle.ts

const Card = external_styled_components_default().a.withConfig({
  displayName: "PostCardStyle__Card",
  componentId: "sc-1n9qmvk-0"
})(["border-radius:6px;overflow:hidden;background-color:#fff;box-shadow:0 0 0 1px rgba(0,0,0,0.035),0 4px 25px rgba(0,0,0,0.07);color:black;text-decoration:none;transition:all 0.2s;min-height:300px;&:hover{color:black;box-shadow:0 0 0 1px rgba(0,0,0,0.035),0 6px 35px rgba(0,0,0,0.2);transform:translateY(-2px);}"]);
const Figure = external_styled_components_default().figure.withConfig({
  displayName: "PostCardStyle__Figure",
  componentId: "sc-1n9qmvk-1"
})(["margin:0;max-width:100%;position:relative;overflow:hidden;border-radius:6px 6px 0 0;"]);
const Title = external_styled_components_default().h3.withConfig({
  displayName: "PostCardStyle__Title",
  componentId: "sc-1n9qmvk-2"
})(["margin:10px 20px;font-size:1.4rem;"]);
const Lead = external_styled_components_default().div.withConfig({
  displayName: "PostCardStyle__Lead",
  componentId: "sc-1n9qmvk-3"
})(["margin:0 20px 20px;& > *{margin:0 0 10px;}"]);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Post/PostCard.tsx





const PostCard = ({
  post
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
    href: `/post/${post._id}`,
    passHref: true,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Figure, {
        children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
          alt: post.title,
          src: post.image,
          loading: "lazy",
          layout: "responsive",
          objectFit: "cover",
          objectPosition: "center",
          width: 320,
          height: 180,
          sizes: "(min-width: 1000px) 320px, 100vw"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Title, {
        children: post.title
      }), /*#__PURE__*/jsx_runtime_.jsx(Lead, {
        children: post.lead
      })]
    })
  });
};
;// CONCATENATED MODULE: ./components/Post/PostBodyStyle.ts

const PostBodyStyle_Title = external_styled_components_default().h2.withConfig({
  displayName: "PostBodyStyle__Title",
  componentId: "sc-153py1s-0"
})(["font-size:2.8rem;line-height:1.2;margin:10px 0 20px;@media (max-width:800px){font-size:1.8rem;margin:15px 0;}"]);
const PostBodyStyle_Figure = external_styled_components_default().figure.withConfig({
  displayName: "PostBodyStyle__Figure",
  componentId: "sc-153py1s-1"
})(["margin:0 0 30px;max-width:100%;position:relative;overflow:hidden;border-radius:6px;@media (max-width:800px){margin-bottom:20px;}"]);
const Content = external_styled_components_default().div.withConfig({
  displayName: "PostBodyStyle__Content",
  componentId: "sc-153py1s-2"
})(["overflow:hidden;.minText{max-height:100px;}font-size:1.25rem;line-height:1.4;max-width:800px;blockquote{background:hsl(171,50%,87%);padding:10px;}cite{display:flex;justify-content:right;}p:last-child{margin-bottom:0;}"]);
const Meta = external_styled_components_default().footer.withConfig({
  displayName: "PostBodyStyle__Meta",
  componentId: "sc-153py1s-3"
})(["color:", ";& > *{margin-right:0.3em;}"], p => p.theme.colors.gray);
const ShowMore = external_styled_components_default().div.withConfig({
  displayName: "PostBodyStyle__ShowMore",
  componentId: "sc-153py1s-4"
})(["{cursor:pointer;margin-bottom:10px;color:", ";}"], p => p.theme.colors.blue);
;// CONCATENATED MODULE: ./components/Breadcrumbs/styles.ts

const Container = external_styled_components_default().nav.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1k4es00-0"
})(["& > *{margin-right:0.3em;}"]);
;// CONCATENATED MODULE: ./components/Breadcrumbs/Breadcrumbs.tsx




const Breadcrumbs = ({
  post
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: "/",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: "\u30DB\u30FC\u30E0"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {}), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: `/category/${post.category}`,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: post.category
      })
    })]
  });
};
;// CONCATENATED MODULE: ./components/Breadcrumbs/index.ts

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Post/PostBody.tsx







const PostBody = ({
  post
}) => {
  const {
    0: fullText,
    1: setFullText
  } = (0,external_react_.useState)(false);
  const textClass = !fullText ? 'minText' : '';
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Breadcrumbs, {
      post: post
    }), /*#__PURE__*/jsx_runtime_.jsx(PostBodyStyle_Title, {
      children: post.title
    }), /*#__PURE__*/jsx_runtime_.jsx(PostBodyStyle_Figure, {
      children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
        src: post.image,
        alt: post.title,
        loading: "lazy",
        layout: "responsive",
        objectFit: "cover",
        objectPosition: "center",
        width: 960,
        height: 340
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Content, {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        dangerouslySetInnerHTML: {
          __html: post.content
        },
        className: textClass
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(ShowMore, {
      onClick: () => setFullText(true),
      children: fullText ? "" : "続きを読む"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Meta, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        children: post.date
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "\xB7"
      }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: `/category/${post.category}`,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: post.category
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "\xB7"
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: post.source,
        target: "_blank",
        rel: "noopener noreferrer",
        children: "\u30BD\u30FC\u30B9"
      })]
    })]
  });
};
;// CONCATENATED MODULE: ./components/Post/index.ts



/***/ })

};
;