const CORS_PROXY_URL = "/api/";


export const IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

export const IMG__MENU_ITEM_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

export const API_URL4 =
  CORS_PROXY_URL +
" https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.9079413&lng=78.07660360000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

  export const API_URL3 =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.9079413&lng=78.07660360000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

// export const API_URL3 =
//   CORS_PROXY_URL +
//   "/dapi/restaurants/list/v5?sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING&";

export const API_URL = "https://corsproxy.org/?" +
encodeURIComponent(
  "https://www.swiggy.com/dapi/restaurants/list/v5?"
);

export const API_URL2 =
  CORS_PROXY_URL +
  "dapi/restaurants/list/v5?lat=20.351841&lng=85.805154&page_type=DESKTOP_WEB_LISTING";

// export const FETCH_MENU_URL =
//   CORS_PROXY_URL + "dapi/menu/v4/full?lat=20.351841&lng=85.805154&menuId=";

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=tr?ue&lat=27.9079413&lng=78.07660360000001&restaurantId=104170&catalog_qa=undefined&submitAction=ENTER

export const FETCH_MENU_URL =
"https://corsproxy.org/?" +
encodeURIComponent(
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="
);

export const SEARCH_API_URL = " "

/* Mock FAQ */
export const FAQ = [
  {
    id: 473,
    title: "Can I edit my order?",
    description:
      "Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents",
  },
  {
    id: 474,
    title: "I want to cancel my order",
    description:
      "We will do our best to accommodate your request if the order is not placed to the restaurant (Customer service number:  080-67466729). Please note that we will have a right to charge a cancellation fee up to full order value to compensate our restaurant and delivery partners if your order has been confirmed.",
  },
  {
    id: 475,
    title: "Will Insta Food be accountable for quality/quantity? ",
    description:
      "Quantity and quality of the food is the restaurants' responsibility. However in case of issues with the quality or quantity, kindly submit your feedback and we will pass it on to the restaurant.",
  },
  {
    id: 476,
    title: "Is there a minimum order value?",
    description:
      "We have no minimum order value and you can order for any amount. ",
  },
  {
    id: 477,
    title: "Do you charge for delivery?",
    description:
      "Delivery fee varies from city to city and is applicable if order value is below a certain amount. Additionally, certain restaurants might have fixed delivery fees. Delivery fee (if any) is specified on the 'Review Order' page. ",
  },
  {
    id: 478,
    title: "How long do you take to deliver?",
    description:
      "Standard delivery times vary by the location selected and prevailing conditions. Once you select your location, an estimated delivery time is mentioned for each restaurant.",
  },
  {
    id: 479,
    title: "What are your delivery hours?",
    description:
      "Our delivery hours vary for different locations and depends on availability of supply from restaurant partners.",
  },
  {
    id: 481,
    title: "Is single order from many restaurants possible?",
    description:
      "We currently do not support this functionality. However, you can place orders for individual items from different restaurants.",
  },
];
