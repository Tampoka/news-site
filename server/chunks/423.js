"use strict";
exports.id = 423;
exports.ids = [423];
exports.modules = {

/***/ 1423:
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
// EXTERNAL MODULE: ./components/Post/index.ts + 7 modules
var Post = __webpack_require__(2341);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
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
      children: posts.map(post => /*#__PURE__*/jsx_runtime_.jsx(Post/* PostCard */.C, {
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