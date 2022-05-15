let detectZoomFunc = {
  ie: () => {
    return window.screen.deviceXDPI / window.screen.logicalXDPI;
  },
  firefox: () => {
    return window.devicePixelRatio
      ? window.devicePixelRatio
      : n("min--moz-device-pixel-ratio", "", 0, 10, 20, 1e-4);
  },
  opera: () => {
    return window.outerWidth / window.innerWidth;
  },
  chrome: () => {
    if (window.devicePixelRatio) return window.devicePixelRatio;
    let o = window.document;
    let t = o.createElement("div");
    (t.innerHTML = "1"),
      t.setAttribute(
        "style",
        "font:100px/1em sans-serif;-webkit-text-size-adjust:none;position: absolute;top:-100%;"
      ),
      o.body.appendChild(t);
    let n = 1e3 / t.clientHeight;
    return (n = Math.round(100 * n) / 100), o.body.removeChild(t), n;
  },
  safari: () => {
    return window.outerWidth / window.innerWidth;
  },
};

function round2(number, fractionDigits) {
  with (Math)
    return round(number * pow(10, fractionDigits)) / pow(10, fractionDigits);
}

function n(t, n, i, a, s, c) {
  function l(e, o, i) {
    let a = (e + o) / 2;
    if (i <= 0 || o - e < c) return a;
    let s = "(" + t + ":" + a + n + ")";
    return r(s).matches ? l(a, o, i - 1) : l(e, a, i - 1);
  }
  let r, d, m, p;
  let e = window,
    o = window.document;
  e.matchMedia
    ? (r = e.matchMedia)
    : ((d = o.getElementsByTagName("head")[0]),
      (m = o.createElement("style")),
      d.appendChild(m),
      (p = o.createElement("div")),
      (p.className = "mediaQueryBinarySearch"),
      (p.style.display = "none"),
      o.body.appendChild(p),
      (r = function (e) {
        m.sheet.insertRule(
          "@media " +
            e +
            "{.mediaQueryBinarySearch {text-decoration: underline} }",
          0
        );
        let t = "underline" == getComputedStyle(p, null).textDecoration;
        return m.sheet.deleteRule(0), { matches: t };
      }));
  let u = l(i, a, s);
  return p && (d.removeChild(m), o.body.removeChild(p)), u;
}

function system() {
  let ua = navigator.userAgent.toLowerCase();
  return ua.indexOf("win") >= 0
    ? "win"
    : ua.indexOf("mac") >= 0
    ? "mac"
    : false;
}

function getBrowser() {
  let ua = navigator.userAgent.toLowerCase();
  return window.ActiveXObject || "ActiveXObject" in window
    ? "ie"
    : ua.indexOf("firefox") >= 0
    ? "firefox"
    : ua.indexOf("chrome") >= 0
    ? "chrome"
    : ua.indexOf("opera") >= 0
    ? "opera"
    : ua.indexOf("safari") >= 0
    ? "safari"
    : void 0;
}

function detectZoom() {
  return detectZoomFunc[getBrowser()]();
}

function iszoom(e) {
  return (
    ("win" == e.system && 1 != e.zoom) ||
    ("mac" == e.system && e.zoom % 1 != 0 && e.zoom % 2 != 0) ||
    false
  );
}

let zoomData = { zoom: round2(detectZoom(), 2), system: system() };

console.log('浏览器当前缩放情况和当前系统：',zoomData);
console.log('浏览器类型：',getBrowser());

console.log('监控缩放比例：',detectZoom());
console.log('是否缩放：',iszoom(zoomData));
