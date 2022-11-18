const renderSnacksPage=(()=>{
    const contentContainer = document.querySelector("#content");
    const snacks = document.createElement("div");
    snacks.setAttribute("id", "snacks");
    snacks.setAttribute("data-tab-content", "");
    snacks.innerHTML = `
    <div class="topic">
    <h1>Atıştırmalıklar Ve İçecekler</h1>
</div>
<div class="snacks-container">
    <div class="snacks-item">
        <img src="./images/patates.jpg" alt="">
        <div class="item-content">
            <h4>Patates Kızartması <span>25.00 ₺</span></h4>
            <p> Enfes Patates Kızartması </p>
            
        </div>
    </div>
    <div class="snacks-item">
        <img src="./images/soğan.png" alt="">
        <div class="item-content">
            <h4>Soğan Halkası (8'li) <span>  20.00 ₺</span></h4>
            <p> Çıtır Soğan Halkaları </p>

        </div>
    </div>
    <div class="snacks-item">
        <img src="./images/sufle.png" alt="">
        <div class="item-content">
            <h4>Sufle<span>25.00 ₺</span></h4>
            <p> Akışkan Çikolatasıyla Nefis sufle</p>

            
        </div>
    </div>
    <div class="snacks-item">
        <img src="./images/pitost.jpg" alt="">
        <div class="item-content">
            <h4>Pitost <span> 35.00 ₺</span></h4>
            <p> Açlığınızı yatıştıracak sıcacık pitost </p>

        </div>
    </div>
    <div class="snacks-item">
        <img src="./images/pitost.jpg" alt="">
        <div class="item-content">
            <h4>VEJETERYAN PİTOST <span> 35.00 ₺</span></h4>
            <p> Açlığınızı yatıştıracak sıcacık Vejetaryen pitost </p>

        </div>
        </div>
        <div class="snacks-item">
            <img src="./images/çay.png" alt="">
            <div class="item-content">
                <h4>ÇAY<span> 5.00 ₺ </span></h4>
                <p> Beraber iki lafın belini kıralım </p>

            </div>
            </div>
            <div class="snacks-item">
                <img src="./images/kahve.png" alt="">
            <div class="item-content">
                <h4>Filtre Kahve <span> 25.00 ₺ </span></h4>
                <p> Yoğun bir günün ortasında sizi kendinize getirecek şey lezzetli bir filtre kahve</p>

                
            </div>
            </div>
            <div class="snacks-item">
                <img src="./images/kiraz.png" alt="">
            <div class="item-content">
                <h4>Kiraz Sapı Çayı  <span> 20.00 ₺</span></h4>
                <p> Kiraz sapı çayı ile detoksa başlayın ve sinirlerinizden arının.</p>

            </div>
            </div>
            <div class="snacks-item">
                <img src="./images/coca-cola.jpg" alt="">
            <div class="item-content">
                <h4>COCA COLA<span>15.00 ₺</span></h4>
                <p> Pizzanın yanında buzzz gibi bir coca cola </p>

            </div>
            </div>
            <div class="snacks-item">
                <img src="./images/icetea.jpg" alt="">
            <div class="item-content">
                <h4>İCE TEA<span>15.00 ₺ </span></h4>
                <p> Limonlu şeftatili mangolu aromalıyla sizi ferahlatacak</p>

            </div>
            </div>
            <div class="snacks-item">
                <img src="./images/sprite.png" alt="">
            <div class="item-content">
                <h4>Sprite  <span> 15.00 ₺ </h4>
                <p>Sprite</p>
                    
            </div>
            </div>
            <div class="snacks-item">
                <img src="./images/su.jpg" alt="">
            <div class="item-content">
                <h4>SU <span> 6.00 ₺ </span></h4>
                <p>
                   İsteğinize bağlı sıcak veya yaz günlerinde içinizi ferahlatıcak Buz Gibi soğuk su. 
                </p>
                </div>
                </div>
            
            
            
            
</div>`;

contentContainer.appendChild(snacks);
})();

export { renderSnacksPage };