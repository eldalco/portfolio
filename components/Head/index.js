import Head from "next/head";

const HeadComponent = () => {
  return (
    <Head>
      <title>Portafolio | Elkin Alfonso</title>
    <!-- Google tag (gtag.js) -->
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-TR84CS0ZMC"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-TR84CS0ZMC');
    </script>
    </Head>
  );
};

export default HeadComponent;
