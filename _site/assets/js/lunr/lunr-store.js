<!doctype html>
<!--
  Minimal Mistakes Jekyll Theme 4.19.2 by Michael Rose
  Copyright 2013-2019 Michael Rose - mademistakes.com | @mmistakes
  Free for personal and commercial use under the MIT license
  https://github.com/mmistakes/minimal-mistakes/blob/master/LICENSE
-->
<html lang="en" class="no-js">
  <head>
    <meta charset="utf-8">

<!-- begin _includes/seo.html --><title>Navneet</title>
<meta name="description" content="var store = [{         “title”: “Python code to extract BBox: OpenCV”,         “excerpt”:”Python Code PyTorch Draw bbox while reading image in PIL-Image and display contents in iPython notebook import segments from PIL import Image, ImageDraw import PIL import matplotlib.pyplot as plt %matplotlib inline pil_img = Image.open(act_img_path) img_draw = ImageDraw.Draw(pil_img) img_draw.rectangle((xmin, ymin, xmax, ymax), outline=’red’) box = (xmin, ymin, xmax, ymax) cropped_image =…”,”categories”: [],         “tags”: [“opencv”,”python”],         “url”: “http://localhost:4000/dlopencv/”,         “teaser”: null       },{         “title”: “Medical Prognosis”,         “excerpt”:”Prognosis Prognosis- Predicting risk of future event. event count be Death; Heart Attack; Stroke Concordant pair - In general when the patient with the worst outcome has the higher risk score, this pair is called concordant. Not ture for the outcome with same result. It should be different to perform…”,”categories”: [],         “tags”: [“UNet”,”PyTorch”],         “url”: “http://localhost:4000/medical/”,         “teaser”: null       },{         “title”: “Medical Diagnosis”,         “excerpt”:”Medical Diagnosis Dermatalogy - Deals with skin diseases Opthalmology - Deals with diagnoses and treatment of eye disorders. Histopathology - Medical speciality involving examining of tissue under the microscope. [study involves is to check the cancer spread] Evaluations Evaluation Metrics: How good is a model : \(Accuracy = \dfrac{Examples\ correctly…”,”categories”: [],         “tags”: [“UNet”,”PyTorch”],         “url”: “http://localhost:4000/medical2/”,         “teaser”: null       }] ">


  <meta name="author" content="Navneet">


<meta property="og:type" content="website">
<meta property="og:locale" content="en_US">
<meta property="og:site_name" content="Navneet">
<meta property="og:title" content="Navneet">
<meta property="og:url" content="http://localhost:4000/assets/js/lunr/lunr-store.js">


  <meta property="og:description" content="var store = [{         “title”: “Python code to extract BBox: OpenCV”,         “excerpt”:”Python Code PyTorch Draw bbox while reading image in PIL-Image and display contents in iPython notebook import segments from PIL import Image, ImageDraw import PIL import matplotlib.pyplot as plt %matplotlib inline pil_img = Image.open(act_img_path) img_draw = ImageDraw.Draw(pil_img) img_draw.rectangle((xmin, ymin, xmax, ymax), outline=’red’) box = (xmin, ymin, xmax, ymax) cropped_image =…”,”categories”: [],         “tags”: [“opencv”,”python”],         “url”: “http://localhost:4000/dlopencv/”,         “teaser”: null       },{         “title”: “Medical Prognosis”,         “excerpt”:”Prognosis Prognosis- Predicting risk of future event. event count be Death; Heart Attack; Stroke Concordant pair - In general when the patient with the worst outcome has the higher risk score, this pair is called concordant. Not ture for the outcome with same result. It should be different to perform…”,”categories”: [],         “tags”: [“UNet”,”PyTorch”],         “url”: “http://localhost:4000/medical/”,         “teaser”: null       },{         “title”: “Medical Diagnosis”,         “excerpt”:”Medical Diagnosis Dermatalogy - Deals with skin diseases Opthalmology - Deals with diagnoses and treatment of eye disorders. Histopathology - Medical speciality involving examining of tissue under the microscope. [study involves is to check the cancer spread] Evaluations Evaluation Metrics: How good is a model : \(Accuracy = \dfrac{Examples\ correctly…”,”categories”: [],         “tags”: [“UNet”,”PyTorch”],         “url”: “http://localhost:4000/medical2/”,         “teaser”: null       }] ">











  

  


<link rel="canonical" href="http://localhost:4000/assets/js/lunr/lunr-store.js">




<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    
      "@type": "Person",
      "name": "Navneet",
      "url": "http://localhost:4000/"
    
  }
