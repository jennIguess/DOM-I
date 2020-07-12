const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])











const Links = document.getElementsByTagName('a')
Links[0].textContent = "Services"
Links[1].textContent = "Product"
Links[2].textContent = "Vision"
Links[3].textContent = "Features"
Links[4].textContent = "About"
Links[5].textContent = "Contact"


const headImage = document.getElementById('cta-img');
headImage.src = "http://127.0.0.1:5500/img/header-img.png"

const AwesomeTxt = document.querySelector('h1')
AwesomeTxt.textContent = "DOM IS AWESOME"


const buttonTxt = document.querySelector('button')

buttonTxt.textContent = "Get Started"



const titles = document.getElementsByTagName('h4')
titles[0].textContent = "Services"
titles[1].textContent = "Features"
titles[2].textContent = "About"
titles[3].textContent = "Product"
titles[4].textContent = "Vision"
titles[5].textContent = "Contact"

const paragraphs = document.getElementsByTagName('p')
paragraphs[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

paragraphs[1].textContent ="About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

paragraphs[2].textContent =  "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

paragraphs[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

paragraphs[4].textContent ="Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

paragraphs[5].textContent = "123 Way 456 Street, Somewhere, USA"

paragraphs[6].textContent = "1 (888) 888-8888"

paragraphs[7].textContent = "sales@greatidea.io"

const MidImage = document.getElementById('middle-img')
MidImage.src = "http://127.0.0.1:5500/img/mid-page-accent.jpg"

const FootTxt = document.querySelector('footer')
FootTxt.textContent = "Copyright Great Idea! 2018"



const newNav = document.createElement('a')
newNav.textContent = "Jennifer"
const anotherNav = document.createElement('a')
anotherNav.textContent = "Vega"

const parentElement = document.querySelector('nav')

parentElement.appendChild(newNav)
parentElement.appendChild(anotherNav)

const newColor = document.querySelectorAll('a')
newColor.forEach(a => {
  newColor.color = "green";
})



console.log("hello im working!");