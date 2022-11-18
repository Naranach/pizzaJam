const pageLoad=(()=>{
    const contentContainer=document.querySelector("#content");
    const header=document.createElement("header");
    header.innerHTML = `
    <nav>
    <h2> Pizza Jam</h2>
     <a href="#" class="pizza">
    <span class="line line1"></span>
    <span class="line line2"></span>
    <span class="line line3"></span>
    <span class="line line4"></span>
  </a>
        
  <ul class="links">
  <li data-tab-target="#home" class="tab red">Ana Sayfa</li>
  <li data-tab-target="#menu" class="tab">Pizzalarımız</li>
  <li data-tab-target="#snacks" class="tab">Atıştırmalık ve İçecekler</li>
  <li data-tab-target="#contact" class="tab">İletişim</li>
</ul>
        </nav>`;
  
      contentContainer.appendChild(header)
  })();