</script>






<!-- end _includes/seo.html -->


<link href="/feed.xml" type="application/atom+xml" rel="alternate" title="Navneet Feed">

<!-- https://t.co/dKP3o1e -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<script>
  document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '') + ' js ';
</script>

<!-- For all browsers -->
<link rel="stylesheet" href="/assets/css/main.css">

<!--[if IE]>
  <style>
    /* old IE unsupported flexbox fixes */
    .greedy-nav .site-title {
      padding-right: 3em;
    }
    .greedy-nav button {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
    }
  </style>
<![endif]-->



    <!-- start custom head snippets -->

<!-- insert favicons. use https://realfavicongenerator.net/ -->

<!-- end custom head snippets -->

  </head>

  <body class="layout--single">
    <nav class="skip-links">
  <h2 class="screen-reader-text">Skip links</h2>
  <ul>
    <li><a href="#site-nav" class="screen-reader-shortcut">Skip to primary navigation</a></li>
    <li><a href="#main" class="screen-reader-shortcut">Skip to content</a></li>
    <li><a href="#footer" class="screen-reader-shortcut">Skip to footer</a></li>
  </ul>
</nav>

    <!--[if lt IE 9]>
<div class="notice--danger align-center" style="margin: 0;">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience.</div>
<![endif]-->

    

<div class="masthead">
  <div class="masthead__inner-wrap">
    <div class="masthead__menu">
      <nav id="site-nav" class="greedy-nav">
        
        <a class="site-title" href="/">
          Navneet
          
        </a>
        <ul class="visible-links"><li class="masthead__menu-item">
              <a href="/about/">About</a>
            </li><li class="masthead__menu-item">
              <a href="/resume/">Résumé</a>
            </li><li class="masthead__menu-item">
              <a href="/projects/">Projects</a>
            </li><li class="masthead__menu-item">
              <a href="/deep-learning/">Deep Learning</a>
            </li><li class="masthead__menu-item">
              <a href=""></a>
            </li></ul>
        
        <button class="greedy-nav__toggle hidden" type="button">
          <span class="visually-hidden">Toggle menu</span>
          <div class="navicon"></div>
        </button>
        <ul class="hidden-links hidden"></ul>
      </nav>
    </div>
  </div>
</div>


    <div class="initial-content">
      



<div id="main" role="main">
  
  <div class="sidebar sticky">
  


<div itemscope itemtype="https://schema.org/Person">

  
    <div class="author__avatar">
      
        <img src="/assets/images/elipticle_face.png" alt="Navneet" itemprop="image">
      
    </div>
  

  <div class="author__content">
    
      <h3 class="author__name" itemprop="name">Navneet</h3>
    
    
      <div class="author__bio" itemprop="description">
        <p>Research Scientist</p>

      </div>
    
  </div>

  <div class="author__urls-wrapper">
    <button class="btn btn--inverse">Follow</button>
    <ul class="author__urls social-icons">
      
        <li itemprop="homeLocation" itemscope itemtype="https://schema.org/Place">
          <i class="fas fa-fw fa-map-marker-alt" aria-hidden="true"></i> <span itemprop="name">Bengaluru, IN</span>
        </li>
      

      
        
          
        
          
        
          
        
          
        
          
        
          
        
      

      

      
        <li>
          <a href="mailto:navneet1083@gmail.com">
            <meta itemprop="email" content="navneet1083@gmail.com" />
            <i class="fas fa-fw fa-envelope-square" aria-hidden="true"></i><span class="label">Email</span>
          </a>
        </li>
      

      

      

      

      
        <li>
          <a href="https://www.linkedin.com/in/navneet1083" itemprop="sameAs" rel="nofollow noopener noreferrer">
            <i class="fab fa-fw fa-linkedin" aria-hidden="true"></i><span class="label">LinkedIn</span>
          </a>
        </li>
      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      <!--
  <li>
    <a href="http://link-to-whatever-social-network.com/user/" itemprop="sameAs" rel="nofollow noopener noreferrer">
      <i class="fas fa-fw" aria-hidden="true"></i> Custom Social Profile Link
    </a>
  </li>
-->
    </ul>
  </div>
