var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} //REACT____________________________________________________

//NAVIGATION___________________________________________________
var Navigation = function (_React$Component) {_inherits(Navigation, _React$Component);function Navigation() {_classCallCheck(this, Navigation);return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).apply(this, arguments));}_createClass(Navigation, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", { id: "navbar" },
          React.createElement("nav", { "class": "stroke" },
            React.createElement("ul", null,
              React.createElement("li", null, React.createElement("a", { href: "#collection" }, "Collections")),
              React.createElement("li", null, React.createElement("a", { href: "#" }, "Cart"))),

            React.createElement("div", { id: "logo" }, "THE LOGO"))));



    } }]);return Navigation;}(React.Component);

//-------------------------------------------------------------------------


//FOOTER________________________________________________________________
var Footer = function (_React$Component2) {_inherits(Footer, _React$Component2);function Footer() {_classCallCheck(this, Footer);return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));}_createClass(Footer, [{ key: "render", value: function render()
    {
      return (
        React.createElement("section", { id: "footer" },
          React.createElement("div", { "class": "stroke" },
            React.createElement("ul", null,
              React.createElement("li", null, React.createElement("a", { href: "#" }, "ABOUT")),
              React.createElement("li", null, React.createElement("a", { href: "#" }, "PRIVACY POLICY")),
              React.createElement("li", null, React.createElement("a", { href: "#" }, "CONTACT")),
              React.createElement("div", { id: "copyright" }, " \xA9 year Company Name | All Rights Reserved")))));




    } }]);return Footer;}(React.Component);



//HOME SECTION________________________________________________________________
var HomePage = function (_React$Component3) {_inherits(HomePage, _React$Component3);function HomePage() {_classCallCheck(this, HomePage);return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));}_createClass(HomePage, [{ key: "render", value: function render()
    {
      return (
        React.createElement("section", { id: "home" },
          React.createElement("h1", null, React.createElement("strong", null, "THE ", React.createElement("br", null), "BAG ", React.createElement("br", null), "STORE")),
          React.createElement("img", { id: "back-img", src: "https://image.ibb.co/gK0dFA/handbag-600398-640.jpg" }),
          React.createElement("img", { id: "front-img", src: "https://image.ibb.co/kher2q/handbag-444171-640.jpg" })));


    } }]);return HomePage;}(React.Component);

//------------------------------------------------------------------------------

//SECOND SECTION__________________________________________________________________
var Durability = function (_React$Component4) {_inherits(Durability, _React$Component4);function Durability() {_classCallCheck(this, Durability);return _possibleConstructorReturn(this, (Durability.__proto__ || Object.getPrototypeOf(Durability)).apply(this, arguments));}_createClass(Durability, [{ key: "render", value: function render()
    {
      return (
        React.createElement("section", { id: "durability" },
          React.createElement("img", { id: "front-img", "class": "anim slide-left slide", src: "https://image.ibb.co/bDEsOV/handbag-2033951-640.jpg" }),
          React.createElement("img", { id: "back-img", "class": "anim slide-left", src: "https://image.ibb.co/iQWvcq/handbag-2033960-640.jpg" }),
          React.createElement("div", { "class": "information" },
            React.createElement("h1", null, "Durable Design"),
            React.createElement("p", null, "Information about durability.. Could be anything... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "))));




    } }]);return Durability;}(React.Component);

//-----------------------------------------------------------------------------------


//COLLECTION________________________________________________________________________
var Collection = function (_React$Component5) {_inherits(Collection, _React$Component5);function Collection() {_classCallCheck(this, Collection);return _possibleConstructorReturn(this, (Collection.__proto__ || Object.getPrototypeOf(Collection)).apply(this, arguments));}_createClass(Collection, [{ key: "render", value: function render()
    {
      return (
        React.createElement("section", { id: "collection" },
          React.createElement("div", { "class": "information" },
            React.createElement("h1", null, "Collection"),
            React.createElement("p", null, "Display Collection ...Information regarding the latest collection....Sample Text")),


          React.createElement("div", { "class": "collection" },
            React.createElement("div", { "class": "container" },
              React.createElement("img", { id: "img1", "class": "anim slide-top", src: "https://image.ibb.co/f9OdfA/bag-1853847-640.jpg" }),
              React.createElement("div", { "class": "text-block anim slide-top" }, "THE OFFICE COLLECTION")),

            React.createElement("div", { "class": "container upper" },
              React.createElement("img", { id: "img2", "class": "anim slide-top slide", src: "https://image.ibb.co/n1ddfA/leather-1175166-640.jpg" }),
              React.createElement("div", { "class": "text-block anim slide-top slide" }, "THE DESIGNER COLLECTION")),

            React.createElement("div", { "class": "container" },
              React.createElement("img", { id: "img3", "class": "anim slide-top anim slide-top", src: "https://image.ibb.co/gFWg0A/photography-1281757-640.jpg" }),
              React.createElement("div", { "class": "text-block anim slide-top" }, "THE CASUAL COLLECTION")))));




    } }]);return Collection;}(React.Component);



