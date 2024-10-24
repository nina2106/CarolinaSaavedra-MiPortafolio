import React from 'react';
import myGif from '../assets/imagen/fondo.jpg'; // Asegúrate de que esta ruta sea correcta

const Services = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-10 min-h-screen">
      {/* GIF como fondo */}
      <img
        src={myGif}
        alt="Background GIF"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Contenedor principal para título y servicios */}
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="p-8 rounded-lg shadow-lg text-center mb-10 text-9xl font-bold text-blue-200 drop-shadow-lg">
          Servicios
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'FrontEnd React Redux',
              description: 'Descripción de servicios para desarrollo FrontEnd con React y Redux',
              imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8OAVUQ6tQ3YovYIruW0A4xz6-DawP_uFX8g&s',
            },
            {
              title: 'JavaScript',
              description: 'Desarrollo con JavaScript, incluyendo ES6+ y frameworks modernos.',
              imageUrl: 'https://cdn.vectorstock.com/i/500p/93/15/html5-css3-js-icon-set-web-development-logo-vector-29309315.jpg',
            },
            {
              title: 'React Native',
              description: 'Desarrollo de aplicaciones móviles con React Native para Android y iOS.',
              imageUrl: 'data:image/png;base64,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',
            },
            {
              title: 'Aplicaciones Web Personalizadas',
              description: 'Soluciones web a medida según las necesidades del cliente.',
              imageUrl: 'https://info.netcommerce.mx/wp-content/uploads/2023/10/Blog-29.png',
            },
            {
              title: 'Figma',
              description: 'Diseño de interfaces de usuario y prototipos en Figma.',
              imageUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPcAAADMCAMAAACY78UPAAABOFBMVEUDARyiWf//cmLyTh4Kz4MavP4AAADyTBr5YUWmW/8K1IYAABn/dmUDABQAABv6UR5tIx1zMzXqTzdpOqipTf8A1ncHhlnlZlsbxP8bwf8DABAK2IgavP/2bmDTXlXIQB6iNB3IWVEAAAkVk8ppKpymVP9tkf8Wm9UThbgIqnBTGxxwLCpYJy4VBxyYMR3YRh6gSESzUEtjIBxoLjQrDhweCRx6Jx2BOTuwOR27PB2rTEeEKx3pSx5TGACSLADAPAfnW0rne3XOVUihOStDJXN1QsNdN64ALk8JTnNWL40KQWEOY40XDDOPTuIFGTIrGE4Aao5rZdJsgO4WmtV0QLsMBieUUeoYrOkYBTOEO8+UQugQcZ4AICMAp2AAv20Ai1IFQzYJv3sEGCMFV0EGc1AGXUQEMy4EHSgEZ/N9AAAEJElEQVR4nO3bDVcTRxTG8Q2SgWR2Nlpq2J3FVhdtEgq+1XdthVYLEoG+gGm1FQMC3/8bdJcEdJO5cw4pbc7cfX6fIP9z786GiXoeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwOgCmRcE4/5E/42Fi3nfXspbDJTklr5081Zt0LQ/aPb2kmJV/qhWuzBoanpiiO/f8eS4P+y5WXg2XG3uTsuvLHIJv2uqprrT8u/UuD/xuSCyye40nMPE75mrLd0TE/cYHG5fT529+yv3N/0iseXWbv+S85tOjtvW7f7A75Pjtnb79x1/wh+M2P3Q8UV/NGL3Hce76cfb2u38A47uYnU/HrH7muPdN0c81247fq4tjNi96Pj72yOz7Xvu+Jp73tWRvp8/cXzNPcvAbfNmcLVKflOlu53/lnrs8ZnvW1x/ifXdOuP92iyDLT9mnjjR7V/j8+PB0wuGcmO3P/GQ0y8HS1ef1WpTA6b9wWj/ypMlDkfaJ0Hy/Q/Pv8hbnj2xvLy8srLy4093E07DTquFePHyTSmv8rNQGSFWm50wiqKwM78mxLg/6zlS4lWpUikNds9kjYFYb4RRuSdNbwseL7FU8npjKPqkW4rmafWxsLOZjPsDnw+xVTJlH3cr3clVZzMvr7LY9WTLFN3rlmooO7PKYOJyxzjsXreYN2WXywx+AxcvLd3t0JgdzTu/6XqLys66jdXZ4baux/3B/yV63KXK9V/MW85g4FKT2Wl3g5p3OdJuP+HJK0v3TDRHdrfdPtLFNt1d+pVa87S76faiWx7v0o3fLN2OP+Bigx73jW8s3b8XtLvheHdR93ymmOda8sL6HiO7wzW3v7AFgh53+r2FDnd73NYXeGVmzfxniftr7nnqte3vko45ey7adP6yiT7Z0u5188DDd66PO3vCjZdrvW7RNIWnL28Gt8lqx3y9lnUHwnC0RWX3tzyjd96Q94pyeOJRx3P7HXZKJdvDt+f9e+RAtKPPRx6FzYTFtDNSbG1Qvxt4YrM510+PoqixLty+ccjT4o/rf779Mm+7d2or4bXnO1EYdhrvNgWTHe+T+q/63+8v5+2eLLRMRB+bFe/RH1pxtTqZV60zqxwk1W48GF2Abim7hmr23XJv0pjNvVuZp829W9djczbv7mCPmDbzbl0vaDdVzbtb7lNPN+9uRa85627dQje6C979kW+37VyL9zndrOTJA/o9NnnE4LaYEtDz7vK6UsqjH/CY8eOdLvohueicx00PPD7gPO6U7Jqyqy3e48423ZTdZT7tlDocumCrtrj81zgbudfNHW7VeFcXIDt9ieuD7ukNejVufeD+bJ9Sen+3G2e69UPH/63x2Uit1dHRXqJVkap7giKcZgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPB/+Qd934IACS+26QAAAABJRU5ErkJggg==',
            },
            {
              title: 'Flutter',
              description: 'Desarrollo de aplicaciones móviles con Flutter.',
              imageUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQoAAAC+CAMAAAD6ObEsAAAAjVBMVEX///9E0f10dHRsbGwIWJwfvP1vb29ycnKBgYHFxcX7+/u6urp2dnbY2Njc3Nw4z/31/f/S0tJQ1P309PQaXZ6srKylpaVoaGjT09OQkJC0tLQAUJhy2v3AwMCKioo/w/3n5+d+fn5Ke69p2P3u+v82bqjs7Oyenp6VlZWA4f8er/BhiLU/xf9DdqxUgbLHI19CAAAEiklEQVR4nO3ZbXubNhiGYSrFkg2ya4faMnQQvLV2mrX7/z9vjwAh/BLArIBz7D4/NIFAYq4DkKCeBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/d+vlT3R9Tf57prJ8/10J8/mvqzzMdlLBQwkIJCyUslLBQwkIJCyWsixJtc8zgXBzSuiQIVmN81IHdWcIT53RG6w5cL4b/pEO7t4THmGLyIsWcicYUfhiGtaVjfelh3F2CUrBot63szFG1pdhoLtzSUnP+eC3uL0Ep+NV9oS3FnjPllpacyYdL0aOESbG8XPfxU/Qp0SvF5tFT9CrxG86KFaXwL7a4fSP1RyrWr0RjikUc134Wx3FGX4I4OEmlAlpcmE2CnVRsS0tJuV22VZxzESXVnoskoQgBrR5lkO5ZojFFyvnWreUiPxAlBJWgfwWfe17Eq6VDsdlJCxqfaYTmYl/uqbjOjopOJSUSb3B9SzSmiKSI3VrJ+MYzx9WYIhVKck0ngFDMngMHxjMlJZ0revgUvUvckUIUKZIkMRcIfQnMBRIk5gIJkjjId3kVikdmdD5uOWP5hM2kYKnk0Wa1DAa/QG6XMG+8n53bfZrmFTdTeNe3TVWNIAlXPLDrBZPz/LsDXS/V6mF9e6dElydUmm0e0krx0d9JoWyKy8G0SuEzJk7VDzbUxZxxPqWo/6IhnaW4r0T+DFKRMl/XOwUdvKgNmCmTJgylqG8/rNph31nCpBDcyddVI8i9KU5SupOCLhfBzL3UV0zs/vMxdlUdeHXH7Pr+hk7pYOXk66oUrFuKarY5N892zqvMf2JSjPjQX7a4u0TjbfM8BW9N4Zv5RO3lBw00vEhh9xxF3qK6Ol5eOpZonmLdm+LiajMTiTC/V4yawrRwJWazl24lfvdZwfeef8Yb/6ygAJ9qJWazn93mW91T6C73ilsz66LQqNbll7yEbdE282yZYrlnkGP7WWFGkOj6T4x/VpRsieIaaZ2DN6WgI0urlbEbQd59dWMmVZn7SVaMG1OlcCVMi/ankaYUgVDazphCrupnBXNbL2vzKppMzWu/RytzYUyU4lutBLX40brD7RQ8T5FpZU/40MwY7QHRwdd2ymjJ3go2Wom07BLOpdJms6lS1EvM3v5u3aEphUcHI9Kl7x0XQko3JIZascPeD4tbpC+o0sYPAzNanGjqKYLM97JYyvLR7BEukLcvX/9s274xRabNM6XWXDC9itwBnUS+urxhbHm+JPK3eq908YhiF6aL8Wf0eYXlWrw9PT21tqBZ0FUK979jK3NE9JjG2cqbc10dUEoHrGT53sqLeP5QV7zgDLiQZhfBD/YXs9qeo7ItTIn2FovF4url62a/ycpvw3guBEtNmeVicXS7pTSv3rklKaqn8zCJmDxEWzeJpb+ReZMoWhQlOpwXffkNSw/DtLAlBmzxIax/uhL/+xbfv6JFyUeLykWLX1N/nimhhYMWzvrXl5qnf6b+PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPDB/AtGaFW8KOrN7gAAAABJRU5ErkJggg==',
            },
            {
              title: 'MySQL',
              description: 'Desarrollo de bases de datos relacionales utilizando MySQL, optimización de consultas y gestión de datos.',
              imageUrl: 'https://logodix.com/logo/840740.jpg',
            },
            {
              title: 'Firebase',
              description: 'Plataforma para el desarrollo de aplicaciones móviles y web que proporciona servicios como autenticación, bases de datos en tiempo real y almacenamiento en la nube.',
              imageUrl: 'data:image/png;base64,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',
            },
            
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 text-center  rounded-lg shadow-lg"
            >
              {/* Mostrar imagen del servicio */}
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-40 object-cover rounded-lg mb-1" 
              />
              <h3 className="mb-4 text-3xl text-pink-500 font-semibold">{service.title}</h3>
              <p className="text-white">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

