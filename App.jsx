
import "./App.css";
 
import logo from "./assets/logo.svg";
import picture from "./assets/profile_picture.jpg";
import picture1 from "./assets/all-encores.jpg";
import picture2 from "./assets/articulation.jpg";
import picture3 from "./assets/blurred.jpg";
import picture4 from "./assets/encores-2.jpg";
import picture5 from "./assets/eulogy-for-evolution.jpg";
import picture6 from "./assets/facebook-icon.png";
import logo1 from "./assets/instagram-icon.svg";
import picture7 from "./assets/the-cell.jpg";
import logo2 from "./assets/twitter-icon.svg";
 
// Navigation links
function Navigation() {
  return (
<nav className="navigation" aria-label="Main navigation">
<a href="#blog">Our Blog</a>
<a href="#artists">Our Artists</a>
<a href="#story">Our Story</a>
</nav>
  );
}
 
// Header
function Header() {
  return (
<header className="site-header">
<img src={logo} alt="Erased Tapes logo" />
<Navigation />
</header>
  );
}
 
// Article introduction
function ArticleIntro() {
  return (
<section className="article-intro">
<h1>Erased Tapes Records music label.</h1>
 
      <p className="subtitle">
        A blog post about the Erased Tapes Records music label.
</p>
 
      <p className="lead">
        Lorem ipsum odor amet, consectetuer adipiscing elit.
        Mi eu scelerisque turpis posuere tempor?
        Leo condimentum himenaeos molestie elit;
        maximus iaculis proin nulla.
        Ullamcorper nibh cras conubia suscipit dapibus
        sagittis, facilisi habitant vivamus.
</p>
</section>
  );
}
 
// Main article content
function ArticleContent() {
  return (
<section className="article-content">
<h2>Heading</h2>
 
      <p>
        Montes ridiculus mus tellus nunc vulputate.
        Cras facilisi congue et facilisis porttitor
        litora etiam praesent porttitor.
        Sollicitudin cubilia scelerisque diam taciti lacus.
        Dapibus penatibus augue dapibus sagittis;
        rhoncus accumsan.
        Accumsan urna et, ultrices placerat justo rutrum.
        Tristique mattis ante cras accumsan convallis
        phasellus fermentum magna.
</p>
 
      <p>
        Laoreet volutpat hendrerit est aliquam;
        fusce quam tempor.
        Nisi interdum praesent pellentesque non non
        blandit cubilia et.
        Aptent maximus vehicula nullam odio tempor.
        Placerat dis facilisis potenti iaculis,
        primis vivamus nec at magnis.
</p>
 
      <p>
        Curae habitasse elementum amet nunc, natoque at.
        Tortor vel blandit sociosqu auctor aliquam
        maximus porta feugiat.
        Eros phasellus platea mauris condimentum
        natoque hendrerit tellus id.
        Ex imperdiet vitae maximus adipiscing neque
        quam tempor orci.
</p>
 
      <p>
        Parturient habitasse facilisis purus donec,
        enim platea maximus.
        Primis class varius augue sed class ultricies.
        Posuere curabitur tristique penatibus montes
        hac ac imperdiet.
        Risus per sociosqu, cursus leo condimentum
        ac fringilla.
</p>
 
      <h2>Heading</h2>
 
      <p>
        Habitasse ornare fames facilisis montes
        pulvinar habitasse fringilla.
        Risus porta cursus duis vivamus quam
        adipiscing nec.
        Ante at posuere eget aptent natoque
        vivamus ante.
        Aenean enim dapibus viverra sem efficitur.
</p>
 
      <p>
        Amet ac leo, imperdiet hac litora auctor.
        Suscipit congue duis sociosqu auctor
        euismod vivamus urna diam.
        Nunc enim himenaeos litora facilisi,
        tincidunt torquent.
        Eros sapien laoreet duis, volutpat
        rutrum pulvinar.
</p>
 
      <p>
        Magnis maximus morbi, litora accumsan
        vivamus facilisi etiam pharetra.
        Platea congue orci sagittis purus scelerisque.
        Velit taciti maecenas praesent nam
        lobortis metus vehicula habitasse porttitor.
</p>
 
      <h2>Heading</h2>
 
      <p>
        Vulputate nullam tempus montes eu tellus
        integer adipiscing.
        Pharetra eu luctus id a potenti.
        Pulvinar egestas conubia ante varius
        lobortis iaculis metus.
        Netus sem imperdiet hendrerit vehicula
        netus est gravida tortor.
</p>
 
      <p>
        Ad venenatis sapien habitant posuere
        donec porttitor vel nisi.
        Sodales laoreet donec diam rhoncus
        lectus euismod orci torquent curae.
        Fames rhoncus torquent sed convallis;
        potenti cras.
</p>
</section>
  );
}
 
