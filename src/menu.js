const renderMenuPage=(()=>{
    const contentContainer = document.querySelector("#content");
    const menu = document.createElement("div");
    menu.setAttribute("id", "menu");
    menu.setAttribute("data-tab-content", "");
    menu.innerHTML = `
    <div class="topic">
    <h1>Menu</h1>
</div>
<div class="menu-container">
    <div class="menu-item">
        <img src="./images/margarita.png" alt="">
        <div class="item-content">
            <h4>Margarita <span> 30 CM Pizza 70.00 ₺</span></h4>
            <p>
                MARGARİTA
                İçindekiler: Domates Sos, Mozarella ve Pesto Sosu.
                <p>Yaygın bir inanışa göre Haziran 1889'da pizza ustası Raddaele Esposito, İtalya Kraliçesi ve İtalya'nın birleşmesi şerefine "Pizza Margherita" adını verdiği bir pizza icat etti.</p>
                
            </p>
        </div>
    </div>
    <div class="menu-item">
        <img src="./images/3peynirli.png" alt="">
        <div class="item-content">
            <h4>3 Peynirli <span> 30 CM Pizza 80.00 ₺</span></h4>
            <p>
                Üç Peynirli
                İçindekiler: Domates Sos, Mozorella, Rokfor ve Parmesan
                <p>Mozarella Rokfor Ve Parmesan peynirinin Muhteşem uyumu ile üç peynirli pizzamız.</p>
                
            </p>
        </div>
    </div>
    <div class="menu-item">
        <img src="./images/4peynirli.png" alt="">
        <div class="item-content">
            <h4>4 Peynirli <span>30 CM Pizza 90.00 ₺</span></h4>
            <p>
                Dört Peynirli
                İçindekiler: Domates Sos, Mozorella, Rokfor, Parmesan, İsli Peynir ve Pesto Sosu.
                <p>Mozarella, Rokfor, Parmesan ve İsli peynirinin Muhteşem uyumu ile Dört  peynirli pizzamız.</p>
                
            </p>
        </div>
    </div>
    <div class="menu-item">
        <img src="./images/roast.png" alt="">
        <div class="item-content">
        <h4>Roast Pizza<span> 30 CM Pizza 90.00 ₺</span></h4>
            <p>
                Roast Pizza
                İçindekiler: Domates sosu, Mozeralla , Roast Beef, Parmesan ve Roka
                <p>İçerdiği roast beef ile ağzınızı sulandıran roast pizza şimdi sizlerle.</p>
                
            </p>
        </div>
    </div>
    <div class="menu-item">
        <img src="./images/kekiklim.png" alt="">
        <div class="item-content">
            <h4>Kekiklim <span> 30 CM Pizza 75.00 ₺</span></h4>
            <p>
                Kekiklim
                İçindekiler:Domates sosu, Mozeralla, Kekik, Parmesan, Pesto Sosu ve Domates

                <p>Bir yiyenin bir daha isteyeceği Kekiklim. Kekiğinin Kokusu ve enfes tadı sizleri zor durumda bırakacak.Kekiklim karşınızda.</p>
                
            </p>
        </div>
        </div>
        <div class="menu-item">
            <img src="./images/sucuksever.jpg" alt="">
            <div class="item-content">
                <h4>Sucuk Sever  Küçük Boy <span> 70.00 ₺</span></h4>
                <h4>Sucuk Sever  Orta Boy  <span>80.00 ₺</span></h4>
                <h4>Sucuk Sever  Büyük Boy <span> 90.00 ₺</span></h4>
                <p>
                    SUCUK SEVER
                    İçindekiler: Domates sosu, Mozeralla, Bol sucuk
                    <p>Sucuklu Pizza</p>
                    
                </p>
            </div>
            </div>
            <div class="menu-item">
                <img src="./images/jamspecial.jpg" alt="">
            <div class="item-content">
            <h4>Jam Special  Küçük Boy <span> 75.00 ₺</span></h4>
            <h4>Jam Special  Orta Boy  <span>85.00 ₺</span></h4>
            <h4>Jam Special Büyük Boy <span> 95.00 ₺</span></h4>
                <p>
                    Jam Special
                    İçindekiler: Domates sosu, Mozeralla, Bol sucuk
                    <p>Jam Special Pizza</p>
                    
                </p>
            </div>
            </div>
            <div class="menu-item">
                <img src="./images/milano.jpg" alt="">
            <div class="item-content">
            <h4>Milano  Küçük Boy <span> 70.00 ₺</span></h4>
            <h4>Milano  Orta Boy  <span>80.00 ₺</span></h4>
            <h4>Milano  Büyük Boy <span> 90.00 ₺</span></h4>
                <p>
                    Milano
                    İçindekiler: Domates sosu, Mozeralla, Bol sucuk
                    <p>Milano Pizza</p>
                    
                </p>
            </div>
            </div>
            <div class="menu-item">
                <img src="./images/barbekü.jpg" alt="">
            <div class="item-content">
            <h4>BBQ TAVUK Küçük Boy <span> 70.00 ₺</span></h4>
            <h4>BBQ TAVUK Tavuk Orta Boy  <span>80.00 ₺</span></h4>
            <h4>BBQ TAVUK Tavuk Büyük Boy <span> 90.00 ₺</span></h4>
                <p>
                    Barbekü Soslu Tavuk
                    İçindekiler: Domates sosu, Mozeralla, Bol sucuk
                    <p>Barbekü Soslu Tavuk Pizza</p>
                    
                </p>
            </div>
            </div>
            <div class="menu-item">
                <img src="./images/sucuksever.jpg" alt="">
            <div class="item-content">
            <h4>Şampiyon Küçük Boy <span> 70.00 ₺</span></h4>
            <h4>Şampiyon  Orta Boy  <span>80.00 ₺</span></h4>
            <h4>Şampiyon  Büyük Boy <span> 90.00 ₺</span></h4>
                <p>
                    Şampiyon
                    İçindekiler: Domates sosu, Mozeralla, Bol sucuk
                    <p>Şampiyon Pizza</p>
                    
                </p>
            </div>
            </div>
            <div class="menu-item">
                <img src="./images/pastırma.jpg" alt="">
            <div class="item-content">
            <h4>Anadolu Küçük Boy <span> 70.00 ₺</span></h4>
            <h4>Anadolu  Orta Boy  <span>80.00 ₺</span></h4>
            <h4>Anadolu  Büyük Boy <span> 90.00 ₺</span></h4>
                <p>
                    Anadolu
                    İçindekiler: Domates sosu, Mozeralla, Bol sucuk
                    <p>Anadolu Pizza</p>
                    
                </p>
            </div>
            </div>
            <div class="menu-item">
                <img src="./images/ananas.jpg" alt="">
            <div class="item-content">
            <h4>Hawaii Küçük Boy <span> 70.00 ₺</span></h4>
            <h4>Hawaii  Orta Boy  <span>80.00 ₺</span></h4>
            <h4>Hawaii  Büyük Boy <span> 90.00 ₺</span></h4>
                <p>
                    Hawaii
                    İçindekiler: Domates sosu, Mozeralla, Bol sucuk
                    <p>Hawaii</p>
                    
                </p>
                </div>
                </div>
            
            
            
            
</div>`;

contentContainer.appendChild(menu);
})();

export { renderMenuPage };

