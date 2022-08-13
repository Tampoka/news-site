"use strict";
exports.id = 686;
exports.ids = [686];
exports.modules = {

/***/ 8686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* reexport */ Section)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Section/styles.ts

const Grid = external_styled_components_default().div.withConfig({
  displayName: "styles__Grid",
  componentId: "sc-1o9pd99-0"
})(["display:flex;flex-wrap:wrap;justify-content:space-between;&:after{content:\"\";flex:auto;}&:after,& > *{width:calc(33% - 10px);margin-bottom:20px;}@media (max-width:800px){&:after,& > *{width:100%;}"]);
const Title = external_styled_components_default().h2.withConfig({
  displayName: "styles__Title",
  componentId: "sc-1o9pd99-1"
})(["font-size:2.8rem;line-height:1.1;margin:10px 0 15px;@media (max-width:800px){font-size:2rem;}"]);
const MoreLink = external_styled_components_default().a.withConfig({
  displayName: "styles__MoreLink",
  componentId: "sc-1o9pd99-2"
})(["margin:-20px 0 30px;display:inline-block;vertical-align:top;"]);
;// CONCATENATED MODULE: ./components/Post/PostCardStyle.ts

const Card = external_styled_components_default().a.withConfig({
  displayName: "PostCardStyle__Card",
  componentId: "sc-1n9qmvk-0"
})(["border-radius:6px;overflow:hidden;background-color:#fff;box-shadow:0 0 0 1px rgba(0,0,0,0.035),0 4px 25px rgba(0,0,0,0.07);color:black;text-decoration:none;transition:all 0.2s;min-height:300px;&:hover{color:black;box-shadow:0 0 0 1px rgba(0,0,0,0.035),0 6px 35px rgba(0,0,0,0.2);transform:translateY(-2px);}"]);
const Figure = external_styled_components_default().figure.withConfig({
  displayName: "PostCardStyle__Figure",
  componentId: "sc-1n9qmvk-1"
})(["padding:56% 0 0;margin:0;max-width:100%;position:relative;overflow:hidden;border-radius:6px 6px 0 0;img{max-width:100%;position:absolute;top:0;left:0;}"]);
const PostCardStyle_Title = external_styled_components_default().h3.withConfig({
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
      }), /*#__PURE__*/jsx_runtime_.jsx(PostCardStyle_Title, {
        children: post.title
      }), /*#__PURE__*/jsx_runtime_.jsx(Lead, {
        children: post.lead
      })]
    })
  });
};
// EXTERNAL MODULE: ./components/Post/PostBody.tsx + 4 modules
var PostBody = __webpack_require__(6032);
;// CONCATENATED MODULE: ./components/Post/index.ts


;// CONCATENATED MODULE: ./components/Section/Section.tsx





const Section = ({
  title,
  posts,
  isCompact = false
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Title, {
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx(Grid, {
      children: posts.map(post => /*#__PURE__*/jsx_runtime_.jsx(PostCard, {
        post: post
      }, post._id))
    }), isCompact && /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: `/category/${title}`,
      passHref: true,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(MoreLink, {
        children: ["More in ", title]
      })
    })]
  });
};
;// CONCATENATED MODULE: ./components/Section/index.ts


/***/ })

};
;