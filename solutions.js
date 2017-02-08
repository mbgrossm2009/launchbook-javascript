// Exercise: Find the top navbar, using a query for the HTML element type. The navbar's type is `<nav>`.
document.getElementsByTagName('nav')[0];
// Exercise: Find the sidebar on the left by using its id.
document.getElementById('sidebar-left');
// Exercise: Find the 'Pages' and 'Groups' sections of the sidebar by using their class.

// Exercise: Find all of the comments on the page.
document.getElementsByClassName('comments');
// Exercise: Find the first comment on the page.
document.getElementsByClassName('comments')[0];
// Exercise: Find the last comment on the page.
let comments = document.getElementsByClassName('comments');
let lastCommentIndex = comments.length - 1;
comments[lastCommentIndex];
// Exercise: Find the fourth comment on the page. Make sure you grab the fourth *comment* rather than the fourth *block* of comments. You may need more than one line of code!
let comments = document.getElementsByClassName('comments');
comments[3];
// Exercise: Find one of the ads in the sidebar and hide them.

let ad = document.getElementsByClassName('ad-slot')[0]
ad.style.visibility = 'hidden';

// Exercise: Set the visibility on the ad that you hid in the previous exercise to make it visible again.
let ad = document.getElementsByClassName('ad-slot')[0]
ad.style.visibility = 'visible';
// Exercise: Use `setAttribute` to change `src` attribute of one of the ads in the sidebar.
let adSlot = document.getElementsByClassName('ad-slot')[0];
let src = adSlot.getElementsByTagName("img")[0];
src.setAttribute('src', 'http://placebear.com/200/300');

// Exercise: Find Sam's post and change its text to something incredible.
let posts = document.getElementsByClassName('media-body')[8];
let samsPost = posts.getElementsByTagName('p')[0];
samsPost.innerHTML = "SOMETHING INCREDIBLE";
// Exercise: Find the first post and add the `.post-liked` class to it.
let post = document.getElementsByClassName('post')[0];
post.className = post.className + 'post-liked'
// Exercise: Find the second post and remove the `.post-liked` class.
let post = document.getElementsByClassName('post')[1];
post.classList.remove('post-liked');