</div>

  
  </div>



  <article class="page" itemscope itemtype="https://schema.org/CreativeWork">
    
    <meta itemprop="description" content="var store = [{        “title”: “Python code to extract BBox: OpenCV”,        “excerpt”:”Python Code PyTorch Draw bbox while reading image in PIL-Image and display contents in iPython notebook import segments from PIL import Image, ImageDraw import PIL import matplotlib.pyplot as plt %matplotlib inline pil_img = Image.open(act_img_path) img_draw = ImageDraw.Draw(pil_img) img_draw.rectangle((xmin, ymin, xmax, ymax), outline=’red’) box = (xmin, ymin, xmax, ymax) cropped_image =…”,”categories”: [],        “tags”: [“opencv”,”python”],        “url”: “http://localhost:4000/dlopencv/”,        “teaser”: null      },{        “title”: “Medical Prognosis”,        “excerpt”:”Prognosis Prognosis- Predicting risk of future event. event count be Death; Heart Attack; Stroke Concordant pair - In general when the patient with the worst outcome has the higher risk score, this pair is called concordant. Not ture for the outcome with same result. It should be different to perform…”,”categories”: [],        “tags”: [“UNet”,”PyTorch”],        “url”: “http://localhost:4000/medical/”,        “teaser”: null      },{        “title”: “Medical Diagnosis”,        “excerpt”:”Medical Diagnosis Dermatalogy - Deals with skin diseases Opthalmology - Deals with diagnoses and treatment of eye disorders. Histopathology - Medical speciality involving examining of tissue under the microscope. [study involves is to check the cancer spread] Evaluations Evaluation Metrics: How good is a model : \(Accuracy = \dfrac{Examples\ correctly…”,”categories”: [],        “tags”: [“UNet”,”PyTorch”],        “url”: “http://localhost:4000/medical2/”,        “teaser”: null      }]">
    
    

    <div class="page__inner-wrap">
      
        <header>
          
          
        </header>
      

      <section class="page__content" itemprop="text">
        
        var store = [{
        "title": "Python code to extract BBox: OpenCV",
        "excerpt":"Python Code PyTorch Draw bbox while reading image in PIL-Image and display contents in iPython notebook import segments from PIL import Image, ImageDraw import PIL import matplotlib.pyplot as plt %matplotlib inline pil_img = Image.open(act_img_path) img_draw = ImageDraw.Draw(pil_img) img_draw.rectangle((xmin, ymin, xmax, ymax), outline='red') box = (xmin, ymin, xmax, ymax) cropped_image =...","categories": [],
        "tags": ["opencv","python"],
        "url": "http://localhost:4000/dlopencv/",
        "teaser": null
      },{
        "title": "Medical Prognosis",
        "excerpt":"Prognosis Prognosis- Predicting risk of future event. event count be Death; Heart Attack; Stroke Concordant pair - In general when the patient with the worst outcome has the higher risk score, this pair is called concordant. Not ture for the outcome with same result. It should be different to perform...","categories": [],
        "tags": ["UNet","PyTorch"],
        "url": "http://localhost:4000/medical/",
        "teaser": null
      },{
        "title": "Medical Diagnosis",
        "excerpt":"Medical Diagnosis Dermatalogy - Deals with skin diseases Opthalmology - Deals with diagnoses and treatment of eye disorders. Histopathology - Medical speciality involving examining of tissue under the microscope. [study involves is to check the cancer spread] Evaluations Evaluation Metrics: How good is a model : \\(Accuracy = \\dfrac{Examples\\ correctly...","categories": [],
        "tags": ["UNet","PyTorch"],
        "url": "http://localhost:4000/medical2/",
        "teaser": null
      }]

        
      </section>

      <footer class="page__meta">
        
        


        
      </footer>

      

      
    </div>

    
  </article>

  
  
</div>

    </div>

    

    <div id="footer" class="page__footer">
      <footer>
        <!-- start custom footer snippets -->

<!-- end custom footer snippets -->
        <div class="page__footer-follow">
  <ul class="social-icons">
    
<!--      <li><strong>Follow:</strong></li>-->
    

    
      
        
      
        
      
        
      
        
      
        
      
        
      
    

<!--    <li><a href="/feed.xml"><i class="fas fa-fw fa-rss-square" aria-hidden="true"></i> Feed</a></li>-->
  </ul>
</div>

<!--<div class="page__footer-copyright">&copy; 2020 Navneet. Powered by <a href="https://jekyllrb.com" rel="nofollow">Jekyll</a> &amp; <a href="https://mademistakes.com/work/minimal-mistakes-jekyll-theme/" rel="nofollow">Minimal Mistakes</a>.</div>-->
<div class="page__footer-copyright">&copy; 2020 Navneet.  </div>

      </footer>
    </div>

    
  <script src="/assets/js/main.min.js"></script>
  <script src="https://kit.fontawesome.com/4eee35f757.js"></script>












  </body>
</html>
