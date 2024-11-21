let serviceHtml = '';

serviceHtml += `<div class="hi-prev"></div>
    <div class="hi-next"></div>`;
service.forEach((service) => {
  serviceHtml += `<div class="slide hi-slide">
    
    <ul>
      <li><img src="${service.img}" alt="Img 1">
        <h1>${service.title}</h1>
        <p>${service.detail}</p>
      </li>
    </ul>
  </div>`;
});

      document.querySelector('.service-list').innerHTML = serviceHtml;