//Wrapping up App together____________________________________________________________
var App = function (_React$Component6) {_inherits(App, _React$Component6);function App() {_classCallCheck(this, App);return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));}_createClass(App, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", null,
          React.createElement(Navigation, null),
          React.createElement(HomePage, null),
          React.createElement(Durability, null),
          React.createElement(Collection, null),
          React.createElement(Footer, null)));


    } }]);return App;}(React.Component);


ReactDOM.render(React.createElement(App, null), document.getElementById('app'));



//jQuery trigger animation when in view_____________________________
var $animation_elements = $('.anim');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = window_top_position + window_height;

  $.each($animation_elements, function () {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = element_top_position + element_height;

    //check to see if this current container is within viewport
    if (element_bottom_position >= window_top_position &&
    element_top_position <= window_bottom_position) {
      $element.addClass('in-view');

    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);


//------------------------------------------------------------------

//--- DEFINE a reusable animation function: ---//
function scrollThere(targetElement, speed) {
  // initiate an animation to a certain page element:
  $('html, body').stop().animate(
  { scrollTop: targetElement.offset().top }, // move window so target element is at top of window
  speed, // speed in milliseconds
  'swing' // easing
  ); // end animate
} // end scrollThere function definition

//--- START SCROLL EVENTS ---//
// detect a mousewheel event (note: relies on jquery mousewheel plugin):
$(window).on('mousewheel', function (e) {

  // get Y-axis value of each div:
  var div1y = $('#home').offset().top,
  div2y = $('#durability').offset().top,
  div3y = $('#collection').offset().top,
  div4y = $('#footer').offset().top,
  // get window's current scroll position:
  lastScrollTop = $(this).scrollTop(),
  // for getting user's scroll direction:
  scrollDirection,
  // for determining the previous and next divs to scroll to, based on lastScrollTop:
  targetUp,
  targetDown,
  // for determining which of targetUp or targetDown to scroll to, based on scrollDirection:
  targetElement;


  // get scroll direction:
  if (e.deltaY > 0) {
    scrollDirection = 'up';
  } else if (e.deltaY <= 0) {
    scrollDirection = 'down';
  } // end if


  // prevent default behavior (page scroll):
  e.preventDefault();


  // condition: determine the previous and next divs to scroll to, based on lastScrollTop:
  if (lastScrollTop === div1y) {
    targetUp = $('#home');
    targetDown = $('#durability');
  } else if (lastScrollTop === div2y) {
    targetUp = $('#home');
    targetDown = $('#collection');
  } else if (lastScrollTop === div3y) {
    targetUp = $('#durability');
    targetDown = $('#footer');
  } else if (lastScrollTop === div4y) {
    targetUp = $('#collection');
    targetDown = $('#footer');
  } else if (lastScrollTop < div2y) {
    targetUp = $('#home');
    targetDown = $('#durability');
  } else if (lastScrollTop < div3y) {
    targetUp = $('#durability');
    targetDown = $('#collection');
  } else if (lastScrollTop < div4y) {
    targetUp = $('#collection');
    targetDown = $('#footer');
  } else if (lastScrollTop > div4y) {
    targetUp = $('#footer');
    targetDown = $('#footer');
  } // end else if
  // condition: determine which of targetUp or targetDown to scroll to, based on scrollDirection:
  if (scrollDirection === 'down') {
    targetElement = targetDown;

  } else if (scrollDirection === 'up') {
    targetElement = targetUp;
  } // end else if
  // scroll smoothly to the target element:

  scrollThere(targetElement, 1000);

}); // end on mousewheel event
//--- END SCROLL EVENTS ---//