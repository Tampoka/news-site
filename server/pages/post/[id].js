"use strict";
(() => {
var exports = {};
exports.id = 687;
exports.ids = [687];
exports.modules = {

/***/ 4684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": () => (/* reexport */ Loader)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Loader/style.ts

const Container = external_styled_components_default().div.withConfig({
  displayName: "style__Container",
  componentId: "sc-1le255u-0"
})(["font-family:", ";"], p => p.theme.fonts.accent);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Loader/Loader.tsx


const Loader = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    children: "Loading..."
  });
};
;// CONCATENATED MODULE: ./components/Loader/index.ts


/***/ }),

/***/ 1029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./api/config.ts
var config = __webpack_require__(9487);
;// CONCATENATED MODULE: ./api/post.ts

async function fetchPost(id) {
  const res = await fetch(`${config/* config.baseUrl */.v.baseUrl}/posts/${id}`);
  return await res.json();
}
// EXTERNAL MODULE: ./components/Post/PostBody.tsx + 4 modules
var PostBody = __webpack_require__(6032);
// EXTERNAL MODULE: ./components/Loader/index.ts + 2 modules
var Loader = __webpack_require__(4684);
// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(4809);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);
;// CONCATENATED MODULE: ./api/comments.ts


async function fetchComments(postId) {
  const res = await external_node_fetch_default()(`${config/* config.baseUrl */.v.baseUrl}/comments/${postId}`);
  return await res.json();
}
async function submitComment(postId, name, comment) {
  return await external_node_fetch_default()(`${config/* config.baseUrl */.v.baseUrl}/posts/${postId}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify({
      name,
      comment
    })
  });
}
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Comments/styles.ts

const Container = external_styled_components_default().section.withConfig({
  displayName: "styles__Container",
  componentId: "sc-186je01-0"
})(["margin:1.5rem 0;.comments-count{text-decoration:underline;cursor:pointer;}"]);
const List = external_styled_components_default().ul.withConfig({
  displayName: "styles__List",
  componentId: "sc-186je01-1"
})(["margin:0;padding:0;list-style:none;margin-bottom:20px;"]);
const Item = external_styled_components_default().li.withConfig({
  displayName: "styles__Item",
  componentId: "sc-186je01-2"
})(["list-style:none;border-bottom:1px solid rgba(0,0,0,0.1);"]);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/CommentForm/styles.ts

const Form = external_styled_components_default().form.withConfig({
  displayName: "styles__Form",
  componentId: "sc-tm2hed-0"
})(["margin-top:10px;input,textarea{display:block;width:100%;border:1px solid rgba(0,0,0,0.1);box-shadow:none;resize:none;font-size:1em;padding:5px;border-radius:2px;margin:10px 0;}button{border:0;font-size:1rem;padding:8px 20px;border-radius:6px;background-color:#fff;box-shadow:0 0 0 1px rgba(0,0,0,0.035),0 4px 25px rgba(0,0,0,0.07);transition:all 0.2s;cursor:pointer;&:hover{box-shadow:0 0 0 1px rgba(0,0,0,0.035),0 6px 35px rgba(0,0,0,0.2);}}"]);
;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");
// EXTERNAL MODULE: ./store/comments.ts
var store_comments = __webpack_require__(182);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/CommentForm/CommentForm.tsx







const CommentForm = ({
  post
}) => {
  const dispatch = (0,external_react_redux_namespaceObject.useDispatch)();
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  const {
    0: value,
    1: setValue
  } = (0,external_react_.useState)("");
  const {
    0: name,
    1: setName
  } = (0,external_react_.useState)("");

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    const response = await submitComment(post, name, value);
    const comments = await response.json();
    setLoading(false);
    /*   if (status === 201) {
           location.hash = "comments"
           location.reload()
       }*/

    setValue("");
    setName("");

    if (response.status === 200) {
      dispatch({
        type: store_comments/* UPDATE_COMMENTS_ACTION */.z,
        comments
      });
    }
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Form, {
    onSubmit: submit,
    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
      children: "\u30B3\u30E1\u30F3\u30C8\u3092\u66F8\u304F"
    }), /*#__PURE__*/jsx_runtime_.jsx("input", {
      type: "text",
      name: "name",
      value: name,
      placeholder: "\u30CB\u30C3\u30AF\u30CD\u30FC\u30E0",
      onChange: e => setName(e.target.value),
      required: true
    }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
      name: "comment",
      value: value,
      placeholder: "\u3053\u306E\u8A18\u4E8B\u306B\u95A2\u3059\u308B\u3042\u306A\u305F\u306E\u610F\u898B\u3084\u7591\u554F",
      onChange: e => setValue(e.target.value),
      required: true
    }), loading ? /*#__PURE__*/jsx_runtime_.jsx("span", {
      children: "Submitting..."
    }) : /*#__PURE__*/jsx_runtime_.jsx("button", {
      children: "\u6295\u7A3F\u3059\u308B"
    })]
  });
};
;// CONCATENATED MODULE: ./components/CommentForm/index.ts

;// CONCATENATED MODULE: ./components/Comment/styles.ts

const styles_Container = external_styled_components_default().article.withConfig({
  displayName: "styles__Container",
  componentId: "sc-i5xj3i-0"
})(["padding:10px 0;"]);
const Author = external_styled_components_default().h4.withConfig({
  displayName: "styles__Author",
  componentId: "sc-i5xj3i-1"
})(["display:block;font-size:1rem;"]);
const Body = external_styled_components_default().p.withConfig({
  displayName: "styles__Body",
  componentId: "sc-i5xj3i-2"
})(["margin:0;"]);
const Meta = external_styled_components_default().footer.withConfig({
  displayName: "styles__Meta",
  componentId: "sc-i5xj3i-3"
})(["color:", ";font-size:0.8em;"], p => p.theme.colors.gray);
;// CONCATENATED MODULE: ./components/Comment/Comment.tsx



const Comment = ({
  comment
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Author, {
      children: comment.author
    }), /*#__PURE__*/jsx_runtime_.jsx(Body, {
      children: comment.content
    }), /*#__PURE__*/jsx_runtime_.jsx(Meta, {
      children: comment.time
    })]
  });
};
;// CONCATENATED MODULE: ./components/Comment/index.ts

;// CONCATENATED MODULE: ./components/Comments/Comments.tsx






const Comments = ({
  post,
  comments
}) => {
  const {
    0: show,
    1: setShow
  } = (0,external_react_.useState)(false);

  const toggleShowComments = () => setShow(prev => !prev);

  const commentsMessage = comments.length ? `${comments.length}件のコメント` : 'コメントがありません';
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
    id: "comments",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
      onClick: toggleShowComments,
      className: "comments-count",
      children: commentsMessage
    }), show && comments.length > 0 && /*#__PURE__*/jsx_runtime_.jsx(List, {
      children: comments.map(comment => /*#__PURE__*/jsx_runtime_.jsx(Item, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Comment, {
          comment: comment
        })
      }, comment._id))
    }), /*#__PURE__*/jsx_runtime_.jsx(CommentForm, {
      post: post
    })]
  });
};
// EXTERNAL MODULE: ./store/index.ts
var store = __webpack_require__(2188);
// EXTERNAL MODULE: ./store/post.ts
var store_post = __webpack_require__(8498);
;// CONCATENATED MODULE: ./pages/post/[id].tsx













/*export const getStaticProps: GetStaticProps<PostProps> = async ({
                                                                    params
                                                                }) => {
    if (typeof params?.id !== "string") throw new Error("Unexpected id")
    const post = await fetchPost(params?.id)
    return {props: {post}}
}*/
const getServerSideProps = store/* store.getServerSideProps */.h.getServerSideProps(store => async ({
  params
}) => {
  if (typeof (params === null || params === void 0 ? void 0 : params.id) !== "string") throw new Error("Unexpected id");
  const comments = await fetchComments(params.id);
  const post = await fetchPost(params.id);
  store.dispatch({
    type: store_post/* UPDATE_POST_ACTION */.M,
    post
  });
  store.dispatch({
    type: store_comments/* UPDATE_COMMENTS_ACTION */.z,
    comments
  });
  return {
    props: {
      post,
      comments
    }
  };
});
/*export async function getStaticPaths() {
    return {paths, fallback: true}
}*/

const Post = () => {
  const {
    post,
    comments
  } = (0,external_react_redux_namespaceObject.useSelector)(state => state);
  if (!post) return /*#__PURE__*/jsx_runtime_.jsx(Loader/* Loader */.a, {});
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(PostBody/* PostBody */.y, {
      post: post
    }), /*#__PURE__*/jsx_runtime_.jsx(Comments, {
      comments: comments,
      post: post._id
    })]
  });
};

/* harmony default export */ const _id_ = (Post);

/***/ }),

/***/ 5648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 4809:
/***/ ((module) => {

module.exports = require("node-fetch");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [922,664,675,370,188], () => (__webpack_exec__(1029)));
module.exports = __webpack_exports__;

})();