// Blog article
function BlogArticle() {
  return (
<article id="blog" className="blog-article">
<ArticleIntro />
<ArticleContent />
</article>
  );
}
 
// Album gallery
function AlbumGallery() {
  const albums = [
    { id: 1, image: picture1, alt: "All Encores album" },
    { id: 2, image: picture2, alt: "Articulation album" },
    { id: 3, image: picture3, alt: "Blurred album" },
    { id: 4, image: picture4, alt: "Encores 2 album" },
  ];
 
  return (
<section
      id="artists"
      className="album-gallery"
      aria-label="Album gallery"
>
<img
        src={picture5}
        alt="Eulogy for Evolution album"
        className="featured-album"
      />
 
      <div className="small-albums">
        {albums.map((album) => (
<img
            key={album.id}
            src={album.image}
            alt={album.alt}
            className="album"
          />
        ))}
</div>
 
      <img
        src={picture7}
        alt="The Cell album"
        className="album"
      />
</section>
  );
}
 
// Social media icons
function SocialIcons() {
  return (
<div
      className="social-icons"
      aria-label="Social media icons"
>
<img src={picture6} alt="Facebook" />
<img src={logo1} alt="Instagram" />
<img src={logo2} alt="Twitter" />
</div>
  );
}
 
// Author information
function Author() {
  return (
<section id="story" className="author-section">
<div className="author-details">
<h2>The Author</h2>
 
        <p>
          Sapien leo scelerisque per convallis
          torquent nunc.
          Lobortis eleifend a nam sit turpis nostra.
          Tempus suspendisse libero curae
          faucibus lobortis litora bibendum praesent!
          Eget quam magna, diam commodo
          interdum sapien magnis.
</p>
</div>
 
      <img
        className="author-photo"
        src={picture}
        alt="Portrait of the blog author"
      />
 
      <SocialIcons />
</section>
  );
}
 
// Comments data
const comments = [
  {
    id: 1,
    name: "Music Lover",
    text:
      "This article beautifully captures the essence of experimental sound. Erased Tapes is truly pushing boundaries. Makes me want to revisit Nils Frahm's early work.",
  },
  {
    id: 2,
    name: "Ted Baker",
    text:
      "I've been following the label for years—so glad someone's finally writing about their impact.",
  },
  {
    id: 3,
    name: "Queen_of_noise",
    text:
      "I discovered Erased Tapes through Ólafur Arnalds. This article brought back memories of listening together with my friends.",
  },
];
 
// Comments section
function Comments() {
  return (
<section className="comments-section">
<h2>Comments</h2>
 
      {comments.map((comment) => (
<div className="comment" key={comment.id}>
<h3>{comment.name}</h3>
<p>{comment.text}</p>
</div>
      ))}
</section>
  );
}
 
// Footer
function Footer() {
  return (
<footer className="site-footer">
<Navigation />
 
      <p>Copyright © 2023 Erased Disks Ltd.</p>
 
      <SocialIcons />
</footer>
  );
}
 
// Main React component
function App() {
  return (
<div className="app">
<Header />
 
      <main className="main-container">
<BlogArticle />
<AlbumGallery />
<Author />
<Comments />
</main>
 
      <Footer />
</div>
  );
}
 
export default App;