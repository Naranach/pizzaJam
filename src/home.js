const renderHomePage=(()=>{
    const contentContainer=document.querySelector("#content");
    const home=document.createElement("div");
    home.classList.add("tab-content")
    home.innerHTML=`<div id="home" class="active" data-tab-content>
    <div class="topic">
    <h1>Hayat Pizzasız Olmaz!</h1>
    <p>Lezzetimizle sizleri şaşırtmak bizim işimiz.</p>
    <div class="btn-container">
        <a data-tab-target="#menu" class="order-now">Pizzalarımıza hemen göz atın.</a>
    </div>
</div>
<div class="info">
    <div class="address">
        <span> <i class="fi-xnsuxl-map-marker-solid"></i></span>
        <p> Referans Başakşehir Vadi Konutları 5. Etap Referans Vadi Kat: -1 No: 69 Başakşehir/İstanbul</p>
    </div>
    <div class="hours">
        <span><i class="fi-cnsuhl-clock-solid"></i></span>
        <p>Haftanın her günü 11:30 - 02:00 arasında bekleriz.</p>
    </div>
</div>`;
contentContainer.appendChild(home);
})();

export{renderHomePage};